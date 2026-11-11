import React, { useState } from 'react';
import { 
  X, 
  FileCheck2, 
  Upload, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  Stethoscope, 
  PhoneCall, 
  Copy, 
  Search,
  FileText
} from 'lucide-react';

interface PharmacistWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrescriptionSubmitted?: (rxId: string) => void;
}

export const PharmacistWorkflowModal: React.FC<PharmacistWorkflowModalProps> = ({
  isOpen,
  onClose,
  onPrescriptionSubmitted
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'upload' | 'status' | 'policy'>('upload');
  
  // Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string; preview: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Status Search State
  const [searchRxId, setSearchRxId] = useState('');
  const [statusResult, setStatusResult] = useState<{
    id: string;
    patient: string;
    status: 'Verified' | 'Under Review' | 'Clarification Required';
    pharmacist: string;
    timestamp: string;
    medicines: string[];
    notes: string;
  } | null>(null);

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const handleDropSimulation = () => {
    setUploadedFile({
      name: 'Prescription_Dr_Siddiqui_Oct2026.pdf',
      size: '1.42 MB',
      preview: '/src/assets/images/pharmacist_consultation_1794389974423.jpg'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile && !notes) {
      alert('Please upload a prescription document or add prescription notes.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newId = `RX-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedId(newId);
      if (onPrescriptionSubmitted) {
        onPrescriptionSubmitted(newId);
      }
    }, 1200);
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchRxId.trim().toUpperCase();
    if (!query) return;

    if (query === 'RX-9821' || query === submittedId) {
      setStatusResult({
        id: query,
        patient: patientName || 'Fatima K.',
        status: 'Verified',
        pharmacist: 'PharmD S. Farooq (License #PH-9812-PB)',
        timestamp: 'Today at 10:14 AM PKT',
        medicines: ['Fluconazole 150mg Single Dose', 'FeminaCura Vaginal Flora Support'],
        notes: 'Prescription verified with registered clinic. Dosage reviewed and approved for standard 150mg single oral administration. Packed in 100% discreet parcel.'
      });
    } else {
      setStatusResult({
        id: query,
        patient: 'Patient Record',
        status: 'Under Review',
        pharmacist: 'Duty Clinical Pharmacist',
        timestamp: 'Under verification (typically 15-30 minutes)',
        medicines: ['Pending document review'],
        notes: 'Document received. Pharmacist is currently checking physician registration number and contraindications.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-gray-100 overflow-hidden my-8 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#243746] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#20B9D2] flex items-center justify-center text-white">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Pharmacist Prescription Verification & Purchase Workflow</h3>
              <p className="text-[11px] text-[#B9EDF3]">DRAP Compliance & Patient Safety Protocol</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-gray-200 bg-[#F5F9FA] px-6">
          <button
            onClick={() => setActiveTab('upload')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'upload'
                ? 'border-[#20B9D2] text-[#20B9D2]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            1. Upload Prescription
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'status'
                ? 'border-[#20B9D2] text-[#20B9D2]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            2. Track Prescription Status
          </button>
          <button
            onClick={() => setActiveTab('policy')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'policy'
                ? 'border-[#20B9D2] text-[#20B9D2]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            3. Prescription & Purchase Policy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          
          {/* TAB 1: UPLOAD */}
          {activeTab === 'upload' && (
            <div>
              {submittedId ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#243746]">Prescription Received Successfully!</h4>
                  <p className="text-sm text-[#546E7A] mt-2 max-w-lg mx-auto">
                    Your document has been securely routed to our licensed clinical pharmacist for review in accordance with DRAP standards.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200 inline-block text-left">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Verification Tracking ID:</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xl font-mono font-extrabold text-[#20B9D2]">{submittedId}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(submittedId);
                          alert(`Tracking ID ${submittedId} copied to clipboard!`);
                        }}
                        className="p-1.5 text-gray-500 hover:text-[#20B9D2] hover:bg-white rounded-lg transition-colors"
                        title="Copy Tracking ID"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    Our clinical pharmacist will verify within <strong>15–30 minutes</strong> during operational hours. You will receive an SMS confirmation once approved.
                  </p>

                  <div className="mt-8 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSearchRxId(submittedId);
                        setActiveTab('status');
                      }}
                      className="px-5 py-2.5 bg-[#20B9D2] text-white text-xs font-bold rounded-xl hover:bg-[#189bb0] transition-colors"
                    >
                      Track This Prescription Status
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Explanation Banner */}
                  <div className="p-4 rounded-2xl bg-[#B9EDF3]/40 border border-[#20B9D2]/30 flex items-start gap-3 text-xs text-[#243746]">
                    <ShieldAlert className="w-5 h-5 text-[#20B9D2] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">How Prescription Handling Works:</p>
                      <p className="mt-1 text-[#546E7A] leading-relaxed">
                        To protect patient safety, prescription medicines (such as single-dose antifungal Fluconazole) cannot be dispensed without licensed verification. Upload your doctor's prescription slip, photo, or clinic discharge summary below.
                      </p>
                    </div>
                  </div>

                  {/* Drag and Drop Zone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#243746] mb-2">
                      Upload Prescription Slip (JPG, PNG, or PDF)
                    </label>

                    {uploadedFile ? (
                      <div className="p-4 rounded-2xl bg-[#DCFCE7]/60 border border-[#bbf7d0] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-[#16A34A]" />
                          <div>
                            <p className="text-xs font-bold text-[#14532d]">{uploadedFile.name}</p>
                            <p className="text-[11px] text-gray-500 font-mono">{uploadedFile.size} · Ready for review</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="text-xs font-bold text-red-600 hover:underline p-1"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 hover:border-[#20B9D2] rounded-2xl p-6 text-center bg-[#F5F9FA] transition-colors relative">
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={handleSimulatedFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-[#243746]">Click or drag & drop prescription image</p>
                        <p className="text-xs text-gray-500 mt-1">Accepts camera photos, WhatsApp scans, or PDF documents</p>
                        <button
                          type="button"
                          onClick={handleDropSimulation}
                          className="mt-3 text-xs text-[#20B9D2] font-bold hover:underline"
                        >
                          (Or click here to use a sample medical prescription for testing)
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Patient Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#243746] mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Fatima Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#243746] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#243746] mb-1">
                        Prescribing Doctor or Hospital (Optional)
                      </label>
                      <input
                        type="text"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        placeholder="e.g. Dr. Ayesha Siddiqui, FCPS"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#243746] mb-1">
                        Patient Email (For confirmation)
                      </label>
                      <input
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#243746] mb-1">
                      Additional Pharmacist Notes or Allergies
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. History of penicillin allergy, recurring leukorrhea for 3 weeks..."
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#20B9D2]" />
                      <span>Average clinical pharmacist response: 15–30 mins</span>
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Encrypting & Submitting...</span>
                      ) : (
                        <>
                          <FileCheck2 className="w-4 h-4" />
                          <span>Submit for Pharmacist Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: STATUS CHECK */}
          {activeTab === 'status' && (
            <div className="space-y-6">
              <form onSubmit={handleStatusSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchRxId}
                  onChange={(e) => setSearchRxId(e.target.value)}
                  placeholder="Enter Prescription Tracking Code (e.g. RX-9821)"
                  className="flex-grow px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Search className="w-4 h-4" />
                  <span>Track</span>
                </button>
              </form>

              <div className="text-[11px] text-gray-500">
                Tip: Try test tracking ID <button type="button" onClick={() => setSearchRxId('RX-9821')} className="font-mono font-bold text-[#20B9D2] underline">RX-9821</button> to see an approved clinical verification example.
              </div>

              {statusResult && (
                <div className="p-6 rounded-3xl bg-[#F5F9FA] border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Prescription Reference</p>
                      <p className="text-lg font-mono font-extrabold text-[#243746]">{statusResult.id}</p>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      statusResult.status === 'Verified'
                        ? 'bg-[#DCFCE7] text-[#166534] border border-[#bbf7d0]'
                        : 'bg-[#FEF3C7] text-[#92400e] border border-[#fde68a]'
                    }`}>
                      {statusResult.status === 'Verified' ? '✓ Verified by Pharmacist' : '⏱ ' + statusResult.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#546E7A]">
                    <div>
                      <strong>Patient Name:</strong> {statusResult.patient}
                    </div>
                    <div>
                      <strong>Reviewing Pharmacist:</strong> {statusResult.pharmacist}
                    </div>
                    <div>
                      <strong>Last Updated:</strong> {statusResult.timestamp}
                    </div>
                    <div>
                      <strong>Approved Medicines:</strong> {statusResult.medicines.join(', ')}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs text-[#263238]">
                    <strong>Clinical Pharmacist Remarks:</strong>
                    <p className="mt-1 text-[#546E7A] leading-relaxed">{statusResult.notes}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: POLICY */}
          {activeTab === 'policy' && (
            <div className="space-y-4 text-xs text-[#546E7A] leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200">
                <h4 className="font-bold text-sm text-[#243746] mb-1">Category 1: OTC & Nutraceuticals (Direct Purchase)</h4>
                <p>
                  Nutritional supplements, herbal extracts (e.g. KSM-66 Ashwagandha, Shilajit, Cranberry PAC, Probiotics), and external hygiene cleansers are classified under DRAP Nutraceutical regulations. These do not require an uploaded doctor slip and may be ordered directly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200">
                <h4 className="font-bold text-sm text-[#243746] mb-1">Category 2: Scheduled Pharmaceuticals (Prescription Mandatory)</h4>
                <p>
                  Oral antifungals (Fluconazole) and antibacterial medications strictly require verification of an authentic medical prescription. Orders containing these items remain on hold until verified by our on-duty clinical pharmacist.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200">
                <h4 className="font-bold text-sm text-[#243746] mb-1">Discreet Packaging & Data Confidentiality</h4>
                <p>
                  All orders are dispatched in opaque, unbranded outer parcels. Neither the courier nor external handlers have visibility into the contents or medical indications. All uploaded medical records are encrypted and retained strictly for pharmacovigilance audits.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
