import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Network, Layout, Sparkles } from 'lucide-react';

const Skills = ({ lang, t }) => {
  const skillCategories = [
    {
      title: t.skills.categories.architecture,
      icon: <Network className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
      skills: ['Microservices', 'API Gateway', 'Docker', 'Docker Compose', 'SignalR', 'RabbitMQ', 'Kafka', 'WebSocket', 'Socket.io'],
      color: 'from-orange-500/10 to-transparent'
    },
    {
      title: t.skills.categories.backend,
      icon: <Server className="w-6 h-6 text-accentIndigo" />,
      skills: ['.NET Core Web API', 'Node.js', 'FastAPI', 'RESTful API'],
      color: 'from-accentIndigo/20 to-transparent'
    },
    {
      title: t.skills.categories.programming,
      icon: <Code2 className="w-6 h-6 text-accentTeal" />,
      skills: ['C#', 'Python', 'SQL', 'TypeScript', 'JavaScript'],
      color: 'from-accentTeal/20 to-transparent'
    },
    {
      title: t.skills.categories.db,
      icon: <Database className="w-6 h-6 text-emerald-555 text-emerald-500 dark:text-emerald-400" />,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Redis', 'Entity Framework Core'],
      color: 'from-emerald-500/10 to-transparent'
    },
    {
      title: t.skills.categories.aiTools,
      icon: <Sparkles className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      skills: ['Gemini API', 'Dify API', 'OCR', 'Tesseract', 'Git', 'Postman', 'Swagger', 'AI Coding Assistants'],
      color: 'from-purple-500/10 to-transparent'
    },
    {
      title: t.skills.categories.frontend,
      icon: <Layout className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
      skills: ['ReactJS', 'Next.js', 'Vite'],
      color: 'from-pink-500/10 to-transparent'
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
              className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col justify-between card-hover shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-850 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 hover:border-accentTeal/20 hover:bg-accentTeal/5 text-slate-700 dark:text-gray-300 text-xs font-semibold tracking-wide transition-all duration-200"
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
