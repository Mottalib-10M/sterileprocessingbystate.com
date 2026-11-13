/** Build-time access to the bank (never imported by a client component). */
import D1 from '../data/questions/crcst-1.json';
import D2 from '../data/questions/crcst-2.json';
import D3 from '../data/questions/crcst-3.json';
import D4 from '../data/questions/crcst-4.json';
import D5 from '../data/questions/crcst-5.json';
import D6 from '../data/questions/crcst-6.json';
import D7 from '../data/questions/crcst-7.json';
import type { Question } from './engine/exam';
export const BANK: Question[] = [D1, D2, D3, D4, D5, D6, D7].flatMap((f) => (f as { questions: Question[] }).questions);
