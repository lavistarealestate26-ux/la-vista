"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, User, MessageSquare } from "lucide-react";
import { sendLead } from "@/lib/sendLead";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  defaultPurpose?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  propertyTitle,
  defaultPurpose = "buy",
}: EnquiryModalProps) {
  const [purpose, setPurpose] = useState<string>(defaultPurpose);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    propertyTitle ? `Hello, I am interested in ${propertyTitle}. Please contact me.` : ""
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Promise.allSettled([
        sendLead({ name, phone, email, message, purpose, propertyTitle }),
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, message, purpose, propertyTitle }),
        }),
      ]);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E7DFCF] text-[#111111]">
        {/* Header */}
        <div className="bg-[#111111] px-6 py-5 text-white flex items-center justify-between border-b border-[#C99A3B]/30">
          <div>
            <span className="text-[#C99A3B] text-xs font-semibold tracking-wider uppercase">
              La Vista Client Advisory
            </span>
            <h3 className="text-xl font-serif font-medium mt-0.5">
              {propertyTitle ? "Register Private Interest" : "Direct Property Enquiry"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-[#C99A3B] mb-4" />
              <h4 className="text-2xl font-serif font-bold text-[#111111] mb-2">
                Enquiry Received
              </h4>
              <p className="text-[#5E6778] text-sm max-w-sm mb-6">
                Thank you for contacting La Vista Real Estate. One of our Senior Advisors will reach out to you within 30 minutes via WhatsApp / Phone.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-sm font-medium hover:bg-[#8A6420] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {propertyTitle && (
                <div className="p-3 bg-[#F7F3EA] border border-[#E7DFCF] rounded-lg text-xs text-[#5E6778]">
                  Property: <span className="font-semibold text-[#111111]">{propertyTitle}</span>
                </div>
              )}

              {/* Purpose Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6778] mb-1.5 uppercase tracking-wider">
                  I Am Interested In
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["Buy", "Rent", "Off-Plan", "Sell"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPurpose(item.toLowerCase())}
                      className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                        purpose === item.toLowerCase()
                          ? "bg-[#111111] text-[#C99A3B] border-[#111111]"
                          : "bg-white text-[#5E6778] border-[#E7DFCF] hover:border-[#C99A3B]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#5E6778] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheikh Mohammed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              {/* Phone with Country Code */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                  Phone / WhatsApp (with Country Code) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#5E6778] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#5E6778] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="client@luxuryinvestor.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6778] mb-1 uppercase tracking-wider">
                  Your Message or Timeline
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#5E6778] absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Provide any specific preferences or schedule a private viewing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#C99A3B] text-white font-medium rounded-lg hover:bg-[#8A6420] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-4"
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Private Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
