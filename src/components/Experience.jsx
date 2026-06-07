import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const Experience = ({ lang, t }) => {
  return (
    <section id="experience" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-1/4 glow-bg opacity-15 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {t.experience.list.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative pl-8 md:pl-12 pb-4 border-l border-slate-200 dark:border-white/10"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-accentTeal to-accentIndigo flex items-center justify-center border-4 border-slate-50 dark:border-darkBg shadow-md shadow-accentTeal/10">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Main Card */}
              <div className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 space-y-6 card-hover shadow-sm">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-accentTeal uppercase">
                      {lang === 'vi' ? 'Kinh Nghiệm' : 'Experience'}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-white mt-1">
                      {exp.role} @ <span className="text-gradient">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-slate-550 dark:text-gray-400 sm:text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accentTeal shrink-0" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accentIndigo shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Project name */}
                <div className="pb-4 border-b border-slate-200 dark:border-white/5">
                  <h4 className="text-sm font-bold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                    <ChevronRight className="w-4 h-4 text-accentTeal" />
                    {t.experience.projectJoined} {exp.project}
                  </h4>
                </div>

                {/* Bullet details */}
                <div className="space-y-3.5">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accentTeal shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-slate-650 dark:text-gray-300 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-3">
                  <span className="text-xs font-bold tracking-wider text-slate-500 dark:text-gray-400 uppercase block">
                    {t.experience.techUsed}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-accentTeal/5 border border-accentTeal/15 text-accentTeal text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
