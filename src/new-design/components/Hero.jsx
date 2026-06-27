// Hero.jsx — full-bleed dark hero for the /new-design EduCare experience.
// Deep royal purple gradient, gold accents, growth-arrow aspiration motif,
// glass stat cluster, and above-the-fold mount animations.

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Globe2 } from 'lucide-react';
import { C, GRADIENTS } from '../theme';
import { Container, Lead, Pill, GoldButton, OutlineButton, scrollTo } from '../ui';

const CHECKS = [
  'Band 7+ focused IELTS coaching',
  'Personal feedback on every task',
  'Small premium batches — limited seats',
];

const STATS = [
  { icon: Users,       value: '1000+', label: 'Students Enrolled' },
  { icon: TrendingUp,  value: '95%',   label: 'Success Rate' },
  { icon: Award,       value: '10+',   label: 'Years Experience' },
  { icon: Globe2,      value: '50+',   label: 'Visa Countries' },
];

// Mount (above-the-fold) animation presets.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: GRADIENTS.hero }}
    >
      {/* ----------------------------- flourishes ----------------------------- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* faint white grid */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
          <defs>
            <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* slow-pulsing blurred blobs */}
        <motion.div
          className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl"
          style={{ background: C.violet, opacity: 0.3 }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.36, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-8rem] right-[-6rem] w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ background: C.lilac, opacity: 0.22 }}
          animate={{ scale: [1, 1.22, 1], opacity: [0.16, 0.3, 0.16] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* upward growth-arrow swoosh — aspiration motif */}
        <svg
          className="absolute bottom-0 right-0 w-[60%] max-w-3xl h-auto"
          viewBox="0 0 600 320"
          fill="none"
          style={{ opacity: 0.5 }}
        >
          <path
            d="M20 300 C 180 300, 300 250, 400 150 S 560 30, 590 20"
            stroke={C.goldSoft}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path d="M560 8 L 592 18 L 572 46" stroke={C.goldSoft} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
        </svg>
      </div>

      {/* ------------------------------- content ------------------------------ */}
      <Container className="relative pt-32 md:pt-44 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ------------------------------- LEFT ------------------------------ */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <Pill light>
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full animate-ping"
                    style={{ background: C.goldSoft, opacity: 0.75 }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: C.gold }} />
                </span>
                Trusted by 1000+ Students in Lahore
              </Pill>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Prepare Smarter. Achieve Your{' '}
              <span style={{ color: C.goldSoft }}>Global Future</span>.
            </motion.h1>

            <motion.div variants={item} className="mt-6 max-w-xl">
              <Lead light>
                Expert coaching in IELTS, PTE &amp; Spoken English — plus full visa &amp; student
                consultancy. Premium small-batch teaching where a trainer personally reviews every
                student&apos;s progress.
              </Lead>
            </motion.div>

            <motion.ul variants={container} className="mt-8 space-y-3.5">
              {CHECKS.map((text) => (
                <motion.li key={text} variants={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: C.goldSoft }} />
                  <span className="text-white/85 text-base md:text-lg">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-4">
              <GoldButton onClick={() => scrollTo('#contact')}>
                Reserve Your Seat
                <ArrowRight className="w-5 h-5" />
              </GoldButton>
              <OutlineButton light onClick={() => scrollTo('#services')}>
                Explore Programs
              </OutlineButton>
            </motion.div>

            {/* mobile/tablet social-proof stats (the right cluster is lg-only) */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden"
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border p-4 backdrop-blur text-center sm:text-left"
                  style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}
                >
                  <div className="text-2xl font-extrabold text-white leading-none">{value}</div>
                  <div className="mt-1 text-xs text-white/70">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ------------------------------- RIGHT ----------------------------- */}
          <div className="hidden lg:block relative">
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="rounded-3xl border p-7 backdrop-blur"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(255,255,255,0.16)',
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      color: C.goldSoft,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="text-3xl font-extrabold text-white leading-none">{value}</div>
                  <div className="mt-2 text-sm text-white/70">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* floating gold badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 max-w-[16rem]"
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-start gap-2.5 rounded-2xl px-4 py-3 shadow-lg"
                style={{ background: C.gold, color: C.royalDeep }}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold leading-snug">
                  Trainer personally reviews every student&apos;s progress
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
