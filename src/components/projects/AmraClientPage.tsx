"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Calendar,
  Building2,
  ShieldCheck,
  Download,
  Share2,
  Heart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Phone,
  Send,
  Waves,
  HeartPulse,
  SunMedium,
  Anchor,
  Compass,
  Trophy,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { CONTACT_INFO } from "@/data/contactInfo";
import { sendLead } from "@/lib/sendLead";

const AMRA_GALLERY = [
  {
    src: "/images/projects/amra/curated/amra-hero-aerial.jpg",
    title: "Master Coastal Overview",
    category: "Architecture",
    caption: "5 sea-facing architectural towers spanning 2.93M sq.ft BUA on Umm Al Quwain's turquoise coastline.",
  },
  {
    src: "/images/projects/amra/curated/amra-rooftop-infinity.jpg",
    title: "Rooftop Horizon Beach Club",
    category: "Rooftop & Pools",
    caption: "Cantilevered infinity pool, private helipad, and private yacht marina dock.",
  },
  {
    src: "/images/projects/amra/curated/amra-wellness-spa.jpg",
    title: "Integrative Wellness Spa",
    category: "Wellness & Spa",
    caption: "Sunken hydrotherapy pools, biohacking suites, cryo chambers, and sound healing domes.",
  },
  {
    src: "/images/projects/amra/curated/amra-grand-lobby.jpg",
    title: "Monumental Grand Lobby",
    category: "Interiors",
    caption: "Travertine columns, bespoke crystal water chandeliers, and double-height oceanfront glass.",
  },
  {
    src: "/images/projects/amra/curated/amra-curved-facade.jpg",
    title: "Architectural Curved Facade",
    category: "Architecture",
    caption: "Biophilic wave terraces with integrated hanging flora and uninterrupted sea vistas.",
  },
  {
    src: "/images/projects/amra/curated/amra-lagoon-courtyard.jpg",
    title: "Lagoon Courtyard & Pools",
    category: "Architecture",
    caption: "Cascading pools, tropical palm islands, and shaded cabana enclaves.",
  },
  {
    src: "/images/projects/amra/curated/amra-residence-lounge.jpg",
    title: "Serviced Apartment Living Lounge",
    category: "Interiors",
    caption: "Fully furnished turnkey interiors with organic Italian stone, warm oak, and bespoke furniture.",
  },
  {
    src: "/images/projects/amra/curated/amra-beach-club.jpg",
    title: "Rooftop Beach Club Cabanas",
    category: "Rooftop & Pools",
    caption: "Private shaded circular daybeds and conversation pits with endless ocean horizons.",
  },
  {
    src: "/images/projects/amra/curated/amra-jogging-track.jpg",
    title: "Sky Garden Running Track (7th Floor)",
    category: "Sports & Leisure",
    caption: "114,068 sq.ft elevated nature landscape with kinetic energy jogging track.",
  },
  {
    src: "/images/projects/amra/curated/amra-sports-paddle.jpg",
    title: "Rooftop Sports Arena",
    category: "Sports & Leisure",
    caption: "Paddle courts, pickleball, badminton, mini futsal pitch, and putting greens.",
  },
  {
    src: "/images/projects/amra/curated/amra-private-cinema.jpg",
    title: "Private VIP Cinema",
    category: "Entertainment",
    caption: "Acoustic plush theater with private cinema bar and bespoke concierge service.",
  },
  {
    src: "/images/projects/amra/curated/amra-cigar-lounge.jpg",
    title: "Networking & Cigar Lounge",
    category: "Entertainment",
    caption: "Executive private social lounge with custom humidor and sommelier tasting desk.",
  },
];

const UNIT_SPECS = [
  { type: "Studio Suite", size: "500 sq.ft", view: "Sea / Lagoon View", furnishing: "Fully Furnished & Serviced" },
  { type: "1 Bedroom Luxury", size: "846 sq.ft", view: "Panoramic Sea View", furnishing: "Fully Furnished & Serviced" },
  { type: "2 Bedroom Residence", size: "1,387 sq.ft", view: "Dual Sea & Lagoon View", furnishing: "Fully Furnished & Serviced" },
  { type: "3 Bedroom Penthouse Suite", size: "1,915 sq.ft", view: "Corner Ocean Horizon", furnishing: "Fully Furnished & Serviced" },
  { type: "4 Bedroom Sky Residence", size: "2,937 sq.ft", view: "Full Horizon & Marina View", furnishing: "Fully Furnished & Serviced" },
];

