"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Logo from "../common/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#0C0C0C] text-white border-t border-white/[0.08] select-none overflow-hidden">
      {/* Top subtle golden shimmer line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C99A3B]/40 to-transparent" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {/* Top Tier: Brand Statement + Minimalist Newsletter */}
        <div className="pb-12 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-lg">
            <Logo variant="dark" size="md" />
            <p className="text-white/55 text-xs sm:text-[13px] font-light leading-relaxed">
              {isRTL
                ? "لا فيستا للعقارات · وساطة عقارية فاخرة تمثل أبهى العقارات السكنية الخاصة والفلل الشاطئية في دبي."
                : "A bespoke private real estate brokerage representing Dubai’s most prestigious waterfront villas, sky penthouses, and signature developer portfolios."}
            </p>
          </div>

          {/* Sleek Newsletter Pill */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#C99A3B] font-semibold mb-2.5">
              {isRTL ? "النشرة العقارية الخاصة" : "Private Market Intelligence"}
            </span>

            {subscribed ? (
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#C99A3B]/10 border border-[#C99A3B]/30 rounded-full text-xs text-[#E5C378]">
                <CheckCircle2 className="w-4 h-4 text-[#C99A3B] flex-shrink-0" />
                <span>
                  {isRTL
                    ? "شكراً لك. تمت إضافتك إلى قائمة المستثمرين الخاصة."
                    : "You are now subscribed to confidential investor updates."}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder={isRTL ? "أدخل بريدك الإلكتروني الخاص..." : "Enter your private email..."}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full ${
                    isRTL ? "pr-4 pl-12 text-right" : "pl-4 pr-12 text-left"
                  } py-2.5 text-xs bg-white/[0.04] border border-white/15 hover:border-white/25 focus:border-[#C99A3B] focus:bg-white/[0.07] rounded-full text-white placeholder:text-white/35 transition-all outline-none`}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to Private Newsletter"
                  className={`absolute ${
                    isRTL ? "left-1.5" : "right-1.5"
                  } p-2 bg-[#C99A3B] hover:bg-[#8A6420] text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95`}
                >
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                </button>
              </form>
            )}
            <p className="text-[10px] text-white/35 mt-2">
              {isRTL
                ? "تقارير سرية فصيلة · بدون إعلانات مزعجة"
                : "Quarterly transaction data & pre-launch alerts · Unsubscribe anytime"}
            </p>
          </div>
        </div>

        {/* Middle Tier: Sleek 4-Column Directory */}
        <div className="py-12 border-b border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Properties */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C99A3B] font-semibold mb-4">
              {isRTL ? "العقارات" : "Properties"}
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="/listings?purpose=buy" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "فلل وقصور للبيع" : "Luxury Villas & Mansions"}
                </Link>
              </li>
              <li>
                <Link href="/listings?type=penthouse" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "بنتهاوس فاخرة" : "Sky Penthouses"}
                </Link>
              </li>
              <li>
                <Link href="/listings?purpose=off-plan" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "مشاريع قيد الإنشاء" : "Off-Plan Launches 2026"}
                </Link>
              </li>
              <li>
                <Link href="/listings?purpose=rent" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عقارات للإيجار" : "Prime Residences for Lease"}
                </Link>
              </li>
              <li>
                <Link href="/listings?category=waterfront" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عقارات الواجهة البحرية" : "Waterfront Estates"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Top Communities */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C99A3B] font-semibold mb-4">
              {isRTL ? "المواقع المميزة" : "Prime Locations"}
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="/listings?community=Palm+Jumeirah" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Palm Jumeirah
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Downtown+Dubai" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Downtown Dubai
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Dubai+Marina" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Dubai Marina
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Dubai+Hills+Estate" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Dubai Hills Estate
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Jumeirah+Bay+Island" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Jumeirah Bay Island
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Advisory */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C99A3B] font-semibold mb-4">
              {isRTL ? "الخدمات والاستشارات" : "Advisory & Services"}
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="/valuation" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "تقييم مجاني للعقار" : "Complimentary Valuation"}
                </Link>
              </li>
              <li>
                <Link href="/invest" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "الإقامة الذهبية (10 سنوات)" : "UAE Golden Visa Advisory"}
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "شركاء التطوير العقاري" : "Master Developers"}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "تقارير السوق العقاري" : "Market Intelligence Reports"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عن لا فيستا" : "About the Firm"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Private Office & Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C99A3B] font-semibold mb-4">
              {isRTL ? "المكتب الخاص" : "Private Office"}
            </h4>
            <div className="space-y-2.5 text-xs text-white/65">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-[11px] leading-relaxed">
                  Boulevard Plaza Tower 1, Downtown Dubai, UAE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                <a href="tel:+97144298888" className="hover:text-[#C99A3B] transition-colors text-[11px]">
                  +971 4 429 8888
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                <a href="mailto:info@lavistarealestate.ae" className="hover:text-[#C99A3B] transition-colors text-[11px]">
                  info@lavistarealestate.ae
                </a>
              </div>

              {/* Minimalist Social Circles */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C99A3B] hover:text-[#C99A3B] text-white/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C99A3B] hover:text-[#C99A3B] text-white/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C99A3B] hover:text-[#C99A3B] text-white/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Sleek Regulatory & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/45">
          {/* Regulatory accreditation */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
            <span>
              {isRTL
                ? "مرخص من دائرة الأراضي والأملاك بدبي · مؤسسة التنظيم العقاري (RERA) · ترخيص وساطة رقم: 31980"
                : "Regulated by RERA (Real Estate Regulatory Agency) · Dubai Land Department · ORN: 31980"}
            </span>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {isRTL ? "سياسة الخصوصية" : "Privacy"}
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {isRTL ? "الشروط والأحكام" : "Terms"}
            </Link>
            <span>·</span>
            <Link href="/admin" className="text-[#C99A3B]/80 hover:text-[#C99A3B] transition-colors">
              {isRTL ? "بوابة الإدارة" : "Admin Demo"}
            </Link>
            <span>·</span>
            <span>© 2026 La Vista Real Estate LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}