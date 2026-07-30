import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  ArrowUp, 
  ExternalLink 
} from 'lucide-react';
import { ORGANISATION_INFO } from '../data/organizationData';

interface FooterProps {
  onOpenGetInvolved: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetInvolved }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-100 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Org Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-xl tracking-tight text-white">
                MICROGROW<span className="text-blue-500">.</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Non-profit social enterprise dedicated to safe water, sanitation, nutrition, early childhood development, climate-smart agriculture, and youth entrepreneurship across Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={ORGANISATION_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark p-2.5 text-white rounded-lg flex items-center justify-center cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 fill-white relative z-10" />
              </a>
              
              <button
                onClick={onOpenGetInvolved}
                className="btn-blue-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 fill-white/20 text-white" /> Partner With Us
                </span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-400">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#initiatives" className="hover:text-white transition-colors">Micro Water Facilities & WASH</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Solid Waste & FSM Systems</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Healthy Village & Child Nutrition</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Horijon Community WASH Inclusion</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Climate Agriculture & IWRM</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Women & Youth Enterprise</a></li>
            </ul>
          </div>

          {/* Organization Info */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-400">
              Organization
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#mission" className="hover:text-white transition-colors">Mission & Vision</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Social Impact Metrics</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Leadership & Team</a></li>
              <li><a href="#linkedin-feed" className="hover:text-white transition-colors">LinkedIn Live Feed</a></li>
            </ul>
          </div>

          {/* Contact HQ */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-400">
              Dhaka HQ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 leading-relaxed font-mono">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{ORGANISATION_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{ORGANISATION_INFO.contactEmail}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{ORGANISATION_INFO.contactPhone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} MicroGrow Social Foundation Bangladesh. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={ORGANISATION_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" /> Official LinkedIn <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-dark p-2 text-white rounded-lg cursor-pointer flex items-center justify-center"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 text-white relative z-10" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

