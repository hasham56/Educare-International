import { Award, Users, Target, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: <Users size={22} />,    value: 1000, suffix: '+', label: 'Students Trained'    },
  { icon: <Award size={22} />,    value: 10,   suffix: '+', label: 'Years of Excellence' },
  { icon: <Target size={22} />,   value: 95,   suffix: '%', label: 'Success Rate'        },
  { icon: <BookOpen size={22} />, value: 4,    suffix: '',  label: 'Core Programs'       },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #692658 0%, #8e2778 60%, #a86699 100%)' }}
            >
              <div className="text-center">
                <motion.img
                  src="/educare_logo.png"
                  alt="EduCare International"
                  className="w-40 h-40 object-contain rounded-full mx-auto mb-4 shadow-2xl"
                  style={{ background: 'white', padding: '8px' }}
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="text-white text-xl font-bold">EduCare International</div>
                <div className="text-sm mt-1" style={{ color: '#dcbad4' }}>Lahore, Pakistan</div>
              </div>

              {/* Badge inside card — mobile only */}
              <div
                className="absolute bottom-4 right-4 rounded-xl p-3 shadow-xl font-bold text-center text-white sm:hidden"
                style={{ background: '#692658', border: '2px solid rgba(220,186,212,0.4)' }}
              >
                <div className="text-xl font-extrabold">10+</div>
                <div className="text-xs" style={{ color: '#dcbad4' }}>Years Trusted</div>
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

            {/* Floating badge — sm+ only */}
            <motion.div
              className="hidden sm:block absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl font-bold text-center text-white"
              style={{ background: '#692658' }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="text-3xl font-extrabold">10+</div>
              <div className="text-sm" style={{ color: '#dcbad4' }}>Years Trusted</div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 sm:mt-12">
              {stats.map(({ icon, value, suffix, label }, i) => (
                <motion.div
                  key={label}
                  className="rounded-xl p-4 flex items-center gap-3 border"
                  style={{ background: '#faf4fa', borderColor: '#dcbad4' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: '#dcbad4', color: '#692658' }}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-xl font-extrabold" style={{ color: '#692658' }}>
                      <Counter target={value} suffix={suffix} />
                    </div>
                    <div className="text-xs font-medium" style={{ color: '#888085' }}>{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
              ].map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  className="flex gap-4"
                  custom={i}
                  variants={pointVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
