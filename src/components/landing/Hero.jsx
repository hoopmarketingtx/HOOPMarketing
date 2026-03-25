import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Each entry is one Instagram carousel post — add more objects for more posts.
// slides: array of image paths for that post's carousel frames.
const instagramPosts = [
  {
    slides: [
      '/assets/3.24.26/1.png',
      '/assets/3.24.26/2.png',
      '/assets/3.24.26/3.png',
      '/assets/3.24.26/4.png',
      '/assets/3.24.26/5.png',
    ],
  },
  {
    slides: [
      '/assets/3.16.26/3 Marketing Mistakes 1.png',
      '/assets/3.16.26/3 Marketing Mistakes 2.png',
      '/assets/3.16.26/3 Marketing Mistakes 3.png',
      '/assets/3.16.26/3 Marketing Mistakes 4.png',
      '/assets/3.16.26/3 Marketing Mistakes 5.png',
    ],
  },
];

function InstagramSlideshow() {
  const [postIndex, setPostIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const post = instagramPosts[postIndex];
  const totalSlides = post.slides.length;

  // Reset slide when switching posts
  useEffect(() => {
    setSlideIndex(0);
  }, [postIndex]);

  // Auto-advance slides within a post, then move to next post
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => {
        if (prev + 1 < totalSlides) return prev + 1;
        setPostIndex((p) => (p + 1) % instagramPosts.length);
        return 0;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [postIndex, totalSlides]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <a
        href="https://www.instagram.com/hoopmarketingtx"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-[2.5rem] border-[6px] border-white/10 bg-[#111] overflow-hidden shadow-2xl hover:border-[#E1306C]/40 transition-colors duration-300"
      >
        {/* Instagram header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/10">
          <Instagram className="w-5 h-5 text-[#E1306C]" />
          <span className="text-white/80 text-sm font-semibold tracking-wide">@hoopmarketingtx</span>
          <span className="ml-auto w-2 h-2 bg-[#00B8E6] rounded-full animate-pulse" />
        </div>

        {/* Post tabs */}
        <div className="flex border-b border-white/10 bg-[#111]">
          {instagramPosts.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setPostIndex(i); setSlideIndex(0); }}
              className={`flex-1 py-2 text-xs font-semibold transition-all duration-300 ${
                i === postIndex
                  ? 'text-[#E1306C] border-b-2 border-[#E1306C]'
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              Post {i + 1}
            </button>
          ))}
        </div>

        {/* Slideshow */}
        <div className="relative overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: '4/5' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={`${postIndex}-${slideIndex}`}
              src={post.slides[slideIndex]}
              alt={`Post ${postIndex + 1}, slide ${slideIndex + 1}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>

          {/* Slide dots (within post) */}
          {totalSlides > 1 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1">
              {post.slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === slideIndex ? 'bg-white w-4' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-[#111] flex items-center gap-2">
          <Instagram className="w-4 h-4 text-[#E1306C]" />
          <p className="text-white/40 text-xs">Follow us on Instagram</p>
        </div>
      </a>

      {/* Glow */}
      <div className="absolute -inset-4 bg-[#E1306C]/10 rounded-[3rem] blur-2xl -z-10" />
    </div>
  );
}

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
              HOOP Marketing &amp; Graphic Design builds bold brands and aggressive marketing systems that drive real growth—without the hassle.
            </p>
            <p className="text-lg text-[#00B8E6]/80 font-medium max-w-lg mb-12 italic">
              We'll jump through the hoops for you.
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
            className="relative hidden lg:flex items-center justify-center"
          >
            <InstagramSlideshow />
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