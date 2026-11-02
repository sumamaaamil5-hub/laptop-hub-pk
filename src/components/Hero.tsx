import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Cpu, BatteryCharging, Truck } from 'lucide-react';
import { generateWhatsAppLink } from '../data/initialLaptops';

interface HeroProps {
  onShopNowClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNowClick, onContactClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top clean kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Certified Used & Grade-A Laptops in Pakistan</span>
            </div>

            {/* Main Heading (exact requested text) */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Premium Quality Laptops at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                Best Prices
              </span>
            </h1>

            {/* Subheading (exact requested text) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Work, Study and Entertainment — All in One Place
            </p>

            <p className="text-sm text-slate-400 max-w-xl mx-auto lg:mx-0">
              Explore 100% verified HP, Lenovo ThinkPad, and Dell laptops with genuine hardware, long battery backup, and 7-day checking warranty delivered safely anywhere in Pakistan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onShopNowClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#142042] border border-slate-700 hover:border-slate-600 hover:bg-[#1a2b58] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
              </button>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-[#0e1733]/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>7-Day Warranty</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Replacement guarantee</p>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0e1733]/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>30-Point Check</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Hardware & thermals verified</p>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0e1733]/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nationwide</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">TCS & COD delivery</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Laptop Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-1000"></div>

              {/* Showcase Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#101b38] shadow-2xl">
                <img
                  src="/src/assets/images/hero_laptop_showcase_1793649773224.jpg"
                  alt="Laptop Hub PK Premium Laptop Collection"
                  className="w-full h-auto object-cover aspect-[16/9] lg:aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating highlight card on hero image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#091126]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Genuine Tested Batteries</div>
                      <div className="text-[11px] text-slate-400">Up to 4+ hours real world backup</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 shrink-0">100% Tested</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
