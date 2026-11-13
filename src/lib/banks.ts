/**
 * Question bank in the browser: `loadBank` fetches the files on demand, so a page ships only the
 * questions its first render shows until the visitor asks for a new draw. `BANK` (lib/banks-build.ts)
 * is for the build only.
 */
import type { Question } from './engine/exam';
const strip = (m: { default: unknown }) => (m.default as { questions: Question[] }).questions;
let cache: Promise<Question[]> | null = null;
export function loadBank(): Promise<Question[]> {
  cache ??= Promise.all([
    import('../data/questions/crcst-1.json'), import('../data/questions/crcst-2.json'), import('../data/questions/crcst-3.json'),
    import('../data/questions/crcst-4.json'), import('../data/questions/crcst-5.json'), import('../data/questions/crcst-6.json'),
    import('../data/questions/crcst-7.json'),
  ]).then((ms) => ms.flatMap(strip));
  return cache;
}
