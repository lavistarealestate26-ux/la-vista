import React from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/contactInfo";

export const metadata = {
  title: "Careers at La Vista Real Estate | Join Our UAE Advisory Desk",
  description:
    "Explore career opportunities for luxury property consultants, commercial specialists, and leasing advisors in Umm Al Quwain and the wider UAE.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Senior Luxury Property Consultant",
      location: "Umm Al Quwain & Wider UAE",
      type: "Full-Time · Uncapped Commission + Retainer",
      desc: "Represent ultra-high-net-worth clients across Al Sinniyah Island, Al Salamah, UAQ Marina, and prime UAE enclaves.",
    },
    {
      title: "Commercial & Leasing Specialist",
      location: "Umm Al Quwain",
      type: "Full-Time",
      desc: "Oversee commercial plazas, retail units, and premier long-term residential and industrial leasing portfolios.",
    },
    {
      title: "Private Client Relationship Manager",
      location: "Umm Al Quwain & Wider UAE",
      type: "Full-Time",
      desc: "Manage confidential accounts for family offices, developers, and international institutional investors.",
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
              We provide ambitious, multilingual advisors with market-leading lead generation, direct developer VIP allocations, and an empowering boutique environment across Umm Al Quwain and the wider UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#E7DFCF] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C99A3B] block mb-2">
                  {role.location}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#111111] mb-2">{role.title}</h3>
                <span className="text-xs text-[#5E6778] block mb-4">{role.type}</span>
                <p className="text-xs text-[#5E6778] leading-relaxed font-light">{role.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E7DFCF]">
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C99A3B] hover:text-[#8A6420]"
                >
                  <span>Apply Privately</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
