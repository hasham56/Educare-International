import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CONTACT, whatsappHref } from '../../shared/contact';
import CallLink from '../../shared/CallLink';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className="bg-brand-600 text-white text-sm py-1.5 px-4 text-center hidden md:block">
        <span className="inline-flex items-center gap-2">
          <Phone size={13} />
          <CallLink accent="#8e2778" className="hover:underline">{CONTACT.phoneIntl}</CallLink>
          <span className="mx-3 opacity-40">|</span>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <MessageCircle size={13} />
            {CONTACT.whatsapp}
          </a>
          <span className="mx-3 opacity-40">|</span>
          <span>{CONTACT.email}</span>
          <span className="mx-3 opacity-40">|</span>
          <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <motion.span
              className={`inline-flex items-center rounded-xl transition-colors duration-300 ${
                scrolled ? '' : 'bg-white/95 px-2.5 py-1.5 shadow-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/educare-logo.png"
                alt="EduCare International — Where Education Meets Care"
                className="h-9 sm:h-11 w-auto object-contain"
                draggable={false}
              />
            </motion.span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <motion.button
                key={href}
                onClick={() => handleNav(href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-brand-900 hover:text-brand-400 hover:bg-brand-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 bg-brand-400 hover:bg-brand-600 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors shadow"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className={`md:hidden p-2 rounded-md ${scrolled ? 'text-brand-600' : 'text-white'}`}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-xl border-t border-brand-100 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  onClick={() => handleNav(href)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block w-full text-left px-4 py-2.5 text-brand-900 hover:text-brand-400 hover:bg-brand-50 rounded-md font-medium"
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNav('#contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-2 bg-brand-400 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
