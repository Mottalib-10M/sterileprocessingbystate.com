import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-certification', group: 'crcst', order: 300,
  tool: { kind: 'mini:hours', props: { w: 32, d1: 60, d2: 30, d3: 0 } },
  mini: { kind: 'mini:cost', props: { r: 1, a: 1, yr: 2 } },
  related: ['crcst-exam', 'crcst-provisional-certification', 'crcst-renewal', 'crcst-practice-test'],
  sources: ['hspa_handbook', 'hspa_crcst', 'hspa_become', 'hspa_stats'],
  en: {
    slug: 'crcst-certification', nav: 'CRCST certification', card: 'HSPA\'s credential from application to renewal: 400 hours, full or provisional, fee and timeline.',
    title: 'CRCST Certification: 400 Hours, $140 Fee, How to Apply',
    description: 'CRCST certification from HSPA: 400 hands-on hours in five areas, full or provisional route, a $140 exam, 120 days to test and a yearly renewal with 12 CE hours.',
    h1: 'CRCST certification from application to renewal',
    intro: 'CRCST certification asks for 400 hands-on hours and a $140 exam; enter the hours you have logged above to see how many weeks are left before you can apply.',
    resume: (h) => `The CRCST, Certified Registered Central Service Technician, is the credential of the Healthcare Sterile Processing Association, HSPA, the body formerly called IAHCSMM. To obtain it you pass a ${h.C.items}-question exam and document ${h.num(h.C.handsOn.total)} hours of hands-on experience in a sterile processing department. You can log the hours first and receive the full CRCST as soon as you pass, the route HSPA recommends, or test first, become a provisional CRCST, and send the hours within ${h.C.handsOn.provisionalMonths} months. The exam costs ${h.usd(h.C.fee)}. HSPA takes about ${h.C.processingWeeks} weeks to process an application, then gives a ${h.C.windowDays}-day eligibility in which to book and sit the test at a Prometric center. Once certified, you renew every year by the end of your anniversary month with ${h.C.renewal.ceHours} hours of continuing education and a ${h.usd(h.C.renewal.fee)} fee. At the end of 2025, ${h.num(h.P.stats.crcst.current)} people held a current CRCST.`,
    faqs: (h) => [
      { q: 'What does CRCST stand for?', a: 'Certified Registered Central Service Technician. It is the technician credential of the Healthcare Sterile Processing Association, HSPA, previously known as IAHCSMM. The credential is national, so it is accepted in every state that names it. Job postings often still use the former IAHCSMM name for the same credential.' },
      { q: 'How long is the CRCST certification valid?', a: `One year at a time. It must be renewed by the last day of your anniversary month with ${h.C.renewal.ceHours} continuing education credits and the ${h.usd(h.C.renewal.fee)} fee; a six-week grace period follows, during which you are not considered certified. After the grace period, only a new exam restores the credential.` },
      { q: 'Who signs my 400 CRCST hours?', a: 'A person in a managerial position within the sterile processing department, above you, who witnessed the work. The signature goes on the exam application or, for provisional candidates, on the hours documentation sent later. Keep a copy of the signed hours for your own records.' },
      { q: 'Can I take the CRCST online from home?', a: 'The handbook we read describes testing at Prometric centers, booked at least 48 hours ahead, typically open six days a week. Check the HSPA portal at the time you apply for any other option. Rules can change, so read the handbook in force on the day you apply.' },
    ],
    body: (h) => `
<h2>CRCST certification timeline</h2>
${h.table(['Step', 'What happens', 'Time'], [['1', 'Log hands-on hours (full route)', `${h.num(h.C.handsOn.total)} hours`], ['2', 'Send the application with the fee', h.usd(h.C.fee)], ['3', 'HSPA processes it', `about ${h.C.processingWeeks} weeks`], ['4', 'Book and sit the exam at Prometric', `within ${h.C.windowDays} days, booked 48 hours ahead at least`], ['5', 'Result on screen, credential issued', 'the same day for the result'], ['6', 'Renew each year', `${h.C.renewal.ceHours} CE credits and ${h.usd(h.C.renewal.fee)}`]], `HSPA Certification Handbook, revised January 2026, read on ${h.read}.`, ['r', 'l', 'l'])}
<h2>Full or provisional</h2>
<p>The full route means you send the signed hours with the application and are fully certified when you pass. The provisional route means you test with fewer hours and become a Provisional CRCST, then send the hours within six months; a single two-month extension can be asked for by your manager if you are still working or volunteering in a department. Miss the deadline and the provisional certification is forfeited and a new exam is needed. The ${h.a('crcst-provisional-certification', 'provisional page')} has a date calculator.</p>
<h2>Booking well</h2>
<p>HSPA advises booking at least 45 days before your eligibility runs out, because seats go first come, first served and no extension is granted. Bring a valid government ID with exactly the name on your application. A missed appointment forfeits the fee. The calculator above shows the weeks of work you still need before step 1 is done; the ${h.a('crcst-exam', 'exam page')} covers the test itself.</p>`,
  },
});
