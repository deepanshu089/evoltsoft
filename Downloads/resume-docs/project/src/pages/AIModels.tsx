import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Mic, BarChart, Zap, TrendingUp } from 'lucide-react';

const AIModels: React.FC = () => {
  const models = [
    {
      name: 'Resume Parsing',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      provider: 'Hugging Face',
      model: 'microsoft/DialoGPT-medium',
      description: 'Extracts structured information from PDF resumes including skills, experience, and contact details with industry-leading accuracy.',
      capabilities: ['Text extraction', 'Skill identification', 'Experience parsing', 'Contact info extraction'],
      accuracy: '95%',
      speed: '2.3s',
    },
    {
      name: 'Interview Analysis',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      provider: 'Hugging Face',
      model: 'google/flan-t5-large',
      description: 'Analyzes interview responses and provides detailed scoring based on multiple criteria including technical skills and communication.',
      capabilities: ['Response evaluation', 'Skill assessment', 'Communication scoring', 'Technical evaluation'],
      accuracy: '92%',
      speed: '1.8s',
    },
    {
      name: 'QA Chatbot',
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      provider: 'Hugging Face',
      model: 'microsoft/DialoGPT-large',
      description: 'Interactive question-answering system for candidate profiles and resume data with natural language understanding.',
      capabilities: ['Natural language queries', 'Context understanding', 'Multi-turn conversation', 'Data retrieval'],
      accuracy: '89%',
      speed: '1.2s',
    },
    {
      name: 'Voice AI Interview',
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      provider: 'Vapi',
      model: 'Custom Voice Agent',
      description: 'Real-time voice-based interview system with adaptive questioning and natural conversation flow for immersive candidate experience.',
      capabilities: ['Speech-to-text', 'Natural conversation', 'Real-time responses', 'Adaptive questioning'],
      accuracy: '94%',
      speed: '0.8s',
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
              AI Models &
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Powered by state-of-the-art AI models from leading providers, delivering 
              accurate analysis and intelligent automation across the recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {models.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{model.name}</h3>
                      <p className="text-slate-600">{model.provider}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-flex px-3 py-1 text-sm font-medium bg-white text-slate-700 rounded-full border border-slate-200">
                      {model.model}
                    </span>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">{model.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-green-600">{model.accuracy}</div>
                      <div className="text-xs text-slate-600">Accuracy</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-blue-600">{model.speed}</div>
                      <div className="text-xs text-slate-600">Avg Response</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Capabilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capability}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + capIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <Zap className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{capability}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Model Comparison */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Our AI Stands Out
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comparing HireEZ's AI capabilities with traditional recruitment methods.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Traditional Methods</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Manual resume screening (hours per resume)
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Inconsistent evaluation criteria
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Limited scalability
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Human bias in decision making
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  No data-driven insights
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">HireEZ AI</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-600">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  Automated processing in seconds
                </li>
                <li className="flex items-center text-slate-600">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  Consistent, objective evaluation
                </li>
                <li className="flex items-center text-slate-600">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited scalability
                </li>
                <li className="flex items-center text-slate-600">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  Bias-free AI algorithms
                </li>
                <li className="flex items-center text-slate-600">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  Rich analytics and insights
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIModels;