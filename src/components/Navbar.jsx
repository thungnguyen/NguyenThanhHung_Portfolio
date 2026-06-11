import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = ({ lang, theme, toggleTheme, toggleLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: '#hero', id: 'hero' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.experience, href: '#experience', id: 'experience' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= absoluteTop && scrollPosition < absoluteTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Sticky Header Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav py-3.5 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center space-x-2 group"
          >
            <BrandLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-800 dark:text-white tracking-wider leading-none text-sm sm:text-base">
                Nguyen Thanh Hung
              </span>
              <span className="text-[9px] sm:text-[10px] text-accentTeal font-medium tracking-widest uppercase mt-0.5">
                Backend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links & Switches */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:text-accentTeal relative py-2 ${
                      activeSection === link.id 
                        ? 'text-accentTeal' 
                        : 'text-slate-600 dark:text-gray-400'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accentTeal to-accentIndigo rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-white/10">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide border border-slate-200 dark:border-white/10 hover:border-accentTeal text-slate-700 dark:text-gray-300 hover:text-accentTeal transition-all duration-200"
                title="Switch Language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'EN' : 'VI'}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:border-accentIndigo text-slate-700 dark:text-gray-300 hover:text-accentIndigo transition-all duration-200"
                title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* CV Download CTA */}
              <a
                href="/cv/NguyenThanhHung_BackendDeveloper_CV.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide border border-accentTeal/30 text-accentTeal bg-accentTeal/5 hover:bg-accentTeal hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                {t.nav.downloadCv} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Controls & Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Quick Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
              title="Switch Language"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-gray-300 hover:text-accentTeal transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop Overlay - Rendered OUTSIDE the nav bar to prevent Safari backdrop-filter bug */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 dark:bg-black/55 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer - Rendered OUTSIDE the nav bar to prevent Safari backdrop-filter bug */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-slate-900 z-[60] border-l border-slate-100 dark:border-white/5 p-8 shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-display font-bold text-gradient text-xl">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white border border-slate-200 dark:border-white/5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col space-y-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`block text-lg font-semibold transition-colors ${
                  activeSection === link.id 
                    ? 'text-accentTeal pl-2 border-l-2 border-accentTeal' 
                    : 'text-slate-600 dark:text-gray-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-gray-400">
            <span>Ngôn ngữ / Language:</span>
            <button
              onClick={toggleLanguage}
              className="font-bold text-accentTeal bg-accentTeal/5 border border-accentTeal/20 px-3 py-1 rounded-lg"
            >
              {lang === 'vi' ? 'Tiếng Anh (EN)' : 'Tiếng Việt (VI)'}
            </button>
          </div>
          
          <div className="flex flex-col gap-2">
            <a
              href="/cv/NguyenThanhHung_BackendDeveloper_CV.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-accentTeal to-accentIndigo text-white font-semibold text-xs shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/20 transition-all"
            >
              {t.nav.downloadCv} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
