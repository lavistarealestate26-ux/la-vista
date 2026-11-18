"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MOCK_LISTINGS } from "@/data/mockListings";
import PropertyCard from "../properties/PropertyCard";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedProperties() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "commercial" | "leasing">("all");

  const filtered = MOCK_LISTINGS.filter((item) => {
    if (activeCategory === "all") return item.featured;
    if (activeCategory === "leasing") {
      return item.category === "leasing" || item.purpose === "rent" || item.purpose === "leasing";
    }
    return item.category === activeCategory;
  }).slice(0, 6);

  return (
    <section className="py-20 bg-[#F7F3EA]/50 border-b border-[#E7DFCF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.feat_curated_badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight">
              {t.feat_heading}
            </h2>
            <p className="text-[#5E6778] text-sm sm:text-base max-w-xl mt-2 font-light">
              {t.feat_subtitle}
            </p>
          </div>

          {/* Filter Pills aligned with client categories */}
          <div className="flex items-center gap-1.5 mt-6 md:mt-0 p-1 bg-white rounded-xl border border-[#E7DFCF] shadow-sm overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: "all", label: "All Curated" },
              { id: "residential", label: "Residential" },
              { id: "commercial", label: "Commercial" },
              { id: "leasing", label: "Leasing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all shrink-0 whitespace-nowrap ${
                  activeCategory === tab.id
                    ? "bg-[#111111] text-[#C99A3B]"
                    : "text-[#5E6778] hover:text-[#111111]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((listing, idx) => (
            <PropertyCard key={listing.id} listing={listing} priority={idx < 3} />
          ))}
        </div>

        {/* Bottom CTA to View All */}
        <div className="mt-14 text-center">
          <Link
            href={activeCategory === "all" ? "/listings" : `/listings?category=${activeCategory}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white hover:bg-[#C99A3B] transition-all rounded-xl text-xs uppercase tracking-widest font-semibold shadow-lg group"
          >
            <span>{t.feat_view_all}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
