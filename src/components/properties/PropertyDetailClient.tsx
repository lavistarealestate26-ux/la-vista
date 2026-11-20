"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle,
  Building,
  Warehouse,
  QrCode,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
} from "lucide-react";
import { Listing } from "@/types/listing";
import PropertyCard from "@/components/properties/PropertyCard";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

interface PropertyDetailClientProps {
  listing: Listing;
  similarProperties: Listing[];
}

export default function PropertyDetailClient({
  listing,
  similarProperties,
}: PropertyDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<"AED" | "USD" | "EUR" | "GBP">("AED");
  const [enquirySent, setEnquirySent] = useState(false);
  const [viewerName, setViewerName] = useState("");
  const [viewerPhone, setViewerPhone] = useState("");
  const [viewerEmail, setViewerEmail] = useState("");

  const currencyRates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.255,
    GBP: 0.218,
  };

  const convertedPrice = Math.round(listing.priceAED * currencyRates[selectedCurrency]);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat("en-US").format(val);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-[#5E6778]">
          <Link href="/" className="hover:text-[#C99A3B]">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-[#C99A3B]">Properties</Link>
          <span>/</span>
          <Link href={`/listings?community=${encodeURIComponent(listing.community)}`} className="hover:text-[#C99A3B]">
            {listing.community}
          </Link>
          <span>/</span>
          <span className="text-[#111111] font-medium line-clamp-1">{listing.title}</span>
        </div>
      </div>

      {/* Main Property Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Price Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] mb-8 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#111111] text-[#C99A3B] rounded-md">
                {listing.purpose === "off-plan" ? "Off-Plan Launch" : `For ${listing.purpose.toUpperCase()}`}
              </span>
              <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-[#F7F3EA] text-[#111111] rounded-md border border-[#E7DFCF]">
                {listing.propertyType}
              </span>
              <span className="text-xs text-[#5E6778] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C99A3B]" />
                <span>{listing.subCommunity ? `${listing.subCommunity}, ` : ""}{listing.community}, {listing.region || "Umm Al Quwain"}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#111111] tracking-tight">
              {listing.title}
            </h1>
            {listing.building && (
              <p className="text-xs sm:text-sm text-[#5E6778] mt-1">
                Tower / Enclave: <span className="font-semibold text-[#111111]">{listing.building}</span>
              </p>
            )}
          </div>

          {/* Price & Currency Switcher */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-widest mb-1">
              Asking Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xs sm:text-sm font-semibold text-[#C99A3B]">
                {selectedCurrency}
              </span>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#111111] tracking-tight">
                {formatPrice(convertedPrice)}
              </span>
              {listing.rentFrequency && (
                <span className="text-xs text-[#5E6778]">/{listing.rentFrequency}</span>
              )}
            </div>

            {/* Currency switcher pills */}
            <div className="flex items-center gap-1 mt-2 p-0.5 bg-[#F7F3EA] rounded-lg border border-[#E7DFCF]">
              {(["AED", "USD", "EUR", "GBP"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`px-2 py-0.5 text-[10px] font-semibold rounded ${
                    selectedCurrency === curr
                      ? "bg-[#111111] text-[#C99A3B]"
                      : "text-[#5E6778] hover:text-[#111111]"
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] p-4 sm:p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main Featured Photo */}
            <div
              onClick={() => setLightboxOpen(true)}
              className="lg:col-span-3 relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group bg-gray-100"
            >
              <img
                src={listing.images[activeImageIndex]}
                alt={listing.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 right-4 bg-[#111111]/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20">
                Click to Expand Fullscreen Gallery ({listing.images.length} Photos)
              </div>
            </div>

            {/* Thumbnail Stack */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px]">
              {listing.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-20 lg:w-full lg:h-28 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#C99A3B] scale-102"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Facts Bar */}
            <div className="bg-white rounded-2xl p-6 border border-[#E7DFCF] shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-[#E7DFCF]">
              <div className="p-2">
                {listing.propertyType === "warehouse" ? (
                  <>
                    <Warehouse className="w-5 h-5 text-[#C99A3B] mx-auto mb-1.5" />
                    <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-wider block">
                      Category
                    </span>
                    <span className="text-lg font-serif font-bold text-[#111111]">
                      Industrial
                    </span>
                  </>
                ) : (
                  <>
                    <BedDouble className="w-5 h-5 text-[#C99A3B] mx-auto mb-1.5" />
                    <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-wider block">
                      Bedrooms
                    </span>
                    <span className="text-lg font-serif font-bold text-[#111111]">
                      {listing.beds === 0 ? "Studio" : `${listing.beds} Beds`}
                    </span>
                  </>
                )}
              </div>
              <div className="p-2">
                <Bath className="w-5 h-5 text-[#C99A3B] mx-auto mb-1.5" />
                <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-wider block">
                  Bathrooms
                </span>
                <span className="text-lg font-serif font-bold text-[#111111]">
                  {listing.baths} Baths
                </span>
              </div>
              <div className="p-2">
                <Maximize className="w-5 h-5 text-[#C99A3B] mx-auto mb-1.5" />
                <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-wider block">
                  Built-Up Area
                </span>
                <span className="text-lg font-serif font-bold text-[#111111]">
                  {new Intl.NumberFormat("en-AE").format(listing.sizeSqft)} sqft
                </span>
              </div>
              <div className="p-2">
                <Building className="w-5 h-5 text-[#C99A3B] mx-auto mb-1.5" />
                <span className="text-[10px] uppercase font-bold text-[#5E6778] tracking-wider block">
                  Property Type
                </span>
                <span className="text-lg font-serif font-bold text-[#111111] capitalize">
                  {listing.propertyType}
                </span>
              </div>
            </div>

            {/* Description & Architectural Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] mb-4">
                Property Overview
              </h2>
              <p className="text-sm sm:text-base text-[#5E6778] leading-relaxed mb-6 font-light">
                {listing.description}
              </p>

              {listing.highlights && listing.highlights.length > 0 && (
                <div className="pt-6 border-t border-[#E7DFCF]">
                  <h3 className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest mb-4">
                    Architectural & Lifestyle Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {listing.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#111111]">
                        <CheckCircle className="w-4 h-4 text-[#C99A3B] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Amenities Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] mb-6">
                Luxury Amenities & Facilities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {listing.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F3EA] border border-[#E7DFCF] text-xs font-medium text-[#111111]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Plan (If Off-Plan) */}
            {listing.paymentPlanBreakdown && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
                      Official Developer Payment Plan
                    </h2>
                    <p className="text-xs text-[#5E6778] mt-1 font-light">
                      Payment structure provided directly by {listing.developer}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#111111] text-[#C99A3B] text-xs font-bold rounded-lg">
                    {listing.paymentPlan}
                  </span>
                </div>

                <div className="space-y-3">
                  {listing.paymentPlanBreakdown.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F3EA]/70 border border-[#E7DFCF]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#C99A3B] text-white text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-[#111111]">{milestone.stage}</div>
                          <div className="text-[11px] text-[#5E6778]">{milestone.milestoneDescription}</div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#111111]">{milestone.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* UAE Regulatory & Official Verification Block */}
            <div className="bg-[#111111] text-white rounded-2xl p-6 sm:p-8 border border-[#C99A3B]/40 shadow-md">
              <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Regulatory Authority & Official Verification</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <div className="sm:col-span-2 space-y-2 text-xs text-white/80">
                  <p>
                    This listing is registered and fully authorized under official regulatory authority and municipality guidelines.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                    <div>
                      <span className="text-white/40 block">Official Permit Number:</span>
                      <strong className="text-white font-mono">{listing.permitNumber}</strong>
                    </div>
                    <div>
                      <span className="text-white/40 block">Agent BRN:</span>
                      <strong className="text-white font-mono">{listing.agent.brn}</strong>
                    </div>
                    <div>
                      <span className="text-white/40 block">Brokerage ORN:</span>
                      <strong className="text-white font-mono">31980</strong>
                    </div>
                    <div>
                      <span className="text-white/40 block">Developer:</span>
                      <strong className="text-white">{listing.developer || "Verified Private Owner"}</strong>
                    </div>
                  </div>
                </div>

                {/* QR Code Placeholder for DLD compliance */}
                <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                  <QrCode className="w-16 h-16 text-[#C99A3B] mb-2" />
                  <span className="text-[9px] uppercase tracking-wider text-white/60">
                    Scan for DLD Permit Authenticity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols): Agent Card & Private Enquiry Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E7DFCF] shadow-sm">
              <span className="text-[10px] uppercase font-bold text-[#C99A3B] tracking-widest block mb-4">
                Listing Advisor
              </span>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={listing.agent.photo}
                  alt={listing.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C99A3B]"
                />
                <div>
                  <h4 className="text-base font-serif font-bold text-[#111111]">
                    {listing.agent.name}
                  </h4>
                  <p className="text-xs text-[#5E6778]">{listing.agent.title}</p>
                  <p className="text-[10px] text-[#C99A3B] font-mono mt-0.5">
                    BRN: {listing.agent.brn}
                  </p>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <a
                  href={`https://wa.me/${listing.agent.whatsapp}?text=${encodeURIComponent(
                    `Hello ${listing.agent.name}, I am interested in ${listing.title} (Ref: ${listing.id}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#1eb956] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${listing.agent.phone}`}
                  className="py-2.5 px-3 bg-[#111111] text-[#C99A3B] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 border border-[#C99A3B]/40 hover:bg-[#C99A3B] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct</span>
                </a>
              </div>

              {/* Private Viewing Form */}
              <div className="border-t border-[#E7DFCF] pt-5">
                <h5 className="text-xs font-serif font-bold text-[#111111] uppercase tracking-wider mb-3">
                  Schedule Private Viewing
                </h5>

                {enquirySent ? (
                  <div className="p-4 bg-[#F7F3EA] rounded-xl border border-[#C99A3B]/50 text-center text-xs text-[#111111]">
                    <CheckCircle className="w-8 h-8 text-[#C99A3B] mx-auto mb-2" />
                    <strong>Request Submitted</strong>
                    <p className="text-[#5E6778] mt-1">
                      {listing.agent.name} will contact you shortly to confirm your private showing time.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={viewerName}
                      onChange={(e) => setViewerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (+971 ...)"
                      value={viewerPhone}
                      onChange={(e) => setViewerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={viewerEmail}
                      onChange={(e) => setViewerEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#C99A3B] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#8A6420] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Private Inspection</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E7DFCF]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-1">
                  Recommendations
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                  Similar Luxury Properties
                </h3>
              </div>
              <Link
                href="/listings"
                className="text-xs font-semibold text-[#111111] hover:text-[#C99A3B] uppercase tracking-wider"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((sim) => (
                <PropertyCard key={sim.id} listing={sim} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bottom Contact Bar (Section 5 Requirement) */}
      <div className="fixed bottom-16 sm:bottom-18 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E7DFCF] px-4 py-3 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[9px] uppercase font-bold text-[#5E6778] tracking-wider block">
            Asking Price
          </span>
          <span className="text-base font-serif font-bold text-[#111111]">
            {selectedCurrency} {formatPrice(convertedPrice)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${listing.agent.whatsapp}?text=${encodeURIComponent(
              `Hello ${listing.agent.name}, I would like to enquire about ${listing.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3.5 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${listing.agent.phone}`}
            className="py-2.5 px-3.5 bg-[#111111] text-[#C99A3B] border border-[#C99A3B]/40 text-xs font-bold rounded-xl flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between text-white pb-4">
            <span className="text-sm font-serif">
              {listing.title} ({activeImageIndex + 1} / {listing.images.length})
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image */}
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src={listing.images[activeImageIndex]}
              alt=""
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />

            <button
              onClick={() =>
                setActiveImageIndex((prev) => (prev === 0 ? listing.images.length - 1 : prev - 1))
              }
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setActiveImageIndex((prev) => (prev === listing.images.length - 1 ? 0 : prev + 1))
              }
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 pt-4 overflow-x-auto">
            {listing.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`w-14 h-10 rounded overflow-hidden border ${
                  activeImageIndex === i ? "border-[#C99A3B]" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
