import React, { useState } from 'react';
import { Search, ShieldAlert, Sparkles, Stethoscope, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { ProductCategory } from '../types';

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
    // Smooth scroll to featured medicine section
    const el = document.getElementById('featured-medicine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#B9EDF3]/40 via-[#F5F9FA] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-gray-100">
      {/* Decorative Subtle Medical Background Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#20B9D2] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#B9EDF3] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Central & Left Healthcare Copy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/90 border border-[#20B9D2]/30 text-xs font-medium text-[#243746] shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#20B9D2]" />
              <span>Evidence-Based Reproductive & Hormonal Healthcare</span>
              <span className="text-gray-300">|</span>
              <span className="text-[#20B9D2] font-semibold">DRAP Standards Compliant</span>
            </div>

            {/* Main Headings */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243746] tracking-tight leading-[1.15] text-balance">
              Your Health Deserves <span className="text-[#20B9D2]">Trusted Care</span>
            </h1>
            
            <h2 className="mt-3 text-lg sm:text-xl font-semibold text-[#37474F] text-balance">
              Specialized Healthcare Solutions for Women's & Men's Health
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#546E7A] leading-relaxed max-w-2xl">
              Explore healthcare products and reliable health information focused on women's wellness, leukorrhea (white discharge) management, and men's health. Discover our product range and learn when professional medical advice is essential.
            </p>

            {/* Large Integrated Search Bar with Category Dropdown */}
            <form 
              onSubmit={handleSearchSubmit}
              className="mt-8 p-1.5 bg-white rounded-2xl shadow-md border border-[#20B9D2]/30 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl"
            >
              <div className="flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 px-3 py-2 sm:py-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#243746] focus:outline-none cursor-pointer py-1"
                  aria-label="Filter search by category"
                >
                  <option value="all">All Categories</option>
                  <option value="womens_health">Women's Health (Leukorrhea)</option>
                  <option value="mens_health">Men's Health (Mardana Sehat)</option>
                  <option value="reproductive">Reproductive Wellness</option>
                </select>
              </div>

              <div className="relative flex-grow flex items-center px-3">
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by ingredient, concern (e.g. Leukorrhea, Vitality), or product..."
                  className="w-full pl-7 pr-3 py-2 text-sm text-[#263238] placeholder-gray-400 bg-transparent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#20B9D2] hover:bg-[#199bb0] text-white text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#20B9D2] shrink-0"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Two Main Call To Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMedicine}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#20B9D2] hover:bg-[#199bb0] text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Explore Our Medicine</span>
              </button>

              <button
                onClick={onLearnHealth}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F9FA] text-[#243746] font-semibold text-sm border border-gray-200 hover:border-[#20B9D2]/50 transition-all shadow-xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#20B9D2]" />
                <span>Learn About Health</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs font-bold text-[#243746]">100% Confidential</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Plain outer delivery parcel</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#243746]">DRAP Standard</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Authorized formulations</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#243746]">Clinical Review</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Pharmacist verification</p>
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
