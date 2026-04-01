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