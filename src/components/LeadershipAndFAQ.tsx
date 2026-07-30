import React, { useState } from 'react';
import { 
  Linkedin, 
  ChevronDown, 
  Building
} from 'lucide-react';
import { LEADERSHIP_TEAM, FAQ_ITEMS } from '../data/organizationData';
import { motion, AnimatePresence } from 'motion/react';

export const LeadershipAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="team" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block border border-blue-200/60">
            LEADERSHIP & FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight">
            Meet the Stewards of MicroGrow.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Dedicated WASH & nutrition specialists, youth development leaders, and community organizers leading MicroGrow Social Foundation Bangladesh.
          </p>
        </motion.div>

        {/* Leadership Team Grid with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {LEADERSHIP_TEAM.map((member) => (
            <div 
              key={member.id}
              className="card-editorial p-6 space-y-4 hover:border-blue-500/60 transition-all flex flex-col justify-between bg-white border border-slate-200/90 rounded-xl shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${member.imageBg} text-white font-extrabold text-base flex items-center justify-center shadow-2xs`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <a 
                    href={member.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">{member.name}</h3>
                  <p className="text-xs font-mono font-bold text-blue-600 uppercase">{member.role}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-600" /> MicroGrow Social Foundation BD
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="space-y-8 pt-8 border-t border-slate-200/80">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600">
              Clear answers regarding governance, volunteer opportunities, and partnerships.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="card-editorial overflow-hidden bg-white border border-slate-200/90 rounded-xl shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left font-extrabold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

