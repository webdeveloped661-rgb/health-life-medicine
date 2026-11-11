import React, { useState } from 'react';
import { Search, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { MedicineProduct } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: MedicineProduct[];
  onSelectProduct: (product: MedicineProduct) => void;
  onSearchSubmit: (query: string, category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSearchSubmit
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = products.filter(p => {
    const matchesCat = category === 'all' || products.length === 1 || p.category === category;
    const matchesQ = !query || 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.genericName.toLowerCase().includes(query.toLowerCase()) ||
      p.verifiedIngredients.some(i => i.toLowerCase().includes(query.toLowerCase()));
    return matchesCat && matchesQ;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(query, category);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs pt-20">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-[#F5F9FA]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#243746]">
            Search Reproductive Health Medicines & Guidance
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-b border-gray-100 flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-2.5 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none"
          >
            <option value="all">All</option>
            <option value="womens_health">Women's</option>
            <option value="mens_health">Men's</option>
            <option value="reproductive">Reproductive</option>
          </select>

          <div className="relative flex-grow flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type medicine name, ingredient (e.g., Lactobacillus, Ashwagandha)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl"
          >
            Search
          </button>
        </form>

        <div className="p-4 max-h-80 overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <p className="text-center text-xs text-gray-400 py-6">No matching medicines found.</p>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="p-3 rounded-2xl hover:bg-[#F5F9FA] border border-transparent hover:border-gray-200 transition-colors flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover bg-gray-50 border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#243746]">{item.name}</p>
                    <p className="text-[11px] text-gray-500 font-mono">{item.genericName}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-mono font-bold text-[#20B9D2]">{item.currency} {item.price.toLocaleString()}</p>
                  <span className="text-[10px] text-gray-400">{item.packageSize}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
