import React from 'react';
import { Phone, Mail, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

interface TopBarProps {
  onOpenConsultation: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#243746] text-white text-xs border-b border-[#2d4557] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+9204235789000" 
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#B9EDF3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#20B9D2]" />
              <span className="font-mono tabular-nums">+92 (042) 3578-9000</span>
            </a>
            <a 
              href="mailto:care@healthylifemedicine.com" 
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-[#B9EDF3] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#20B9D2]" />
              <span>care@healthylifemedicine.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>Mon - Sat: 9:00 AM - 10:00 PM PKT</span>
            </div>
          </div>

          {/* Right: Discreet Assurance & Pharmacist Help */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A9D9B0]" />
              <span>100% Plain Discreet Packaging Guaranteed</span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-xs text-[#B9EDF3] hover:text-white font-medium hover:underline transition-all cursor-pointer"
            >
              <MessageSquare className="w-3 h-3 text-[#20B9D2]" />
              <span>Pharmacist Helpline (Female & Male Staff Available)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
