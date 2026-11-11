import React from 'react';
import { Sparkles, Activity, FileText, UserCheck, ArrowRight } from 'lucide-react';

interface ServiceFeaturesProps {
  onSelectFeature: (featureId: string) => void;
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ onSelectFeature }) => {
  const features = [
    {
      id: 'womens-health',
      title: "Women's Health",
      urdu: 'خواتین کی صحت و لیکوریا کیئر',
      description: "Information and healthcare products related to women's reproductive wellness, white discharge, and pH flora balance.",
      icon: Sparkles,
      iconBg: 'bg-[#F9E3E9]',
      iconColor: 'text-[#D81B60]',
      linkText: 'Explore Women’s Care'
    },
    {
      id: 'mens-health',
      title: "Men's Health",
      urdu: 'مردانہ صحت و توانائی',
      description: "Healthcare information and clinically formulated products for men's wellness, stamina, and reproductive vitality.",
      icon: Activity,
      iconBg: 'bg-[#E0F2FE]',
      iconColor: 'text-[#0284C7]',
      linkText: 'Explore Men’s Care'
    },
    {
      id: 'medical-guidance',
      title: 'Medical Guidance',
      urdu: 'طبی رہنمائی و مشورہ',
      description: 'Understand your symptoms and learn when to consult a qualified gynecologist, urologist, or healthcare professional.',
      icon: UserCheck,
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
      linkText: 'Read Medical Guides'
    },
    {
      id: 'product-info',
      title: 'Product Information',
      urdu: 'دواؤں کی تفصیلی معلومات',
      description: 'Explore verified active ingredients, approved uses, contraindications, and regulatory DRAP safety profiles.',
      icon: FileText,
      iconBg: 'bg-[#B9EDF3]',
      iconColor: 'text-[#0e7490]',
      linkText: 'View Medicine Catalog'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                onClick={() => onSelectFeature(feature.id)}
                className="group relative p-6 bg-[#F5F9FA] hover:bg-white rounded-2xl border border-transparent hover:border-[#20B9D2]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Circular Pastel Icon Container */}
                  <div className={`w-14 h-14 rounded-full ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-[#243746] group-hover:text-[#20B9D2] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] font-medium text-gray-400 mb-2">
                    {feature.urdu}
                  </p>

                  <p className="text-sm text-[#546E7A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200/60 flex items-center text-xs font-semibold text-[#20B9D2] group-hover:text-[#188ea1]">
                  <span>{feature.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
