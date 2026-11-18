import React from "react";
import Link from "next/link";
import { MOCK_COMMUNITIES } from "@/data/mockListings";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Communities Guide | Umm Al Quwain & Wider UAE | La Vista Real Estate",
  description:
    "Explore premier residential and coastal communities across Umm Al Quwain and the wider UAE: Al Sinniyah Island, Al Salamah, UAQ Marina, and Mangrove Beachfront.",
};

export default function CommunitiesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Area Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Prime Umm Al Quwain & UAE Communities
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Explore premier coastal and urban destinations defined by pristine island natural sanctuaries, beachfront living, high investment yields, and strategic UAE connectivity.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COMMUNITIES.map((community) => (
            <Link
              key={community.name}
              href={`/listings?community=${encodeURIComponent(community.name)}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md text-[#C99A3B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {community.region}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-2">
                    {community.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6778] font-light leading-relaxed mb-4">
                    {community.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E7DFCF] mt-2 flex items-center justify-between text-xs">
                <span className="text-[#5E6778]">
                  <strong className="text-[#111111]">{community.propertyCount}</strong>
                </span>
                <span className="font-semibold text-[#C99A3B] inline-flex items-center gap-1 group-hover:text-[#8A6420]">
                  <span>Explore Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
