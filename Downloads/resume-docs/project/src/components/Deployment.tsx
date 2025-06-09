import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Database, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const Deployment: React.FC = () => {
  const steps = [
    {
      icon: Globe,
      title: 'Frontend Deployment',
      description: 'Deploy the Next.js application to Vercel for optimal performance and global CDN distribution.',
      commands: ['npm run build', 'vercel --prod'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Database Setup',
      description: 'Initialize Supabase project and configure database schema with required tables and security policies.',
      commands: ['supabase init', 'supabase db push'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Settings,
      title: 'Environment Configuration',
      description: 'Set up environment variables for API keys, database connections, and third-party service integrations.',
      commands: ['SUPABASE_URL=...', 'HUGGINGFACE_API_KEY=...'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CheckCircle,
      title: 'Production Testing',
      description: 'Verify all features work correctly in production environment including AI models and voice integration.',
      commands: ['npm run test', 'npm run e2e'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const requirements = [
    'Node.js 18+ installed locally',
    'Vercel account for hosting',
    'Supabase project created',
    'Hugging Face API key',
    'Vapi account and API credentials',
    'Email service provider (optional)',
  ];

  return (
    <section id="deployment" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Deployment Guide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Step-by-step instructions to deploy your AI recruitment platform to production 
            with industry-best practices and optimal performance.
          </p>
        </motion.div>

        {/* Deployment Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-slate-500 mr-3">STEP {index + 1}</span>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {step.commands.map((command, cmdIndex) => (
                          <div key={cmdIndex} className="font-mono text-green-400 text-sm">
                            <span className="text-slate-500">$ </span>{command}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Requirements & Tips */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <Rocket className="h-5 w-5 mr-3 text-blue-600" />
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={requirement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-slate-600"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  {requirement}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Production Tips</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-sm">Enable caching for better performance and reduced API costs</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-sm">Set up monitoring and error tracking for production issues</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-sm">Configure rate limiting to prevent API abuse</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-sm">Regular backup strategies for candidate data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deployment;