import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, Zap, Shield, BarChart3, Brain, Upload, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: 'Smart Resume Processing',
      description: 'AI-powered parsing and analysis of candidate resumes with 95% accuracy.',
    },
    {
      icon: Brain,
      title: 'Intelligent Interviews',
      description: 'Voice-based AI interviews that adapt to job roles and candidate responses.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive scoring and insights to make data-driven hiring decisions.',
    },
    {
      icon: MessageCircle,
      title: 'Interactive Q&A',
      description: 'Natural language queries about candidate profiles and qualifications.',
    },
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', description: 'Resume parsing precision' },
    { number: '10x', label: 'Faster Screening', description: 'Compared to manual review' },
    { number: '500+', label: 'Companies Trust Us', description: 'Growing user base' },
    { number: '24/7', label: 'AI Availability', description: 'Round-the-clock processing' },
  ];

  return (
    <div className="pt-20 min-h-screen relative overflow-x-hidden">
      {/* Unified Background Gradient and Image */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a174e] via-[#19376d] to-[#2563eb]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="h-5 w-5 text-cyan-400 mr-3" />
              <span className="text-white  font-medium">Revolutionizing Recruitment with AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            AI-Powered Recruitment, Reimagined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
          >
            Discover the future of hiring: automate resume screening, conduct intelligent AI interviews, and make data-driven decisions—all in one powerful platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/features"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
            >
              Explore Features
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            
            <button className="flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200">
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-10xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl transform scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-8 aspect-[4/3] md:aspect-auto md:h-[36rem] flex items-center justify-center relative">
                  {/* Dashboard Preview Background Image */}
                  <img 
                    src="https://res.cloudinary.com/drq4tdbj9/image/upload/v1749489395/dashboard_hirez_vd50kh.jpg" 
                    alt="Dashboard Preview" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 pointer-events-none select-none" 
                  />
                  <div className="text-center relative z-10 pt-16">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-slate-300 text-2xl font-bold mb-2">Interactive Dashboard</h3>
                    <p className="text-slate-300 text-md ">Experience the future of recruitment technology</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Why Choose HireEZ?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              Streamline your hiring process with cutting-edge AI technology and intelligent automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 border border-blue-700 backdrop-blur-md rounded-2xl p-8 text-center shadow-none"
                >
                  <div className="flex items-center justify-center mb-6">
                    <Icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">{feature.title}</h3>
                  <p className="text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* Removed 'Trusted by Industry Leaders' section for beta release */}

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              Start your journey with HireEZ today and experience the future of recruitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/features"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/api"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;