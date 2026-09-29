import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3.5 flex items-center justify-between border border-[#C5B4A1] shadow-[0_8px_30px_-4px_rgba(58,31,29,0.12),0_4px_12px_-2px_rgba(58,31,29,0.06)]">
        
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left"
          aria-label="Riddhi Bandyopadhyay Home"
        >
          <div className="w-9 h-9 rounded-lg bg-accent-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-accent-700 transition-colors">
            RB
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-bold text-lg tracking-tight text-[#3A1F1D] flex items-center gap-2">
              Riddhi Bandyopadhyay
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-600"></span>
            </span>
            <span className="block text-[10px] font-mono text-[#7E664F] tracking-[0.22em] uppercase font-medium">
              Backend Full Stack
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#EFE7DC]/75 backdrop-blur-sm p-1 rounded-xl border border-[#D8CCC0] shadow-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-accent-700 font-semibold'
                    : 'text-[#3A1F1D] hover:text-accent-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#F7F2E9] rounded-lg border border-[#C5B4A1] shadow-xs z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (Resume + Mobile Menu Toggle) */}
        <div className="flex items-center gap-2.5">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent-600 hover:bg-accent-700 text-white text-xs font-mono tracking-wider font-medium shadow-xs transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#F7F2E9] text-[#5C3D38] border border-[#C5B4A1] shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-2 bg-[#F7F2E9] rounded-2xl p-4 shadow-[0_12px_32px_-4px_rgba(58,31,29,0.14)] border border-[#C5B4A1]"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#FBE8E8] text-accent-700 font-semibold'
                      : 'text-[#3A1F1D] hover:bg-[#EFE7DC]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-600"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-accent-600 text-white mt-2"
              >
                <FileText className="w-4 h-4" />
                <span>Preview & Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
