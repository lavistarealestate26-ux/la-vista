"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin, Share2, Heart, ArrowUpRight } from "lucide-react";
import { Listing } from "@/types/listing";
import { useLanguage } from "@/context/LanguageContext";

interface PropertyCardProps {
  listing: Listing;
  priority?: boolean;
}

export default function PropertyCard({ listing, priority = false }: PropertyCardProps) {
  const { t } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);

  // Format AED price nicely
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AE").format(price);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Link href={`/properties/${listing.slug}`} className="block w-full h-full">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading={priority ? "eager" : "lazy"}
          />
        </Link>

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 max-w-[calc(100%-48px)]">
          <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#111111] text-[#C99A3B] rounded-md shadow-sm">
            {listing.purpose === "off-plan" ? "Off-Plan" : listing.purpose.toUpperCase()}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md text-[#111111] rounded-md">
            {listing.propertyType}
          </span>
          {listing.featured && (
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-[#C99A3B] text-white rounded-md">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Save to favorites"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#111111] hover:text-[#C99A3B] hover:bg-white flex items-center justify-center transition-all z-10 shrink-0"
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-[#C99A3B] text-[#C99A3B]" : ""}`} />
        </button>

        {/* Community on Bottom Left of Image */}
        <div className="absolute bottom-3 left-3 text-white flex items-center gap-1 text-xs font-medium z-10 drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#C99A3B]" />
          <span>{listing.community}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price */}
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-xs uppercase font-medium text-[#5E6778]">AED</span>
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#111111] tracking-tight">
              {formatPrice(listing.priceAED)}
            </span>
            {listing.rentFrequency && (
              <span className="text-xs text-[#5E6778] font-medium">/{listing.rentFrequency}</span>
            )}
          </div>

          {/* Title */}
          <Link href={`/properties/${listing.slug}`} className="block group-hover:text-[#C99A3B] transition-colors">
            <h3 className="text-sm sm:text-base font-serif font-semibold text-[#111111] line-clamp-1 mb-1">
              {listing.title}
            </h3>
          </Link>

          {/* Subtitle / Tagline */}
          <p className="text-xs text-[#5E6778] line-clamp-1 mb-3 sm:mb-4">
            {listing.tagline || listing.description}
          </p>
        </div>

        <div>
          {/* Specs Bar (Beds, Baths, Sqft) */}
          <div className="flex items-center justify-between py-2.5 border-y border-[#E7DFCF] text-[11px] sm:text-xs text-[#5E6778] mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A3B] shrink-0" />
              <span className="font-semibold text-[#111111] whitespace-nowrap">
                {listing.beds === 0 ? t.spec_studio : `${listing.beds} ${t.spec_beds}`}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A3B] shrink-0" />
              <span className="font-semibold text-[#111111] whitespace-nowrap">{listing.baths} {t.spec_baths}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A3B] shrink-0" />
              <span className="font-semibold text-[#111111] whitespace-nowrap">{new Intl.NumberFormat("en-AE").format(listing.sizeSqft)} {t.spec_sqft}</span>
            </div>
          </div>

          {/* Card Footer: View Details & Agent */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={listing.agent.photo}
                alt={listing.agent.name}
                className="w-7 h-7 rounded-full object-cover border border-[#E7DFCF]"
              />
              <span className="text-xs font-medium text-[#5E6778] line-clamp-1">
                {listing.agent.name}
              </span>
            </div>

            <Link
              href={`/properties/${listing.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#C99A3B] group-hover:text-[#8A6420] transition-colors"
            >
              <span>{t.card_explore}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
