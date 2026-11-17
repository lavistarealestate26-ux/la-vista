"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ShieldCheck, MapPin, Building, Phone, Mail } from "lucide-react";

export default function ValuationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: "Apartment",
    community: "Downtown Dubai",
    beds: "2",
    sizeSqft: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Data-Backed Market Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Free Dubai Property Valuation
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Receive a bespoke appraisal of your property based on real-time transaction data from the Dubai Land Department (DLD).
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E7DFCF] shadow-lg text-[#111111]">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                Valuation Request Received
              </h2>
              <p className="text-sm text-[#5E6778] max-w-md mx-auto mb-6">
                Our RERA-licensed valuation consultants will analyze comparable sales in {formData.community} and deliver your detailed report within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-xs uppercase tracking-wider font-semibold"
              >
                Submit Another Valuation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-serif font-bold text-[#111111] border-b border-[#E7DFCF] pb-3">
                Property Characteristics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Plot">Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Bedrooms
                  </label>
                  <select
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <option value="Studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Area / Community
                  </label>
                  <select
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Downtown Dubai">Downtown Dubai</option>
                    <option value="Dubai Marina">Dubai Marina</option>
                    <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                    <option value="Business Bay">Business Bay</option>
                    <option value="Jumeirah Village Circle">Jumeirah Village Circle (JVC)</option>
                    <option value="Arabian Ranches">Arabian Ranches</option>
                    <option value="Bluewaters Island">Bluewaters Island</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Approximate Size (Sq Ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1850"
                    value={formData.sizeSqft}
                    onChange={(e) => setFormData({ ...formData, sizeSqft: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <h2 className="text-xl font-serif font-bold text-[#111111] border-t border-[#E7DFCF] pt-6 pb-2">
                Your Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                      Phone / WhatsApp (with country code) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="owner@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Request Free Valuation Report</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
