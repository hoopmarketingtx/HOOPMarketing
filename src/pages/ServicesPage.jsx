import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Services from '@/components/landing/Services';
import Footer from '@/components/landing/Footer';
import WavyRingDecor from '@/components/landing/WavyRingDecor';
import RibbonBanner from '@/components/landing/RibbonBanner';

const RIBBON = ['Bold Strategy', 'Real Results', 'No Fluff', "DFW's Best", 'Built to Grow', 'Dominate Your Market', 'Results-Driven Marketing', 'Your Brand, Elevated'];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    // Navigate home with state so Contact can receive the pre-selected package
    navigate('/', { state: { selectedPackage: pkg } });
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 400);
  };

  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Ambient ring decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute top-[-4%] right-[-6%]">
          <WavyRingDecor size={580} opacity={0.09} blur={22} rotate={18} />
        </div>
        <div className="hidden md:block absolute top-[8%] left-[-8%]">
          <WavyRingDecor size={460} opacity={0.06} blur={28} rotate={-12} />
        </div>
        <div className="hidden md:block absolute top-[40%] left-[38%]">
          <WavyRingDecor size={620} opacity={0.05} blur={32} rotate={6} />
        </div>
        <div className="hidden md:block absolute top-[55%] right-[-10%]">
          <WavyRingDecor size={500} opacity={0.07} blur={24} rotate={-22} />
        </div>
        <div className="hidden md:block absolute bottom-[5%] left-[10%]">
          <WavyRingDecor size={420} opacity={0.06} blur={30} rotate={10} />
        </div>
        {/* Mobile */}
        <div className="md:hidden absolute top-[3%] right-[-10%]">
          <WavyRingDecor size={280} opacity={0.07} blur={18} rotate={15} />
        </div>
      </div>

      {/* Page header */}
      <section className="relative pt-36 pb-8 md:pt-40 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/60 font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              Services Built
              <br />
              <span className="text-white">to Move Needles.</span>
            </h1>
            <p className="text-xl text-white/50 mt-6 max-w-2xl leading-relaxed">
              Every strategy is custom-built for your market. No cookie-cutter packages, no empty promises.
            </p>
          </motion.div>
        </div>
      </section>

      <RibbonBanner phrases={RIBBON} direction="left" rotate={-2} speed={40} animKey="sv1" />

      <Services onSelectPackage={handleSelectPackage} />

      {/* CTA strip */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              We take on a limited number of projects each month. Tell us about yours.
            </p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 400); }}
              className="inline-flex items-center gap-3 bg-white hover:bg-[#00B8E6] text-black hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
