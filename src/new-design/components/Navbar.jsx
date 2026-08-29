// Navbar — fixed top navigation for the /new-design experience.
// Slim contact bar (desktop) + main white bar with scroll shadow, desktop nav,
// and an animated mobile dropdown menu.

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { C, GRADIENTS, CONTACT, NAV_LINKS, whatsappHref } from '../theme';
import { Container, PrimaryButton, scrollTo } from '../ui';
import Logo from '../Logo';
import CallLink from '../../shared/CallLink';

const Sep = () => (
  <span aria-hidden="true" style={{ color: C.goldSoft }} className="opacity-60">
    |
  </span>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top contact bar — desktop only */}
      <div
        className="hidden md:block text-white text-xs"
        style={{ background: GRADIENTS.deep }}
      >
        <Container className="flex items-center justify-between py-1.5">
          <div className="flex items-center gap-3 min-w-0">
            <CallLink className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Phone size={13} style={{ color: C.goldSoft }} />
              <span>{CONTACT.phone}</span>
            </CallLink>
            <Sep />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={13} style={{ color: '#8FE3AC' }} />
              <span>{CONTACT.whatsapp}</span>
            </a>
            <Sep />
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity truncate"
            >
              <Mail size={13} style={{ color: C.goldSoft }} />
              <span className="truncate">{CONTACT.email}</span>
            </a>
          </div>
          <div className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Mon–Sat:{' '}
            <span style={{ color: C.goldSoft }} className="font-semibold">
              9 AM – 7 PM
            </span>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div
        className="bg-white transition-shadow duration-300"
        style={{
          boxShadow: scrolled ? '0 8px 30px rgba(74,29,122,0.12)' : '0 1px 0 rgba(74,29,122,0.06)',
        }}
      >
        <Container className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => go('#home')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center"
            aria-label="EduCare — go to top"
          >
            <Logo className="h-16 md:h-20" />
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{ color: C.ink }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.lilacSoft;
                  e.currentTarget.style.color = C.royal;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = C.ink;
                }}
              >
                {link.label}
              </button>
            ))}
            <PrimaryButton
              className="ml-3 !px-5 !py-2.5 text-sm"
              onClick={() => go('#contact')}
            >
              Reserve a Seat
            </PrimaryButton>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl"
            style={{ background: C.lilacSoft, color: C.royal }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>

        {/* Mobile dropdown */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-white border-t"
              style={{ borderColor: C.lilacSoft, boxShadow: '0 18px 40px rgba(74,29,122,0.14)' }}
            >
              <Container className="py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => go(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors"
                    style={{ color: C.ink }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.lilacSoft;
                      e.currentTarget.style.color = C.royal;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = C.ink;
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <PrimaryButton
                  className="mt-3 w-full"
                  onClick={() => go('#contact')}
                >
                  Reserve a Seat
                </PrimaryButton>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <CallLink
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold border"
                    style={{ borderColor: C.lilacSoft, color: C.royal }}
                    onClick={() => setOpen(false)}
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call
                  </CallLink>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
