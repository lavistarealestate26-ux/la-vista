import React from "react";
import Link from "next/link";
import { DEVELOPER_PARTNERS } from "@/data/mockListings";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Dubai Master Developers | La Vista Real Estate Partners",
  description: "Official developer partners including Emaar, Nakheel, DAMAC, Sobha, Meraas, Omniyat, and Aldar.",
};

export default function DevelopersPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Official Allocations
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Dubai Master Developers
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              La Vista Real Estate maintains direct institutional relationships with Dubai’s top tier master developers, ensuring priority inventory allocations and pre-launch pricing.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVELOPER_PARTNERS.map((dev) => (
            <div
              key={dev.name}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#111111] text-[#C99A3B] flex items-center justify-center font-serif font-bold text-lg">
                  {dev.name.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-[#C99A3B] bg-[#F7F3EA] px-2.5 py-1 rounded-md border border-[#E7DFCF]">
                  {dev.tier}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-2">
                {dev.name}
              </h3>

              <p className="text-xs text-[#5E6778] mb-6 font-light">
                Delivering visionary master developments across Downtown Dubai, Dubai Harbour, and prime waterfronts.
              </p>

              <div className="pt-4 border-t border-[#E7DFCF] flex items-center justify-between">
                <span className="text-xs text-[#5E6778]">
                  <strong className="text-[#111111]">{dev.projects}+</strong> Projects Delivered
                </span>
                <Link
                  href="/listings?purpose=off-plan"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#C99A3B] group-hover:text-[#8A6420]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
