import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "We measure success by your growth, not by how pretty things look."
  },
  {
    icon: Award,
    title: "No Compromises",
    description: "We push boundaries and reject mediocrity in everything we create."
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Your success is our success. We're invested in your long-term growth."
  }
];

export default function About() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">About HOOP</span>
          <h2 id="about" className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-4 tracking-tight leading-tight" style={{ scrollMarginTop: '100px' }}>
            We're Not Your
            <br />
            <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Average Agency</span>
          </h2>

          <p className="text-xl text-gray-600 mt-8 leading-relaxed">
            Founded in the heart of Texas, HOOP Marketing & Graphic Design was built on one belief:{' '}
            <strong className="text-[#0a0a0a]">businesses deserve marketing that actually works.</strong>
          </p>

          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            We've spent over a decade helping business owners cut through the noise, dominate their markets,
            and build brands that command attention. No fluff. No empty promises. Just bold strategies and
            designs that move the needle.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-[#00B8E6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#00B8E6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] text-lg">{value.title}</h3>
                    <p className="text-gray-500 mt-1">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}