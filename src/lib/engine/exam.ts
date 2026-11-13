/**
 * Exam engine: outline domains and weights read from params-2026.json, reproducible draws (same seed,
 * same set), practice sets by domain or by topic, full mocks that follow the published count of scored
 * questions per domain, and marking. Pure functions, no network.
 */
import P from '../../data/params-2026.json';

export type ExamId = 'crcst';
export const EXAM_IDS: ExamId[] = ['crcst'];
/** Outline section with its official weight; `items` = its quota in this site's mock (largest remainders). */
export interface Domain { code: string; name: string; short: string; share: number; items: number }
export interface Question {
  id: string; exam: ExamId; domain: string;
  /** Outline section and sub-area the question trains, e.g. "4.IV" (CRCST content outline, 2023). */
  ref: string;
  topics?: string[];
  q: string; options: string[]; answer: number; explain: string;
}
type Raw = Omit<Domain, 'items'>;
export interface ExamParams {
  label: string; name: string; owner: string; ownerShort: string; vendor: string; items: number; scored: number; unscored: number; minutes: number; options: number;
  editionLabel: string; scoring: string; passText: string; target: number; mockItems: number;
  fee: number; feeNonRefundable: number; feeRetake: number; retakeWaitWeeks: number; windowDays: number; scheduleAheadDays: number; processingWeeks: string; refundDays: number;
  handsOn: { total: number; areas: Array<[string, number]>; provisionalMonths: number; extensionMonths: number };
  renewal: { everyYears: number; ceHours: number; fee: number; feeWithMembership: number; graceWeeks: number };
  domains: Raw[];
}
const RAW = P.exams as unknown as Record<ExamId, ExamParams>;
/** Mock quotas: the official weights applied to this site's mock length, largest remainders first. */
function quotas(ds: Raw[], n: number): Domain[] {
  const raw = ds.map((d) => d.share * n);
  const base = raw.map((x) => Math.floor(x + 1e-9));
  let left = n - base.reduce((a, b) => a + b, 0);
  const order = raw.map((x, i) => [x - Math.floor(x + 1e-9), i] as const).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  for (const [, i] of order) { if (left <= 0) break; base[i]++; left--; }
  return ds.map((d, i) => ({ ...d, items: base[i] }));
}
const DOMAINS: Record<ExamId, Domain[]> = { crcst: quotas(RAW.crcst.domains, RAW.crcst.mockItems) };
/** Exam parameters; `scored` here is the length of this site's mock, the real counts stay in realItems/realScored. */
export const examOf = (e: ExamId) => ({ ...RAW[e], realItems: RAW[e].items, realScored: RAW[e].scored, scored: RAW[e].mockItems, items: RAW[e].mockItems, unscored: 0 });
export const domainsOf = (e: ExamId) => DOMAINS[e];
export const LABEL = (e: ExamId) => RAW[e].label;

/** mulberry32: same seed, same draw (shared link, hydration). */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function shuffle<T>(xs: T[], r: () => number): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/** Stable seed from a text (page id): the build and the browser draw the same first set. */
export function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}

export const pool = (bank: Question[], exam: ExamId, domain?: string | null, topic?: string | null) =>
  bank.filter((q) => q.exam === exam && (!domain || q.domain === domain) && (!topic || (q.topics ?? []).includes(topic)));

/** Minutes for a set of n questions: the official time prorated on the official total of questions (180 min for 150). */
export const minutesFor = (e: ExamId, n: number) => { const x = RAW[e]; return Math.max(1, Math.round((x.minutes * n) / x.items)); };
/** Correct answers to reach the study target of this site on n questions. */
export const targetCount = (e: ExamId, n: number) => Math.ceil(examOf(e).target * n - 1e-9);

/**
 * Full mock: the published number of SCORED questions in each domain (our 50-question CRCST mock), shuffled.
 * With `withUnscored`, 10 more questions are added and marked unscored, as on the real form where
 * 10 pilot questions are mixed in without being told apart.
 */
export function buildMock(bank: Question[], exam: ExamId, seed: number, withUnscored = false): { qs: Question[]; unscored: Set<string> } {
  const r = rng(seed);
  const used = new Set<string>();
  const out: Question[] = [];
  for (const d of domainsOf(exam)) {
    const p = shuffle(pool(bank, exam, d.code), r).filter((q) => !used.has(q.id)).slice(0, d.items);
    p.forEach((q) => used.add(q.id)); out.push(...p);
  }
  const x = examOf(exam);
  const short = x.scored - out.length;
  if (short > 0) out.push(...shuffle(pool(bank, exam).filter((q) => !used.has(q.id)), r).slice(0, short).map((q) => { used.add(q.id); return q; }));
  const unscored = new Set<string>();
  if (withUnscored) {
    const extra = shuffle(pool(bank, exam).filter((q) => !used.has(q.id)), r).slice(0, x.unscored);
    extra.forEach((q) => unscored.add(q.id)); out.push(...extra);
  }
  return { qs: shuffle(out, r), unscored };
}
/** Practice set: n questions of one domain, one topic, or the whole exam; same seed, same set. */
export function buildPractice(bank: Question[], exam: ExamId, domain: string | null, seed: number, n = 10, topic: string | null = null): Question[] {
  const own = pool(bank, exam, domain, topic);
  return shuffle(own, rng(seed)).slice(0, Math.min(n, own.length));
}

export interface Score { right: number; total: number; target: number; reached: boolean; byDomain: Array<{ code: string; short: string; n: number; r: number }> }
export function score(exam: ExamId, qs: Question[], answers: Array<number | null>, unscored: Set<string> = new Set()): Score {
  const counted = qs.map((q, i) => [q, answers[i]] as const).filter(([q]) => !unscored.has(q.id));
  const right = counted.reduce((s, [q, a]) => s + (a === q.answer ? 1 : 0), 0);
  const target = targetCount(exam, counted.length);
  const byDomain = domainsOf(exam).map((d) => {
    const own = counted.filter(([q]) => q.domain === d.code);
    return { code: d.code, short: d.short, n: own.length, r: own.filter(([q, a]) => a === q.answer).length };
  }).filter((d) => d.n > 0);
  return { right, total: counted.length, target, reached: right >= target, byDomain };
}

/** Binomial tail: chance of at least `need` right out of `n` when each answer is right with probability p. */
export function atLeast(n: number, need: number, p: number) {
  if (need <= 0) return 1;
  if (need > n) return 0;
  if (p <= 0) return 0; if (p >= 1) return 1;
  const lf = (k: number) => { let s = 0; for (let i = 2; i <= k; i++) s += Math.log(i); return s; };
  let s = 0;
  for (let k = need; k <= n; k++) s += Math.exp(lf(n) - lf(k) - lf(n - k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  return Math.min(1, Math.max(0, s));
}
/** Questions of each domain in a set of n, in proportion to the outline (largest remainders). */
export function splitByDomain(exam: ExamId, n: number): Array<{ code: string; short: string; n: number }> {
  const ds = domainsOf(exam);
  const raw = ds.map((d) => (d.items / examOf(exam).scored) * n);
  const base = raw.map((x) => Math.floor(x));
  let left = n - base.reduce((a, b) => a + b, 0);
  const order = raw.map((x, i) => [x - Math.floor(x), i] as const).sort((a, b) => b[0] - a[0]);
  for (const [, i] of order) { if (left <= 0) break; base[i]++; left--; }
  return ds.map((d, i) => ({ code: d.code, short: d.short, n: base[i] }));
}
