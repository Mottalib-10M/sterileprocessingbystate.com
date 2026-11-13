import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'cbspd-recertification', group: 'cbspd', order: 420,
  tool: { kind: 'mini:points', props: { ft: 5, ce: 30 } },
  mini: { kind: 'mini:renewal', props: { m: 9, y: 2025 } },
  related: ['cbspd-certification', 'crcst-renewal', 'cspdt-exam', 'sterile-processing-certification-cost'],
  sources: ['cbspd_bulletin', 'cbspd_recert', 'cbspd_ceu'],
  en: {
    slug: 'cbspd-recertification', nav: 'CBSPD recertification', card: '100 points over five years, how work years count, pre-approved education and the $125 fee.',
    title: 'CBSPD Recertification: 100 Points in 5 Years, $125 Fee',
    description: 'CBSPD recertification of the CSPDT: 100 points over five years, up to 50 points for work, pre-approved CE, the $125 fee and filing up to six months early.',
    h1: 'CBSPD recertification: counting your 100 points',
    intro: 'CBSPD recertification asks for 100 points every five years, half of which can come from work: enter your years and education points above to see the gap.',
    resume: (h) => `A CSPDT is valid for ${h.D.certYears} years. The CBSPD chose that cycle because it sees five years as the usual period of significant change in the field. To recertify, you accumulate ${h.D.recertPoints} points over the five years and pay ${h.usd(h.D.recertFee)} for the next cycle. The CBSPD accepts the application up to six months before the expiration date. Points come from two sources. Work in sterile processing earns up to ${h.D.workPoints.maxPerYear} points a year and ${h.D.workPoints.maxTotal} in total: ${h.D.workPoints.fullTime} for a year full time, ${h.D.workPoints.partTime} part time, ${h.D.workPoints.perDiem} per diem. The rest comes from education approved by the CBSPD, one point per contact hour of sixty minutes, in subjects on the exam outline. Every program must be pre-approved or submitted to the CBSPD's education committee, and each one counts once per cycle.`,
    faqs: (h) => [
      { q: 'How many points do I need to recertify my CSPDT?', a: `${h.D.recertPoints} points over the ${h.D.certYears}-year period, plus the ${h.usd(h.D.recertFee)} fee. Up to ${h.D.workPoints.maxTotal} can come from verified work in sterile processing. The remaining points come from approved education. Keep each certificate, signed where the bulletin asks for it, and use each program only once in the cycle.` },
      { q: 'Do HSPA CE credits count for CBSPD recertification?', a: 'Not automatically. The CBSPD counts programs it has approved or pre-approved, on topics in its exam outline. A program approved for HSPA can be submitted to the CBSPD committee for review. Ask the provider whether a CBSPD approval code exists before you take the course.' },
      { q: 'How early can I send my CBSPD recertification?', a: 'Up to six months before your expiration date, according to the 2026 candidate bulletin. Send every approved point you have earned in the cycle. Filing early leaves you time to fix a missing signature or a rejected program before the credential lapses at five years.' },
      { q: 'How long does CBSPD approval of an in-service take?', a: 'The bulletin says approval takes four to six weeks. Departmental in-services must be submitted within 30 days of the session; other programs ideally six weeks before and at the latest six weeks after. Submit in good time so that approval arrives before you file.' },
    ],
    body: (h) => `
<h2>Where CBSPD recertification points come from</h2>
${h.table(['Source', 'Points', 'Limit per cycle'], [['Full-time SPD work', `${h.D.workPoints.fullTime} a year`, `${h.D.workPoints.maxTotal} for all work`], ['Part-time work, 20 hours a week or more', `${h.D.workPoints.partTime} a year`, 'same cap'], ['Per diem, 6 days a month or more', `${h.D.workPoints.perDiem} a year`, 'same cap'], ['Approved in-services, webinars, podcasts', '1 per contact hour', 'each used once'], ['Adult or continuing education program', '1 per contact hour', '5'], ['College course with 70 or better', '1 per credit hour', '10'], ['Committee service / office', '2 / 4 a year', '10 / 20'], ['Accepted test questions', '1 per 5 questions', '15']], `CBSPD technician candidate bulletin 2026 and CEU pages, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>A realistic five-year plan</h2>
<p>A full-time technician earns the ${h.D.workPoints.maxTotal} work points by staying employed, verified by the manager. The other fifty come from about ten hours of approved education a year, which is also what six states ask. Pre-approved in-services published in trade journals and in the CBSPD newsletter need a post-test signed by your manager. Use the CBSPD's ongoing record sheet so you do not chase signatures at the end.</p>
<h2>Compared with HSPA</h2>
<p>HSPA's CRCST works on a one-year cycle with twelve credits and ${h.usd(h.C.renewal.fee)} each time; see ${h.a('crcst-renewal', 'CRCST renewal')}. The calculator below gives the next CRCST due date if you hold both.</p>`,
  },
});
