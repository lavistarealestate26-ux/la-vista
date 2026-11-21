import React from "react";
import Link from "next/link";
import { MOCK_DEVELOPERS } from "@/data/mockListings";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Real Estate Developers in Umm Al Quwain | La Vista",
  description:
    "The master developers shaping Umm Al Quwain and the wider UAE, their current projects, and how La Vista helps you buy directly at launch prices.",
  openGraph: {
    title: "Real Estate Developers in Umm Al Quwain | La Vista",
    description:
      "The master developers shaping Umm Al Quwain and the wider UAE, their current projects, and how La Vista helps you buy directly at launch prices.",
  },
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
              Leading UAE Master Developers
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              La Vista Real Estate maintains direct institutional relationships with top-tier master developers across Umm Al Quwain and the wider UAE, ensuring priority inventory allocations and pre-launch pricing.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DEVELOPERS.map((dev) => (
            <div
              key={dev.name}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-32 px-2.5 rounded-xl bg-[#111111] flex items-center justify-center border border-[#C99A3B]/30 shrink-0">
                    <img src={dev.logo} alt={dev.name} className="h-7 max-w-[110px] w-auto object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-[#C99A3B] bg-[#F7F3EA] px-2.5 py-1 rounded-md border border-[#E7DFCF]">
                    {dev.tier}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-2">
                  {dev.name}
                </h3>

                <p className="text-xs text-[#5E6778] mb-6 font-light leading-relaxed">
                  {dev.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DFCF] flex items-center justify-between text-xs">
                <span className="text-[#5E6778] font-medium">{dev.projects}</span>
                <Link
                  href={`/listings?search=${encodeURIComponent(dev.name)}`}
                  className="font-semibold text-[#C99A3B] group-hover:text-[#8A6420] inline-flex items-center gap-1"
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
