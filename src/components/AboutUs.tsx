import React from 'react';
import { Laptop, MapPin, CheckCircle2, Shield, Award, Users } from 'lucide-react';
import { SHOP_LOCATION, DISPLAY_PHONE } from '../data/initialLaptops';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a1228] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0f1b3a] border border-slate-800 p-8 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/30">
                <Laptop className="w-7 h-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Laptop Hub PK
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Karachi-based technology provider dedicated to making dependable, high-speed computing affordable for every student, freelancer, professional, and business in Pakistan.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{SHOP_LOCATION}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Registered & Trusted Hardware Reseller</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>7-Day Replacement Checking Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 block mb-2">
                About Our Business
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Pakistan with Reliable Computing at Honest Prices
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong className="text-white font-semibold">Laptop Hub PK</strong>, we specialize in certified pre-owned, corporate-lease, and Grade-A imported laptops from top global brands including HP, Lenovo ThinkPad, and Dell.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We bridge the gap between expensive brand-new retail laptops and unreliable open-market used devices. Every single unit displayed on our website is physically tested by technicians in Karachi before being made available for purchase. We verify genuine motherboards, authentic battery cells, spotless screens, responsive keyboards, and optimal thermals.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0e1733] border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Zero Repaired Motherboards</span>
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  We strictly reject heat-repaired or reworked boards. You get 100% factory original internals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1733] border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Transparent Grading</span>
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  Clear condition descriptions and actual hardware specifications so you know exactly what you receive.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1733] border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Nationwide Reach</span>
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  Safe express delivery from Karachi to Lahore, Rawalpindi, Islamabad, Peshawar, Quetta, and beyond.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1733] border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Post-Sale Support</span>
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  Technical guidance for drivers, RAM/SSD upgrades, and checking warranty claims via direct WhatsApp.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <span>Have specific requirements or bulk requirements for an office or institute? </span>
              <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4">
                Get in touch with our team
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
