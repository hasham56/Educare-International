import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Fatima Malik',
    role: 'IELTS Student → UK University',
    band: 'Band 7.5',
    avatar: 'FM',
    color: 'bg-pink-500',
    text: 'EduCare International completely transformed my IELTS preparation. My Speaking instructor was exceptional — I went from Band 5.5 to 7.5 in just two months. Now I am studying at the University of Manchester!',
  },
  {
    name: 'Ali Hassan',
    role: 'PTE Student → Australia PR',
    band: 'PTE 79',
    avatar: 'AH',
    color: 'bg-blue-500',
    text: 'I had failed PTE twice before joining EduCare. Their structured approach and AI-based mock tests were a game changer. Scored 79 and got my Australian visa approved within weeks. Highly recommended!',
  },
  {
    name: 'Zara Ahmed',
    role: 'Visa Consultancy → Canada Study Permit',
    band: 'Accepted!',
    avatar: 'ZA',
    color: 'bg-teal-500',
    text: 'From university selection to visa documentation, the EduCare team guided me every step of the way. I was accepted to three Canadian universities. Their consultants truly know what they are doing.',
  },
  {
    name: 'Usman Raza',
    role: 'Spoken English → Career Growth',
    band: 'Promoted!',
    avatar: 'UR',
    color: 'bg-amber-500',
    text: 'The Spoken English course at EduCare gave me the confidence to present in English at work. I got promoted within 3 months of completing the course. The instructors are extremely supportive and professional.',
  },
  {
    name: 'Sara Khan',
    role: 'IELTS Student → New Zealand',
    band: 'Band 7.0',
    avatar: 'SK',
    color: 'bg-purple-500',
    text: 'Outstanding preparation materials and incredibly dedicated teachers. I achieved exactly the band I needed for my nursing registration in New Zealand. EduCare made it all possible!',
  },
  {
    name: 'Bilal Sheikh',
    role: 'PTE + Visa → UK Work Visa',
    band: 'PTE 73',
    avatar: 'BS',
    color: 'bg-green-500',
    text: 'Took both PTE preparation and visa consultancy services. The team is incredibly knowledgeable, always available, and truly cares about your success. I am now working in London!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real stories from real students who achieved their international dreams with EduCare International.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map(({ name, role, band, avatar, color, text }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote size={20} className="text-blue-200 mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">"{text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full ${color} text-white font-bold text-sm flex items-center justify-center flex-shrink-0`}>
                  {avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">{name}</div>
                  <div className="text-gray-400 text-xs truncate">{role}</div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0">
                  {band}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
