import React from "react";
import Link from "next/link";
import { Building2, Shield, Key, Calculator, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Client Services | La Vista Real Estate Dubai",
  description: "Comprehensive property management, free valuations, private acquisitions, and mortgage consultancy in Dubai.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Complimentary Property Valuation",
      desc: "Accurate, data-backed market appraisal based on real-time Dubai Land Department records.",
      href: "/valuation",
    },
    {
      title: "Turnkey Property Management",
      desc: "High-net-worth property care, tenant vetting, Ejari registration, and rent collection.",
      href: "/contact",
    },
    {
      title: "Private Off-Market Acquisitions",
      desc: "Discreet sourcing and negotiation for private estates, penthouses, and whole buildings.",
      href: "/contact",
    },
    {
      title: "Mortgage & Financing Consultation",
      desc: "Access to leading UAE banks and private lenders for resident and non-resident financing.",
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
              Bespoke advisory and management solutions crafted for luxury property owners and investors in Dubai.
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
                <p className="text-sm text-[#5E6778] font-light leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C99A3B] group-hover:text-[#8A6420]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
