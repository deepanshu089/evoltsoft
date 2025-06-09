import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Brain, Mic, Globe } from 'lucide-react';

const Architecture: React.FC = () => {
  const components = [
    { name: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500', description: 'Next.js + React' },
    { name: 'API Layer', icon: Server, color: 'from-green-500 to-teal-500', description: 'REST APIs' },
    { name: 'Database', icon: Database, color: 'from-purple-500 to-pink-500', description: 'Supabase' },
    { name: 'AI Models', icon: Brain, color: 'from-orange-500 to-red-500', description: 'Hugging Face' },
    { name: 'Voice AI', icon: Mic, color: 'from-indigo-500 to-purple-500', description: 'Vapi Integration' },
  ];

  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            System Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A modern, scalable architecture built with industry-leading technologies 
            and best practices for optimal performance and reliability.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex flex-wrap justify-center items-center gap-6">
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
                      <div className={`w-20 h-20 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg">{component.name}</h3>
                      <p className="text-slate-600 text-sm">{component.description}</p>
                    </motion.div>
                    
                    {index < components.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                      >
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Data Flow */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Data Flow</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Resume Upload</h4>
                  <p className="text-slate-600 text-sm">PDFs uploaded to secure storage and queued for processing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">AI Processing</h4>
                  <p className="text-slate-600 text-sm">Hugging Face models extract and analyze resume content</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Data Storage</h4>
                  <p className="text-slate-600 text-sm">Structured data stored in Supabase with full-text search</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Real-time processing pipeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Scalable microservices architecture</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Advanced caching and optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Comprehensive error handling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Security-first design principles</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;