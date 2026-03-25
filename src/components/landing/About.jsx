import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, MessageSquare, Handshake } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: "We Handle the Hard Parts",
    description: "A successful marketing plan has many moving pieces such as strategy, design, content, and advertising. We take it off your plate so you can focus on running your business."
  },
  {
    icon: TrendingUp,
    title: "Built to Get Results",
    description: "Everything we do has a purpose. Not just to look good, but to bring in real attention, real engagement, and real customers."
  },
  {
    icon: MessageSquare,
    title: "No Runaround",
    description: "No confusing reports. No empty updates. We keep things clear, honest, and focused on what actually matters."
  },
  {
    icon: Handshake,
    title: "In It for the Long Haul",
    description: "We're not here for quick wins and quick exits. We build long-term partnerships and help you grow over time."
  }
];

export default function About() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">About HOOP</span>
          <h2 id="about" className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-4 tracking-tight leading-tight" style={{ scrollMarginTop: '100px' }}>
            Built Different.
            <br />
            <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Built for You.</span>
          </h2>

          <p className="text-xl text-gray-600 mt-8 leading-relaxed">
            HOOP Marketing & Graphic Design was built on a foundation of both formal training and hands-on learning. Our founder spent years mastering design, marketing strategy, and business management—including an MBA—before helping small businesses across the DFW area bring their brands to life.
          </p>

          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            We've delivered plenty of projects, from logos and websites to social media campaigns and paid ads. Every project combines practical know-how with a focus on results that actually matter.
          </p>

          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            No fluff. No empty promises. Just strategies that work.
          </p>

          <p className="text-lg text-gray-500 mt-4 leading-relaxed italic">
            There are a lot of hoops in marketing. We handle them so you don't have to.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
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