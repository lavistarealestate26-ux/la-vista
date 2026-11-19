"use client";

import React from "react";
import Link from "next/link";
import { DEVELOPER_PARTNERS } from "@/data/mockListings";
import { Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DeveloperMarquee() {
  const { t } = useLanguage();
  // Repeat the 3 partner logos seamlessly across both halves of the marquee loop
  const basePartners = [...DEVELOPER_PARTNERS, ...DEVELOPER_PARTNERS, ...DEVELOPER_PARTNERS, ...DEVELOPER_PARTNERS];
  const marqueeList = [...basePartners, ...basePartners];

  return (
    <section
      aria-label="Developer Partners"
      className="relative z-10 w-full bg-[#111111] border-b border-[#C99A3B]/20 py-5 sm:py-6 overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C99A3B]" />
          <p className="text-xs uppercase tracking-[0.25em] text-[#C99A3B] font-semibold">
            {t.dev_partners_label}
          </p>
        </div>
        <Link
          href="/developers"
          className="hidden sm:inline-flex items-center text-xs text-[#5E6778] hover:text-[#C99A3B] transition-colors"
        >
          {t.dev_view_all}
        </Link>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Soft fade masks on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-5 sm:gap-8 py-2">
          {marqueeList.map((dev, idx) => (
            <Link
              key={`${dev.name}-${idx}`}
              href="/developers"
              title={`${dev.name} · ${dev.tier}`}
              className="flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C99A3B]/60 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer flex-shrink-0 h-14 sm:h-18 md:h-20 min-w-[160px] sm:min-w-[220px]"
            >
              <img
                src={dev.logo}
                alt={dev.name}
                className="h-6 sm:h-8 md:h-9 w-auto max-w-[130px] sm:max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
