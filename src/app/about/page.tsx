import React from "react";
import { ShieldCheck, Award, Users, Gem } from "lucide-react";

export const metadata = {
  title: "About La Vista | Real Estate Company in Umm Al Quwain",
  description:
    "Meet La Vista Real Estate, a locally based brokerage on King Faisal Road, Umm Al Quwain, advising buyers, tenants and investors across the UAE.",
  openGraph: {
    title: "About La Vista | Real Estate Company in Umm Al Quwain",
    description:
      "Meet La Vista Real Estate, a locally based brokerage on King Faisal Road, Umm Al Quwain, advising buyers, tenants and investors across the UAE.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Our Heritage & Vision
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              About La Vista Real Estate
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Founded on the pillars of integrity, discretion, and market precision, La Vista represents private clients, family offices, and discerning investors across Umm Al Quwain and the wider UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-2">
              Boutique Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111] mb-6">
              A Private Advisory Tailored to Generational Wealth
            </h2>
            <div className="space-y-4 text-sm text-[#5E6778] leading-relaxed font-light">
              <p>
                In a market filled with high-volume brokerages, La Vista Real Estate operates as a specialized private boutique. We limit the number of properties we represent to ensure every residential home, commercial asset, or leasing portfolio receives focused marketing and direct access to qualified regional and international buyers.
              </p>
              <p>
                From pristine waterfront estates on Al Sinniyah Island to premier commercial plazas in Umm Al Quwain and luxury enclaves across the wider UAE, our licensed brokers provide unparalleled market insights backed by authentic transaction analytics.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7DFCF]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="La Vista Luxury Estate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Gem,
              title: "Prime Quality",
              desc: "Carefully curated residential, commercial, and leasing properties meeting high standards.",
            },
            {
              icon: ShieldCheck,
              title: "Strict Compliance",
              desc: "100% verified regulatory and municipality authorized permits with authenticated titles.",
            },
            {
              icon: Users,
              title: "Multilingual Desk",
              desc: "Advisors fluent in English, Arabic, Russian, French, and German.",
            },
            {
              icon: Award,
              title: "End-to-End Care",
              desc: "From private viewings to Golden Visa processing and asset management.",
            },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#E7DFCF] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F7F3EA] text-[#C99A3B] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#111111] mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#5E6778] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
