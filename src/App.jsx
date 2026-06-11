import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';
import BrandLogo from './components/BrandLogo';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // default is light ("yêu cầu màu sắc sáng")
  const [lang, setLang] = useState('en'); // default is en

  useEffect(() => {
    // Sync theme class to html/body elements
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Simulate initial portfolio page load/rendering
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = translations[lang];

  return (
    <>
      {/* Premium Screen Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-[#0f172a] z-[9999] flex flex-col items-center justify-center"
          >
            {/* Glowing Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <BrandLogo className="w-16 h-16 sm:w-20 sm:h-20" />
              {/* Outer pulsing ring */}
              <span className="absolute inset-0 rounded-2xl bg-accentTeal/20 animate-ping pointer-events-none" />
            </motion.div>

            {/* Glowing Loader progress line */}
            <div className="w-40 h-[2px] bg-white/5 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-accentTeal to-accentIndigo"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-xs font-semibold tracking-widest uppercase mt-4"
            >
              Loading Portfolio...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-darkBg text-slate-800 dark:text-gray-200 transition-colors duration-300 selection:bg-accentTeal/30 selection:text-accentTeal scroll-smooth">
          <Navbar 
            lang={lang} 
            theme={theme} 
            toggleTheme={toggleTheme} 
            toggleLanguage={toggleLanguage} 
            t={t}
          />
          <main className="flex-grow">
            <Hero lang={lang} t={t} />
            <About lang={lang} t={t} />
            <Skills lang={lang} t={t} />
            <Experience lang={lang} t={t} />
            <Projects lang={lang} t={t} />
            <Contact lang={lang} t={t} />
          </main>
          <Footer lang={lang} t={t} />
        </div>
      )}
    </>
  );
}

export default App;
