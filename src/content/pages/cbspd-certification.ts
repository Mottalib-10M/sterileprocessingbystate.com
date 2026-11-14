import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'cbspd-certification', group: 'cbspd', order: 400,
  tool: { kind: 'mini:window', props: { m: 12, y: 2026 } },
  mini: { kind: 'mini:ready', props: { mo: 12, h: 400, c: 0 } },
  related: ['cspdt-exam', 'cbspd-recertification', 'sterile-processing-technician-certification', 'pennsylvania-central-service-technician-law'],
  sources: ['cbspd_tech', 'cbspd_bulletin', 'cbspd_stats'],
  en: {
    slug: 'cbspd-certification', nav: 'CSPDT: who can apply', card: 'Four ways to qualify, four testing weeks a year, a mailed application and the 2026 and 2027 dates.',
    title: 'CBSPD Certification: CSPDT Eligibility and 2027 Dates',
    description: 'CBSPD certification for technicians: the four CSPDT eligibility routes, the mailed application, the $135 fee, testing weeks and deadlines for 2026 and 2027.',
    h1: 'CSPDT certification from the CBSPD board',
    intro: 'CBSPD certification, from the Certification Board for Sterile Processing and Distribution, gives you the CSPDT (Certified Sterile Processing and Distribution Technician) certificate. It is tested one week per quarter; the next is February 1 to 6, 2027, with a January 26 deadline. Enter the month you can mail your application to see yours.',
    resume: (h) => `The Certification Board for Sterile Processing and Distribution, CBSPD, awards the CSPDT, Certified Sterile Processing and Distribution Technician. It describes the exam as entry-level testing for minimum competency, for people who clean, decontaminate, disinfect, assemble, package, sterilize, store and distribute instruments in any setting: hospital, clinic, dental office, physician office or surgery center. Before the application deadline you must meet one of four requirements: twelve months of full-time work, or the part-time equivalent, performing sterile processing activities; six months each of allied health work (a health job other than doctor or nurse, such as lab or imaging technician) and of sterile processing work; a sterile processing technician course passed with a grade of 70 or higher; or twelve months of healthcare product sales or service related to sterile processing. The application cannot be completed online: it is printed and mailed with the fee, ${h.usd(h.D.feeWeb)} on the exam page. The exam is given in one-week windows, and the pass mark is a scaled score of ${h.D.passScaled}. In 2025 the CBSPD reported ${h.num(h.P.stats.cspdt.current)} current CSPDT holders.`,
    faqs: (h) => [
      { q: 'Can I apply for the CBSPD exam online?', a: 'No. The CBSPD technician page says the application cannot be completed online: it must be printed and mailed, with payment by credit card, business check or money order, to the office in Lebanon, New Jersey. Mail it early enough to reach the office before the deadline.' },
      { q: 'When is the next CBSPD technician exam?', a: 'The CBSPD page lists February 1 to 6, 2027, with an application deadline of Tuesday, January 26, 2027. In 2026 the windows were in early February, May, August and November. The CBSPD does not publish the later 2027 windows yet, so check its page before you plan around them.' },
      { q: 'Does a sterile processing course make me eligible for the CSPDT?', a: 'Yes, if you passed it with a grade of 70 or higher and send a copy of the certificate or grade from your instructor. That route replaces the twelve months of work. Keep a copy of the transcript in case the CBSPD asks for it again.' },
      { q: 'Is the CSPDT accepted in states with a certification law?', a: 'Yes. New York, Connecticut, Pennsylvania, Tennessee, Delaware and Minnesota name the CSPDT alongside the CRCST (Certified Registered Central Service Technician) of HSPA, the Healthcare Sterile Processing Association. New Jersey accepts a national program recognized by its Department of Health. Check what your employer names in the job description before choosing between the two credentials.' },
    ],
    body: (h) => `
<h2>CBSPD certification: testing windows and deadlines</h2>
${h.table(['Exam week', 'Application deadline', 'Status'], h.windows().map((w) => [`${h.date(w.start)} to ${h.date(w.end)}`, h.date(w.deadline), w.status === 'next' ? '<strong>Next</strong>' : w.status === 'later' ? 'Open' : 'Past']), `CBSPD technician exam page, read on ${h.read}; the next window comes first, past ones last. Later 2027 windows were not yet published.`, ['l', 'l', 'l'])}
<p>After your application is accepted, you receive an email or postcard explaining how to book a date and test site within the window. If nothing arrives seven days before the window, call the CBSPD office. You can withdraw up to two weeks before the window, minus a ${h.usd(h.D.withdrawFee)} administrative fee, or move to the next window up to 48 hours ahead; a no-show gets neither refund nor transfer.</p>
<h2>The four eligibility routes</h2>
<ol>${(h.D.eligibility as string[]).map((e) => `<li>${e}.</li>`).join('')}</ol>
<p>Only one route is needed, and it must be met before the deadline.</p>
<h2>After the exam</h2>
<p>In the United States the computer gives an official pass or fail at the end. Passing candidates get no numeric score; a certificate with an ID number, a pin and a listing on the CBSPD site follow by mail within six weeks of the window. Failing candidates receive their score and a report by content area.</p>
<p>Part-time work counts in equivalent hours. ${h.calc1('The calculator at the top of this page')} gives the next window from the month your file is ready; the ${h.a('cspdt-exam', 'exam page')} covers format and scoring.</p>`,
  },
});
