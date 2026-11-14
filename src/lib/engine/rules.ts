/**
 * Rules engine: state certification deadlines, exam costs, hands-on hours, renewal and recertification
 * arithmetic, all read from params-2026.json (state statutes and rules, HSPA Certification Handbook
 * revised 01/2026, CBSPD technician page and 2026 bulletin). Pure functions with tests in tests/engine.test.ts.
 */
import P from '../../data/params-2026.json';

export type StateRow = (typeof P.states)[number] & { effectiveNote?: string; bitesFrom?: string };
export const STATES = P.states as StateRow[];
export const stateById = (id: string) => STATES.find((s) => s.id === id);
export const stateByName = (name: string) => STATES.find((s) => s.name === name);
/** The 50 states and DC, sorted: the 7 with a text and the others. */
export const ALL_STATES: string[] = [...STATES.map((s) => s.name), ...(P.otherStates as string[])].sort();
export const CRCST = P.exams.crcst;
export const CSPDT = P.exams.cspdt;

const pad = (n: number) => String(n).padStart(2, '0');
const toISO = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
const parse = (iso: string) => new Date(`${iso}T12:00:00Z`);
/** Same day n months later; a day that does not exist in the target month falls back to its last day. */
export function addMonths(iso: string, n: number): string {
  const d = parse(iso);
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + n, day = d.getUTCDate();
  const last = new Date(Date.UTC(y, m + 1, 0, 12)).getUTCDate();
  return toISO(new Date(Date.UTC(y, m, Math.min(day, last), 12)));
}
export function addDays(iso: string, n: number): string { const d = parse(iso); d.setUTCDate(d.getUTCDate() + n); return toISO(d); }
export const lastDayOfMonth = (y: number, m: number) => toISO(new Date(Date.UTC(y, m, 0, 12)));

export type DeadlineStatus = 'no-law' | 'exempt' | 'deadline' | 'past-employment';
export interface DeadlineOut { status: DeadlineStatus; state: StateRow | null; certifyBy: string | null; months: number | null; ceHours: number | null; why: string }
/**
 * When must a technician hired on `hireISO` hold the credential? Uses the state's grace period from the
 * date of hire and its grandfather cut-off (employment on or before the date in the text).
 * New York's grandfather rule (a cumulative year in the four years before 2015) depends on past work,
 * not on the hire date: hires before 2015 get `past-employment` and the condition in words.
 */
export function deadline(stateName: string, hireISO: string): DeadlineOut {
  const st = stateByName(stateName) ?? null;
  if (!st) return { status: 'no-law', state: null, certifyBy: null, months: null, ceHours: null, why: `${stateName} has no state law or rule requiring certification of central service technicians among the texts we found. Employers can still require it.` };
  if (st.grandfatherCutoff && hireISO <= st.grandfatherCutoff) {
    return { status: 'exempt', state: st, certifyBy: null, months: null, ceHours: st.ceHours, why: `${st.grandfather}: the certification requirement does not apply, as long as the employer can document the dates.` };
  }
  if (st.id === 'new-york' && hireISO < st.effective) {
    return { status: 'past-employment', state: st, certifyBy: null, months: null, ceHours: st.ceHours, why: `Qualifies without the credential only with ${st.grandfather.charAt(0).toLowerCase()}${st.grandfather.slice(1)}.` };
  }
  return { status: 'deadline', state: st, certifyBy: addMonths(hireISO, st.graceMonths), months: st.graceMonths, ceHours: st.ceHours, why: `The state law gives ${st.graceMonths} months from the date of hire to obtain ${st.credentials}.` };
}

export interface CostLine { label: string; amount: number; note?: string }
/** First-year cost of certification: exam fees per attempt, optional course, first renewal(s). */
export function examCost(route: 'crcst' | 'cspdt' | 'both', attempts: number, coursePrice: number, renewalYears: number) {
  const a = Math.max(1, Math.round(attempts || 1));
  const y = Math.max(0, Math.round(renewalYears || 0));
  const lines: CostLine[] = [];
  if (route !== 'cspdt') {
    lines.push({ label: `CRCST exam (HSPA)${a > 1 ? ` × ${a}` : ''}`, amount: CRCST.fee * a, note: `${CRCST.fee} per attempt, ${CRCST.feeNonRefundable} of it not refundable` });
    if (y) lines.push({ label: `CRCST renewal × ${y} year${y === 1 ? '' : 's'}`, amount: CRCST.renewal.fee * y, note: 'without the optional membership' });
  }
  if (route !== 'crcst') {
    lines.push({ label: `CSPDT exam (CBSPD)${a > 1 ? ` × ${a}` : ''}`, amount: CSPDT.feeWeb * a, note: 'fee on the CBSPD technician page; the 2026 bulletin says 128' });
    if (y >= CSPDT.certYears) lines.push({ label: 'CSPDT recertification (every 5 years)', amount: CSPDT.recertFee * Math.floor(y / CSPDT.certYears), note: 'fee in the 2026 bulletin' });
  }
  if (coursePrice > 0) lines.push({ label: 'Training course', amount: Math.max(0, coursePrice), note: 'not required by HSPA; one of four CBSPD routes' });
  return { total: lines.reduce((s, l) => s + l.amount, 0), lines, attempts: a, years: y };
}

