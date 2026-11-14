import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'sterile-processing-certification-cost', group: 'become', order: 230,
  tool: { kind: 'mini:cost', props: { r: 1, a: 1, c: 0, yr: 1 } },
  mini: { kind: 'mini:retake', props: { m: 11, y: 2026, f: 1 } },
  related: ['sterile-processing-technician-certification', 'crcst-exam-retake', 'crcst-renewal', 'cbspd-recertification'],
  sources: ['hspa_handbook', 'hspa_crcst', 'cbspd_tech', 'cbspd_bulletin'],
  en: {
    slug: 'sterile-processing-certification-cost', nav: 'Certification cost', card: 'Exam fee, non-refundable part, retakes, yearly or five-year renewal: the real total for each route.',
    title: 'Sterile Processing Certification Cost in 2026: Fees, Total',
    description: 'Sterile processing certification cost in 2026: $140 for the CRCST, $135 or $128 for the CSPDT, retake fees, renewals and a calculator for your own total.',
    h1: 'Sterile processing certification cost: every fee in 2026',
    intro: 'Sterile processing certification cost starts at $140 for the CRCST exam (Certified Registered Central Service Technician). The calculator adds retakes, a course and renewals to give your own total.',
    resume: (h) => `The exam fee is the main cost. HSPA, the Healthcare Sterile Processing Association, charges ${h.usd(h.C.fee)} for the CRCST, of which ${h.usd(h.C.feeNonRefundable)} is a non-refundable submission fee; a retake costs the full fee again. The CBSPD, the Certification Board for Sterile Processing and Distribution, lists ${h.usd(h.D.feeWeb)} for the CSPDT (Certified Sterile Processing and Distribution Technician) on its technician exam page, while its 2026 candidate bulletin gives ${h.usd(h.D.feeBulletin)} and ${h.usd(h.D.feeBulletinLate)} for a late application; we show both because the two documents disagree. After that comes upkeep: the CRCST renews every year for ${h.usd(h.C.renewal.fee)}, or ${h.usd(h.C.renewal.feeWithMembership)} with the option HSPA offers, plus twelve hours of education; the CSPDT renews every five years for ${h.usd(h.D.recertFee)} with 100 points. A training course is optional for the CRCST and is one of four routes for the CSPDT. Many employers pay the exam; ask before you apply.`,
    faqs: (h) => [
      { q: 'How much does the CRCST exam cost?', a: `${h.usd(h.C.fee)} per attempt in the HSPA handbook revised January 2026, of which ${h.usd(h.C.feeNonRefundable)} is a non-refundable submission fee. A refund request must come within 30 days of the start of your eligibility and before you book. The CBSPD sets its own refund rules in its candidate bulletin.` },
      { q: 'How much does the CSPDT cost?', a: `${h.usd(h.D.feeWeb)} on the CBSPD technician exam page and ${h.usd(h.D.feeBulletin)} in its 2026 candidate bulletin, ${h.usd(h.D.feeBulletinLate)} if late. Check the amount on the application when you pay. The two documents were read on the same day and disagree, so we show both and suggest checking the form, which is what you will actually pay.` },
      { q: 'What does it cost to keep the CRCST each year?', a: `${h.usd(h.C.renewal.fee)} a year plus twelve hours of continuing education. Many education hours are free through HSPA lessons and employer in-services, so the fee is often the only cash cost. A second HSPA credential renews in the same month with extra credits and no extra fee.` },
      { q: 'Do I lose the whole fee if I miss my CRCST appointment?', a: 'Yes. The handbook says that failing to test within the 120-day eligibility, missing or arriving late for an appointment, or bringing unacceptable ID forfeits the exam fee, and a new application and fee are needed. Book early in the 120 days, since HSPA does not extend the eligibility.' },
    ],
    body: (h) => `
<h2>Sterile processing certification cost, line by line</h2>
${h.table(['Item', 'CRCST (HSPA)', 'CSPDT (CBSPD)'], [['Exam', h.usd(h.C.fee), `${h.usd(h.D.feeWeb)} (page) or ${h.usd(h.D.feeBulletin)} (bulletin)`], ['Non-refundable part', h.usd(h.C.feeNonRefundable), 'Withdrawal fee of ' + h.usd(h.D.withdrawFee)], ['Retake', `${h.usd(h.C.feeRetake)}, after ${h.C.retakeWaitWeeks} weeks`, 'New application and fee for a later window'], ['Renewal', `${h.usd(h.C.renewal.fee)} a year`, `${h.usd(h.D.recertFee)} every ${h.D.certYears} years`], ['Over five years, one attempt', h.usd(h.C.fee + 4 * h.C.renewal.fee), h.usd(h.D.feeWeb + h.D.recertFee)]], `HSPA handbook revised January 2026 and CBSPD page and 2026 bulletin, read on ${h.read}. Five-year line: exam plus four yearly renewals, or exam plus the first recertification.`, ['l', 'r', 'r'])}
<h2>Costs nobody lists</h2>
<p>The fees above are only what the certification bodies charge. A course, books, travel to a test center and unpaid time off add up. The cheapest route is usually a trainee job where the employer signs the hours and pays the exam. Over five years the CRCST costs ${h.usd(h.C.fee + 4 * h.C.renewal.fee)} for one attempt and four renewals, more than the CSPDT, but its yearly cycle is easier to keep in step with the yearly hours that six states require.</p>
<h2>When a retake doubles the bill</h2>
<p>Each failed attempt costs a full fee. ${h.calc2('The second calculator on this page')} shows the earliest date for a CRCST retake and what you will have spent by then. The ${h.a('crcst-exam-retake', 'retake page')} explains the six-week rule.</p>`,
  },
});
