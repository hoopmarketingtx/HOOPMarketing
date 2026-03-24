import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, Palette, TrendingUp, Monitor, ArrowUpRight, ArrowLeft, X, Check } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Growth & Management",
    description: "We manage your social media presence from start to finish—creating content, engaging with your audience, and helping your business stay top-of-mind. All packages include content creation, posting, and daily account management. Ad spend is included and managed by our team, with the ability to scale at any time.",
    cardDescription: "Consistent content and daily engagement to grow your brand and attract customers.",
    color: "from-[#00B8E6] to-[#1F4E5F]",
    tiers: [
      {
        name: "Foundation",
        price: "$1,149",
        period: "/ month",
        tagline: "Best for building a consistent presence.",
        features: [
          "8 custom posts per month",
          "1 short-form video (reel)",
          "Daily account management & engagement",
          "Basic content strategy",
          "Includes $150 in managed ad spend",
          "Monthly performance reporting",
        ],
        outcome: "Build a consistent and professional social media presence that keeps your business visible",
      },
      {
        name: "Growth",
        price: "$1,549",
        period: "/ month",
        tagline: "Built for growth and engagement.",
        featured: true,
        features: [
          "12 custom posts per month",
          "2 short-form videos (reels)",
          "Daily account management & engagement",
          "Content strategy development",
          "Includes $250 in managed ad spend",
          "Monthly strategy & performance meeting",
          "Performance reporting",
        ],
        outcome: "Grow your audience and generate consistent engagement and inbound interest",
      },
      {
        name: "Premium",
        price: "$2,199",
        period: "/ month",
        tagline: "Best for scaling and brand dominance.",
        features: [
          "16 custom posts per month",
          "4 short-form videos (reels)",
          "Priority daily management & engagement",
          "Advanced content strategy",
          "Monthly content calendar planning",
          "Competitor & performance analysis",
          "Trend-based content ideation",
          "Includes $500 in managed ad spend",
          "Monthly strategy & analytics meeting",
          "Detailed performance reporting",
        ],
        outcome: "Dominate your local market with a high-volume, high-impact social media presence",
      },
    ],
  },
  {
    icon: Monitor,
    title: "Bespoke Website Builds",
    description: "We don't just build websites — we create conversion-focused systems that help your business generate leads, build trust, and grow online. All websites are fully custom, mobile-optimized, and built with performance and user experience in mind.",
    cardDescription: "We don't just build websites — we create conversion-focused systems that help your business generate leads, build trust, and grow online.",
    color: "from-purple-500 to-pink-500",
    tiers: [
      {
        name: "Foundation",
        price: "$500",
        originalPrice: "$1,000",
        period: "one-time",
        tagline: "Limited Time Offer \u2013 Best for new businesses.",
        features: [
          "1-page custom website (additional pages available)",
          "Mobile-responsive design",
          "Custom lead capture form",
          "Basic SEO setup",
          "Domain included (up to $100 value)",
          "Monthly performance reporting",
        ],
        outcome: "Launch a clean, professional online presence that builds credibility and captures leads",
        note: "Limited-time offer. Additional pages and features can be added as needed.",
        maintenance: "$99/month optional maintenance (updates, monitoring & support)",
      },
      {
        name: "Growth",
        price: "$2,300",
        period: "one-time",
        tagline: "Built for lead generation.",
        featured: true,
        features: [
          "3\u20135 page custom website",
          "Conversion-focused design",
          "SEO optimization",
          "Custom lead capture system",
          "Copywriting guidance",
          "Google Analytics (GA4) integration",
          "Monthly performance reporting",
        ],
        outcome: "Turn your website into a consistent lead-generating asset for your business",
        maintenance: "$99/month optional maintenance (updates, monitoring & support)",
      },
      {
        name: "Premium",
        price: "$5,000+",
        period: "one-time",
        tagline: "Best for scaling businesses.",
        features: [
          "5+ page fully custom website",
          "Advanced conversion strategy",
          "Funnel and automation integration",
          "Advanced SEO strategy",
          "Custom integrations (CRM, booking systems, etc.)",
          "Google Analytics (GA4) + advanced tracking",
          "Weekly performance reporting",
        ],
        outcome: "A complete online sales system designed to scale your business and maximize conversions",
        maintenance: "$99/month optional maintenance (updates, monitoring & support)",
      },
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Ad Execution",
    description: "Predictable, scalable lead generation through targeted advertising. We create, manage, and optimize paid ad campaigns designed to generate real customers for your business. Ad spend is included and managed by our team — additional budget can be added at any time to increase reach and results.",
    cardDescription: "Predictable, scalable lead generation through targeted advertising. We create, manage, and optimize paid ad campaigns designed to generate real customers for your business.",
    color: "from-amber-500 to-yellow-500",
    tiers: [
      {
        name: "Foundation",
        price: "$339",
        period: "/ month",
        tagline: "Best for testing paid ads.",
        features: ["1 ad campaign (creative + copy)", "1 target location (geofence)", "Basic audience targeting", "Includes $100 in managed ad spend", "Monthly performance reporting"],
        outcome: "Launch your first customer-generating ad campaign",
      },
      {
        name: "Growth",
        price: "$629",
        period: "/ month",
        tagline: "Best for consistent lead flow.",
        featured: true,
        features: ["2 ad campaigns (creative + copy)", "2 target locations", "Audience + keyword research", "Campaign optimization", "Includes $250 in managed ad spend", "Monthly performance reporting"],
        outcome: "Generate consistent, optimized leads every month",
      },
      {
        name: "Premium",
        price: "$1,119",
        period: "/ month",
        tagline: "Best for aggressive growth.",
        features: ["4 ad campaigns (creative + copy)", "Multi-location targeting", "Advanced audience strategy", "Weekly optimization and reporting", "Includes $600 in managed ad spend"],
        outcome: "Scale your reach and dominate your local market",
      },
    ],
  },
  {
    icon: Palette,
    title: "Print Media Design",
    description: "Bold, tactile print materials that make your brand impossible to throw away — from business cards to large-format.",
    color: "from-rose-500 to-red-500",
    singleTier: {
      name: "Design Services",
      price: "Starting at $49",
      features: [
        "Custom flyer, poster, or marketing asset",
        "High-quality, print-ready files",
        "Fast turnaround time",
        "Includes 1 revision round",
      ],
    },
  },
];

