import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'how-to-become-a-sterile-processing-technician', group: 'become', order: 200,
  tool: { kind: 'mini:ready', props: { mo: 0, h: 0, c: 0 } },
  mini: { kind: 'mini:deadline', props: { st: 33, m: 1, y: 2027 } },
  related: ['sterile-processing-technician-training', 'sterile-processing-technician-certification', 'sterile-processing-certification-cost', 'sterile-processing-certification-by-state'],
  sources: ['hspa_become', 'hspa_handbook', 'cbspd_tech', 'hspa_leg'],
  en: {
    slug: 'how-to-become-a-sterile-processing-technician', nav: 'How to become a technician', card: 'Five steps from no experience to a certified job, with the order that suits your state.',
    title: 'Become a Sterile Processing Technician: 5 Steps for 2026',
    description: 'How to become a sterile processing technician in 2026: get the 400 hands-on hours or a course, pass the CRCST or CSPDT, then meet your state deadline.',
    h1: 'How to become a sterile processing technician, step by step',
    intro: 'How to become a sterile processing technician comes down to 400 hands-on hours and one of two national certification exams. Enter your experience to see which one you could sit today.',
    resume: (h) => `A sterile processing technician, also called a central service technician, cleans, inspects, packages, sterilizes and delivers the reusable instruments a hospital or surgery center uses. There is no state license for the job. What employers and seven states ask for is a national credential: the CRCST, Certified Registered Central Service Technician, from the Healthcare Sterile Processing Association (HSPA), or the CSPDT, Certified Sterile Processing and Distribution Technician, from the Certification Board for Sterile Processing and Distribution (CBSPD). The CRCST needs ${h.num(h.C.handsOn.total)} hours of hands-on work in a department, either before the exam or within ${h.C.handsOn.provisionalMonths} months after it. The CSPDT needs twelve months of work in the field, or a training course passed with a grade of 70 or more. Each exam has ${h.C.items} multiple-choice questions in three hours and costs ${h.usd(h.C.fee)} at HSPA and ${h.usd(h.D.feeWeb)} at the CBSPD.`,
    faqs: (h) => [
      { q: 'Can I become a sterile processing technician with no experience?', a: `Yes. Many people are hired as trainees and log their hours on the job. HSPA lets you sit the CRCST first and send the ${h.num(h.C.handsOn.total)} hours within ${h.C.handsOn.provisionalMonths} months; for the CSPDT, a course passed with 70 or more replaces the year of work.` },
      { q: 'Do I need a degree or a high school diploma?', a: 'The exam routes described on this page are built on work hours or a graded course. Employers and schools often add a high school diploma or equivalent, so check the job postings and course entry rules in your area. A school may also set its own entry test.' },
      { q: 'How long does it take to become a sterile processing technician?', a: 'It depends on how fast you log hours. At 40 hours a week, the 400 CRCST hours take about ten weeks; at 20 hours a week, about twenty. Add three to four weeks for HSPA to process the application. Allow extra weeks if you need a retake.' },
      { q: 'Is the job the same as a surgical technologist?', a: 'No. A surgical technologist works in the operating room during procedures. A sterile processing technician works in the department that reprocesses instruments before and after. Several state laws, Pennsylvania\'s for example, regulate the two jobs separately. Both work with surgical instruments, but the training, the certifications and the daily tasks are different.' },
    ],
    body: (h) => `
<h2>How to become a sterile processing technician in five steps</h2>
<ol>
<li><strong>Check your state.</strong> In ${h.a('sterile-processing-certification-by-state', 'seven states')} a law sets how long you have after hire to certify, from 18 to 36 months. Elsewhere the employer decides.</li>
<li><strong>Get into a department.</strong> A trainee job, an externship arranged by a school, or volunteering in a sterile processing department all count for HSPA hours if a manager signs them.</li>
<li><strong>Choose your exam.</strong> The CRCST is taken any day at a Prometric test center; the CSPDT in four weeks a year. Both are national.</li>
<li><strong>Apply and sit it.</strong> HSPA processes an application in about ${h.C.processingWeeks} weeks and then gives ${h.C.windowDays} days to take the exam.</li>
<li><strong>Keep it.</strong> Twelve hours of education a year for the CRCST; 100 points every five years for the CSPDT; ten hours a year in states that set it.</li>
</ol>
<h2>The 400 hours, area by area</h2>
${h.table(['Area of experience', 'Hours'], (h.C.handsOn.areas as Array<[string, number]>).map(([a, n]) => [a, n]), `HSPA Certification Handbook, revised January 2026, read on ${h.read}.`, ['l', 'r'])}
<p>The hours are physically witnessed and signed by someone in a managerial position in the department, above you. They can be paid or volunteer. A school externship counts if it takes place in a real department. The ${h.a('sterile-processing-technician-training', 'training page')} explains how courses and hours fit together.</p>
<h2>What the work involves</h2>
<p>The job follows the instrument around a loop: receiving soiled trays in decontamination, cleaning by hand and in washers, inspecting and assembling sets, wrapping or containing them, running steam or low-temperature sterilizers, recording the loads, storing sterile items and delivering them to the operating rooms. It is physical, done in protective equipment, and measured by records: every load can be traced. The CRCST outline weights four areas above all: cleaning and decontamination, preparation and packaging, sterilization, each 21 percent of the exam, and departmental considerations, 15 percent.</p>`,
  },
});
