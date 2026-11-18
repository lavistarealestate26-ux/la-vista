"use client";

import React from "react";
import Link from "next/link";
import { DEVELOPER_PARTNERS } from "@/data/mockListings";
import { Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DeveloperMarquee() {
  const { t } = useLanguage();
  // Duplicate array to ensure seamless infinite looping
  const marqueeList = [...DEVELOPER_PARTNERS, ...DEVELOPER_PARTNERS];

  return (
    <section
      aria-label="Developer Partners"
      className="relative z-10 w-full bg-[#111111] border-b border-[#C99A3B]/20 py-6 overflow-hidden select-none"
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
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2">
          {marqueeList.map((dev, idx) => (
            <div
              key={`${dev.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C99A3B]/60 hover:bg-white/10 transition-all duration-300 group cursor-pointer flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C99A3B]/10 flex items-center justify-center text-[#C99A3B] group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">
                  {dev.name}
                </span>
                <span className="text-[10px] text-[#C99A3B] font-medium tracking-wider uppercase">
                  {dev.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
