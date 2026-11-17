"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Building,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Buying Property",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#111111] text-white py-14 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Private Client Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-3">
              Contact La Vista Real Estate
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Connect with our licensed private advisors for confidential consultations, property valuations, or portfolio acquisitions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] mb-6">
                Downtown Dubai Headquarters
              </h2>

              <div className="space-y-5 text-sm text-[#111111]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Office Address
                    </strong>
                    <span>Suite 2401, Boulevard Plaza Tower 1</span>
                    <span className="block text-xs text-[#5E6778]">Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Telephone
                    </strong>
                    <a href="tel:+97144298888" className="hover:text-[#C99A3B]">
                      +971 4 429 8888
                    </a>
                    <span className="block text-xs text-[#5E6778]">Multi-line switchboard</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      WhatsApp Private Desk
                    </strong>
                    <a
                      href="https://wa.me/971501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      +971 50 123 4567
                    </a>
                    <span className="block text-xs text-[#5E6778]">Instant client support 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Email Inquiries
                    </strong>
                    <a href="mailto:info@lavistarealestate.ae" className="hover:text-[#C99A3B]">
                      info@lavistarealestate.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Operating Hours
                    </strong>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM GST</span>
                    <span className="block text-xs text-[#5E6778]">Private weekend showings by appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] shadow-sm">
              <div className="relative h-56 bg-slate-800 flex items-center justify-center text-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
                  alt="Downtown Dubai Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10">
                  <MapPin className="w-8 h-8 text-[#C99A3B] mx-auto mb-1 animate-bounce" />
                  <span className="text-white font-serif font-bold text-sm block">
                    Boulevard Plaza Tower 1
                  </span>
                  <span className="text-white/70 text-xs">Downtown Dubai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7DFCF] shadow-sm">
              <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-1">
                Direct Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] mb-2">
                Send a Message to Our Advisory Team
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6778] font-light mb-8">
                Please leave your details below and an appropriate area specialist will get in touch promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                    Message Successfully Sent
                  </h3>
                  <p className="text-sm text-[#5E6778] max-w-md mb-6">
                    Thank you, {formData.name}. We have received your inquiry regarding {formData.interest}. A dedicated senior advisor will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#8A6420]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sultan Al-Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="investor@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                      >
                        <option value="Buying Luxury Villa / Apartment">Buying Luxury Villa / Apartment</option>
                        <option value="Off-Plan Developer Investment">Off-Plan Developer Investment</option>
                        <option value="Selling or Listing My Property">Selling or Listing My Property</option>
                        <option value="Luxury Rental / Leasing">Luxury Rental / Leasing</option>
                        <option value="UAE 10-Year Golden Visa Consultation">UAE 10-Year Golden Visa Consultation</option>
                        <option value="Institutional Asset Management">Institutional Asset Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                      Your Message or Requirements
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please specify preferred communities, budget range in AED, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Confidential Message</span>
                  </button>

                  <div className="flex items-center gap-2 justify-center text-xs text-[#5E6778] pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#C99A3B]" />
                    <span>Your privacy is paramount. Non-disclosure agreements available upon request.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
