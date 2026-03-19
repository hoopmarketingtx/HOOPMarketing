import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const hoopLogo = '/assets/HOOP-Marketing-Logo-2.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <img 
                src={hoopLogo} 
                alt="HOOP Marketing" 
                className="h-32 w-auto"
              />
              <p className="text-white/50 max-w-md leading-relaxed">
                Bold marketing and stunning design for businesses that refuse to blend in. 
                Texas proud, results driven.
              </p>
            </motion.div>

            <a
              href="https://www.instagram.com/hoopmarketingtx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#1F4E5F] text-white/60 hover:text-white transition-all duration-300 rounded-xl px-4 py-2.5"
            >
              <Instagram className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">@hoopmarketingtx</span>
            </a>
          </div>

          <div className="mt-12">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 HOOP Marketing & Graphic Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}