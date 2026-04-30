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
  const servicesOpacity = useTransform(smooth, [0.45, 0.85], [0, 1]);
  const servicesPointerEvents = useTransform(servicesOpacity, (v) => v > 0.01 ? 'auto' : 'none');

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero scroll zone — on top (z:3) so Services below can't block hero content */}
      <div ref={heroRef} className="relative h-[150vh]" style={{ zIndex: 3 }}>
        <Hero smooth={scrollYProgress} />
      </div>
      {/* Services sits below Hero (z:2), fades in as Hero fades out.
          The tall wrapper gives it scroll room so it pins until the user scrolls past it. */}
      <div style={{ marginTop: '-100vh', zIndex: 2 }} className="relative pointer-events-none">
        <motion.div
          style={{ opacity: servicesOpacity, pointerEvents: servicesPointerEvents }}
          className="sticky top-0"
        >
          <Services onSelectPackage={setSelectedPackage} />
        </motion.div>
        {/* Extra scroll height so Services stays pinned before Portfolio appears */}
        <div className="h-[20vh]" />
      </div>

      {/* Single shared canvas for all content sections below the animation zone.
          One bg layer + one global orb layer means orbs flow seamlessly across
          Portfolio → Testimonials → About → Contact without section bg cutoffs. */}
      <div className="relative bg-[#0a0a0a]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Portfolio area */}
          <div className="absolute top-[2%] right-[20%] w-[650px] h-[650px] bg-[#00B8E6]/10 rounded-full blur-[180px] translate-x-1/3" />
          <div className="absolute top-[12%] left-[25%] w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[160px] -translate-x-1/4" />
          {/* Testimonials area */}
          <div className="absolute top-[30%] left-[50%] w-[800px] h-[600px] bg-[#00B8E6]/8 rounded-full blur-[200px] -translate-x-1/2" />
          <div className="absolute top-[38%] left-[20%] w-[450px] h-[450px] bg-rose-500/6 rounded-full blur-[150px]" />
          <div className="absolute top-[40%] right-[20%] w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-[150px]" />
          {/* About area */}
          <div className="absolute top-[58%] right-[20%] w-[600px] h-[600px] bg-[#00B8E6]/10 rounded-full blur-[170px] translate-x-1/4" />
          <div className="absolute top-[66%] left-[20%] w-[550px] h-[550px] bg-teal-500/8 rounded-full blur-[160px] -translate-x-1/4" />
          {/* Contact area */}
          <div className="absolute top-[82%] right-0 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[4%] left-0 w-64 h-64 bg-[#00B8E6]/5 rounded-full blur-[100px]" />
        </div>
        <Portfolio />
        <Testimonials />
        <About />
        <Contact selectedPackage={selectedPackage} onClearPackage={() => setSelectedPackage(null)} />
        <Footer />
      </div>
    </div>
  );
}