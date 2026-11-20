"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { CONTACT_INFO } from "@/data/contactInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Buying Property",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.interest,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit your message. Please try again or reach us via WhatsApp.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or reach us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-[#111111] text-white py-14 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Private Client Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-3">
              Contact La Vista Real Estate
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Connect with our licensed private advisors for confidential consultations, leasing inquiries, commercial assets, and portfolio acquisitions across Umm Al Quwain and the wider UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-12 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full min-w-0">
          {/* Left Column: Office Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 w-full min-w-0 space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-8 border border-[#E7DFCF] shadow-sm w-full min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-[#C99A3B]" />
                <span className="text-xs uppercase font-bold tracking-widest text-[#C99A3B]">
                  Headquarters
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] mb-6">
                Umm Al Quwain & Wider UAE Office
              </h2>

              <div className="space-y-5 text-sm text-[#111111]">
                {/* Office Address */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Office Address
                    </strong>
                    <span className="font-medium text-[#111111] block break-words">
                      {language === "ar" ? CONTACT_INFO.addressAr : CONTACT_INFO.address}
                    </span>
                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#C99A3B] font-semibold hover:underline mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Telephone
                    </strong>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-base font-semibold text-[#111111] hover:text-[#C99A3B] transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#5E6778]">Central switchboard & client desk</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <WhatsAppIcon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      WhatsApp Private Desk
                    </strong>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-[#25D366] hover:underline"
                      >
                        {CONTACT_INFO.whatsappDisplay}
                      </a>
                      <span className="hidden sm:inline text-[#E7DFCF]">|</span>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber2}?text=${CONTACT_INFO.whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold text-[#25D366] hover:underline"
                      >
                        {CONTACT_INFO.whatsappDisplay2}
                      </a>
                    </div>
                    <span className="block text-xs text-[#5E6778]">Instant client support & property updates 24/7</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Email Inquiries
                    </strong>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-medium hover:text-[#C99A3B] block break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F3EA] border border-[#E7DFCF] text-[#C99A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-0.5">
                      Operating Hours
                    </strong>
                    <span className="block">Monday – Saturday: 9:00 AM – 7:00 PM GST</span>
                    <span className="block text-xs text-[#5E6778]">Private weekend consultations by appointment</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-[#E7DFCF] min-w-0">
                  <strong className="block text-xs uppercase text-[#5E6778] tracking-wider mb-2.5">
                    Official Social Channels
                  </strong>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={CONTACT_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#F7F3EA] hover:bg-[#C99A3B] hover:text-white text-xs font-semibold transition-all border border-[#E7DFCF]"
                    >
                      Facebook
                    </a>
                    <a
                      href={CONTACT_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#F7F3EA] hover:bg-[#C99A3B] hover:text-white text-xs font-semibold transition-all border border-[#E7DFCF]"
                    >
                      Instagram
                    </a>
                    <a
                      href={CONTACT_INFO.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#F7F3EA] hover:bg-[#C99A3B] hover:text-white text-xs font-semibold transition-all border border-[#E7DFCF]"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map with Clickable Navigation Link */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] shadow-sm w-full min-w-0">
              <div className="p-3.5 sm:p-4 bg-[#111111] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-sm">Interactive Business Location</h3>
                  <p className="text-white/70 text-xs break-words sm:truncate">
                    {language === "ar" ? CONTACT_INFO.shortAddressAr : CONTACT_INFO.shortAddress}
                  </p>
                </div>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs font-semibold rounded-lg transition-colors shrink-0 self-start sm:self-auto"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="relative h-64 sm:h-72 w-full bg-[#111111]">
                <iframe
                  title="La Vista Real Estate Umm Al Quwain Location"
                  src={CONTACT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-10 border border-[#E7DFCF] shadow-sm w-full min-w-0">
              <span className="text-xs uppercase font-bold text-[#C99A3B] tracking-widest block mb-1">
                Direct Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] mb-2">
                Send a Message to Our Advisory Team
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6778] font-light mb-8">
                Please leave your details below and an appropriate Umm Al Quwain and UAE specialist will get in touch promptly.
              </p>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                    Message Successfully Sent
                  </h3>
                  <p className="text-sm text-[#5E6778] max-w-md mb-6">
                    Thank you, {formData.name}. We have received your inquiry regarding {formData.interest}. A dedicated senior advisor will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        interest: "Buying Property",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#8A6420]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full min-w-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full min-w-0">
                    <div className="w-full min-w-0">
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sultan Al-Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full max-w-full px-3.5 sm:px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] box-border"
                      />
                    </div>

                    <div className="w-full min-w-0">
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full max-w-full px-3.5 sm:px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] box-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full min-w-0">
                    <div className="w-full min-w-0">
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="investor@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full max-w-full px-3.5 sm:px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] box-border"
                      />
                    </div>

                    <div className="w-full min-w-0">
                      <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                        Property Category / Purpose *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full max-w-full truncate px-3.5 sm:px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] bg-white box-border"
                      >
                        <option value="Residential Properties (Buying)">Residential Properties (Buying)</option>
                        <option value="Commercial Properties (Office, Retail)">Commercial Properties (Office, Retail)</option>
                        <option value="Warehouses & Logistics (Buying / Selling)">Warehouses & Logistics (Buying / Selling)</option>
                        <option value="Leasing Properties (Annual / Commercial Lease)">Leasing Properties (Annual / Commercial Lease)</option>
                        <option value="Off-Plan Waterfront Projects">Off-Plan Waterfront Projects</option>
                        <option value="Selling / Listing a Property">Selling / Listing a Property</option>
                        <option value="UAE Golden Visa Advisory">UAE Golden Visa Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs uppercase font-semibold text-[#5E6778] tracking-wider mb-1.5">
                      Your Message or Specific Requirements
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please specify preferred location (e.g. Al Sinniyah Island, Al Salamah, UAQ Marina, Wider UAE), budget range, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full max-w-full px-3.5 sm:px-4 py-3 text-sm border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B] box-border"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 sm:py-4 bg-[#C99A3B] hover:bg-[#8A6420] disabled:opacity-60 text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Sending Your Inquiry..." : "Send Confidential Message"}</span>
                  </button>

                  <div className="flex items-start sm:items-center gap-2 justify-center text-xs text-[#5E6778] pt-2 text-center">
                    <ShieldCheck className="w-4 h-4 text-[#C99A3B] shrink-0 mt-0.5 sm:mt-0" />
                    <span className="leading-snug">Your privacy is protected. Licensed real estate brokerage in Umm Al Quwain & Wider UAE.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
