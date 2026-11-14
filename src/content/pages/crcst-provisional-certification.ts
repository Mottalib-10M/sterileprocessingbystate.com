import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-provisional-certification', group: 'crcst', order: 320,
  tool: { kind: 'mini:provisional', props: { m: 3, y: 2027, x: 0 } },
  mini: { kind: 'mini:hours', props: { w: 16, d1: 80, d2: 60, d3: 40 } },
  related: ['crcst-certification', 'sterile-processing-technician-training', 'crcst-exam-retake', 'delaware-central-service-technician-law'],
  sources: ['hspa_handbook', 'hspa_become'],
  en: {
    slug: 'crcst-provisional-certification', nav: 'Provisional CRCST', card: 'Test first, send the 400 hours within six months, and the one-time two-month extension.',
    title: 'Provisional CRCST: 6 Months to Log Hours, 1 Extension',
    description: 'Provisional CRCST certification: sit the exam before the 400 hours, send them within 6 months of passing, the one-time 2-month extension and forfeiture.',
    h1: 'Provisional CRCST: your deadline for the 400 hours',
    intro: 'A provisional CRCST (Certified Registered Central Service Technician) lasts six months from the day you pass, plus one possible two-month extension. Enter the month you passed to get your last day.',
    resume: (h) => `The second route to the CRCST offered by HSPA, the Healthcare Sterile Processing Association, lets you sit the exam before you have the ${h.num(h.C.handsOn.total)} hands-on hours. If you pass, you become a Provisional CRCST. You then have ${h.C.handsOn.provisionalMonths} months from passing to complete the hours in a sterile processing department, paid or volunteer, in the same five areas as the full route, witnessed and signed by a manager above you, and to send the documentation to HSPA before the six months end. Once HSPA receives and approves it, you get the full CRCST. A one-time extension of ${h.C.handsOn.extensionMonths} months exists for people still working or volunteering in a department as the six months run out; the request goes in before expiry, from your manager, on HSPA's form. If the hours do not arrive in time, the provisional certification is forfeited and you must pass a retake exam, with its fee, to try again.`,
    faqs: (h) => [
      { q: 'How long does a provisional CRCST last?', a: `${h.C.handsOn.provisionalMonths} months from the day you pass the exam, or ${h.C.handsOn.provisionalMonths + h.C.handsOn.extensionMonths} months with the one-time extension. The hours documentation must reach HSPA before that date. Mark the date in your calendar the day you pass, and send the documentation a few days early.` },
      { q: 'Who can ask for the two-month extension?', a: 'Only someone currently working or volunteering in a sterile processing department. The request is made before the provisional status expires, by the manager or supervisor of that department, on HSPA\'s extension form. HSPA also says extensions are not available to people who are no longer working or volunteering in a department.' },
      { q: 'What happens if I do not finish the hours in time?', a: 'The provisional CRCST is forfeited. To be certified you must pass the exam again, paying the fee again, and then meet the hours requirement. The full exam fee applies again, and the hours requirement still has to be met after the new pass.' },
      { q: 'Can a provisional CRCST work in a state with a certification law?', a: 'The state texts speak of holding the credential within a deadline after hire. Whether a provisional status counts is not spelled out in the texts we read; ask your employer, and plan to finish the hours well inside your state deadline. Your manager can confirm how the facility reads its own state deadline.' },
    ],
    body: (h) => `
<h2>Provisional CRCST dates at a glance</h2>
${h.table(['You pass on', 'Hours due (6 months)', 'With extension (8 months)'], [['2027-01-15', '2027-07-15', '2027-09-15'], ['2027-03-31', '2027-09-30', '2027-11-30'], ['2027-08-31', '2028-02-29', '2028-04-30']].map(([a, b, c]) => [h.date(a), h.date(b), h.date(c)]), 'Our calendar arithmetic: same day six months later, or the last day of a shorter month.', ['l', 'l', 'l'])}
<p>HSPA's handbook speaks of six months and of a two-month extension without saying how a day that does not exist, such as August 31 plus six months, is counted. We use the last day of the shorter month. Send the documentation days before the date, not on it.</p>
<h2>What to send and how</h2>
<p>The documentation lists the hours in the five areas of the application, each witnessed and signed by a person in a managerial position in the department, above you. Keep a copy of what you send and of any confirmation from HSPA. Once the hours are received and approved, HSPA issues the full CRCST; until then, use the provisional title only.</p>
<h2>Is the provisional route a good idea?</h2>
<p>It suits people who have a department to work in and want to sit the exam while their study is fresh. It suits less someone without a placement: six months go fast if you cannot get into a department, and the extension is only for people already working or volunteering there. ${h.calc2('The second calculator on this page')} estimates how long your remaining hours take at your weekly pace. The ${h.a('sterile-processing-technician-training', 'training page')} lists the five areas.</p>`,
  },
});
