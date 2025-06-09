import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Palette, MessageSquare, Zap, Code2, Mail } from 'lucide-react';

const Customization: React.FC = () => {
  const customizations = [
    {
      icon: MessageSquare,
      title: 'Interview Questions',
      color: 'from-blue-500 to-cyan-500',
      description: 'Customize interview questions based on job roles and company requirements.',
      features: [
        'Role-specific question sets',
        'Difficulty level adjustment',
        'Time allocation per question',
        'Follow-up question logic'
      ],
      code: `{
  "questions": [
    {
      "id": "tech-1",
      "text": "Explain your experience with React",
      "category": "technical",
      "timeLimit": 300,
      "followUp": true
    }
  ]
}`
    },
    {
      icon: Mail,
      title: 'Email Templates',
      color: 'from-green-500 to-teal-500',
      description: 'Personalize email communications with candidates throughout the process.',
      features: [
        'Interview invitation templates',
        'Follow-up email automation',
        'Result notification formats',
        'Branded email designs'
      ],
      code: `{
  "template": "interview-invitation",
  "subject": "Interview Invitation - {{jobRole}}",
  "variables": {
    "candidateName": "{{name}}",
    "interviewDate": "{{date}}",
    "companyName": "{{company}}"
  }
}`
    },
    {
      icon: Zap,
      title: 'AI Model Configuration',
      color: 'from-purple-500 to-pink-500',
      description: 'Switch between different AI models and adjust parameters for optimal results.',
      features: [
        'Model selection interface',
        'Parameter fine-tuning',
        'Performance monitoring',
        'A/B testing capabilities'
      ],
      code: `{
  "resumeParser": {
    "model": "microsoft/DialoGPT-large",
    "confidence": 0.85,
    "timeout": 30000
  },
  "interviewer": {
    "voice": "natural-sounding",
    "speed": 1.0,
    "language": "en-US"
  }
}`
    },
    {
      icon: Palette,
      title: 'UI Customization',
      color: 'from-orange-500 to-red-500',
      description: 'Brand the platform with your company colors, logos, and styling preferences.',
      features: [
        'Color scheme customization',
        'Logo and branding upload',
        'Custom CSS support',
        'White-label options'
      ],
      code: `{
  "theme": {
    "primary": "#3B82F6",
    "secondary": "#10B981",
    "accent": "#F59E0B",
    "background": "#F8FAFC"
  },
  "branding": {
    "logo": "/uploads/company-logo.png",
    "favicon": "/uploads/favicon.ico"
  }
}`
    }
  ];

  return (
    <section id="customization" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Customization Options
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailor the platform to match your company's unique requirements and branding. 
            Flexible configuration options for every aspect of the recruitment process.
          </p>
        </motion.div>

        <div className="space-y-12">
          {customizations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center text-slate-600"
                          >
                            <Settings className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Code2 className="h-4 w-4 mr-2" />
                      Configuration Example
                    </h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <pre className="text-sm text-green-400 overflow-x-auto">
                        <code>{item.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced Customization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Advanced Configuration
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Custom Integrations</h4>
              <p className="text-slate-600 text-sm">Build custom integrations with your existing HR tools and workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Workflow Automation</h4>
              <p className="text-slate-600 text-sm">Create automated workflows for candidate progression and notifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Role-Based Access</h4>
              <p className="text-slate-600 text-sm">Configure user permissions and access levels for different team roles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customization;