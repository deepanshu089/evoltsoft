import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap } from 'lucide-react';

const Introduction: React.FC = () => {
  const techStack = [
    { name: 'Next.js', icon: Code, description: 'React framework for production' },
    { name: 'Supabase', icon: Database, description: 'Backend-as-a-Service platform' },
    { name: 'Hugging Face', icon: Brain, description: 'AI model inference' },
    { name: 'Vapi', icon: Zap, description: 'Voice AI integration' },
  ];

  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Revolutionizing Recruitment with AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform streamlines the entire recruitment process, from resume analysis 
            to AI-powered interviews, providing recruiters with intelligent insights and automated workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Do</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Smart Resume Processing</h4>
                  <p className="text-slate-600">Upload multiple resumes in PDF format and let our AI extract and analyze key information automatically.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">AI-Powered Interviews</h4>
                  <p className="text-slate-600">Conduct voice-based interviews with AI that adapts to job roles and provides detailed scoring.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Comprehensive Analytics</h4>
                  <p className="text-slate-600">Get detailed reports with candidate scores, interview recordings, and actionable insights.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm">{tech.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{tech.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;