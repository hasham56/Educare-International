import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-brand-600 text-white text-sm py-1.5 px-4 text-center hidden md:block">
        <span className="inline-flex items-center gap-2">
          <Phone size={13} />
          <a href="tel:+924235296000" className="hover:underline">+92 42 3529 6000</a>
          <span className="mx-3 opacity-40">|</span>
          <span>info@educareinternational.pk</span>
          <span className="mx-3 opacity-40">|</span>
          <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <img
              src="/educare_logo.png"
              alt="EduCare International"
              className="h-11 w-11 object-contain rounded-full"
            />
            <div className="text-left hidden sm:block">
              <div className={`font-bold text-lg leading-tight ${scrolled ? 'text-brand-600' : 'text-white'}`}>
                EduCare
              </div>
              <div className={`text-xs font-semibold tracking-widest ${scrolled ? 'text-brand-300' : 'text-brand-100'}`}>
                INTERNATIONAL
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-brand-900 hover:text-brand-400 hover:bg-brand-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-3 bg-brand-400 hover:bg-brand-600 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors shadow"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-brand-600' : 'text-white'}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-brand-100">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="block w-full text-left px-4 py-2.5 text-brand-900 hover:text-brand-400 hover:bg-brand-50 rounded-md font-medium"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="w-full mt-2 bg-brand-400 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
