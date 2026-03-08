import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SERVICES = [
  'Brand identity / visual refresh',
  'Website design or redesign',
  'Marketing strategy',
  'Paid advertising',
  'Social media content',
  'Ongoing design support',
  "Not totally sure yet",
];

const BUDGETS = ['Under $1k', '$1k–$2k', '$2k–$5k', '$5k–$10k', 'Not sure yet'];
const TIMINGS = ['ASAP', 'Within 30 days', '1–3 months', 'Just exploring options'];

const TOTAL_STEPS = 5;

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: [],
    budget: '',
    timing: '',
    previousEfforts: '',
  });

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      website: formData.website,
      services: formData.services.join(', '),
      budget: formData.budget,
      timing: formData.timing,
      previousEfforts: formData.previousEfforts,
    };
    const response = await fetch('https://formspree.io/f/xlgwkyvr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (response.ok) setSubmitted(true);
    setIsSubmitting(false);
  };

  const canAdvance = () => {
    if (step === 1) return formData.name && formData.email && formData.company;
    if (step === 2) return formData.services.length > 0;
    if (step === 3) return !!formData.budget;
    if (step === 4) return !!formData.timing;
    return true;
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00B8E6]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00B8E6] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
              Ready To
              <br />
              <span className="bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent">Dominate?</span>
            </h2>
            <p className="text-xl text-white/60 mt-8 max-w-lg">
              We take on a limited number of projects each month to stay hands-on and strategic. If it looks like a strong fit, you'll hear from us within 24–48 hours.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@hoopmarketing.com' },
                { icon: Phone, label: 'Call Us', value: '(512) 555-0123' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00B8E6]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#00B8E6] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">You're on our radar.</h3>
                  <p className="text-white/60 max-w-sm">
                    We'll review your submission and reach out within 24–48 hours if it looks like a great fit.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between text-white/40 text-xs mb-2">
                      <span>Step {step} of {TOTAL_STEPS}</span>
                      <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full">
                      <div
                        className="h-1 bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] rounded-full transition-all duration-500"
                        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                        <h3 className="text-white font-semibold text-lg mb-6">The Basics</h3>
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Full Name *</label>
                          <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Smith" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Email *</label>
                          <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Company Name *</label>
                          <Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your Business" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Website <span className="text-white/30">(optional)</span></label>
                          <Input value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://yoursite.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-2">What are you looking to improve right now?</h3>
                        <p className="text-white/40 text-sm mb-6">Select all that apply</p>
                        <div className="space-y-3">
                          {SERVICES.map((service) => (
                            <button
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                                formData.services.includes(service)
                                  ? 'border-[#00B8E6] bg-[#00B8E6]/10 text-white'
                                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-2">Let's talk numbers</h3>
                        <p className="text-white/40 text-sm mb-6">What investment range feels realistic for this project?</p>
                        <div className="space-y-3">
                          {BUDGETS.map((budget) => (
                            <button
                              key={budget}
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                                formData.budget === budget
                                  ? 'border-[#00B8E6] bg-[#00B8E6]/10 text-white'
                                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                              }`}
                            >
                              {budget}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-2">Timing matters</h3>
                        <p className="text-white/40 text-sm mb-6">When are you hoping to get started?</p>
                        <div className="space-y-3">
                          {TIMINGS.map((timing) => (
                            <button
                              key={timing}
                              onClick={() => setFormData({ ...formData, timing })}
                              className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                                formData.timing === timing
                                  ? 'border-[#00B8E6] bg-[#00B8E6]/10 text-white'
                                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                              }`}
                            >
                              {timing}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-2">Experience So Far</h3>
                        <p className="text-white/50 text-sm mb-6 leading-relaxed">
                          What have you already tried that didn't move the needle?
                          <br />
                          <span className="text-white/30">If you haven't tried much yet, no stress — we share free marketing tips and strategy insights on Instagram @hoopmarketingtx to help you get started.</span>
                        </p>
                        <Textarea
                          value={formData.previousEfforts}
                          onChange={(e) => setFormData({ ...formData, previousEfforts: e.target.value })}
                          placeholder="Tell us what you've tried..."
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[180px] rounded-xl resize-none"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex gap-3 mt-8">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="bg-white/15 border-white/20 text-white hover:bg-white/25 rounded-xl h-12"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    )}
                    {step < TOTAL_STEPS ? (
                      <Button
                        onClick={() => setStep(step + 1)}
                        disabled={!canAdvance()}
                        className="flex-1 bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] hover:opacity-90 text-white h-12 rounded-xl group disabled:opacity-40"
                      >
                        Continue <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] hover:opacity-90 text-white h-12 rounded-xl group disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : <>Let's Work Together <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}