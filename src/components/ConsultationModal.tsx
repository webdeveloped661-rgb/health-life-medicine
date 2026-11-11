import React, { useState } from 'react';
import { X, Stethoscope, PhoneCall, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState("Women's Health / Leukorrhea");
  const [preferredStaff, setPreferredStaff] = useState<'Female Pharmacist' | 'Male Pharmacist' | 'Any Qualified Pharmacist'>('Female Pharmacist');
  const [contactMode, setContactMode] = useState<'WhatsApp' | 'Phone Call' | 'Confidential Email'>('WhatsApp');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gray-100 overflow-hidden my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#243746] text-white">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#20B9D2]" />
            <h3 className="text-base font-bold">Confidential Pharmacist Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#243746]">Consultation Request Received</h4>
              <p className="text-xs text-[#546E7A] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. A licensed {preferredStaff.toLowerCase()} has received your inquiry regarding <em>{topic}</em>. We will reach out via {contactMode} discreetly within 20–30 minutes.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200 text-xs text-left text-[#546E7A] space-y-1">
                <p><strong>Strict Privacy Policy:</strong></p>
                <p>Your phone number and inquiry are kept 100% confidential under pharmaceutical privacy laws.</p>
              </div>

              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#B9EDF3]/40 border border-[#20B9D2]/30 text-xs text-[#243746] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#20B9D2] shrink-0" />
                  <span>Free, confidential pharmacist consultation. Female & male staff available.</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="tel:03007006133"
                    className="font-bold font-mono text-[#243746] hover:text-[#20B9D2] underline text-xs"
                  >
                    📞 0300 7006133
                  </a>
                  <a
                    href="https://wa.me/923007006133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-md bg-[#25D366] text-white font-bold text-[11px]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Your Full Name or Pseudonym *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Fatima or Ahmed"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Contact Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300 7006133"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#243746] mb-1">
                    Health Topic
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                  >
                    <option value="Women's Health / Leukorrhea">Women's Health (Leukorrhea / White Discharge)</option>
                    <option value="Men's Health / Vitality">Men's Health (Mardana Sehat & Vitality)</option>
                    <option value="General Reproductive Wellness">Reproductive & Fertility Wellness</option>
                    <option value="Prescription Review">Prescription & Dosage Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#243746] mb-1">
                    Preferred Pharmacist
                  </label>
                  <select
                    value={preferredStaff}
                    onChange={(e) => setPreferredStaff(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                  >
                    <option value="Female Pharmacist">Female Clinical Pharmacist</option>
                    <option value="Male Pharmacist">Male Clinical Pharmacist</option>
                    <option value="Any Qualified Pharmacist">Any Available Pharmacist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Preferred Contact Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['WhatsApp', 'Phone Call', 'Confidential Email'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setContactMode(mode)}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border transition-colors ${
                        contactMode === mode
                          ? 'bg-[#20B9D2] text-white border-[#20B9D2] font-bold'
                          : 'bg-[#F5F9FA] text-[#546E7A] border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Brief Description of Symptoms or Question (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Inquiring about lactobacillus dosage for recurring discharge..."
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#20B9D2]" />
                  <span>Available Mon-Sat: 9am - 10pm</span>
                </p>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
