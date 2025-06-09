import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Mail, ExternalLink, Heart, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Documentation',
      links: [
        { label: 'Getting Started', path: '/' },
        { label: 'Features', path: '/features' },
        { label: 'API Reference', path: '/api' },
        { label: 'Deployment', path: '/deployment' },
      ]
    },
    {
      title: 'Platform',
      links: [
        { label: 'Architecture', path: '/architecture' },
        { label: 'Database', path: '/database' },
        { label: 'AI Models', path: '/ai-models' },
        { label: 'Customization', path: '/customization' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'GitHub Repository', href: '#' },
        { label: 'Live Demo', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Support', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HireEZ</span>
            </Link>
            <p className="text-slate-200 mb-6 leading-relaxed">
              Put your interviews on autopilot and 3X your hiring team's capacity. AI voice assessments help startups vibe-check candidates faster, cutting through the recruitment noise to find your next superstar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-white rounded-xl hover:bg-blue-100 transition-colors shadow border border-blue-200"
              >
                <Github className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="mailto:contact@hireez.com"
                className="p-3 bg-white rounded-xl hover:bg-blue-100 transition-colors shadow border border-blue-200"
              >
                <Mail className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-xl hover:bg-blue-100 transition-colors shadow border border-blue-200"
              >
                <ExternalLink className="h-5 w-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Documentation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-200 hover:text-blue-700 transition-colors">Getting Started</Link></li>
              <li><Link to="/features" className="text-slate-200 hover:text-blue-700 transition-colors">Features</Link></li>
              <li><Link to="/api" className="text-slate-200 hover:text-blue-700 transition-colors">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/architecture" className="text-slate-200 hover:text-blue-700 transition-colors">Architecture</Link></li>
              <li><Link to="/database" className="text-slate-200 hover:text-blue-700 transition-colors">Database</Link></li>
              <li><Link to="/ai-models" className="text-slate-200 hover:text-blue-700 transition-colors">AI Models</Link></li>
              <li><Link to="/customization" className="text-slate-200 hover:text-blue-700 transition-colors">Customization</Link></li>
              <li><Link to="/pages" className="text-slate-200 hover:text-blue-700 transition-colors">Pages</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-200 hover:text-blue-700 transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="text-slate-200 hover:text-blue-700 transition-colors">Live Demo</a></li>
              <li><a href="#" className="text-slate-200 hover:text-blue-700 transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-200 hover:text-blue-700 transition-colors">Support</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 HireEZ. Built with modern technologies for the future of hiring.
          </p>
          <div className="flex items-center text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2" />
            <span>for better recruitment</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;