import React, { useState } from 'react';
import { MedicineProduct } from '../types';
import { 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  Check, 
  Info,
  Package,
  FileCheck2
} from 'lucide-react';

interface ProductDetailModalProps {
  product: MedicineProduct | null;
  onClose: () => void;
  onAddToCart: (product: MedicineProduct, quantity: number) => void;
  onOpenConsultation: () => void;
  onOpenPrescriptionWorkflow: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenConsultation,
  onOpenPrescriptionWorkflow
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-gray-100 overflow-hidden my-8 relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F5F9FA]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20B9D2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#243746]">
              Verified Pharmaceutical & Nutraceutical Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-white transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Top Row: Visual + Primary Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image */}
            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#F5F9FA] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  {product.prescriptionRequired ? (
                    <span className="inline-flex items-center gap-1 bg-[#FEE2E2] text-[#991B1B] text-xs font-bold px-2.5 py-1 rounded-lg border border-[#FCA5A5] shadow-xs">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Prescription Required</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-[#DCFCE7] text-[#166534] text-xs font-bold px-2.5 py-1 rounded-lg border border-[#BBF7D0] shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Authorized Formulation</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Package and Manufacturer Meta */}
              <div className="mt-4 p-4 rounded-xl bg-[#F5F9FA] border border-gray-100 text-xs text-[#546E7A] space-y-2">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#20B9D2] shrink-0" />
                  <span><strong>Packing:</strong> {product.packageSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#20B9D2] shrink-0" />
                  <span><strong>Manufacturer:</strong> {product.manufacturer}</span>
                </div>
                {product.drapRegNumber && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Regulatory Number:</strong> {product.drapRegNumber}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Key Product Specifications & Buying Action */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#20B9D2]">
                  {product.categoryLabel}
                </p>

                <h2 className="text-2xl font-bold text-[#243746] mt-1">
                  {product.name}
                </h2>
                {product.urduName && (
                  <p className="text-sm font-medium text-gray-500 mt-0.5">
                    {product.urduName}
                  </p>
                )}

                <p className="text-xs font-mono text-gray-600 mt-2 bg-gray-100/70 p-2 rounded-lg border border-gray-200">
                  <strong>Active Molecule / Extracts:</strong> {product.genericName}
                </p>

                <p className="text-sm text-[#546E7A] mt-4 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Price Display */}
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#243746] font-mono tabular-nums">
                    {product.currency} {product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400">
                    (Standard Retail Price / Inclusive of Taxes)
                  </span>
                </div>

                {product.prescriptionRequired && (
                  <div className="mt-4 p-3 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Prescription Medicine Notice:</p>
                      <p className="mt-0.5">
                        This pharmaceutical item strictly requires prescription verification by our clinical pharmacist before dispatch in compliance with DRAP regulations.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector & Action Buttons */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-[#243746] font-mono tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-grow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white font-bold text-sm shadow-sm transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {product.prescriptionRequired ? 'Add & Upload Prescription' : 'Add to Medicine Bag'}
                  </span>
                </button>

                {product.prescriptionRequired && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenPrescriptionWorkflow();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#B9EDF3] hover:bg-[#a0e4ed] text-[#243746] font-bold text-xs transition-all"
                  >
                    <FileCheck2 className="w-4 h-4 text-[#20B9D2]" />
                    <span>Upload Prescription Directly</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Deep Clinical Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            
            {/* Verified Ingredients */}
            <div className="p-5 rounded-2xl bg-[#F5F9FA] border border-gray-200">
              <h4 className="text-sm font-bold text-[#243746] flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#20B9D2]" />
                <span>Verified Ingredients & Dosages</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#263238]">
                {product.verifiedIngredients.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#20B9D2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approved Intended Uses */}
            <div className="p-5 rounded-2xl bg-[#F5F9FA] border border-gray-200">
              <h4 className="text-sm font-bold text-[#243746] flex items-center gap-2 mb-3">
                <Check className="w-4 h-4 text-[#16A34A]" />
                <span>Approved Indications & Usage</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#263238]">
                {product.approvedUses.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contraindications */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h4 className="text-sm font-bold text-[#92400E] flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Contraindications (When Not to Use)</span>
              </h4>
              <ul className="space-y-1 text-xs text-[#78350F]">
                {product.contraindications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Possible Side Effects & Safety Info */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-sm font-bold text-[#243746] flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-gray-500" />
                <span>Safety Information & Side Effects</span>
              </h4>
              <p className="text-xs text-[#546E7A] leading-relaxed mb-2">
                {product.safetyInfo}
              </p>
              <div className="text-[11px] text-gray-500">
                <strong>Possible Side Effects:</strong>{' '}
                {product.possibleSideEffects.join(', ')}
              </div>
            </div>

          </div>

          {/* Mandatory Consult Healthcare Professional Callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#B9EDF3]/40 via-white to-[#F5F9FA] border border-[#20B9D2]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#20B9D2] text-white flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#243746]">
                  Consult a Qualified Healthcare Professional
                </h4>
                <p className="text-xs text-[#546E7A]">
                  This product does not replace clinical diagnosis. Always discuss changes to your regimen with a doctor or our pharmacist.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-4 py-2.5 rounded-xl bg-[#243746] hover:bg-[#1b2b37] text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              Ask Our Pharmacist Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
