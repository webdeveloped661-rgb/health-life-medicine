import React from 'react';
import { HealthArticle } from '../types';
import { X, Calendar, Clock, UserCheck, AlertTriangle, BookOpen, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: HealthArticle | null;
  onClose: () => void;
  onConsultationRequest: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsultationRequest
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-gray-100 overflow-hidden my-8 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F5F9FA]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20B9D2]">
              {article.category}
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500">{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Hero Image within Article */}
          <div className="rounded-2xl overflow-hidden h-56 sm:h-72 w-full bg-gray-100 relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#243746] leading-tight">
              {article.title}
            </h1>
            {article.urduTitle && (
              <p className="text-sm font-semibold text-[#20B9D2] mt-1.5">
                {article.urduTitle}
              </p>
            )}

            {/* Author Byline */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#546E7A] pb-4 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#20B9D2]" />
                <span>Reviewed by: <strong>{article.authorDoctor}</strong> ({article.authorRole})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.publishDate}</span>
              </div>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="p-4 rounded-2xl bg-[#B9EDF3]/30 border border-[#20B9D2]/30 text-sm font-medium text-[#243746] leading-relaxed">
            {article.summary}
          </div>

          {/* Clinical Warning if any */}
          {article.clinicalWarning && (
            <div className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] flex items-start gap-3 text-xs text-[#991B1B]">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong>Clinical Advisory:</strong>
                <p className="mt-0.5">{article.clinicalWarning}</p>
              </div>
            </div>
          )}

          {/* Sections */}
          <div className="space-y-6 text-sm text-[#37474F] leading-relaxed">
            {article.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-lg font-bold text-[#243746]">
                  {sec.heading}
                </h3>
                <p className="text-[#546E7A]">{sec.content}</p>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-2xl bg-[#F5F9FA] border border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#243746] mb-3">
              Key Medical Takeaways:
            </h4>
            <ul className="space-y-2 text-xs text-[#263238]">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20B9D2] shrink-0 mt-1.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Callout */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Need personalized medical clarification on this topic?
            </p>
            <button
              onClick={() => {
                onClose();
                onConsultationRequest();
              }}
              className="px-4 py-2 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl transition-colors"
            >
              Consult Clinical Pharmacist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
