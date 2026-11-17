"use client";

import React from "react";
import Link from "next/link";
import { DUBAI_COMMUNITIES } from "@/data/mockListings";
import { MapPin, ArrowRight, Compass } from "lucide-react";

export default function ExploreCommunities() {
  return (
    <section className="py-20 bg-white border-b border-[#E7DFCF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Prestigious Destinations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight">
              Explore Dubai Communities
            </h2>
            <p className="text-[#5E6778] text-sm sm:text-base max-w-xl mt-2 font-light">
              From beachfront sanctuaries on the Palm to skyline high-rises in Downtown, discover the distinct lifestyle of Dubai’s most coveted postcodes.
            </p>
          </div>

          <Link
            href="/communities"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#C99A3B] transition-colors mt-4 md:mt-0"
          >
            <span>View All Communities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Community Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUBAI_COMMUNITIES.map((community) => (
            <Link
              key={community.slug}
              href={`/listings?community=${encodeURIComponent(community.name)}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-[#E7DFCF] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/30 transition-all" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md text-white rounded-md border border-white/20">
                  {community.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#C99A3B] transition-colors">
                    {community.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C99A3B] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <p className="text-xs text-white/70 line-clamp-2 mb-3 font-light">
                  {community.description}
                </p>

                <div className="flex items-center justify-between text-xs font-medium border-t border-white/15 pt-2 text-white/80">
                  <span>{community.listingCount} Properties Available</span>
                  <span className="text-[#C99A3B] font-semibold">From {community.startingPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
