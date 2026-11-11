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
          {/* Left: Contact Info & Address */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5 text-yellow-300 font-bold">
              <span>📍 ایڈریس: میاں چنوں (Mian Channu)</span>
            </span>
            <span className="text-green-300 font-bold bg-[#1b2c38] px-2 py-0.5 rounded border border-green-500/30">
              Mustahid Health Care Services
            </span>
            <a 
              href="tel:03007006133" 
              className="flex items-center gap-1 text-white hover:text-[#B9EDF3] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#22c55e]" />
              <span className="font-mono tabular-nums font-bold">0300 7006133</span>
            </a>
            <a 
              href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20the%20medicine%20(Rs.%20500)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#22c55e] hover:text-white transition-colors font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>WhatsApp: 0300 7006133</span>
            </a>
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
