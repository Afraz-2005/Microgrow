import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  LifeBuoy, 
  Trees, 
  Store,
  Droplet
} from 'lucide-react';

interface CalculatorProps {
  onOpenGetInvolved: () => void;
}

export const ImpactCalculator: React.FC<CalculatorProps> = ({ onOpenGetInvolved }) => {
  const [bdtAmount, setBdtAmount] = useState<number>(2500);

  // Conversion logic (approx 1 USD = 120 BDT)
  const usdAmount = Math.round(bdtAmount / 120);

  // Outcome calculations
  const waterUnitsSupported = Math.floor(bdtAmount / 1000); 
  const nutritionPacks = Math.floor(bdtAmount / 850);  
  const saplingsPlanted = Math.floor(bdtAmount / 150);   
  const microArtisansMentored = Math.floor(bdtAmount / 5000); 

  return (
    <section id="calculator" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
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
            CALCULATED SUPPORT MULTIPLIER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
            Direct Grassroots Support Multiplier.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            See how localized funding directly equips water points, child nutrition programs, and micro-enterprises in Bangladesh.
          </p>
        </motion.div>

        {/* Clean Interactive Calculator Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-editorial p-6 sm:p-10 space-y-8 bg-white shadow-sm border border-slate-200/90 rounded-2xl"
        >
          
          {/* Slider Controls */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                Contribution Level (BDT / USD)
              </label>
              <div className="text-2xl font-extrabold text-blue-600 flex items-center gap-2">
                <span>৳ {bdtAmount.toLocaleString()} BDT</span>
                <span className="text-xs font-normal text-slate-500">
                  (~${usdAmount} USD)
                </span>
              </div>
            </div>

            {/* Range Slider */}
            <input 
              type="range"
              min="500"
              max="25000"
              step="500"
              value={bdtAmount}
              onChange={(e) => setBdtAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 border border-slate-200/80"
            />

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs font-bold">
              {[1000, 2500, 5000, 10000, 25000].map((amt) => (
                <button 
                  key={amt}
                  onClick={() => setBdtAmount(amt)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer transition-all ${
                    bdtAmount === amt 
                      ? 'btn-blue-primary shadow-md scale-105' 
                      : 'btn-pop'
                  }`}
                >
                  <span className="relative z-10">৳ {amt.toLocaleString()} (~${Math.round(amt / 120)})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Direct Deliverables Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Outcome 1 */}
            <div className="bg-slate-50 hover:bg-white border border-slate-200/80 p-5 rounded-xl space-y-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Droplet className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900">
                {waterUnitsSupported} <span className="text-xs font-normal text-slate-500">Water Outlets</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean drinking water supply and filtration maintenance.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="bg-slate-50 hover:bg-white border border-slate-200/80 p-5 rounded-xl space-y-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900">
                {nutritionPacks} <span className="text-xs font-normal text-slate-500">Families</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Child nutrition & WASH survival packs delivered.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="bg-slate-50 hover:bg-white border border-slate-200/80 p-5 rounded-xl space-y-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Trees className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900">
                {saplingsPlanted} <span className="text-xs font-normal text-slate-500">Tree Saplings</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fruit & timber trees planted for climate-resilient agriculture.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="bg-slate-50 hover:bg-white border border-slate-200/80 p-5 rounded-xl space-y-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900">
                {microArtisansMentored > 0 ? microArtisansMentored : '1'} <span className="text-xs font-normal text-slate-500">Women Enterprise</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mentored in local enterprise and community management.
              </p>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              100% of contributions directly fund field execution and community kits in Bangladesh.
            </div>

            <button
              onClick={onOpenGetInvolved}
              className="w-full sm:w-auto btn-blue-primary text-xs px-6 py-3.5 rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 font-bold cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Support MicroGrow Foundation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

