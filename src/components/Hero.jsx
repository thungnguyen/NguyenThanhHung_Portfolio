import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Eye } from 'lucide-react';

const Hero = ({ lang, t }) => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300"
    >
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-bg opacity-70 dark:opacity-75" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-bg opacity-40 dark:opacity-50" style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.04) 50%, transparent 100%)' }} />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 text-left flex flex-col justify-center"
        >
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-800 dark:text-white mb-6 text-left flex flex-wrap items-center justify-start">
            <span className="font-semibold text-2xl sm:text-3xl md:text-4xl text-slate-500 dark:text-gray-400 mr-3 animate-pulse-slow">
              {t.hero.greeting}
            </span>
            <span className="text-gradient whitespace-nowrap">NGUYEN THANH HUNG</span>
          </h1>

          <h2 className="font-display font-semibold text-xl sm:text-2xl text-accentTeal mb-6 tracking-wide text-left">
            {t.hero.subtitle}
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-0 mb-8 leading-relaxed font-light text-left">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group flex items-center gap-2 px-6 py-3.5 justify-center rounded-xl bg-gradient-to-r from-accentTeal to-accentIndigo text-white font-semibold text-sm shadow-md hover:shadow-lg shadow-accentTeal/20 hover:shadow-accentTeal/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              {t.hero.ctaContact} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/thungnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 justify-center rounded-xl glass border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm whitespace-nowrap"
            >
              <Github className="w-4 h-4 text-accentTeal" /> {lang === 'vi' ? 'Xem GitHub' : 'View GitHub'}
            </a>

            <a
              href="/cv/NguyenThanhHung_BackendDeveloper_CV.pdf"
              download
              className="group flex items-center gap-2 px-5 py-3.5 justify-center rounded-xl border border-accentTeal/20 hover:border-accentTeal/50 text-accentTeal hover:text-white bg-accentTeal/5 hover:bg-accentTeal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-semibold text-sm cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> {t.nav.downloadCv}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-start gap-4">
            <span className="text-xs text-slate-500 dark:text-gray-500 font-semibold tracking-wider uppercase">{t.hero.connect}</span>
            <a
              href="https://github.com/thungnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass border border-slate-200 dark:border-white/5 hover:border-accentTeal/30 text-slate-600 hover:text-accentTeal dark:text-gray-400 dark:hover:text-accentTeal hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ngthhung"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass border border-slate-200 dark:border-white/5 hover:border-accentIndigo/30 text-slate-600 hover:text-accentIndigo dark:text-gray-400 dark:hover:text-accentIndigo hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://zalo.me/0376640875"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass border border-slate-200 dark:border-white/5 hover:border-blue-400/40 text-slate-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-450 dark:hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center"
              aria-label="Zalo Connect"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M9.5 9.5h5L10 14.5h5" strokeWidth="2.5" />
              </svg>
            </a>
          </div>

          {/* Tech Highlight Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-gray-500 font-bold uppercase tracking-wider mr-2">
              {lang === 'vi' ? 'Công nghệ chính:' : 'Core Tech Highlights:'}
            </span>
            {['C#', 'ASP.NET Core Web API', 'MySQL', 'Redis', 'Kafka', 'SignalR', 'FastAPI', 'Node.js'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:border-accentTeal/30 hover:bg-accentTeal/5 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profile Avatar / Art */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Glowing ring effects */}
          <div className="absolute inset-0 max-w-[280px] max-h-[280px] sm:max-w-[340px] sm:max-h-[340px] m-auto rounded-full bg-gradient-to-tr from-accentTeal to-accentIndigo opacity-20 dark:opacity-40 blur-3xl animate-pulse-slow pointer-events-none" />

          {/* Clean circular image container with soft hover effect */}
          <div className="relative group/avatar">
            <div className="p-1 rounded-full bg-slate-150/40 dark:bg-white/5 shadow-2xl">
              <div className="relative rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 border-4 border-white dark:border-[#090d16] shadow-inner">
                <img
                  src="/avatar.jpg"
                  alt="Nguyen Thanh Hung"
                  className="w-full h-full object-cover group-hover/avatar:scale-105 transition-transform duration-750 ease-out"
                />
              </div>
            </div>

            {/* Tech Float items */}
            <div className="absolute -top-2 -right-4 px-4 py-2.5 glass rounded-2xl border border-slate-200/30 dark:border-white/10 shadow-xl shadow-accentTeal/5 dark:shadow-black/40 animate-float flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accentTeal shadow-lg shadow-accentTeal/50 animate-pulse" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-0.5">Core</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-white">.NET</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-4 px-4 py-2.5 glass rounded-2xl border border-slate-200/30 dark:border-white/10 shadow-xl shadow-accentIndigo/5 dark:shadow-black/40 animate-float flex items-center gap-2" style={{ animationDelay: '2s' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-accentIndigo shadow-lg shadow-accentIndigo/50 animate-pulse" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-0.5">Concurrency</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-white">Redis</span>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 px-4 py-2.5 glass rounded-2xl border border-slate-200/30 dark:border-white/10 shadow-xl shadow-cyan-500/5 dark:shadow-black/40 animate-float flex items-center gap-2" style={{ animationDelay: '4s' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-0.5">Realtime</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-white">Kafka</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
