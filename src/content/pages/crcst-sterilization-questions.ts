import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-sterilization-questions', group: 'practice', order: 550,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '4', n: 10 } },
  related: ['crcst-storage-distribution-questions', 'crcst-preparation-packaging-questions', 'crcst-mock-exam', 'crcst-practice-test'],
  sources: ['hspa_outline'],
  en: {
    slug: 'crcst-sterilization-questions', nav: '4. Sterilization', card: 'Bowie-Dick tests, biological indicators, steam cycles, low-temperature methods, wet packs, records.',
    title: 'CRCST Sterilization Questions: Section 4 Practice Set',
    description: 'CRCST sterilization practice questions, section 4 at 21%: Bowie-Dick tests, biological indicators and controls, steam cycles, low-temperature methods.',
    h1: 'CRCST sterilization practice questions',
    intro: 'CRCST sterilization questions are section 4, 21% of the exam and about 26 scored items: practice ten above, from the daily air removal test to a positive indicator.',
    resume: (h) => `Section 4, the sterilization process, weighs ${h.pc(h.domains[3].share)}, about ${h.num(h.domains[3].share * h.C.scored)} scored questions. It is about proving that a cycle worked, as much as running it. Steam is the main method: questions ask how a gravity displacement sterilizer pushes air out, what a dynamic air removal sterilizer does, which exposure times and temperatures are typical for wrapped items, and why the Bowie-Dick test is run each day, in an empty chamber, before the first load, to check air removal. Monitoring follows three layers: physical monitors and the cycle printout, which the operator reads at the end of each cycle; chemical indicators outside and inside packs; and biological indicators with spores of Geobacillus stearothermophilus for steam, incubated with a control from the same lot. Loads with implants wait for the biological result. Questions also cover low-temperature methods for heat-sensitive devices, wet packs, cooling on the cart, load labels, immediate-use steam sterilization and the response to a positive biological indicator.`,
    faqs: (h) => [
      { q: 'What does a Bowie-Dick test check?', a: 'Air removal and steam penetration in a dynamic air removal sterilizer. It is run daily in an empty chamber before the first processed load; a failed test means the sterilizer is not used until the cause is found. The test sheet is kept in the sterilizer records with the date and the sterilizer number.' },
      { q: 'Why is a control biological indicator incubated?', a: 'To show that the spores of that lot were alive and the incubator works. If the control does not grow, a negative result from the processed indicator would prove nothing. A positive control with a negative processed indicator is the result that supports releasing the load.' },
      { q: 'What should happen to a wet pack?', a: 'It is considered contaminated, because moisture can wick microorganisms through the packaging. It is not released; it is reprocessed, and repeated wet packs are investigated. The tray is not dried and released; it goes back through processing, and repeated cases are investigated with the sterilizer and the loading.' },
      { q: 'What is immediate-use steam sterilization for?', a: 'For an item needed urgently, when there is no time to process it the usual way, used right away and not stored. It is not a substitute for enough instrument inventory. It is documented each time it is used, so that the department can track and reduce it over time.' },
    ],
    body: (h) => `
<h2>CRCST sterilization: the three layers of monitoring</h2>
${h.table(['Monitor', 'What it shows', 'When'], [['Physical', 'Time, temperature, pressure of the cycle', 'Every cycle, read by the operator'], ['Chemical', 'Exposure to the process; internal indicators show conditions inside the pack', 'Every package'], ['Biological', 'Whether the cycle killed highly resistant spores', 'Routinely, and for every load with an implant'], ['Air removal test', 'Bowie-Dick: air removal in a pre-vacuum sterilizer', 'Daily, empty chamber, first cycle']], `Our summary of section 4 of the CRCST content outline, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>Reading scenario questions</h2>
<p>When a question describes something wrong after a cycle, a wet tray, a printout outside its range, a positive biological indicator, the answer starts with not releasing the load and following the policy for recall and investigation. Options that dry, re-label or ship the items to save time are there to be rejected.</p>
<h2>Next sections</h2>
<p>After sterilization, items go to storage and distribution: ${h.a('crcst-storage-distribution-questions', 'sections 5 and 6')}. To test the three large sections together, take the ${h.a('crcst-mock-exam', 'mock exam')}.</p>`,
  },
});
