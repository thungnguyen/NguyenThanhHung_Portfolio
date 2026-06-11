import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Mail, Phone, User, Eye, FileText, Globe, Server, Database } from 'lucide-react';

const About = ({ lang, t }) => {
  const [cvViewerLang, setCvViewerLang] = useState('en'); // Default to English first as requested

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Subtle details */}
      <div className="absolute right-0 top-1/3 glow-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {t.about.subtitle}
          </p>
        </div>

        {/* Grid Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12"
        >
          {/* Bio & Intro Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 space-y-6 shadow-sm">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-800 dark:text-white flex items-center gap-2.5">
                <User className="w-5.5 h-5.5 text-accentTeal" />
                {t.about.generalInfo}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {t.about.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-accentTeal shrink-0" />
                  <span>{t.about.addressVal}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 text-accentTeal shrink-0" />
                  <a href="mailto:thanhhungnguyen8204@gmail.com" className="hover:text-accentTeal transition-colors">
                    thanhhungnguyen8204@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 text-accentTeal shrink-0" />
                  <a href="tel:0376640875" className="hover:text-accentTeal transition-colors">
                    0376640875
                  </a>
                </div>
              </div>

              {/* Objective Block */}
              <div className="p-4 rounded-xl bg-accentTeal/5 border border-accentTeal/10 text-slate-700 dark:text-gray-300">
                <span className="font-bold text-accentTeal block mb-1 text-sm">{t.about.objectiveTitle}</span>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {t.about.objective}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Certificates */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Education Box */}
            <div className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 space-y-6 shadow-sm">
              <h3 className="font-display font-semibold text-xl text-slate-800 dark:text-white flex items-center gap-2.5">
                <GraduationCap className="w-5.5 h-5.5 text-accentIndigo" />
                {t.about.educationTitle}
              </h3>

              <div className="relative pl-6 border-l border-slate-200 dark:border-white/10 space-y-4">
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-accentIndigo border-4 border-slate-50 dark:border-darkBg" />
                  <div className="flex justify-between items-start flex-wrap gap-1">
                    <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">{t.about.school}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accentIndigo/10 text-accentIndigo">
                      {t.about.eduPeriod}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm mt-1">{t.about.major}</p>
                </div>
              </div>
            </div>

            {/* Cert & Awards Box */}
            <div className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 space-y-6 shadow-sm">
              <h3 className="font-display font-semibold text-xl text-slate-800 dark:text-white flex items-center gap-2.5">
                <Award className="w-5.5 h-5.5 text-accentTeal" />
                {t.about.awardsTitle}
              </h3>

              <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-accentTeal/10 rounded-lg shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-accentTeal" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block">{t.about.scholarship}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">{t.about.scholarshipDesc}</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlight Section Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-2">
            {t.about.strengthsTitle}
          </h3>
          <div className="h-0.5 w-16 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
        </div>

        {/* Highlight Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col gap-3 card-hover shadow-sm bg-gradient-to-b from-white dark:from-darkCard to-transparent">
            <div className="w-10 h-10 rounded-xl bg-accentTeal/10 text-accentTeal flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-800 dark:text-white mt-1">
              {t.about.cards.apiTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
              {t.about.cards.apiDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col gap-3 card-hover shadow-sm bg-gradient-to-b from-white dark:from-darkCard to-transparent">
            <div className="w-10 h-10 rounded-xl bg-accentIndigo/10 text-accentIndigo flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-800 dark:text-white mt-1">
              {t.about.cards.dbTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
              {t.about.cards.dbDesc}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col gap-3 card-hover shadow-sm bg-gradient-to-b from-white dark:from-darkCard to-transparent">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-800 dark:text-white mt-1">
              {t.about.cards.realtimeTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
              {t.about.cards.realtimeDesc}
            </p>
          </motion.div>
        </motion.div>

        {/* CV Section CTA Card */}
        <motion.div
          id="cv-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm bg-gradient-to-b from-white dark:from-darkCard to-transparent"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Title & Description */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-white flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-accentTeal" />
                {t.about.cv.title}
              </h3>
              <p className="text-sm text-slate-650 dark:text-gray-300 leading-relaxed">
                {t.about.cv.description}
              </p>
            </div>

            {/* View / Download Actions */}
            <div className="lg:col-span-6 flex justify-center">
              {/* CV Card */}
              <div className="p-5 rounded-xl bg-slate-100/50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex flex-col justify-between gap-4 shadow-inner w-full max-w-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accentTeal" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider block">
                    {lang === 'vi' ? 'Sơ yếu lý lịch (CV)' : 'Curriculum Vitae (CV)'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  {lang === 'vi' 
                    ? 'Tải xuống hoặc xem trực tiếp CV chi tiết (Bản tiếng Anh)' 
                    : 'Download or view my detailed CV (English version)'}
                </p>
                <div className="flex gap-2">
                  <a
                    href="/cv/NguyenThanhHung_BackendDeveloper_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-accentTeal hover:bg-accentTeal/90 text-white font-semibold text-xs shadow hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Xem CV' : 'View CV'}</span>
                  </a>
                  <a
                    href="/cv/NguyenThanhHung_BackendDeveloper_CV.pdf"
                    download
                    className="flex items-center justify-center px-3 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all cursor-pointer"
                    title={lang === 'vi' ? 'Tải CV' : 'Download CV'}
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Embedded Interactive PDF CV Viewer */}
        <motion.div
          id="cv-viewer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm mt-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-800 dark:text-white flex items-center gap-2.5">
                <Eye className="w-5.5 h-5.5 text-accentTeal" />
                {t.about.cvViewerTitle}
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm mt-1">
                {t.about.cvViewerSubtitle}
              </p>
            </div>

            {/* Language Switch Tabs for CV */}
            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl w-fit">
              <button
                onClick={() => setCvViewerLang('vi')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  cvViewerLang === 'vi'
                    ? 'bg-white dark:bg-white/10 text-accentTeal shadow-sm'
                    : 'text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {t.about.cvLangVi}
              </button>
              <button
                onClick={() => setCvViewerLang('en')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  cvViewerLang === 'en'
                    ? 'bg-white dark:bg-white/10 text-accentTeal shadow-sm'
                    : 'text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {t.about.cvLangEn}
              </button>
            </div>
          </div>

          {/* Iframe to render the PDF CV - Hidden on mobile, shown on medium/large screens */}
          <div className="hidden md:flex relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/40 items-center justify-center min-h-[500px]">
            {/* Spinning Loader in the background */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/40">
              <span className="w-10 h-10 rounded-full border-4 border-accentTeal border-t-transparent animate-spin" />
              <span className="text-xs text-slate-500 dark:text-gray-400 mt-3 font-semibold uppercase tracking-wider">
                Loading CV PDF...
              </span>
            </div>
            <iframe
              src={
                cvViewerLang === 'vi'
                  ? '/cv/NguyenThanhHung_BackendDeveloper_CV_VI.pdf#toolbar=0'
                  : '/cv/NguyenThanhHung_BackendDeveloper_CV.pdf#toolbar=0'
              }
              className="w-full h-[500px] sm:h-[700px] lg:h-[850px] bg-white rounded-xl relative z-10"
              title="Nguyen Thanh Hung PDF CV"
            />
            {/* Direct download helper in bottom right */}
            <div className="absolute bottom-4 right-4 z-20">
              <a
                href={cvViewerLang === 'vi' ? '/cv/NguyenThanhHung_BackendDeveloper_CV_VI.pdf' : '/cv/NguyenThanhHung_BackendDeveloper_CV.pdf'}
                download
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/90 text-white font-semibold text-xs hover:bg-slate-800 shadow-lg backdrop-blur transition-all"
              >
                <FileText className="w-3.5 h-3.5" /> {t.nav.downloadCv}
              </a>
            </div>
          </div>

          {/* Mobile PDF Action Card - Shown only on small mobile screens */}
          <div className="md:hidden glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-accentTeal/10 text-accentTeal flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">
                {lang === 'vi' ? 'Xem tài liệu CV của tôi' : 'Read my CV Document'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1.5 leading-relaxed px-2">
                {lang === 'vi' 
                  ? 'Để có trải nghiệm đọc tốt nhất trên điện thoại, bạn có thể mở xem trực tiếp file PDF trong tab mới hoặc tải về máy.' 
                  : 'For the best reading experience on phone, you can view the PDF file directly in a new tab or download it.'}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={cvViewerLang === 'vi' ? '/cv/NguyenThanhHung_BackendDeveloper_CV_VI.pdf' : '/cv/NguyenThanhHung_BackendDeveloper_CV.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-accentTeal to-accentIndigo text-white font-semibold text-xs shadow-md shadow-accentTeal/10"
              >
                <Eye className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Mở xem trực tiếp PDF' : 'Open PDF Viewer'}</span>
              </a>
              <a
                href={cvViewerLang === 'vi' ? '/cv/NguyenThanhHung_BackendDeveloper_CV_VI.pdf' : '/cv/NguyenThanhHung_BackendDeveloper_CV.pdf'}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-gray-300 font-semibold text-xs transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Tải CV về máy' : 'Download CV'}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
