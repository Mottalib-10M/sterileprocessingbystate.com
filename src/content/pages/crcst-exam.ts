import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-exam', group: 'crcst', order: 310,
  tool: { kind: 'mini:pace', props: { q: 150, t: 180 } },
  mini: { kind: 'mini:domains', props: { n: 125 } },
  related: ['crcst-practice-test', 'crcst-mock-exam', 'crcst-pass-rate', 'crcst-certification'],
  sources: ['hspa_handbook', 'hspa_outline'],
  en: {
    slug: 'crcst-exam', nav: 'CRCST exam', card: '150 questions in three hours, seven outline sections, how the passing point is set.',
    title: 'CRCST Exam: 150 Questions, 3 Hours and the 7 Sections',
    description: 'CRCST exam format: 150 multiple-choice questions, 125 of them scored, in 3 hours at Prometric, the 7 outline sections and their weights, and how passing is set.',
    h1: 'CRCST exam format, sections and passing',
    intro: 'The CRCST exam gives you 180 minutes for 150 questions, 1.2 minutes each: use the timer calculator above to check your pace during practice.',
    resume: (h) => `The CRCST exam is a computer-based test of ${h.C.items} multiple-choice questions taken at a Prometric test center. ${h.C.scored} questions are scored and ${h.C.unscored} are pretest questions that HSPA is trying out; they are mixed in at random and cannot be told apart, so every question deserves the same care. You have ${h.C.minutes / 60} hours. Each question has ${h.C.options} options and one point goes to each correct scored answer, with no penalty for a wrong one. The content follows an outline drawn from a 2023 job task analysis, in seven sections. The passing point is fixed by a panel using the Angoff method, supplemented by the Beuk compromise method, and approved by the HSPA Certification Council; HSPA does not publish it as a number of right answers. Your pass or fail result appears on screen when you finish.`,
    faqs: (h) => [
      { q: 'How many questions are on the CRCST exam?', a: `${h.C.items} multiple-choice questions: ${h.C.scored} scored and ${h.C.unscored} unscored pretest questions placed at random. You have ${h.C.minutes} minutes for all of them. The 25 pretest questions do not count toward your score, but they cannot be told apart from the scored ones, so treat every question as if it counted.` },
      { q: 'What score do you need to pass the CRCST?', a: 'HSPA does not publish a fixed number of right answers. A panel sets the passing point with the Angoff and Beuk methods. Practice tests often aim at about 75 percent of the scored questions as a comfortable margin, which is the target our mock uses.' },
      { q: 'Is there a penalty for guessing on the CRCST?', a: 'No. The score is the number of scored questions answered correctly, so an unanswered question is simply a lost point. Answer every question before time runs out. Keep a steady pace so that no scored question is left blank when the clock reaches the end of the three hours.' },
      { q: 'Which CRCST section is the biggest?', a: 'Three sections share first place at 21 percent each: cleaning, decontamination and disinfection; preparation and packaging; and the sterilization process. Together they make up 63 percent of the exam. Practicing those three sections first gives the largest return for the time spent.' },
    ],
    body: (h) => `
<h2>The CRCST exam outline</h2>
${h.outline(`CRCST content outline (2023 job task analysis, 2024 revision), read on ${h.read}. Questions per section are our rounding of the weights.`)}
<h2>On exam day</h2>
<p>Arrive early with a current, valid government ID whose name matches your application exactly: the handbook gives examples of matching names and says an unacceptable ID forfeits the fee. At ${h.num(h.C.minutes / h.C.items, 1)} minutes a question you have time to read twice, but not to dwell: the calculator above shows whether you are ahead or behind with the questions and minutes you have left.</p>
<h2>How to prepare</h2>
<p>Study by outline section, giving most time to the three 21-percent sections. HSPA publishes a technical manual and a workbook; we have not reviewed them. Our ${h.a('crcst-practice-test', 'practice questions')} are written from the public outline, and the ${h.a('crcst-mock-exam', 'mock exam')} draws 50 of them in the outline's proportions, timed at the real pace. The calculator below splits any set size by section.</p>`,
  },
});
