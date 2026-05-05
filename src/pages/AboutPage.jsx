import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';
import WavyRingDecor from '@/components/landing/WavyRingDecor';
import RibbonBanner from '@/components/landing/RibbonBanner';

const RIBBON = ['Built Different', 'Built for You', 'Texas Proud', 'DFW Marketing', 'Results-Driven', 'MBA-Founded', 'Hands-On Expertise', 'Long-Term Partners'];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Ambient ring decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute top-[-4%] right-[-6%]">
          <WavyRingDecor size={560} opacity={0.09} blur={22} rotate={22} />
        </div>
        <div className="hidden md:block absolute top-[15%] left-[-8%]">
          <WavyRingDecor size={440} opacity={0.06} blur={28} rotate={-10} />
        </div>
        <div className="hidden md:block absolute top-[50%] left-[40%]">
          <WavyRingDecor size={580} opacity={0.05} blur={30} rotate={8} />
        </div>
        <div className="hidden md:block absolute bottom-[8%] right-[-8%]">
          <WavyRingDecor size={480} opacity={0.07} blur={26} rotate={-18} />
        </div>
        {/* Mobile */}
        <div className="md:hidden absolute top-[3%] right-[-10%]">
          <WavyRingDecor size={260} opacity={0.07} blur={18} rotate={15} />
        </div>
      </div>

      {/* Page header */}
      <section className="relative pt-36 pb-4 md:pt-40 md:pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/60 font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              Who Is
              <br />
              <span className="text-white">HOOP Marketing?</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <About />

      <RibbonBanner phrases={RIBBON} direction="right" rotate={2} speed={40} animKey="ab1" />

      {/* CTA strip */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build something great.</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              We're selective with who we work with because we're invested in your success.
            </p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 400); }}
              className="inline-flex items-center gap-3 bg-white hover:bg-[#00B8E6] text-black hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
