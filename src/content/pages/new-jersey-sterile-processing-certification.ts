import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'new-jersey-sterile-processing-certification', group: 'states', order: 120,
  tool: { kind: 'mini:deadline', props: { st: 31, m: 9, y: 2026, locked: 'st' } },
  mini: { kind: 'mini:cost', props: { r: 1, a: 1 } },
  related: ['sterile-processing-certification-by-state', 'new-york-central-service-technician-law', 'pennsylvania-central-service-technician-law', 'sterile-processing-certification-cost'],
  sources: ['nj_rule', 'hspa_leg'],
  en: {
    slug: 'new-jersey-sterile-processing-certification', nav: 'New Jersey', card: 'A hospital licensing rule, not a statute: certification within three years, and a certified department head.',
    title: 'New Jersey Sterile Processing Certification: 3-Year Rule',
    description: 'New Jersey sterile processing certification under N.J.A.C. 8:43G-8.2: hospital staff certified within three years of employment, director certified too.',
    h1: 'New Jersey sterile processing certification: the hospital rule',
    intro: 'New Jersey sterile processing certification is set by a hospital licensing rule that allows three years from employment: see your own date above.',
    resume: (h) => `New Jersey is the odd one out among the seven states. Its requirement is not a statute passed by the legislature but a licensing standard for hospitals written by the Department of Health: ${h.state('new-jersey').citation}, in the chapter on central service. The rule says that all personnel involved in sterile processing shall be certified through a national sterile processing program recognized by the Department within three years of employment, and that the department itself is run by a full-time director or supervisor with two years of supervisory experience who is also certified. Staff who work with ethylene oxide need the appropriate license from the Department of Environmental Protection. The current wording was last amended by 50 N.J.R. 552(b), effective ${h.date(h.state('new-jersey').effective)}. Because it sits in the hospital licensing standards, the rule applies to licensed hospitals; it does not name ambulatory surgery centers, which have their own chapter of standards.`,
    faqs: (h) => [
      { q: 'How long do New Jersey hospital staff have to get certified?', a: `Three years from employment, the longest window of the seven states. Hired on September 1, 2026, you would need the certification by ${h.certifyBy('new-jersey', '2026-09-01')}. The window starts on the first day of employment, so a technician who changes hospitals should ask the new employer how it counts earlier service.` },
      { q: 'Which certification does New Jersey accept?', a: 'The rule says a national sterile processing program recognized by the Department of Health, without naming one. Hospitals in the state commonly ask for the CRCST from HSPA or the CSPDT from the CBSPD, the two national technician credentials. The rule leaves the choice to the Department, so confirm with your hospital which programs it accepts before you pay.' },
      { q: 'Does the New Jersey rule set continuing education hours?', a: 'No number of hours is written in N.J.A.C. 8:43G-8.2. In practice the certification itself must stay valid, so the renewal rules of HSPA (12 credits a year) or of the CBSPD (100 points over five years) apply. Keep every renewal receipt, since an inspector checks that staff hold a current credential, not one that has lapsed.' },
      { q: 'Is there a grandfather clause for long-serving New Jersey staff?', a: 'The rule as it reads today has none: it asks all personnel involved in sterile processing to be certified within three years of employment. Long-serving staff are past that window, so their employer expects them to hold the credential. Expect to be asked for proof of your credential when you apply.' },
    ],
    body: (h) => `
<h2>New Jersey sterile processing certification in the rule's words</h2>
${h.table(['Paragraph of 8:43G-8.2', 'Requirement'], [['(a)', 'A full-time director or supervisor of central service'], ['(b)', 'The director or supervisor has two years of supervisory experience and is certified through a national sterile processing program recognized by the Department'], ['(c)', 'All personnel involved in sterile processing are certified through such a program within three years of employment'], ['(d)', 'Personnel who use ethylene oxide hold the appropriate license from the Department of Environmental Protection']], `N.J.A.C. 8:43G-8.2 as amended effective January 16, 2018, read on ${h.read}.`, ['l', 'l'])}
<h2>A rule, not a law: why it matters</h2>
<p>A licensing rule is enforced through hospital inspections rather than against the technician. In practice the effect is the same for a new hire: the hospital must show that every person in the department is certified or still inside the three-year window. The date of the last amendment is not the date the duty began; New Jersey was described as the first state to require certification as early as 2004.</p>
<h2>Leaders are covered too</h2>
<p>New Jersey is the only one of the seven texts to put the department head in the rule, with both experience and certification. A technician aiming at a lead or supervisor role in a New Jersey hospital should plan for it. The cost of the technician exam is in the calculator below; the ${h.a('sterile-processing-certification-cost', 'cost page')} compares both routes.</p>`,
  },
});
