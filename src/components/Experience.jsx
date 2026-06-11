import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Key, Lock, RefreshCw, Send, Layers } from 'lucide-react';

const Experience = ({ lang, t }) => {
  const exp = t.experience;

  return (
    <section id="experience" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-1/4 glow-bg opacity-15 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {exp.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {exp.subtitle}
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 space-y-8 shadow-md bg-gradient-to-b from-white dark:from-darkCard to-transparent relative overflow-hidden mb-12"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentTeal to-accentIndigo" />

            {/* Header: Intern, Company, and Meta details */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/5">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-accentTeal uppercase bg-accentTeal/10 px-2.5 py-1 rounded-md">
                  {lang === 'vi' ? 'Kinh Nghiệm Thực Tập' : 'Internship Experience'}
                </span>
                
                <div className="space-y-1 mt-1">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  <div className="font-display font-bold text-base sm:text-lg md:text-xl text-slate-500 dark:text-gray-400">
                    @ <span className="text-gradient">{exp.company}</span>
                  </div>
                </div>

                <div className="text-slate-500 dark:text-gray-400 text-sm font-semibold flex flex-wrap gap-x-6 gap-y-1.5 pt-1">
                  <span className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accentTeal shrink-0" />
                    <strong>{exp.projectLabel}</strong> {exp.project}
                  </span>
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accentIndigo shrink-0" />
                    <strong>{exp.moduleLabel}</strong> {exp.module}
                  </span>
                </div>
              </div>

              {/* Time & Place */}
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-1 font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3 rounded-2xl w-fit">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <Calendar className="w-4 h-4 text-accentTeal shrink-0" />
                  <strong>{exp.timeLabel}</strong> {exp.time}
                </span>
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <MapPin className="w-4 h-4 text-accentIndigo shrink-0" />
                  Ho Chi Minh City, VN
                </span>
              </div>
            </div>

            {/* General module description */}
            <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {exp.description}
            </p>

            {/* Technologies Badge Row */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold tracking-wider text-slate-500 dark:text-gray-500 uppercase block">
                {exp.techBadgesLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {['C#', 'ASP.NET Core Web API', 'MySQL', 'Redis', 'linq2db', 'MassTransit Kafka', 'SignalR'].map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Architecture Flow Stepper */}
          <div className="glass p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-4 mb-8 shadow-sm bg-gradient-to-b from-white dark:from-darkCard to-transparent">
            <h3 className="font-display font-bold text-[10px] tracking-widest text-slate-500 dark:text-gray-500 uppercase text-center">
              {exp.flowTitle}
            </h3>
            
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 pt-2">
              {exp.flowSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-accentTeal group-hover:border-accentTeal group-hover:bg-accentTeal/5 transition-all relative z-10 shadow-inner">
                    {idx + 1}
                  </div>
                  
                  {/* Step Label */}
                  <span className="text-[10px] font-semibold text-slate-600 dark:text-gray-300 mt-1.5 max-w-[85px] leading-tight select-none">
                    {step}
                  </span>
                  
                  {/* Connecting Line (hidden on last item) */}
                  {idx < 7 && (
                    <div className="hidden lg:block absolute top-4 left-[calc(50%+16px)] w-[calc(100%-32px)] h-[1px] bg-slate-200 dark:bg-white/10 z-0 group-hover:bg-accentTeal/30 transition-colors" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exp.cards.map((card, idx) => {
              const icons = [
                <Key className="w-5 h-5 text-accentTeal" />,
                <Lock className="w-5 h-5 text-accentIndigo" />,
                <RefreshCw className="w-5 h-5 text-cyan-400" />,
                <Send className="w-5 h-5 text-emerald-500" />
              ];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-accentTeal/30 dark:hover:border-accentTeal/20 hover:scale-[1.01] transition-all duration-300 flex flex-col gap-4 bg-gradient-to-b from-white dark:from-darkCard to-transparent group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                      {icons[idx]}
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-800 dark:text-white">
                      {card.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-550 dark:text-gray-400 leading-relaxed">
                    {card.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

