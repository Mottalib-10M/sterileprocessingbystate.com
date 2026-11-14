import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'delaware-central-service-technician-law', group: 'states', order: 160,
  tool: { kind: 'mini:deadline', props: { st: 8, m: 10, y: 2026, locked: 'st' } },
  mini: { kind: 'mini:provisional', props: { m: 2, y: 2027 } },
  related: ['sterile-processing-certification-by-state', 'pennsylvania-central-service-technician-law', 'crcst-provisional-certification', 'sterile-processing-technician-training'],
  sources: ['de_code', 'de_act'],
  en: {
    slug: 'delaware-central-service-technician-law', nav: 'Delaware', card: 'Title 16, §§ 3010A to 3014A since 2023: 18 months to certify, proof kept by the facility.',
    title: 'Delaware Central Service Technician Law: 18-Month Rule',
    description: 'Delaware central service technician law, 16 Del. C. §§ 3010A to 3014A: in force since January 1, 2023, 18 months after hire to certify and 10 CE hours a year.',
    h1: 'Delaware central service technician law: Title 16, Chapter 30A',
    intro: 'The Delaware central service technician law allows 18 months after hire to get the CRCST (Certified Registered Central Service Technician) or the CSPDT (Certified Sterile Processing and Distribution Technician), and has applied since 2023. Enter your month of hire to see your date.',
    resume: (h) => `Delaware is the most recent state with a duty already in force. House Bill 279, approved on October 21, 2022 as chapter 493 of volume 83 of the Laws of Delaware, added a subchapter on central service technicians to Chapter 30A of Title 16, sections 3010A to 3014A, effective ${h.date(h.state('delaware').effective)}. A hospital or freestanding surgical center licensed under Title 16 may not employ a person as a central service technician unless that person holds the CRCST or the CSPDT, was working as a technician in a health care facility as of January 1, 2023, or is a student or intern under supervision. A new hire who does not yet qualify has ${h.state('delaware').graceMonths} months from the date of hire to get certified. Every technician completes ${h.state('delaware').ceHours} hours of continuing education a year, and the facility keeps proof of each technician's certification and date of hire.`,
    faqs: (h) => [
      { q: 'When must I be certified if I start in a Delaware hospital?', a: `Within 18 months of your date of hire. Hired on October 1, 2026, the date is ${h.certifyBy('delaware', '2026-10-01')}. The facility must keep proof of your certification and date of hire, so give a copy of your certificate to your manager as soon as you pass the exam and keep one for yourself.` },
      { q: 'I was working in a Delaware sterile processing department in 2022. Am I covered?', a: 'You qualify without the credential if you were employed or otherwise working as a central service technician in a health care facility as of January 1, 2023. Ask your employer to keep a record of the dates. If you later change employers, ask the new facility to record that status too.' },
      { q: 'Who is exempt from the Delaware rule?', a: 'Health care practitioners licensed under Title 24 who act within their scope, and students or interns working under supervision. They may do central service tasks without the CRCST or CSPDT. Everyone else working as a central service technician in a covered hospital or surgical center must meet the credential rule within the 18 months.' },
      { q: 'Does the Delaware law name a state agency for complaints?', a: 'The duty falls on licensed facilities, which are overseen by the Department of Health and Social Services. The law makes the facility keep the proof, so a missing record is the facility\'s problem first. Keep your own copy of your certificate and your hire letter, because they are what proves you met the rule if a question ever comes up.' },
    ],
    body: (h) => `
<h2>Delaware central service technician law by section</h2>
${h.table(['Section', 'Content'], [['§ 3010A', 'Definitions: central service technician, health care facility (hospital or freestanding surgical center)'], ['§ 3011A', 'Who may be employed: CRCST or CSPDT, working as of January 1, 2023, or student or intern'], ['§ 3012A', `${h.state('delaware').graceMonths} months after hire to obtain the credential`], ['§ 3013A', `${h.state('delaware').ceHours} hours of continuing education a year`], ['§ 3014A', 'Who is outside the subchapter: licensed practitioners, supervised students']], `16 Del. C. Chapter 30A, Subchapter II, and 83 Del. Laws c. 493, read on ${h.read}. Section headings summarized by us.`, ['l', 'l'])}
<h2>What the facility must keep</h2>
<p>Delaware's text puts the paperwork on the employer: proof of each technician's certification and date of hire. The date of hire is what starts the 18 months, so check it on your offer letter. If you change hospitals before certifying, the count starts again with the new employer under the wording of the law, but a new manager will want to see progress.</p>
<h2>Using the provisional CRCST</h2>
<p>With 18 months, many new Delaware technicians sit the CRCST exam early and finish the 400 hands-on hours afterwards. HSPA, the Healthcare Sterile Processing Association, gives six months after a provisional pass to send the hours, with one two-month extension. ${h.calc2('The second calculator on this page')} gives that date from the month you pass. The ${h.a('sterile-processing-technician-training', 'training page')} explains how hours are counted.</p>`,
  },
});
