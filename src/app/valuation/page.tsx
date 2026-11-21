"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ShieldCheck } from "lucide-react";
import { sendLead } from "@/lib/sendLead";

export default function ValuationPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    propertyType: "Villa",
    category: "residential",
    community: "Al Sinniyah Island",
    beds: "4",
    sizeSqft: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const summaryMsg = `Valuation details: Property type: ${formData.propertyType}, Category: ${formData.category}, Location: ${formData.community}, Beds: ${formData.beds}, Size: ${formData.sizeSqft} sqft.`;
      const purposeStr = `Valuation Request (${formData.category}): ${formData.propertyType} in ${formData.community}`;

      await Promise.allSettled([
        sendLead({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: purposeStr,
          propertyTitle: `${formData.propertyType} (${formData.community})`,
          location: formData.community,
          message: summaryMsg,
        }),
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            purpose: purposeStr,
            message: summaryMsg,
          }),
        }),
      ]);

      setSubmitted(true);
    } catch {
      setErrorMessage("Network error. Please try again or reach us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Data-Backed Market Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Free Property Valuation
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Receive a bespoke appraisal of your property based on real-time transaction data and market analytics across Umm Al Quwain and the wider UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 py-10 sm:py-16 w-full max-w-full">
        <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-12 border border-[#E7DFCF] shadow-lg text-[#111111] w-full min-w-0">
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                Valuation Request Received
              </h2>
              <p className="text-sm text-[#5E6778] max-w-md mx-auto mb-6">
                Our licensed valuation consultants will analyze comparable sales and leases in {formData.community} and deliver your detailed report within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#8A6420]"
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
                    Property Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <option value="residential">Residential Properties</option>
                    <option value="commercial">Commercial Properties</option>
                    <option value="leasing">Leasing / Rental Portfolio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <option value="Villa">Villa / Mansion</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                    <option value="Industrial Warehouse">Industrial Warehouse</option>
                    <option value="Land Plot">Land Plot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Area / Location
                  </label>
                  <select
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white"
                  >
                    <optgroup label="Umm Al Quwain">
                      <option value="Al Sinniyah Island">Al Sinniyah Island</option>
                      <option value="Al Salamah">Al Salamah</option>
                      <option value="Al Haditha">Al Haditha (King Faisal Road)</option>
                      <option value="UAQ Marina">UAQ Marina & Corniche</option>
                      <option value="Mangrove Beachfront">Mangrove Beachfront</option>
                      <option value="Al Ramlah">Al Ramlah & Al Raudah</option>
                      <option value="Al Khor">Al Khor District</option>
                      <option value="UAQ Industrial">UAQ Industrial Area</option>
                    </optgroup>
                    <optgroup label="Wider UAE">
                      <option value="Wider UAE - Luxury Enclave">Wider UAE Enclaves</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Approx. Size (Sq. Ft.)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 4500"
                    value={formData.sizeSqft}
                    onChange={(e) => setFormData({ ...formData, sizeSqft: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <h2 className="text-xl font-serif font-bold text-[#111111] border-b border-[#E7DFCF] pb-3 pt-4">
                Owner Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Hashimi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
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

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#C99A3B] hover:bg-[#8A6420] disabled:opacity-60 text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>{submitting ? "Analyzing Market Data..." : "Request Free Market Valuation"}</span>
              </button>

              <div className="flex items-center gap-2 justify-center text-xs text-[#5E6778] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#C99A3B]" />
                <span>Strict confidentiality guaranteed. We do not share owner contact details.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
