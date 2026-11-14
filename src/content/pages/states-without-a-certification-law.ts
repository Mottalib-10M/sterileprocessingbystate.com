import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'states-without-a-certification-law', group: 'states', order: 180,
  tool: { kind: 'states', props: { state: 'Florida' } },
  mini: { kind: 'mini:ready', props: { mo: 0, h: 0, c: 1 } },
  related: ['sterile-processing-certification-by-state', 'minnesota-central-service-technician-law', 'sterile-processing-technician-certification', 'how-to-become-a-sterile-processing-technician'],
  sources: ['hspa_leg', 'fl_bill', 'mn_law'],
  en: {
    slug: 'states-without-a-certification-law', nav: 'States without a law', card: '43 states and DC have no text: what employers ask instead, and the bills that failed or are pending.',
    title: 'States Without Sterile Processing Certification Laws',
    description: 'Which states have no sterile processing certification law in 2026: 43 states and DC, the Florida bill that died in March 2026, and what employers ask instead.',
    h1: 'States without a sterile processing certification law in 2026',
    intro: 'States without a sterile processing certification law are the large majority: 43 states plus the District of Columbia. Choose your state to check it.',
    resume: (h) => `Outside Connecticut, Delaware, Minnesota, New Jersey, New York, Pennsylvania and Tennessee, we found no statute or rule in force that makes certification a condition for working as a central service or sterile processing technician. That is ${h.others.length} jurisdictions: ${h.others.length - 1} states and the District of Columbia. It does not mean the job is open to anyone without a credential. Hospitals in these states, and accrediting bodies that inspect them, expect competent staff, and many job postings ask for one of the two national credentials, the CRCST (Certified Registered Central Service Technician) or the CSPDT (Certified Sterile Processing and Distribution Technician), at hire or within a set number of months. Bills come back regularly. In 2026 Florida's Senate Bill 1034 would have required certification in hospitals and ambulatory surgical centers; it died in committee on March 13, 2026. HSPA, the Healthcare Sterile Processing Association, also lists Oregon and South Carolina among states with recent activity, without an adopted text that we could find.`,
    faqs: (h) => [
      { q: 'Does Florida require sterile processing certification?', a: 'Not in law as of our reading on November 13, 2026. Senate Bill 1034 of the 2026 session would have created a requirement for hospitals and surgery centers, but it died in the Health Policy committee on March 13, 2026. We will update this page if a new bill is filed and passes.' },
      { q: 'Does Texas or California require a sterile processing certification?', a: 'Neither has a state law or rule requiring it among the texts we found. Hospitals in both states often require the CRCST or CSPDT in their own job descriptions. Read the posting closely: some accept a credential within six or twelve months of hire, which works much like a state deadline.' },
      { q: 'If my state has no law, should I still get certified?', a: 'Most employers say yes in their postings, and a national credential follows you if you move to one of the seven states. The cost is the same everywhere: $140 for the CRCST exam, $135 for the CSPDT on the page of the CBSPD, the Certification Board for Sterile Processing and Distribution. Add the yearly renewal to that cost.' },
      { q: 'How would I know if my state passes a new law?', a: 'Watch your legislature\'s site and HSPA\'s page on legislative certification issues, which lists states with pending activity. We recheck the texts and update the dates on this site when a bill becomes law. A bill that dies in committee, as Florida\'s did in 2026, can be filed again in a later session.' },
    ],
    body: (h) => `
<h2>States without a sterile processing certification law: the list</h2>
<p>${h.others.join(', ')}.</p>
<p>The list was built by elimination: the seven states with a text were each read in the statute or rule itself, and the bills listed on this page were checked on the legislature site. A state is listed here when we found no adopted text; a hospital policy, a union agreement or an accreditation standard can still ask for certification.</p>
<h2>Bills and activity</h2>
${h.table(['State', 'What was proposed', 'Where it stands'], (h.P.bills as Array<{ state: string; what: string; status: string }>).map((b) => [b.state, b.what, b.status]), `Florida Senate site and HSPA legislative page, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>What employers ask instead</h2>
<p>Without a state rule, the job description decides. Common wording asks for the CRCST or the CSPDT at hire, or within six to twelve months, and sometimes for a high school diploma or equivalent. Some hospital systems pay for the exam. ${h.calc2('The second calculator on this page')} checks whether you can apply for the CSPDT now and what is missing for the full CRCST, so you can answer that kind of requirement. Both paths are compared on the ${h.a('sterile-processing-technician-certification', 'certification page')}.</p>`,
  },
});
