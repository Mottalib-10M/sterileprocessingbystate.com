import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-preparation-packaging-questions', group: 'practice', order: 540,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '3', n: 10 } },
  related: ['crcst-sterilization-questions', 'crcst-decontamination-questions', 'crcst-practice-test', 'crcst-mock-exam'],
  sources: ['hspa_outline'],
  en: {
    slug: 'crcst-preparation-packaging-questions', nav: '3. Preparation and packaging', card: 'Inspection, insulation testing, lubrication, wraps, pouches, containers, indicators and labels.',
    title: 'CRCST Preparation and Packaging Questions: Section 3',
    description: 'CRCST preparation and packaging practice, section 3 at 21%: inspection, insulation tests, lubrication, wrapping folds, pouches, containers, indicators.',
    h1: 'CRCST preparation and packaging practice questions',
    intro: 'CRCST preparation and packaging is section 3 of the Certified Registered Central Service Technician exam, worth 21% or about 26 scored questions. Drill ten practice questions here, from inspection to the label on the finished tray.',
    resume: (h) => `Section 3 starts where cleaning ends, in the clean assembly area, and ends with a package ready for the sterilizer. It weighs ${h.pc(h.domains[2].share)}, about ${h.num(h.domains[2].share * h.C.scored)} scored questions. Inspection comes first: each instrument checked under good light and magnification for cleanliness, function and damage, scissors tested for a clean cut, laparoscopic instruments tested for breaks in their insulation, damaged items taken out of service. Then assembly from a count sheet, with lubrication of moving parts when the instructions call for it, tip protectors on delicate points, and set weight kept within limits so the load dries and the tray can be handled. Then packaging chosen for the sterilization method: woven or non-woven wraps with standard envelope or square folds, paper and plastic peel pouches written on only on the plastic side, rigid containers checked for filters, gaskets and latches. An internal chemical indicator goes inside, in the place hardest for the sterilant to reach, and the label carries what is needed to trace the item.`,
    faqs: (h) => [
      { q: 'Where do you write on a peel pouch?', a: 'On the plastic side, or on a label, never on the paper side. Ink on paper can soak through or damage the barrier, and the paper is the part the sterilant passes through. A label on the plastic side or a dedicated label keeps the information readable without harming the barrier.' },
      { q: 'What does an internal chemical indicator prove?', a: 'That the conditions inside the package reached the sterilant on the indicator\'s parameters. It does not prove sterility; it is one check among the physical, chemical and biological monitors. Several kinds of indicator are used together because each one shows something different about the cycle and the pack.' },
      { q: 'Why do instrument trays have weight limits?', a: 'Heavy trays are harder to sterilize and especially to dry, which can lead to wet packs, and they strain the people who lift them. Container and wrap makers state limits in their instructions. Exam questions on weight often ask why a heavy set comes out wet, and the weight is usually the answer.' },
      { q: 'Why test the insulation of laparoscopic instruments?', a: 'Because a break in the insulation of an electrosurgical instrument can let current reach tissue it should not. An insulation tester finds breaks the eye cannot see, and failed instruments are removed. The tester is run on every such instrument at each inspection, and the result is recorded with the set.' },
    ],
    body: (h) => `
<h2>CRCST preparation and packaging checklist</h2>
${h.table(['Step', 'What is checked'], [['Inspection', 'Clean, works, not damaged; magnification and light'], ['Function tests', 'Cutting edges, ratchets, alignment, insulation'], ['Assembly', 'Count sheet, tip protectors, lubrication per instructions'], ['Packaging choice', 'Compatible with the sterilization method'], ['Indicators', 'Internal indicator where penetration is hardest'], ['Labeling', 'Contents, assembler, date, load information for traceability']], `Our summary of section 3 of the CRCST content outline, read on ${h.read}.`, ['l', 'l'])}
<h2>Questions that trip people up</h2>
<p>Many section 3 questions offer one answer that saves time and one that protects the patient's instrument set. If an instrument is damaged, it does not go in the tray "just this once". If a loaned tray arrives, what matters is its content and the case it is for, not the vendor's logo. Where you write on a pouch, where the indicator goes and which fold is standard are pure recall: learn them once.</p>
<h2>Next section</h2>
<p>The package now goes to the sterilizer: ${h.a('crcst-sterilization-questions', 'section 4, sterilization')}, the last of the three large sections.</p>`,
  },
});
