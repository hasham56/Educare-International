import { BookOpen, Mic2, FileText, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <BookOpen size={32} />,
    title: 'IELTS Preparation',
    color: 'blue',
    badge: 'Most Popular',
    description:
      'Comprehensive IELTS coaching covering all four modules — Listening, Reading, Writing, and Speaking. Our expert trainers help you score Band 7+ with structured practice and mock tests.',
    features: ['Full-length Mock Tests', 'Module-wise Training', 'Speaking Practice Labs', 'Band Score Analysis'],
  },
  {
    icon: <FileText size={32} />,
    title: 'PTE Academic',
    color: 'indigo',
    badge: 'Fast Results',
    description:
      'Master the Pearson Test of English with AI-scored practice sessions. PTE is widely accepted for study, work, and migration to Australia, UK, Canada, and New Zealand.',
    features: ['AI-Based Mock Tests', 'Score Improvement Strategy', 'Timed Practice Sessions', 'Detailed Feedback'],
  },
  {
    icon: <Mic2 size={32} />,
    title: 'Spoken English',
    color: 'teal',
    badge: 'Beginner Friendly',
    description:
      'Build real-world English communication skills through interactive sessions. From everyday conversation to professional presentations — we tailor the course to your level.',
    features: ['Group & 1-on-1 Sessions', 'Accent Neutralization', 'Business English', 'Confidence Building'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Visa Consultancy',
    color: 'amber',
    badge: 'Expert Guidance',
    description:
      'End-to-end visa and student consultancy for UK, Canada, Australia, Europe, and more. Our advisors guide you through the entire process from university selection to visa approval.',
    features: ['University Selection', 'Application Assistance', 'Visa Documentation', 'Pre-Departure Briefing'],
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-600 text-white',   badge: 'bg-blue-100 text-blue-700',   btn: 'text-blue-700 hover:text-blue-900'   },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-600 text-white', badge: 'bg-indigo-100 text-indigo-700', btn: 'text-indigo-700 hover:text-indigo-900' },
  teal:   { bg: 'bg-teal-50',   icon: 'bg-teal-600 text-white',   badge: 'bg-teal-100 text-teal-700',   btn: 'text-teal-700 hover:text-teal-900'   },
  amber:  { bg: 'bg-amber-50',  icon: 'bg-amber-500 text-white',  badge: 'bg-amber-100 text-amber-700', btn: 'text-amber-700 hover:text-amber-900'  },
};

export default function Services() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From language proficiency tests to international university placements,
            EduCare International covers every step of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service) => {
            const c = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`relative rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden`}
              >
                <div className={`h-1.5 ${service.color === 'amber' ? 'bg-amber-500' : service.color === 'teal' ? 'bg-teal-600' : service.color === 'indigo' ? 'bg-indigo-600' : 'bg-blue-600'}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl ${c.icon}`}>{service.icon}</div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.color === 'amber' ? 'bg-amber-500' : service.color === 'teal' ? 'bg-teal-500' : service.color === 'indigo' ? 'bg-indigo-500' : 'bg-blue-500'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className={`inline-flex items-center gap-1 text-sm font-semibold mt-auto ${c.btn} transition-colors group`}
                  >
                    Enroll Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
