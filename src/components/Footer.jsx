import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const links = {
  Services: ['IELTS Preparation', 'PTE Academic', 'Spoken English', 'Visa Consultancy'],
  'Quick Links': ['Home', 'About Us', 'Why Choose Us', 'Testimonials', 'Contact'],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#202221', color: '#888085' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/educare_logo.png"
                alt="EduCare International"
                className="h-12 w-12 object-contain rounded-full"
                style={{ background: 'white', padding: '4px' }}
              />
              <div>
                <div className="font-bold text-white text-lg leading-tight">EduCare International</div>
                <div className="text-xs font-medium tracking-widest" style={{ color: '#a86699' }}>
                  LAHORE, PAKISTAN
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner for IELTS, PTE, Spoken English, and international visa &amp;
              education consultancy. Empowering students to achieve their global ambitions since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/educare.lhr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-white"
                style={{ background: '#2e2d2e' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#8e2778')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2e2d2e')}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/educare.international/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-white"
                style={{ background: '#2e2d2e' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#8e2778')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2e2d2e')}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/924235296000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-white text-xs font-bold"
                style={{ background: '#2e2d2e' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#8e2778')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2e2d2e')}
              >
                WA
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white transition-colors inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-10 pt-8 border-t grid sm:grid-cols-3 gap-4" style={{ borderColor: '#2e2d2e' }}>
          {[
            { icon: <Phone size={16} />, text: '+92 42 3529 6000', href: 'tel:+924235296000' },
            { icon: <Mail size={16} />, text: 'info@educareinternational.pk', href: 'mailto:info@educareinternational.pk' },
            { icon: <MapPin size={16} />, text: 'Lahore, Pakistan', href: 'https://maps.app.goo.gl/EsjNKmbxyrkVfsej6' },
          ].map(({ icon, text, href }) => (
            <a
              key={text}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <span style={{ color: '#a86699' }}>{icon}</span>
              {text}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: '#2e2d2e' }}
        >
          <p className="text-xs" style={{ color: '#888085' }}>
            © {new Date().getFullYear()} EduCare International. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg transition-colors"
            style={{ background: '#2e2d2e', color: '#888085' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#8e2778'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#2e2d2e'; e.currentTarget.style.color = '#888085'; }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
