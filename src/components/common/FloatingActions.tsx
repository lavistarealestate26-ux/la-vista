"use client";

import React, { useState } from "react";
import { Phone, FileText, Share2 } from "lucide-react";
import EnquiryModal from "../modals/EnquiryModal";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/contactInfo";

export default function FloatingActions() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <>
      {/* Floating Buttons Stack - Right Edge */}
      <aside
        aria-label="Quick Contact & Social Actions"
        className="fixed right-2.5 sm:right-4 md:right-6 bottom-4 sm:bottom-8 md:bottom-10 z-40 flex flex-col gap-2 sm:gap-2.5 md:gap-3 select-none"
      >
        {/* 1. Social Media CTA Trigger Button with Direct Hover/Click Icons */}
        <div
          className="relative group flex items-center justify-end"
          onMouseEnter={() => setIsSocialOpen(true)}
          onMouseLeave={() => setIsSocialOpen(false)}
        >
          {/* Social Media Icons Pill (Glass / Transparent container per client request) */}
          <div
            className={`absolute right-full mr-2.5 before:absolute before:-right-3 before:top-0 before:bottom-0 before:w-4 before:content-[''] flex items-center gap-2 p-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-300 ${
              isSocialOpen
                ? "opacity-100 pointer-events-auto translate-x-0 scale-100"
                : "opacity-0 pointer-events-none translate-x-3 scale-95 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:scale-100"
            }`}
          >
            {/* Facebook */}
            <a
              href={CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-115 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-115 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={CONTACT_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black text-white border border-white/20 flex items-center justify-center shadow-md hover:scale-115 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
            </a>
          </div>

          {/* Trigger Button (Share icon) */}
          <button
            onClick={() => setIsSocialOpen(!isSocialOpen)}
            aria-label="Social Media"
            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 ${
              isSocialOpen ? "bg-[#C99A3B] text-white" : "bg-[#111111] text-[#C99A3B] group-hover:bg-[#C99A3B] group-hover:text-white"
            } border border-[#C99A3B]/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99A3B]`}
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* 2. WhatsApp Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_whatsapp}
          </span>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with La Vista Real Estate"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 text-white" />
          </a>
        </div>

        {/* 3. Call Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_call}
          </span>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
            aria-label="Call La Vista Real Estate Advisors"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#111111] text-[#C99A3B] border border-[#C99A3B]/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#C99A3B] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99A3B]"
          >
            <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* 4. Enquiry Slide-in Form Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_enquiry}
          </span>
          <button
            onClick={() => setIsEnquiryOpen(true)}
            aria-label="Open Property Enquiry Form"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#C99A3B] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#8A6420] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99A3B]"
          >
            <FileText className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </button>
        </div>
      </aside>

      {/* Slide-in Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}
