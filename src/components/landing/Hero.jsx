import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logoWide = '/assets/hoop-logo-wide.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B8E6]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#00B8E6]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#00B8E6] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm tracking-wide">Texas Proud</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              We Don't Do
              <br />
              <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Ordinary.</span>
            </h1>

            <p className="text-xl text-white/60 max-w-lg mb-4 leading-relaxed">
              HOOP Marketing & Graphic Design crafts bold brands and aggressive marketing strategies that make your competitors nervous.
            </p>
            <p className="text-lg text-[#00B8E6]/80 font-medium max-w-lg mb-12 italic">
              "We'll jump through the hoops for you."
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1a1a1a] border border-white/20 text-white hover:bg-[#222] px-8 py-6 text-lg rounded-full group"
              >
                Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center gap-12 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-white/50 text-sm mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">3X</div>
                <div className="text-white/50 text-sm mt-1">Average ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">10+</div>
                <div className="text-white/50 text-sm mt-1">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6]/30 to-transparent rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
                alt="Creative Design"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-2xl">
                <img 
                  src={logoWide}
                  alt="HOOP Marketing"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00B8E6] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}