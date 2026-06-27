// Services.jsx — "Programs" section for the /new-design experience.
// Light section: four program cards (IELTS, PTE, Spoken English, Visa Consultancy).

import { motion } from 'framer-motion';
import { BookOpen, FileText, Mic2, Globe, ArrowRight } from 'lucide-react';

import { C } from '../theme';
import {
  Container,
  SectionHeader,
  Card,
  IconBadge,
  Pill,
  fadeUp,
  stagger,
  viewport,
  scrollTo,
} from '../ui';

const PROGRAMS = [
  {
    icon: BookOpen,
    title: 'IELTS Preparation',
    tag: 'Most Popular',
    description:
      'Comprehensive IELTS coaching across Listening, Reading, Writing & Speaking. Expert trainers help you target Band 7+ with structured practice and mock tests.',
    features: [
      'Full-length Mock Tests',
      'Module-wise Training',
      'Speaking Practice Labs',
      'Band Score Analysis',
    ],
  },
  {
    icon: FileText,
    title: 'PTE Academic',
    tag: 'Fast Results',
    description:
      'Master the Pearson Test of English with AI-scored practice. PTE is accepted for study, work and migration to Australia, UK, Canada & NZ.',
    features: [
      'AI-Based Mock Tests',
      'Score Improvement Strategy',
      'Timed Practice Sessions',
      'Detailed Feedback',
    ],
  },
  {
    icon: Mic2,
    title: 'Spoken English',
    tag: 'Beginner Friendly',
    description:
      'Build real-world English communication — from everyday conversation to professional presentations, tailored to your level.',
    features: [
      'Group & 1-on-1 Sessions',
      'Accent Neutralization',
      'Business English',
      'Confidence Building',
    ],
  },
  {
    icon: Globe,
    title: 'Visa Consultancy',
    tag: 'Expert Guidance',
    description:
      'End-to-end visa & student consultancy for the UK, Canada, Australia, Europe and more — from university selection to visa approval.',
    features: [
      'University Selection',
      'Application Assistance',
      'Visa Documentation',
      'Pre-Departure Briefing',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: C.cloud }}>
      <Container>
        <SectionHeader
          center
          eyebrow="What We Offer"
          title={
            <>
              Programs Built Around <span style={{ color: C.gold }}>You</span>
            </>
          }
          lead="From language proficiency to international placements, EduCare covers every step of your journey."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {PROGRAMS.map(({ icon: Icon, title, tag, description, features }) => (
            <motion.div key={title} variants={fadeUp} className="h-full">
              <Card className="h-full flex flex-col p-7">
                {/* top accent rule */}
                <span
                  className="block h-1.5 w-12 rounded-full mb-6"
                  style={{ background: C.royal }}
                  aria-hidden="true"
                />

                {/* badge + tag */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <IconBadge>
                    <Icon className="w-6 h-6" strokeWidth={1.9} aria-hidden="true" />
                  </IconBadge>
                  <Pill>{tag}</Pill>
                </div>

                <h3 className="text-xl font-bold mb-2.5" style={{ color: C.ink }}>
                  {title}
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: C.body }}>
                  {description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: C.royal }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: C.ink }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollTo('#contact')}
                  className="group mt-auto inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: C.royal }}
                  aria-label={`Enroll now in ${title}`}
                >
                  Enroll Now
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
