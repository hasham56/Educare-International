import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Why Us',     href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-blue-800 text-white text-sm py-1.5 px-4 text-center hidden md:block">
        <span className="inline-flex items-center gap-2">
          <Phone size={13} />
          <span>+92 300 0000000</span>
          <span className="mx-3 opacity-40">|</span>
          <span>educare.international@gmail.com</span>
          <span className="mx-3 opacity-40">|</span>
          <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <div className="text-left">
              <div className={`font-bold text-lg leading-tight ${scrolled ? 'text-blue-800' : 'text-white'}`}>
                EduCare
              </div>
              <div className={`text-xs font-medium tracking-widest ${scrolled ? 'text-blue-500' : 'text-blue-200'}`}>
                INTERNATIONAL
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="w-full mt-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-2.5 rounded-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
