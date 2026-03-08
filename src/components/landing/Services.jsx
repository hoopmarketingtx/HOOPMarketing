import { motion } from 'framer-motion';
import { Megaphone, Palette, TrendingUp, Globe, Camera, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    description: "Aggressive campaigns that cut through the noise and put your brand in front of the right people.",
    color: "from-[#00B8E6] to-[#1F4E5F]"
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that make your brand impossible to ignore or forget.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "SEO, PPC, and social media strategies that dominate search results and feeds.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Scroll-stopping visuals and compelling copy that converts browsers into buyers.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Data-driven insights and strategies to scale your business faster than the competition.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Big ideas and bold executions that transform how customers see your brand.",
    color: "from-rose-500 to-red-500"
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mt-4 tracking-tight">
            Services That
            <br />
            <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Move Needles</span>
          </h2>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">
            We don't believe in cookie-cutter solutions. Every strategy is built to dominate your specific market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 hover:bg-[#0a0a0a] rounded-3xl p-8 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#0a0a0a] group-hover:text-white transition-colors duration-500 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-[#00B8E6] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}