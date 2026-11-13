import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-decontamination-questions', group: 'practice', order: 530,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '2', n: 10 } },
  related: ['crcst-preparation-packaging-questions', 'crcst-departmental-considerations-questions', 'crcst-practice-test', 'crcst-mock-exam'],
  sources: ['hspa_outline'],
  en: {
    slug: 'crcst-decontamination-questions', nav: '2. Cleaning and decontamination', card: 'Spaulding classes, manual and mechanical cleaning, PPE, biofilm, water and disinfectant tests.',
    title: 'CRCST Decontamination Questions: Section 2, Explained',
    description: 'CRCST decontamination practice questions, section 2 at 21%: Spaulding classes, manual and ultrasonic cleaning, PPE, biofilm, water quality and MEC tests.',
    h1: 'CRCST decontamination practice questions',
    intro: 'CRCST decontamination questions fill section 2, 21% of the exam or about 26 scored questions: answer ten above and read why each answer is right.',
    resume: (h) => `Section 2 of the outline, cleaning, decontamination and disinfection, is one of the three heaviest at ${h.pc(h.domains[1].share)}, about ${h.num(h.domains[1].share * h.C.scored)} scored questions. Its logic is that nothing can be disinfected or sterilized if it is not clean first. Questions follow the instrument from the point of use: kept moist so soil does not dry, transported closed, received in decontamination by a technician in full protective equipment. They ask how hinged instruments are opened, how brushing is done under water to limit aerosols, how detergent is diluted by its instructions, what an ultrasonic cleaner does through cavitation, how a washer disinfector is checked with a cleaning test. They test the Spaulding classification, critical, semi-critical and non-critical, which decides whether an item needs sterilization, high-level disinfection or low-level disinfection. They also cover biofilm, the water used for the final rinse, the bloodborne pathogens rule that protects workers, and the concentration test for reused high-level disinfectants.`,
    faqs: (h) => [
      { q: 'What are the three Spaulding classes?', a: 'Critical items enter sterile tissue or the bloodstream and are sterilized. Semi-critical items touch mucous membranes or non-intact skin and need at least high-level disinfection. Non-critical items touch only intact skin and need low-level disinfection. Exam questions often describe an item and ask for its class, so start from what the item touches on the patient.' },
      { q: 'Why are instruments brushed under water?', a: 'Brushing below the surface of the cleaning solution keeps splashes and aerosols down, which protects the technician and the room. It is a frequent CRCST scenario. It also keeps the technician from being sprayed with contaminated water, which is why the technique appears in several CRCST scenarios on decontamination.' },
      { q: 'How does an ultrasonic cleaner work?', a: 'By cavitation: sound waves create tiny bubbles in the solution that implode against the instrument surface and loosen soil from places brushes cannot reach. It follows, not replaces, gross soil removal. The cleaner is checked with its own tests, and items are rinsed afterwards.' },
      { q: 'What is the minimum effective concentration test for?', a: 'For checking, before use, that a reused high-level disinfectant solution is still strong enough to work. A solution that fails is discarded, whatever its expiry date. The test strip and its timing follow the maker\'s instructions, and the results are recorded in the log for that solution.' },
    ],
    body: (h) => `
<h2>CRCST decontamination in the order of the work</h2>
<ol>
<li><strong>Point of use.</strong> Gross soil wiped, instruments kept moist, sharps protected, closed transport.</li>
<li><strong>Receiving.</strong> Full PPE: fluid-resistant gown, gloves, face protection. Single-use items separated and discarded.</li>
<li><strong>Manual cleaning.</strong> Hinged instruments open, detergent at the right dilution and temperature, brushing under water, lumens brushed and flushed.</li>
<li><strong>Mechanical cleaning.</strong> Ultrasonic cleaner, washer disinfector, cart washer, each checked with its own tests.</li>
<li><strong>Rinse and dry.</strong> Final rinse of critical devices with treated water, then drying before inspection.</li>
</ol>
<h2>Disinfection levels</h2>
${h.table(['Spaulding class', 'Contact', 'Minimum process'], [['Critical', 'Sterile tissue, vascular system', 'Sterilization'], ['Semi-critical', 'Mucous membranes, non-intact skin', 'High-level disinfection'], ['Non-critical', 'Intact skin', 'Low-level disinfection']], 'Spaulding classification as used in sterile processing teaching; our summary.', ['l', 'l', 'l'])}
<h2>Where people lose points</h2>
<p>The classic errors are choosing a fix for a symptom instead of the cleaning step that comes first, and confusing disinfection with sterilization. Read the item described: what does it touch on the patient? That decides the class and the process. Next, try ${h.a('crcst-preparation-packaging-questions', 'section 3, preparation and packaging')}.</p>`,
  },
});
