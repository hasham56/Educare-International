// WhyUs.jsx — "Our Advantage" dark band section for the /new-design experience.
// Glass cards on a deep royal gradient, gold-accented heading, scroll-reveal.

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Star,
  TrendingUp,
  Clock,
  Headphones,
  BookMarked,
} from 'lucide-react';

import { C, GRADIENTS } from '../theme';
import {
  Container,
  SectionHeader,
  IconBadge,
  fadeUp,
  stagger,
  viewport,
} from '../ui';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Officially Recognized',
    desc: 'Programs follow British Council guidelines and Pearson standards for top-quality prep.',
  },
  {
    icon: Star,
    title: 'Expert Instructors',
    desc: 'Learn from certified trainers with real exam experience and a passion for teaching.',
  },
  {
    icon: TrendingUp,
    title: '95% Success Rate',
    desc: 'Students consistently achieve their target bands and scores, unlocking global opportunities.',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    desc: 'Morning, evening and weekend batches to fit your schedule — plus online options.',
  },
  {
    icon: Headphones,
    title: 'Always-On Support',
    desc: 'Reach our team any time on WhatsApp and email for questions and guidance.',
  },
  {
    icon: BookMarked,
    title: 'Comprehensive Material',
    desc: 'Free study materials, past papers and an online portal with hundreds of practice tests.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: GRADIENTS.band }}
    >
      {/* faint white grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.08,
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative">
        <SectionHeader
          center
          light
          eyebrow="Our Advantage"
          title={
            <>
              Why Students{' '}
              <span style={{ color: C.goldSoft }}>Choose</span> EduCare
            </>
          }
          lead="We don't just teach — we invest in your success. Here's why thousands of students trust us."
        />

        <motion.div
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-3xl border p-7"
              style={{
                background: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.14)',
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <IconBadge light>
                <Icon size={26} strokeWidth={2} aria-hidden="true" />
              </IconBadge>

              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p
                className="mt-2.5 text-sm leading-relaxed"
                style={{ color: C.lilac }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
