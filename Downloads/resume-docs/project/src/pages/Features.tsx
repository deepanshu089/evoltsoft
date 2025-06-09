import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, MessageCircle, Settings, Video, BarChart3, Mail, Users, Brain, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: 'Bulk Resume Upload',
      description: 'Upload multiple PDF resumes at once with drag-and-drop functionality and real-time processing status.',
      color: 'from-blue-500 to-cyan-500',
      details: ['Drag & drop interface', 'Batch processing', 'Real-time status updates', 'Format validation']
    },
    {
      icon: Brain,
      title: 'AI Resume Parsing',
      description: 'Extract structured data from resumes using advanced Hugging Face models with 95% accuracy.',
      color: 'from-purple-500 to-pink-500',
      details: ['95% accuracy rate', 'Multi-format support', 'Skill extraction', 'Experience analysis']
    },
    {
      icon: BarChart3,
      title: 'Skill Analysis',
      description: 'Visualize candidate skills with interactive charts and detailed competency breakdowns.',
      color: 'from-green-500 to-teal-500',
      details: ['Interactive charts', 'Skill matching', 'Competency scoring', 'Visual analytics']
    },
    {
      icon: MessageCircle,
      title: 'Resume Chatbot',
      description: 'Interactive Q&A about candidate profiles powered by advanced AI language models.',
      color: 'from-orange-500 to-red-500',
      details: ['Natural language queries', 'Instant responses', 'Context awareness', 'Multi-turn conversations']
    },
    {
      icon: Settings,
      title: 'Interview Customization',
      description: 'Configure interview questions and parameters based on specific job roles and requirements.',
      color: 'from-indigo-500 to-purple-500',
      details: ['Role-based questions', 'Custom parameters', 'Time management', 'Difficulty scaling']
    },
    {
      icon: Video,
      title: 'AI Interview System',
      description: 'Conduct voice-based interviews with real-time AI interaction and adaptive questioning.',
      color: 'from-cyan-500 to-blue-500',
      details: ['Voice interaction', 'Real-time responses', 'Adaptive questions', 'Natural conversation']
    },
    {
      icon: Users,
      title: 'Interview Reports',
      description: 'Comprehensive post-interview reports with detailed scores, recordings, and insights.',
      color: 'from-pink-500 to-rose-500',
      details: ['Detailed scoring', 'Audio recordings', 'Performance insights', 'Recommendation engine']
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Automated email notifications and candidate communication workflows throughout the process.',
      color: 'from-teal-500 to-green-500',
      details: ['Automated notifications', 'Custom templates', 'Workflow integration', 'Tracking & analytics']
    },
  ];

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
              Powerful Features for
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Modern Recruitment
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover how HireEZ's comprehensive feature suite transforms every aspect 
              of your hiring process with intelligent automation and AI-powered insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                        <Zap className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
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
              See Features in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the power of AI-driven recruitment with our interactive demonstrations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Skill Analysis Demo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">JavaScript</span>
                  <div className="flex items-center">
                    <div className="w-32 h-3 bg-slate-200 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">React</span>
                  <div className="flex items-center">
                    <div className="w-32 h-3 bg-slate-200 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">Node.js</span>
                  <div className="flex items-center">
                    <div className="w-32 h-3 bg-slate-200 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '72%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">72%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">AI Interview Preview</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-2">AI Interviewer:</p>
                  <p className="font-medium">"Tell me about your experience with React development."</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-2">Candidate Response:</p>
                  <p className="font-medium">"I've been working with React for 3 years..."</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-2">AI Analysis:</p>
                  <p className="font-medium">✓ Technical depth: Strong</p>
                  <p className="font-medium">✓ Communication: Clear</p>
                  <p className="font-medium">✓ Confidence: High</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;