import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Menu, 
  X, 
  ArrowUpRight, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { ORGANISATION_INFO } from '../data/organizationData';
import { motion, AnimatePresence } from 'motion/react';
import mcgLogo from '../assets/images/MCG.jpg';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenGetInvolved: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenGetInvolved
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'mission', label: 'Mission & Models' },
    { id: 'initiatives', label: 'Pillars' },
    { id: 'impact', label: 'Impact' },
    { id: 'linkedin-feed', label: 'Dispatches' },
    { id: 'team', label: 'Leadership' }
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner announcing official LinkedIn source */}
      <div className="bg-slate-100 text-slate-700 text-[11px] font-mono tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-2 border-b border-slate-200/80">
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-blue-200/80">
          <Linkedin className="w-3 h-3 text-blue-600" /> LINKEDIN VERIFIED
        </span>
        <span className="hidden sm:inline text-slate-600 font-medium">MicroGrow Social Foundation • Where Every System Works for Every Child</span>
        <a 
          href={ORGANISATION_INFO.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold transition-colors ml-1"
        >
          LinkedIn Profile <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-2xs' 
          : 'bg-white py-4 border-b border-slate-200/60'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <img 
              src={mcgLogo} 
              alt="MICROGROW" 
              className="h-10 w-auto object-contain max-w-[160px] rounded" 
            />
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200/80">
              FOUNDATION BD
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest font-bold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-all duration-150 py-1 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={ORGANISATION_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
              title="Official LinkedIn Page"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenGetInvolved}
              className="btn-blue-primary px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-white" />
                <span>Get Involved</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 fixed top-[88px] left-0 right-0 z-30 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-3 font-mono">
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 px-2 mb-1">
                Navigation Menu
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs uppercase font-bold flex items-center justify-between transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2 font-sans">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetInvolved();
                  }}
                  className="w-full btn-blue-primary py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-white" /> Get Involved / Partner
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