function ServiceModal({ service, onClose, onSelectPackage }) {
  const [designStep, setDesignStep] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

  // Print brief state
  const [printType, setPrintType] = useState('');
  const [printDetails, setPrintDetails] = useState('');

  // Website brief state
  const [websitePages, setWebsitePages] = useState([]);
  const [websiteGoal, setWebsiteGoal] = useState('');
  const [websiteDetails, setWebsiteDetails] = useState('');

  const PRINT_TYPES = ['Flyer', 'Poster', 'Business Card', 'Banner', 'Brochure', 'EDDM Mailer', 'Yard Sign', 'Other'];
  const WEBSITE_PAGES = ['Home', 'About', 'Services', 'Portfolio / Gallery', 'Blog', 'Contact', 'Booking / Scheduling', 'E-commerce / Shop', 'FAQ', 'Testimonials'];
  const WEBSITE_GOALS = ['Generate leads', 'Sell products online', 'Showcase my portfolio', 'Book appointments', 'Build brand credibility', 'Other'];

  const handleDesignContinue = () => {
    onSelectPackage({
      service: service.title,
      tier: service.singleTier.name,
      designBrief: printType + (printDetails ? ` — ${printDetails}` : ''),
    });
  };

  const handleWebsiteContinue = () => {
    onSelectPackage({
      service: service.title,
      tier: selectedTier.name,
      designBrief: [
        websiteGoal && `Goal: ${websiteGoal}`,
        websitePages.length > 0 && `Pages: ${websitePages.join(', ')}`,
        websiteDetails && `Notes: ${websiteDetails}`,
      ].filter(Boolean).join(' | '),
    });
  };

  const isWebsiteBuild = service.title === 'Bespoke Website Builds';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col overflow-auto"
      style={{ overscrollBehavior: 'contain' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/10 px-4 md:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {designStep === 'form' && (
            <button
              onClick={() => setDesignStep(null)}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <span className="text-[#00B8E6] text-xs font-semibold uppercase tracking-wider">
              {designStep === 'form' ? 'Request a Design' : designStep === 'website' ? 'Website Brief' : 'Pricing'}
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-white mt-0.5">{service.title}</h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 md:px-8 py-10">

        {designStep === 'form' ? (
          <div className="max-w-lg mx-auto">
            <h3 className="text-white font-semibold text-lg mb-2">What do you need designed?</h3>
            <p className="text-white/40 text-sm mb-8">Tell us a bit about your project before we get to your details.</p>
            <div className="mb-6">
              <label className="text-white/70 text-sm mb-3 block">Type of design</label>
              <div className="flex flex-wrap gap-2">
                {PRINT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setPrintType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      printType === type
                        ? 'bg-[#00B8E6] text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <label className="text-white/70 text-sm mb-3 block">
                Describe what you're looking for <span className="text-white/30">(optional)</span>
              </label>
              <textarea
                value={printDetails}
                onChange={(e) => setPrintDetails(e.target.value)}
                placeholder="Colors, dimensions, any specific text, inspiration, etc."
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm min-h-[120px] resize-none focus:outline-none focus:border-[#00B8E6]/50"
              />
            </div>
            <button
              onClick={handleDesignContinue}
              disabled={!printType}
              className="w-full py-3 rounded-2xl font-semibold text-sm bg-[#00B8E6] text-white hover:bg-[#00A0CC] transition-all duration-300 disabled:opacity-40"
            >
              Continue to Contact Form
            </button>
          </div>
        ) : designStep === 'website' ? (
          <div className="max-w-lg mx-auto">
            <h3 className="text-white font-semibold text-lg mb-1">Tell us about your website</h3>
            <p className="text-white/40 text-sm mb-8">Help us understand what you need before filling out your details.</p>
            <div className="mb-6">
              <label className="text-white/70 text-sm mb-3 block">Primary goal of your website</label>
              <div className="flex flex-wrap gap-2">
                {WEBSITE_GOALS.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setWebsiteGoal(goal)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      websiteGoal === goal
                        ? 'bg-[#00B8E6] text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="text-white/70 text-sm mb-3 block">
                Pages you'd like included <span className="text-white/30">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {WEBSITE_PAGES.map((page) => (
                  <button
                    key={page}
                    onClick={() => setWebsitePages((prev) =>
                      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
                    )}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      websitePages.includes(page)
                        ? 'bg-[#00B8E6] text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <label className="text-white/70 text-sm mb-3 block">
                Anything else we should know? <span className="text-white/30">(optional)</span>
              </label>
              <textarea
                value={websiteDetails}
                onChange={(e) => setWebsiteDetails(e.target.value)}
                placeholder="Existing website, branding assets, competitors you like, timeline, etc."
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm min-h-[120px] resize-none focus:outline-none focus:border-[#00B8E6]/50"
              />
            </div>
            <button
              onClick={handleWebsiteContinue}
              disabled={!websiteGoal}
              className="w-full py-3 rounded-2xl font-semibold text-sm bg-[#00B8E6] text-white hover:bg-[#00A0CC] transition-all duration-300 disabled:opacity-40"
            >
              Continue to Contact Form
            </button>
          </div>
        ) : (
          <>
            <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">{service.description}</p>
            {service.singleTier ? (
          <div className="max-w-sm mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-8 flex flex-col bg-gradient-to-b from-[#00B8E6]/20 to-[#1F4E5F]/20 border border-[#00B8E6]/50"
            >
              <h3 className="text-xl font-bold text-white mb-2">{service.singleTier.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{service.singleTier.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.singleTier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#00B8E6] flex-shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setDesignStep('form')}
                className="w-full py-3 rounded-2xl font-semibold text-sm bg-[#00B8E6] text-white hover:bg-[#00A0CC] transition-all duration-300"
              >
                Request a Design
              </button>
            </motion.div>
          </div>
        ) : (
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {service.tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl p-7 flex flex-col ${
                tier.featured
                  ? 'bg-gradient-to-b from-[#00B8E6]/20 to-[#1F4E5F]/20 border border-[#00B8E6]/50'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="mb-5">
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <p className="text-white/40 text-sm mt-1">{tier.tagline}</p>
              </div>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.originalPrice && (
                  <span className="text-lg font-medium text-white/30 line-through mb-1">{tier.originalPrice}</span>
                )}
                <span className="text-white/40 text-sm mb-1">{tier.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#00B8E6] flex-shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              {tier.outcome && (
                <p className="mt-5 text-xs text-[#00B8E6]/80 italic border-t border-white/10 pt-4">
                  {tier.outcome}
                </p>
              )}
              {tier.note && (
                <p className="mt-3 text-xs text-white/40 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                  {tier.note}
                </p>
              )}
              {tier.callout && (
                <p className="mt-3 text-xs text-amber-400/80 bg-amber-400/10 border border-amber-400/20 rounded-xl px-3 py-2">
                  {tier.callout}
                </p>
              )}
              {tier.maintenance && (
                <p className="mt-3 text-xs text-white/40 border-t border-white/10 pt-3">
                  {tier.maintenance}
                </p>
              )}
              <button
                onClick={() => {
                  if (isWebsiteBuild) {
                    setSelectedTier(tier);
                    setDesignStep('website');
                  } else {
                    onSelectPackage({ service: service.title, tier: tier.name });
                  }
                }}
                className={`mt-8 w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  tier.featured
                    ? 'bg-[#00B8E6] text-white hover:bg-[#00A0CC]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
          )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function Services({ onSelectPackage }) {
  const [openService, setOpenService] = useState(null);
  const activeService = services.find((s) => s.title === openService);

  return (
    <>
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

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setOpenService(service.title)}
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
                  {service.cardDescription || service.description}
                </p>

                <div className="mt-6 flex items-center text-[#00B8E6] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View Pricing
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setOpenService(null)}
            onSelectPackage={(pkg) => {
              onSelectPackage(pkg);
              setOpenService(null);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}