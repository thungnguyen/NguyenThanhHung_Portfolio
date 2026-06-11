import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Network, Layout, Terminal } from 'lucide-react';

const Skills = ({ lang, t }) => {
  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: <Server className="w-6 h-6 text-accentTeal animate-pulse" />,
      skills: ['C#', 'ASP.NET Core Web API', 'RESTful API', 'SQL', 'Business Logic Implementation'],
      color: 'border-accentTeal/30 dark:border-accentTeal/20 shadow-accentTeal/5',
      isCore: true,
      badge: lang === 'vi' ? 'Trọng tâm' : 'Core Focus'
    },
    {
      title: t.skills.categories.db,
      icon: <Database className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      skills: ['MySQL', 'SQL Server', 'PostgreSQL', 'Redis', 'linq2db', 'Database Design'],
      color: 'border-emerald-500/30 dark:border-emerald-500/20 shadow-emerald-500/5',
      isCore: true,
      badge: lang === 'vi' ? 'Trọng tâm' : 'Core Focus'
    },
    {
      title: t.skills.categories.architecture,
      icon: <Network className="w-6 h-6 text-accentIndigo" />,
      skills: ['SignalR', 'WebSocket', 'Kafka', 'RabbitMQ'],
      color: 'border-accentIndigo/30 dark:border-accentIndigo/20 shadow-accentIndigo/5',
      isCore: true,
      badge: lang === 'vi' ? 'Trọng tâm' : 'Core Focus'
    },
    {
      title: t.skills.categories.frontend,
      icon: <Layout className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
      skills: ['JavaScript/TypeScript', 'ReactJS', 'Next.js', 'FastAPI', 'Node.js'],
      color: 'border-slate-200 dark:border-white/5 shadow-sm',
      isCore: false
    },
    {
      title: t.skills.categories.tools,
      icon: <Terminal className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      skills: ['Git', 'Docker', 'Swagger', 'Postman', 'Visual Studio', 'VS Code', 'AI-assisted coding tools'],
      color: 'border-slate-200 dark:border-white/5 shadow-sm',
      isCore: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-bg opacity-20 dark:opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Grid Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass p-6 sm:p-8 rounded-2xl border ${category.color} flex flex-col justify-between card-hover relative overflow-hidden ${
                category.isCore 
                  ? 'lg:col-span-1 ring-1 ring-slate-100/10 dark:ring-white/5' 
                  : 'lg:col-span-1'
              }`}
            >
              {/* Highlight background gradient for core skills */}
              {category.isCore && (
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-accentTeal/5 to-accentIndigo/5 rounded-full blur-xl pointer-events-none" />
              )}

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-inner">
                      {category.icon}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Core badge */}
                  {category.isCore && (
                    <span className="text-[9px] font-bold text-accentTeal bg-accentTeal/10 border border-accentTeal/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                        category.isCore
                          ? 'bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-accentTeal/30 hover:bg-accentTeal/5 text-slate-800 dark:text-gray-200 font-bold'
                          : 'bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-800 dark:text-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
