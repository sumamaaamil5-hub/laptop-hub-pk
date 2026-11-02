import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send, CheckCircle2, Clock, Mail } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_PHONE_SECONDARY, SHOP_LOCATION, generateWhatsAppLink } from '../data/initialLaptops';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Karachi',
    laptopModel: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Salam Laptop Hub PK!\n\n*Name:* ${formData.name || 'Customer'}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Interested Model:* ${formData.laptopModel || 'General Inquiry'}\n*Message:* ${formData.message}`;
    window.open(generateWhatsAppLink(undefined, text), '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#080d1e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Contact Laptop Hub PK
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Ready to order or need guidance on choosing the right laptop? Our Karachi team is here to assist you via WhatsApp, phone, or contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c232c] to-[#0a1928] border border-emerald-800/60 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct WhatsApp Assistance</h3>
                  <span className="text-xs text-emerald-300">Fastest Response (Under 10 mins)</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Send us a message with your budget and requirements. We can send live videos and pictures of the exact laptop before dispatch!
              </p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp: +92 300 1234567</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl bg-[#0e1633] border border-slate-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Location</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">{SHOP_LOCATION}</p>
                  <span className="text-[11px] text-slate-400">Karachi, Pakistan</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Phone Calls</span>
                  <div className="space-y-0.5 mt-0.5">
                    <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-medium text-blue-300 hover:text-white block">
                      {DISPLAY_PHONE} (Primary)
                    </a>
                    <a href={`tel:${DISPLAY_PHONE_SECONDARY.replace(/\s+/g, '')}`} className="text-xs text-slate-400 hover:text-slate-200 block">
                      {DISPLAY_PHONE_SECONDARY} (Sales Support)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Operating Hours</span>
                  <p className="text-xs font-medium text-slate-200 mt-0.5">Monday – Saturday: 11:00 AM – 9:00 PM (PKT)</p>
                  <span className="text-[11px] text-slate-400">Sunday: WhatsApp Inquiries Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1938] border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1.5">
                Send an Inquiry or Order Request
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details and laptop requirements. We will contact you with availability and delivery details.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-blue-950/40 border border-blue-800/60 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Thank You, {formData.name || 'Friend'}!</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      Your inquiry has been recorded. For instant processing, you can launch this message directly into our WhatsApp chat.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open on WhatsApp with Form Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', city: 'Karachi', laptopModel: '', message: '' });
                      }}
                      className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Muhammad Ahmed"
                        className="w-full rounded-xl bg-[#142145] border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        WhatsApp / Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300 1234567"
                        className="w-full rounded-xl bg-[#142145] border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        City / Location in Pakistan
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Karachi, Lahore, Islamabad"
                        className="w-full rounded-xl bg-[#142145] border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Interested Laptop Model
                      </label>
                      <input
                        type="text"
                        value={formData.laptopModel}
                        onChange={(e) => setFormData({ ...formData, laptopModel: e.target.value })}
                        placeholder="e.g. HP Pavilion G6 or ThinkPad"
                        className="w-full rounded-xl bg-[#142145] border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Message or Custom Specs Request
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention any specific RAM or SSD upgrade needs, or ask about delivery time..."
                      className="w-full rounded-xl bg-[#142145] border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
