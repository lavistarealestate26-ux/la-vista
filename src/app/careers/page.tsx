import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Careers at La Vista Real Estate | Join Our Dubai Advisory",
  description: "Explore career opportunities for luxury property consultants, off-plan specialists, and private wealth advisors in Dubai.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Senior Luxury Property Consultant",
      location: "Downtown Dubai",
      type: "Full-Time · Uncapped Commission + Retainer",
      desc: "Represent ultra-high-net-worth clients across Palm Jumeirah, Downtown Dubai, and Emirates Hills.",
    },
    {
      title: "Off-Plan Investment Specialist",
      location: "Downtown Dubai",
      type: "Full-Time",
      desc: "Drive direct allocations and relationships with Emaar, Nakheel, DAMAC, and Sobha.",
    },
    {
      title: "Private Client Relationship Manager",
      location: "Downtown Dubai",
      type: "Full-Time",
      desc: "Manage confidential accounts for family offices and international institutional investors.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Join Our Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Careers at La Vista Real Estate
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              We provide ambitious, multilingual advisors with market-leading lead generation, direct developer VIP allocations, and an empowering boutique environment.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 max-w-4xl mx-auto">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFCF] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C99A3B] tracking-wider block mb-1">
                  {r.location} · {r.type}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#111111] mb-2">{r.title}</h3>
                <p className="text-xs text-[#5E6778] font-light max-w-xl">{r.desc}</p>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 bg-[#111111] text-white hover:bg-[#C99A3B] text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors whitespace-nowrap text-center"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
