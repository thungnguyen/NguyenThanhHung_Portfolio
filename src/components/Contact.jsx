import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare } from 'lucide-react';

const Contact = ({ lang, t }) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 glow-bg opacity-15 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentTeal to-accentIndigo mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-gray-405 dark:text-gray-400 mt-4 text-sm sm:text-base font-medium">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto"
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 lg:p-5 xl:p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col justify-between items-center text-center card-hover shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-xl bg-accentTeal/10 text-accentTeal shadow-inner">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest block">
                  {t.contact.emailLabel}
                </span>
                <a
                  href="mailto:thanhhungnguyen8204@gmail.com"
                  className="text-sm sm:text-base lg:text-[13px] xl:text-base font-bold text-slate-800 dark:text-gray-200 hover:text-accentTeal transition-colors block mt-2 break-words"
                >
                  thanhhungnguyen8204@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('thanhhungnguyen8204@gmail.com', 'email')}
              className="mt-6 flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 transition-all border border-slate-200 dark:border-white/5"
            >
              {copiedText === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>{lang === 'vi' ? 'Đã sao chép!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Sao chép email' : 'Copy Email'}</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Phone & Zalo Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 lg:p-5 xl:p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col justify-between items-center text-center card-hover shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-xl bg-accentIndigo/10 text-accentIndigo shadow-inner">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest block">
                  {t.contact.phoneLabel} & ZALO
                </span>
                <a
                  href="tel:0376640875"
                  className="text-base font-bold text-slate-800 dark:text-gray-200 hover:text-accentIndigo transition-colors block mt-2"
                >
                  0376640875
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full mt-6">
              <a
                href="https://zalo.me/0376640875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-sm shadow-blue-500/10 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Nhắn tin Zalo' : 'Text on Zalo'}</span>
              </a>

              <button
                onClick={() => copyToClipboard('0376640875', 'phone')}
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 transition-all border border-slate-200 dark:border-white/5"
              >
                {copiedText === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span>{lang === 'vi' ? 'Đã sao chép!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Sao chép SĐT' : 'Copy Phone'}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 lg:p-5 xl:p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col justify-between items-center text-center card-hover shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-xl bg-accentTeal/10 text-accentTeal shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest block">
                  {t.contact.addressLabel}
                </span>
                <span className="text-sm sm:text-base lg:text-[13px] xl:text-base font-semibold text-slate-800 dark:text-gray-200 block mt-2 leading-relaxed">
                  {t.contact.addressVal}
                </span>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-450 dark:text-gray-500 font-medium">
              {lang === 'vi' ? 'Hoạt động tại TP. Hồ Chí Minh' : 'Based in Ho Chi Minh City'}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