/** CRCST hands-on hours: hours still owed in each of the five areas and the months needed at a weekly pace. */
export function handsOn(done: number[], hoursPerWeek: number) {
  const areas = CRCST.handsOn.areas as Array<[string, number]>;
  const rows = areas.map(([name, need], i) => ({ name, need, done: Math.max(0, Math.min(need, done[i] ?? 0)), left: Math.max(0, need - Math.max(0, done[i] ?? 0)) }));
  const left = rows.reduce((s, r) => s + r.left, 0);
  const hpw = Math.max(0, hoursPerWeek);
  const weeks = hpw > 0 ? Math.ceil(left / hpw) : null;
  return { rows, left, total: CRCST.handsOn.total, weeks, fitsProvisional: weeks !== null && weeks <= Math.floor((CRCST.handsOn.provisionalMonths * 52) / 12) };
}

/** Provisional CRCST: the date the 400 hours must reach HSPA, with or without the one-time extension. */
export function provisional(passISO: string, extension: boolean) {
  const base = addMonths(passISO, CRCST.handsOn.provisionalMonths);
  return { due: extension ? addMonths(base, CRCST.handsOn.extensionMonths) : base, base, extended: extension };
}

/**
 * CRCST renewal: due by the last day of the anniversary month, six-week grace with the credential suspended.
 * The next due date is the first anniversary deadline on or after `nowISO` (testeurs naïfs 2026-11-14:
 * a certification of September 2025 showed "due September 30, 2026" in November 2026, a date already past).
 */
export function crcstRenewal(certMonth: number, certYear: number, nowISO: string) {
  const m = Math.min(12, Math.max(1, Math.round(certMonth)));
  let y = Math.max(certYear + 1, Number(nowISO.slice(0, 4)));
  if (lastDayOfMonth(y, m) < nowISO) y += 1;
  const due = lastDayOfMonth(y, m);
  const grace = addDays(due, CRCST.renewal.graceWeeks * 7);
  return { due, grace, ce: CRCST.renewal.ceHours, fee: CRCST.renewal.fee, feeMember: CRCST.renewal.feeWithMembership, year: y };
}

/** CBSPD recertification points over five years: work points capped per year and in total, plus CE points. */
export function cbspdPoints(fullTimeYears: number, partTimeYears: number, perDiemYears: number, cePoints: number) {
  const w = CSPDT.workPoints;
  const ft = Math.max(0, fullTimeYears), pt = Math.max(0, partTimeYears), pd = Math.max(0, perDiemYears);
  const work = Math.min(w.maxTotal, ft * w.fullTime + pt * w.partTime + pd * w.perDiem);
  const ce = Math.max(0, cePoints);
  const total = work + ce;
  return { work, ce, total, need: CSPDT.recertPoints, left: Math.max(0, CSPDT.recertPoints - total), capped: ft * w.fullTime + pt * w.partTime + pd * w.perDiem > w.maxTotal, overYears: ft + pt + pd > CSPDT.certYears };
}

/** Next CBSPD exam window on or after a date, with its application deadline (windows read on the CBSPD page). */
export function nextWindow(fromISO: string) {
  const all = [...(CSPDT.windows2026 as string[][]), ...(CSPDT.windows2027 as string[][])];
  const w = all.find(([, , deadline]) => deadline >= fromISO) ?? null;
  return w ? { start: w[0], end: w[1], deadline: w[2], known: true } : { start: null, end: null, deadline: null, known: false };
}

/** CRCST retake: earliest new attempt six weeks after the failed one, full fee again. */
export function crcstRetake(failISO: string, failedAttempts: number) {
  const n = Math.max(1, Math.round(failedAttempts || 1));
  return { earliest: addDays(failISO, CRCST.retakeWaitWeeks * 7), fee: CRCST.feeRetake, spent: CRCST.fee * (n + 1), attempts: n + 1 };
}

/** Pass rates by year: CRCST from HSPA statistics, CSPDT from CBSPD statistics. */
export function passRate(exam: 'crcst' | 'cspdt', year: number) {
  const rows = P.stats[exam].years as number[][];
  const r = rows.find((x) => x[0] === year) ?? rows[rows.length - 1];
  return { year: r[0], pass: r[1], fail: r[2], total: r[1] + r[2], rate: r[1] / (r[1] + r[2]) };
}
export const statYears = (exam: 'crcst' | 'cspdt') => (P.stats[exam].years as number[][]).map((r) => r[0]);

/** Minutes per question at the official pace (both exams: 150 questions in 180 minutes). */
export const pace = (questions: number) => Math.round((CRCST.minutes / CRCST.items) * Math.max(0, questions) * 10) / 10;
