import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Share2, 
  Linkedin,
  GraduationCap,
  Store,
  Laptop,
  HeartHandshake,
  Trees,
  LifeBuoy
} from 'lucide-react';
import { SocialInitiative } from '../types';
import { ORGANISATION_INFO } from '../data/organizationData';

interface ModalProps {
  initiative: SocialInitiative | null;
  onClose: () => void;
  onOpenGetInvolved: () => void;
}

export const InitiativeDetailModal: React.FC<ModalProps> = ({
  initiative,
  onClose,
  onOpenGetInvolved
}) => {
  if (!initiative) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-white" />;
      case 'Store': return <Store className="w-6 h-6 text-white" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-white" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-white" />;
      case 'Trees': return <Trees className="w-6 h-6 text-white" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6 text-white" />;
      default: return <GraduationCap className="w-6 h-6 text-white" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs">
        
        {/* Backdrop click */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 space-y-6"
        >
          {/* Top Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner */}
          <div className="flex items-start gap-4 pr-8">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${initiative.imagePlaceholderColor} flex items-center justify-center shadow-md shrink-0`}>
              {getIcon(initiative.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-100">
                  {initiative.category}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {initiative.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {initiative.title}
              </h3>
            </div>
          </div>

          {/* Tagline Box */}
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-sm font-medium text-slate-700">
            "{initiative.tagline}"
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Initiative Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {initiative.description}
            </p>
          </div>

          {/* Key Program Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Components & Activities
            </h4>
            <div className="space-y-2">
              {initiative.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-800 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/60">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-blue-600" /> Target Beneficiaries
              </div>
              <p className="text-xs font-semibold text-slate-800">
                {initiative.targetAudience}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> Key Districts
              </div>
              <p className="text-xs font-semibold text-slate-800">
                {initiative.districtsCovered.join(', ')}
              </p>
            </div>
          </div>

          {/* Measured Impact Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl space-y-1 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
              Impact Delivered
            </div>
            <p className="text-sm font-semibold">
              {initiative.impactSummary}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <a
              href={ORGANISATION_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" /> View Updates on LinkedIn
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="btn-pop px-4 py-2 text-xs font-semibold text-slate-700 rounded-xl cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenGetInvolved();
                }}
                className="btn-blue-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                Support This Initiative <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
