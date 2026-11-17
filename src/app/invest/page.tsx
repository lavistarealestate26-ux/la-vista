import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, TrendingUp, CheckCircle2, Calculator } from "lucide-react";

export const metadata = {
  title: "Dubai Real Estate Investment & UAE Golden Visa | La Vista",
  description: "Learn how to qualify for the 10-year UAE Golden Visa via property investment and maximize rental ROI in Dubai.",
};

export default function InvestPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Wealth Advisory & Residency
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Invest in Dubai & UAE Golden Visa
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Secure long-term UAE residency for you and your family while benefiting from 0% personal tax, high capital appreciation, and robust rental yields.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Golden Visa Overview */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E7DFCF] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-2">
              Residency Pathway
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111] mb-4">
              UAE 10-Year Golden Visa via Property
            </h2>
            <p className="text-sm text-[#5E6778] leading-relaxed font-light mb-6">
              Investors who purchase one or multiple properties in Dubai valued at <strong>AED 2,000,000 (~$545,000 USD)</strong> or more are eligible for the 10-year renewable Golden Visa. Off-plan properties from approved developers are also eligible.
            </p>

            <div className="space-y-3">
              {[
                "100% foreign ownership of properties and companies",
                "Includes spouse, children of any age, and domestic staff",
                "No minimum stay required inside the UAE to maintain residency",
                "0% income tax, 0% capital gains tax, 0% inheritance tax",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#C99A3B] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111111] text-white p-8 rounded-2xl border border-[#C99A3B]/40">
            <h3 className="text-xl font-serif font-bold text-[#C99A3B] mb-4">
              Schedule Golden Visa Consultation
            </h3>
            <p className="text-xs text-white/70 mb-6 font-light">
              Our private conveyancing team will guide you through title deeds, DLD registrations, and medical processing.
            </p>
            <Link
              href="/contact"
              className="w-full block py-3.5 bg-[#C99A3B] text-white text-center text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#8A6420] transition-colors"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
