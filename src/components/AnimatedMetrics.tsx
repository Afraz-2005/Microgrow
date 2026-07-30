import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  UserCheck, 
  MapPin, 
  Award, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { IMPACT_METRICS } from '../data/organizationData';

export const AnimatedMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  // Counter refs for anime.js
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          IMPACT_METRICS.forEach((metric, index) => {
            const el = countRefs.current[index];
            if (!el) return;

            const obj = { value: 0 };
            animate(obj, {
              value: metric.value,
              duration: 2000,
              onRender: () => {
                if (el) {
                  el.innerText = Math.round(obj.value).toLocaleString();
                }
              }
            });
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-blue-600" />;
      case 'Award': return <Award className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default: return <UserCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-200/60">
            MEASURABLE OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
            Our Grassroots Impact in Numbers.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Audited records from WASH facilities, child nutrition units, solid waste management systems, and flood relief deployments across rural Bangladesh.
          </p>
        </motion.div>

        {/* Parallax Metrics Grid with Scroll Reveal */}
        <motion.div 
          style={{ y: cardsY }} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {IMPACT_METRICS.map((metric, index) => (
            <div 
              key={metric.id}
              className="card-editorial p-6 sm:p-7 space-y-4 hover:border-blue-500/60 transition-all shadow-sm rounded-xl bg-white overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                  {getIcon(metric.icon)}
                </div>

                <div className="space-y-1.5 min-w-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-baseline flex-wrap gap-x-0.5 leading-none break-all">
                    <span>{metric.prefix}</span>
                    <span ref={el => { countRefs.current[index] = el; }}>0</span>
                    <span className="text-blue-600 font-bold ml-0.5">{metric.suffix}</span>
                  </div>
                  <div className="font-mono text-[11px] font-bold text-blue-700 uppercase tracking-wider leading-snug break-words">
                    {metric.label}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                {metric.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Audit Verification Note */}
        <div className="card-editorial p-6 bg-white border border-slate-200/90 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div className="text-xs text-slate-700 font-medium leading-relaxed">
              Every campaign undergoes field audits and digital record-keeping. Communities receive verified infrastructure and capacity building.
            </div>
          </div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-lg border border-emerald-200 shrink-0 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Field Audited & Verified
          </div>
        </div>

      </div>
    </section>
  );
};

