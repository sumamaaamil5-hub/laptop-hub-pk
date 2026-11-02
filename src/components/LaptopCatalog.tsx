import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Search, RotateCcw, Plus, Sparkles, Filter } from 'lucide-react';
import { LaptopProduct } from '../types';
import { ProductCard } from './ProductCard';
import { formatPricePKR } from '../data/initialLaptops';

interface LaptopCatalogProps {
  laptops: LaptopProduct[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickView: (laptop: LaptopProduct) => void;
  onOpenEditor: () => void;
  onEditLaptop: (laptop: LaptopProduct) => void;
}

export const LaptopCatalog: React.FC<LaptopCatalogProps> = ({
  laptops,
  searchQuery,
  onSearchChange,
  onQuickView,
  onOpenEditor,
  onEditLaptop
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCondition, setSelectedCondition] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(100000);

  const brands = ['All', 'HP', 'Lenovo', 'Dell'];

  // Filtered & sorted laptops
  const filteredLaptops = useMemo(() => {
    return laptops
      .filter((laptop) => {
        // Brand filter
        if (selectedBrand !== 'All' && laptop.brand !== selectedBrand) {
          return false;
        }

        // Max price filter
        if (laptop.price > maxPriceFilter) {
          return false;
        }

        // Search Query (Model, processor, RAM, storage, graphics)
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase().trim();
          const matchName = laptop.name.toLowerCase().includes(query);
          const matchProcessor = laptop.processor.toLowerCase().includes(query);
          const matchRam = laptop.ram.toLowerCase().includes(query);
          const matchStorage = laptop.storage.toLowerCase().includes(query);
          const matchBrand = laptop.brand.toLowerCase().includes(query);
          const matchGraphics = (laptop.graphics || '').toLowerCase().includes(query);
          const matchDisplay = (laptop.display || '').toLowerCase().includes(query);

          if (!matchName && !matchProcessor && !matchRam && !matchStorage && !matchBrand && !matchGraphics && !matchDisplay) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        // Featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [laptops, selectedBrand, maxPriceFilter, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedBrand('All');
    setMaxPriceFilter(100000);
    onSearchChange('');
    setSortBy('featured');
  };

  return (
    <section id="laptops" className="py-16 md:py-24 bg-[#091126] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 block mb-2">
              Our Available Inventory
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Quality Laptops
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
              Showing tested used and certified laptops with verified specs. In stock in Karachi with fast delivery to all Pakistan.
            </p>
          </div>

          {/* Quick Management CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEditor}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#142042] hover:bg-[#1a2b58] border border-slate-700/80 transition-colors shadow-sm"
              title="Add or update laptop names, prices, or specs"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-400" />
              <span>Catalog Manager (Admin)</span>
            </button>
          </div>
        </div>

        {/* Filter and Control Bar */}
        <div className="p-5 rounded-2xl bg-[#0d1633] border border-slate-800/90 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            
            {/* Brand tabs (Interactive Segmented Buttons) */}
            <div className="md:col-span-5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                Filter by Brand
              </span>
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#090f24] rounded-xl border border-slate-800">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      selectedBrand === b
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {b === 'All' ? 'All Brands' : b}
                  </button>
                ))}
              </div>
            </div>

            {/* Price slider */}
            <div className="md:col-span-4">
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <span className="font-semibold text-slate-400">Max Budget:</span>
                <span className="font-bold text-blue-400 font-mono tabular-nums">
                  Up to {formatPricePKR(maxPriceFilter)}
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="100000"
                step="2000"
                value={maxPriceFilter}
                onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                className="w-full accent-blue-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>Rs. 25,000</span>
                <span>Rs. 100,000</span>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                Sort Laptops
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full rounded-xl bg-[#090f24] border border-slate-800 px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Model Name (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Active filter counter & reset button */}
          {(selectedBrand !== 'All' || maxPriceFilter < 100000 || searchQuery) && (
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Active Filters:</span>
                {selectedBrand !== 'All' && (
                  <span className="text-blue-300 font-medium">Brand: {selectedBrand}</span>
                )}
                {maxPriceFilter < 100000 && (
                  <span className="text-blue-300 font-medium">Under {formatPricePKR(maxPriceFilter)}</span>
                )}
                {searchQuery && (
                  <span className="text-blue-300 font-medium">Search: &quot;{searchQuery}&quot;</span>
                )}
              </div>

              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredLaptops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredLaptops.map((laptop) => (
              <ProductCard
                key={laptop.id}
                laptop={laptop}
                onQuickView={onQuickView}
                onEdit={onEditLaptop}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#0c142e] border border-slate-800">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No laptops match your criteria</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any laptop matching &quot;{searchQuery || selectedBrand}&quot; within your selected price range.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
