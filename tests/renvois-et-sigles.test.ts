/**
 * Testeurs naïfs du 2026-11-14 (RECETTE §15.8) : trois testeurs sur trois ont cherché un calculateur
 * « above » alors qu'il était en dessous (et l'inverse), et ont buté sur des sigles jamais traduits
 * (CRCST, CSPDT, HSPA, CBSPD, CE, SPD…) dès le premier écran.
 *
 * 1. Aucun chapeau (intro) ne dit « above » ni « below » : il pointe vers l'outil sans direction.
 * 2. Sur chaque page construite (dist/), une phrase qui parle d'un calculateur, d'un quiz ou du sélecteur
 *    avec « above » doit avoir un outil avant elle, avec « below » un outil après elle.
 * 3. Sur chaque page construite, la première apparition d'un sigle après le H1 (hors outils) a son nom
 *    en clair avant elle ou à moins de 200 caractères après ; SP ne s'emploie plus du tout.
 * Les contrôles 2 et 3 lisent dist/ : `npm run check` construit le site avant de lancer vitest.
 */
import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { PAGES } from '../src/lib/guides';

const DIR = /\b(above|below)\b/i;

describe('introductions without above or below', () => {
  for (const p of PAGES) it(p.id, () => { expect(p.en.intro.match(DIR)?.[0], p.en.intro).toBeUndefined(); });
});

const DIST = join(process.cwd(), 'dist');
const pages: string[] = [];
const walk = (d: string) => { for (const f of readdirSync(d)) { const x = join(d, f); if (statSync(x).isDirectory()) walk(x); else if (f === 'index.html') pages.push(x); } };
if (existsSync(DIST)) walk(DIST);

/**
 * Text the reader reads, from the H1 to the end of the page's own content (before "Keep going", the
 * list of official documents, whose titles are quoted as published, and the footer); each tool
 * (React island) replaced by ⟦TOOL⟧.
 */
function textOf(html: string): string | null {
  if (/<meta name="robots" content="noindex/.test(html)) return null;
  const i = html.indexOf('</h1>');
  if (i < 0) return null;
  const ends = ['>Keep going<', '>Official texts and documents this page', '<footer'].map((m) => html.indexOf(m, i)).filter((x) => x > 0);
  return html.slice(i + 5, ends.length ? Math.min(...ends) : undefined)
    .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1>/g, ' ')
    .replace(/<astro-island\b[\s\S]*?<\/astro-island>/g, ' ⟦TOOL⟧. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;| | /g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&[a-z#0-9]+;/g, ' ')
    .replace(/\s+/g, ' ');
}

const TOOL_WORD = /\b(calculator|finder|quiz|timer|tool)s?\b/i;

describe.skipIf(!pages.length)('positional references match the real order of the page (dist)', () => {
  for (const f of pages) {
    const t = textOf(readFileSync(f, 'utf8'));
    if (!t) continue;
    it(f.slice(DIST.length) || '/', () => {
      const wrong: string[] = [];
      let pos = 0;
      for (const s of t.split(/(?<=[.!?])\s+/)) {
        const at = t.indexOf(s, pos); pos = at + s.length;
        const m = s.match(DIR);
        if (!m || !TOOL_WORD.test(s) || s.includes('⟦TOOL⟧')) continue;
        const before = t.slice(0, at).includes('⟦TOOL⟧'), after = t.slice(at + s.length).includes('⟦TOOL⟧');
        if (m[1].toLowerCase() === 'above' ? !before : !after) wrong.push(s.trim());
      }
      expect(wrong).toEqual([]);
    });
  }
});

/** Sigle → nom en clair attendu près de sa première apparition. `null` : sigle à ne plus employer. */
const ACRONYMS: Record<string, RegExp | null> = {
  CRCST: /Certified Registered Central Service Technician/i,
  CSPDT: /Certified Sterile Processing and Distribution Technician/i,
  HSPA: /Healthcare Sterile Processing Association/i,
  CBSPD: /Certification Board for Sterile Processing and Distribution/i,
  CE: /continuing education/i,
  CEU: /continuing education unit/i,
  IAHCSMM: /International Association of Healthcare Central Service Materiel Management/i,
  AAMI: /Association for the Advancement of Medical Instrumentation/i,
  AORN: /Association of periOperative Registered Nurses/i,
  PPE: /personal protective equipment/i,
  PAR: /periodic automatic replenishment/i,
  FIFO: /first in, first out/i,
  HIPAA: /Health Insurance Portability and Accountability Act/i,
  SPD: /sterile processing department/i,
  SP: null,
};

describe.skipIf(!pages.length)('every acronym is spelled out where a page first uses it (dist)', () => {
  for (const f of pages) {
    const t = textOf(readFileSync(f, 'utf8'));
    if (!t) continue;
    it(f.slice(DIST.length) || '/', () => {
      const bad: string[] = [];
      for (const [acr, full] of Object.entries(ACRONYMS)) {
        const m = new RegExp(`\\b${acr}\\b`).exec(t);
        if (!m) continue;
        if (!full) { bad.push(`${acr} used: …${t.slice(Math.max(0, m.index - 60), m.index + 60)}…`); continue; }
        const around = t.slice(0, m.index + acr.length + 200); // spelled out before, or within 200 characters after
        if (!full.test(around)) bad.push(`${acr} not spelled out: …${t.slice(Math.max(0, m.index - 60), m.index + 60)}…`);
      }
      expect(bad).toEqual([]);
    });
  }
});
