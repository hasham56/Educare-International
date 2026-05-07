import { Award, Users, Target, BookOpen } from 'lucide-react';

const stats = [
  { icon: <Users size={22} />,    value: '1000+', label: 'Students Trained'  },
  { icon: <Award size={22} />,    value: '10+',   label: 'Years of Excellence' },
  { icon: <Target size={22} />,   value: '95%',   label: 'Success Rate'      },
  { icon: <BookOpen size={22} />, value: '4',     label: 'Core Programs'     },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #692658 0%, #8e2778 60%, #a86699 100%)' }}
            >
              {/* Logo centered */}
              <div className="text-center">
                <img
                  src="/educare_logo.png"
                  alt="EduCare International"
                  className="w-40 h-40 object-contain rounded-full mx-auto mb-4 shadow-2xl"
                  style={{ background: 'white', padding: '8px' }}
                />
                <div className="text-white text-xl font-bold">EduCare International</div>
                <div className="text-sm mt-1" style={{ color: '#dcbad4' }}>Lahore, Pakistan</div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl font-bold text-center text-white"
              style={{ background: '#692658' }}
            >
              <div className="text-3xl font-extrabold">10+</div>
              <div className="text-sm" style={{ color: '#dcbad4' }}>Years Trusted</div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map(({ icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 flex items-center gap-3 border"
                  style={{ background: '#faf4fa', borderColor: '#dcbad4' }}
                >
                  <div
                    className="p-2.5 rounded-lg flex-shrink-0"
                    style={{ background: '#dcbad4', color: '#692658' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xl font-extrabold" style={{ color: '#692658' }}>{value}</div>
                    <div className="text-xs font-medium" style={{ color: '#888085' }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#8e2778' }}>
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6" style={{ color: '#202221' }}>
              Lahore's Trusted Education &amp; Visa Consultancy
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#888085' }}>
              EduCare International has been empowering students in Lahore for over a decade. We
              combine rigorous language training with expert immigration consultancy to provide a
              one-stop solution for everyone aspiring to study, work, or settle abroad.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#888085' }}>
              Our certified trainers bring years of real-world experience to every classroom.
              Whether you need a Band 7 for IELTS, a high PTE score for migration, fluent spoken
              English for career growth, or a smooth visa journey — we've got you covered.
            </p>

            <div className="space-y-5">
              {[
                { title: 'Certified Instructors', desc: 'All trainers are British Council and Pearson certified with 5+ years of experience.' },
                { title: 'Personalized Approach',  desc: 'Small batch sizes ensure every student gets individual attention and feedback.' },
                { title: 'Proven Track Record',    desc: 'Over 95% of our students achieve their target scores in the first attempt.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: '#dcbad4' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: '#8e2778' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#202221' }}>{title}</h4>
                    <p className="text-sm mt-0.5" style={{ color: '#888085' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
