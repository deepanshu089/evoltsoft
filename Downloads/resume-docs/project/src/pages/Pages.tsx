import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, FileText, Upload, BarChart, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const pages = [
  {
    key: 'dashboard',
    icon: LayoutDashboard,
    title: 'Dashboard',
    path: '/dashboard',
    description: "Get a bird's-eye view of all your recruitment activities, analytics, and candidate progress in one place.",
    image: 'https://res.cloudinary.com/drq4tdbj9/image/upload/v1749489395/dashboard_hirez_vd50kh.jpg', // Leave blank for user to add
  },
  {
    key: 'application-form',
    icon: FileText,
    title: 'Application Form',
    path: '/application-form',
    description: 'Customizable forms for candidate applications, tailored to your job roles and requirements.',
    image: 'https://res.cloudinary.com/drq4tdbj9/image/upload/v1749489396/application_form_d4g0py.jpg',
  },
  {
    key: 'resume-uploader',
    icon: Upload,
    title: 'Resume Uploader',
    path: '/resume-uploader',
    description: 'Easily upload and manage candidate resumes with drag-and-drop and bulk upload support.',
    image: 'https://res.cloudinary.com/drq4tdbj9/image/upload/v1749489394/resume_analysis_crsgvd.jpg',
  },
  {
    key: 'resume-analysis',
    icon: BarChart,
    title: 'Resume Analysis',
    path: '/resume-analysis',
    description: 'AI-powered analysis and visualization of candidate resumes for faster, smarter screening.',
    image: 'https://res.cloudinary.com/drq4tdbj9/image/upload/v1749489394/analysis_results_ffeyxp.jpg',
  },
  {
    key: 'hr-chatbot',
    icon: Bot,
    title: 'HR Chatbot',
    path: '/hr-chatbot',
    description: 'Conversational AI assistant to answer candidate questions and automate HR interactions.',
    image: 'https://res.cloudinary.com/drq4tdbj9/image/upload/v1749498451/chatbot_otr2kc.jpg',
  },
];

const tabVariants = {
  active: { scale: 1.08, background: 'linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%)', color: '#fff' },
  inactive: { scale: 1, background: '#f1f5f9', color: '#334155' },
};

const Pages: React.FC = () => {
  const [activeTab, setActiveTab] = useState(pages[0].key);
  const activePage = pages.find((p) => p.key === activeTab);

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Pages
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore the main features and modules of HireEZ with interactive previews.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto mt-8 bg-gradient-to-br from-blue-100 via-slate-50 to-blue-300 rounded-3xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-center min-h-[60vh]">
          {/* Vertical Tabs - stack vertically on mobile, horizontally on desktop */}
          <div className="flex flex-col md:flex-col gap-2 w-full md:w-56 mb-4 md:mb-0 z-10 items-center md:items-stretch">
            {pages.map((page) => {
              const Icon = page.icon;
              const isActive = activeTab === page.key;
              return (
                <motion.button
                  key={page.key}
                  className={`flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 rounded-xl font-semibold shadow-md bg-white/90 border border-slate-200 text-slate-700 hover:bg-blue-50 transition-all duration-200 focus:outline-none w-full md:w-full justify-start ${isActive ? 'ring-2 ring-blue-400 bg-blue-600 text-white' : ''}`}
                  style={{ minWidth: 0, fontSize: '1rem', maxWidth: 320 }}
                  animate={isActive ? { scale: 1.04 } : { scale: 1 }}
                  onClick={() => setActiveTab(page.key)}
                  whileHover={{ scale: 1.07 }}
                >
                  <Icon className={`h-5 w-5 md:h-6 md:w-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span className="truncate">{page.title}</span>
                </motion.button>
              );
            })}
          </div>
          {/* Responsive Image and Overlayed Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage?.key}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="relative flex-1 w-full aspect-video md:aspect-auto md:h-[75vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex items-end justify-center"
            >
              {activePage?.image && (
                <img src={activePage.image} alt={activePage.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              {/* Gradient overlay for readability */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start">
                <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white flex items-center gap-2">
                  {activePage && <activePage.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />} {activePage?.title}
                </h2>
                <p className="text-sm md:text-lg text-slate-100 max-w-full md:max-w-2xl drop-shadow-md">{activePage?.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Pages; 