import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import BrandLogo from './BrandLogo';


const Footer = ({ lang, t }) => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-darkBg border-t border-slate-200 dark:border-white/5 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left copyright and logo */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 group"
          >
            <BrandLogo className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display font-bold text-slate-800 dark:text-white tracking-wider text-sm">
              NGUYEN THANH HUNG
            </span>
          </a>
          <p className="text-slate-500 dark:text-gray-500 text-xs text-center md:text-left mt-1">
            © {new Date().getFullYear()} TH. All rights reserved.
          </p>
        </div>

        {/* Made with love */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-500">
          <span>{t.footer.madeWith}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>{t.footer.using}</span>
        </div>

        {/* Right Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thungnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ngthhung"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://zalo.me/0376640875"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-all flex items-center justify-center"
            aria-label="Zalo Connect"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              <path d="M9.5 9.5h5L10 14.5h5" strokeWidth="2.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
