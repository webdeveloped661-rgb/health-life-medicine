import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';

export const MedicalDisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-[#263238] text-gray-300 py-6 border-b border-[#37474F] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#20B9D2]/20 border border-[#20B9D2]/40 text-[#20B9D2] flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>

          <div className="flex-grow space-y-1">
            <p className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <span>Medical & Regulatory Compliance Notice (DRAP Standards)</span>
              <span className="text-gray-400">·</span>
              <span className="text-[#A9D9B0] font-normal text-[11px]">طبی و قانونی دستبرداری</span>
            </p>
            <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
              The information provided on this website is for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor, gynecologist, or licensed healthcare professional before starting, changing, or stopping any medicine. No product sold on this platform claims to be an immediate cure for chronic conditions.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-[11px] text-[#B9EDF3] bg-[#243746] px-3 py-1.5 rounded-lg border border-[#37474F]">
            <ShieldCheck className="w-4 h-4 text-[#20B9D2]" />
            <span>DRAP Adherence</span>
          </div>
        </div>
      </div>
    </div>
  );
};
