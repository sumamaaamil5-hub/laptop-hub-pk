import React, { useState } from 'react';
import { X, MessageCircle, Phone, ShieldCheck, CheckCircle2, Cpu, HardDrive, Zap, Monitor, BatteryCharging, Box, Truck } from 'lucide-react';
import { LaptopProduct } from '../types';
import { formatPricePKR, generateWhatsAppLink, DISPLAY_PHONE } from '../data/initialLaptops';

interface ProductDetailModalProps {
  laptop: LaptopProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ laptop, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!laptop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0d1633] border border-slate-700/80 shadow-2xl overflow-hidden my-8 text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-laptop-title"
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Media Column */}
          <div className="md:col-span-5 bg-[#080e22] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0e1730] border border-slate-800 flex items-center justify-center mb-4">
                {!imageError ? (
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Monitor className="w-16 h-16 text-blue-400" />
                )}

                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0b1329]/90 border border-slate-700 text-[11px] font-semibold text-blue-300">
                  {laptop.condition}
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-3.5 rounded-xl bg-[#121c3b] border border-slate-800">
                <span className="text-xs text-slate-400 block">Our Special Price</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-display text-2xl font-bold text-white tabular-nums">
                    {formatPricePKR(laptop.price)}
                  </span>
                  {laptop.originalPrice && (
                    <span className="text-xs text-slate-500 line-through tabular-nums">
                      {formatPricePKR(laptop.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* In-box items */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs space-y-2 text-slate-300">
              <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">Package Includes:</span>
              <div className="flex items-center gap-2">
                <Box className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Original OEM Power Charger & AC Cord</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Official 7-Day Checking Warranty Card</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Free Safe Bubble Shock-Proof Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Specifications Column */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Header */}
              <div className="pr-8">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{laptop.brand} Laptop</span>
                <h2 id="modal-laptop-title" className="font-display text-2xl font-bold text-white mt-1">
                  {laptop.name}
                </h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {laptop.description}
                </p>
              </div>

              {/* Detailed Specs Grid */}
              <div className="mt-5 space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Technical Specifications
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Processor</span>
                      <span className="font-medium text-slate-200">{laptop.processor}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">RAM Memory</span>
                      <span className="font-medium text-slate-200">{laptop.ram}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <HardDrive className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Storage</span>
                      <span className="font-medium text-slate-200">{laptop.storage}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <Monitor className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Display Screen</span>
                      <span className="font-medium text-slate-200">{laptop.display}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Graphics</span>
                      <span className="font-medium text-slate-200">{laptop.graphics || 'Integrated HD Graphics'}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#111b38] border border-slate-800 flex items-start gap-2">
                    <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Battery Health</span>
                      <span className="font-medium text-slate-200">{laptop.batteryHealth}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Checkmarks */}
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Motherboard Non-Repaired
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Thermal Paste Refreshed
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Clean Windows Installed
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href={generateWhatsAppLink(laptop)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-950 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Confirm Availability on WhatsApp</span>
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 bg-[#162347] hover:bg-[#1e2f5f] hover:text-white border border-slate-700/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Karachi Shop ({DISPLAY_PHONE})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
