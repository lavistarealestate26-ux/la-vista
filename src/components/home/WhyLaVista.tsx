"use client";

import React from "react";
import { Shield, Gem, Users, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const VALUE_POINTS = [
  {
    icon: Gem,
    title: "Curated Ultra-Prime Portfolio",
    description: "We don't list everything. We curate only the most exceptional properties with genuine investment fundamentals, prime architecture, and proven capital appreciation.",
  },
  {
    icon: Users,
    title: "Multilingual Private Advisors",
    description: "Our licensed senior brokers speak 12+ languages fluently—delivering confidential, discreet advisory tailored to private families, sovereign investors, and international buyers.",
  },
  {
    icon: Shield,
    title: "Full UAE Regulatory & Municipality Compliance",
    description: "Every listing is 100% verified with official municipality and regulatory permits and authenticated ownership, ensuring transparent, seamless, and legally secure conveyancing.",
  },
  {
    icon: Award,
    title: "End-to-End Wealth Advisory",
    description: "Beyond the transaction: complete support with the UAE 10-Year Golden Visa, turnkey luxury interior furnishings, mortgage financing, and institutional property management.",
  },
];

export default function WhyLaVista() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#F7F3EA] border-b border-[#E7DFCF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#C99A3B] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-5 h-px bg-[#C99A3B]" />
            <span>{t.why_badge}</span>
            <span className="w-5 h-px bg-[#C99A3B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight">
            {t.why_heading}
          </h2>
          <p className="text-[#5E6778] text-sm sm:text-base mt-3 font-light">
            {t.why_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#E7DFCF] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7F3EA] border border-[#E7DFCF] group-hover:border-[#C99A3B] group-hover:bg-[#C99A3B]/10 flex items-center justify-center text-[#C99A3B] mb-6 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6778] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
