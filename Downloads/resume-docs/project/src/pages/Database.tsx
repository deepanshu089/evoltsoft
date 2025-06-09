import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, FileText, Video, BarChart, Key, Shield } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const tables = [
    {
      name: 'users',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'User accounts and authentication',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key', isPrimary: true },
        { name: 'email', type: 'text', description: 'User email address', isUnique: true },
        { name: 'full_name', type: 'text', description: 'Full name' },
        { name: 'role', type: 'text', description: 'User role (recruiter/admin)' },
        { name: 'created_at', type: 'timestamp', description: 'Account creation date' },
      ],
    },
    {
      name: 'resumes',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      description: 'Resume files and parsed data',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key', isPrimary: true },
        { name: 'user_id', type: 'uuid', description: 'Foreign key to users', isForeign: true },
        { name: 'filename', type: 'text', description: 'Original filename' },
        { name: 'parsed_data', type: 'jsonb', description: 'Extracted resume data' },
        { name: 'skills', type: 'text[]', description: 'Array of skills' },
        { name: 'experience_years', type: 'integer', description: 'Years of experience' },
        { name: 'uploaded_at', type: 'timestamp', description: 'Upload timestamp' },
      ],
    },
    {
      name: 'interview_sessions',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      description: 'Interview configuration and scheduling',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key', isPrimary: true },
        { name: 'resume_id', type: 'uuid', description: 'Foreign key to resumes', isForeign: true },
        { name: 'job_role', type: 'text', description: 'Target job position' },
        { name: 'questions', type: 'jsonb', description: 'Interview questions' },
        { name: 'status', type: 'text', description: 'Session status' },
        { name: 'scheduled_at', type: 'timestamp', description: 'Interview schedule' },
        { name: 'created_at', type: 'timestamp', description: 'Creation timestamp' },
      ],
    },
    {
      name: 'interview_results',
      icon: BarChart,
      color: 'from-orange-500 to-red-500',
      description: 'Interview outcomes and analysis',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key', isPrimary: true },
        { name: 'session_id', type: 'uuid', description: 'Foreign key to sessions', isForeign: true },
        { name: 'scores', type: 'jsonb', description: 'AI scoring results' },
        { name: 'transcript', type: 'text', description: 'Interview transcript' },
        { name: 'audio_url', type: 'text', description: 'Recording URL' },
        { name: 'feedback', type: 'text', description: 'AI feedback' },
        { name: 'completed_at', type: 'timestamp', description: 'Completion time' },
      ],
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
              Database
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Schema
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A well-structured PostgreSQL database powered by Supabase, designed for 
              scalability, security, and optimal query performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {tables.map((table, index) => {
              const Icon = table.icon;
              return (
                <motion.div
                  key={table.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${table.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{table.name}</h3>
                      <p className="text-slate-600">{table.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {table.fields.map((field, fieldIndex) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + fieldIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start justify-between p-4 bg-white rounded-lg border border-slate-200"
                      >
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="font-mono text-sm font-semibold text-slate-900 mr-3">
                              {field.name}
                            </span>
                            <span className="inline-flex px-2 py-1 text-xs font-medium bg-slate-200 text-slate-700 rounded">
                              {field.type}
                            </span>
                            {field.isPrimary && (
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded ml-2">
                                <Key className="h-3 w-3 mr-1" />
                                PK
                              </span>
                            )}
                            {field.isForeign && (
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded ml-2">
                                FK
                              </span>
                            )}
                            {field.isUnique && (
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded ml-2">
                                UNIQUE
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600">{field.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Relationships & Features */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-600" />
                Table Relationships
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">users → resumes (one-to-many)</span>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">resumes → interview_sessions (one-to-many)</span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">interview_sessions → interview_results (one-to-one)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-green-600" />
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">Row Level Security (RLS) enabled</span>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">Full-text search on resume data</span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">JSONB indexing for fast queries</span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">Automated backups & replication</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabasePage;