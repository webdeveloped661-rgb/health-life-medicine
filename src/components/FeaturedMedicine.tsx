import React, { useState } from 'react';
import { MedicineProduct, ProductCategory } from '../types';
import { CATEGORY_FILTERS } from '../data/medicineData';
import { ShieldCheck, Info, ShoppingBag, Eye, Stethoscope, AlertCircle } from 'lucide-react';

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
    const matchesCategory = selectedFilter === 'all' || product.category === selectedFilter;
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9EDF3]/50 text-[#0e7490] text-xs font-bold mb-3">
            <span>Our Featured Medicine</span>
            <span className="text-cyan-300">·</span>
            <span>تصدیق شدہ فارمولیشنز</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            Healthcare Products for Women's & Men's Wellness
          </h2>

          <p className="mt-3 text-base text-[#546E7A] leading-relaxed">
            Explore our featured healthcare products and learn about their ingredients, approved uses, and safety information. All products strictly adhere to documented pharmaceutical standards.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#20B9D2] text-white shadow-sm'
                    : 'bg-[#F5F9FA] text-[#546E7A] hover:bg-gray-100 hover:text-[#243746]'
                }`}
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
              className="text-[#20B9D2] hover:underline font-bold"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F5F9FA] rounded-3xl border border-dashed border-gray-300">
            <Info className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#243746]">No medicines found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              We couldn't find products matching your filter criteria. Try selecting "All Products" or speak with a clinical pharmacist.
            </p>
            <button
              onClick={() => onFilterChange('all')}
              className="mt-4 px-4 py-2 bg-[#20B9D2] text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-gray-200/80 hover:border-[#20B9D2]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Product Thumbnail Container */}
                <div className="relative w-full h-52 bg-[#F5F9FA] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {product.prescriptionRequired ? (
                      <span className="inline-flex items-center gap-1 bg-[#FEE2E2] text-[#991B1B] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#FCA5A5] shadow-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>Prescription Required</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#BBF7D0] shadow-xs">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Nutraceutical / OTC</span>
                      </span>
                    )}

                    {product.drapRegNumber && (
                      <span className="text-[9px] font-mono font-medium text-gray-600 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded border border-gray-200">
                        {product.drapRegNumber}
                      </span>
                    )}
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-[#243746] hover:text-[#20B9D2] rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick View Details"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category */}
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#20B9D2]">
                      {product.categoryLabel}
                    </p>

                    {/* Product Title */}
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="mt-1 text-base font-bold text-[#243746] hover:text-[#20B9D2] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    {product.urduName && (
                      <p className="text-[11px] text-gray-400 font-medium line-clamp-1">
                        {product.urduName}
                      </p>
                    )}

                    {/* Generic Name */}
                    <p className="mt-1 text-xs text-gray-500 font-mono line-clamp-1">
                      {product.genericName}
                    </p>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-[#546E7A] line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Verified Ingredients Capsule Preview */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Active Verified Ingredients:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {product.verifiedIngredients.slice(0, 2).map((ing, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-gray-600 bg-[#F5F9FA] px-2 py-0.5 rounded border border-gray-200/70 truncate max-w-full"
                          >
                            {ing}
                          </span>
                        ))}
                        {product.verifiedIngredients.length > 2 && (
                          <span className="text-[10px] text-[#20B9D2] bg-[#B9EDF3]/30 px-1.5 py-0.5 rounded font-bold">
                            +{product.verifiedIngredients.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price and Actions */}
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
                        onClick={() => onSelectProduct(product)}
                        className="px-2.5 py-2 rounded-xl bg-[#F5F9FA] hover:bg-gray-100 text-[#243746] text-xs font-bold border border-gray-200 transition-colors"
                        title="View Full Product Details"
                      >
                        Info
                      </button>

                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                        title={product.prescriptionRequired ? "Requires Prescription Review" : "Add to Cart"}
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
            Not certain which formulation is suitable for your symptoms?{' '}
            <button
              onClick={onOpenConsultation}
              className="text-[#20B9D2] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Consult our licensed Clinical Pharmacist for confidential guidance</span>
              <Stethoscope className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
