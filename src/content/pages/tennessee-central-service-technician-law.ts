import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'tennessee-central-service-technician-law', group: 'states', order: 150,
  tool: { kind: 'mini:deadline', props: { st: 43, m: 8, y: 2026, locked: 'st' } },
  mini: { kind: 'mini:renewal', props: { m: 8, y: 2025 } },
  related: ['sterile-processing-certification-by-state', 'connecticut-central-service-technician-law', 'crcst-renewal', 'how-to-become-a-sterile-processing-technician'],
  sources: ['tn_law', 'tn_faq'],
  en: {
    slug: 'tennessee-central-service-technician-law', nav: 'Tennessee', card: '§ 68-11-239 since 2017: two years to certify, 10 CE hours, the professions left out.',
    title: 'Tennessee Central Service Technician Law: § 68-11-239',
    description: 'Tennessee central service technician law, Tenn. Code § 68-11-239: in force since January 1, 2017, two years after hire to certify and 10 hours of CE a year.',
    h1: 'Tennessee central service technician law: § 68-11-239 in plain words',
    intro: 'The Tennessee central service technician law gives 24 months after hire to obtain the CRCST or CSPDT: enter your month of hire to see your date.',
    resume: (h) => `Tennessee added section 68-11-239 to its Code in 2016, and its central service duty has applied since ${h.date(h.state('tennessee').effective)}. A hospital or an ambulatory surgical treatment center may not employ or contract a person as a central service technician unless that person passed a nationally accredited central service exam and holds the CRCST of HSPA or the CSPDT of the CBSPD, worked as a technician in a healthcare institution before January 1, 2017, or is a student or intern under direct supervision. Someone who does not qualify on hiring has ${h.state('tennessee').graceMonths} months from the date of hire to pass the exam and get the credential, and every technician completes ${h.state('tennessee').ceHours} hours of continuing education a year. The official Tennessee Code is published by LexisNexis; we read the section on a public mirror and checked it against a law-firm question and answer published in a trade journal, so treat it as a summary.`,
    faqs: (h) => [
      { q: 'What is the deadline to get certified in Tennessee?', a: `Two years from your date of hire. Hired on August 1, 2026, you would have to hold the credential by ${h.certifyBy('tennessee', '2026-08-01')}. The count starts on your first day of work at the hospital or surgery center. Book the exam early enough to leave time for a retake if the first attempt fails.` },
      { q: 'Are surgical technologists covered by the Tennessee law?', a: 'No. Surgical technologists, diagnostic medical sonographers and licensed providers acting within their scope of practice are outside § 68-11-239, even when they handle instruments. The exclusion follows their own professional rules. A technician hired into central service, by contrast, is covered from the first day of employment.' },
      { q: 'Does Tennessee require certification in a surgeon\'s office?', a: 'No. The section applies to hospitals and ambulatory surgical treatment centers. A physician practice or dental office falls outside it, although an employer may still ask for a credential. Clinics and offices outside the section remain free to set their own rules for the people who clean and sterilize instruments.' },
      { q: 'Can the ten yearly hours count toward my CRCST renewal too?', a: 'Usually yes. HSPA asks for twelve hours a year and accepts a range of providers. Hours on central service topics can serve both the Tennessee law and HSPA, as long as you keep the certificates. Ask your employer how it records the state hours.' },
    ],
    body: (h) => `
<h2>Tennessee central service technician law: the main rules</h2>
${h.table(['Point', 'Tenn. Code Ann. § 68-11-239'], [['Facilities', h.state('tennessee').facilities], ['Credentials', h.state('tennessee').credentials], ['Before 2017', h.state('tennessee').grandfather], ['New hires', `${h.state('tennessee').graceMonths} months from the date of hire`], ['Yearly education', `${h.state('tennessee').ceHours} hours`]], `Section read on ${h.read}; the official text is published for the state by LexisNexis.`, ['l', 'l'])}
<h2>Trained staff outside central service</h2>
<p>Like Connecticut, Tennessee lets a facility use staff from outside the central service department for decontamination or sterilization, if its infection prevention committee has trained them and found them competent. The institution lists those people, and the list must be available on request.</p>
<h2>After the credential</h2>
<p>Certification is the start. The CRCST is renewed each year with twelve hours of education and a fee; the CSPDT every five years with 100 points. If you hold the CRCST, the calculator below gives the last day to renew and the end of the six-week grace period. The full rules are on the ${h.a('crcst-renewal', 'CRCST renewal page')}.</p>`,
  },
});
