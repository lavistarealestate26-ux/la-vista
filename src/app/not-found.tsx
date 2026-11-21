import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  Building2,
  MapPin,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Search,
  Compass,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export const metadata: Metadata = {
  title: "404 - Page Not Found | La Vista Real Estate",
  description:
    "The page you are looking for could not be found. Explore luxury properties in Umm Al Quwain or contact La Vista Real Estate advisors.",
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Featured Properties",
      desc: "Waterfront villas, apartments, commercial hubs & warehouses",
      href: "/listings",
      icon: Building2,
      badge: "450+ Listed",
    },
    {
      title: "Prime Communities",
      desc: "Al Sinniyah Island, Al Salamah, UAQ Marina & Mangroves",
      href: "/communities",
      icon: MapPin,
      badge: "Umm Al Quwain",
    },
    {
      title: "AMRA Residences",
      desc: "Flagship luxury waterfront project with flexible payment plans",
      href: "/projects/amra",
      icon: Sparkles,
      badge: "New Launch",
    },
    {
      title: "Property Valuation",
      desc: "Free certified market appraisal from licensed UAQ advisors",
      href: "/valuation",
      icon: Compass,
      badge: "Complimentary",
    },
  ];

  return (
    <div className="relative min-h-[90vh] bg-[#0A0D14] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 overflow-hidden">
      {/* Subtle Luxury Ambient Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#C99A3B]/15 via-[#C99A3B]/5 to-transparent blur-[120px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#C99A3B]/5 blur-[90px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto w-full text-center z-10">
        {/* Luxury Monogram Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A3B]/40 bg-[#161B26]/80 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.22em] mb-4 shadow-lg shadow-[#000000]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B] animate-pulse" />
          <span>Destination Unmapped</span>
        </div>

        {/* Large Architectural 404 Display (Clean Spacing, No Overlap) */}
        <div className="mb-6 select-none flex flex-col items-center">
          <div className="text-8xl sm:text-9xl md:text-[10.5rem] font-serif font-bold tracking-tight bg-gradient-to-b from-[#FAF7F2] via-[#E8DFD1] to-[#998361] bg-clip-text text-transparent leading-none drop-shadow-sm">
            404
          </div>

          <div className="inline-flex items-center gap-3 mt-4">
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#C99A3B]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C99A3B] font-semibold">
              Address Not Found
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#C99A3B]" />
          </div>
        </div>

        {/* Serif Headline & Explanation */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FAF7F2] mb-3 tracking-wide font-normal">
          This Page or Property Cannot Be Located
        </h1>
        <p className="text-sm sm:text-base text-[#9DA4B3] max-w-xl mx-auto mb-10 font-sans leading-relaxed">
          The link you followed may have expired, changed its URL, or the property has been acquired. Let our licensed Umm Al Quwain advisory team guide you back to premier properties.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#C99A3B] to-[#B38528] text-[#0A0D14] font-semibold text-sm tracking-wide shadow-lg shadow-[#C99A3B]/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200"
          >
            <Home className="w-4 h-4 text-[#0A0D14]" />
            Return to Homepage
          </Link>

          <Link
            href="/listings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg border border-[#C99A3B]/40 bg-[#161B26]/80 text-[#FAF7F2] font-semibold text-sm tracking-wide hover:bg-[#1E2535] hover:border-[#C99A3B] active:scale-[0.99] transition-all duration-200"
          >
            <Search className="w-4 h-4 text-[#C99A3B]" />
            Browse All Listings
          </Link>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 bg-white/5 text-[#E5E9F0] text-sm font-medium hover:bg-white/10 transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-[#25D366]" />
            Speak to an Advisor
          </a>
        </div>

        {/* Quick Recommended Destinations Grid */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C99A3B] font-semibold mb-6">
            Recommended Portfolios & Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative p-5 rounded-xl border border-white/10 bg-[#131722]/80 hover:bg-[#1A2030] hover:border-[#C99A3B]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#C99A3B]/10 border border-[#C99A3B]/20 flex items-center justify-center text-[#C99A3B] group-hover:bg-[#C99A3B] group-hover:text-[#0A0D14] transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-medium tracking-wider text-[#A0A8B8] bg-white/5 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#C99A3B] transition-colors duration-200 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8A93A6] line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-xs text-[#C99A3B] font-medium opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Support Prompt */}
        <div className="mt-12 text-xs text-[#7A8394]">
          Looking for a specific Umm Al Quwain property registration? Call{" "}
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
            className="text-[#C99A3B] hover:underline font-semibold"
          >
            {CONTACT_INFO.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[#C99A3B] hover:underline font-semibold"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
}
