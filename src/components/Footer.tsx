import React, { useState } from 'react';
import { HeartHandshake, Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
  onOpenConsultation: () => void;
  onOpenPrescriptionWorkflow: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenConsultation,
  onOpenPrescriptionWorkflow
}) => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; body: string } | null>(null);

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      title: 'Patient Privacy & Discreet Delivery Policy',
      body: 'Healthy Life Medicine maintains strict medical confidentiality. All customer records, consultation queries with our clinical pharmacists, and uploaded prescription documents are encrypted. We never share, sell, or disclose your data to third-party advertisers. All orders are packed in opaque, plain cardboard boxes with no mention of medicine names or therapeutic indications.'
    });
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      title: 'Terms & Conditions of Dispensing',
      body: 'All products are distributed strictly in compliance with applicable pharmaceutical regulations and DRAP standards. Prescription medicines require validation by our licensed clinical staff before dispatch. Over-the-counter nutraceuticals are intended for supportive wellness and do not replace formal clinical assessment by a registered physician.'
    });
  };

  const openDisclaimer = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      title: 'Complete Healthcare & Regulatory Disclaimer',
      body: 'The content, articles, and product information published on Healthy Life Medicine are for informational and educational purposes only. They do not constitute personalized medical advice. If you suffer from severe abdominal pain, persistent abnormal discharge with fever, or complex reproductive issues, please visit an accredited medical clinic or hospital emergency room immediately.'
    });
  };

  return (
    <footer id="contact-us" className="bg-[#243746] text-white pt-16 pb-12 border-t border-[#2e4557]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#30485b]">
          
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white shadow-xs shrink-0 mt-1">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[30px] font-bold text-[#16a34a] leading-tight block">
                  Tariq Mehmood
                </span>
                <span className="block text-xs font-semibold text-gray-300">
                  Healthy Life Medicine · Mustahid Health Care Services
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed pr-2">
              یہ دوا مرد کے جسمانی درد، کمر درد، پٹھوں کے کھنچاؤ اور اعصابی کمزوری کے لیے انتہائی بہترین ہے۔ جسم میں فوری طاقت اور توانائی بحال کرتی ہے۔
            </p>

            <div className="p-3 rounded-xl bg-[#2e4557] border border-green-500/30 text-xs text-green-300">
              <p className="font-bold text-sm text-white">📍 مستقل پتہ:</p>
              <p className="mt-0.5 font-bold text-white">میاں چنوں (Mian Channu)</p>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavClick('#home')}
                  className="hover:text-[#20B9D2] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#about-us')}
                  className="hover:text-[#20B9D2] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#womens-health')}
                  className="hover:text-[#20B9D2] transition-colors"
                >
                  Women's Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#mens-health')}
                  className="hover:text-[#20B9D2] transition-colors"
                >
                  Men's Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#featured-medicine')}
                  className="hover:text-[#20B9D2] transition-colors"
                >
                  Our Medicine Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Health Resources & Verification (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Health Resources
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavClick('#health-blog')}
                  className="hover:text-[#20B9D2] transition-colors text-left"
                >
                  Educational Health Articles
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescriptionWorkflow}
                  className="hover:text-[#20B9D2] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Prescription Verification Service</span>
                  <ExternalLink className="w-3 h-3 text-[#20B9D2]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#20B9D2] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Consult Clinical Pharmacist</span>
                  <ExternalLink className="w-3 h-3 text-[#20B9D2]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#womens-health')}
                  className="hover:text-[#20B9D2] transition-colors text-left"
                >
                  Leukorrhea Symptom Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={openDisclaimer}
                  className="hover:text-[#20B9D2] transition-colors text-left"
                >
                  Medicine Safety Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Dispensing Info (col-span-3) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-gray-300">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Contact & Address
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <span className="text-white font-bold">میاں چنوں (Mian Channu)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16a34a] shrink-0" />
                <a href="tel:03007006133" className="hover:text-green-400 font-mono tabular-nums font-bold text-white text-sm">
                  0300 7006133
                </a>
              </div>
              
              {/* WhatsApp Button Styled as requested */}
              <div className="pt-2">
                <a 
                  href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md w-full inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp: 0300 7006133</span>
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-[11px] text-gray-400">
                <Clock className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span>Mon – Sun: 9:00 AM – 10:00 PM PKT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Healthy Life Medicine. All rights reserved. Made for professional healthcare awareness.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={openPrivacy}
              className="hover:text-[#20B9D2] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={openTerms}
              className="hover:text-[#20B9D2] transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={openDisclaimer}
              className="hover:text-[#20B9D2] transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Policy Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-[#243746] shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-base font-bold text-[#243746]">{legalModalContent.title}</h3>
              <button
                onClick={() => setLegalModalContent(null)}
                className="text-gray-400 hover:text-gray-600 font-bold p-1"
              >
                ✕
              </button>
            </div>
            <p className="mt-4 text-xs text-[#546E7A] leading-relaxed">
              {legalModalContent.body}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 bg-[#20B9D2] text-white text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
