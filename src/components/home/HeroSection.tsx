"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search,
  MapPin,
  ChevronDown,
  BedDouble,
  BadgeDollarSign,
} from "lucide-react";

const UAQ_AREAS = [
  "Al Sinniyah Island",
  "Al Salamah",
  "UAQ Marina",
  "Mangrove Beachfront",
  "Al Ramlah",
  "Al Raudah",
  "Al Khor District",
  "UAQ Industrial Area",
  "Falaj Al Mualla",
  "Wider UAE - Coastal Mansions",
  "Wider UAE - Metro Skyline",
];

const PRICE_RANGES = {
  residential: [
    { label: "Any Price", min: "", max: "" },
    { label: "Up to AED 1,500,000", min: "", max: "1500000" },
    { label: "AED 1.5M – AED 3,000,000", min: "1500000", max: "3000000" },
    { label: "AED 3M – AED 6,000,000", min: "3000000", max: "6000000" },
    { label: "AED 6M – AED 15,000,000", min: "6000000", max: "15000000" },
    { label: "AED 15M – AED 30,000,000+", min: "15000000", max: "30000000" },
  ],
  commercial: [
    { label: "Any Budget", min: "", max: "" },
    { label: "Under AED 2,000,000", min: "", max: "2000000" },
    { label: "AED 2M – AED 5,000,000", min: "2000000", max: "5000000" },
    { label: "AED 5M – AED 12,000,000", min: "5000000", max: "12000000" },
    { label: "AED 12M – AED 25,000,000+", min: "12000000", max: "25000000" },
  ],
  leasing: [
    { label: "Any Lease Rate", min: "", max: "" },
    { label: "Up to AED 60,000 / yr", min: "", max: "60000" },
    { label: "AED 60k – AED 120,000 / yr", min: "60000", max: "120000" },
    { label: "AED 120k – AED 250,000 / yr", min: "120000", max: "250000" },
    { label: "AED 250,000+ / yr", min: "250000", max: "" },
  ],
};

