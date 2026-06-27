// Contact — LIGHT section (#contact).
// Info cards + WhatsApp CTA + a controlled "Free Consultation" form on the left,
// a Google Maps embed on the right. Matches the royal-purple / gold design system.

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { C, CONTACT, whatsappHref } from '../theme';
import { Container, SectionHeader, PrimaryButton, viewport } from '../ui';

const INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Allama Iqbal Town, Lahore',
    href: CONTACT.mapsUrl,
    external: true,
    sub: 'Find us on Google Maps',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '042 35296000',
    href: `tel:${CONTACT.landlineTel}`,
    sub: 'Mobile: 0300 7955551',
    subHref: `tel:${CONTACT.mobileTel}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    sub: 'Reply within 24 hours',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 9 AM – 7 PM',
    sub: 'Sunday: Closed',
  },
];

const SERVICES = [
  'IELTS Preparation',
  'PTE Academic',
  'Spoken English',
  'Visa Consultancy',
  'Other',
];

const inputBase =
  'w-full rounded-lg border px-4 py-2.5 text-sm bg-white outline-none transition-colors';

function InfoCard({ icon: Icon, label, value, href, external, sub, subHref }) {
  const ValueTag = href ? 'a' : 'div';
  return (
    <div
      className="rounded-xl p-5 border h-full"
      style={{ background: C.cloud, borderColor: C.lilacSoft }}
    >
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
        style={{ background: C.lilacSoft, color: C.royal }}
      >
        <Icon size={18} aria-hidden="true" />
      </span>
      <p
        className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1"
        style={{ color: C.violet }}
      >
        {label}
      </p>
      <ValueTag
        {...(href
          ? {
              href,
              ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
            }
          : {})}
        className="block text-sm font-semibold leading-snug break-words transition-colors hover:opacity-80"
        style={{ color: C.ink }}
      >
        {value}
      </ValueTag>
      {sub &&
        (subHref ? (
          <a
            href={subHref}
            className="block text-xs mt-1 break-words transition-colors hover:opacity-80"
            style={{ color: C.body }}
          >
            {sub}
          </a>
        ) : (
          <p className="text-xs mt-1 break-words" style={{ color: C.body }}>
            {sub}
          </p>
        ))}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const focusOn = (e) => (e.currentTarget.style.borderColor = C.royal);
  const focusOff = (e) => (e.currentTarget.style.borderColor = C.lilac);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: C.white }}>
      <Container>
        <SectionHeader
          center
          eyebrow="Get In Touch"
          title={
            <>
              Book Your <span style={{ color: C.gold }}>Free Counseling</span>
            </>
          }
          lead="Ready to start your journey? Reach out for a free counseling session or visit us in Lahore."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 2x2 info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map((item) => (
                <InfoCard key={item.label} {...item} />
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2.5 font-semibold text-white px-6 py-3.5 rounded-xl"
              style={{ background: '#25D366', boxShadow: '0 14px 30px rgba(37,211,102,0.28)' }}
            >
              <MessageCircle size={20} aria-hidden="true" />
              Chat with us on WhatsApp
            </motion.a>

            {/* Consultation form */}
            <div
              className="rounded-2xl border p-7"
              style={{ background: C.cloud, borderColor: C.lilacSoft }}
            >
              <h3 className="text-xl font-extrabold mb-5" style={{ color: C.ink }}>
                Book a Free Consultation
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center rounded-xl py-10 px-6"
                  style={{ background: C.white, border: `1px solid ${C.lilacSoft}` }}
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                    style={{ background: C.lilacSoft, color: C.royal }}
                  >
                    <CheckCircle size={28} aria-hidden="true" />
                  </span>
                  <p className="text-lg font-extrabold" style={{ color: C.ink }}>
                    Message Sent!
                  </p>
                  <p className="text-sm mt-1" style={{ color: C.body }}>
                    We'll contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: C.ink }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        onFocus={focusOn}
                        onBlur={focusOff}
                        placeholder="Your name"
                        className={inputBase}
                        style={{ borderColor: C.lilac, color: C.ink }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: C.ink }}
                      >
                        Phone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={update('phone')}
                        onFocus={focusOn}
                        onBlur={focusOff}
                        placeholder="03xx xxxxxxx"
                        className={inputBase}
                        style={{ borderColor: C.lilac, color: C.ink }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: C.ink }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      placeholder="you@example.com"
                      className={inputBase}
                      style={{ borderColor: C.lilac, color: C.ink }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: C.ink }}
                    >
                      Interested In *
                    </label>
                    <select
                      id="contact-service"
                      required
                      value={form.service}
                      onChange={update('service')}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      className={inputBase}
                      style={{ borderColor: C.lilac, color: form.service ? C.ink : C.body }}
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} style={{ color: C.ink }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: C.ink }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      placeholder="Tell us a little about your goals..."
                      className={`${inputBase} resize-none`}
                      style={{ borderColor: C.lilac, color: C.ink }}
                    />
                  </div>

                  <PrimaryButton type="submit" className="w-full">
                    <Send size={18} aria-hidden="true" />
                    Send Message
                  </PrimaryButton>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT — map */}
          <motion.div
            className="rounded-2xl overflow-hidden border shadow-lg min-h-[500px]"
            style={{ borderColor: C.lilacSoft }}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="EduCare International Location"
              src="https://www.google.com/maps?q=31.5026149,74.2830352&z=16&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[500px] border-0"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
