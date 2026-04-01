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

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero scroll zone — sits above Services (z:2 > z:1) */}
      <div ref={heroRef} className="relative h-[150vh] pointer-events-none" style={{ zIndex: 2 }}>
        <Hero smooth={scrollYProgress} />
      </div>
      {/* Services fades in behind Hero, pulled up to overlap the same viewport area.
          The tall wrapper gives it scroll room so it pins until the user scrolls past it. */}
      <div style={{ marginTop: '-100vh', zIndex: 3 }} className="relative pointer-events-none">
        <motion.div
          style={{ opacity: servicesOpacity }}
          className="sticky top-0 pointer-events-auto"
        >
          <Services onSelectPackage={setSelectedPackage} />
        </motion.div>
        {/* Extra scroll height so Services stays pinned before Portfolio appears */}
        <div className="h-[100vh]" />
      </div>
      <Portfolio />
      <Testimonials />
      <About />
      <Contact selectedPackage={selectedPackage} onClearPackage={() => setSelectedPackage(null)} />
      <Footer />
    </div>
  );
}