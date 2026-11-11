import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutUsProps {
  onOpenConsultation: () => void;
  onExploreMedicine: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenConsultation, onExploreMedicine }) => {
  return (
    <section id="about-us" className="py-20 bg-[#F5F9FA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/src/assets/images/pharmacist_consultation_1794389974423.jpg"
                alt="Licensed clinical pharmacist verifying medicines"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243746]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs font-bold text-[#B9EDF3] uppercase tracking-wider">
                    Clinical Supervision
                  </p>
                  <p className="text-sm font-semibold">
                    Overseen by Registered Pharmacists & Healthcare Specialists
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefit Points */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#20B9D2]/30 text-xs font-bold text-[#20B9D2] mb-3">
              <span>About Healthy Life Medicine</span>
              <span className="text-gray-300">·</span>
              <span>ہمارا مشن اور طبی اصول</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
              Committed to Better Healthcare Awareness
            </h2>

            <p className="mt-4 text-base text-[#546E7A] leading-relaxed">
              Our mission is to make healthcare information and product discovery more accessible. We focus on women's health, men's wellness, and responsible healthcare awareness through clear product information and professional guidance.
            </p>

            {/* Three Benefit Points */}
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-2xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243746]">
                    Authentic Formulations & Zero Exaggerated Claims
                  </h4>
                  <p className="text-xs text-[#546E7A] mt-0.5">
                    We strictly refuse to advertise unverified magic cures or false guarantees. Every formulation provides documented active ingredients and clear expected timelines.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-2xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#B9EDF3] text-[#0e7490] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243746]">
                    Pharmacist Verification for Patient Safety
                  </h4>
                  <p className="text-xs text-[#546E7A] mt-0.5">
                    We bridge the gap between doctor prescriptions and safe consumer delivery, actively checking contraindications, dosages, and drug-drug interactions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-2xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F9E3E9] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243746]">
                    Dignified, Stigma-Free Patient Support
                  </h4>
                  <p className="text-xs text-[#546E7A] mt-0.5">
                    Sensitive reproductive health issues (such as leukorrhea and male stamina concerns) deserve empathetic, professional, and judgment-free clinical guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs with User button styling */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center gap-2"
              >
                <span>واٹس ایپ رابطہ: 0300 7006133</span>
              </a>

              <button
                type="button"
                onClick={onExploreMedicine}
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>دوا کی تفصیل (500 روپے)</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
