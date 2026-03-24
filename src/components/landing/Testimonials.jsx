import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "HOOP absolutely nailed our logo system. They didn't just give us a logo. They built a full, professional brand identity that we can confidently use across everything. It gave our business a much more polished and credible look right away.",
    author: "Lane Newton",
    role: "Victory Apparatus",
    logo: "/assets/Victory-Apparatus-Full-Logo.png",
  },
  {
    quote: "Working with HOOP Marketing for our social media has been a game changer. Staying consistent with content used to be a struggle, but now everything is handled for us. Our pages look more professional, engagement has gone up, and we are starting to see real traction from it.",
    author: "Garrett Wright",
    role: "TRL Services",
    logo: "/assets/Thin-Red-Line-Logo-Transparent-Background-HighContrast.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-4 tracking-tight">
            What Our
            <br />
            <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-0 text-[#00B8E6]/10">
            <Quote className="w-32 h-32" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0a0a0a] leading-relaxed">
                "{testimonials[current].quote}"
              </p>

              <div className="mt-12 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-[#00B8E6]/20 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={testimonials[current].logo}
                    alt={testimonials[current].role}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-bold text-[#0a0a0a] text-lg">{testimonials[current].author}</div>
                  <div className="text-gray-500">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-full border-gray-200 hover:border-[#00B8E6] hover:text-[#00B8E6]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-[#00B8E6] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-full border-gray-200 hover:border-[#00B8E6] hover:text-[#00B8E6]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}