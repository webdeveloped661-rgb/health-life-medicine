import React from 'react';
import { FileSearch, BookOpenCheck, UserCheck, Headset } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Clear Product Information',
      urdu: 'شفاف اجزاء اور درست معلومات',
      description: 'Access full ingredient disclosures, standardized botanical percentages, and verified DRAP registration dossiers before purchase.',
      icon: FileSearch,
      bgColor: 'bg-[#B9EDF3]/40',
      iconColor: 'text-[#0e7490]'
    },
    {
      title: 'Healthcare Awareness',
      urdu: 'مستند طبی آگاہی اور تحقیق',
      description: 'Evidence-based clinical articles and guides reviewed by medical doctors, obstetricians, and clinical pharmacists.',
      icon: BookOpenCheck,
      bgColor: 'bg-[#F9E3E9]',
      iconColor: 'text-[#D81B60]'
    },
    {
      title: 'Professional Guidance',
      urdu: 'ماہر کلینکل فارماسسٹ معاونت',
      description: 'Prescription verification workflow and private consultation with male and female healthcare professionals.',
      icon: UserCheck,
      bgColor: 'bg-[#E0F2FE]',
      iconColor: 'text-[#0284C7]'
    },
    {
      title: 'Customer Assistance',
      urdu: '100% پرائیویٹ اور محفوظ ڈلیوری',
      description: 'Dedicated patient support and discreet plain packaging ensuring total peace of mind for sensitive reproductive care.',
      icon: Headset,
      bgColor: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-wider font-bold text-[#20B9D2] mb-1">
            Our Healthcare Standards
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            Why Choose Healthy Life Medicine
          </h2>
          <p className="text-sm sm:text-base text-[#546E7A] mt-3 leading-relaxed">
            We operate with the highest standards of medical ethics, consumer safety, and clinical transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#F5F9FA] border border-gray-100 hover:border-[#20B9D2]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-13 h-13 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#243746]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-gray-400 mb-2">
                    {item.urdu}
                  </p>

                  <p className="text-xs sm:text-sm text-[#546E7A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/50 flex items-center gap-1.5 text-[11px] font-bold text-[#20B9D2]">
                  <span>Verified Standard</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
