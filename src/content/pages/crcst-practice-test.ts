import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-practice-test', group: 'practice', order: 500,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', n: 10 } },
  mini: { kind: 'mini:domains', props: { n: 40 } },
  related: ['crcst-mock-exam', 'crcst-sterilization-questions', 'crcst-decontamination-questions', 'crcst-exam'],
  sources: ['hspa_outline', 'hspa_handbook'],
  en: {
    slug: 'crcst-practice-test', nav: 'CRCST practice test', card: 'Ten questions at a time, by outline section or mixed, every answer explained right away.',
    title: 'CRCST Practice Test: Free Questions by Section, Explained',
    description: 'Free CRCST practice test: ten questions at a time from the seven outline sections, each answer explained at once, with your progress kept only in your browser.',
    h1: 'CRCST practice test, explained answer by answer',
    intro: 'This CRCST practice test (Certified Registered Central Service Technician) draws ten questions at a time from our bank written on the seven outline sections. Answer one and its explanation appears.',
    resume: (h) => `The questions here are written by Radif Partners from the public CRCST content outline of HSPA, the Healthcare Sterile Processing Association. They are not questions from the real exam, which HSPA keeps confidential, and no one outside HSPA can honestly offer those. Our bank holds ${h.count} questions with four options each, like the real test, spread over the seven outline sections in rough proportion to their weights. Each answer comes with a short explanation and the outline reference it was written against, so a wrong answer becomes something to look up rather than a guess to forget. Choose a section in the menu to focus, or leave it on all sections to mix. Your answers stay in your browser; nothing is sent to a server, and there is no account.`,
    faqs: (h) => [
      { q: 'Are these real CRCST exam questions?', a: 'No. They are written by us from the public content outline, in the style of the exam: one correct answer among four. HSPA does not release live exam questions, and you should be wary of anyone claiming to sell them. Use them to learn the topics, not to guess the exam.' },
      { q: 'How many practice questions should I do before the CRCST?', a: `There is no official number. A common approach is to work through every section until your scores are steady above 75 percent, then sit timed mocks. Our bank has ${h.count} questions; repeat sections where you miss the most. Mix in timed sets once the sections feel easy.` },
      { q: 'Where are my results kept?', a: 'In your browser\'s local storage on this device. Clearing the browser data deletes them. No account, no email address and nothing leaves your device. If you use several devices, each one keeps its own record, and none of them sends your answers anywhere.' },
      { q: 'Which sections should I practice most?', a: 'The three sections at 21 percent each: cleaning and decontamination, preparation and packaging, and sterilization. Together they are worth about 79 of the 125 scored questions. The smaller sections still count, so do not leave them for the last day before the exam.' },
    ],
    body: (h) => `
<h2>How this CRCST practice test is built</h2>
${h.table(['Section', 'Questions in our bank'], h.domains.map((d) => [`${d.code}. ${d.name}`, h.inPool(d.code)]), `Our bank on ${h.read}. The section names are those of the CRCST content outline.`, ['l', 'r'])}
<p>Each set of ten is drawn at random from the section you choose. The bank is smaller than a commercial question pack, on purpose: every question has been checked against the outline and reviewed for the usual traps of practice tests, such as a correct option that is always the longest. When you have done a section twice without errors, move on.</p>
<h2>Practicing by section</h2>
<ul>
<li>${h.a('crcst-departmental-considerations-questions', 'Section 1, departmental considerations')}: workflow, air pressure, dress code, safety data sheets, standards.</li>
<li>${h.a('crcst-decontamination-questions', 'Section 2, cleaning and decontamination')}: Spaulding classes, manual and mechanical cleaning, protective equipment, water quality.</li>
<li>${h.a('crcst-preparation-packaging-questions', 'Section 3, preparation and packaging')}: inspection, insulation testing, wrapping, indicators, labels.</li>
<li>${h.a('crcst-sterilization-questions', 'Section 4, sterilization')}: air removal tests, biological indicators, cycles, wet packs, records.</li>
<li>${h.a('crcst-storage-distribution-questions', 'Sections 5 and 6, storage and equipment')}: event-related sterility, stock rotation, transport, recalls, patient care equipment.</li>
<li>${h.a('crcst-professional-skills-questions', 'Section 7, professional skills')}: privacy, priorities, teamwork, medical terms.</li>
</ul>
<h2>From practice to exam</h2>
<p>When each section feels solid, switch to the ${h.a('crcst-mock-exam', 'mock exam')}: 50 questions in the outline's proportions, timed at the real pace of 1.2 minutes per question. ${h.calc2('The second calculator on this page')} shows how many questions of each section belong in a set of the size you choose.</p>`,
  },
});
