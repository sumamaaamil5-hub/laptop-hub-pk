import React from 'react';
import { Laptop, MessageCircle, Phone, MapPin, Truck, ShieldCheck, Heart } from 'lucide-react';
import { DISPLAY_PHONE, SHOP_LOCATION, generateWhatsAppLink } from '../data/initialLaptops';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050914] text-slate-400 border-t border-slate-900 text-xs">
      {/* Upper Footer: Quick Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Laptop className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Laptop Hub <span className="text-blue-400">PK</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your trusted partner for certified pre-owned and refurbished laptops in Pakistan. Rigorously tested hardware, 7-day checking warranty, and swift delivery to your doorstep.
            </p>

            <div className="space-y-2 pt-1 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">{SHOP_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-[11px]">{DISPLAY_PHONE}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#laptops" className="hover:text-blue-400 transition-colors">Featured Laptops</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Laptop Hub PK</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact & Order</a></li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Popular Brands</h4>
            <ul className="space-y-2 text-slate-400">
              <li>HP Pavilion Series</li>
              <li>HP EliteBook Series</li>
              <li>Lenovo ThinkPad T-Series</li>
              <li>Lenovo ThinkPad X1 Carbon</li>
              <li>Dell Latitude Ultrabooks</li>
              <li>Dell Precision Workstations</li>
            </ul>
          </div>

          {/* Nationwide Delivery & Payment */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Delivery & Payments</h4>
            <p className="text-slate-400 leading-relaxed mb-3">
              Fast courier dispatch via TCS & Leopards to Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and all Pakistan.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Cash on Delivery</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Bank Transfer</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">EasyPaisa</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">JazzCash</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-slate-900/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Laptop Hub PK. All rights reserved. Quality Tested Used Laptops in Pakistan.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Helpline</span>
            </a>
            <span className="text-slate-700">·</span>
            <span>Karachi, Sindh, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
