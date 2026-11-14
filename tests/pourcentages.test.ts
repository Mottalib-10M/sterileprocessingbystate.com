/**
 * Testeurs naïfs du 2026-11-14, 2e tour : trois testeurs sur trois ont lu « Study target: 8 of 10 (75%) »
 * sur les pages de questions, alors que 8 sur 10 font 80 %. Cause : le pourcentage affiché était la cible
 * brute (0,75) et non le rapport des deux nombres affichés (8 = 0,75 × 10 arrondi au-dessus).
 *
 * Ce test lit chaque page construite (dist/, HTML rendu par le serveur, outils compris) et vérifie que
 * toute expression « N of M (P%) » affiche bien P = arrondi(100 × N / M).
 * `npm run check` construit le site avant de lancer vitest.
 */
import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { targetCount } from '../src/lib/engine/exam';

const DIST = join(process.cwd(), 'dist');
const pages: string[] = [];
const walk = (d: string) => { for (const f of readdirSync(d)) { const x = join(d, f); if (statSync(x).isDirectory()) walk(x); else if (f.endsWith('.html')) pages.push(x); } };
if (existsSync(DIST)) walk(DIST);

const plain = (html: string) => html
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;| | /g, ' ')
  .replace(/\s+/g, ' ');

const RATIO = /\b(\d+(?:\.\d+)?) of (\d+(?:\.\d+)?) \((\d+(?:\.\d+)?) ?%\)/g;

export function wrongRatios(text: string): string[] {
  const bad: string[] = [];
  for (const m of text.matchAll(RATIO)) {
    const n = Number(m[1]), d = Number(m[2]), p = Number(m[3]);
    if (!d) continue;
    const decimals = (m[3].split('.')[1] ?? '').length;
    const expected = Number(((100 * n) / d).toFixed(decimals));
    if (Math.abs(expected - p) > 1e-9) bad.push(`${m[0]} (expected ${expected}%)`);
  }
  return bad;
}

describe('the ratio check itself', () => {
  it('flags 8 of 10 (75%) and accepts 8 of 10 (80%)', () => {
    expect(wrongRatios('Study target: 8 of 10 (75%)')).toHaveLength(1);
    expect(wrongRatios('Study target: 8 of 10 (80%)')).toHaveLength(0);
    expect(wrongRatios('38 of 50 (76%)')).toHaveLength(0);
  });
  it('the study target count on 10 and 50 questions', () => {
    expect(targetCount('crcst', 10)).toBe(8);
    expect(targetCount('crcst', 50)).toBe(38);
  });
});

describe.skipIf(!pages.length)('every "N of M (P%)" shown in dist is arithmetically right', () => {
  it('at least one page shows a study target ratio', () => {
    expect(pages.some((f) => /Study target: \d+ of \d+ \(\d+%\)/.test(plain(readFileSync(f, 'utf8'))))).toBe(true);
  });
  for (const f of pages) {
    it(f.slice(DIST.length) || '/', () => {
      expect(wrongRatios(plain(readFileSync(f, 'utf8')))).toEqual([]);
    });
  }
});