export default function HeroSection() {
  const router = useRouter();
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // States
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "leasing">("residential");
  const [searchArea, setSearchArea] = useState("");
  const [selectedBeds, setSelectedBeds] = useState("");
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(0);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  // Auto-play muted video guaranteed on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, []);

  // Filter area suggestions
  const filteredAreas = UAQ_AREAS.filter((area) =>
    area.toLowerCase().includes(searchArea.toLowerCase())
  );

  // Handle Search Submission -> Navigates to /listings with category & community
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("category", activeTab);

    if (searchArea.trim()) {
      params.set("community", searchArea.trim());
    }
    if (selectedBeds) {
      params.set("beds", selectedBeds);
    }
    const currentPriceList = PRICE_RANGES[activeTab];
    const chosenPrice = currentPriceList[selectedPriceIndex];
    if (chosenPrice?.min) params.set("minPrice", chosenPrice.min);
    if (chosenPrice?.max) params.set("maxPrice", chosenPrice.max);

    router.push(`/listings?${params.toString()}`);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100dvh] lg:min-h-[860px] flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 lg:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#111111]"
    >
      {/* Background Autoplaying Coastal Video (Umm Al Quwain & Coastal UAE) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-105 transform duration-1000 ease-out"
      >
        <source src="/videos/hero-uaq-coastal.mp4" type="video/mp4" />
      </video>

      {/* Dedicated top scrim ensuring navbar always has rich dark contrast behind it */}
      <div className="absolute top-0 inset-x-0 h-48 sm:h-56 bg-gradient-to-b from-black/95 via-black/70 to-transparent pointer-events-none z-[1]" />

      {/* Cinematic Dark Gradient Overlay (Ensures AA text readability across entire frame) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 pointer-events-none z-[1]" />

      {/* Main Headline and Search Bar Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Luxury Editorial Overline (No enclosed pill) */}
          <div className="flex items-center gap-2.5 text-[#C99A3B] text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C99A3B]" />
            <span>{t.hero_badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-4">
            {t.hero_title_1} <br className="hidden sm:block" />
            <span className="text-[#C99A3B] italic font-normal">{t.hero_title_italic}</span>
          </h1>

          {/* Supporting line */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-light mb-8">
            {t.hero_subtitle}
          </p>
        </div>

        {/* Search Bar Component */}
        <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-5 border border-white/30 text-[#111111]">
          {/* Categories: Residential | Commercial | Leasing */}
          <div className="flex items-center gap-2 mb-4 border-b border-[#E7DFCF] pb-3 overflow-x-auto no-scrollbar">
            {(
              [
                { id: "residential", label: t.hero_tab_residential },
                { id: "commercial", label: t.hero_tab_commercial },
                { id: "leasing", label: t.hero_tab_leasing },
              ] as const
            ).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedPriceIndex(0);
                  }}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-lg transition-all shrink-0 whitespace-nowrap ${
                    isActive
                      ? "bg-[#111111] text-[#C99A3B]"
                      : "text-[#5E6778] hover:text-[#111111] hover:bg-[#F7F3EA]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#C99A3B]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Inputs */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Input 1: Area / Community with Type-ahead */}
            <div className="relative md:col-span-5">
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                {t.hero_label_location}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#C99A3B] absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder={t.hero_placeholder_location}
                  value={searchArea}
                  onChange={(e) => {
                    setSearchArea(e.target.value);
                    setSuggestionsOpen(true);
                  }}
                  onFocus={() => setSuggestionsOpen(true)}
                  className="w-full pl-10 pr-4 py-3 min-h-[46px] text-base sm:text-sm bg-[#F7F3EA]/70 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] text-[#111111] placeholder:text-[#5E6778]/70"
                />
              </div>

              {/* Type-Ahead Suggestions Dropdown */}
              {suggestionsOpen && searchArea.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E7DFCF] rounded-xl shadow-xl max-h-52 overflow-y-auto z-50 py-1">
                  {filteredAreas.length > 0 ? (
                    filteredAreas.map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => {
                          setSearchArea(area);
                          setSuggestionsOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-xs text-[#111111] hover:bg-[#F7F3EA] flex items-center justify-between"
                      >
                        <span>{area}</span>
                        <MapPin className="w-3.5 h-3.5 text-[#C99A3B]" />
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-xs text-[#5E6778]">
                      No exact match, press Search to query all listings.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input 2: Bedrooms / Space Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                {t.hero_label_beds}
              </label>
              <div className="relative">
                <BedDouble className="w-4 h-4 text-[#C99A3B] absolute left-3.5 top-3" />
                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 min-h-[46px] text-base sm:text-sm bg-[#F7F3EA]/70 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] text-[#111111] appearance-none"
                >
                  <option value="">{t.hero_any_beds}</option>
                  <option value="0">{t.spec_studio}</option>
                  <option value="1">1 {t.spec_beds}</option>
                  <option value="2">2 {t.spec_beds}</option>
                  <option value="3">3 {t.spec_beds}</option>
                  <option value="4">4 {t.spec_beds}</option>
                  <option value="5">5+ {t.spec_beds}</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#5E6778] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Input 3: Price / Budget Range */}
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                {t.hero_label_price}
              </label>
              <div className="relative">
                <BadgeDollarSign className="w-4 h-4 text-[#C99A3B] absolute left-3 top-3" />
                <select
                  value={selectedPriceIndex}
                  onChange={(e) => setSelectedPriceIndex(Number(e.target.value))}
                  className="w-full pl-9 pr-6 py-3 min-h-[46px] text-base sm:text-xs bg-[#F7F3EA]/70 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] text-[#111111] appearance-none"
                >
                  {PRICE_RANGES[activeTab].map((range, idx) => (
                    <option key={range.label} value={idx}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#5E6778] absolute right-2 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-2 md:pt-4">
              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-4 bg-[#C99A3B] hover:bg-[#8A6420] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider active:scale-98"
              >
                <Search className="w-4 h-4" />
                <span>{t.hero_search_btn}</span>
              </button>
            </div>
          </form>

          {/* Single Line of Trust Stats Below Search */}
          <div className="mt-4 pt-3 border-t border-[#E7DFCF]/80 flex flex-wrap items-center justify-between text-xs text-[#5E6778] font-medium gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C99A3B]" />
              <span className="text-[#111111] font-semibold">{t.stat_listings}</span>
            </div>
            <span className="hidden sm:inline text-[#E7DFCF]">|</span>
            <div>
              <span className="text-[#111111] font-semibold">{t.stat_advisors}</span>
            </div>
            <span className="hidden sm:inline text-[#E7DFCF]">|</span>
            <div>
              <span className="text-[#111111] font-semibold">{t.stat_countries}</span>
            </div>
            <span className="hidden sm:inline text-[#E7DFCF]">|</span>
            <div>
              <span className="text-[#111111] font-semibold">{t.stat_volume}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
