import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Certified IELTS & PTE Trainers',
  'Expert Visa & Student Consultancy',
  'Small Batch Sizes for Personal Attention',
];

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #692658 0%, #8e2778 55%, #a86699 100%)',
      }}
    >
      {/* Background grid pattern */}
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

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: '#dcbad4' }} />
      <div className="absolute bottom-24 left-10 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: '#c995bd' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-100 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-brand-100 rounded-full animate-pulse" />
              Trusted by 1000+ Students in Lahore
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Gateway to{' '}
              <span style={{ color: '#dcbad4' }}>Global Success</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Expert training in IELTS, PTE, and Spoken English — plus full visa &amp;
              student consultancy. We help you achieve your international dreams.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle size={20} style={{ color: '#dcbad4' }} className="flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl hover:-translate-y-0.5 text-lg"
                style={{ background: '#692658' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#4a1a3d')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#692658')}
              >
                Get Free Counseling
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {[
              { value: '1000+', label: 'Students Enrolled',  icon: '🎓' },
              { value: '95%',   label: 'Success Rate',       icon: '🏆' },
              { value: '10+',   label: 'Years Experience',   icon: '📅' },
              { value: '50+',   label: 'Visa Countries',     icon: '🌍' },
            ].map(({ value, label, icon }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-sm font-medium" style={{ color: '#dcbad4' }}>{label}</div>
              </div>
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
