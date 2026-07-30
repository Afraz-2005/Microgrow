import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Target, 
  Eye, 
  Quote, 
  MapPin, 
  CheckCircle2,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { ORGANISATION_INFO, CORE_VALUES } from '../data/organizationData';

export const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["15px", "-15px"]);

  const bangladeshDivisions = [
    { name: "Dhaka Division", districts: "Dhaka, Adabor, Gazipur, Narayanganj, Tangail, Narsingdi", hubs: 42 },
    { name: "Chittagong Division", districts: "Chittagong, Cox's Bazar, Comilla, Feni, Noakhali", hubs: 28 },
    { name: "Sylhet Division", districts: "Sylhet, Sunamganj, Moulvibazar, Habiganj", hubs: 22 },
    { name: "Rajshahi & Rangpur", districts: "Rajshahi, Bogra, Rangpur, Dinajpur, Kurigram", hubs: 19 },
    { name: "Khulna & Barisal", districts: "Khulna, Jessore, Satkhira, Barisal, Bhola", hubs: 15 }
  ];

  return (
    <section 
      ref={sectionRef}
      id="mission" 
      className="relative py-20 md:py-28 bg-slate-50 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Parallax Background Blobs */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-200/60">
            STRATEGY & CORE FRAMEWORKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
            Building Healthy, Resilient & Self-Reliant Communities.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Advancing SDG 2 (Zero Hunger) and SDG 6 (Clean Water & Sanitation) through 26+ years of evidence-based frameworks pioneered by Engr. Imam Mahmud Riad.
          </p>
        </motion.div>

        {/* 3 Core Operational Framework Cards with Parallax Shift & Scroll Reveal */}
        <motion.div 
          style={{ y: cardsY }} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card-editorial p-7 space-y-3.5 border-l-4 border-l-blue-600 hover:scale-[1.02] cursor-pointer">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">RIAD ET AL. 2017</span>
            <h3 className="text-xl font-extrabold text-slate-900">Healthy Village Approach</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Integrates safe water, sanitation, early childhood development, and child nutrition into community-owned, self-sustaining business models.
            </p>
          </div>

          <div className="card-editorial p-7 space-y-3.5 border-l-4 border-l-blue-500 hover:scale-[1.02] cursor-pointer">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">RIAD ET AL. 2015</span>
            <h3 className="text-xl font-extrabold text-slate-900">RAINBOWS SBCC Model</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A comprehensive Social & Behavior Change Communication framework driving long-term hygiene adoption, maternal care, and child health resilience.
            </p>
          </div>

          <div className="card-editorial p-7 space-y-3.5 border-l-4 border-l-indigo-600 hover:scale-[1.02] cursor-pointer">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">RIAD ET AL. 2012</span>
            <h3 className="text-xl font-extrabold text-slate-900">Valued Variable Social Approach</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A market-based enterprise framework transforming women and youth into micro-entrepreneurs and local service providers rather than aid recipients.
            </p>
          </div>
        </motion.div>

        {/* Featured Mission Quote Block with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-editorial p-8 sm:p-10 relative bg-white border border-slate-200/90 shadow-sm overflow-hidden rounded-2xl border-l-4 border-l-blue-600"
        >
          <div className="max-w-4xl mx-auto space-y-5 relative z-10">
            <Quote className="w-10 h-10 text-blue-600 opacity-80" />

            <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              "{ORGANISATION_INFO.missionStatement}"
            </blockquote>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-slate-500 uppercase">
              <span className="flex items-center gap-2 text-blue-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Official MicroGrow Mission
              </span>
              <span className="text-slate-500">Dhaka Headquarters • Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Minimalist Principles Tabbed View */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3 font-mono text-xs uppercase font-bold">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase font-bold cursor-pointer ${
                activeTab === 'mission'
                  ? 'btn-blue-primary shadow-sm'
                  : 'btn-pop'
              }`}
            >
              <span className="relative z-10">Action Mission</span>
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase font-bold cursor-pointer ${
                activeTab === 'vision'
                  ? 'btn-blue-primary shadow-sm'
                  : 'btn-pop'
              }`}
            >
              <span className="relative z-10">Vision Statement</span>
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase font-bold cursor-pointer ${
                activeTab === 'values'
                  ? 'btn-blue-primary shadow-sm'
                  : 'btn-pop'
              }`}
            >
              <span className="relative z-10">Core Principles</span>
            </button>
          </div>

          <div className="card-editorial p-6 sm:p-8">
            {activeTab === 'mission' && (
              <motion.div 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 text-sm text-slate-700 leading-relaxed"
              >
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2 text-blue-700">
                  <Target className="w-5 h-5 text-blue-600" /> Circular Economy & Community Ownership
                </h3>
                <p>
                  MicroGrow Social Foundation delivers affordable and sustainable health, nutrition, WASH, and livelihood services through community enterprises. We create market-based solutions where women and youth own the services—ensuring long-term self-reliance rather than dependence on traditional aid.
                </p>
              </motion.div>
            )}

            {activeTab === 'vision' && (
              <motion.div 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 text-sm text-slate-700 leading-relaxed"
              >
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2 text-blue-700">
                  <Eye className="w-5 h-5 text-blue-600" /> Vision for Thriving Communities
                </h3>
                <p className="text-base font-semibold text-slate-800">"{ORGANISATION_INFO.visionStatement}"</p>
                <p className="text-xs font-mono text-blue-600 font-bold uppercase pt-1">
                  SDG 2 (Zero Hunger) & SDG 6 (Clean Water & Sanitation) Integration
                </p>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {CORE_VALUES.map((val) => (
                  <div key={val.id} className="space-y-1.5 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                    <h4 className="font-extrabold text-blue-900 text-xs uppercase tracking-wide">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Active Regional Footprint */}
        <div className="space-y-4 pt-4 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" /> Active Regional Footprint in Bangladesh
            </h3>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
              35+ Communities Reached
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {bangladeshDivisions.map((div, idx) => (
              <div key={idx} className="card-editorial p-4 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>{div.name}</span>
                  <span className="text-[10px] text-blue-600 font-mono font-bold">{div.hubs} Hubs</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {div.districts}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

