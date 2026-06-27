import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { C } from './theme';

export default function NewDesignApp() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: C.white }}>
      <Navbar />
      <Hero />
      <Highlight />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
