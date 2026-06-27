// Shared UI primitives for the /new-design experience.
// Every section composes these so the whole page stays visually consistent
// (one purple, one gold, one card radius, one shadow, one animation vocabulary).
//
// This barrel intentionally exports a few motion/helper constants alongside the
// components, so fast-refresh's component-only rule does not apply here.
/* eslint-disable react-refresh/only-export-components */

import { motion } from 'framer-motion';
import { C } from './theme';

/* ----------------------------- motion presets ---------------------------- */

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const viewport = { once: true, margin: '-60px' };

export const scrollTo = (href) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

/* ------------------------------- layout ---------------------------------- */

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

/* ------------------------------- typography ------------------------------ */

export function Eyebrow({ children, light = false, className = '' }) {
  const c = light ? C.goldSoft : C.gold;
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-semibold text-xs tracking-[0.22em] uppercase ${className}`}
      style={{ color: c }}
    >
      <span className="h-px w-8" style={{ background: c }} />
      {children}
    </span>
  );
}

export function SectionHeading({ children, light = false, className = '' }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12] ${className}`}
      style={{ color: light ? C.white : C.ink }}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, light = false, className = '' }) {
  return (
    <p
      className={`text-lg leading-relaxed ${className}`}
      style={{ color: light ? 'rgba(255,255,255,0.78)' : C.body }}
    >
      {children}
    </p>
  );
}

// Centered (or left) section header: eyebrow + heading + lead, animated together.
export function SectionHeader({ eyebrow, title, lead, light = false, center = true, className = '' }) {
  return (
    <motion.div
      className={`${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} mb-14 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <SectionHeading light={light} className="mt-4 mb-4">{title}</SectionHeading>
      {lead && <Lead light={light}>{lead}</Lead>}
    </motion.div>
  );
}

/* --------------------------------- cards --------------------------------- */

export function Card({ children, className = '', hover = true, style = {}, ...rest }) {
  return (
    <motion.div
      className={`relative rounded-3xl bg-white border ${className}`}
      style={{ borderColor: C.lilacSoft, boxShadow: '0 18px 44px rgba(74,29,122,0.08)', ...style }}
      whileHover={hover ? { y: -6, boxShadow: '0 28px 64px rgba(74,29,122,0.16)' } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function IconBadge({ children, light = false, size = 'md', className = '' }) {
  const dim = size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-11 h-11' : 'w-14 h-14';
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl flex-shrink-0 ${dim} ${className}`}
      style={
        light
          ? { background: 'rgba(255,255,255,0.12)', color: C.goldSoft, border: '1px solid rgba(255,255,255,0.18)' }
          : { background: C.lilacSoft, color: C.royal }
      }
    >
      {children}
    </span>
  );
}

export function Pill({ children, light = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${className}`}
      style={
        light
          ? { background: 'rgba(228,199,102,0.16)', color: C.goldSoft, border: '1px solid rgba(228,199,102,0.3)' }
          : { background: C.lilacSoft, color: C.royal }
      }
    >
      {children}
    </span>
  );
}

/* -------------------------------- buttons -------------------------------- */

export function PrimaryButton({ children, className = '', ...rest }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-xl ${className}`}
      style={{ background: C.royal, boxShadow: '0 14px 30px rgba(74,29,122,0.30)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = C.royalDark)}
      onMouseLeave={(e) => (e.currentTarget.style.background = C.royal)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

// Gold accent CTA — best on dark / purple backgrounds.
export function GoldButton({ children, className = '', ...rest }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl ${className}`}
      style={{ background: C.gold, color: C.royalDeep, boxShadow: '0 14px 30px rgba(201,162,39,0.30)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = C.goldSoft)}
      onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function OutlineButton({ children, light = false, className = '', ...rest }) {
  const color = light ? '#FFFFFF' : C.royal;
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border-2 transition-colors ${className}`}
      style={{ borderColor: light ? 'rgba(255,255,255,0.45)' : C.lilac, color }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
