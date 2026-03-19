import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' }
];

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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69667ed36b3adcd6c969a3be/9612bec6e_HOOP-Marketing-Logo-2.png" 
                alt="HOOP Marketing" 
                className="h-32 w-auto"
              />
              <p className="text-white/50 max-w-md leading-relaxed">
                Bold marketing and stunning design for businesses that refuse to blend in. 
                Texas proud, results driven.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-gradient-to-r hover:from-[#00B8E6] hover:to-[#1F4E5F] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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