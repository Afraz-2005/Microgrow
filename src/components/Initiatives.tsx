import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  Store, 
  Laptop, 
  HeartHandshake, 
  Trees, 
  LifeBuoy, 
  ChevronRight,
  Droplet,
  CheckCircle2
} from 'lucide-react';
import { SOCIAL_INITIATIVES } from '../data/organizationData';
import { SocialInitiative } from '../types';
import { InitiativeDetailModal } from './InitiativeDetailModal';

interface InitiativesProps {
  onOpenGetInvolved: () => void;
}

export const Initiatives: React.FC<InitiativesProps> = ({ onOpenGetInvolved }) => {
  const [activeInitiativeId, setActiveInitiativeId] = useState<string>(SOCIAL_INITIATIVES[0].id);
  const [activeModalInitiative, setActiveModalInitiative] = useState<SocialInitiative | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const activeInitiative = SOCIAL_INITIATIVES.find(i => i.id === activeInitiativeId) || SOCIAL_INITIATIVES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Store': return <Store className="w-5 h-5 text-blue-600" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-blue-600" />;
      case 'Trees': return <Trees className="w-5 h-5 text-blue-600" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5 text-blue-600" />;
      default: return <Droplet className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="initiatives" 
      className="relative py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Background Parallax Shift */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-50/70 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-200/60">
              CORE PILLARS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
              Our Key Programs of Change.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Targeted, high-yield social programs scaling water access, waste management, child nutrition, climate agriculture, and youth enterprise across Bangladesh.
            </p>
          </div>

          <button
            onClick={onOpenGetInvolved}
            className="self-start md:self-auto btn-blue-primary text-xs px-6 py-3.5 rounded-lg uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Partner on a Pillar</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </motion.div>

        {/* Minimalist Storybook Pillar Selector Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"
        >
          {SOCIAL_INITIATIVES.map((init, idx) => {
            const isActive = init.id === activeInitiativeId;
            return (
              <button
                key={init.id}
                onClick={() => setActiveInitiativeId(init.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 hover:-translate-y-1.5 hover:scale-[1.03] active:scale-95 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg ring-2 ring-blue-500/30'
                    : 'bg-slate-50 hover:bg-white text-slate-900 border-slate-200/90 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-slate-200'}`}>
                    {getIcon(init.iconName)}
                  </div>
                </div>

                <div className="text-xs font-bold leading-snug line-clamp-2">
                  {init.title}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Story Focus Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeInitiative.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="card-editorial p-6 sm:p-10 space-y-8 bg-slate-50/90 border border-slate-200/90 rounded-2xl shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Narrative Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase">
                  <span className="text-blue-700 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200">
                    {activeInitiative.category}
                  </span>
                  <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {activeInitiative.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {activeInitiative.title}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {activeInitiative.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Program Milestones
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                    {activeInitiative.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1" />
                        <span className="leading-snug break-words">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Outcomes & Call to Action */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-6 space-y-6 shadow-sm">
                <div className="space-y-3 pb-4 border-b border-slate-100">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Grassroots Scope
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-extrabold text-blue-600">
                        {activeInitiative.beneficiariesCount.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">Direct Beneficiaries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900">
                        {activeInitiative.districtsCovered.length}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">Districts Covered</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-900">Active Districts:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeInitiative.districtsCovered.map((d, i) => (
                      <span key={i} className="text-xs font-mono font-medium bg-slate-100 text-slate-800 px-2.5 py-1 rounded border border-slate-200/80">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalInitiative(activeInitiative)}
                  className="w-full btn-dark font-semibold text-xs py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>View Case Study & Details</span>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Detailed Modal Popup */}
        <InitiativeDetailModal
          initiative={activeModalInitiative}
          onClose={() => setActiveModalInitiative(null)}
          onOpenGetInvolved={onOpenGetInvolved}
        />

      </div>
    </section>
  );
};

