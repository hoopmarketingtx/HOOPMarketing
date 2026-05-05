import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Hero from '@/components/landing/Hero';
import Portfolio from '@/components/landing/Portfolio';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import WavyRingDecor from '@/components/landing/WavyRingDecor';
import RibbonBanner from '@/components/landing/RibbonBanner';

const RIBBON_1 = ['Bold Strategy', 'Real Results', 'No Fluff', "DFW's Best", 'Built to Grow', 'Dominate Your Market', 'Results-Driven Marketing', 'Your Brand, Elevated'];
const RIBBON_2 = ["Let's Build Something", 'Ready to Dominate?', 'Your Next Move', 'Start Today', 'Limited Spots Available', 'DFW Marketing', 'Bold Brands Win', 'Make Your Mark'];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 400, damping: 40, mass: 0.2 });
  // Fade out hero content as the hero scrolls past the viewport — restores the
  // smooth crossfade feel without any sticky/overlay architecture.
  const heroContentOpacity = useTransform(smooth, [0.35, 0.75], [1, 0]);

  return (
    // Single root canvas — one bg, one global decor layer covering the full page.
    <div className="relative bg-[#0a0a0a]">
      {/* Wavy ring decorative layer — replaces the old colored blur orbs.
          Desktop only (same rationale as before: mobile has limited GPU). */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Mobile: 2 lightweight subtle rings only */}
        <div className="md:hidden absolute top-[5%] right-[-10%]">
          <WavyRingDecor size={300} opacity={0.07} blur={18} rotate={15} />
        </div>
        <div className="md:hidden absolute top-[42%] left-[-12%]">
          <WavyRingDecor size={260} opacity={0.05} blur={20} rotate={-8} />
        </div>
        {/* Hero area */}
        <div className="hidden md:block absolute top-[-4%] right-[-6%]">
          <WavyRingDecor size={620} opacity={0.09} blur={22} rotate={18} />
        </div>
        <div className="hidden md:block absolute top-[4%] left-[-8%]">
          <WavyRingDecor size={500} opacity={0.06} blur={28} rotate={-12} />
        </div>
        {/* Portfolio area */}
        <div className="hidden md:block absolute top-[28%] left-[-6%]">
          <WavyRingDecor size={560} opacity={0.06} blur={26} rotate={10} />
        </div>
        <div className="hidden md:block absolute top-[36%] right-[8%]">
          <WavyRingDecor size={480} opacity={0.07} blur={20} rotate={-5} />
        </div>
        {/* Testimonials / Contact area */}
        <div className="hidden md:block absolute top-[55%] left-[42%]">
          <WavyRingDecor size={600} opacity={0.05} blur={30} rotate={14} />
        </div>
        <div className="hidden md:block absolute top-[65%] left-[-8%]">
          <WavyRingDecor size={460} opacity={0.07} blur={22} rotate={-18} />
        </div>
        <div className="hidden md:block absolute top-[80%] right-[-8%]">
          <WavyRingDecor size={520} opacity={0.08} blur={26} rotate={25} />
        </div>
        <div className="hidden md:block absolute bottom-[1%] left-[15%]">
          <WavyRingDecor size={400} opacity={0.05} blur={32} rotate={-6} />
        </div>
      </div>

      {/* All sections stack in natural flow — no sticky, no overlays */}
      <div ref={heroRef} className="relative">
        <Hero smooth={smooth} contentOpacity={heroContentOpacity} />
      </div>

      <RibbonBanner phrases={RIBBON_1} direction="left" rotate={-2} speed={38} animKey="r1" />

      <Portfolio />

      <RibbonBanner phrases={RIBBON_2} direction="right" rotate={2} speed={42} animKey="r2" />

      <Testimonials />

      <Contact />
      <Footer />
    </div>
  );
}