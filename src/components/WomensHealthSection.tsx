import React, { useState } from 'react';
import { 
  HeartHandshake, 
  HelpCircle, 
  AlertTriangle, 
  Stethoscope, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Info
} from 'lucide-react';

interface WomensHealthSectionProps {
  onExploreProducts: () => void;
  onReadArticle: (articleId: string) => void;
  onOpenConsultation: () => void;
}

export const WomensHealthSection: React.FC<WomensHealthSectionProps> = ({
  onExploreProducts,
  onReadArticle,
  onOpenConsultation
}) => {
  const [showTriageModal, setShowTriageModal] = useState(false);

  return (
    <section id="womens-health" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9E3E9] text-[#D81B60] text-xs font-bold mb-3">
            <span>Women's Healthcare</span>
            <span className="text-pink-300">·</span>
            <span>خواتین کی صحت و لیکوریا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            Understanding Leukorrhea (White Discharge)
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#546E7A] leading-relaxed">
            Vaginal discharge can be a normal part of reproductive health. However, changes in its color, smell, consistency, or accompanying discomfort may require medical evaluation. Learn about possible causes and appropriate healthcare options.
          </p>
        </div>

        {/* 3 Medical Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Understanding White Discharge */}
          <div className="p-7 rounded-3xl bg-[#F5F9FA] border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#20B9D2]/30 flex items-center justify-center text-[#20B9D2] mb-5 shadow-xs">
                <Info className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                Understanding White Discharge
              </h3>
              <p className="text-xs font-semibold text-[#D81B60] mb-3">
                نارمل جسمانی رطوبت کیا ہے؟
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                Vaginal discharge is a normal, healthy fluid produced by the glands in the cervix and vagina. It continually carries away dead cells and foreign matter, preventing harmful bacteria from ascending into the uterus.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Normal discharge is typically clear, creamy, or pale white.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Usually mild-smelling or completely odorless.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span>Naturally fluctuates during menstrual cycles, ovulation, and pregnancy.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <button
                onClick={() => onReadArticle('art-01')}
                className="text-xs font-bold text-[#20B9D2] hover:text-[#168798] flex items-center gap-1 group"
              >
                <span>Read Full Clinical Explanation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Possible Causes */}
          <div className="p-7 rounded-3xl bg-[#F5F9FA] border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#20B9D2]/30 flex items-center justify-center text-[#20B9D2] mb-5 shadow-xs">
                <HelpCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                Possible Causes of Changes
              </h3>
              <p className="text-xs font-semibold text-[#D81B60] mb-3">
                ڈسچارج میں غیر معمولی تبدیلی کی وجوہات
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                Changes in discharge color, density, or volume occur when the delicate vaginal microbiome is disrupted. While often harmless and temporary, alterations can be related to specific biological or environmental factors.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Microbiome Shifts:</strong> Bacterial Vaginosis (BV) or Yeast (Candida overgrowth).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Hormonal Shifts:</strong> Pregnancy, breastfeeding, menopause, or contraceptive use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                  <span><strong>Chemical Irritants:</strong> Scented soaps, tight synthetic underwear, or douching.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <button
                onClick={() => onReadArticle('art-02')}
                className="text-xs font-bold text-[#20B9D2] hover:text-[#168798] flex items-center gap-1 group"
              >
                <span>Explore Flora Balance Factors</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: When to Seek Medical Advice */}
          <div className="p-7 rounded-3xl bg-[#F5F9FA] border border-gray-200/70 hover:border-[#20B9D2]/40 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#20B9D2]/30 flex items-center justify-center text-[#D81B60] mb-5 shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#243746] mb-2">
                When to Seek Medical Advice
              </h3>
              <p className="text-xs font-semibold text-[#D81B60] mb-3">
                ڈاکٹر سے کب رجوع کرنا ضروری ہے؟
              </p>

              <p className="text-sm text-[#546E7A] leading-relaxed mb-4">
                Self-medication without a professional swab or examination can worsen infections. Professional gynecological consultation is essential if symptoms deviate from your normal baseline.
              </p>

              <ul className="space-y-2 text-xs text-[#263238]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] shrink-0 mt-1.5" />
                  <span>Strong, unpleasant fishy or foul odor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] shrink-0 mt-1.5" />
                  <span>Thick, cottage cheese-like texture accompanied by intense burning or itching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] shrink-0 mt-1.5" />
                  <span>Yellowish-green, frothy discharge, pelvic pain, or unexpected spotting.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <button
                onClick={() => setShowTriageModal(true)}
                className="text-xs font-bold text-[#D81B60] hover:text-[#b0134c] flex items-center gap-1 group"
              >
                <span>Open Symptom Evaluation Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Action Strip: Respectful CTA & Confidential Guidance */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#F9E3E9]/60 via-[#F5F9FA] to-[#B9EDF3]/40 border border-pink-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#20B9D2] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#243746]">
                Confidential & Discreet Female Pharmacist Support Available
              </h4>
              <p className="text-xs text-[#546E7A] mt-0.5">
                Have confidential questions about discharge, pelvic supplements, or doctor prescriptions? Our female clinical staff is here to help.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onReadArticle('art-01')}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#F5F9FA] text-[#243746] text-xs font-bold border border-gray-200 shadow-xs transition-all"
            >
              Explore Women's Health Information
            </button>
            <button
              onClick={onExploreProducts}
              className="px-5 py-2.5 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold shadow-xs transition-all"
            >
              View Women's Health Products
            </button>
          </div>
        </div>

      </div>

      {/* Symptom Self-Evaluation Modal */}
      {showTriageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#20B9D2]" />
                <h3 className="text-lg font-bold text-[#243746]">
                  Leukorrhea & Vaginal Discharge Evaluation Guide
                </h3>
              </div>
              <button
                onClick={() => setShowTriageModal(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm text-[#546E7A]">
              <div className="p-4 rounded-2xl bg-[#DCFCE7]/60 border border-[#bbf7d0]">
                <p className="font-bold text-[#166534] mb-1">✓ Likely Normal / Physiological:</p>
                <p className="text-xs text-[#14532d]">
                  Clear, milky white, or stretchy discharge with no unpleasant odor, no itching, and no pelvic pain. Typically increases during ovulation or excitement. Supportive measures: Gentle hygiene, breathable cotton underwear, and oral probiotics.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FEF3C7] border border-[#fde68a]">
                <p className="font-bold text-[#92400e] mb-1">! Microbiome Imbalance (Consult Doctor / Pharmacist):</p>
                <p className="text-xs text-[#78350f]">
                  Grayish-white thin discharge with noticeable fishy odor (often bacterial vaginosis), or thick clumpy white discharge resembling curd/cottage cheese with external itching (often yeast infection). Requires targeted diagnosis rather than random washes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FEE2E2] border border-[#fca5a5]">
                <p className="font-bold text-[#991b1b] mb-1">⚠ Urgent Gynecological Attention Required:</p>
                <p className="text-xs text-[#7f1d1d]">
                  Discharge that is greenish, yellow-frothy, blood-tinged, or accompanied by pelvic cramps, pain during intercourse, fever, or lesions. Do not attempt home remedies. Visit an Obstetrician & Gynecologist promptly.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => {
                  setShowTriageModal(false);
                  onOpenConsultation();
                }}
                className="px-4 py-2 bg-[#20B9D2] text-white text-xs font-bold rounded-xl hover:bg-[#189bb0] transition-colors"
              >
                Request Free Female Pharmacist Guidance
              </button>
              <button
                onClick={() => setShowTriageModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
