import React from "react";

export const metadata = {
  title: "Terms of Use | La Vista Real Estate",
  description:
    "The terms that apply when you use the La Vista Real Estate website, including listing information, enquiries, pricing and intellectual property.",
  openGraph: {
    title: "Terms of Use | La Vista Real Estate",
    description:
      "The terms that apply when you use the La Vista Real Estate website, including listing information, enquiries, pricing and intellectual property.",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 text-[#111111]">
      <h1 className="text-3xl font-serif font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-sm text-[#5E6778] leading-relaxed">
        <p>
          Welcome to La Vista Real Estate. By accessing or using our website, you agree to comply with our terms and applicable laws and regulations governed by the Umm Al Quwain Municipality, Land Department, and relevant UAE federal regulatory authorities.
        </p>
        <p>
          All property listings, pricing in AED, and commercial or residential project terms are subject to availability and formal verification under authorized UAE brokerage permits.
        </p>
      </div>
    </div>
  );
}
