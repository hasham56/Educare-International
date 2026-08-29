import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  'Certified IELTS & PTE Trainers',
  'Expert Visa & Student Consultancy',
  'Small Batch Sizes for Personal Attention',
];

const stats = [
  { value: '1000+', label: 'Students Enrolled', icon: '🎓' },
  { value: '95%',   label: 'Success Rate',      icon: '🏆' },
  { value: '10+',   label: 'Years Experience',  icon: '📅' },
  { value: '50+',   label: 'Visa Countries',    icon: '🌍' },
];

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #692658 0%, #8e2778 55%, #a86699 100%)' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: '#dcbad4' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-10 w-64 h-64 rounded-full blur-3xl opacity-15"
        style={{ background: '#c995bd' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-100 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <span className="w-2 h-2 bg-brand-100 rounded-full animate-pulse" />
              Trusted by 1000+ Students in Lahore
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Your Gateway to{' '}
              <span style={{ color: '#dcbad4' }}>Global Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Expert training in IELTS, PTE, and Spoken English — plus full visa &amp;
              student consultancy. We help you achieve your international dreams.
            </motion.p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle size={20} style={{ color: '#dcbad4' }} className="flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl shadow-xl text-lg"
                style={{ background: '#692658' }}
              >
                Get Free Counseling
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold py-4 px-8 rounded-xl text-lg"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </div>

          {/* Right stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {stats.map(({ value, label, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.18)' }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center cursor-default"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-sm font-medium" style={{ color: '#dcbad4' }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 50C120 40 240 20 360 13.3C480 6.7 600 13.3 720 20C840 26.7 960 33.3 1080 33.3C1200 33.3 1320 26.7 1380 23.3L1440 20V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#faf4fa"
          />
        </svg>
      </div>
    </section>
  );
}
