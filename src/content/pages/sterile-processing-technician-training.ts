import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'sterile-processing-technician-training', group: 'become', order: 210,
  tool: { kind: 'mini:hours', props: { w: 20, d1: 40, d2: 40, d3: 20 } },
  mini: { kind: 'mini:ready', props: { mo: 3, h: 100, c: 1 } },
  related: ['how-to-become-a-sterile-processing-technician', 'crcst-provisional-certification', 'cbspd-certification', 'sterile-processing-certification-cost'],
  sources: ['hspa_handbook', 'hspa_become', 'cbspd_tech'],
  en: {
    slug: 'sterile-processing-technician-training', nav: 'Training and hands-on hours', card: 'What a course gives you, what it does not, and how to plan the 400 hours area by area.',
    title: 'Sterile Processing Technician Training: Hours vs Course',
    description: 'Sterile processing technician training: what each exam accepts, the 400 HSPA hours in five areas, the CBSPD course route, and the weeks needed at your own pace.',
    h1: 'Sterile processing technician training and the 400 hands-on hours',
    intro: 'Sterile processing technician training counts only if it gets you to 400 hands-on hours or a course grade of 70. Enter your hours to see what is left.',
    resume: (h) => `Training for this job comes in two forms that the certification bodies treat differently. Hands-on hours in a real sterile processing department are what HSPA, the Healthcare Sterile Processing Association, requires for the CRCST (Certified Registered Central Service Technician): ${h.num(h.C.handsOn.total)} of them, split into five areas, signed by a manager of the department. A classroom or online course is not required by HSPA, although it can help you pass the exam and some courses include an externship that produces the hours. The CBSPD, the Certification Board for Sterile Processing and Distribution, works the other way round: a sterile processing technician course passed with a grade of 70 or higher is one of its four routes to the CSPDT exam (Certified Sterile Processing and Distribution Technician), the others being twelve months of full-time work, six months of allied health plus six months of sterile processing, or a year of product sales or service in the field. Choosing a course therefore depends on which credential your state or employer accepts and on whether you can get into a department.`,
    faqs: (h) => [
      { q: 'Is a sterile processing course required to take the CRCST?', a: 'No. HSPA requires 400 hands-on hours, before or within six months after the exam, not a course. A course can still help you prepare and may include an externship that counts toward the hours. Check before you enroll whether the course places you in a hospital department.' },
      { q: 'Does an online course count toward the CSPDT?', a: 'The CBSPD route names a sterile processing technician training course passed with a grade of 70 or higher and asks for proof of it. The page we read does not exclude online delivery; check that the course issues a graded transcript. Ask the school for a sample transcript.' },
      { q: 'Can volunteer hours count for the CRCST?', a: 'Yes. The handbook says the 400 hours can be completed on a paid or volunteer basis, as long as they are in a sterile processing department and are witnessed and signed by a manager above you. Ask the manager to sign the hours as you go, area by area, rather than all at once at the end.' },
      { q: 'Which area of the 400 hours takes longest?', a: 'Three areas need 120 hours each: decontamination, preparing and packaging instruments, and sterilization and disinfection. Storage and distribution need 24 and quality assurance 16, often logged alongside the others. Those smaller areas are often logged alongside the larger ones, during the same weeks, so plan to record them as they happen.' },
    ],
    body: (h) => `
<h2>Sterile processing technician training: what each exam accepts</h2>
${h.table(['', 'CRCST (HSPA)', 'CSPDT (CBSPD)'], [['Hands-on hours', `${h.num(h.C.handsOn.total)} hours, before or within ${h.C.handsOn.provisionalMonths} months after the exam`, '12 months of full-time work is one route'], ['Course', 'Not required', 'Passed with 70 or more is one route'], ['Proof', 'Manager signature on the application', 'Manager or employer letter, or course transcript']], `HSPA handbook revised January 2026 and CBSPD technician page, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>Planning the hours</h2>
<p>A department will usually rotate a trainee through decontamination, assembly and sterilization. Ask your supervisor which area you start in, keep a weekly log with the five headings of the application, and have it signed as you go rather than at the end. Quality assurance hours come from tasks such as reading biological and chemical indicators, documenting loads and checking instrument function. ${h.calc1('The calculator at the top of this page')} gives the hours left in each area and the weeks it takes at your pace.</p>
<h2>Choosing a course</h2>
<p>A course is worth it when it includes a clinical rotation, when you are aiming at the CSPDT without a year of work, or when an employer pays for it. Look for a graded transcript, the number of externship hours, and whether those hours are logged on HSPA's areas. The ${h.a('sterile-processing-certification-cost', 'cost calculator')} shows how a course price changes your total. The ${h.a('crcst-practice-test', 'practice questions')} on this site are free.</p>`,
  },
});
