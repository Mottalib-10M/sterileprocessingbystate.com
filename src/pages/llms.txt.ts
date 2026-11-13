/** llms.txt (RECETTE §21), generated at build from the page registry: always in sync with the site. */
import { PAGES } from '../lib/guides';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS_ORDER, groupLabel } from '../i18n/nav';
import params from '../data/params-2026.json';

const words = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`,
    '',
    `> Sterile processing (central service) technician certification in the United States: the seven state laws and rules (New York, New Jersey, Connecticut, Pennsylvania, Tennessee, Delaware, Minnesota) with their effective dates and deadlines after hire, the 43 states and DC without a text, the CRCST of the Healthcare Sterile Processing Association (HSPA) and the CSPDT of the Certification Board for Sterile Processing and Distribution (CBSPD): eligibility, fees, exam format, pass rates, renewal. Calculators for deadlines, cost, hands-on hours, renewal and exam windows; CRCST practice questions written by Radif Partners. Independent: not affiliated with HSPA, the CBSPD or any state. Last updated ${words(LAST_UPDATED)}.`,
    '',
    '## Data',
    `- State rules read in the statutes and rules on legislature and health department sites; exam facts and fees read in the HSPA Certification Handbook (revised January 2026) and the CBSPD technician page and 2026 bulletin; retrieved ${words(params.retrieved_at)}.`,
    '- Practice questions: written by Radif Partners; they are not questions from the real exam.',
    '',
    `- [State finder](${SITE_URL}${route('home', 'en')}): which state requires certification, from when, deadline after hire`,
    '',
    ...GROUPS_ORDER.flatMap((g) => [`## ${groupLabel(g)}`, ...PAGES.filter((p) => p.group === g).map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`), '']),
    '## About',
    `- [Method and sources](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
