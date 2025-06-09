import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Zap, Building, Database, Brain, Rocket, Code, Settings } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigationItems = [
  { id: 'hero', label: 'Overview', icon: FileText },
  { id: 'introduction', label: 'Introduction', icon: FileText },
  { id: 'features', label: 'Features', icon: Zap },
  { id: 'architecture', label: 'Architecture', icon: Building },
  { id: 'database', label: 'Database Schema', icon: Database },
  { id: 'ai-models', label: 'AI Models', icon: Brain },
  { id: 'deployment', label: 'Deployment', icon: Rocket },
  { id: 'api', label: 'API Reference', icon: Code },
  { id: 'customization', label: 'Customization', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, sidebarOpen, setSidebarOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-slate-200/50 lg:translate-x-0 lg:static lg:z-30`}
        style={{ marginTop: '64px' }}
      >
        <div className="p-6 h-full overflow-y-auto">
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="space-y-2 mt-8 lg:mt-0">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 mr-3 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;