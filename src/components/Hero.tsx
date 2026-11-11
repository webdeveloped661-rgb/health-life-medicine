import React, { useState } from 'react';
import { Search, Stethoscope, ArrowRight, BookOpen, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string, category: string) => void;
  onExploreMedicine: () => void;
  onLearnHealth: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onExploreMedicine,
  onLearnHealth
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCategory);
    const el = document.getElementById('featured-medicine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#DCFCE7]/60 via-[#F5F9FA] to-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-gray-100">
      {/* Decorative Subtle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#16a34a] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#B9EDF3] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Central & Left Healthcare Copy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Owner & Address Badge */}
            <div className="p-4 rounded-2xl bg-white border border-green-200 shadow-xs mb-5 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[30px] font-bold text-[#16a34a] leading-tight">
                  Tariq Mehmood (طارق محمود)
                </span>
                <span className="text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Mustahid Health Care Services
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 pt-1">
                <span className="text-red-500">📍 پتہ:</span>
                <span>میاں چنوں (Mian Channu)</span>
              </p>
            </div>

            {/* Special Highlight for Men's Body Pain */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 shadow-sm mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-[#16a34a] text-white text-xs font-bold">
                  خاص فائدہ
                </span>
                <span className="text-xs font-bold text-green-900 uppercase">
                  Clinically Proven For Men
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                یہ دوا مرد کے جسمانی درد، پٹھوں کے کھنچاؤ، جوڑوں اور کمر درد کے لیے بہت ہی بہترین اور لاجواب ہے!
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                جسم کی ہر قسم کی تھکن، اعصابی سستی اور کمزوری کو دور کر کے فوری توانائی اور سکون بخشتی ہے۔
              </p>
            </div>

            {/* Price Box with requested styles: red color, 22px, font-weight bold */}
            <div className="flex items-baseline gap-3 mb-5 p-3 rounded-xl bg-white border border-gray-200">
              <span className="text-xs text-gray-500 font-semibold">خصوصی قیمت:</span>
              <span className="text-[22px] font-bold text-[#dc2626] font-mono">
                صرف 500 روپے (PKR 500)
              </span>
              <span className="text-xs text-gray-400 line-through">1500 روپے</span>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">66% رعایت</span>
            </div>

            {/* Search Bar */}
            <form 
              onSubmit={handleSearchSubmit}
              className="p-1.5 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl mb-6"
            >
              <div className="relative flex-grow flex items-center px-3">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="دوا، جسمانی درد، یا اجزاء تلاش کریں..."
                  className="w-full pl-7 pr-3 py-2 text-sm text-[#263238] placeholder-gray-400 bg-transparent focus:outline-none"
                />
              </div>

              {/* Search button with requested green styling */}
              <button
                type="submit"
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-sm"
              >
                <span>تلاش کریں</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Main Action Buttons (User Styled: green, padding 12px 20px, rounded 10px, border none, font size 18px, font-weight bold) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>واٹس ایپ پر آرڈر کریں (0300 7006133)</span>
              </a>

              <button
                type="button"
                onClick={onExploreMedicine}
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center gap-2"
              >
                <Stethoscope className="w-5 h-5" />
                <span>دوا کی تفصیل دیکھیں</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-8 pt-5 border-t border-gray-200 grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-xs font-bold text-[#243746]">100% رازدارانہ پارسل</p>
                <p className="text-[11px] text-gray-500 mt-0.5">سادہ گتے کی پیکنگ</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#243746]">طارق محمود کی زیرِنگرانی</p>
                <p className="text-[11px] text-gray-500 mt-0.5">میاں چنوں برانچ</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#243746]">کیش آن ڈیلیوری</p>
                <p className="text-[11px] text-gray-500 mt-0.5">پورے پاکستان میں</p>
              </div>
            </div>

          </div>

          {/* Right Product Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft Aqua Glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#B9EDF3] to-[#A9D9B0]/40 rounded-3xl blur-xl opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/src/assets/images/hero_medical_composition_1794389971908.jpg"
                  alt="Clinical pharmaceutical medicine packaging, amber bottles and stethoscope"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Clinical Quality Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-gray-100 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#B9EDF3] flex items-center justify-center text-[#20B9D2] shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#20B9D2]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#243746]">Specialized Therapeutics</p>
                      <p className="text-[11px] text-gray-500">Targeted women's & men's care</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#20B9D2] bg-[#F5F9FA] px-2.5 py-1 rounded-md border border-[#20B9D2]/20">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
