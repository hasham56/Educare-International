import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Fatima Malik', role: 'IELTS Student → UK University',          band: 'Band 7.5', avatar: 'FM', bg: '#8e2778', text: 'EduCare International completely transformed my IELTS preparation. My Speaking instructor was exceptional — I went from Band 5.5 to 7.5 in just two months. Now I am studying at the University of Manchester!' },
  { name: 'Ali Hassan',   role: 'PTE Student → Australia PR',             band: 'PTE 79',   avatar: 'AH', bg: '#692658', text: 'I had failed PTE twice before joining EduCare. Their structured approach and AI-based mock tests were a game changer. Scored 79 and got my Australian visa approved within weeks. Highly recommended!' },
  { name: 'Zara Ahmed',   role: 'Visa Consultancy → Canada Study Permit', band: 'Accepted!', avatar: 'ZA', bg: '#a86699', text: 'From university selection to visa documentation, the EduCare team guided me every step of the way. I was accepted to three Canadian universities. Their consultants truly know what they are doing.' },
  { name: 'Usman Raza',   role: 'Spoken English → Career Growth',         band: 'Promoted!', avatar: 'UR', bg: '#8e2778', text: 'The Spoken English course at EduCare gave me the confidence to present in English at work. I got promoted within 3 months of completing the course. The instructors are extremely supportive and professional.' },
  { name: 'Sara Khan',    role: 'IELTS Student → New Zealand',            band: 'Band 7.0', avatar: 'SK', bg: '#692658', text: 'Outstanding preparation materials and incredibly dedicated teachers. I achieved exactly the band I needed for my nursing registration in New Zealand. EduCare made it all possible!' },
  { name: 'Bilal Sheikh', role: 'PTE + Visa → UK Work Visa',              band: 'PTE 73',   avatar: 'BS', bg: '#a86699', text: 'Took both PTE preparation and visa consultancy services. The team is incredibly knowledgeable, always available, and truly cares about your success. I am now working in London!' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ background: '#faf4fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#8e2778' }}>
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#202221' }}>
            What Our Students Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#888085' }}>
            Real stories from real students who achieved their international dreams with EduCare International.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map(({ name, role, band, avatar, bg, text }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 16px 36px rgba(142,39,120,0.10)' }}
              className="bg-white rounded-2xl border p-7 flex flex-col"
              style={{ borderColor: '#dcbad4' }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, type: 'spring', stiffness: 300 }}
                  >
                    <Star size={16} style={{ fill: '#8e2778', color: '#8e2778' }} />
                  </motion.div>
                ))}
              </div>

              <Quote size={20} style={{ color: '#dcbad4' }} className="mb-3" />
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#888085' }}>"{text}"</p>

              <div className="pt-5 border-t" style={{ borderColor: '#dcbad4' }}>
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    {avatar}
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="font-semibold text-sm truncate" style={{ color: '#202221' }}>{name}</div>
                    <div className="text-xs truncate" style={{ color: '#888085' }}>{role}</div>
                  </div>
                </div>
                <span
                  className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: '#dcbad4', color: '#692658' }}
                >
                  {band}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
