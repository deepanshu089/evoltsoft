import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, FileText, Video, BarChart } from 'lucide-react';

const DatabaseSchema: React.FC = () => {
  const tables = [
    {
      name: 'users',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key' },
        { name: 'email', type: 'text', description: 'User email address' },
        { name: 'full_name', type: 'text', description: 'Full name' },
        { name: 'role', type: 'text', description: 'User role (recruiter/admin)' },
        { name: 'created_at', type: 'timestamp', description: 'Account creation date' },
      ],
    },
    {
      name: 'resumes',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key' },
        { name: 'user_id', type: 'uuid', description: 'Foreign key to users' },
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
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key' },
        { name: 'resume_id', type: 'uuid', description: 'Foreign key to resumes' },
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
      fields: [
        { name: 'id', type: 'uuid', description: 'Primary key' },
        { name: 'session_id', type: 'uuid', description: 'Foreign key to sessions' },
        { name: 'scores', type: 'jsonb', description: 'AI scoring results' },
        { name: 'transcript', type: 'text', description: 'Interview transcript' },
        { name: 'audio_url', type: 'text', description: 'Recording URL' },
        { name: 'feedback', type: 'text', description: 'AI feedback' },
        { name: 'completed_at', type: 'timestamp', description: 'Completion time' },
      ],
    },
  ];

  return (
    <section id="database" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Database Schema
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A well-structured PostgreSQL database powered by Supabase, designed for 
            scalability and optimal query performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tables.map((table, index) => {
            const Icon = table.icon;
            return (
              <motion.div
                key={table.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${table.color} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{table.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {table.fields.map((field, fieldIndex) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + fieldIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="font-mono text-sm font-semibold text-slate-900 mr-2">
                            {field.name}
                          </span>
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-slate-200 text-slate-700 rounded">
                            {field.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{field.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Relationships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Database className="h-6 w-6 mr-3 text-blue-600" />
            Table Relationships
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Primary Relationships</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  users → resumes (one-to-many)
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  resumes → interview_sessions (one-to-many)
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  interview_sessions → interview_results (one-to-one)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Row Level Security (RLS) enabled
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Full-text search on resume data
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  JSONB indexing for fast queries
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DatabaseSchema;