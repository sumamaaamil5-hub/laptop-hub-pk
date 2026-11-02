import React from 'react';
import { ShieldCheck, Tag, Truck, Headphones, ThumbsUp, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Quality Checked Laptops',
      highlight: '30-Point Hardware Audit',
      description: 'Every laptop undergoes comprehensive testing of battery degradation, display pixels, keyboard keycaps, ports, and stress thermal testing before listing.',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Tag,
      title: 'Affordable Prices',
      highlight: 'Direct Wholesale Rates',
      description: 'We cut down middlemen margins to deliver genuine, business-grade laptops at the most competitive market rates in Pakistan without compromising quality.',
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      highlight: 'All Pakistan Courier',
      description: 'Secure shock-absorbent packaging with insured courier delivery across Karachi, Lahore, Islamabad, Rawalpindi, and every city in Pakistan in 2–3 business days.',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      highlight: 'Direct WhatsApp Line',
      description: 'Speak directly with our technical team for hardware guidance, software driver assistance, or post-purchase inquiries anytime via WhatsApp.',
      iconColor: 'text-sky-400',
      bgColor: 'bg-sky-500/10 border-sky-500/20'
    },
    {
      icon: ThumbsUp,
      title: 'Reliable Service',
      highlight: '7-Day Checking Warranty',
      description: 'Buy with absolute confidence. If your laptop has any hardware defect within 7 days of delivery, our prompt replacement warranty protects you.',
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#080f24] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 block mb-2">
            The Laptop Hub PK Standard
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Laptop Hub PK
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            We understand the challenges of buying used tech in Pakistan. That is why we built our reputation on honesty, rigorous quality checks, and real guarantees.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl bg-[#0e1733] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.bgColor} mb-5`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    {pillar.highlight}
                  </span>

                  <h3 className="font-display text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
