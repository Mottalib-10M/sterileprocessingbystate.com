import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'new-york-central-service-technician-law', group: 'states', order: 110,
  tool: { kind: 'mini:deadline', props: { st: 33, m: 2, y: 2027, locked: 'st' } },
  mini: { kind: 'mini:renewal', props: { m: 6, y: 2024 } },
  related: ['sterile-processing-certification-by-state', 'new-jersey-sterile-processing-certification', 'crcst-certification', 'crcst-renewal'],
  sources: ['ny_law', 'ny_doh'],
  en: {
    slug: 'new-york-central-service-technician-law', nav: 'New York', card: 'Public Health Law § 2824 since 2015: 18 months after hire, 10 hours of education a year, the hiring exception.',
    title: 'New York Central Service Technician Law: § 2824 Rules',
    description: 'New York central service technician law, Public Health Law § 2824: in force since January 1, 2015, 18 months to certify after hire and 10 CE hours a year.',
    h1: 'New York central service technician law: what it asks of you',
    intro: 'The New York central service technician law gives a new hire 18 months to earn the CRCST (Certified Registered Central Service Technician) or the CSPDT (Certified Sterile Processing and Distribution Technician). Enter your month of hire to get your date.',
    resume: (h) => `New York was one of the first states to put sterile processing certification into statute. Public Health Law § 2824, added by Chapter 177 of the Laws of 2013, has applied since ${h.date(h.state('new-york').effective)}, as the Department of Health told hospital chief executives in a letter of January 20, 2015. A person may work as a central service technician in a general hospital, or in a diagnostic and treatment center authorized for ambulatory surgery, only if one of three conditions is met: they passed a nationally accredited central service exam and hold the CRCST, the CSPDT or a substantially equivalent credential; they worked as a technician for a cumulative year in the four years before 2015; or they are a supervised student or intern. Someone hired without the credential has ${h.state('new-york').graceMonths} months from the date of hire to obtain it, and every technician completes ${h.state('new-york').ceHours} hours of continuing education each year.`,
    faqs: (h) => [
      { q: 'How long do I have to get certified after being hired in New York?', a: `${h.state('new-york').graceMonths} months from your date of hire under subdivision 3 of § 2824. Hired on March 1, 2027, you would need the credential by ${h.certifyBy('new-york', '2027-03-01')}. The date counts from the first day of employment, so check it on your offer letter and plan the exam months before the end.` },
      { q: 'Can a New York hospital hire someone who is not certified at all?', a: 'Yes, under the exception in subdivision 6: if the hospital has made a diligent and thorough effort and cannot find enough qualified technicians, it can hire someone who does not qualify, keeps a written record of the search, and that person must meet the exam and credential requirement within two years of starting.' },
      { q: 'Does § 2824 apply to endoscope reprocessing in New York?', a: 'Not when the scopes are processed by high-level disinfection. The Department of Health letter of January 2015 says the law does not apply to those services, while the facility still follows its infection control policies. Staff who sterilize instruments, rather than disinfect scopes, stay within the law when they work in a covered facility, and an employer may still ask scope staff for a credential.' },
      { q: 'What if I miss my yearly continuing education in New York?', a: 'The law allows good-cause extensions, for example extended medical leave or active military duty, documented and granted by the accrediting body or the employing facility. The missing hours are then made up within 90 days after the cause ends. Keep the documents that show the cause and its dates, because the employer may be asked for them at inspection.' },
    ],
    body: (h) => `
<h2>The New York central service technician law in four rules</h2>
${h.table(['Rule', 'What § 2824 says'], [['Who is covered', 'Anyone who decontaminates, prepares, packages, sterilizes, stores or distributes reusable instruments in a general hospital or a diagnostic and treatment center authorized for ambulatory surgery, other than a licensed or certified professional acting under Title 8 of the Education Law'], ['Credential', h.state('new-york').credentials], ['Time after hire', `${h.state('new-york').graceMonths} months`], ['Continuing education', `${h.state('new-york').ceHours} hours a year`]], `Public Health Law § 2824 and the Department of Health letter of January 20, 2015, read on ${h.read}.`, ['l', 'l'])}
<h2>Experience before 2015</h2>
<p>The grandfather rule in New York is not tied to a hire date. It asks for a cumulative year of work as a central service technician in a health care facility during the four years before January 1, 2015. Someone who worked six months in 2012 and six months in 2014 qualifies; someone hired in December 2014 with no earlier experience does not, and falls under the 18-month rule. The employer must confirm in writing the dates of anyone it relies on under this rule.</p>
<h2>Verification between employers</h2>
<p>A facility has to confirm the dates of employment or contract of a technician when another facility, or the technician, asks. Keep a copy of that letter: it is what proves the grandfathered status if you change hospitals. New York also has a separate § 2824 on surgical technologists, so check which section a document cites.</p>
<h2>Keeping it up</h2>
<p>The ten hours of yearly education fit inside the twelve credits HSPA, the Healthcare Sterile Processing Association, asks for the ${h.a('crcst-renewal', 'CRCST renewal')}, so one set of credits can serve both if the topics relate to central service work. ${h.calc2('The second calculator on this page')} gives your next CRCST due date.</p>`,
  },
});
