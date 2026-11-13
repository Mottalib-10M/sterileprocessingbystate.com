import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'connecticut-central-service-technician-law', group: 'states', order: 130,
  tool: { kind: 'mini:deadline', props: { st: 7, m: 6, y: 2026, locked: 'st' } },
  mini: { kind: 'mini:hours', props: { w: 24 } },
  related: ['sterile-processing-certification-by-state', 'new-york-central-service-technician-law', 'tennessee-central-service-technician-law', 'crcst-certification'],
  sources: ['ct_law', 'hspa_leg'],
  en: {
    slug: 'connecticut-central-service-technician-law', nav: 'Connecticut', card: 'C.G.S. § 20-185r since 2016: 24 months to certify, 10 CE hours a year, and the trained-staff exception.',
    title: 'Connecticut Central Service Technician Law: § 20-185r',
    description: 'Connecticut central service technician law, C.G.S. § 20-185r: in force since January 1, 2016, two years to get the CRCST or CSPDT and 10 hours of CE yearly.',
    h1: 'Connecticut central service technician law: § 20-185r explained',
    intro: 'The Connecticut central service technician law gives a new technician 24 months after hire to pass the CRCST or CSPDT: your own date is computed above.',
    resume: (h) => `Connecticut wrote its requirement into the General Statutes at ${h.state('connecticut').citation}, created by Public Act 15-11 and later amended by Public Act 22-58. The duty has applied since ${h.date(h.state('connecticut').effective)}. A health care facility, meaning a hospital other than a chronic disease hospital or an outpatient surgical facility, may not employ or contract a central service technician unless that person holds the CRCST from HSPA or the CSPDT from the CBSPD, was already working as a technician before January 1, 2016, or is a student or intern under direct supervision. A person hired without one of these has ${h.state('connecticut').graceMonths} months from the date of hire to pass the exam and obtain the credential. Every technician then completes ${h.state('connecticut').ceHours} hours of continuing education each calendar year, and the facility keeps the records.`,
    faqs: (h) => [
      { q: 'How long do I have to get certified in Connecticut after I am hired?', a: `Two years. Hired on June 1, 2026, you would have to hold the CRCST or CSPDT by ${h.certifyBy('connecticut', '2026-06-01')}. The facility counts from your first day of work, so ask human resources which date it has on file and plan the exam well before the end of the second year.` },
      { q: 'Does the Connecticut law cover outpatient surgery centers?', a: 'Yes. The definition of health care facility in § 20-185r covers hospitals, except chronic disease hospitals, and outpatient surgical facilities. Physician offices and dental practices are not named. Clinics run by physicians or dentists can still ask for a credential in their own job descriptions, but the statute does not require it there.' },
      { q: 'Can a Connecticut operating room nurse or tech still sterilize instruments?', a: 'Yes, if the facility\'s infection prevention and control committee has trained the person and found them competent. The facility keeps a list of those staff, and they also complete ten hours of continuing education a year. Ask to see the list if you are one of those staff, since it is the proof that you may do the work.' },
      { q: 'I worked in sterile processing in Connecticut before 2016. Do I need the credential?', a: 'No. Employment or a contract as a central service technician with a health care facility before January 1, 2016 qualifies you, as long as the facility can confirm the dates. You still owe the yearly ten hours. Keep a letter from that employer stating your dates, in case a later employer asks for it.' },
    ],
    body: (h) => `
<h2>The Connecticut central service technician law, clause by clause</h2>
${h.table(['Point', 'What § 20-185r provides'], [['Facilities', h.state('connecticut').facilities], ['Credentials', h.state('connecticut').credentials], ['Prior employment', h.state('connecticut').grandfather], ['New hires', `${h.state('connecticut').graceMonths} months from the date of hire`], ['Yearly education', `${h.state('connecticut').ceHours} hours of continuing education`]], `C.G.S. § 20-185r on the Connecticut General Assembly site, read on ${h.read}.`, ['l', 'l'])}
<h2>Staff outside the department</h2>
<p>Connecticut's text has a feature that New York's lacks: it allows people who do not work in central service, such as operating room staff turning instruments around between cases, to decontaminate or sterilize equipment if the infection prevention and control committee has trained them and judged them competent. The facility must keep a list of these people. They are held to the same ten hours of yearly education.</p>
<h2>Planning the two years</h2>
<p>Two years sound generous, but the CRCST asks for 400 hours of hands-on work in a department, spread over five areas, before full certification. A part-timer at 24 hours a week needs about four months to log them. The calculator below shows how many hours you still owe and how long they take at your pace. The ${h.a('crcst-provisional-certification', 'provisional route')} lets you sit the exam first and send the hours within six months.</p>`,
  },
});
