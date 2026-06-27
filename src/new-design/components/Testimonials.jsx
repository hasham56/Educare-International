// Testimonials.jsx — "Real Students, Real Results" success stories grid.
// LIGHT section on C.cloud. Composes shared UI primitives for visual consistency.

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { C } from '../theme';
import {
  Container,
  SectionHeader,
  Card,
  Pill,
  stagger,
  fadeUp,
  viewport,
} from '../ui';

const TESTIMONIALS = [
  {
    name: 'Fatima Malik',
    role: 'IELTS → University of Manchester',
    result: 'Band 7.5',
    initials: 'FM',
    avatarColor: '#4A1D7A',
    quote:
      'EduCare transformed my IELTS prep. My speaking instructor was exceptional — I went from Band 5.5 to 7.5 in two months and now study in Manchester!',
  },
  {
    name: 'Ali Hassan',
    role: 'PTE → Australia PR',
    result: 'PTE 79',
    initials: 'AH',
    avatarColor: '#37145C',
    quote:
      "I'd failed PTE twice before EduCare. Their structured approach and AI mock tests were a game changer — scored 79 and got my Australian visa within weeks.",
  },
  {
    name: 'Zara Ahmed',
    role: 'Visa → Canada Study Permit',
    result: 'Accepted!',
    initials: 'ZA',
    avatarColor: '#6B3FA0',
    quote:
      'From university selection to visa documentation, the team guided me every step. I was accepted to three Canadian universities.',
  },
  {
    name: 'Usman Raza',
    role: 'Spoken English → Career Growth',
    result: 'Promoted!',
    initials: 'UR',
    avatarColor: '#4A1D7A',
    quote:
      'The Spoken English course gave me the confidence to present in English at work. I got promoted within 3 months.',
  },
  {
    name: 'Sara Khan',
    role: 'IELTS → New Zealand',
    result: 'Band 7.0',
    initials: 'SK',
    avatarColor: '#37145C',
    quote:
      'Outstanding materials and dedicated teachers. I hit exactly the band I needed for nursing registration in New Zealand.',
  },
  {
    name: 'Bilal Sheikh',
    role: 'PTE + Visa → UK Work Visa',
    result: 'PTE 73',
    initials: 'BS',
    avatarColor: '#6B3FA0',
    quote:
      'Took PTE prep and visa consultancy. The team is knowledgeable, always available, and truly cares. I now work in London!',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4" style={{ color: C.gold }} fill={C.gold} strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: C.cloud }}>
      <Container>
        <SectionHeader
          center
          eyebrow="Success Stories"
          title={
            <>
              Real Students, <span style={{ color: C.gold }}>Real Results</span>
            </>
          }
          lead="Real stories from students who achieved their international dreams with EduCare International."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="h-full">
              <Card className="p-7 h-full flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <Stars />
                  <Quote className="w-8 h-8 flex-shrink-0" style={{ color: C.lilac }} aria-hidden="true" />
                </div>

                <p className="mt-4 text-[0.975rem] leading-relaxed flex-1" style={{ color: C.body }}>
                  {t.quote}
                </p>

                <div
                  className="mt-6 pt-5 flex items-center gap-3.5 border-t"
                  style={{ borderColor: C.lilacSoft }}
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 font-bold text-white text-sm"
                    style={{ background: t.avatarColor }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold leading-tight truncate" style={{ color: C.ink }}>
                      {t.name}
                    </p>
                    <p className="text-sm leading-tight truncate" style={{ color: C.body }}>
                      {t.role}
                    </p>
                  </div>
                  <Pill className="flex-shrink-0 whitespace-nowrap">{t.result}</Pill>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