export default function AmraClientPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryUnit, setInquiryUnit] = useState("2 Bedroom Residence");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Architecture", "Wellness & Spa", "Rooftop & Pools", "Interiors", "Sports & Leisure", "Entertainment"];

  const filteredImages = activeTab === "All"
    ? AMRA_GALLERY
    : AMRA_GALLERY.filter((img) => img.category === activeTab);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const msg = `Inquiry for AMRA Integrative Wellness Resort - Preferred Unit: ${inquiryUnit}`;
      await Promise.allSettled([
        sendLead({
          name: inquiryName,
          email: inquiryEmail,
          phone: inquiryPhone,
          purpose: "AMRA Off-Plan VIP Allocation",
          propertyTitle: `AMRA Residences (${inquiryUnit})`,
          location: "Al Sinniyah Island / Coastal UAQ",
          message: msg,
        }),
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: inquiryName,
            email: inquiryEmail,
            phone: inquiryPhone,
            purpose: "AMRA Off-Plan VIP Allocation",
            message: msg,
          }),
        }),
      ]);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5] min-h-screen text-[#111111]">
      {/* Hero Header */}
      <div className="relative bg-[#0C0C0C] text-white pt-12 pb-20 border-b border-white/[0.08] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C99A3B]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-xs text-white/50 hover:text-[#C99A3B] transition-colors">
              Home
            </Link>
            <span className="text-xs text-white/30">/</span>
            <span className="text-xs text-white/50">Projects</span>
            <span className="text-xs text-white/30">/</span>
            <span className="text-xs text-[#C99A3B] font-semibold">AMRA Resort</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C99A3B]/15 border border-[#C99A3B]/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C99A3B]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C378]">
                  World’s First Integrative Wellness Resort · Developed by Citi Developers
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                AMRA <span className="text-[#C99A3B] italic font-normal">Integrative Wellness Resort</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/70 font-light">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C99A3B]" />
                  <span>Blue Carbon Zone, Umm Al Quwain, UAE</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#C99A3B]" />
                  <span>5 Beachfront Towers · 100% Sea-Facing</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C99A3B]" />
                  <span>Handover Q4, 2029</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <a
                href="/documents/AMRA-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#C99A3B]" />
                <span>Download Brochure</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello La Vista, I would like to inquire about unit availability and pricing for AMRA Resort in Umm Al Quwain."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>VIP WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Core Stats Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E7DFCF] grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#5E6778] font-bold block mb-1">
              Project Scale
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">5 Towers</div>
            <p className="text-xs text-[#5E6778] mt-0.5">2,931,953 sq.ft Total BUA</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#5E6778] font-bold block mb-1">
              Wellness Footprint
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C99A3B]">688,000 sq.ft</div>
            <p className="text-xs text-[#5E6778] mt-0.5">140+ Dedicated Facilities</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#5E6778] font-bold block mb-1">
              Payment Plan
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">70 / 30</div>
            <p className="text-xs text-[#5E6778] mt-0.5">3 Years Post-Handover</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#5E6778] font-bold block mb-1">
              Private Maritime
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">Yacht Marina</div>
            <p className="text-xs text-[#5E6778] mt-0.5">Helipad & Air Taxi Landing</p>
          </div>
        </div>

        {/* Gallery Section Header & Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-1">
                Official Architectural Visuals
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                AMRA Project Visual Gallery
              </h2>
            </div>

            <span className="text-xs text-[#5E6778]">
              Showing <strong className="text-[#111111]">{filteredImages.length}</strong> high-resolution renders
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === cat
                    ? "bg-[#111111] text-[#C99A3B] shadow-sm"
                    : "bg-white text-[#5E6778] border border-[#E7DFCF] hover:border-[#C99A3B]/60 hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((img, idx) => (
            <div
              key={img.title}
              onClick={() => {
                const globalIndex = AMRA_GALLERY.findIndex((g) => g.src === img.src);
                setLightboxIdx(globalIndex >= 0 ? globalIndex : idx);
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md text-[#C99A3B] text-[10px] font-semibold uppercase tracking-wider rounded-md border border-[#C99A3B]/30">
                    {img.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C99A3B]" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#5E6778] line-clamp-2 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Residential Unit Types & Floorplan Specs */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7DFCF] shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-1">
              Fully Serviced Residences
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] mb-2">
              Apartment Floorplan Sizes & Configurations
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6778]">
              All residences feature expansive private balconies, custom Italian fixtures, integrated smart-home automation, and turn-key rental readiness via the Citi Developers App.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E7DFCF] bg-[#F7F3EA]/70 text-[#111111] font-serif font-semibold">
                  <th className="py-3.5 px-4">Apartment Type</th>
                  <th className="py-3.5 px-4">Average Built-Up Area</th>
                  <th className="py-3.5 px-4">Orientation & Horizon</th>
                  <th className="py-3.5 px-4">Furnishing Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7DFCF]">
                {UNIT_SPECS.map((u) => (
                  <tr key={u.type} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#111111]">{u.type}</td>
                    <td className="py-4 px-4 font-mono font-bold text-[#C99A3B]">{u.size}</td>
                    <td className="py-4 px-4 text-[#5E6778]">{u.view}</td>
                    <td className="py-4 px-4 text-[#5E6778]">{u.furnishing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: The 7 Pillars of Integrative Wellness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#111111] text-white p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C99A3B] font-bold block mb-2">
                Pillar 01 & 02
              </span>
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                Mental, Emotional & Physical Longevity
              </h3>
              <p className="text-xs text-white/65 leading-relaxed font-light">
                Biohacking suites, hyperbaric oxygen chambers, cryotherapy, sound healing domes, sensory meditation rooms, and expansive panoramic ocean-facing fitness facilities.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C99A3B] font-bold block mb-2">
                Pillar 03 & 04
              </span>
              <h3 className="font-serif font-bold text-lg text-[#111111] mb-2">
                Spiritual & Social Connection
              </h3>
              <p className="text-xs text-[#5E6778] leading-relaxed">
                Sunrise and sunset yoga decks, rooftop conversation pits, private VIP cinema, cigar lounges, intergenerational game lounges, and curated dining experiences.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C99A3B] font-bold block mb-2">
                Pillar 05 & 06
              </span>
              <h3 className="font-serif font-bold text-lg text-[#111111] mb-2">
                Intellectual & Environmental Wellness
              </h3>
              <p className="text-xs text-[#5E6778] leading-relaxed">
                Philosophy circles, writing libraries, art galleries, and biophilic architecture living in harmony with Umm Al Quwain's 90 sq.km pristine Blue Carbon marine reserve.
              </p>
            </div>
          </div>

          <div className="bg-[#C99A3B] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold block mb-2">
                Pillar 07
              </span>
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                Occupational & Financial Wellness
              </h3>
              <p className="text-xs text-white/90 leading-relaxed font-light">
                High-yield serviced apartment leasing via the Citi Developers App, meeting rooms, executive CEO working suites, yacht limo service, and helipad accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: VIP Inquiry & Allocation Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7DFCF] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block">
              Direct Brokerage Representation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] leading-tight">
              Secure Your Priority Allocation at AMRA Resort
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6778] font-light leading-relaxed">
              La Vista Real Estate provides institutional access to Citi Developers pre-launch inventory, ensuring guaranteed pre-release unit selection, verified title deeds, and 70/30 post-handover payment structures.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#111111]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Zero agency commission on master developer allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Qualifies for UAE 10-Year Golden Visa (AED 2M+)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>3-Year post-handover payment flexibilities</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F7F3EA]/60 p-6 sm:p-8 rounded-2xl border border-[#E7DFCF]">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-serif font-bold text-xl text-[#111111]">Inquiry Received</h3>
                <p className="text-xs text-[#5E6778] max-w-md mx-auto">
                  Thank you. A senior La Vista portfolio advisor dedicated to AMRA Resort will connect with you via WhatsApp shortly with the full floorplans and price list.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sheikh, Dr., Mr. Investor"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="investor@domain.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                      Preferred Unit Type
                    </label>
                    <select
                      value={inquiryUnit}
                      onChange={(e) => setInquiryUnit(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                    >
                      <option value="Studio Suite (500 sqft)">Studio Suite (500 sq.ft)</option>
                      <option value="1 Bedroom Luxury (846 sqft)">1 Bedroom Luxury (846 sq.ft)</option>
                      <option value="2 Bedroom Residence (1387 sqft)">2 Bedroom Residence (1,387 sq.ft)</option>
                      <option value="3 Bedroom Penthouse (1915 sqft)">3 Bedroom Penthouse (1,915 sq.ft)</option>
                      <option value="4 Bedroom Sky Residence (2937 sqft)">4 Bedroom Sky Residence (2,937 sq.ft)</option>
                      <option value="Full Floor / Multiple Units">Full Floor / Multiple Units Portfolio</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Transmitting Request..." : "Request AMRA Price List & VIP Allocation"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="flex items-center justify-between text-white w-full max-w-5xl mx-auto pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C99A3B] font-semibold">
                {AMRA_GALLERY[lightboxIdx].category} · {lightboxIdx + 1} of {AMRA_GALLERY.length}
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {AMRA_GALLERY[lightboxIdx].title}
              </h3>
            </div>
            <button
              onClick={() => setLightboxIdx(null)}
              className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx - 1 + AMRA_GALLERY.length) % AMRA_GALLERY.length);
              }}
              aria-label="Previous render"
              className="absolute left-2 sm:-left-12 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={AMRA_GALLERY[lightboxIdx].src}
              alt={AMRA_GALLERY[lightboxIdx].title}
              className="max-h-[70vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx + 1) % AMRA_GALLERY.length);
              }}
              aria-label="Next render"
              className="absolute right-2 sm:-right-12 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C99A3B] transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            className="text-center text-white/70 text-xs sm:text-sm max-w-2xl mx-auto pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p>{AMRA_GALLERY[lightboxIdx].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
