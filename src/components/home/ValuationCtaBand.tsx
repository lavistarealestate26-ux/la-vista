"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import ValuationModal from "../modals/ValuationModal";
import { useLanguage } from "@/context/LanguageContext";

export default function ValuationCtaBand() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 bg-[#111111] text-white overflow-hidden">
        {/* Background Overlay Image with Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Villa Estate"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-[#C99A3B] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-px bg-[#C99A3B]" />
              <span>{t.val_badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
              {t.val_heading}
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-8">
              {t.val_subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-widest font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 group"
              >
                <Calculator className="w-4 h-4" />
                <span>{t.val_btn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-xs text-white/60">
                <ShieldCheck className="w-4 h-4 text-[#C99A3B]" />
                <span>{t.val_trust}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
