import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'sterile-processing-certification-by-state', group: 'states', order: 100,
  tool: { kind: 'states', props: { state: 'Pennsylvania' } },
  mini: { kind: 'mini:deadline', props: { st: 39, m: 3, y: 2027 } },
  related: ['new-york-central-service-technician-law', 'new-jersey-sterile-processing-certification', 'minnesota-central-service-technician-law', 'states-without-a-certification-law'],
  sources: ['ny_law', 'nj_rule', 'ct_law', 'pa_act', 'tn_law', 'de_code', 'mn_law', 'hspa_leg'],
  en: {
    slug: 'sterile-processing-certification-by-state', nav: 'Certification by state', card: 'The 7 states with a law, their effective dates, deadlines after hire and continuing education, side by side.',
    title: 'Sterile Processing Certification by State: 7 Laws, Dates',
    description: 'Sterile processing certification by state: the 7 states with a law or rule, the date each took effect, the months allowed after hire and the yearly CE.',
    h1: 'Sterile processing certification by state: the 7 texts and their dates',
    intro: 'Sterile processing certification by state comes down to seven laws: six apply today and Minnesota\'s from 2028. Pick your state to see whether one applies to you and what it asks.',
    resume: (h) => `Six states require central service, or sterile processing, technicians to be certified today, and a seventh has a law that starts to bite in 2028. New York has done so since ${h.date(h.state('new-york').effective)} under its public health law; New Jersey through a hospital licensing rule; Connecticut since ${h.date(h.state('connecticut').effective)}; Pennsylvania since ${h.date(h.state('pennsylvania').effective)}; Tennessee since ${h.date(h.state('tennessee').effective)}; Delaware since ${h.date(h.state('delaware').effective)}. Minnesota's statute took effect on ${h.date(h.state('minnesota').effective)} but exempts everyone employed on or before December 31, 2027. The laws differ on three points that matter to a new hire: the time allowed after the date of hire, from ${h.state('pennsylvania').graceMonths} to ${h.state('new-jersey').graceMonths} months; the facilities covered, hospitals only in New Jersey but also surgery centers elsewhere; and the yearly continuing education, ${h.state('new-york').ceHours} hours in every state that sets a number. Search results that say only two states require certification are out of date.`,
    faqs: (h) => [
      { q: 'How many states require sterile processing certification?', a: `Seven states have a law or rule: Connecticut, Delaware, Minnesota, New Jersey, New York, Pennsylvania and Tennessee. Six apply it now. Minnesota's statute is in force but only reaches technicians hired from January 1, 2028. Each state page on this site gives the exact citation and a deadline calculator for your month of hire.` },
      { q: 'Is a state certification the same as the CRCST or the CSPDT?', a: 'No. No state issues its own sterile processing license. The laws require a national credential, usually the CRCST from HSPA, the Healthcare Sterile Processing Association, or the CSPDT from the CBSPD, the Certification Board for Sterile Processing and Distribution, and set how long a new hire has to earn it. The national credential is the same everywhere, so moving states never means starting again.' },
      { q: 'Do these laws cover dental offices and clinics?', a: 'Mostly not. The laws name hospitals and, except in New Jersey, ambulatory surgery centers. A dental office or physician practice in these states falls outside them, although an employer can still ask for certification. Check the job description too, since an employer outside these settings may still name the CRCST.' },
      { q: 'Does a certification earned in one state count in another?', a: 'Yes. The credential is national, so a CRCST or CSPDT earned while working in Ohio is accepted in New York or Pennsylvania. What changes from state to state is the deadline and the continuing education. Keep proof of your credential and its renewals, because each new employer will ask for it.' },
    ],
    body: (h) => `
<h2>Sterile processing certification by state at a glance</h2>
${h.stateTable(`Laws read on the legislature and health department sites on ${h.read}. The New Jersey date is that of the rule's last amendment.`)}
<p>The table gives the date each law took effect, not the date it was passed. Pennsylvania's act, for instance, was enacted on October 29, 2020 and took effect sixty days later. Minnesota's line has two dates because its statute is already in force while its duty only reaches people hired from 2028.</p>
<h2>What every state law has in common</h2>
<p>All seven aim at the same job, described in nearly the same words: the person who decontaminates, inspects, assembles, packages and sterilizes reusable instruments for a hospital. All seven accept a national credential rather than creating a state license. Most of them copy a model that gives three ways to qualify: pass an accredited exam and hold the credential, prove employment in the job before the law took effect, or be a supervised student or intern. Six of them add ten hours of continuing education a year.</p>
<h2>Where the states differ</h2>
<ul>
<li><strong>Time after hire.</strong> ${h.state('pennsylvania').graceMonths} months in New York, Pennsylvania and Delaware; ${h.state('connecticut').graceMonths} months in Connecticut, Tennessee and Minnesota; ${h.state('new-jersey').graceMonths} months in New Jersey.</li>
<li><strong>Credentials named.</strong> The CRCST (Certified Registered Central Service Technician) or the CSPDT (Certified Sterile Processing and Distribution Technician) in most laws; Minnesota adds the two endoscope reprocessor credentials; New York accepts a substantially equivalent credential; New Jersey leaves the choice to its Department of Health.</li>
<li><strong>Staff outside the department.</strong> Connecticut and Tennessee let a facility train other staff and find them competent, with their own ten hours of yearly education.</li>
</ul>
<p>The calculator below applies those rules to a date of hire. The ${h.a('states-without-a-certification-law', 'page on the other states')} covers the bills that failed or are pending.</p>
<!--tool:mini:deadline-->`,
  },
});
