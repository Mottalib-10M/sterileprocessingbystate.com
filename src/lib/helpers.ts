/** Writing helpers handed to every page: links, figures read from params-2026.json, tables, bank sizes. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, pct, dateL } from './format-l';
import { BANK } from './banks-build';
import { pool, examOf, domainsOf } from './engine/exam';
import { stateById, STATES, ALL_STATES, passRate, CRCST, CSPDT, addMonths } from './engine/rules';
import P from '../data/params-2026.json';

export type SourceKey = keyof typeof P.sources;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 align-top text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/** Page id of a state's own page. */
export const statePage = (id: string) => (id === 'new-jersey' ? 'new-jersey-sterile-processing-certification' : `${id}-central-service-technician-law`);

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  const src = (k: SourceKey, text: string) => ext(P.sources[k].url, text);
  const num = (n: number, d = 0) => formatNumberL(n, 'en', d);
  const usd = (n: number, d = 0) => money(n, d);
  const pc = (x: number, d = 0) => pct(x, 'en', d);
  const date = (iso: string) => dateL(iso);
  const st = (id: string) => stateById(id)!;
  return {
    lang, a, ext, src, usd, num, pc, P, date,
    /** Link to the page's first calculator (the one under the introduction), never "above" or "below" (testeurs naïfs 2026-11-14). */
    calc1: (text = 'the calculator at the top of this page') => `<a href="#calculator">${text}</a>`,
    /** Link to the page's second calculator (under the summary). */
    calc2: (text = 'the second calculator on this page') => `<a href="#calculator-2">${text}</a>`,
    /** States whose text is in force for today's hires, and the ones still to start (Minnesota from 2028). */
    inForce: STATES.filter((s) => s.status !== 'enacted-future'),
    upcoming: STATES.filter((s) => s.status === 'enacted-future'),
    /** CBSPD exam windows with their status on the build day: the next one first, then later ones, past ones last. */
    windows: () => {
      const today = [new Date().toISOString().slice(0, 10), P.retrieved_at].sort()[1];
      const all = [...(CSPDT.windows2026 as string[][]), ...(CSPDT.windows2027 as string[][])].map(([start, end, deadline]) => ({ start, end, deadline, status: end < today ? 'past' : 'later' }));
      const nxt = all.find((w) => w.status === 'later' && w.deadline >= today) ?? all.find((w) => w.status === 'later');
      if (nxt) nxt.status = 'next';
      const rank = { next: 0, later: 1, past: 2 } as Record<string, number>;
      return all.sort((x, y) => rank[x.status] - rank[y.status] || x.start.localeCompare(y.start));
    },
    /** State texts that set yearly continuing education hours. */
    withCe: STATES.filter((s) => s.ceHours),
    /** Day the statutes and handbooks were read: "November 13, 2026". */
    read: dateL(P.retrieved_at),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
    /** Revision table of a practice page, folded: it gives away answers to the questions at the top of the page
     *  (testeurs naïfs 2026-11-14, 2e tour). Still in the HTML, opened with one tap. */
    revision: (html: string) => `<details class="not-prose my-6 rounded-lg border border-navy-200 px-3 py-2"><summary class="cursor-pointer text-sm font-medium text-accent-700 underline">Revision table: it gives some answers away, so try the questions first</summary>${html}</details>`,
    X: examOf('crcst'), C: CRCST, D: CSPDT,
    domains: domainsOf('crcst'),
    /** Outline table: section, weight, questions out of 125 scored at that weight (rounded), our mock quota. */
    outline: (caption?: string) => table(['CRCST outline section', 'Weight', 'About this many of the 125 scored questions', 'In our 50-question mock'], domainsOf('crcst').map((d) => [`${d.code}. ${d.name}`, pct(d.share), num(d.share * CRCST.scored, 0), d.items]), caption, ['l', 'r', 'r', 'r']),
    cspdtOutline: (caption?: string) => table(['CSPDT content area', 'Share of the exam'], (CSPDT.domains as Array<[string, number]>).map(([n, s]) => [n, pct(s)]), caption, ['l', 'r']),
    count: BANK.length,
    inPool: (d?: string) => pool(BANK, 'crcst', d).length,
    state: st,
    STATES, others: P.otherStates as string[], nStates: ALL_STATES.length,
    /** State law in one line: "Public Health Law § 2824, in force since January 1, 2015". */
    lawLine: (id: string) => `${st(id).citation}, in force since ${dateL(st(id).effective)}`,
    certifyBy: (id: string, hireISO: string) => dateL(addMonths(hireISO, st(id).graceMonths)),
    /** Seven-state summary table. */
    stateTable: (caption?: string) => table(['State', 'Time after hire', 'In force', 'Continuing education a year', 'Official text'], STATES.map((s) => [`<a href="${route(statePage(s.id), lang)}" class="font-semibold text-accent-700 underline">${s.name} →</a>`, `${s.graceMonths} months`, s.status === 'enacted-future' ? `${dateL(s.effective)} (for people hired from ${dateL(s.bitesFrom ?? s.effective)})` : dateL(s.effective), s.ceHours ? `${s.ceHours} hours` : 'no hours set by the rule', `<span class="text-xs text-navy-600">${s.citation}</span>`]), caption, ['l', 'r', 'l', 'r', 'l']),
    pr: (e: 'crcst' | 'cspdt', y: number) => passRate(e, y),
    statsTable: (e: 'crcst' | 'cspdt', caption?: string) => table(['Year', 'Candidates', 'Passed', 'Failed', 'Pass rate'], (P.stats[e].years as number[][]).map(([y, p, f]) => [String(y), p + f, p, f, pct(p / (p + f), 'en', 1)]), caption, ['l', 'r', 'r', 'r', 'r']),
  };
}
export type Helpers = ReturnType<typeof helpers>;
