import { ShieldCheck, Clock, Star, Headphones, BookMarked, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Officially Recognized',
    desc: 'Our programs follow British Council guidelines and Pearson standards to ensure the highest quality preparation.',
  },
  {
    icon: <Star size={28} />,
    title: 'Expert Instructors',
    desc: 'Learn from highly qualified, certified trainers with real exam experience and a passion for teaching.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: '95% Success Rate',
    desc: 'Our students consistently achieve their target bands and scores, enabling them to reach global opportunities.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Flexible Timings',
    desc: 'Morning, evening, and weekend batches to fit your schedule. We also offer online options.',
  },
  {
    icon: <Headphones size={28} />,
    title: '24/7 Support',
    desc: 'Our team is always available via WhatsApp and email to answer questions and provide guidance.',
  },
  {
    icon: <BookMarked size={28} />,
    title: 'Comprehensive Material',
    desc: 'Free study materials, past papers, and an online portal with hundreds of practice tests included.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Our Advantage</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Why Choose EduCare International?
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We don't just teach — we invest in your success. Here's why thousands of students trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-400 text-blue-900 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-blue-200 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
