import React from "react";
import { LATEST_INSIGHTS } from "@/data/mockListings";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Umm Al Quwain Property Market Insights | La Vista",
  description:
    "Market reports, buying guides and investor analysis on Umm Al Quwain and the wider UAE, written by La Vista's local property advisors.",
  openGraph: {
    title: "Umm Al Quwain Property Market Insights | La Vista",
    description:
      "Market reports, buying guides and investor analysis on Umm Al Quwain and the wider UAE, written by La Vista's local property advisors.",
  },
};

export default function InsightsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      <div className="bg-[#111111] text-white py-16 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C99A3B] text-xs font-semibold tracking-widest uppercase block mb-1">
              Market Intelligence Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
              Umm Al Quwain & UAE Real Estate Insights
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Authoritative transaction analyses, coastal master development updates, and leasing trends prepared by our senior research desk.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7DFCF] group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#C99A3B]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#5E6778] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6778] font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C99A3B] group-hover:text-[#8A6420]">
                  <span>Read Full Report</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
