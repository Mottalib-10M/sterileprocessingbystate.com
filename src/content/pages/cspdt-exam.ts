import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'cspdt-exam', group: 'cbspd', order: 410,
  tool: { kind: 'mini:pace', props: { q: 90, t: 100 } },
  mini: { kind: 'mini:window', props: { m: 1, y: 2027 } },
  related: ['cbspd-certification', 'crcst-exam', 'crcst-pass-rate', 'cbspd-recertification'],
  sources: ['cbspd_tech', 'cbspd_bulletin', 'cbspd_stats'],
  en: {
    slug: 'cspdt-exam', nav: 'CSPDT exam', card: '150 questions, 3 hours, a scaled 70 to pass, eight content areas and how results arrive.',
    title: 'CSPDT Exam: 150 Questions, Scaled 70 and 8 Content Areas',
    description: 'CSPDT exam of the CBSPD: 150 questions with 125 scored, 3 hours, a passing scaled score of 70, the eight content areas with their shares and how results arrive.',
    h1: 'CSPDT exam: format, content areas and scoring',
    intro: 'The CSPDT exam has 150 questions in 3 hours and a passing scaled score of 70; check your pace with the questions and minutes you have left above.',
    resume: (h) => `The CBSPD technician exam has ${h.D.items} questions: ${h.D.scored} scored and ${h.D.unscored} unscored pretest questions. You have ${h.D.minutes / 60} hours. It is offered only in English in the United States and is taken at a test center during one of the CBSPD's one-week windows; walk-in candidates are not admitted. The passing scaled score is ${h.D.passScaled}. Candidates in the United States receive an official pass or fail at the end of the computer exam. Those who pass get no numeric score: a certificate with an ID number, a pin and their name on the CBSPD website follow by mail within six weeks of the end of the window. Those who fail receive their score and a diagnostic report by content area. The content comes from a job analysis the CBSPD redoes about every five years, spread over eight areas, from roles and responsibilities to ethics.`,
    faqs: (h) => [
      { q: 'What is the passing score for the CSPDT?', a: `A scaled score of ${h.D.passScaled}. It is a scaled score, not a percentage of right answers, and passing candidates are not told their numeric score. Candidates who fail receive their score and a diagnostic report by content area, which shows where to focus before the next window.` },
      { q: 'How long is the CSPDT exam?', a: `${h.D.minutes / 60} hours for ${h.D.items} questions, of which ${h.D.scored} are scored and ${h.D.unscored} are pretest questions that do not count. Plan to arrive early on the day, since walk-in candidates are not admitted and the exam must be taken at the site you were assigned within your window.` },
      { q: 'What can I bring into the CSPDT exam?', a: 'The bulletin bars books, papers, notes, phones, pagers, calculators and similar devices. Bags and large purses are collected by the proctors and returned after the session. Visitors are not allowed. Leave anything else in your car or at home, so there is nothing to hand over.' },
      { q: 'Does the CSPDT include anatomy questions?', a: 'Life science is one of the eight areas, about 9 percent of the exam. The CBSPD lists anatomy, physiology and microbiology under it, as background to infection prevention in reprocessing. The share is small, but these questions are among the easiest to prepare for with a basic reading list.' },
    ],
    body: (h) => `
<h2>CSPDT exam content areas</h2>
${h.cspdtOutline(`CBSPD technician candidate bulletin 2026, read on ${h.read}.`)}
<p>Compared with the CRCST outline, the CBSPD gives a separate share to life science and to ethics, and slightly less to decontamination and sterilization. Both exams spend most of their questions on the same loop: cleaning, packaging, sterilizing, storing. A technician prepared for one is largely prepared for the other.</p>
<h2>Exam day rules</h2>
<p>You must test at the site you were assigned in your chosen window. Bring the identification the bulletin asks for. Cheating, including discussing questions on social media, can bar a person from any CBSPD exam for at least six months. International candidates receive results by mail within eight weeks.</p>
<h2>Using the pace calculator</h2>
<p>The real ratio is ${h.num(h.D.minutes / h.D.items, 1)} minutes per question. The calculator above tells you whether you are on time when you enter the questions and minutes left, so you can practice that check during a ${h.a('crcst-mock-exam', 'timed mock')}. The calculator below gives the next testing week and its deadline.</p>`,
  },
});
