import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Mic, BarChart, Zap } from 'lucide-react';

const AIModels: React.FC = () => {
  const models = [
    {
      name: 'Resume Parsing',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      provider: 'Hugging Face',
      model: 'microsoft/DialoGPT-medium',
      description: 'Extracts structured information from PDF resumes including skills, experience, and contact details.',
      capabilities: ['Text extraction', 'Skill identification', 'Experience parsing', 'Contact info extraction'],
    },
    {
      name: 'Interview Analysis',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      provider: 'Hugging Face',
      model: 'google/flan-t5-large',
      description: 'Analyzes interview responses and provides detailed scoring based on multiple criteria.',
      capabilities: ['Response evaluation', 'Skill assessment', 'Communication scoring', 'Technical evaluation'],
    },
    {
      name: 'QA Chatbot',
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      provider: 'Hugging Face',
      model: 'microsoft/DialoGPT-large',
      description: 'Interactive question-answering system for candidate profiles and resume data.',
      capabilities: ['Natural language queries', 'Context understanding', 'Multi-turn conversation', 'Data retrieval'],
    },
    {
      name: 'Voice AI Interview',
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      provider: 'Vapi',
      model: 'Custom Voice Agent',
      description: 'Real-time voice-based interview system with adaptive questioning and natural conversation flow.',
      capabilities: ['Speech-to-text', 'Natural conversation', 'Real-time responses', 'Adaptive questioning'],
    },
  ];

  return (
    <section id="ai-models" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            AI Models & Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Powered by state-of-the-art AI models from leading providers, delivering 
            accurate analysis and intelligent automation across the recruitment process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{model.name}</h3>
                    <p className="text-sm text-slate-600">{model.provider}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-white text-slate-700 rounded-full border border-slate-200">
                    {model.model}
                  </span>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">{model.description}</p>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Capabilities</h4>
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

        {/* Model Performance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Model Performance Metrics
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">94%</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Resume Parsing Accuracy</h4>
              <p className="text-slate-600 text-sm">High precision in extracting structured data from various resume formats</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Interview Response Time</h4>
              <p className="text-slate-600 text-sm">Real-time voice interactions with minimal latency</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">92%</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Scoring Consistency</h4>
              <p className="text-slate-600 text-sm">Consistent and reliable candidate evaluation across sessions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIModels;