// Highlight — promotional "Premium IELTS Batch" feature band (no section id).
// Light outer section wrapping a single large gradient CTA card with a focal
// scarcity stat (only 10 seats / per batch) and the 4 IELTS modules.

import { motion } from 'framer-motion';
import {
  HandHeart,
  MessagesSquare,
  ClipboardCheck,
  Headphones,
  BookOpen,
  PenLine,
  Mic2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import { C, GRADIENTS, whatsappHref } from '../theme';
import {
  Container,
  Eyebrow,
  IconBadge,
  GoldButton,
  fadeUp,
  fadeIn,
  stagger,
  viewport,
  scrollTo,
} from '../ui';

const FEATURES = [
  { icon: HandHeart, label: 'Hands-on learning activities' },
  { icon: MessagesSquare, label: 'Interactive speaking & writing workshops' },
  { icon: ClipboardCheck, label: 'Personal feedback on every task' },
];

const MODULES = [
  { icon: Headphones, label: 'Listening' },
  { icon: BookOpen, label: 'Reading' },
  { icon: PenLine, label: 'Writing' },
  { icon: Mic2, label: 'Speaking' },
];

export default function Highlight() {
  return (
    <section className="py-20 md:py-28" style={{ background: C.white }}>
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-[2rem] p-8 md:p-14 text-white"
          style={{
            background: GRADIENTS.band,
            boxShadow: '0 30px 70px rgba(42,14,71,0.35)',
          }}
        >
          {/* faint grid flourish */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage:
                'radial-gradient(120% 90% at 100% 0%, #000 30%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(120% 90% at 100% 0%, #000 30%, transparent 75%)',
            }}
          />
          {/* soft gold blurred glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'rgba(201,162,39,0.30)' }}
          />
          {/* subtle upward swoosh */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.12]"
            viewBox="0 0 600 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0 110 C 160 60 320 90 460 30 L 600 0"
              fill="none"
              stroke={C.goldSoft}
              strokeWidth="2"
            />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <Eyebrow light>Premium IELTS Batch</Eyebrow>

              <h2
                className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12]"
                style={{ color: C.white }}
              >
                Band 7+ Doesn&rsquo;t Happen{' '}
                <span style={{ color: C.goldSoft }}>by Chance</span>.
              </h2>

              <p
                className="mt-4 text-lg leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.80)' }}
              >
                Limited to only 10 students per batch for genuinely personal
                attention.
              </p>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 space-y-4"
              >
                {FEATURES.map(({ icon: Icon, label }) => (
                  <motion.li
                    key={label}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <IconBadge light size="sm">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </IconBadge>
                    <span
                      className="text-base font-medium"
                      style={{ color: 'rgba(255,255,255,0.92)' }}
                    >
                      {label}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <GoldButton onClick={() => scrollTo('#contact')}>
                  Reserve Your Seat
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </GoldButton>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: C.goldSoft }}
                >
                  <MessageCircle size={18} strokeWidth={2.2} aria-hidden="true" />
                  Or message us on WhatsApp
                </a>
              </div>
              <p
                className="mt-3 text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.70)' }}
              >
                Only 10 seats available
              </p>
            </div>

            {/* RIGHT — focal scarcity stat */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="rounded-3xl p-7 md:p-9"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(2px)',
              }}
            >
              <div className="flex items-end gap-4">
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.1 }}
                  className="font-extrabold leading-none tracking-tight"
                  style={{ color: C.goldSoft, fontSize: '5.5rem' }}
                >
                  10
                </motion.span>
                <span
                  className="pb-3 text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  Seats
                  <br />
                  per batch
                </span>
              </div>

              <div
                className="my-6 h-px w-full"
                style={{ background: 'rgba(255,255,255,0.16)' }}
              />

              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Full IELTS coverage
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid grid-cols-2 gap-3"
              >
                {MODULES.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.14)',
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      style={{ color: C.goldSoft }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-white truncate">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
