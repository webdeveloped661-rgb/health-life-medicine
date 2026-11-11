import React, { useState } from 'react';
import { HeartHandshake, Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#20B9D2] flex items-center justify-center text-white shadow-xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Healthy Life
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#B9EDF3]">
                  Medicine & Care
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed pr-4">
              A specialized healthcare platform dedicated to providing verified medicines, scientific awareness, and pharmacist consultations for women's reproductive health, leukorrhea (white discharge), and men's wellness.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#A9D9B0]">
              <ShieldCheck className="w-4 h-4 text-[#A9D9B0] shrink-0" />
              <span>DRAP Standard Compliant · Registered Clinical Staff</span>
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
              Contact & Support
            </h4>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                <span>Gulberg III Healthcare Plaza, Main Boulevard, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#20B9D2] shrink-0" />
                <a href="tel:+9204235789000" className="hover:text-[#20B9D2] font-mono tabular-nums">
                  +92 (042) 3578-9000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#20B9D2] shrink-0" />
                <a href="mailto:care@healthylifemedicine.com" className="hover:text-[#20B9D2]">
                  care@healthylifemedicine.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#20B9D2] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 10:00 PM PKT<br/>Sunday: Emergency On-Call</span>
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
