// About.jsx — EduCare /new-design "About Us" section (id="about").
// Light section: visual panel + animated count-up stats on the left,
// editorial copy + feature points on the right.

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, BookOpen } from 'lucide-react';
import { C, GRADIENTS, CONTACT } from '../theme';
import {
  Container,
  Eyebrow,
  SectionHeading,
  fadeUp,
  stagger,
  viewport,
} from '../ui';
import Logo from '../Logo';

/* ----------------------------- count-up stat ----------------------------- */
// Animates a number from 0 -> target over ~1500ms, once, when scrolled into
// view (IntersectionObserver, threshold 0.5).

function Counter({ target, suffix = '', duration = 1500 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const steps = Math.max(1, Math.round(duration / 30)); // ~30ms tick
        let tick = 0;
        intervalRef.current = setInterval(() => {
          tick += 1;
          const progress = Math.min(1, (performance.now() - start) / duration);
          setValue(Math.round(progress * target));
          if (progress >= 1 || tick >= steps) {
            setValue(target);
            clearInterval(intervalRef.current);
          }
        }, 30);
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* --------------------------------- data ---------------------------------- */

const STATS = [
  { icon: Users, value: 1000, suffix: '+', label: 'Students Trained' },
  { icon: Award, value: 10, suffix: '+', label: 'Years of Excellence' },
  { icon: Target, value: 95, suffix: '%', label: 'Success Rate' },
  { icon: BookOpen, value: 4, suffix: '', label: 'Core Programs' },
];

const POINTS = [
  {
    title: 'Certified Instructors',
    desc: 'British Council & Pearson certified trainers with 5+ years of experience.',
  },
  {
    title: 'Personalized Approach',
    desc: 'Small batch sizes mean every student gets individual attention and feedback.',
  },
  {
    title: 'Proven Track Record',
    desc: 'Over 95% of students hit their target scores on the first attempt.',
  },
];

/* ------------------------------- component -------------------------------- */

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ background: C.white }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* -------------------------- LEFT: visual -------------------------- */}
          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* gradient brand panel */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] flex items-center justify-center"
              style={{ background: GRADIENTS.band }}
            >
              {/* faint white grid overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage:
                    'radial-gradient(circle at center, black 35%, transparent 78%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, black 35%, transparent 78%)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <Logo plate className="h-12" />
                <p className="mt-5 text-xl sm:text-2xl font-extrabold text-white">
                  EduCare International
                </p>
                <p
                  className="mt-1.5 text-sm font-semibold"
                  style={{ color: C.goldSoft }}
                >
                  Where Education Meets Care
                </p>
                <p className="mt-1 text-xs text-white/70">{CONTACT.address}</p>
              </div>
            </div>

            {/* floating "10+ years" badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl p-5 shadow-xl"
              style={{ background: C.royal }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.25 }}
            >
              <p className="text-3xl font-extrabold leading-none text-white">10+</p>
              <p
                className="mt-1 text-xs font-semibold tracking-wide"
                style={{ color: C.goldSoft }}
              >
                Years Trusted
              </p>
            </motion.div>

            {/* 2x2 count-up stats */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {STATS.map(({ icon: Icon, value, suffix, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="rounded-xl p-4 border"
                  style={{ background: C.cloud, borderColor: C.lilacSoft }}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{ background: C.lilacSoft, color: C.royal }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <p
                    className="mt-3 text-2xl font-extrabold leading-none"
                    style={{ color: C.ink }}
                  >
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="mt-1 text-sm" style={{ color: C.body }}>
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* --------------------------- RIGHT: text -------------------------- */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>About Us</Eyebrow>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SectionHeading className="mt-4">
                Lahore&apos;s Trusted IELTS, PTE &amp;{' '}
                <span style={{ color: C.gold }}>Visa Consultancy</span>
              </SectionHeading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed"
              style={{ color: C.body }}
            >
              EduCare International has empowered students in Lahore for over a
              decade, combining rigorous language training with expert immigration
              consultancy — a one-stop partner for everyone aiming to study, work or
              settle abroad.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed"
              style={{ color: C.body }}
            >
              Our certified trainers bring real-world exam experience to every
              class. Whether you need Band 7 for IELTS, a high PTE score for
              migration, fluent spoken English, or a smooth visa journey — we&apos;ve
              got you covered.
            </motion.p>

            <div className="mt-8 space-y-5">
              {POINTS.map(({ title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="flex gap-4">
                  <span
                    className="mt-1.5 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full"
                    style={{ background: C.lilacSoft }}
                    aria-hidden="true"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: C.royal }}
                    />
                  </span>
                  <div>
                    <p className="font-bold" style={{ color: C.ink }}>
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: C.body }}>
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
