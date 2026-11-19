"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Download,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Anchor,
  Compass,
  Building,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { CONTACT_INFO } from "@/data/contactInfo";

const AMRA_GALLERY_IMAGES = [
  {
    src: "/images/projects/amra/curated/amra-hero-aerial.jpg",
    title: "Master Coastal Architecture",
    category: "Architecture",
    caption: "5 sea-facing luxury towers along the turquoise shores of Umm Al Quwain's lagoon.",
  },
  {
    src: "/images/projects/amra/curated/amra-rooftop-infinity.jpg",
    title: "Rooftop Horizon Beach Club & Marina",
    category: "Rooftop & Pools",
    caption: "Cantilevered infinity pool, private helipad, and yacht marina pier.",
  },
  {
    src: "/images/projects/amra/curated/amra-wellness-spa.jpg",
    title: "Integrative Wellness Spa & Longevity Hub",
    category: "Wellness & Spa",
    caption: "Sunken hydrotherapy pools, biohacking suites, and holistic therapy sanctuaries.",
  },
  {
    src: "/images/projects/amra/curated/amra-grand-lobby.jpg",
    title: "Grand Arrival Lobby",
    category: "Interiors",
    caption: "Monumental travertine columns, organic water features, and custom art chandeliers.",
  },
  {
    src: "/images/projects/amra/curated/amra-lagoon-courtyard.jpg",
    title: "Central Lagoon Pool Courtyard",
    category: "Architecture",
    caption: "Serene oasis with lush palm groves, cabanas, and cascading water features.",
  },
  {
    src: "/images/projects/amra/curated/amra-residence-lounge.jpg",
    title: "Luxury Serviced Residence Lounge",
    category: "Interiors",
    caption: "Panoramic floor-to-ceiling sea views with expansive curved private balconies.",
  },
  {
    src: "/images/projects/amra/curated/amra-beach-club.jpg",
    title: "Sunken Conversation Cabanas",
    category: "Rooftop & Pools",
    caption: "Luxury shaded daybeds and private lounges overlooking the Arabian Gulf horizon.",
  },
  {
    src: "/images/projects/amra/curated/amra-sports-paddle.jpg",
    title: "Sky Sports & Paddle Arena",
    category: "Sports & Leisure",
    caption: "Rooftop paddle courts, mini futsal, badminton, and putting greens.",
  },
];

