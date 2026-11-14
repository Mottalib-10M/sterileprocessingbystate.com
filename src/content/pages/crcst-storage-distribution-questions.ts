import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'crcst-storage-distribution-questions', group: 'practice', order: 560,
  tool: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '5', n: 9 } },
  mini: { kind: 'quiz', props: { exam: 'crcst', mode: 'practice', domain: '6', n: 6 } },
  related: ['crcst-professional-skills-questions', 'crcst-sterilization-questions', 'crcst-practice-test', 'crcst-mock-exam'],
  sources: ['hspa_outline'],
  en: {
    slug: 'crcst-storage-distribution-questions', nav: '5 and 6. Storage and equipment', card: 'Event-related sterility, first in first out, storage distances, restocking levels, recalls, case carts, patient care equipment.',
    title: 'CRCST Storage and Distribution Questions: Sections 5, 6',
    description: 'CRCST storage and distribution practice, sections 5 and 6 at 14%: event-related sterility, FIFO, PAR levels, recalls, case carts, patient care equipment.',
    h1: 'CRCST storage and distribution practice questions',
    intro: 'CRCST storage and distribution questions cover sections 5 and 6 of the Certified Registered Central Service Technician exam, about 18 scored questions together. The first quiz on this page practices storage, the second patient care equipment.',
    resume: (h) => `Two smaller sections close the instrument loop. Section 5, sterile storage, transport and inventory management, weighs ${h.pc(h.domains[4].share)}, about ${h.num(h.domains[4].share * h.C.scored)} scored questions. Its central idea is event-related sterility: a package stays sterile until something happens to it, such as a tear, moisture, a fall or a broken seal, not until a date passes. Questions cover how sterile items are stored, at set distances from floors, ceilings and outside walls, why shipping cartons are removed in a break-out area, how stock is rotated first in, first out, how PAR levels (periodic automatic replenishment) set the quantity to restock, how items travel between buildings in closed or covered carts, how case carts are built for surgery, and what the department does in a product recall. Section 6, patient care equipment and distribution, weighs ${h.pc(h.domains[5].share)}, about ${h.num(h.domains[5].share * h.C.scored)} questions: pumps and other devices cleaned, checked for preventive maintenance labels and damage, stored clean and tracked.`,
    faqs: (h) => [
      { q: 'What is event-related sterility?', a: 'The principle that a sterile package stays sterile until an event compromises it: damage, moisture, a fall, a broken seal or poor handling. Facilities still may use dates for stock rotation, but the event decides. Exam questions describe a package with a tear, a stain or a damp spot and ask whether it may be used.' },
      { q: 'Why remove outside shipping cartons before sterile storage?', a: 'Shipping cartons have travelled through warehouses and trucks and carry dust and possibly pests. They are opened in a break-out area so that only the inner packaging enters the clean storage area. Only the inner, clean packaging goes onto the sterile shelves, and the cartons stay out of the clean area.' },
      { q: 'What should a technician do with equipment whose maintenance label has expired?', a: 'Not send it out. It is tagged and sent for preventive maintenance by the biomedical or clinical engineering team, following the facility\'s policy. Look for the option that removes the device from circulation and labels it, rather than one that sends it out because it seems to work.' },
      { q: 'What does FIFO mean in sterile storage?', a: 'First in, first out: older stock is used before newer stock, by placing new items behind or below existing ones. It limits the time items spend on shelves. The same idea applies to patient care equipment, where the oldest clean item is sent out first.' },
    ],
    body: (h) => `
<h2>CRCST storage and distribution in short</h2>
${h.table(['Topic', 'Key idea'], [['Event-related sterility', 'Sterile until an event compromises the package'], ['Storage conditions', 'Distance from floor, ceiling and outside walls; controlled environment'], ['Stock rotation', 'FIFO; PAR levels set restock quantities'], ['Transport', 'Closed or covered carts, separated clean and soiled'], ['Recalls', 'Locate, remove and document the items concerned'], ['Patient care equipment', 'Cleaned, inspected, maintenance current, tracked, stored clean']], `Our summary of sections 5 and 6 of the CRCST content outline, read on ${h.read}.`, ['l', 'l'])}
<h2>Patient care equipment questions</h2>
<p>The second quiz on this page draws from section 6 only. Its questions are short scenarios about pumps, cords and returned devices. The answer is almost always to take a doubtful device out of circulation and send it to the right team, never to repair or release it yourself.</p>
<h2>Last section</h2>
<p>The outline ends with ${h.a('crcst-professional-skills-questions', 'section 7, professional development and human relations')}, about one question in twelve.</p>`,
  },
});
