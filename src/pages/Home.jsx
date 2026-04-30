import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import About from '@/components/landing/About';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 400, damping: 40, mass: 0.2 });
  // Fade out hero content as the hero scrolls past the viewport — restores the
  // smooth crossfade feel without any sticky/overlay architecture.
  const heroContentOpacity = useTransform(smooth, [0.35, 0.75], [1, 0]);

  return (
    // Single root canvas — one bg, one global orb layer covering the full page.
    // All sections are transparent so orbs bleed freely across every boundary.
    <div className="relative bg-[#0a0a0a]">
      {/* Orb layer — desktop only. On mobile these 150-200px CSS blurs each
          force a separate GPU compositing layer; 12 of them causes severe
          scroll jank. Mobile gets 2 small, cheap glows instead. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Mobile: 2 lightweight glows only */}
        <div className="md:hidden absolute top-[5%] right-0 w-[200px] h-[200px] bg-[#00B8E6]/12 rounded-full blur-[60px]" />
        <div className="md:hidden absolute top-[40%] left-0 w-[180px] h-[180px] bg-[#00B8E6]/8 rounded-full blur-[60px]" />
        {/* Desktop: full ambient orb layer */}
        {/* Hero area */}
        <div className="hidden md:block absolute top-[3%] right-[20%] w-[500px] h-[500px] bg-[#00B8E6]/15 rounded-full blur-[150px] translate-x-1/3" />
        <div className="hidden md:block absolute top-[10%] left-[25%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] -translate-x-1/4" />
        {/* Services area */}
        <div className="hidden md:block absolute top-[22%] left-[30%] w-[700px] h-[600px] bg-[#00B8E6]/10 rounded-full blur-[180px] -translate-x-1/3" />
        <div className="hidden md:block absolute top-[28%] right-[25%] w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[160px] translate-x-1/4" />
        {/* Portfolio area */}
        <div className="hidden md:block absolute top-[37%] right-[20%] w-[650px] h-[650px] bg-[#00B8E6]/10 rounded-full blur-[180px] translate-x-1/3" />
        <div className="hidden md:block absolute top-[44%] left-[20%] w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[160px] -translate-x-1/4" />
        {/* Testimonials area */}
        <div className="hidden md:block absolute top-[53%] left-[50%] w-[800px] h-[600px] bg-[#00B8E6]/8 rounded-full blur-[200px] -translate-x-1/2" />
        <div className="hidden md:block absolute top-[57%] left-[20%] w-[450px] h-[450px] bg-rose-500/6 rounded-full blur-[150px]" />
        {/* About area */}
        <div className="hidden md:block absolute top-[66%] right-[20%] w-[600px] h-[600px] bg-[#00B8E6]/10 rounded-full blur-[170px] translate-x-1/4" />
        <div className="hidden md:block absolute top-[72%] left-[20%] w-[550px] h-[550px] bg-teal-500/8 rounded-full blur-[160px] -translate-x-1/4" />
        {/* Contact area */}
        <div className="hidden md:block absolute top-[83%] right-0 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-[150px]" />
        <div className="hidden md:block absolute bottom-[4%] left-0 w-64 h-64 bg-[#00B8E6]/5 rounded-full blur-[100px]" />
      </div>

      {/* All sections stack in natural flow — no sticky, no overlays */}
      <div ref={heroRef} className="relative">
        <Hero smooth={smooth} contentOpacity={heroContentOpacity} />
      </div>
      <Services onSelectPackage={setSelectedPackage} />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact selectedPackage={selectedPackage} onClearPackage={() => setSelectedPackage(null)} />
      <Footer />
    </div>
  );
}