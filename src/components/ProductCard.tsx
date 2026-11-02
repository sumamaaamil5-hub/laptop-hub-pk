import React, { useState } from 'react';
import { Cpu, HardDrive, Monitor, Zap, MessageCircle, Eye, ShieldCheck, Check } from 'lucide-react';
import { LaptopProduct } from '../types';
import { formatPricePKR, generateWhatsAppLink } from '../data/initialLaptops';

interface ProductCardProps {
  laptop: LaptopProduct;
  onQuickView: (laptop: LaptopProduct) => void;
  onEdit?: (laptop: LaptopProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  laptop,
  onQuickView,
  onEdit
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group rounded-2xl bg-[#0f1a38] border border-slate-800/90 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-[#091124] overflow-hidden flex items-center justify-center">
        {!imageError ? (
          <img
            src={laptop.image}
            alt={`${laptop.name} - ${laptop.processor}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-gradient-to-br from-[#0c152e] to-[#142042]">
            <Monitor className="w-12 h-12 text-blue-400 mb-2" />
            <span className="text-sm font-semibold text-slate-300">{laptop.name}</span>
            <span className="text-xs text-slate-500 mt-1">{laptop.display}</span>
          </div>
        )}

        {/* Quiet Top Sub-kicker / Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a1228]/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{laptop.condition}</span>
        </div>

        {/* Quick View Floating Button on Hover */}
        <button
          onClick={() => onQuickView(laptop)}
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white cursor-pointer"
          aria-label={`View full details of ${laptop.name}`}
        >
          <span className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 shadow-lg shadow-blue-900/50">
            <Eye className="w-4 h-4" />
            Quick View Specs
          </span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Stock metadata */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-blue-400">{laptop.brand}</span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Check className="w-3 h-3" />
              In Stock (Karachi)
            </span>
          </div>

          {/* Model Name */}
          <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
            {laptop.name}
          </h3>

          {/* Specifications List */}
          <div className="mt-3.5 space-y-1.5 text-xs text-slate-300 border-y border-slate-800/80 py-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">{laptop.processor}</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{laptop.ram}</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <HardDrive className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
              <span>{laptop.storage}</span>
            </div>

            <div className="flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>{laptop.display}</span>
              {laptop.graphics && (
                <>
                  <span className="text-slate-500" aria-hidden="true">·</span>
                  <span className="text-slate-400 truncate">{laptop.graphics}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Price & Action Area */}
        <div className="mt-4 pt-2">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[11px] text-slate-400 block">Offer Price</span>
              <span className="font-display text-xl font-extrabold text-white tabular-nums tracking-tight">
                {formatPricePKR(laptop.price)}
              </span>
            </div>

            {laptop.originalPrice && laptop.originalPrice > laptop.price && (
              <span className="text-xs text-slate-500 line-through tabular-nums">
                {formatPricePKR(laptop.originalPrice)}
              </span>
            )}
          </div>

          {/* WhatsApp Inquiry Button & Details Trigger */}
          <div className="grid grid-cols-1 gap-2">
            <a
              href={generateWhatsAppLink(laptop)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-950 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Inquiry</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onQuickView(laptop)}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-medium text-slate-300 bg-[#162244] hover:bg-[#1f2f5c] hover:text-white border border-slate-700/60 transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Full Specs</span>
              </button>

              {onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(laptop)}
                  title="Edit this laptop's name, price or specs"
                  className="py-2 px-3 rounded-xl text-xs font-medium text-slate-400 hover:text-blue-300 bg-[#131b33] hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