export default function AmraShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + AMRA_GALLERY_IMAGES.length) % AMRA_GALLERY_IMAGES.length);
    }
  };
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % AMRA_GALLERY_IMAGES.length);
    }
  };

  return (
    <section
      aria-label="AMRA Integrative Wellness Resort Showcase"
      className="relative bg-[#0C0C0C] text-white py-16 sm:py-24 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#C99A3B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C99A3B]/10 border border-[#C99A3B]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A3B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
                Exclusive Master Off-Plan Launch · Umm Al Quwain
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              AMRA <span className="text-[#C99A3B] italic font-normal">Integrative Wellness Resort</span>
            </h2>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base font-light mt-3 leading-relaxed">
              The World’s First Integrative Wellness Resort by <strong>Citi Developers</strong>. Located within Umm Al Quwain’s pristine Blue Carbon Zone and natural mangrove lagoons, featuring 5 sea-facing architectural towers with over 688,000 sq.ft of dedicated wellness amenities and private yacht marina.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              href="/projects/amra"
              className="px-5 py-2.5 sm:py-3 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95"
            >
              <span>See More & Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/documents/AMRA-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-[#C99A3B]" />
              <span>Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* 3 Prominent Featured Photos Layout (Requested by Client) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-12">
          {/* Main Master Photo: 7 Cols */}
          <div
            onClick={() => openLightbox(0)}
            className="lg:col-span-7 group relative aspect-[16/10] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden border border-white/15 cursor-pointer bg-white/5 shadow-2xl"
          >
            <img
              src="/images/projects/amra/curated/amra-hero-aerial.jpg"
              alt="AMRA 5 Beachfront Towers Aerial Overview"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
              <span className="px-3 py-1 bg-[#111111]/80 backdrop-blur-md border border-[#C99A3B]/40 text-[#C99A3B] text-[10px] font-bold uppercase tracking-wider rounded-lg">
                5 Beachfront Towers
              </span>
              <span className="px-3 py-1 bg-white/15 backdrop-blur-md text-white text-[10px] font-medium rounded-lg">
                100% Sea-Facing
              </span>
            </div>

            <button
              aria-label="Enlarge Master Aerial Photo"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 className="w-4 h-4 text-[#C99A3B]" />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-xs uppercase font-semibold text-[#C99A3B] tracking-wider block mb-0.5">
                Master Development Vision
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                Coastal Sanctuary on Umm Al Quwain Lagoon
              </h3>
              <p className="text-white/70 text-xs hidden sm:block mt-1">
                2.93 Million sq.ft BUA · Fully furnished serviced residences with direct shoreline and private marina.
              </p>
            </div>
          </div>

          {/* 2 Stacked Complementary Photos: 5 Cols */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:h-[480px]">
            {/* Photo 2: Rooftop Beach Club & Helipad */}
            <div
              onClick={() => openLightbox(1)}
              className="group relative aspect-[16/10] lg:aspect-auto lg:h-[228px] rounded-2xl overflow-hidden border border-white/15 cursor-pointer bg-white/5 shadow-xl"
            >
              <img
                src="/images/projects/amra/curated/amra-rooftop-infinity.jpg"
                alt="AMRA Rooftop Beach Club & Infinity Pool"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 bg-[#111111]/80 backdrop-blur-md border border-[#C99A3B]/40 text-[#C99A3B] text-[10px] font-bold uppercase tracking-wider rounded-md">
                  Rooftop Beach Club
                </span>
              </div>

              <button
                aria-label="Enlarge Rooftop Club Photo"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#C99A3B]" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h4 className="text-sm sm:text-base font-serif font-bold text-white">
                  Infinity Pool, Helipad & Marina Pier
                </h4>
                <p className="text-white/70 text-[11px] line-clamp-1">
                  Air taxi landing pad & private yacht dock.
                </p>
              </div>
            </div>

            {/* Photo 3: Wellness Spa & Sunken Pools */}
            <div
              onClick={() => openLightbox(2)}
              className="group relative aspect-[16/10] lg:aspect-auto lg:h-[228px] rounded-2xl overflow-hidden border border-white/15 cursor-pointer bg-white/5 shadow-xl"
            >
              <img
                src="/images/projects/amra/curated/amra-wellness-spa.jpg"
                alt="AMRA Integrative Wellness Spa & Pools"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 bg-[#111111]/80 backdrop-blur-md border border-[#C99A3B]/40 text-[#C99A3B] text-[10px] font-bold uppercase tracking-wider rounded-md">
                  Wellness Sanctuary
                </span>
              </div>

              <button
                aria-label="Enlarge Wellness Spa Photo"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#C99A3B]" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h4 className="text-sm sm:text-base font-serif font-bold text-white">
                  688,000 sq.ft of Wellness Amenities
                </h4>
                <p className="text-white/70 text-[11px] line-clamp-1">
                  Hydrotherapy pools, cryo chambers & sound healing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars & Investor Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C99A3B] font-semibold block">
              Architectural Scale
            </span>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white">5 Towers</div>
            <p className="text-[11px] text-white/50">Beachfront & Lagoon Shoreline</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C99A3B] font-semibold block">
              Wellness Footprint
            </span>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white">688,000 sq.ft</div>
            <p className="text-[11px] text-white/50">140+ Specialized Facilities</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C99A3B] font-semibold block">
              Payment Schedule
            </span>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#E5C378]">70 / 30</div>
            <p className="text-[11px] text-white/50">3 Years Post-Handover Period</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C99A3B] font-semibold block">
              Completion Date
            </span>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white">Q4, 2029</div>
            <p className="text-[11px] text-white/50">By Citi Developers</p>
          </div>
        </div>

        {/* Bottom CTA Row: Inquire + View Full Gallery */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Official La Vista Allocation & Direct Developer Pricing</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello La Vista, I would like to inquire about VIP inventory and payment plans for AMRA Integrative Wellness Resort."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <Link
              href="/projects/amra"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-1.5"
            >
              <span>Explore All Amenities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white w-full max-w-5xl mx-auto pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C99A3B] font-semibold">
                {AMRA_GALLERY_IMAGES[lightboxIndex].category} · {lightboxIndex + 1} of {AMRA_GALLERY_IMAGES.length}
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {AMRA_GALLERY_IMAGES[lightboxIndex].title}
              </h3>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image & Controls */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 sm:-left-12 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={AMRA_GALLERY_IMAGES[lightboxIndex].src}
              alt={AMRA_GALLERY_IMAGES[lightboxIndex].title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
            />

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 sm:-right-12 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Link */}
          <div
            className="text-center text-white/70 text-xs sm:text-sm max-w-2xl mx-auto pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-2">{AMRA_GALLERY_IMAGES[lightboxIndex].caption}</p>
            <Link
              href="/projects/amra"
              onClick={closeLightbox}
              className="text-[#C99A3B] font-semibold underline underline-offset-4 hover:text-white transition-colors"
            >
              View Full AMRA Project Page & Floorplans →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
