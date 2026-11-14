import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'pennsylvania-central-service-technician-law', group: 'states', order: 140,
  tool: { kind: 'mini:deadline', props: { st: 39, m: 4, y: 2027, locked: 'st' } },
  mini: { kind: 'mini:window', props: { m: 1, y: 2027 } },
  related: ['sterile-processing-certification-by-state', 'delaware-central-service-technician-law', 'new-jersey-sterile-processing-certification', 'cbspd-certification'],
  sources: ['pa_act', 'hspa_leg'],
  en: {
    slug: 'pennsylvania-central-service-technician-law', nav: 'Pennsylvania', card: 'Act 80 of 2020: 18 months to certify after hire, three kinds of facility, the federal exclusion.',
    title: 'Pennsylvania Central Service Technician Law: Act 80',
    description: 'Pennsylvania central service technician law, Act 80 of 2020: in force since December 28, 2020, 18 months after hire to certify and 10 CE hours each year.',
    h1: 'Pennsylvania central service technician law: 18 months to certify',
    intro: 'The Pennsylvania central service technician law allows 18 months after hire to earn the CRCST (Certified Registered Central Service Technician) or the CSPDT (Certified Sterile Processing and Distribution Technician). Enter your month of hire to get your date.',
    resume: (h) => `Pennsylvania's rules sit in an act on surgical technologists and central service technicians, House Bill 81, signed as Act 80 of 2020 on October 29, 2020. Chapter 3, sections 301 to 304, covers central service technicians, and the act took effect on ${h.date(h.state('pennsylvania').effective)}. A hospital, an ambulatory surgical facility or a freestanding surgical outpatient facility may not employ or contract anyone to work as a central service technician unless that person has passed a nationally accredited exam and holds the CRCST or the CSPDT, was employed or contracted as a technician on or before the effective date, or holds a credential from a nationally accredited body to perform health services. A new hire without the credential has ${h.state('pennsylvania').graceMonths} months from the date of hire to obtain it. Each qualifying technician completes ${h.state('pennsylvania').ceHours} hours of continuing education a year, the facility verifying it.`,
    faqs: (h) => [
      { q: 'How many months do I have to get certified in Pennsylvania?', a: `Eighteen months from the date of hire. Hired on April 1, 2027, you would need the CRCST or CSPDT by ${h.certifyBy('pennsylvania', '2027-04-01')}. The calculator at the top of this page gives the date for your own month of hire. Plan the exam early enough to leave room for a retake six weeks later if needed.` },
      { q: 'Does Act 80 apply at a VA hospital in Pennsylvania?', a: 'No. Act 80 itself says it does not apply to health care facilities owned or operated by the federal government. A VA medical center sets its own hiring standards. Federal facilities follow their own hiring rules, which may still ask for the CRCST or the CSPDT in the job announcement.' },
      { q: 'Can a dental assistant in Pennsylvania sterilize instruments without the credential?', a: 'Yes. Act 80 lists people licensed or certified under the Dental Law, including dental assistants, among those who may perform the tasks without being a certified central service technician. Other health care practitioners and people holding a credential from a nationally accredited body to perform health services are also outside the requirement.' },
      { q: 'Who keeps track of my continuing education in Pennsylvania?', a: 'The facility. The act requires each health care facility to verify that its central service technicians meet the ten-hour yearly requirement, so keep your certificates and give copies to your manager. Many facilities run in-services (short training sessions at work) that count, and the same hours often serve for the CRCST renewal too.' },
    ],
    body: (h) => `
<h2>The Pennsylvania central service technician law in a table</h2>
${h.table(['Point', 'Act 80 of 2020, chapter 3'], [['Facilities', h.state('pennsylvania').facilities], ['Credentials', h.state('pennsylvania').credentials], ['Already working', h.state('pennsylvania').grandfather], ['New hires', `${h.state('pennsylvania').graceMonths} months from the date of hire`], ['Yearly education', `${h.state('pennsylvania').ceHours} hours, verified by the facility`]], `Act 80 of 2020 (P.L. 710) on the Pennsylvania General Assembly site, read on ${h.read}.`, ['l', 'l'])}
<h2>Who is outside the act</h2>
<p>${h.state('pennsylvania').extra} The act also covers surgical technologists in its second chapter, with separate rules; this page deals only with central service.</p>
<h2>Picking a route within 18 months</h2>
<p>Eighteen months is the shortest window of the seven states, shared with New York and Delaware. The CRCST can be taken any time at a Prometric testing center, with 400 hands-on hours finished within six months after the exam if you go provisional. The CSPDT is only held during four weeks a year, with an application deadline about a week before each one. ${h.calc2('The second calculator on this page')} gives the next exam window of the CBSPD, the Certification Board for Sterile Processing and Distribution, from the month your file is ready, so you can compare it with your Pennsylvania deadline. Details on both exams are on the ${h.a('sterile-processing-technician-certification', 'certification page')}.</p>`,
  },
});
