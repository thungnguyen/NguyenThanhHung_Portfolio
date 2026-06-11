import React from 'react';
import { motion } from 'framer-motion';
import { Github, CheckSquare } from 'lucide-react';

const Projects = ({ lang, t }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background glow top right */}
      <div className="absolute right-0 top-0 glow-bg opacity-15 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {t.projects.list.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass rounded-2xl border border-slate-200 dark:border-white/5 bg-gradient-to-b from-white dark:from-darkCard to-transparent p-6 sm:p-8 flex flex-col justify-between card-hover relative overflow-hidden group shadow-sm"
            >
              {/* Decorative top border line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accentTeal to-accentIndigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6">
                {/* Card Title Header */}
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div className="space-y-2">
                    {/* Card Highlight Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-accentTeal/10 dark:bg-accentTeal/20 text-accentTeal dark:text-cyan-300 uppercase tracking-wider whitespace-nowrap"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-white group-hover:text-accentTeal transition-colors duration-300 mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500 dark:text-gray-500 font-display shrink-0 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg">
                    {project.team}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Contributions */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider block">
                    {t.projects.featuresTitle}
                  </span>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                        <CheckSquare className="w-4 h-4 text-accentTeal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tag list & Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accentTeal hover:text-accentIndigo dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" /> {t.projects.repoLink}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
