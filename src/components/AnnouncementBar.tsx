import React from 'react';
import { Truck, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/initialLaptops';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#070d1e] border-b border-slate-800/80 text-xs text-slate-300 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Value props */}
        <div className="flex items-center flex-wrap gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-medium">All Pakistan Delivery</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Quality Checked Laptops</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300 hidden sm:flex">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Trusted Seller in Karachi</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300 hidden md:flex">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp Customer Support</span>
          </div>
        </div>

        {/* Quick contact direct link */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-slate-400 hidden lg:inline">Karachi Outlet & Nationwide Shipping</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Salam Laptop Hub PK, I have a quick question regarding laptop availability.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: +92 300 1234567</span>
          </a>
        </div>
      </div>
    </div>
  );
};
