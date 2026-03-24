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
    <>
      <Hero />
      <Services onSelectPackage={setSelectedPackage} />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact selectedPackage={selectedPackage} onClearPackage={() => setSelectedPackage(null)} />
      <Footer />
    </>
  );
}