import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { animate, stagger } from 'animejs';
import { 
  ArrowRight, 
  Heart,
  ChevronDown,
  Compass
} from 'lucide-react';
import ruralHeroImg from '../assets/images/rural_bangladesh_hero_1785418753528.jpg';

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

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
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
      className="relative min-h-[85vh] flex flex-col justify-between pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-slate-50/90 text-slate-900 border-b border-slate-200/80"
    >
      {/* Subtle Parallax Background Image of Rural Bangladesh with Light Luminous Overlay */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none opacity-40 mix-blend-multiply"
      >
        <img 
          src={ruralHeroImg} 
          alt="Rural Bangladesh landscape - MicroGrow Social Foundation" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft, Light Gradient Overlay for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/98 via-white/85 to-sky-50/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/70" />
      </motion.div>

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
          className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
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
            Where Every System Works for <span className="text-blue-600 font-extrabold underline decoration-blue-200 underline-offset-8">Every Child</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
          >
            Integrating safe water, sanitation, nutrition, early childhood development, climate-smart agriculture, and green energy into community-owned social enterprises across rural Bangladesh.
          </motion.p>
        </div>

        {/* Minimalist Editorial Metrics Bar with anime.js pop */}
        <div 
          ref={metricsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200/90 max-w-3xl"
        >
          <div className="space-y-1 bg-white/70 p-3 rounded-xl border border-slate-200/60 shadow-2xs hover:scale-105 hover:border-blue-300 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">35+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500">COMMUNITIES REACHED</div>
          </div>
          <div className="space-y-1 bg-white/70 p-3 rounded-xl border border-slate-200/60 shadow-2xs hover:scale-105 hover:border-blue-300 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">120+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500">WASH & NUTRITION UNITS</div>
          </div>
          <div className="space-y-1 bg-white/70 p-3 rounded-xl border border-slate-200/60 shadow-2xs hover:scale-105 hover:border-blue-300 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">250+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500">LOCAL ENTERPRISES</div>
          </div>
          <div className="space-y-1 bg-white/70 p-3 rounded-xl border border-slate-200/60 shadow-2xs hover:scale-105 hover:border-blue-300 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">26+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500">YEARS WASH EXPERTISE</div>
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
            className="btn-pop text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore Social Pillars</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </span>
          </button>
        </motion.div>

      </motion.div>

      {/* On-Scroll Indicator */}
      <div className="relative z-10 text-center pt-8">
        <button 
          onClick={scrollToMission}
          className="inline-flex items-center justify-center p-3 rounded-full bg-white/80 hover:bg-white text-blue-600 border border-slate-200/80 shadow-xs transition-all group cursor-pointer focus:outline-none btn-pop"
          title="Scroll Down"
          aria-label="Scroll down to mission section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce text-blue-600" />
        </button>
      </div>

    </section>
  );
};

