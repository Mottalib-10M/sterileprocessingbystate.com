import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-renewal', group: 'crcst', order: 330,
  tool: { kind: 'mini:renewal', props: { m: 3, y: 2026 } },
  mini: { kind: 'mini:deadline', props: { st: 7, m: 5, y: 2026 } },
  related: ['crcst-certification', 'cbspd-recertification', 'new-york-central-service-technician-law', 'sterile-processing-certification-cost'],
  sources: ['hspa_handbook', 'hspa_crcst'],
  en: {
    slug: 'crcst-renewal', nav: 'CRCST renewal', card: 'Twelve education credits and $50 each year, by the end of your anniversary month, then six weeks of grace.',
    title: 'CRCST Renewal: 12 CE Credits, $50 and the 6-Week Grace',
    description: 'CRCST renewal every year: 12 technical CE credits earned since your last renewal, a $50 fee, the end of your anniversary month, and a 6-week suspended grace.',
    h1: 'CRCST renewal: due date, credits and grace period',
    intro: 'CRCST renewal (Certified Registered Central Service Technician) is due by the last day of your anniversary month each year, with 12 continuing education credits. Enter the month you were certified to see your date.',
    resume: (h) => `The CRCST is not a lifetime credential. HSPA, the Healthcare Sterile Processing Association, asks every holder to renew once a year, no later than the last day of the month in which they were first certified. Renewal needs ${h.C.renewal.ceHours} continuing education credits of a technical nature, relevant to sterile processing, earned within the year before the renewal date and after the previous one, and an annual fee of ${h.usd(h.C.renewal.fee)}. One hour of education equals one credit, and quarter and half credits count. If the credits and fee are not in by the deadline, the certification is suspended: for ${h.C.renewal.graceWeeks} weeks you may still send them and be reinstated, but you cannot use the CRCST title in that time. After the six weeks there is no further extension, and the only way back is to pass the exam again. Other HSPA credentials renew in the same month and add their own credits, without an extra fee.`,
    faqs: (h) => [
      { q: 'How many continuing education credits do I need to renew the CRCST?', a: `${h.C.renewal.ceHours} a year, of a technical nature and relevant to sterile processing. They must be dated after your last renewal or certification and within the year before the renewal date. Hours count in quarter-hour steps, and any mix of the categories is accepted for the twelve.` },
      { q: 'What happens if my CRCST renewal is late?', a: `It is suspended on the expiry date. You have a ${h.C.renewal.graceWeeks}-week grace period to send the missing credits and fee; in that time you are not considered certified. After it, you must retake the exam. Set a reminder a month before the end of your anniversary month.` },
      { q: 'Where can I get CRCST education credits?', a: 'HSPA lists four categories. Its own online lessons, webinars and podcasts apply credits automatically when passed; other categories include outside education and college courses passed with a C or better, documented with a syllabus and transcript. Keep each certificate with its date and number of hours.' },
      { q: 'Do my state\'s ten hours count toward the CRCST twelve?', a: 'They can overlap. If the same hours are technical and relevant to sterile processing, they can be submitted to HSPA and also shown to your employer for the state requirement. Keep one folder with the certificates, so you can show the same hours to both.' },
    ],
    body: (h) => `
<h2>CRCST renewal in a few numbers</h2>
${h.table(['Rule', 'Value'], [['Frequency', 'Every year'], ['Deadline', 'Last day of the anniversary month of certification'], ['Education credits', `${h.C.renewal.ceHours}, technical, sterile processing`], ['Fee', `${h.usd(h.C.renewal.fee)} a year`], ['Grace', `${h.C.renewal.graceWeeks} weeks, credential suspended`], ['After the grace', 'Retake the exam']], `HSPA Certification Handbook, revised January 2026, read on ${h.read}.`, ['l', 'l'])}
<h2>Planning a year of credits</h2>
<p>Twelve credits is one a month. Many departments run in-services (short training sessions at work), and HSPA's lesson plans and webinars post credits directly to your account. Keep certificates for anything else in one folder with the date and hours. In the six states that set ten hours of yearly education, ask your employer whether it tracks hours by calendar year or by your anniversary month: the two do not line up. ${h.calc2('The second calculator on this page')} gives a state deadline if you are still within one.</p>
<h2>Appeals</h2>
<p>If HSPA tells you a renewal does not meet the requirements, you can appeal in writing to the Certification Council within 30 days of that decision; the final answer comes within 30 days of the review. The five-year cycle of the CBSPD, the Certification Board for Sterile Processing and Distribution, works differently; see ${h.a('cbspd-recertification', 'CBSPD recertification')}.</p>`,
  },
});
