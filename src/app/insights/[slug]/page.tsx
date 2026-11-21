import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, Building2, PhoneCall } from "lucide-react";
import { LATEST_INSIGHTS } from "@/data/mockListings";
import { CONTACT_INFO } from "@/data/contactInfo";

interface Props {
  params: Promise<{ slug: string }>;
}

const INSIGHTS_METADATA: Record<string, { title: string; description: string }> = {
  "umm-al-quwain-coastal-waterfront-market-outlook-2026": {
    title: "Umm Al Quwain Property Market 2026: Prices & Outlook",
    description:
      "Where Umm Al Quwain property prices and rents stand in 2026, the projects driving demand, and what it means for buyers and investors.",
  },
  "uae-golden-visa-property-investment-guide": {
    title: "UAE Golden Visa Through Property: 2026 Rules & Steps",
    description:
      "How to qualify for the 10-year UAE Golden Visa by buying property, including the AED 2 million rule, off-plan and mortgaged homes, and the steps.",
  },
  "commercial-and-leasing-growth-in-uaq": {
    title: "Commercial & Leasing Returns in Umm Al Quwain (2026)",
    description:
      "Comparing warehouse, retail and residential leasing returns in Umm Al Quwain, and how investors balance cash flow against capital growth.",
  },
};

export async function generateStaticParams() {
  return LATEST_INSIGHTS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = LATEST_INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Insight Not Found | La Vista Real Estate",
    };
  }

  const custom = INSIGHTS_METADATA[slug];
  const title = custom?.title || `${article.title} | La Vista Insights`;
  const description = custom?.description || article.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: article.image }],
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = LATEST_INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = LATEST_INSIGHTS.filter((a) => a.slug !== slug);

  return (
    <article className="pt-28 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      {/* Header Container */}
      <div className="bg-[#111111] text-white py-14 sm:py-20 border-b border-[#C99A3B]/30">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C99A3B] hover:text-white transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Market Intelligence</span>
          </Link>

          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-[#C99A3B] text-[#111111] font-bold px-2.5 py-1 rounded uppercase tracking-wider text-[10px]">
              {article.category}
            </span>
            <span className="text-white/60 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-3xl">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#E7DFCF] mb-12 bg-white">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Prose */}
        <div className="bg-white rounded-2xl p-6 sm:p-12 border border-[#E7DFCF] shadow-sm space-y-8 text-[#111111] leading-relaxed">
          <div className="border-l-2 border-[#C99A3B] pl-4 sm:pl-6 text-sm sm:text-base italic text-[#5E6778]">
            Authoritative intelligence compiled by La Vista Real Estate Advisory Desk, King Faisal Road, Umm Al Quwain.
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#222222] font-light">
            <p>
              Umm Al Quwain continues to establish itself as the UAE’s premier emerging luxury coastal frontier. Driven by landmark waterfront master developments, progressive freehold ownership regulations, and unmatched cost-per-square-foot metrics compared to Dubai and Abu Dhabi, the emirate is capturing unprecedented institutional and private investor capital.
            </p>
            <p>
              With strategic infrastructure investments linking King Faisal Road directly to the E311 and E611 arterial corridors, access to Dubai International Airport (DXB) in under 45 minutes has positioned UAQ as both a serene sanctuary and a strategic logistics gateway.
            </p>
          </div>

          <div className="bg-[#F7F3EA]/70 rounded-xl p-6 border border-[#E7DFCF]">
            <h3 className="text-lg font-serif font-bold text-[#111111] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C99A3B]" />
              <span>Key Executive Takeaways</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5E6778]">
              <li className="flex items-start gap-2">
                <span className="text-[#C99A3B] font-bold">•</span>
                <span><strong>High Capital Appreciation:</strong> Natural coastal master plans on Al Sinniyah Island and UAQ Marina are delivering substantial pre-handover equity growth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C99A3B] font-bold">•</span>
                <span><strong>Attractive Rental Yields:</strong> Established residential family communities and prime commercial assets demonstrate stable 7.5% - 9.2% net leasing yields.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C99A3B] font-bold">•</span>
                <span><strong>Residency Benefits:</strong> Acquisitions exceeding AED 2M qualify buyers and family members for the renewable 10-Year UAE Golden Visa.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#222222] font-light">
            <p>
              Whether you are evaluating entry points into beachfront residential enclaves or seeking long-term commercial yields across industrial and retail portfolios, direct consultation with locally based advisors ensures authenticated transaction records and priority developer allocations.
            </p>
          </div>

          {/* Consultation CTA Card */}
          <div className="pt-6 border-t border-[#E7DFCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-base text-[#111111]">
                Speak to a Senior UAQ Advisor
              </h4>
              <p className="text-xs text-[#5E6778]">
                Confidential advisory on acquisitions, payment plans, and market appraisals.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white hover:bg-[#C99A3B] text-xs font-semibold rounded-xl uppercase tracking-wider transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Advisor</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F7F3EA] text-[#111111] hover:bg-[#E7DFCF] text-xs font-semibold rounded-xl uppercase tracking-wider transition-colors border border-[#E7DFCF]"
              >
                <span>Register Enquiry</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Read Next Section */}
        {otherArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-[#111111] mb-6">
              More Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.slice(0, 2).map((other) => (
                <Link
                  key={other.id}
                  href={`/insights/${other.slug}`}
                  className="bg-white rounded-xl p-5 border border-[#E7DFCF] hover:shadow-md hover:border-[#C99A3B]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C99A3B] tracking-wider block mb-1">
                      {other.category}
                    </span>
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-[#111111] group-hover:text-[#C99A3B] transition-colors line-clamp-2 mb-2">
                      {other.title}
                    </h3>
                    <p className="text-xs text-[#5E6778] line-clamp-2 font-light">
                      {other.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E7DFCF]/60 text-[11px] text-[#5E6778] flex items-center justify-between">
                    <span>{other.date}</span>
                    <span className="text-[#C99A3B] font-semibold">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
