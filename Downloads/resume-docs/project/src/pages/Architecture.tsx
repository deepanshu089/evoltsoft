import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Brain, Mic, Globe, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const userFlowSteps = [
  {
    icon: '🧾',
    title: 'Pricing & Billing',
    details: [
      'Stripe Checkout / Portal',
      'Supabase `subscriptions`',
      'Supabase `billing_usage`',
      'Feature limits enforced',
    ],
  },
  {
    icon: '🔐',
    title: 'Auth & User Management',
    details: [
      'Supabase Auth',
      'Role: Recruiter / Admin',
    ],
  },
  {
    icon: '📥',
    title: 'Resume Upload Area',
    details: [
      'Upload PDF (React Dropzone)',
      'Store in Supabase Storage',
    ],
  },
  {
    icon: '🤖',
    title: 'Resume Parsing & NLP',
    details: [
      'Hugging Face Inference API',
      '- Extract skills, exp, etc',
      '- Generate pie charts',
      'Save to `parsed_data`',
    ],
  },
  {
    icon: '📊',
    title: 'Dashboard View',
    details: [
      'View parsed resume data',
      'Pie chart for skill dist.',
      'Resume Q&A Chatbot (HugFace)',
    ],
  },
  {
    icon: '🛠️',
    title: 'Interview Form Builder',
    details: [
      'Drag-drop fields',
      'Save form to `interview_configs`',
    ],
  },
  {
    icon: '✉️',
    title: 'Email Invite System',
    details: [
      'Generate unique link',
      'Email to candidate',
      'Uses: Nodemailer / Resend',
    ],
  },
  {
    icon: '👤',
    title: 'Candidate Portal',
    details: [
      'Fills custom form',
      'Starts AI interview (Vapi)',
      'Saves to `candidate_forms`',
    ],
  },
  {
    icon: '🎙️',
    title: 'AI Interview Engine',
    details: [
      'Vapi + Hugging Face Scoring',
      'Voice + Video recording',
      'Supabase Storage + DB save',
    ],
  },
  {
    icon: '📽️',
    title: 'Recruiter Review Panel',
    details: [
      'View form data',
      'Play video/audio',
      'See scores + decisions',
      'Select / Reject option',
    ],
  },
];

