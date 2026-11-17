"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Building2, MapPin, Calculator, Phone, Mail, User } from "lucide-react";

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ValuationModal({ isOpen, onClose }: ValuationModalProps) {
  const [propertyType, setPropertyType] = useState("Apartment");
  const [community, setCommunity] = useState("Downtown Dubai");
  const [beds, setBeds] = useState("2");
  const [sizeSqft, setSizeSqft] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E7DFCF] text-[#111111]">
        {/* Header */}
        <div className="bg-[#111111] px-6 py-5 text-white flex items-center justify-between border-b border-[#C99A3B]/30">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-wider uppercase">
              <Calculator className="w-3.5 h-3.5" />
              <span>Complimentary Valuation</span>
            </div>
            <h3 className="text-xl font-serif font-medium mt-0.5">
              Request Free Property Valuation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mb-4" />
              <h4 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                Valuation Report Requested
              </h4>
              <p className="text-[#5E6778] text-sm max-w-sm mb-6">
                Our RERA-licensed valuation experts will analyze recent comparable transactions in {community} and send your bespoke market appraisal within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-sm font-medium hover:bg-[#8A6420] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#5E6778]">
                Get an accurate, data-backed market valuation based on Dubai Land Department (DLD) transaction records.
              </p>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Plot">Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                    Bedrooms
                  </label>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
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

              {/* Community & Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                    Area / Community
                  </label>
                  <select
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  >
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Downtown Dubai">Downtown Dubai</option>
                    <option value="Dubai Marina">Dubai Marina</option>
                    <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                    <option value="Business Bay">Business Bay</option>
                    <option value="Jumeirah Village Circle">JVC</option>
                    <option value="Arabian Ranches">Arabian Ranches</option>
                    <option value="Bluewaters Island">Bluewaters Island</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                    Approx Size (Sq Ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1,650"
                    value={sizeSqft}
                    onChange={(e) => setSizeSqft(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <div className="border-t border-[#E7DFCF] pt-3">
                <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider block mb-2">
                  Owner Contact Information
                </span>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp (+971 ...)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#C99A3B] text-white font-medium rounded-lg hover:bg-[#8A6420] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-4"
              >
                {loading ? "Calculating Valuation..." : "Submit for Free Valuation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
