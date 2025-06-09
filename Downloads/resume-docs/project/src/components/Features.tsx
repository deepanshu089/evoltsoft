import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, MessageCircle, Settings, Video, BarChart3, Mail, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: 'Bulk Resume Upload',
      description: 'Upload multiple PDF resumes at once with drag-and-drop functionality.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Resume Parsing',
      description: 'Extract structured data from resumes using advanced Hugging Face models.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Skill Analysis',
      description: 'Visualize candidate skills with interactive pie charts and detailed breakdowns.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: MessageCircle,
      title: 'Resume Chatbot',
      description: 'Interactive Q&A about candidate profiles powered by AI language models.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Settings,
      title: 'Interview Customization',
      description: 'Configure interview questions and parameters based on job roles.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Video,
      title: 'AI Interview System',
      description: 'Conduct voice-based interviews with real-time AI interaction via Vapi.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Interview Reports',
      description: 'Comprehensive post-interview reports with scores, recordings, and insights.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Automated email notifications and candidate communication workflows.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Feature Suite
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to streamline your recruitment process, from initial screening 
            to final candidate evaluation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Analysis Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Interactive Skill Analysis Preview
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Candidate Skills Breakdown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">JavaScript</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-slate-200 rounded-full mr-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-600">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">React</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-slate-200 rounded-full mr-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-600">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Node.js</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-slate-200 rounded-full mr-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '72%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-600">72%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-white" />
              </div>
              <p className="text-slate-600">Interactive charts powered by Recharts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;