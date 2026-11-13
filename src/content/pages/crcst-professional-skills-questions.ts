import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-professional-skills-questions', group: 'practice', order: 570,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '7', n: 8 } },
  mini: { kind: 'mini:renewal', props: { m: 4, y: 2026 } },
  related: ['crcst-storage-distribution-questions', 'crcst-practice-test', 'crcst-mock-exam', 'crcst-renewal'],
  sources: ['hspa_outline', 'hspa_handbook'],
  en: {
    slug: 'crcst-professional-skills-questions', nav: '7. Professional skills', card: 'Patient privacy, priorities, complaints, teamwork, medical word parts and keeping up your credential.',
    title: 'CRCST Professional Skills Questions: Section 7 Practice',
    description: 'CRCST professional skills practice, section 7 at 8%: patient privacy, setting priorities, handling complaints, teamwork, word parts and renewal rules.',
    h1: 'CRCST professional skills practice questions',
    intro: 'CRCST professional skills form section 7, 8% of the exam or about 10 scored questions: practice eight above on privacy, priorities, teamwork and terms.',
    resume: (h) => `Section 7, professional development and human relation skills, weighs ${h.pc(h.domains[6].share)}, about ${h.num(h.domains[6].share * h.C.scored)} scored questions. It is the section most often left until the end, which makes it a cheap source of points. Questions deal with how a technician works with others: protecting patient information seen on case carts, labels or schedules under the federal privacy law; setting priorities when two requests arrive at once, with the case about to start first; answering a complaint from a surgeon or nurse by listening, checking and correcting rather than arguing; working in teams that bring sterile processing, surgery and infection prevention together to reduce errors. They also include word parts used in instrument and procedure names, such as the ending -otomy for cutting into and -scope for an instrument to look inside, and the rules of keeping your own credential, such as the ${h.C.renewal.ceHours} continuing education credits the CRCST requires each year.`,
    faqs: (h) => [
      { q: 'Which law protects patient information in sterile processing?', a: 'HIPAA, the Health Insurance Portability and Accountability Act, through its privacy rule. Names and procedures on case carts, labels and schedules are protected and are shared only with those who need them for the work. Exam questions often describe a conversation in a hallway or a label left visible; the right answer limits who sees the information.' },
      { q: 'How should a technician answer a surgeon\'s complaint about a tray?', a: 'Listen, acknowledge the problem, find out what happened and fix it, then report it through the department\'s process so the cause is addressed. Arguing or blaming another shift is the wrong answer on the exam. The same approach helps with any customer, from the operating room to a clinic.' },
      { q: 'Why are medical word parts in section 7?', a: 'Because instrument and procedure names are built from them. Knowing that -ectomy means removal, -otomy cutting into and -scope an instrument to look inside helps you read count sheets and requests. A short list of common endings covers most of what the exam asks, so a few minutes of review go a long way.' },
      { q: 'Is section 7 worth studying if it is only 8 percent?', a: 'Yes. About ten scored questions is the same as a third of a large section, and most of them test judgment and vocabulary that take little time to learn. It is often the section where a short review makes the largest difference to the final score.' },
    ],
    body: (h) => `
<h2>CRCST professional skills: four themes</h2>
${h.table(['Theme', 'What the right answer usually does'], [['Privacy', 'Shares patient details only as the work needs'], ['Priorities', 'Serves the most time-critical patient need first'], ['Communication', 'Listens, checks the facts, corrects, reports'], ['Growth', 'Keeps up education and the credential, learns terms']], `Our summary of section 7 of the CRCST content outline, read on ${h.read}.`, ['l', 'l'])}
<h2>Why this section is easy points</h2>
<p>Unlike the technical sections, section 7 rarely needs a fact you have never seen. Most questions describe a work situation and ask for the professional reaction: protect information, put the patient first, report through the right channel, keep learning. Reading each option slowly and picking the one a good supervisor would expect is usually enough.</p>
<h2>Word parts worth knowing</h2>
${h.table(['Word part', 'Meaning', 'Example'], [['-ectomy', 'surgical removal', 'appendectomy'], ['-otomy', 'cutting into', 'laparotomy'], ['-ostomy', 'creating an opening', 'colostomy'], ['-scope', 'instrument to look inside', 'arthroscope'], ['-plasty', 'surgical repair', 'rhinoplasty'], ['arthro-', 'joint', 'arthroscopy']], 'Common terminology used in instrument names; our list.', ['l', 'l', 'l'])}
<p>The calculator below gives your next CRCST renewal date, one of the facts section 7 can ask about. To go back over the whole outline, take the ${h.a('crcst-mock-exam', 'mock exam')}.</p>`,
  },
});
