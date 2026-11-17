"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import EnquiryModal from "../modals/EnquiryModal";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActions() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  // Dubai phone & WhatsApp configuration
  const whatsappNumber = "971501234567";
  const whatsappMessage = encodeURIComponent(
    "Hello La Vista Real Estate, I would like to inquire about luxury properties in Dubai."
  );
  const phoneNumber = "+97144298888";

  return (
    <>
      {/* Floating Buttons Stack - Right Edge */}
      <aside
        aria-label="Quick Contact Actions"
        className="fixed right-2.5 sm:right-4 md:right-6 bottom-4 sm:bottom-8 md:bottom-10 z-40 flex flex-col gap-2 sm:gap-2.5 md:gap-3 select-none"
      >
        {/* 1. WhatsApp Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_whatsapp}
          </span>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with La Vista Real Estate"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
          >
            <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 fill-white" />
          </a>
        </div>

        {/* 2. Call Button */}
        <div className="relative group flex items-center justify-end">
          <span className={`hidden md:inline-block pointer-events-none absolute ${isRTL ? "right-16 text-right" : "right-16 text-left"} px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#C99A3B]/40`}>
            {t.float_call}
          </span>
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call La Vista Real Estate Advisors"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#111111] text-[#C99A3B] border border-[#C99A3B]/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#C99A3B] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99A3B]"
          >
            <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* 3. Enquiry Slide-in Form Button */}
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
