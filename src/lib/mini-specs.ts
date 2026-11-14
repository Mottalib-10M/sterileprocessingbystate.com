/**
 * Calculators of the pages (RECETTE §9.3): one subject = one calculation, read from params-2026.json
 * through the engines (rules.ts, exam.ts), never a second formula in a page.
 */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import { money, formatNumberL, pct, dateL } from './format-l';
import { splitByDomain } from './engine/exam';
import { ALL_STATES, CRCST, CSPDT, deadline, examCost, handsOn, provisional, crcstRenewal, cbspdPoints, nextWindow, crcstRetake, passRate, statYears, pace, stateByName } from './engine/rules';

const n0 = (v: number, d = 0) => formatNumberL(v, 'en', d);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const plural = (k: number, w: string) => `${n0(k)} ${w}${k === 1 ? '' : 's'}`;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_OPT = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
const yearOpt = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => ({ value: String(a + i), label: String(a + i) }));
const iso = (y: number, m: number, d = 1) => `${Math.round(y)}-${String(clamp(Math.round(m), 1, 12)).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const mName = (m: number | undefined) => MONTHS[clamp(Math.round(m ?? 1), 1, 12) - 1];
/** State select: the 50 states and DC in alphabetical order (value = position + 1). */
export const STATE_OPT = ALL_STATES.map((s, i) => ({ value: String(i + 1), label: s }));
export const stateIdx = (name: string) => ALL_STATES.indexOf(name) + 1;
const stateOf = (v: number | undefined) => ALL_STATES[clamp(Math.round(v ?? 1), 1, ALL_STATES.length) - 1];

const SPECS: Record<string, () => MiniSpec> = {
  deadline: () => ({
    title: 'Your certification deadline in your state', cta: 'All state rules side by side',
    exemple: (v) => `Example for a technician hired in ${mName(v.m)} ${v.y} in ${stateOf(v.st)}`,
    inputs: [
      { id: 'st', label: 'State where you work', def: stateIdx('New York'), options: STATE_OPT },
      { id: 'm', label: 'Month you were hired', def: 1, options: MONTH_OPT },
      { id: 'y', label: 'Year you were hired', def: 2027, options: yearOpt(2012, 2030) },
    ],
    run: (v) => {
      const name = stateOf(v.st);
      const d = deadline(name, iso(v.y ?? 2027, v.m ?? 1, 1));
      const st = d.state;
      const head: [string, string] = d.status === 'deadline' ? ['Hold the credential by', dateL(d.certifyBy!)] : d.status === 'exempt' ? ['Certification required', 'No, exempt by date of hire'] : d.status === 'past-employment' ? ['Certification required', 'Only without past experience'] : ['State certification law', 'None found'];
      const rows: Array<[string, string]> = st ? [
        ['Text', `${st.citation} (${st.instrument.toLowerCase()})`],
        ['In force since', `${dateL(st.effective)}${st.effectiveNote ? ', last amendment' : ''}`],
        ['Time allowed after hire', `${st.graceMonths} months`],
        ['Continuing education', st.ceHours ? `${st.ceHours} hours a year` : 'not set by the rule'],
      ] : [['States with a text', '7 of 50: CT, DE, MN, NJ, NY, PA, TN'], ['What applies instead', 'your employer’s job requirements']];
      return {
        head, rows,
        alert: st?.id === 'minnesota' && d.status === 'exempt' ? 'Minnesota’s duty starts with hires from January 1, 2028' : undefined,
        go: st ? [`${st.name} rules in full`, `/en/${st.id === 'new-jersey' ? 'new-jersey-sterile-processing-certification' : `${st.id}-central-service-technician-law`}/`] : ['States without a law', '/en/states-without-a-certification-law/'],
        note: `${d.why}${d.status === 'deadline' ? ' We count from the 1st of your hiring month: if you started on the 15th, your deadline is 14 days later.' : ''}`,
      };
    },
  }),
  cost: () => ({
    title: 'What certification costs you', cta: 'Full cost breakdown',
    exemple: (v) => `Example for the ${['', 'CRCST', 'CSPDT', 'CRCST and CSPDT'][clamp(Math.round(v.r ?? 1), 1, 3)]} exam, ${plural(Math.round(v.a ?? 1), 'attempt')}, no paid course${Math.round(v.yr ?? 0) > 0 ? `, plus ${plural(Math.round(v.yr ?? 0), 'year')} of renewal` : ''}`,
    inputs: [
      { id: 'r', label: 'Certification you aim for', def: 1, options: [{ value: '1', label: 'CRCST (HSPA)' }, { value: '2', label: 'CSPDT (CBSPD)' }, { value: '3', label: 'Both' }] },
      { id: 'a', label: 'Exam attempts you budget for', def: 1, max: 5 },
      { id: 'c', label: 'Price of a training course', def: 0, unit: '$', max: 10000, avance: true, help: 'Neither exam requires one' },
      { id: 'yr', label: 'Years of renewal to include', def: 1, max: 10 },
    ],
    run: (v) => {
      const route = (['crcst', 'cspdt', 'both'] as const)[clamp(Math.round(v.r ?? 1), 1, 3) - 1];
      const c = examCost(route, v.a ?? 1, v.c ?? 0, v.yr ?? 0);
      // Testeurs naïfs 2026-11-14, 2e tour : « Total to budget $240 » lu comme le prix de l'examen ($140) ;
      // le total dit ce qu'il contient et la ligne « Exam fees only » vient en premier.
      const examLines = c.lines.filter((l) => / exam /.test(l.label + ' '));
      const exams = examLines.reduce((x, l) => x + l.amount, 0);
      const more = c.total > exams;
      // 3e tour : « Exam fees only $140 » suivi de « CRCST exam (HSPA) $140 » lu comme un double compte ;
      // la ligne de sous-total ne paraît que s'il y a deux examens à additionner.
      const subtotal = more && examLines.length > 1;
      return {
        head: [more ? `Total: exam${route === "both" ? "s" : ""}${c.years ? ` and ${plural(c.years, 'year')} of renewal` : ''}${v.c ? ', course' : ''}` : 'Total to budget', money(c.total)],
        rows: [...(subtotal ? [['Both exams together', money(exams)] as [string, string]] : []), ...c.lines.map((l) => [l.label, money(l.amount)] as [string, string])],
        alert: route !== 'crcst' ? `CBSPD fee: ${money(CSPDT.feeWeb)} on its exam page, ${money(CSPDT.feeBulletin)} in its 2026 bulletin` : undefined,
        note: `Fees read on ${dateL(P.retrieved_at)} in the HSPA handbook and on the CBSPD pages. Travel, books and lost work hours are not counted.`,
      };
    },
  }),
  hours: () => ({
    title: 'Your 400 hands-on hours for the CRCST', cta: 'CRCST requirements',
    exemple: (v) => `Example for ${n0((v.d1 ?? 0) + (v.d2 ?? 0) + (v.d3 ?? 0) + (v.d4 ?? 0) + (v.d5 ?? 0))} hours already logged and ${n0(v.w ?? 0)} hours a week`,
    inputs: [
      { id: 'w', label: 'Hours a week in a sterile processing department', def: 20, unit: 'h', max: 60 },
      { id: 'd1', label: 'Hours already logged: decontamination', def: 40, unit: 'h', max: 400 },
      { id: 'd2', label: 'Hours already logged: preparing and packaging', def: 40, unit: 'h', max: 400 },
      { id: 'd3', label: 'Hours already logged: sterilization and disinfection', def: 20, unit: 'h', max: 400 },
      { id: 'd4', label: 'Hours already logged: storage and distribution', def: 0, unit: 'h', max: 400 },
      { id: 'd5', label: 'Hours already logged: quality assurance', def: 0, unit: 'h', max: 400 },
    ],
    run: (v) => {
      const h = handsOn([v.d1 ?? 0, v.d2 ?? 0, v.d3 ?? 0, v.d4 ?? 0, v.d5 ?? 0], v.w ?? 0);
      return {
        head: ['Hours still to log', `${n0(h.left)} h`],
        rows: [...h.rows.map((r) => [`${r.name} (${r.need} h)`, r.left ? `${n0(r.left)} h left` : 'done'] as [string, string]), ['Weeks at your pace', h.weeks === null ? 'enter your weekly hours' : n0(h.weeks)]],
        alert: h.weeks !== null && !h.fitsProvisional && h.left > 0 ? `More than the ${CRCST.handsOn.provisionalMonths} months a provisional CRCST allows` : undefined,
        note: 'Hours in each area count only up to the area’s minimum; extra hours in one area do not fill another. Breakdown from the HSPA Certification Handbook (revised January 2026).',
      };
    },
  }),
  provisional: () => ({
    title: 'When your provisional CRCST hours are due', cta: 'Provisional certification',
    exemple: (v) => `Example for an exam passed in ${mName(v.m)} ${v.y}${v.x ? ' with the extension' : ''}`,
    inputs: [
      { id: 'm', label: 'Month you passed the exam', def: 1, options: MONTH_OPT },
      { id: 'y', label: 'Year you passed', def: 2027, options: yearOpt(2025, 2029) },
      { id: 'x', label: 'One-time 2-month extension', def: 0, options: [{ value: '0', label: 'No extension' }, { value: '1', label: 'Extension requested in time' }] },
    ],
    run: (v) => {
      const p = provisional(iso(v.y ?? 2027, v.m ?? 1, 1), (v.x ?? 0) === 1);
      return {
        head: ['400 hours must reach HSPA by', dateL(p.due)],
        rows: [['Six months after the exam', dateL(p.base)], ['With the extension', dateL(provisional(iso(v.y ?? 2027, v.m ?? 1, 1), true).due)], ['If the hours are late', 'provisional status is lost and a retake is needed']],
        note: 'Dates use the 1st of the month you passed. Your department manager requests the extension before the provisional status ends, and only if you are working or volunteering in a sterile processing department.',
      };
    },
  }),
  renewal: () => ({
    title: 'Your next CRCST renewal', cta: 'Renewal rules',
    exemple: (v) => `Example for a CRCST earned in ${mName(v.m)} ${v.y}`,
    inputs: [
      { id: 'm', label: 'Month you were certified', def: 3, options: MONTH_OPT },
      { id: 'y', label: 'Year you were certified', def: 2025, options: yearOpt(2015, 2027) },
    ],
    run: (v) => {
      const r = crcstRenewal(v.m ?? 3, v.y ?? 2025, P.retrieved_at);
      const dueYear = Number(r.due.slice(0, 4)), y0 = Math.round(v.y ?? 2025);
      return {
        head: ['Renewal due by', dateL(r.due)],
        // Testeurs naïfs 2026-11-14, 2e tour : « renew each year » mais une date un an plus loin que prévu.
        // 3e tour : l'alerte « already passed » inquiétait ; une ligne neutre dit quelle date est supposée faite.
        rows: [...(dueYear > y0 + 1 ? [['Earlier renewals', `assumed done on time, the last one by the end of ${mName(v.m)} ${dueYear - 1}`] as [string, string]] : []), ['Continuing education credits', `${r.ce} in the year before`], ['Fee', `${money(r.fee)} alone, or ${money(r.feeMember)} with an HSPA membership included`], ['If you miss it: grace period until', dateL(r.grace)]],
        note: `Next due date after ${dateL(P.retrieved_at)}, assuming earlier renewals were made on time. During the ${CRCST.renewal.graceWeeks}-week grace period you are not certified and may not use the title; after it, the exam must be taken again.`,
      };
    },
  }),
  points: () => ({
    title: 'Your CSPDT recertification points (CBSPD)', cta: 'CSPDT recertification (CBSPD)',
    exemple: (v) => `Example for ${n0(v.ft ?? 0)} years full time and ${n0(v.ce ?? 0)} education points`,
    inputs: [
      { id: 'ft', label: 'Years worked full time since certification', def: 5, max: 5, decimals: 1 },
      { id: 'ce', label: 'Education points approved by the CBSPD', def: 30, max: 300, help: 'One point per hour of a course, webinar or session the CBSPD has approved' },
      { id: 'pt', label: 'Years part time (20 hours a week or more)', def: 0, max: 5, decimals: 1, avance: true },
      { id: 'pd', label: 'Years on call, per diem (6 days a month or more)', def: 0, max: 5, decimals: 1, avance: true },
    ],
    run: (v) => {
      const p = cbspdPoints(v.ft ?? 0, v.pt ?? 0, v.pd ?? 0, v.ce ?? 0);
      return {
        head: ['Points toward 100', `${n0(p.total)} of ${p.need}`],
        rows: [['Points from work (50 at most)', n0(p.work)], ['Education points', n0(p.ce)], ['Still needed', p.left ? n0(p.left) : 'none']],
        alert: p.overYears ? 'More than 5 years entered: the cycle lasts 5 years' : p.capped ? 'Work points are capped at 50 for the 5 years' : undefined,
        note: `CBSPD 2026 bulletin: 10 points a year full time, 5 part time, 3 per diem, at most 10 a year; recertification fee ${money(CSPDT.recertFee)} for the next five years.`,
      };
    },
  }),
  window: () => ({
    title: 'Next CSPDT exam window (CBSPD)', cta: 'CSPDT exam dates (CBSPD)',
    exemple: (v) => `Example for an application ready in ${mName(v.m)} ${v.y}`,
    inputs: [
      { id: 'm', label: 'Month you can mail your completed application', def: 12, options: MONTH_OPT },
      { id: 'y', label: 'Year', def: 2026, options: yearOpt(2026, 2027) },
    ],
    run: (v) => {
      const w = nextWindow(iso(v.y ?? 2026, v.m ?? 12, 1));
      return w.known ? {
        head: ['Next exam week', `${dateL(w.start!)} to ${dateL(w.end!)}`],
        rows: [['Mailed application must arrive by', dateL(w.deadline!)], ['Exam fee', `${money(CSPDT.feeWeb)}`], ['Results for a pass', `certificate within ${CSPDT.resultsWeeks} weeks of the window`]],
        note: 'The CBSPD application is printed and mailed, not filed online. Windows after February 2027 were not yet published when we read the page.',
      } : { head: ['Next exam week', 'Not published yet'], rows: [['Last window we read', 'February 1 to 6, 2027']], note: 'The CBSPD posts each year’s windows on its technician exam page.' };
    },
  }),
  retake: () => ({
    title: 'When you can retake the CRCST', cta: 'Retake rules',
    exemple: (v) => `Example for an attempt failed in ${mName(v.m)} ${v.y}`,
    inputs: [
      { id: 'm', label: 'Month of the failed attempt', def: 11, options: MONTH_OPT },
      { id: 'y', label: 'Year', def: 2026, options: yearOpt(2025, 2028) },
      { id: 'f', label: 'Attempts failed so far', def: 1, max: 6 },
    ],
    run: (v) => {
      const r = crcstRetake(iso(v.y ?? 2026, v.m ?? 11, 1), v.f ?? 1);
      return {
        head: ['Earliest retake', dateL(r.earliest)],
        rows: [['Fee for the retake', money(r.fee)], [`Exam fees after ${plural(r.attempts, 'attempt')}`, money(r.spent)], ['Wait required', `${CRCST.retakeWaitWeeks} weeks`]],
        note: 'Counted from the 1st of the month of the failed attempt. The retake application can be sent at once; eligibility opens six weeks after the last exam date.',
      };
    },
  }),
  passrate: () => ({
    title: 'Pass rate of the exam by year', cta: 'Pass rates explained',
    exemple: (v) => `Example for the ${v.e === 2 ? 'CSPDT' : 'CRCST'} in ${v.yr}`,
    inputs: [
      { id: 'e', label: 'Exam', def: 1, options: [{ value: '1', label: 'CRCST (HSPA)' }, { value: '2', label: 'CSPDT (CBSPD)' }] },
      { id: 'yr', label: 'Year', def: 2025, options: yearOpt(2018, 2025) },
    ],
    run: (v) => {
      const e = (v.e ?? 1) === 2 ? 'cspdt' : 'crcst';
      const ys = statYears(e);
      const yr = ys.includes(Math.round(v.yr ?? 2025)) ? Math.round(v.yr ?? 2025) : ys[ys.length - 1];
      const r = passRate(e, yr);
      return {
        head: [`${e.toUpperCase()} pass rate, ${r.year}`, pct(r.rate, 'en', 1)],
        rows: [['Candidates', n0(r.total)], ['Passed / failed', `${n0(r.pass)} / ${n0(r.fail)}`]],
        alert: ys.includes(Math.round(v.yr ?? 2025)) ? undefined : `No ${e.toUpperCase()} figure for ${v.yr}: latest year shown`,
        note: e === 'crcst' ? 'HSPA statistics as of December 31, 2025, all attempts; the rate is our division of passes by candidates.' : 'CBSPD statistics, all candidates of the year; the CBSPD publishes 2020 to 2025.',
      };
    },
  }),
  pace: () => ({
    title: 'Time per question on exam day', cta: 'Exam format',
    exemple: (v) => `Example for ${plural(Math.round(v.q ?? 0), 'question')} left to answer`,
    inputs: [{ id: 'q', label: 'Questions left to answer', def: 150, max: 150 }, { id: 't', label: 'Minutes left on the clock', def: 180, max: 180 }],
    run: (v) => {
      const q = clamp(Math.round(v.q ?? 150), 0, 150), t = clamp(v.t ?? 180, 0, 180);
      const per = q ? t / q : 0;
      return {
        head: ['Minutes per question', q ? n0(per, 2) : 'none left'],
        rows: [['Official pace', `${n0(pace(1), 1)} min per question`], ['Time the official pace needs', `${n0(pace(q))} min`], ['Margin', `${n0(t - pace(q))} min`]],
        alert: q && t < pace(q) ? 'Behind the official pace: skip and flag the hardest questions' : undefined,
        note: 'Both exams give 150 questions in 3 hours, 25 of them unscored and not identified.',
      };
    },
  }),
  ready: () => ({
    title: 'Which exam you can sit now', cta: 'Compare the two certifications',
    exemple: (v) => `Example for ${n0(v.mo ?? 0)} months of sterile processing work and ${n0(v.h ?? 0)} hands-on hours`,
    inputs: [
      { id: 'mo', label: 'Months of full-time sterile processing work', def: 0, max: 120 },
      { id: 'h', label: 'Hands-on hours in a sterile processing department', def: 0, unit: 'h', max: 5000 },
      { id: 'c', label: 'Sterile processing course passed with 70 or more', def: 1, options: [{ value: '1', label: 'Yes' }, { value: '0', label: 'No' }] },
    ],
    run: (v) => {
      const mo = Math.max(0, v.mo ?? 0), h = Math.max(0, v.h ?? 0), c = (v.c ?? 0) === 1;
      const crcst = h >= CRCST.handsOn.total ? 'Yes, full certification' : 'Yes, provisional: 400 hours within 6 months';
      const cspdt = mo >= 12 || c ? 'Yes' : 'Not yet';
      return {
        head: ['You can sit', cspdt === 'Yes' ? 'CRCST or CSPDT' : 'CRCST'],
        rows: [['CRCST (HSPA)', crcst], ['CSPDT (CBSPD)', cspdt === 'Yes' ? `Yes (${mo >= 12 ? '12 months of sterile processing work' : 'course with 70 or more'})` : `Not yet: ${Math.max(0, 12 - mo)} more months or a course`]],
        note: 'The CBSPD also accepts 6 months of allied health work (a health job other than doctor or nurse) plus 6 months in sterile processing, or 12 months selling or servicing sterile processing products. HSPA needs no course, only the 400 hours before or after the exam.',
      };
    },
  }),
  domains: () => ({
    title: 'CRCST questions per section in a set', cta: 'Practice by section',
    exemple: (v) => `Example for a set of ${n0(v.n ?? 0)} questions`,
    inputs: [{ id: 'n', label: 'Questions in your practice set', def: 125, max: 300 }],
    run: (v) => {
      const n = clamp(Math.round(v.n ?? 125), 1, 300);
      const s = splitByDomain('crcst', n);
      return { head: ['Largest sections', 'Decontamination, packaging, sterilization'], rows: s.map((d) => [`${d.code}. ${d.short}`, n0(d.n)] as [string, string]), note: 'Split in proportion to the weights of the CRCST content outline (2023 job task analysis).' };
    },
  }),
};

export function getSpec(kind: string, _lang = 'en'): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown mini spec: ${kind}`);
  return f();
}
export const SPEC_IDS = Object.keys(SPECS);
/** Page each calculator's link goes to (Tool.astro reads it). */
export const CTA_PAGE: Record<string, string> = {
  deadline: 'sterile-processing-certification-by-state', cost: 'sterile-processing-certification-cost', hours: 'crcst-certification', provisional: 'crcst-provisional-certification',
  renewal: 'crcst-renewal', points: 'cbspd-recertification', window: 'cbspd-certification', retake: 'crcst-exam-retake', passrate: 'crcst-pass-rate', pace: 'crcst-exam',
  ready: 'sterile-processing-technician-certification', domains: 'crcst-practice-test',
};
export { stateByName };
