import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "La Casa de Las Calacas",
    category: "Full Rebrand",
    size: "large",
    expandable: true,
    images: [
      { label: "Logos", src: "/assets/La Casa de Las Calacas Brand Logos.png" },
      { label: "Illustrated Assets", src: "/assets/La Casa de Las Calacas Brand Illustrated Assets.png" },
      { label: "Sticker Mockups", src: "/assets/La Casa de Las Calacas Brand Sticker Mockups.png" },
      { label: "Menu Design", src: "/assets/La Casa de Las Calacas Brand Menu Design.png" },
      { label: "Merch / T-Shirt", src: "/assets/La Casa de Las Calacas Brand T-Shirt.png" },
    ],
  },
  {
    title: "RedInk.GOP",
    category: "Visual Design",
    size: "small",
    expandable: true,
    images: [
      { label: "Storefront", src: "/assets/RedInk.GOP-Storefront.png" },
      { label: "Business Card", src: "/assets/RedInk.GOP-Business-Card-Mockup.png" },
      { label: "LinkedIn Ad", src: "/assets/RedInk.GOP-LinkedIn-Ad-Mockup.png" },
    ],
  },
  {
    title: "TRL Services",
    category: "Digital & Print Marketing",
    size: "small",
    expandable: true,
    images: [
      { label: "Yard Sign", src: "/assets/TRL Yard Sign.png" },
      { label: "Business Card", src: "/assets/TRL BC.png" },
      { label: "Facebook Ad", src: "/assets/TRL FB Ad.png" },
      { label: "Instagram Posts", src: "/assets/TRL Insta Posts.png" },
      { label: "EDDM Mailer", src: "/assets/TRL EDDM Mailer.png" },
    ],
  },
];

function SlideshowCover({ images, isLarge }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div
      className={`${
        isLarge ? 'aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]' : 'aspect-[4/3]'
      } relative overflow-hidden`}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ opacity: i === current ? 1 : 0, transition: 'opacity 1s ease-in-out, transform 700ms ease' }}
        />
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [activePage, setActivePage] = useState(0);
  const section = project.images[activePage];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
      style={{ overscrollBehavior: 'contain' }}
    >
      {/* Header */}
      <div className="flex-shrink-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 px-4 md:px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-[#00B8E6] text-xs font-semibold uppercase tracking-wider">{project.category}</span>
          <h2 className="text-lg md:text-2xl font-bold text-white mt-0.5">{project.title}</h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tab navigation */}
      <div className="flex-shrink-0 px-4 md:px-6 pt-4 pb-2 flex flex-wrap gap-2 overflow-x-auto">
        {project.images.map((s, i) => (
          <button
            key={i}
            onClick={() => setActivePage(i)}
            className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
              activePage === i
                ? 'bg-[#00B8E6] text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Image viewer */}
      <div className="flex-1 overflow-auto px-4 md:px-6 py-4">
        <div className="w-full rounded-2xl border border-white/10 overflow-hidden bg-[#111] flex items-center justify-center">
          <img
            key={`page-${activePage}`}
            src={section.src}
            alt={section.label}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex-shrink-0 px-4 md:px-6 py-4 flex items-center justify-between border-t border-white/10">
        <button
          onClick={() => setActivePage((p) => Math.max(0, p - 1))}
          disabled={activePage === 0}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors disabled:opacity-30 text-sm"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <span className="text-white/40 text-sm">{activePage + 1} / {project.images.length}</span>
        <button
          onClick={() => setActivePage((p) => Math.min(project.images.length - 1, p + 1))}
          disabled={activePage === project.images.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors disabled:opacity-30 text-sm"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null);
  const activeProject = projects.find((p) => p.title === openProject);

  return (
    <>
      <section className="py-32 bg-[#0a0a0a]" id="work">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">Our Work</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
                Results That
                <br />
                <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Speak Loud</span>
              </h2>
            </div>
            <p className="text-xl text-white/60 max-w-md mt-6 md:mt-0">
              Every project is a chance to create something that moves the market. Here's proof we deliver.
            </p>
          </motion.div>

          {/* Grid: La Casa spans 2 cols on left, two small cards stacked on right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => project.expandable && setOpenProject(project.title)}
                className={`group relative overflow-hidden rounded-3xl ${
                  project.expandable ? 'cursor-pointer' : 'cursor-default'
                } ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <SlideshowCover images={project.images} isLarge={project.size === 'large'} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[#00B8E6] text-sm font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                        {project.title}
                      </h3>
                    </div>
                    {project.expandable && (
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  );
}