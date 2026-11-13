/**
 * One page = ONE data file in `src/content/pages/<id>.ts` (English, en-US).
 */
import type { Helpers } from './helpers';

/** Section of the site: menus, footer and home lists follow it. */
export type Group = 'states' | 'become' | 'crcst' | 'cbspd' | 'practice';
export interface FAQ { q: string; a: string }
/**
 * `quiz` (props: mode 'practice' | 'mock', domain, n), `progress`, `states` (props: state)
 * or `mini:<spec>` from `lib/mini-specs.ts` (numeric props = defaults of its fields, `locked`).
 */
export interface ToolDef { kind: string; props?: Record<string, string | number | boolean> }
export interface PageText {
  /** Path after /en/, without slashes at the ends. */
  slug: string; nav: string; card: string;
  /** 50–60 characters, key term first (MASTERFACTORY §11). */
  title: string;
  /** 150–160 characters. */
  description: string;
  h1: string; intro: string;
  /** Citable block, one paragraph of 120 words or more (§21), folded after its first sentences. */
  resume: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  /** HTML; `<!--tool:mini:spec-->` or `<!--tool:quiz|{"domain":"2","n":5}-->` places a tool in the body. */
  body: (h: Helpers) => string;
}
export interface PageDef {
  id: string; group: Group; order: number;
  tool?: ToolDef; mini?: ToolDef;
  related: string[];
  /** Keys of `data/params-2026.json` → sources. */
  sources: string[];
  /** Page about applying, paying or scheduling: the "independent, not the board" line after the introduction. */
  demarche?: boolean;
  /** Reading page (Article with the date at the top) rather than a tool page. */
  en: PageText;
}
export const definePage = (g: PageDef): PageDef => g;
