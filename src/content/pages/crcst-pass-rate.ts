import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-pass-rate', group: 'crcst', order: 350,
  tool: { kind: 'mini:passrate', props: { e: 1, yr: 2025 } },
  mini: { kind: 'mini:retake', props: { m: 6, y: 2026, f: 1 } },
  related: ['crcst-exam-retake', 'crcst-exam', 'cspdt-exam', 'sterile-processing-technician-certification'],
  sources: ['hspa_stats', 'cbspd_stats'],
  en: {
    slug: 'crcst-pass-rate', nav: 'CRCST pass rate', card: 'Every year from 2018 to 2025 from HSPA\'s own figures, with the CSPDT next to it.',
    title: 'CRCST Pass Rate 2018 to 2025: HSPA Figures by Year',
    description: 'CRCST pass rate by year from HSPA statistics: 65.6% in 2025 on 15,369 exams, every year since 2018, and the CSPDT pass rates of the CBSPD for comparison.',
    h1: 'CRCST pass rate by year, from HSPA statistics',
    intro: 'The CRCST pass rate was 65.6% in 2025, on 15,369 exams taken: pick another year above, or the CSPDT, to compare from the official figures.',
    resume: (h) => `HSPA publishes how many CRCST exams were passed and failed each year. In 2025, ${h.num(h.pr('crcst', 2025).pass)} candidates passed and ${h.num(h.pr('crcst', 2025).fail)} failed, a pass rate of ${h.pc(h.pr('crcst', 2025).rate, 1)} on ${h.num(h.pr('crcst', 2025).total)} exams. The best year in the series was 2019, at ${h.pc(h.pr('crcst', 2019).rate, 1)}; the rate has drifted down since 2022 while the number of candidates nearly doubled. The CBSPD publishes the same kind of figure for the CSPDT: ${h.pc(h.pr('cspdt', 2025).rate, 1)} in 2025 on ${h.num(h.pr('cspdt', 2025).total)} exams. These are counts of exams, not of people, so a person who failed twice and passed once appears three times. HSPA counted ${h.num(h.P.stats.crcst.cumulativeExams)} CRCST exams in total and ${h.num(h.P.stats.crcst.current)} current holders at the end of 2025. Neither body publishes rates by state, by school or by first attempt, so a training program quoting its own rate is using its own count.`,
    faqs: (h) => [
      { q: 'What is the CRCST pass rate?', a: `${h.pc(h.pr('crcst', 2025).rate, 1)} in 2025: ${h.num(h.pr('crcst', 2025).pass)} passed and ${h.num(h.pr('crcst', 2025).fail)} failed, from HSPA's published statistics. The rate was ${h.pc(h.pr('crcst', 2024).rate, 1)} in 2024. That means roughly one candidate in three did not pass. The figure counts exams, not people, so retakes appear in it, and the rate for first attempts alone is not published by HSPA.` },
      { q: 'Is the CRCST harder than the CSPDT?', a: `The CRCST pass rate in 2025 was ${h.pc(h.pr('crcst', 2025).rate, 1)} and the CSPDT rate ${h.pc(h.pr('cspdt', 2025).rate, 1)}. The candidates are not the same people and qualify differently, so the gap does not prove one test is harder. Comparing them only tells you how each group did in that year, not how hard either exam is.` },
      { q: 'Why did the CRCST pass rate drop after 2022?', a: 'HSPA does not explain it on the statistics page. A new outline based on a 2023 job task analysis and a rise in first-time candidates both happened in that period; we can only note them, not prove a cause. Look at your own practice scores instead.' },
      { q: 'Do the figures count retakes?', a: 'They count exams passed and failed in each year, so retakes are included. A single person can therefore appear more than once in one year. That is also why first-attempt rates cannot be computed from the published figures, and why schools that quote a pass rate are usually counting only their own students.' },
    ],
    body: (h) => `
<h2>CRCST pass rate year by year</h2>
${h.statsTable('crcst', `HSPA certification statistics, read on ${h.read}. Pass rate computed by us from the counts.`)}
<h2>CSPDT pass rate for comparison</h2>
${h.statsTable('cspdt', `CBSPD exam and certification statistics, read on ${h.read}. Pass rate computed by us.`)}
<h2>Reading the numbers</h2>
<p>A pass rate near two thirds means that one candidate in three leaves without the credential, and each of them pays the full fee to try again after six weeks. The safest reading for your own plan is that an unprepared first attempt is a real risk. Practice by section until your scores are steady, then take a ${h.a('crcst-mock-exam', 'timed mock')}. The calculator below gives the earliest retake date and the money spent if it goes wrong.</p>`,
  },
});
