import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Palette, MessageSquare, Zap, Code2, Mail, Users, Sliders } from 'lucide-react';

const Customization: React.FC = () => {
  const customizations = [
    {
      icon: MessageSquare,
      title: 'Interview Questions',
      color: 'from-blue-500 to-cyan-500',
      description: 'Customize interview questions based on job roles and company requirements with intelligent question banks.',
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
      description: 'Personalize email communications with candidates throughout the recruitment process with branded templates.',
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
      description: 'Switch between different AI models and adjust parameters for optimal results based on your specific needs.',
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
      description: 'Brand the platform with your company colors, logos, and styling preferences for a seamless experience.',
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

  const advancedFeatures = [
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Configure user permissions and access levels for different team roles and departments.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sliders,
      title: 'Workflow Automation',
      description: 'Create automated workflows for candidate progression, notifications, and decision routing.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Code2,
      title: 'Custom Integrations',
      description: 'Build custom integrations with your existing HR tools, ATS systems, and workflows.',
      color: 'from-purple-500 to-pink-500'
    }
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
              Customization
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Options
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Tailor HireEZ to match your company's unique requirements and branding. 
              Flexible configuration options for every aspect of the recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Customizations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {customizations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg">{item.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-lg">Key Features</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center text-slate-600"
                            >
                              <Settings className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center text-lg">
                        <Code2 className="h-5 w-5 mr-2" />
                        Configuration Example
                      </h4>
                      <div className="bg-slate-900 rounded-xl p-6">
                        <div className="flex items-center mb-3">
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
        </div>
      </section>

      
    </div>
  );
};

export default Customization;