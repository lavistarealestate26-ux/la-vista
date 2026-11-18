import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Client Services | La Vista Real Estate | Umm Al Quwain & Wider UAE",
  description:
    "Comprehensive property management, free valuations, commercial advisory, leasing services, and private acquisitions across Umm Al Quwain and the wider UAE.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Complimentary Property Valuation",
      desc: "Accurate, data-backed market appraisal based on real-time transaction records across Umm Al Quwain and the wider UAE.",
      href: "/valuation",
    },
    {
      title: "Commercial & Leasing Asset Management",
      desc: "High-net-worth portfolio care, tenant vetting, lease contract registration, and institutional rent management.",
      href: "/listings?category=leasing",
    },
    {
      title: "Private Off-Market Acquisitions",
      desc: "Discreet sourcing and negotiation for private island estates, beachfront mansions, commercial plots, and whole buildings.",
      href: "/contact",
    },
    {
      title: "Mortgage & Financing Consultation",
      desc: "Access to leading UAE banks and private lenders for resident and international investor property financing.",
      href: "/contact",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              End-to-End Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              La Vista Client Services
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Bespoke advisory, leasing, commercial, and management solutions crafted for luxury property owners and investors in Umm Al Quwain and across the UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#E7DFCF] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6778] font-light leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DFCF]">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C99A3B] group-hover:text-[#8A6420]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
