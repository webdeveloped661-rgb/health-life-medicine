import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PromoCardsProps {
  onSelectPromo: (promoType: string) => void;
}

export const PromoCards: React.FC<PromoCardsProps> = ({ onSelectPromo }) => {
  const cards = [
    {
      id: 'womens-care',
      heading: "Women's Health Care",
      urdu: 'خواتین کی صحت و لیکوریا رہنمائی',
      description: "Explore women's wellness, vaginal microbiome support, and leukorrhea care.",
      cta: 'Learn More',
      bgColor: 'bg-[#F9E3E9]',
      borderColor: 'border-[#f3b5c7]',
      btnColor: 'bg-[#D81B60] hover:bg-[#b0134c]',
      image: '/src/assets/images/womens_health_care_1794389972955.jpg',
      target: 'womens-health'
    },
    {
      id: 'mens-care',
      heading: "Men's Health Care",
      urdu: 'مردانہ نگہداشت اور قدرتی طاقت',
      description: "Discover men's healthcare information, stamina formulations, and vitality guidance.",
      cta: 'Explore More',
      bgColor: 'bg-[#E0F2FE]',
      borderColor: 'border-[#bae6fd]',
      btnColor: 'bg-[#0284C7] hover:bg-[#0369a1]',
      image: '/src/assets/images/mens_health_care_1794389973036.jpg',
      target: 'mens-health'
    },
    {
      id: 'featured-meds',
      heading: 'Featured Medicine (PKR 500)',
      urdu: 'تصدیق شدہ فارمولیشن - صرف 500 روپے',
      description: 'Standardized healthcare formulation for leukorrhea care and vitality at only PKR 500.',
      cta: 'Order Now (Rs. 500)',
      bgColor: 'bg-[#DCFCE7]',
      borderColor: 'border-[#bbf7d0]',
      btnColor: 'bg-[#16A34A] hover:bg-[#15803d]',
      image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg',
      target: 'featured-medicine'
    },
    {
      id: 'pharmacist-consult',
      heading: 'Health & Wellness',
      urdu: 'مستند فارماسسٹ تصدیق و رہنمائی',
      description: 'Make informed healthcare decisions with qualified clinical pharmacist consultation.',
      cta: 'Discover More',
      bgColor: 'bg-[#FEF3C7]',
      borderColor: 'border-[#fde68a]',
      btnColor: 'bg-[#D97706] hover:bg-[#b45309]',
      image: '/src/assets/images/pharmacist_consultation_1794389974423.jpg',
      target: 'pharmacist-workflow'
    }
  ];

  return (
    <section className="py-14 bg-[#F5F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-wider font-bold text-[#20B9D2] mb-1">
            Care Pathways
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#243746]">
            Dedicated Care Categories & Guidance
          </h2>
          <p className="text-sm text-[#77838A] mt-2">
            Select a specialized category below to access tailored healthcare products, symptom education, and clinical oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectPromo(card.target)}
              className={`${card.bgColor} rounded-3xl p-5 border ${card.borderColor} shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-white/80 relative shadow-inner">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs p-1.5 rounded-full shadow-xs">
                    <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#243746]">
                  {card.heading}
                </h3>
                <p className="text-[12px] font-medium text-gray-500 mb-2">
                  {card.urdu}
                </p>

                <p className="text-xs text-[#546E7A] leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 ${card.btnColor}`}
                >
                  <span>{card.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
