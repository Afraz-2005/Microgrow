import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { animate, stagger } from 'animejs';
import { 
  ArrowRight, 
  Heart,
  ChevronDown,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import l1 from '../assets/images/l1.jpg';
import l2 from '../assets/images/l2.jpg';
import l3 from '../assets/images/l3.jpg';
import l4 from '../assets/images/l4.jpg';
import l5 from '../assets/images/l5.jpg';
import l6 from '../assets/images/l6.jpg';

interface HeroProps {
  onOpenGetInvolved: () => void;
  onExploreInitiatives: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetInvolved,
  onExploreInitiatives
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const slides = [l1, l2, l3, l4, l5, l6];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Anime.js entrance effect on hero metrics on mount
  useEffect(() => {
    if (metricsRef.current) {
      animate(metricsRef.current.children, {
        translateY: [20, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 700,
        delay: stagger(100),
        ease: 'outBack(1.4)'
      });
    }
  }, []);

  // Framer Motion subtle parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const scrollToMission = () => {
    const el = document.getElementById('mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[88vh] flex flex-col justify-between pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-slate-900 text-slate-900 border-b border-slate-200/80"
    >
      {/* Dynamic Background Image Slideshow with Decreased White Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentSlide}
            src={slides[currentSlide]} 
            alt={`MicroGrow Social Foundation Slide ${currentSlide + 1}`} 
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.82, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Decreased White Overlay for vibrant image visibility with crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/20" />
      </div>

      {/* Hero Main Content with subtle Parallax Shift */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto space-y-8"
      >
        
        {/* Badge & Foundation Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-xs"
        >
          <Compass className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          <span>MICROGROW SOCIAL FOUNDATION • BANGLADESH</span>
        </motion.div>

        {/* Minimalist Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-extrabold text-slate-900 tracking-[-0.04em] leading-[1.03]"
          >
            Where Every System Works for <span className="text-blue-600 font-extrabold underline decoration-blue-300 underline-offset-8">Every Child</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl"
          >
            Integrating safe water, sanitation, nutrition, early childhood development, climate-smart agriculture, and green energy into community-owned social enterprises across rural Bangladesh.
          </motion.p>
        </div>

        {/* Minimalist Editorial Metrics Bar with anime.js pop */}
        <div 
          ref={metricsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-300/80 max-w-3xl"
        >
          <div className="space-y-1 p-2 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">35+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-600">COMMUNITIES REACHED</div>
          </div>
          <div className="space-y-1 p-2 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">120+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-600">WASH & NUTRITION UNITS</div>
          </div>
          <div className="space-y-1 p-2 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">250+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-600">LOCAL ENTERPRISES</div>
          </div>
          <div className="space-y-1 p-2 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">26+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-600">YEARS WASH EXPERTISE</div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <button
            onClick={onOpenGetInvolved}
            className="btn-blue-primary text-xs px-7 py-3.5 rounded-lg flex items-center gap-2.5 font-semibold tracking-wider uppercase font-sans cursor-pointer shadow-sm active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-white animate-pulse" />
              <span>Get Involved</span>
            </span>
          </button>

          <button
            onClick={onExploreInitiatives}
            className="btn-pop text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 cursor-pointer shadow-2xs bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore Social Pillars</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </span>
          </button>
        </motion.div>

      </motion.div>

      {/* Slideshow Controls & Dots Bar */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-3 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/90 shadow-md">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? 'w-6 bg-blue-600' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1 rounded-full text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* On-Scroll Indicator */}
      <div className="relative z-10 text-center pt-8">
        <button 
          onClick={scrollToMission}
          className="inline-flex items-center justify-center p-3 rounded-full bg-white/85 backdrop-blur-md hover:bg-white text-blue-600 border border-white shadow-xs transition-all group cursor-pointer focus:outline-none btn-pop"
          title="Scroll Down"
          aria-label="Scroll down to mission section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce text-blue-600" />
        </button>
      </div>

    </section>
  );
};
