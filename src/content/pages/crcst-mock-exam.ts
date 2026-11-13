import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-mock-exam', group: 'practice', order: 510,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'mock' } },
  mini: { kind: 'mini:pace', props: { q: 50, t: 60 } },
  related: ['crcst-practice-test', 'crcst-exam', 'crcst-pass-rate'],
  sources: ['hspa_outline', 'hspa_handbook'],
  en: {
    slug: 'crcst-mock-exam', nav: 'CRCST mock exam', card: '50 questions in the outline proportions, 60 minutes at the real pace, a score by section.',
    title: 'CRCST Mock Exam: 50 Timed Questions with Section Scores',
    description: 'Timed CRCST mock exam: 50 questions drawn in the proportions of the seven outline sections, 60 minutes at the real pace, corrections and section scores.',
    h1: 'CRCST mock exam at the real pace',
    intro: 'This CRCST mock exam gives 50 questions in 60 minutes, the real pace of 1.2 minutes each, with a score per section at the end: start it above when ready.',
    resume: (h) => `The real CRCST has ${h.C.items} questions in ${h.C.minutes} minutes. A full-length copy would need a bank many times larger than ours to avoid repeats, so this mock keeps the exam's structure at a third of its length: ${h.C.mockItems} questions drawn in the proportions of the seven outline sections, ${h.domains.map((d) => d.items).join(', ')} from sections 1 to 7, and a timer of ${h.num(h.C.mockItems * h.C.minutes / h.C.items)} minutes. Answers are not shown until you finish, as in the exam. The result gives your overall score, a score for each section and every question with its explanation. We use 75 percent as the target line because HSPA does not publish its passing point; treat it as a comfortable margin, not a promise. Each new mock is a new draw.`,
    faqs: (h) => [
      { q: 'Why is the mock 50 questions and not 150?', a: 'To keep the draw varied. With a bank our size, a 150-question mock would repeat most questions every time. Fifty questions in the real proportions and at the real pace give a fair reading of where you stand. Repeat the mock on different days to see whether the score holds.' },
      { q: 'What score on the mock means I am ready?', a: 'We use 75 percent as a target because HSPA does not publish the passing point. Steady scores above it on several fresh draws, with no section far below, are a better sign than a single good result. Look at the section scores as much as the total.' },
      { q: 'Can I pause the CRCST mock exam?', a: 'The timer keeps running like the real exam, so take it when you have an uninterrupted hour. Reloading the page or asking for a new set starts a fresh draw. Find an hour when nobody will need you, put the phone in another room and treat the timer as the real one.' },
      { q: 'Are unscored questions included?', a: 'No. The real exam mixes in 25 unscored pretest questions you cannot recognize; our mock counts every question so the score is easy to read. The real exam has 150 questions in three hours, so after a few mocks it is worth practicing a longer session to build stamina.' },
    ],
    body: (h) => `
<h2>CRCST mock exam blueprint</h2>
${h.outline(`Mock quotas by largest remainders from the outline weights; CRCST content outline read on ${h.read}.`)}
<h2>Taking the mock well</h2>
<p>Sit at a table, phone away, and treat the hour as the exam. Do not look anything up. When the timer ends, read the section scores before the list of questions: a low section tells you where to go back to the ${h.a('crcst-practice-test', 'practice by section')}. Then read every explanation, including those of questions you got right by luck.</p>
<h2>After the mock</h2>
<p>Go back to the ${h.a('crcst-practice-test', 'section practice')} for every section scored below the target, then sit a new draw a few days later. The calculator below checks your pace: enter the questions and minutes left at any moment and see whether you are ahead of the real rhythm.</p>`,
  },
});