const Architecture: React.FC = () => {
  const components = [
    { name: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500', description: 'Next.js + React' },
    { name: 'API Layer', icon: Server, color: 'from-green-500 to-teal-500', description: 'REST APIs' },
    { name: 'Database', icon: Database, color: 'from-purple-500 to-pink-500', description: 'Supabase' },
    { name: 'AI Models', icon: Brain, color: 'from-orange-500 to-red-500', description: 'Hugging Face' },
    { name: 'Voice AI', icon: Mic, color: 'from-indigo-500 to-purple-500', description: 'Vapi Integration' },
  ];

  const userFlowRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (userFlowRef.current) {
      gsap.fromTo(
        userFlowRef.current.querySelectorAll('.user-flow-step'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out' }
      );
      gsap.fromTo(
        userFlowRef.current.querySelectorAll('.user-flow-arrow'),
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, []);

  // GSAP animation for cards and line
  useEffect(() => {
    if (scrollContainerRef.current) {
      gsap.fromTo(
        scrollContainerRef.current.querySelectorAll('.user-flow-step'),
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out' }
      );
    }
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: 'power2.inOut', transformOrigin: 'left' }
      );
    }
  }, []);

  // Scroll buttons
  const scrollBy = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    let tween: gsap.core.Tween | null = null;
    const el = scrollContainerRef.current;
    let running = true;

    // Get the width of the original set of cards
    const card = el.querySelector('.user-flow-step');
    if (!card) return;
    const cardWidth = card.clientWidth + 32; // 32px = gap-8
    const originalSetWidth = cardWidth * userFlowSteps.length;

    function startScroll() {
      if (!el) return;
      tween = gsap.to(el, {
        scrollLeft: originalSetWidth,
        duration: 30, // slow and smooth
        ease: 'none',
        onUpdate: () => {
          if (!running) return;
          if (el.scrollLeft >= originalSetWidth - 1) {
            tween?.kill();
            el.scrollLeft = 0;
            startScroll();
          }
        },
      });
    }

    if (!paused) {
      running = true;
      startScroll();
    }
    return () => {
      running = false;
      tween?.kill();
    };
  }, [paused]);

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              System
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Built with modern, scalable architecture using industry-leading technologies 
              and best practices for optimal performance and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {components.map((component, index) => {
                  const Icon = component.icon;
                  return (
                    <React.Fragment key={component.name}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className={`w-24 h-24 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-xl">{component.name}</h3>
                        <p className="text-slate-600">{component.description}</p>
                      </motion.div>
                      
                      {index < components.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className="hidden lg:block"
                        >
                          <ArrowRight className="h-8 w-8 text-slate-400" />
                        </motion.div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Data Flow & Features */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">User Flow</h2>
            <div className="relative">
              {/* Horizontal Scrollable Flow with Autoscroll and Hand Scroll */}
              <div
                ref={scrollContainerRef}
                className="flex items-stretch gap-8 overflow-x-auto pb-10 pt-12 px-2 snap-x snap-mandatory hide-scrollbar relative"
                style={{ scrollBehavior: 'smooth' }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  clearTimeout((scrollContainerRef.current as any)?._resumeTimeout);
                  setPaused(false);
                }}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => {
                  clearTimeout((scrollContainerRef.current as any)?._resumeTimeout);
                  setPaused(false);
                }}
              >
                {/* Animated horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 z-0" style={{ pointerEvents: 'none' }}>
                  <div
                    ref={lineRef}
                    className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                </div>
                {[...userFlowSteps, ...userFlowSteps].map((step, idx) => (
                  <div
                    key={step.title + '-' + idx}
                    className="user-flow-step relative snap-center min-w-[280px] max-w-xs flex-shrink-0 bg-white/60 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl px-6 pt-14 pb-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 group"
                    style={{ zIndex: 1 }}
                  >
                    {/* Numbered badge */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg border-4 border-white text-white text-lg font-bold z-20">
                      {((idx % userFlowSteps.length) + 1)}
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl border-4 border-white group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="mt-4 mb-3 text-lg font-extrabold text-slate-900 text-center tracking-tight group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </div>
                    <ul className="text-slate-700 text-sm space-y-1 text-center font-medium">
                      {step.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance, scalability, and developer experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col items-center text-center"
            >
              <div className="flex gap-4 mb-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-14 w-14 drop-shadow-lg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="h-14 w-14 drop-shadow-lg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="h-14 w-14 drop-shadow-lg" />
               
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Frontend</h3>
              <p className="text-slate-600 mb-4">Next.js, React, TypeScript, Tailwind CSS, Framer Motion</p>
              <ul className="space-y-2 text-slate-700 text-base">
                <li>• Modern UI/UX with React 18</li>
                <li>• App Router & SSR (Next.js 14)</li>
                <li>• Type safety & DX</li>
                <li>• Utility-first styling</li>
                <li>• Smooth animations</li>
              </ul>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col items-center text-center"
            >
              <div className="flex gap-4 mb-6">
                <img src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="Supabase" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" className="h-14 w-14 drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Backend</h3>
              <p className="text-slate-600 mb-4">Supabase, PostgreSQL, RESTful APIs, Edge Functions</p>
              <ul className="space-y-2 text-slate-700 text-base">
                <li>• Auth & real-time DB</li>
                <li>• Secure RLS policies</li>
                <li>• Edge/serverless functions</li>
                <li>• Real-time subscriptions</li>
                <li>• RESTful API design</li>
              </ul>
            </motion.div>

            {/* AI & Integrations Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col items-center text-center"
            >
              <div className="flex gap-4 mb-6">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
                <img src="https://vapi.ai/favicon.ico" alt="Vapi" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg" alt="OpenAI" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
                <img src="https://avatars.githubusercontent.com/u/107914821?s=200&v=4" alt="Resend" className="h-14 w-14 drop-shadow-lg bg-white rounded-full p-1" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">AI & Integrations</h3>
              <p className="text-slate-600 mb-4">Hugging Face, Vapi, OpenAI, Resend, Webhooks</p>
              <ul className="space-y-2 text-slate-700 text-base">
                <li>• NLP & resume parsing</li>
                <li>• Voice & video AI</li>
                <li>• GPT-powered chat</li>
                <li>• Email automation</li>
                <li>• Webhook integrations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;