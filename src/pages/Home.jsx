import { useState } from 'react';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import About from '@/components/landing/About';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Single global ambient orb layer spanning the entire page */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {/* Hero area */}
        <div className="absolute top-[1%] right-[15%] w-[600px] h-[600px] bg-[#00B8E6]/15 rounded-full blur-[160px]" />
        <div className="absolute top-[3%] left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
        {/* Services area */}
        <div className="absolute top-[20%] left-[50%] w-[700px] h-[500px] bg-[#00B8E6]/10 rounded-full blur-[180px] -translate-x-1/2" />
        <div className="absolute top-[26%] right-[8%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />
        {/* Portfolio area */}
        <div className="absolute top-[44%] left-[15%] w-[550px] h-[550px] bg-[#00B8E6]/10 rounded-full blur-[160px]" />
        <div className="absolute top-[54%] right-[12%] w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[170px]" />
        {/* Testimonials area */}
        <div className="absolute top-[66%] left-[50%] w-[800px] h-[600px] bg-[#00B8E6]/8 rounded-full blur-[200px] -translate-x-1/2" />
        <div className="absolute top-[70%] left-[10%] w-[400px] h-[400px] bg-rose-500/6 rounded-full blur-[150px]" />
        {/* About / Contact area */}
        <div className="absolute top-[80%] right-[12%] w-[600px] h-[600px] bg-[#00B8E6]/10 rounded-full blur-[170px]" />
        <div className="absolute top-[88%] left-[8%] w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-[2%] right-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[150px]" />
      </div>

      {/* All sections flow naturally — no sticky/animation zones */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <Services onSelectPackage={setSelectedPackage} />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact selectedPackage={selectedPackage} onClearPackage={() => setSelectedPackage(null)} />
        <Footer />
      </div>
    </div>
  );
}