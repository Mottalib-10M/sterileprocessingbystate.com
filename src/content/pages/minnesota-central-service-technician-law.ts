import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'minnesota-central-service-technician-law', group: 'states', order: 170,
  tool: { kind: 'mini:deadline', props: { st: 24, m: 3, y: 2028, locked: 'st' } },
  mini: { kind: 'mini:cost', props: { r: 1, a: 1 } },
  related: ['sterile-processing-certification-by-state', 'states-without-a-certification-law', 'crcst-certification', 'sterile-processing-certification-cost'],
  sources: ['mn_law', 'mn_act'],
  en: {
    slug: 'minnesota-central-service-technician-law', nav: 'Minnesota', card: '§ 148.781, in force since December 2025, reaches people hired from 2028: four credentials accepted.',
    title: 'Minnesota Central Service Technician Law: 2028 Start',
    description: 'Minnesota central service technician law, Minn. Stat. § 148.781: in force since December 2025 but binding hires from January 1, 2028, with 24 months to certify.',
    h1: 'Minnesota central service technician law: what changes in 2028',
    intro: 'The Minnesota central service technician law is in force, yet only people hired from January 1, 2028 must certify, within 24 months. Enter a month of hire to test a date.',
    resume: (h) => `Minnesota passed its law in the 2025 first special session: chapter 3, article 2, section 33, signed on June 14, 2025, created section 148.781 of the Statutes. The revisor's note gives ${h.date(h.state('minnesota').effective)} as the effective date. The section has an unusual shape. A hospital or ambulatory surgical center may employ as a central service technician a person who passed a nationally accredited exam and holds the CRCST (Certified Registered Central Service Technician), the CER, the CSPDT (Certified Sterile Processing and Distribution Technician) or the CFER, or who was employed or retained as a technician by a health care facility on or before December 31, 2027. Since everyone already employed by that date qualifies, the requirement in practice reaches people hired from ${h.date(h.state('minnesota').bitesFrom)}. Those hires have ${h.state('minnesota').graceMonths} months from the date of hire to pass, and every technician completes ${h.state('minnesota').ceHours} hours of continuing education a year.`,
    faqs: (h) => [
      { q: 'Do I need certification to work in sterile processing in Minnesota now?', a: 'Not under state law if you are hired on or before December 31, 2027: that employment qualifies you. Your employer can still require a credential as a condition of the job. Check the job posting carefully, since many Minnesota hospitals already list a credential as a requirement or a preference.' },
      { q: 'What happens if I am hired in Minnesota in 2028?', a: `You have 24 months from your hire date. Hired on March 1, 2028, you would need one of the four credentials by ${h.certifyBy('minnesota', '2028-03-01')}. Book the exam well before the end, since a failed attempt costs at least six weeks of waiting and a new fee.` },
      { q: 'Why does the Minnesota law name four credentials?', a: 'Minnesota accepts the two technician credentials, CRCST and CSPDT, and two endoscope ones: the CER of HSPA, the Healthcare Sterile Processing Association, and the CFER of the CBSPD, the Certification Board for Sterile Processing and Distribution. A person who only reprocesses flexible endoscopes can qualify with those. Endoscope reprocessors in Minnesota should check which credential their employer prefers.' },
      { q: 'Do the ten hours of education start in 2028 too?', a: 'The text applies the ten hours to every person who qualifies under its first paragraph, including those qualifying by employment before 2028. Read literally, the yearly hours already apply; confirm with your employer how it tracks them. Keep records of every hour from 2026 on, as that costs nothing and avoids a gap later.' },
    ],
    body: (h) => `
<h2>Minnesota central service technician law: two dates to know</h2>
${h.table(['Date', 'What happens'], [['June 14, 2025', 'Governor signs Laws 2025, First Special Session, chapter 3'], [h.date(h.state('minnesota').effective), 'Section 148.781 in force, per the revisor'], ['December 31, 2027', 'Last day of employment that qualifies without a credential'], [h.date(h.state('minnesota').bitesFrom), 'First hires who must certify within 24 months'], ['January 1, 2030', 'First deadline for someone hired on January 1, 2028']], `Minn. Stat. § 148.781 and Laws 2025, 1st Special Session, ch. 3, read on the Revisor of Statutes site on ${h.read}.`, ['l', 'l'])}
<h2>Who the law leaves out</h2>
<p>${h.state('minnesota').extra.split('. ').slice(1).join('. ')} The facilities covered are hospitals and ambulatory surgical centers, as in Pennsylvania and Tennessee.</p>
<h2>Getting ready before 2028</h2>
<p>If you plan to change jobs in 2028 or later, the credential will be a condition within two years. Earning it before then costs the same as later and makes you employable everywhere. ${h.calc2('The second calculator on this page')} adds the exam fee, retakes and renewals; the ${h.a('sterile-processing-certification-cost', 'cost page')} explains each line. Minnesota is the newest of the seven laws, so check the ${h.a('sterile-processing-certification-by-state', 'state overview')} for any change before you rely on these dates.</p>`,
  },
});
