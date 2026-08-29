import { BookOpen, Mic2, FileText, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <BookOpen size={32} />,
    title: 'IELTS Preparation',
    badge: 'Most Popular',
    accent: '#8e2778',
    accentLight: '#dcbad4',
    description:
      'Comprehensive IELTS coaching covering all four modules — Listening, Reading, Writing, and Speaking. Our expert trainers help you score Band 7+ with structured practice and mock tests.',
    features: ['Full-length Mock Tests', 'Module-wise Training', 'Speaking Practice Labs', 'Band Score Analysis'],
  },
  {
    icon: <FileText size={32} />,
    title: 'PTE Academic',
    badge: 'Fast Results',
    accent: '#692658',
    accentLight: '#c995bd',
    description:
      'Master the Pearson Test of English with AI-scored practice sessions. PTE is widely accepted for study, work, and migration to Australia, UK, Canada, and New Zealand.',
    features: ['AI-Based Mock Tests', 'Score Improvement Strategy', 'Timed Practice Sessions', 'Detailed Feedback'],
  },
  {
    icon: <Mic2 size={32} />,
    title: 'Spoken English',
    badge: 'Beginner Friendly',
    accent: '#a86699',
    accentLight: '#dcbad4',
    description:
      'Build real-world English communication skills through interactive sessions. From everyday conversation to professional presentations — we tailor the course to your level.',
    features: ['Group & 1-on-1 Sessions', 'Accent Neutralization', 'Business English', 'Confidence Building'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Visa Consultancy',
    badge: 'Expert Guidance',
    accent: '#8e2778',
    accentLight: '#c995bd',
    description:
      'End-to-end visa and student consultancy for UK, Canada, Australia, Europe, and more. Our advisors guide you through the entire process from university selection to visa approval.',
    features: ['University Selection', 'Application Assistance', 'Visa Documentation', 'Pre-Departure Briefing'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Services() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-20" style={{ background: '#faf4fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#8e2778' }}>
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#202221' }}>
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#888085' }}>
            From language proficiency tests to international university placements,
            EduCare International covers every step of your journey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(142,39,120,0.12)' }}
              className="relative rounded-2xl border bg-white flex flex-col overflow-hidden"
              style={{ borderColor: '#dcbad4' }}
            >
              <div className="h-1.5" style={{ background: service.accent }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="p-3 rounded-xl text-white"
                    style={{ background: service.accent }}
                  >
                    {service.icon}
                  </motion.div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: service.accentLight, color: service.accent }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: '#202221' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#888085' }}>{service.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: '#202221' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-auto group transition-colors"
                  style={{ color: service.accent }}
                >
                  Enroll Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
