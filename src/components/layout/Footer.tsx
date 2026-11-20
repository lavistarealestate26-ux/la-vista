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
import { CONTACT_INFO } from "@/data/contactInfo";

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
            <Logo variant="dark" size="md" lockup="horizontal" />
            <p className="text-white/55 text-xs sm:text-[13px] font-light leading-relaxed">
              {isRTL
                ? "لا فيستا للعقارات · وساطة عقارية فاخرة تمثل أبهى العقارات السكنية والتجارية ومحافظ التأجير في أم القيوين وعموم الإمارات."
                : "A bespoke private real estate brokerage representing Umm Al Quwain and the wider UAE’s most prestigious waterfront estates, commercial assets, and leasing portfolios."}
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
                ? "تقارير سرية دورية · بدون إعلانات مزعجة"
                : "Quarterly transaction data & pre-launch alerts · Unsubscribe anytime"}
            </p>
          </div>
        </div>

        {/* Middle Tier: Sleek 4-Column Directory */}
        <div className="py-12 border-b border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Properties (Residential, Commercial, Leasing) */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C99A3B] font-semibold mb-4">
              {isRTL ? "فئات العقارات" : "Property Portfolios"}
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="/listings?category=residential" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عقارات سكنية فاخرة" : "Residential Properties"}
                </Link>
              </li>
              <li>
                <Link href="/listings?category=commercial" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عقارات تجارية واستثمارية" : "Commercial Properties"}
                </Link>
              </li>
              <li>
                <Link href="/listings?category=warehouse" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "مستودعات ومرافق صناعية" : "Warehouses & Logistics"}
                </Link>
              </li>
              <li>
                <Link href="/listings?category=leasing" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "عقارات ومحافظ التأجير" : "Leasing Properties"}
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Al+Sinniyah+Island" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "قصور جزيرة السينية" : "Al Sinniyah Waterfront"}
                </Link>
              </li>
              <li>
                <Link href="/listings?purpose=off-plan" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  {isRTL ? "مشاريع قيد الإنشاء" : "Off-Plan Launches"}
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
                <Link href="/listings?community=Al+Sinniyah+Island" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Al Sinniyah Island
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Al+Salamah" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Al Salamah
                </Link>
              </li>
              <li>
                <Link href="/listings?community=UAQ+Marina" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  UAQ Marina & Corniche
                </Link>
              </li>
              <li>
                <Link href="/listings?community=Mangrove+Beachfront" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Mangrove Beachfront
                </Link>
              </li>
              <li>
                <Link href="/listings?region=Wider+UAE" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Wider UAE Enclaves
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
              {isRTL ? "المكتب الرئيسي" : "Main Office"}
            </h4>
            <div className="space-y-2.5 text-xs text-white/65">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0 mt-0.5" />
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-[11px] leading-relaxed hover:text-[#C99A3B] transition-colors"
                >
                  {isRTL ? CONTACT_INFO.addressAr : CONTACT_INFO.address}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-[11px]">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#C99A3B] transition-colors block">
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={`tel:${CONTACT_INFO.whatsappDisplay.replace(/\s+/g, "")}`} className="hover:text-[#C99A3B] transition-colors block">
                    {CONTACT_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#C99A3B] transition-colors text-[11px]">
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Social Channels: Facebook, Instagram, TikTok, LinkedIn */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C99A3B] hover:text-[#C99A3B] text-white/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={CONTACT_INFO.socials.instagram}
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
                  href={CONTACT_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C99A3B] hover:text-[#C99A3B] text-white/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
                ? `مرخص من بلدية ودائرة الأراضي بأم القيوين · عموم الإمارات · ترخيص رقم: ${CONTACT_INFO.licensing.licenseNumber}`
                : `Licensed by ${CONTACT_INFO.licensing.authority} · License: ${CONTACT_INFO.licensing.licenseNumber}`}
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
            <Link href="/contact" className="hover:text-white transition-colors">
              {isRTL ? "اتصل بنا" : "Contact Us"}
            </Link>
            <span>·</span>
            <span>© 2026 La Vista Real Estate LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
