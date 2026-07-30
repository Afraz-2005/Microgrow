import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Heart, 
  Send, 
  CheckCircle2, 
  Users, 
  Building, 
  GraduationCap, 
  DollarSign, 
  Sparkles 
} from 'lucide-react';
import { ORGANISATION_INFO } from '../data/organizationData';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState<'ambassador' | 'volunteer' | 'partner' | 'donor'>('ambassador');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Dhaka');
  const [organizationOrUniversity, setOrganizationOrUniversity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
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

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#F8F7F4] rounded-xl shadow-2xl border border-[rgba(17,17,19,0.1)] max-w-xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 space-y-6"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#111113]/50 hover:text-[#111113] hover:bg-[#111113]/5 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111113]">Thank You For Reaching Out!</h3>
              <p className="text-xs sm:text-sm text-[#111113]/70 max-w-md mx-auto leading-relaxed font-normal">
                Your response has been registered with Microgrow Social Foundation Bangladesh. Our team will reach out to you via email ({email}) shortly.
              </p>
              <button
                onClick={handleReset}
                className="btn-dark px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              
              {/* Header */}
              <div className="space-y-1.5 pr-8">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#2563EB] uppercase tracking-widest bg-[#2563EB]/10 px-2.5 py-1 rounded border border-[#2563EB]/20">
                  <Heart className="w-3.5 h-3.5 text-[#2563EB]" /> Microgrow Social Foundation BD
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111113]">
                  Partner with Microgrow Social
                </h3>
                <p className="text-xs text-[#111113]/60">
                  Join as a Youth Ambassador, Volunteer, Corporate Sponsor, or Micro-Grant Supporter.
                </p>
              </div>

              {/* Select Role Type Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setRoleType('ambassador')}
                  className={`p-2.5 rounded text-left text-xs font-bold cursor-pointer transition-all ${
                    roleType === 'ambassador'
                      ? 'btn-dark'
                      : 'btn-pop'
                  }`}
                >
                  <span className="relative z-10 flex flex-col gap-1">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Ambassador</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRoleType('volunteer')}
                  className={`p-2.5 rounded text-left text-xs font-bold cursor-pointer transition-all ${
                    roleType === 'volunteer'
                      ? 'btn-dark'
                      : 'btn-pop'
                  }`}
                >
                  <span className="relative z-10 flex flex-col gap-1">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Volunteer</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRoleType('partner')}
                  className={`p-2.5 rounded text-left text-xs font-bold cursor-pointer transition-all ${
                    roleType === 'partner'
                      ? 'btn-dark'
                      : 'btn-pop'
                  }`}
                >
                  <span className="relative z-10 flex flex-col gap-1">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span>CSR / Partner</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRoleType('donor')}
                  className={`p-2.5 rounded border text-left text-xs font-bold flex flex-col gap-1 transition-all ${
                    roleType === 'donor'
                      ? 'bg-[#111113] text-[#F8F7F4] border-[#111113]'
                      : 'bg-white text-[#111113] border-[rgba(17,17,19,0.1)] hover:border-[#2563EB]'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span>Sponsor</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rafiqul Islam"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rafiq@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                      Phone / WhatsApp Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+880 1..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                      District in Bangladesh
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB]"
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                      <option value="Other">Other District</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                    Institution / Organization Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Dhaka University / Brac Bank / Independent"
                    value={organizationOrUniversity}
                    onChange={(e) => setOrganizationOrUniversity(e.target.value)}
                    className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold text-[#111113] uppercase tracking-wider">
                    How would you like to collaborate?
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Briefly describe your interest or how you want to support Microgrow Social Foundation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-[rgba(17,17,19,0.1)] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#2563EB] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-dark py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-3.5 h-3.5 text-blue-400" /> Submit Partnership Interest
                  </span>
                </button>
              </form>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
