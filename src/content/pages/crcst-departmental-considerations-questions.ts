import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-departmental-considerations-questions', group: 'practice', order: 520,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '1', n: 10 } },
  related: ['crcst-decontamination-questions', 'crcst-practice-test', 'crcst-mock-exam', 'crcst-exam'],
  sources: ['hspa_outline'],
  en: {
    slug: 'crcst-departmental-considerations-questions', nav: '1. Departmental considerations', card: 'Workflow, air pressure, attire, safety data sheets, records and standards: section 1 drilled.',
    title: 'CRCST Departmental Considerations: Section 1 Questions',
    description: 'CRCST departmental considerations practice, section 1 at 15%: one-way workflow, air pressure by area, attire, safety data sheets, records and standards.',
    h1: 'CRCST departmental considerations practice questions',
    intro: 'CRCST departmental considerations make up section 1 of the Certified Registered Central Service Technician exam, 15% or about 19 scored questions. Work through the ten practice questions here, each one explained.',
    resume: (h) => `Section 1 of the CRCST outline covers how a sterile processing department is laid out, run and kept safe, before any instrument is cleaned. It weighs ${h.pc(h.domains[0].share)} of the exam, about ${h.num(h.domains[0].share * h.C.scored)} of the ${h.C.scored} scored questions. The questions test whether you know why the department is built the way it is: soiled items move one way, from decontamination to preparation to sterilization to storage, never back; the decontamination room is kept at negative air pressure so contaminated air does not escape, while clean areas are kept positive; temperature and humidity are monitored and reported when they drift. They also test the rules for people: attire and personal protective equipment by area, no artificial nails, hand hygiene when moving between zones, safe lifting. And they test the paperwork that makes the work traceable: safety data sheets for chemicals, sterilizer and quality records kept for set periods, and the role of standards from bodies such as AAMI (Association for the Advancement of Medical Instrumentation) and AORN (Association of periOperative Registered Nurses) and of federal agencies such as the FDA.`,
    faqs: (h) => [
      { q: 'Why is the decontamination area at negative pressure?', a: 'So that air flows into it from surrounding areas and not out of it. Contaminated aerosols created by cleaning stay in the room and are exhausted, instead of reaching the clean preparation and storage areas. Questions often describe a door left open or a reading out of range; the right answer protects the clean side and reports the problem.' },
      { q: 'What is a safety data sheet used for in sterile processing?', a: 'It is the manufacturer\'s document for a chemical, such as a detergent or disinfectant, listing its hazards, the protective equipment needed, first aid and spill steps. Technicians should know where the sheets are kept. Knowing where the sheets are kept, and reading them before using a new product, is the kind of habit section 1 questions reward.' },
      { q: 'Are AAMI standards law?', a: 'Not by themselves. AAMI and AORN documents are professional standards and recommended practices. They become binding when an agency, an accreditor or a facility policy adopts them, which is common. Exam questions sometimes ask which kind of document a standard is, so remember the difference between guidance and law.' },
      { q: 'Why does section 1 matter if it is not about sterilizing?', a: 'Because errors in workflow, air pressure or attire undo good cleaning and sterilization. The exam gives it about one question in seven, more than storage or patient care equipment. It also sets the habits every other section builds on, so it is worth practicing before the larger sections.' },
    ],
    body: (h) => `
<h2>CRCST departmental considerations: what to know</h2>
${h.revision(h.table(['Topic', 'The idea the questions test'], [['Workflow', 'Dirty to clean, one direction, physical separation of areas'], ['Air pressure', 'Decontamination negative, preparation and sterile storage positive'], ['Environment', 'Temperature and humidity within set ranges, deviations reported'], ['Attire and hygiene', 'Area-specific attire, no artificial nails, hand hygiene between areas'], ['Chemicals', 'Safety data sheets, labeling, spill steps'], ['Records', 'Kept for set periods for traceability and recalls'], ['Standards', 'Guidance from AAMI (a medical device standards group) and AORN (the operating room nurses\' association); FDA (federal agency) clearance of devices']], `Our summary of section 1 of the CRCST content outline, read on ${h.read}.`, ['l', 'l']))}
<h2>How the questions are asked</h2>
<p>Most are short scenarios: a technician moves from one area to another, a reading drifts, a visitor arrives without the right attire. The right answer is usually the step that protects the clean side of the department first and reports the problem, rather than a quick fix done alone. Look for the option that follows a written policy.</p>
<h2>Next sections</h2>
<p>Once section 1 is solid, go to ${h.a('crcst-decontamination-questions', 'section 2, cleaning and decontamination')}, one of the three largest sections. The ${h.a('crcst-practice-test', 'practice test page')} mixes all seven.</p>`,
  },
});
