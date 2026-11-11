import React from 'react';
import { MedicineProduct } from '../types';
import { CATEGORY_FILTERS } from '../data/medicineData';
import { ShieldCheck, Info, ShoppingBag, Eye, Stethoscope, AlertCircle, Phone, MessageSquare, CheckCircle2, Truck } from 'lucide-react';

interface FeaturedMedicineProps {
  products: MedicineProduct[];
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
  onSelectProduct: (product: MedicineProduct) => void;
  onAddToCart: (product: MedicineProduct) => void;
  onOpenConsultation: () => void;
  searchFilterQuery?: string;
}

export const FeaturedMedicine: React.FC<FeaturedMedicineProps> = ({
  products,
  selectedFilter,
  onFilterChange,
  onSelectProduct,
  onAddToCart,
  onOpenConsultation,
  searchFilterQuery = ''
}) => {
  // Filter products based on category and optional search query
  const filteredProducts = products.filter((product) => {
    // If only 1 product exists in the catalog, keep it visible across category clicks
    const matchesCategory = selectedFilter === 'all' || products.length === 1 || product.category === selectedFilter;
    const matchesSearch = !searchFilterQuery || 
      product.name.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      product.genericName.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      product.verifiedIngredients.some(ing => ing.toLowerCase().includes(searchFilterQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="featured-medicine" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold mb-3">
            <span>Special Formulation · تصدیق شدہ فارمولیشن</span>
          </div>

          {/* User Name: green color, 30px size, bold */}
          <div className="mb-2">
            <h1 className="text-[30px] font-bold text-[#16a34a] tracking-tight leading-tight">
              Tariq Mehmood (طارق محمود)
            </h1>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              📍 پتہ: میاں چنوں (Mian Channu) · Mustahid Health Care Services
            </p>
          </div>

          {/* Men's Body Pain Highlight */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 border-2 border-green-500 shadow-sm text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#16a34a] text-white text-xs font-bold px-2 py-0.5 rounded">خاص طبی فائدہ</span>
              <span className="text-xs font-bold text-green-900">Highly Recommended</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              یہ دوا مرد کے جسمانی درد، پٹھوں کے کھنچاؤ، کمر درد اور سستی کے لیے بہت ہی بہترین اور لاجواب ہے!
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 mt-1">
              پرانے سے پرانے جسمانی درد، کندھوں کے کھنچاؤ، ہڈیوں کے درد اور تھکن میں حیرت انگیز فائدہ پہنچاتی ہے۔ جسم میں نئی طاقت اور تازگی لاتی ہے۔
            </p>
          </div>
        </div>

        {/* Category Filter Tabs or Special Badge */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange(cat.id)}
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-xs cursor-pointer"
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Search Banner Notice if Searching */}
        {searchFilterQuery && (
          <div className="mb-8 p-3 rounded-xl bg-[#F5F9FA] border border-gray-200 flex items-center justify-between text-xs text-[#243746]">
            <span>
              Showing results matching: <strong>"{searchFilterQuery}"</strong> ({filteredProducts.length} items found)
            </span>
            <button
              onClick={() => onFilterChange('all')}
              className="text-[#16a34a] hover:underline font-bold text-sm"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* Product Display */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F5F9FA] rounded-3xl border border-dashed border-gray-300">
            <Info className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#243746]">No medicines found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              We couldn't find products matching your filter criteria. Reset the search query to view the featured formulation.
            </p>
            <button
              onClick={() => onFilterChange('all')}
              className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold mt-4"
            >
              Reset Filters
            </button>
          </div>
        ) : filteredProducts.length === 1 ? (
          /* Single Featured Spotlight Presentation */
          <div className="max-w-4xl mx-auto">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl border-2 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 md:grid-cols-12"
              >
                {/* Product Image Section */}
                <div className="md:col-span-5 bg-[#F5F9FA] relative p-6 flex flex-col justify-between items-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="w-full relative rounded-2xl overflow-hidden shadow-sm bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                      <span className="inline-flex items-center gap-1 bg-[#DCFCE7] text-[#166534] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#BBF7D0] shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>مردانہ جسمانی درد کا شافی علاج</span>
                      </span>
                      <span className="text-[10px] font-mono font-medium text-gray-700 bg-white/95 px-2 py-0.5 rounded border border-gray-200">
                        طارق محمود - میاں چنوں
                      </span>
                    </div>
                  </div>

                  {/* Trust Highlights */}
                  <div className="mt-4 w-full grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-gray-100">
                      <Truck className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>محفوظ و رازدارانہ ترسیل</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>کیش آن ڈیلیوری</span>
                    </div>
                  </div>
                </div>

                {/* Product Information Section */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Tariq Mehmood Name Heading (Green, 30px, Bold) */}
                    <div className="border-b border-gray-100 pb-3 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#16a34a]">
                          نگران و معالج:
                        </span>
                        <span className="text-xs font-bold text-[#16a34a] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">
                          دستیاب ہے (In Stock)
                        </span>
                      </div>
                      <h2 className="text-[30px] font-bold text-[#16a34a] leading-tight mt-0.5">
                        Tariq Mehmood (طارق محمود)
                      </h2>
                      <p className="text-xs font-medium text-gray-600 mt-1">
                        📍 پتہ: میاں چنوں (Mian Channu) · Mustahid Health Care Services
                      </p>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#243746]">
                      {product.name}
                    </h3>

                    {/* Men's Body Pain Highlight Box inside Card */}
                    <div className="my-3 p-3.5 rounded-xl bg-green-50 border border-green-300">
                      <p className="text-sm font-bold text-green-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>یہ دوا خاص طور پر مرد کے جسمانی درد، جوڑوں کے درد اور پٹھوں کی کمزوری کے لیے بہت بہترین ہے!</span>
                      </p>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-[#546E7A] leading-relaxed">
                      {product.fullDescription}
                    </p>

                    {/* Active Verified Ingredients */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                        خاص اجزائے ترکیبی (قدرتی نباتات):
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.verifiedIngredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-800 bg-[#F5F9FA] px-2.5 py-1 rounded-lg border border-gray-200"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dosage & Package info */}
                    <div className="mt-3 p-3 rounded-2xl bg-[#F5F9FA] border border-gray-100 text-xs text-[#546E7A] space-y-1">
                      <p><strong>پیکنگ:</strong> {product.packageSize}</p>
                      <p><strong>طریقہ استعمال:</strong> {product.dosageGuide}</p>
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-4">
                    {/* Price with user specifications: red color, 22px, bold font-weight */}
                    <div className="flex items-baseline justify-between bg-red-50/70 p-3 rounded-xl border border-red-200">
                      <div>
                        <span className="text-xs text-gray-600 block">رعایتی قیمت:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[22px] font-bold text-[#dc2626] font-mono">
                            {product.currency} {product.price} (صرف 500 روپے)
                          </span>
                          <span className="text-xs text-gray-400 line-through">1,500 روپے</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">
                        66% رعایت
                      </span>
                    </div>

                    {/* Action buttons with user specification: color green, padding 12px 20px, border-radius 10px, border none, font-size 18px */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>واٹس ایپ آرڈر (0300 7006133)</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        <span>آن لائن آرڈر کریں</span>
                      </button>
                    </div>

                    <div className="text-center pt-1">
                      <a 
                        href="tel:03007006133" 
                        className="text-sm font-bold text-gray-700 hover:text-[#16a34a] inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-4 h-4 text-[#16a34a]" />
                        <span>براہِ راست فون کال پر رہنمائی و آرڈر: <strong className="text-[#16a34a]">0300 7006133</strong></span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-gray-200/80 hover:border-[#20B9D2]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="relative w-full h-52 bg-[#F5F9FA] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    <span className="inline-flex items-center gap-1 bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#BBF7D0] shadow-xs">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Nutraceutical / OTC</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#20B9D2]">
                      {product.categoryLabel}
                    </p>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="mt-1 text-base font-bold text-[#243746] hover:text-[#20B9D2] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 font-mono line-clamp-1">
                      {product.genericName}
                    </p>
                    <p className="mt-2 text-xs text-[#546E7A] line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] text-gray-400 font-medium">Standard Pack</p>
                      <p className="text-base font-extrabold text-[#243746] font-mono tabular-nums">
                        {product.currency} {product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Pharmacist Consultation Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#77838A] max-w-2xl mx-auto">
            Need confidential guidance or have medical inquiries?{' '}
            <button
              onClick={onOpenConsultation}
              className="text-[#20B9D2] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Consult our licensed Clinical Pharmacist</span>
              <Stethoscope className="w-3.5 h-3.5" />
            </button>
            {' '}or call us directly at <a href="tel:03007006133" className="font-bold text-[#243746] hover:text-[#20B9D2]">0300 7006133</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

