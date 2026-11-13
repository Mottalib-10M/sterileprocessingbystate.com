import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { BANK } from '../src/lib/banks-build';
import { buildMock, buildPractice, pool, score, splitByDomain, targetCount, examOf, domainsOf, minutesFor } from '../src/lib/engine/exam';
import { deadline, examCost, handsOn, provisional, crcstRenewal, cbspdPoints, nextWindow, crcstRetake, passRate, pace, addMonths, ALL_STATES, STATES } from '../src/lib/engine/rules';
import { getSpec, SPEC_IDS, stateIdx } from '../src/lib/mini-specs';

describe('bank', () => {
  it('passes the linter', () => { execFileSync('node', ['scripts/lint-bank.mjs'], { stdio: 'pipe' }); });
  it('the CRCST mock has 50 questions in the outline quotas', () => {
    const m = buildMock(BANK, 'crcst', 42).qs;
    expect(m).toHaveLength(50);
    expect(domainsOf('crcst').map((d) => d.items)).toEqual([8, 11, 11, 10, 4, 2, 4]);
    expect(new Set(m.map((q) => q.id)).size).toBe(m.length);
    for (const d of domainsOf('crcst')) {
      expect(pool(BANK, 'crcst', d.code).length, d.code).toBeGreaterThanOrEqual(d.items);
      expect(m.filter((q) => q.domain === d.code).length, d.code).toBe(d.items);
    }
  });
  it('draws are reproducible', () => {
    expect(buildMock(BANK, 'crcst', 7).qs.map((q) => q.id)).toEqual(buildMock(BANK, 'crcst', 7).qs.map((q) => q.id));
    expect(buildPractice(BANK, 'crcst', '2', 3, 10)).toHaveLength(10);
  });
});
describe('marking and pace', () => {
  it('75% target of 50 questions is 38', () => { expect(targetCount('crcst', 50)).toBe(38); });
  it('50 questions get 60 minutes at the real pace', () => { expect(minutesFor('crcst', 50)).toBe(60); expect(pace(150)).toBe(180); });
  it('score counts right answers', () => {
    const qs = buildPractice(BANK, 'crcst', null, 1, 4);
    const s = score('crcst', qs, qs.map((q, i) => (i < 3 ? q.answer : (q.answer + 1) % 4)));
    expect(s.right).toBe(3); expect(s.total).toBe(4);
  });
  it('split of 125 follows the weights', () => { expect(splitByDomain('crcst', 125).reduce((a, d) => a + d.n, 0)).toBe(125); });
  it('mock params are the real format', () => { expect(examOf('crcst').realItems).toBe(150); expect(examOf('crcst').realScored).toBe(125); });
});
describe('rules', () => {
  it('51 jurisdictions, 7 with a text', () => { expect(ALL_STATES).toHaveLength(51); expect(STATES).toHaveLength(7); expect(stateIdx('Pennsylvania')).toBe(39); });
  it('deadlines after hire', () => {
    expect(deadline('New York', '2027-03-01').certifyBy).toBe('2028-09-01');
    expect(deadline('New Jersey', '2026-09-01').certifyBy).toBe('2029-09-01');
    expect(deadline('Pennsylvania', '2020-12-01').status).toBe('exempt');
    expect(deadline('Pennsylvania', '2021-01-15').certifyBy).toBe('2022-07-15');
    expect(deadline('Minnesota', '2027-12-31').status).toBe('exempt');
    expect(deadline('Minnesota', '2028-01-01').certifyBy).toBe('2030-01-01');
    expect(deadline('New York', '2014-06-01').status).toBe('past-employment');
    expect(deadline('Texas', '2027-01-01').status).toBe('no-law');
  });
  it('month arithmetic falls back to the last day', () => { expect(addMonths('2027-08-31', 6)).toBe('2028-02-29'); expect(addMonths('2027-03-31', 6)).toBe('2027-09-30'); });
  it('costs', () => {
    expect(examCost('crcst', 1, 0, 0).total).toBe(140);
    expect(examCost('crcst', 2, 0, 1).total).toBe(330);
    expect(examCost('cspdt', 1, 0, 5).total).toBe(260);
    expect(examCost('both', 1, 500, 0).total).toBe(775);
  });
  it('hands-on hours', () => {
    const r = handsOn([120, 120, 120, 24, 16], 20);
    expect(r.left).toBe(0);
    expect(handsOn([0, 0, 0, 0, 0], 40).weeks).toBe(10);
  });
  it('provisional and renewal dates', () => {
    expect(provisional('2027-03-31', false).due).toBe('2027-09-30');
    expect(provisional('2027-03-31', true).due).toBe('2027-11-30');
    const r = crcstRenewal(3, 2025, 2026);
    expect(r.due).toBe('2026-03-31'); expect(r.grace).toBe('2026-05-12');
  });
  it('CBSPD points are capped at 50 for work', () => {
    expect(cbspdPoints(5, 0, 0, 30).total).toBe(80);
    expect(cbspdPoints(6, 0, 0, 0).work).toBe(50);
  });
  it('next CBSPD window', () => {
    expect(nextWindow('2026-11-13').start).toBe('2027-02-01');
    expect(nextWindow('2026-04-01').deadline).toBe('2026-04-28');
    expect(nextWindow('2027-06-01').known).toBe(false);
  });
  it('retake after six weeks', () => { expect(crcstRetake('2026-11-01', 1).earliest).toBe('2026-12-13'); });
  it('pass rates from the counts', () => { expect(passRate('crcst', 2025).total).toBe(15369); expect(Math.round(passRate('crcst', 2025).rate * 1000)).toBe(656); });
});
describe('calculators', () => {
  it('every spec runs on its defaults', () => {
    for (const k of SPEC_IDS) {
      const s = getSpec(k)!;
      const v: Record<string, number> = {};
      for (const i of s.inputs) v[i.id] = i.def;
      const out = s.run(v);
      expect(out.head[1], k).toBeTruthy();
      expect(JSON.stringify(out), k).not.toMatch(/undefined|NaN/);
    }
  });
});
