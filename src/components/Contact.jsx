import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const LAT = 31.5026149;
const LNG = 74.2830352;

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: 'Lahore, Punjab, Pakistan',
    sub: 'Find us on Google Maps',
    href: 'https://maps.app.goo.gl/EsjNKmbxyrkVfsej6',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+92 300 0000000',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+923000000000',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'info@educareinternational.pk',
    sub: 'Reply within 24 hours',
    href: 'mailto:info@educareinternational.pk',
  },
  {
    icon: <Clock size={20} />,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    sub: 'Sunday: Closed',
  },
];

const services = ['IELTS Preparation', 'PTE Academic', 'Spoken English', 'Visa Consultancy', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Contact & Location
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Reach out for a free counseling session or visit us in Lahore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — form + info */}
          <div className="space-y-8">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon, label, value, sub, href }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">{icon}</div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
                  </div>
                  {href ? (
                    <a href={href} className="text-gray-900 font-semibold text-sm hover:text-blue-600 transition-colors block">
                      {value}
                    </a>
                  ) : (
                    <div className="text-gray-900 font-semibold text-sm">{value}</div>
                  )}
                  {sub && <div className="text-gray-400 text-xs mt-0.5">{sub}</div>}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Book a Free Consultation</h3>
              {submitted ? (
                <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200 rounded-xl p-5">
                  <CheckCircle size={24} />
                  <div>
                    <div className="font-semibold">Message Sent!</div>
                    <div className="text-sm text-green-600">We'll contact you within 24 hours.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested In *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — embedded map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-full min-h-[500px]">
            <iframe
              title="EduCare International Location"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
