import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-exam-retake', group: 'crcst', order: 340,
  tool: { kind: 'mini:retake', props: { m: 11, y: 2026, f: 1 } },
  mini: { kind: 'mini:domains', props: { n: 60 } },
  related: ['crcst-pass-rate', 'crcst-practice-test', 'crcst-mock-exam', 'sterile-processing-certification-cost'],
  sources: ['hspa_handbook', 'hspa_stats'],
  en: {
    slug: 'crcst-exam-retake', nav: 'Failed the CRCST?', card: 'Six weeks before a new attempt, the full fee again, and how to use the result report.',
    title: 'CRCST Exam Retake: 6-Week Wait, Fee and Study Plan',
    description: 'CRCST exam retake rules: wait at least 6 weeks after a failed attempt, pay the full $140 again, apply in the portal, and aim your study at the weakest sections.',
    h1: 'CRCST exam retake after a failed attempt',
    intro: 'A CRCST exam retake can be taken six weeks after a failed attempt, at the full fee again: enter the month you failed to see your earliest date.',
    resume: (h) => `Failing the CRCST is common: in 2025, ${h.num(h.pr('crcst', 2025).fail)} of ${h.num(h.pr('crcst', 2025).total)} candidates did not pass, according to HSPA's statistics. The rules for a second try are simple. You must wait at least ${h.C.retakeWaitWeeks} weeks after the failed exam before you test again. You may send the retake application as soon as you like, through the HSPA portal, but the new appointment cannot fall inside those six weeks. The full exam fee, ${h.usd(h.C.feeRetake)}, applies to every attempt, including retakes. After a failed attempt, a result report and retake information appear in your online portal; use it to see where you lost points, because the passing point itself is not published. A failed attempt does not stop you from working where no state deadline applies, but in the seven states with a text the clock after hire keeps running.`,
    faqs: (h) => [
      { q: 'How soon can I retake the CRCST after failing?', a: `After at least ${h.C.retakeWaitWeeks} weeks. You can apply for the retake right away, but the new appointment must be six weeks or more after the failed one. Use the time to work on the sections your result report shows as weakest, and book the new appointment only when your practice scores are steady.` },
      { q: 'How much does a CRCST retake cost?', a: `The full exam fee again, ${h.usd(h.C.feeRetake)}. The handbook says the full fee is required for every exam taken, including retakes. Ask your employer before you apply, since some hospitals that paid for the first attempt will also pay for a second one.` },
      { q: 'Is there a limit on CRCST attempts?', a: 'The handbook we read sets a waiting period, not a maximum number of attempts. Each attempt needs a new application and fee. A run of failed attempts costs a full fee and at least six weeks each time, so most candidates are better served by a longer, focused preparation than by quick retries.' },
      { q: 'Do I need to send my 400 hours again for a retake?', a: 'The retake application is a separate form in the portal. If you were testing on the provisional route, remember that the six months for the hours start again only from a passed exam. Check the portal for the form and for any change in the rules.' },
    ],
    body: (h) => `
<h2>CRCST exam retake: the rules</h2>
${h.table(['Rule', 'What the handbook says'], [['Waiting period', `At least ${h.C.retakeWaitWeeks} weeks after the failed attempt`], ['Application', 'Retake application in the HSPA portal, any time after the attempt'], ['Fee', `${h.usd(h.C.feeRetake)}, the full fee for every attempt`], ['Feedback', 'Result report and retake information in the portal']], `HSPA Certification Handbook, revised January 2026, read on ${h.read}.`, ['l', 'l'])}
<h2>Using the six weeks</h2>
<p>Six weeks is enough for a focused plan. Week one, read your result report and list the two or three weakest sections. Weeks two to five, practice those sections every day with explained answers, and mix in the others twice a week. Week six, sit one timed ${h.a('crcst-mock-exam', 'mock exam')} at the real pace and go back over every miss. The calculator below shows how many questions each section is worth in a set of any size, so a short session keeps the exam's balance.</p>
<h2>Is it you or the test?</h2>
<p>Pass rates have moved a lot from year to year, from ${h.pc(h.pr('crcst', 2019).rate)} in 2019 to ${h.pc(h.pr('crcst', 2025).rate)} in 2025. The ${h.a('crcst-pass-rate', 'pass rate page')} shows each year and what the numbers can and cannot tell you.</p>`,
  },
});
