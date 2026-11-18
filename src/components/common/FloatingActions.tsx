"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, FileText, Share2, X } from "lucide-react";
import EnquiryModal from "../modals/EnquiryModal";
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
        {/* Social Media Popup Drawer */}
        {isSocialOpen && (
          <div
            className={`absolute bottom-full mb-2 ${
              isRTL ? "left-0" : "right-0"
            } bg-[#111111] text-white border border-[#C99A3B]/40 rounded-2xl shadow-2xl p-3 w-48 flex flex-col gap-2 animate-fadeIn z-50`}
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <span className="text-[11px] font-semibold tracking-wider text-[#C99A3B] uppercase">
                {t.float_social}
              </span>
              <button
                onClick={() => setIsSocialOpen(false)}
                className="text-white/60 hover:text-white p-0.5 rounded"
                aria-label="Close Social Menu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 1. Facebook */}
            <a
              href={CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 hover:text-[#1877F2] text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span className="font-medium">Facebook</span>
            </a>

            {/* 2. Instagram */}
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#E4405F]/20 hover:text-[#E4405F] text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-[#E4405F]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-medium">Instagram</span>
            </a>

            {/* 3. TikTok */}
            <a
              href={CONTACT_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-xs transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="font-medium">TikTok</span>
            </a>
          </div>
        )}

        {/* 1. Social CTA Trigger Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_social}
          </span>
          <button
            onClick={() => setIsSocialOpen(!isSocialOpen)}
            aria-label="Open Social Media Links"
            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 ${
              isSocialOpen ? "bg-[#C99A3B] text-white" : "bg-[#111111] text-[#C99A3B] hover:bg-[#C99A3B] hover:text-white"
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
            <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 fill-white" />
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
