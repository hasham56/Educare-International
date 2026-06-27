// Footer for the /new-design experience.
// Dark royal-deep surface, light purple/gray text, gold accent line.

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { C, CONTACT, whatsappHref } from '../theme';
import { Container, scrollTo } from '../ui';
import Logo from '../Logo';

const lightText = 'rgba(255,255,255,0.66)';
const borderCol = 'rgba(255,255,255,0.12)';

const PROGRAMS = [
  'IELTS Preparation',
  'PTE Academic',
  'Spoken English',
  'Visa Consultancy',
];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

/* Inline brand glyphs (so we don't depend on a brand-icon package). */
function FacebookIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Social({ href, label, hoverColor, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-lg inline-flex items-center justify-center transition-colors duration-200"
      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = hoverColor; e.currentTarget.style.color = C.white; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
    >
      {children}
    </a>
  );
}

function ColumnHeading({ children }) {
  return (
    <h3 className="font-bold text-sm tracking-[0.16em] uppercase mb-5" style={{ color: C.white }}>
      {children}
    </h3>
  );
}

function FooterLink({ onClick, children }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="text-left text-sm transition-colors duration-200"
        style={{ color: lightText }}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.goldSoft)}
        onMouseLeave={(e) => (e.currentTarget.style.color = lightText)}
      >
        {children}
      </button>
    </li>
  );
}

function ContactItem({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 group min-w-0"
    >
      <span
        className="w-10 h-10 rounded-xl inline-flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${borderCol}` }}
      >
        <Icon size={18} style={{ color: C.lilac }} />
      </span>
      <span
        className="text-sm truncate transition-colors duration-200"
        style={{ color: lightText }}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
        onMouseLeave={(e) => (e.currentTarget.style.color = lightText)}
      >
        {label}
      </span>
    </a>
  );
}

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: C.royalDeep, color: lightText }}>
      <Container>
        {/* gold accent rule */}
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, opacity: 0.5 }} />

        {/* top grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* brand */}
          <div className="lg:col-span-2 max-w-md">
            <Logo plate className="h-10" />
            <p className="mt-5 font-semibold" style={{ color: C.goldSoft }}>
              Where Education Meets Care
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: lightText }}>
              Your trusted partner for IELTS, PTE, Spoken English and international
              visa &amp; education consultancy — empowering students to achieve their
              global ambitions since 2014.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Social href={CONTACT.facebook} label="EduCare on Facebook" hoverColor={C.royal}>
                <FacebookIcon className="w-5 h-5" />
              </Social>
              <Social href={CONTACT.instagram} label="EduCare on Instagram" hoverColor={C.royal}>
                <InstagramIcon className="w-5 h-5" />
              </Social>
              <Social href={whatsappHref()} label="Message EduCare on WhatsApp" hoverColor="#25D366">
                <MessageCircle className="w-5 h-5" />
              </Social>
            </div>
          </div>

          {/* programs */}
          <div>
            <ColumnHeading>Programs</ColumnHeading>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <FooterLink key={p} onClick={() => scrollTo('#services')}>
                  {p}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* quick links */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <FooterLink key={l.href} onClick={() => scrollTo(l.href)}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* contact strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t" style={{ borderColor: borderCol }}>
          <ContactItem icon={Phone} label={CONTACT.landline} href={CONTACT.landlineTel} />
          <ContactItem icon={Mail} label={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactItem icon={MapPin} label={CONTACT.address} href={CONTACT.mapsUrl} />
        </div>

        {/* bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t"
          style={{ borderColor: borderCol }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} EduCare International. All rights reserved.
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', border: `1px solid ${borderCol}` }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.royal; e.currentTarget.style.color = C.white; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
