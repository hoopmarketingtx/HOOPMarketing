import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Tag, SlidersHorizontal } from 'lucide-react';
import Footer from '@/components/landing/Footer';

const posts = [
  {
    slug: 'three-marketing-mistakes-small-businesses-make',
    category: 'Strategy',
    title: '3 Marketing Mistakes Small Businesses Make (And How to Fix Them)',
    excerpt:
      'Most small business owners are great at what they do — but marketing is a different skill set entirely. Here are the three mistakes we see over and over again, and exactly how to course-correct.',
    date: 'March 20, 2026',
    readTime: '4 min read',
    content: [
      {
        heading: 'Mistake #1: Doing Everything at Once',
        body: 'New to marketing? The temptation is to be on every platform, run ads, send emails, make videos, and redesign your website — all at the same time. The result is usually a half-baked presence everywhere instead of a strong one anywhere. Pick one or two channels where your customers actually spend time, do those well, and then expand. Depth beats breadth every time.',
      },
      {
        heading: 'Mistake #2: Marketing Without a Clear Offer',
        body: 'If a stranger landed on your Instagram or website right now, would they immediately understand what you do, who you do it for, and what to do next? Most small business marketing is vague. "Quality service." "Family owned." "Passionate team." None of that tells a customer why they should choose you. Get ruthlessly specific about your offer before you spend a dollar promoting it.',
      },
      {
        heading: 'Mistake #3: Quitting Before the Compound Effect Kicks In',
        body: 'Marketing is slow in the beginning. Most businesses post for three weeks, see little traction, and pull back. But marketing compounds — consistency builds trust, trust builds audience, audience builds customers. The businesses that win aren\'t always the most creative. They\'re the most consistent. Set a realistic 90-day plan and stick to it before evaluating results.',
      },
    ],
  },
  {
    slug: 'consistency-beats-virality',
    category: 'Social Media',
    title: 'Why Consistency Beats Virality for Small Business Social Media',
    excerpt:
      'Chasing a viral moment feels exciting, but it almost never pays the bills. What actually builds an audience — and a customer base — is showing up reliably.',
    date: 'March 13, 2026',
    readTime: '5 min read',
    content: [
      {
        heading: 'The Viral Trap',
        body: 'A post blows up. You gain 2,000 followers overnight. Exciting, right? Then you check your DMs a week later — crickets. Viral content attracts passive viewers. Consistent content builds an invested audience. Those are very different things, and only one of them actually drives revenue for a local small business.',
      },
      {
        heading: 'What Consistency Actually Does',
        body: 'Every time you post, you remind your existing followers that you exist. You show up in the algorithm. You give potential customers another touchpoint. Research across industries consistently shows that people need 5–12 brand interactions before making a purchase decision. One viral video doesn\'t get you there. A reliable posting schedule does.',
      },
      {
        heading: 'The Realistic Consistency Framework',
        body: 'You don\'t need to post every day. You need a schedule you can actually maintain — whether that\'s 3 times a week or once a week. Batch your content creation. Repurpose intelligently. Use scheduling tools. The goal is to never go dark for more than 7 days. Gaps in posting signal inactivity to both your audience and the algorithm.',
      },
    ],
  },
  {
    slug: 'what-to-look-for-in-a-marketing-agency',
    category: 'Tips',
    title: 'What to Look for in a Marketing Agency: A Small Business Guide',
    excerpt:
      'Not all agencies are created equal. Before you sign a contract, here are the questions you should be asking — and the red flags that should send you running.',
    date: 'March 5, 2026',
    readTime: '6 min read',
    content: [
      {
        heading: 'Ask to See Real Results, Not Just Case Studies',
        body: 'Any agency can put together a slick PDF. Ask for actual screenshots of ad dashboards, social analytics before and after, or client reviews that mention specific outcomes. If they can\'t provide measurable proof of impact, move on. Testimonials that say "great to work with!" are nice, but they don\'t tell you if leads actually came in.',
      },
      {
        heading: 'Red Flags to Watch Out For',
        body: 'Guaranteed follower counts. Packages with no reporting. Locked-in 12-month contracts with no out clause. Agencies that can\'t explain what they\'re doing in plain English. Charging separate "setup fees" on top of a monthly retainer without clear deliverables attached. Any of these should give you serious pause.',
      },
      {
        heading: 'What a Good Agency Actually Looks Like',
        body: 'They ask more questions than they answer in the first call. They\'re honest about what marketing can and can\'t do for your timeline and budget. They show you transparent reporting and explain what the numbers mean. And they treat your business like they actually care what happens to it — not just what hits their invoice.',
      },
    ],
  },
  {
    slug: 'brand-identity-vs-logo',
    category: 'Branding',
    title: 'Your Logo Is Not Your Brand (And That Distinction Costs People Money)',
    excerpt:
      'A logo is just the tip of the iceberg. Your brand is the whole feeling customers get every time they interact with your business.',
    date: 'February 26, 2026',
    readTime: '5 min read',
    content: [
      {
        heading: 'What a Brand Actually Is',
        body: 'Your brand is the sum total of every impression your business makes — your visuals, yes, but also your tone of voice, your response time, how your team answers the phone, what your truck looks like, and how your packaging smells. A logo is a symbol. A brand is a feeling. The feeling is what makes people choose you over a competitor with the exact same service.',
      },
      {
        heading: 'Why This Matters for Small Businesses',
        body: 'Small businesses compete on trust. You don\'t have the media budget of a national chain, so every touchpoint has to do more work. A mismatched brand — confident logo, sloppy Instagram, unprofessional invoices — erodes trust even if the service is excellent. Conversely, a cohesive, intentional brand signals professionalism before you ever speak to a customer.',
      },
      {
        heading: 'Where to Start',
        body: 'Before worrying about your logo, nail down three things: who you serve, what you stand for, and how you want people to feel after interacting with you. From there, every visual and verbal decision becomes much easier to make — and much harder to get wrong. The logo comes last, not first.',
      },
    ],
  },
  {
    slug: 'paid-ads-for-small-businesses',
    category: 'Paid Ads',
    title: 'Paid Ads 101: What Small Businesses Need to Know Before Spending a Dollar',
    excerpt:
      'Paid advertising can be a growth multiplier — or a money pit. The difference usually comes down to preparation.',
    date: 'February 18, 2026',
    readTime: '7 min read',
    content: [
      {
        heading: 'Ads Amplify What\'s Already There',
        body: 'Paid ads don\'t fix a broken funnel — they accelerate whatever is already happening. If your website doesn\'t convert, ads will send people to a page that doesn\'t convert, faster. If your offer isn\'t compelling, ads will show a non-compelling offer to more people. Before spending on ads, make sure your landing page, offer, and follow-up process are actually solid.',
      },
      {
        heading: 'Start With Retargeting, Not Cold Traffic',
        body: 'Cold traffic ads — showing your business to strangers — are expensive and slow to optimize. Retargeting ads show your business to people who\'ve already visited your site or engaged with your social profile. These people are warm. They already know you exist. Retargeting campaigns almost always outperform cold campaigns for small budgets, so start there.',
      },
      {
        heading: 'Budget Realistically',
        body: 'Facebook and Instagram ads need time and data to optimize. Plan for a minimum 30-day test period and a budget of at least $300–$500/month to get meaningful data. Less than that and you won\'t have enough impressions to know what\'s working. The goal of month one isn\'t profit — it\'s data. Optimize from there.',
      },
    ],
  },
  {
    slug: 'how-to-write-an-about-page',
    category: 'Content',
    title: 'How to Write an About Page That Actually Converts',
    excerpt:
      'Most About pages talk way too much about the business and not enough about the customer. Here\'s a simple framework to flip the script.',
    date: 'February 10, 2026',
    readTime: '4 min read',
    content: [
      {
        heading: 'The Common Mistake: Making It About You',
        body: 'Most About pages read like a resume. Founded in 2018. Family owned. Passionate about quality. But your customer doesn\'t care about your founding story — they care about whether you can solve their problem. The best About pages acknowledge the customer\'s situation before talking about the business at all. Lead with empathy, not history.',
      },
      {
        heading: 'The Framework: Problem → Proof → Promise',
        body: 'Start by naming the problem your ideal customer faces. Then show proof that you\'ve solved it — real results, real clients, real credentials. Finally, make a clear promise about what working with you looks like. This three-part structure works because it mirrors how trust is built: I understand you, I\'ve done this before, and here\'s what I\'ll do for you.',
      },
      {
        heading: 'The One Thing Most About Pages Are Missing',
        body: 'A call to action. Your About page is often where motivated buyers land after they\'ve already decided they\'re interested. Don\'t end with a paragraph about your passion for the craft. End with a direct next step — book a call, get a quote, see the work. Give them somewhere to go while the momentum is there.',
      },
    ],
  },
];

