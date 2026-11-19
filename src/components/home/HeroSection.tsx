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
  "Al Haditha",
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
  const [bedsOpen, setBedsOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const searchFormRef = useRef<HTMLFormElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchFormRef.current && !searchFormRef.current.contains(e.target as Node)) {
        setBedsOpen(false);
        setPriceOpen(false);
        setSuggestionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getBedsLabel = (val: string) => {
    switch (val) {
      case "0": return t.spec_studio || "Studio";
      case "1": return `1 ${t.spec_beds || "Bed"}`;
      case "2": return `2 ${t.spec_beds || "Beds"}`;
      case "3": return `3 ${t.spec_beds || "Beds"}`;
      case "4": return `4 ${t.spec_beds || "Beds"}`;
      case "5": return `5+ ${t.spec_beds || "Beds"}`;
      default: return t.hero_any_beds || "Any Size";
    }
  };

  const BEDS_OPTIONS = [
    { value: "", label: t.hero_any_beds || "Any Size" },
    { value: "0", label: t.spec_studio || "Studio" },
    { value: "1", label: `1 ${t.spec_beds || "Bedroom"}` },
    { value: "2", label: `2 ${t.spec_beds || "Bedrooms"}` },
    { value: "3", label: `3 ${t.spec_beds || "Bedrooms"}` },
    { value: "4", label: `4 ${t.spec_beds || "Bedrooms"}` },
    { value: "5", label: `5+ ${t.spec_beds || "Bedrooms"}` },
  ];

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
      className="relative z-20 w-full min-h-[100dvh] lg:min-h-[860px] flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 lg:pt-36 pb-24 md:pb-36 bg-[#111111]"
    >
      {/* Background Autoplaying Coastal Video with isolated overflow-hidden to prevent scaling bleed without clipping UI dropdowns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover select-none scale-105 transform duration-1000 ease-out"
        >
          <source src="/videos/hero-uaq-coastal.mp4" type="video/mp4" />
        </video>

        {/* Dedicated top scrim ensuring navbar always has rich dark contrast behind it */}
        <div className="absolute top-0 inset-x-0 h-48 sm:h-56 bg-gradient-to-b from-black/95 via-black/70 to-transparent z-[1]" />

        {/* Cinematic Dark Gradient Overlay (Ensures AA text readability across entire frame) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 z-[1]" />
      </div>

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
        <div className="relative z-30 w-full max-w-5xl bg-white/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_24px_70px_-15px_rgba(0,0,0,0.35)] p-3.5 sm:p-6 border border-[#E7DFCF]/80 text-[#111111]">
          {/* Categories Segmented Control: Residential | Commercial | Leasing */}
          <div className="flex items-center justify-between mb-3 pb-2.5 sm:mb-4 sm:pb-3 border-b border-[#E7DFCF]/70">
            <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto p-1 bg-[#F7F3EA] rounded-xl border border-[#E7DFCF] gap-1">
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
                    className={`px-1.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-bold tracking-normal sm:tracking-wider uppercase rounded-lg transition-all text-center justify-center whitespace-nowrap truncate ${
                      isActive
                        ? "bg-[#111111] text-[#C99A3B] shadow-sm"
                        : "text-[#5E6778] hover:text-[#111111] hover:bg-white/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#8A7A65] font-semibold">
              Umm Al Quwain & UAE
            </span>
          </div>

          {/* Unified Sleek Search Console Bar */}
          <form
            ref={searchFormRef}
            onSubmit={handleSearch}
            className="bg-[#FAF8F5] border border-[#E7DFCF] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 grid grid-cols-2 md:grid-cols-12 gap-1.5 sm:gap-2 items-center"
          >
            {/* Field 1: Area / Community with Type-ahead (Full width on mobile, 4 cols on desktop) */}
            <div className={`relative col-span-2 md:col-span-4 px-3 py-2 rounded-xl bg-white/70 hover:bg-white focus-within:bg-white border border-transparent focus-within:border-[#C99A3B]/40 focus-within:shadow-sm transition-all cursor-text ${suggestionsOpen ? "z-30" : "z-10"}`}>
              <label className="block text-[10px] uppercase font-bold text-[#8A7A65] tracking-[0.16em] mb-0.5">
                {t.hero_label_location}
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C99A3B] shrink-0" />
                <input
                  type="text"
                  placeholder={t.hero_placeholder_location}
                  value={searchArea}
                  onChange={(e) => {
                    setSearchArea(e.target.value);
                    setSuggestionsOpen(true);
                  }}
                  onFocus={() => {
                    setSuggestionsOpen(true);
                    setBedsOpen(false);
                    setPriceOpen(false);
                  }}
                  className="w-full bg-transparent text-[#111111] font-medium text-sm outline-none placeholder:text-[#5E6778]/60 placeholder:font-normal truncate"
                />
              </div>

              {/* Suggestions Dropdown */}
              {suggestionsOpen && searchArea.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E7DFCF] rounded-2xl shadow-2xl max-h-56 overflow-y-auto z-[100] py-1 divide-y divide-[#E7DFCF]/40">
                  {filteredAreas.length > 0 ? (
                    filteredAreas.map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => {
                          setSearchArea(area);
                          setSuggestionsOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-xs sm:text-sm text-[#111111] hover:bg-[#F7F3EA] flex items-center justify-between transition-colors"
                      >
                        <span className="font-medium">{area}</span>
                        <MapPin className="w-3.5 h-3.5 text-[#C99A3B]" />
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2.5 text-xs text-[#5E6778] italic">
                      No exact match, press Search to query all listings.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Field 2: Custom Sleek Bedrooms Dropdown (50% on mobile, 3 cols on desktop) */}
            <div className={`relative col-span-1 md:col-span-3 px-3 py-2 rounded-xl bg-white/70 hover:bg-white focus-within:bg-white border border-transparent hover:border-[#E7DFCF] hover:shadow-sm transition-all ${bedsOpen ? "z-30" : "z-10"}`}>
              <label className="block text-[10px] uppercase font-bold text-[#8A7A65] tracking-[0.16em] mb-0.5 pointer-events-none truncate">
                {t.hero_label_beds}
              </label>
              <button
                type="button"
                onClick={() => {
                  setBedsOpen(!bedsOpen);
                  setPriceOpen(false);
                  setSuggestionsOpen(false);
                }}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 truncate pr-1">
                  <BedDouble className="w-4 h-4 text-[#C99A3B] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#111111] truncate">
                    {getBedsLabel(selectedBeds)}
                  </span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#5E6778] shrink-0 transition-transform ${bedsOpen ? "rotate-180 text-[#C99A3B]" : ""}`} />
              </button>

              {/* Sleek Floating Bedrooms Dropdown */}
              {bedsOpen && (
                <div className="absolute top-full left-0 w-[220px] sm:w-56 mt-2 bg-white border border-[#E7DFCF] rounded-2xl shadow-2xl py-1.5 z-[100] max-h-72 overflow-y-auto no-scrollbar animate-fadeIn">
                  {BEDS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSelectedBeds(opt.value);
                        setBedsOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-[#F7F3EA] transition-colors ${
                        selectedBeds === opt.value
                          ? "text-[#C99A3B] font-bold bg-[#F7F3EA]/60"
                          : "text-[#111111]"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {selectedBeds === opt.value && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Custom Sleek Price Dropdown (50% on mobile, 3 cols on desktop) */}
            <div className={`relative col-span-1 md:col-span-3 px-3 py-2 rounded-xl bg-white/70 hover:bg-white focus-within:bg-white border border-transparent hover:border-[#E7DFCF] hover:shadow-sm transition-all ${priceOpen ? "z-30" : "z-10"}`}>
              <label className="block text-[10px] uppercase font-bold text-[#8A7A65] tracking-[0.16em] mb-0.5 pointer-events-none truncate">
                {t.hero_label_price}
              </label>
              <button
                type="button"
                onClick={() => {
                  setPriceOpen(!priceOpen);
                  setBedsOpen(false);
                  setSuggestionsOpen(false);
                }}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 truncate pr-1">
                  <BadgeDollarSign className="w-4 h-4 text-[#C99A3B] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#111111] truncate">
                    {PRICE_RANGES[activeTab][selectedPriceIndex]?.label || "Any Price"}
                  </span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#5E6778] shrink-0 transition-transform ${priceOpen ? "rotate-180 text-[#C99A3B]" : ""}`} />
              </button>

              {/* Sleek Floating Price Dropdown - right aligned on mobile to avoid overflow */}
              {priceOpen && (
                <div className="absolute top-full right-0 sm:right-auto sm:left-0 md:-left-4 w-[230px] sm:w-64 mt-2 bg-white border border-[#E7DFCF] rounded-2xl shadow-2xl py-1.5 z-[100] max-h-72 overflow-y-auto no-scrollbar animate-fadeIn">
                  {PRICE_RANGES[activeTab].map((range, idx) => (
                    <button
                      key={range.label}
                      type="button"
                      onClick={() => {
                        setSelectedPriceIndex(idx);
                        setPriceOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-[#F7F3EA] transition-colors ${
                        selectedPriceIndex === idx
                          ? "text-[#C99A3B] font-bold bg-[#F7F3EA]/60"
                          : "text-[#111111]"
                      }`}
                    >
                      <span className="truncate">{range.label}</span>
                      {selectedPriceIndex === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 4: Search Action Button (Full width on mobile, 2 cols on desktop) */}
            <div className="col-span-2 md:col-span-2 p-0.5 sm:p-1">
              <button
                type="submit"
                className="w-full h-11 md:h-12 px-4 bg-gradient-to-r from-[#C99A3B] via-[#D8AD55] to-[#B3872F] hover:from-[#B58830] hover:to-[#966E20] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_6px_18px_-3px_rgba(201,154,59,0.5)] hover:shadow-[0_10px_24px_-3px_rgba(201,154,59,0.65)] hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider group"
              >
                <Search className="w-4 h-4 shrink-0 transition-transform group-hover:scale-115" />
                <span className="whitespace-nowrap font-bold">Search</span>
              </button>
            </div>
          </form>

          {/* Single Line of Trust Stats Below Search */}
          <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3.5 border-t border-[#E7DFCF]/70 flex items-center justify-between text-[11px] sm:text-xs text-[#5E6778] gap-2">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B] animate-pulse shrink-0" />
              <span className="text-[#111111] font-semibold truncate">{t.stat_listings}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[#C99A3B]">✦</span>
              <span className="text-[#111111] font-semibold">{t.stat_advisors}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[#C99A3B]">✦</span>
              <span className="text-[#5E6778] font-medium">{t.stat_countries}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[#C99A3B]">✦</span>
              <span className="text-[#111111] font-bold text-[#8A6420]">{t.stat_volume}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
