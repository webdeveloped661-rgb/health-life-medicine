import React from 'react';
import { Activity, ShieldCheck, HeartPulse, Check, ArrowRight, Lock, BrainCircuit } from 'lucide-react';

interface MensHealthSectionProps {
  onExploreProducts: () => void;
  onReadArticle: (articleId: string) => void;
  onOpenConsultation: () => void;
}

export const MensHealthSection: React.FC<MensHealthSectionProps> = ({
  onExploreProducts,
  onReadArticle,
  onOpenConsultation
}) => {
  return (
    <section id="mens-health" className="py-20 bg-[#F5F9FA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold mb-3">
            <span>Men's Healthcare</span>
            <span className="text-sky-300">·</span>
            <span>مردانہ صحت و توانائی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            Men's Health & Wellness
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#546E7A] leading-relaxed">
            Men's reproductive and vitality concerns can stem from diverse biological and psychological causes and require individual medical evaluation. Explore reliable healthcare information and discover verified, evidence-backed formulations.
          </p>
        </div>

        {/* 3 Medical Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Men's Reproductive Health */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-5 shadow-xs">
                <HeartPulse className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                Men's Reproductive Health
              </h3>
              <p className="text-xs font-semibold text-[#0284C7] mb-3">
                تولیدی صحت اور ہارمونل توازن
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                The male reproductive system relies on an intricate equilibrium between the hypothalamic-pituitary-gonadal axis, vascular blood flow, and pelvic cellular nutrition.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Testosterone Balance:</strong> Regulates energy, lean muscle, and spermatogenesis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Vascular Integrity:</strong> Healthy nitric oxide and arterial elasticity are fundamental for stamina.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Cellular Micronutrients:</strong> Zinc and antioxidants protect sperm DNA from oxidative damage.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => onReadArticle('art-03')}
                className="text-xs font-bold text-[#20B9D2] hover:text-[#168798] flex items-center gap-1 group"
              >
                <span>Read Full Health Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Understanding Health Concerns */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-5 shadow-xs">
                <BrainCircuit className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                Understanding Health Concerns
              </h3>
              <p className="text-xs font-semibold text-[#0284C7] mb-3">
                کمزوری اور تھکن کی اصل وجوہات
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                Concerns related to stamina, premature ejaculation, or erectile capacity are rarely purely mechanical. They are frequently linked to systemic health markers and chronic lifestyle stressors.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Psychological Load:</strong> Work stress, performance pressure, and sleep deprivation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Metabolic Factors:</strong> Early insulin resistance, high cholesterol, or hypertension.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Circulatory Health:</strong> Sedentary lifestyle and smoking restrict microvascular perfusion.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => onReadArticle('art-03')}
                className="text-xs font-bold text-[#20B9D2] hover:text-[#168798] flex items-center gap-1 group"
              >
                <span>Learn Scientific Factors</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Professional Healthcare Guidance */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-5 shadow-xs">
                <Activity className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                Professional Guidance
              </h3>
              <p className="text-xs font-semibold text-[#0284C7] mb-3">
                غیر تصدیق شدہ ادویات سے بچاؤ
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                Beware of exaggerated claims of instant cures or synthetic adulterants sold illicitly. True reproductive wellness requires clinically verified nutraceuticals and medical guidance.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Consult an andrologist, urologist, or qualified clinical pharmacist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Verify DRAP manufacturing registration for safety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Formulate realistic timelines (nutritional benefits compound over 6-8 weeks).</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={onOpenConsultation}
                className="text-xs font-bold text-[#0284C7] hover:text-[#0369a1] flex items-center gap-1 group"
              >
                <span>Book Confidential Pharmacist Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Action Strip: Privacy & Respect Guarantee */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#243746] to-[#1c2c38] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#20B9D2]/20 border border-[#20B9D2]/40 flex items-center justify-center text-[#B9EDF3] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                100% Discreet Packaging & Confidential Pharmacist Consultation
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                All male wellness orders arrive in plain brown corrugated boxes with no medical branding or product names visible externally.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onReadArticle('art-03')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
            >
              Explore Men's Health Articles
            </button>
            <button
              onClick={onExploreProducts}
              className="px-5 py-2.5 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold shadow-xs transition-all"
            >
              View Men's Health Products
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