const categories = ['All', 'Strategy', 'Social Media', 'Tips', 'Branding', 'Paid Ads', 'Content'];

function CategoryDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B8E6]/40 text-white/70 hover:text-white transition-all duration-300 rounded-xl px-5 py-3 text-sm font-medium"
      >
        <SlidersHorizontal className="w-4 h-4 text-[#00B8E6]" />
        {selected === 'All' ? 'Filter by category' : selected}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-0 mt-2 w-52 bg-[#111] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden py-1"
          >
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => { onChange(cat); setOpen(false); }}
                  className={`w-full text-left px-5 py-2.5 text-sm transition-colors duration-200 flex items-center gap-2 ${
                    selected === cat
                      ? 'text-[#00B8E6] bg-[#00B8E6]/10 font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat !== 'All' && (
                    <span className={`w-1.5 h-1.5 rounded-full ${selected === cat ? 'bg-[#00B8E6]' : 'bg-white/20'}`} />
                  )}
                  {cat}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const categoryColors = {
  Strategy: 'bg-purple-500/10 text-purple-400',
  'Social Media': 'bg-[#E1306C]/10 text-[#E1306C]',
  Tips: 'bg-green-500/10 text-green-400',
  Branding: 'bg-[#00B8E6]/10 text-[#00B8E6]',
  'Paid Ads': 'bg-orange-500/10 text-orange-400',
  Content: 'bg-yellow-500/10 text-yellow-400',
};

function PostCard({ post, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="group flex flex-col bg-white/5 border border-white/10 hover:border-[#00B8E6]/40 hover:bg-white/[0.07] rounded-2xl transition-colors duration-300 cursor-pointer"
      onClick={onOpen}
    >
      <div className="flex flex-col p-7 flex-1">
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-white/10 text-white/60'}`}>
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-white/30 text-xs">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-white group-hover:text-[#00B8E6] font-bold text-lg leading-snug mb-3 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-white/50 text-sm leading-relaxed flex-1">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
          <span className="text-white/30 text-xs">{post.date}</span>
          <span className="flex items-center gap-1 text-[#00B8E6] text-sm font-semibold group-hover:gap-2 transition-all duration-200">
            Read more <ChevronDown className="w-4 h-4 -rotate-90" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function PostDetail({ post, onClose }) {
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200 mb-8 group"
      >
        <ChevronDown className="w-4 h-4 rotate-90 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to articles
      </button>

      <div className="bg-white/5 border border-[#00B8E6]/30 rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-white/10 text-white/60'}`}>
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-white/30 text-xs">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
          <span className="text-white/30 text-xs ml-auto">{post.date}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
          {post.title}
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10 pb-10 border-b border-white/10">
          {post.excerpt}
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {post.content.map((section) => (
            <div key={section.heading}>
              <h3 className="text-[#00B8E6] font-semibold text-base mb-3">{section.heading}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  const [activeSlug, setActiveSlug] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const activePost = posts.find((p) => p.slug === activeSlug) ?? null;

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setActiveSlug(null);
  };

  const openPost = (slug) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePost = () => {
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">
              HOOP Marketing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight leading-[1.05]">
              The Blog.
              <br />
              <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">
                Real talk. Real results.
              </span>
            </h1>
            <p className="text-xl text-white/50 mt-6 max-w-2xl leading-relaxed">
              Marketing advice for small businesses — no fluff, no jargon. Just
              practical strategies you can actually use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activePost ? (
              <PostDetail key="detail" post={activePost} onClose={closePost} />
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Filter bar */}
                <div className="flex items-center justify-between mb-10">
                  <p className="text-white/30 text-sm">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                    {selectedCategory !== 'All' && <span> in <span className="text-[#00B8E6]">{selectedCategory}</span></span>}
                  </p>
                  <CategoryDropdown selected={selectedCategory} onChange={handleCategoryChange} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <PostCard key={post.slug} post={post} index={index} onOpen={() => openPost(post.slug)} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
