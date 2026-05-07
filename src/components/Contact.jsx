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
    value: '+92 42 3529 6000',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+924235296000',
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
  const [form, setForm]           = useState({ name: '', phone: '', email: '', service: '', message: '' });
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
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#8e2778' }}>
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#202221' }}>
            Contact &amp; Location
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#888085' }}>
            Ready to start your journey? Reach out for a free counseling session or visit us in Lahore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info + form */}
          <div className="space-y-8">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="rounded-xl p-5 border"
                  style={{ background: '#faf4fa', borderColor: '#dcbad4' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: '#dcbad4', color: '#692658' }}
                    >
                      {icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#888085' }}>
                      {label}
                    </span>
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="font-semibold text-sm block hover:underline"
                      style={{ color: '#202221' }}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-semibold text-sm" style={{ color: '#202221' }}>{value}</div>
                  )}
                  {sub && <div className="text-xs mt-0.5" style={{ color: '#888085' }}>{sub}</div>}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="rounded-2xl p-7 border" style={{ background: '#faf4fa', borderColor: '#dcbad4' }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: '#202221' }}>
                Book a Free Consultation
              </h3>
              {submitted ? (
                <div
                  className="flex items-center gap-3 rounded-xl p-5 border"
                  style={{ background: '#dcbad4', borderColor: '#c995bd', color: '#692658' }}
                >
                  <CheckCircle size={24} />
                  <div>
                    <div className="font-semibold">Message Sent!</div>
                    <div className="text-sm" style={{ color: '#8e2778' }}>We'll contact you within 24 hours.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#202221' }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 transition-all"
                        style={{ borderColor: '#c995bd' }}
                        onFocus={(e) => (e.target.style.borderColor = '#8e2778')}
                        onBlur={(e) => (e.target.style.borderColor = '#c995bd')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#202221' }}>Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-all"
                        style={{ borderColor: '#c995bd' }}
                        onFocus={(e) => (e.target.style.borderColor = '#8e2778')}
                        onBlur={(e) => (e.target.style.borderColor = '#c995bd')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#202221' }}>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-all"
                      style={{ borderColor: '#c995bd' }}
                      onFocus={(e) => (e.target.style.borderColor = '#8e2778')}
                      onBlur={(e) => (e.target.style.borderColor = '#c995bd')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#202221' }}>Interested In *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none bg-white transition-all"
                      style={{ borderColor: '#c995bd' }}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#202221' }}>Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-all resize-none"
                      style={{ borderColor: '#c995bd' }}
                      onFocus={(e) => (e.target.style.borderColor = '#8e2778')}
                      onBlur={(e) => (e.target.style.borderColor = '#c995bd')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors"
                    style={{ background: '#8e2778' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#692658')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#8e2778')}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — map */}
          <div className="rounded-2xl overflow-hidden border shadow-lg min-h-[500px]" style={{ borderColor: '#dcbad4' }}>
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
