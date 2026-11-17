"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { LATEST_INSIGHTS } from "@/data/mockListings";

export default function LatestInsightsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E7DFCF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Intelligence & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111111] tracking-tight">
              Dubai Real Estate Insights
            </h2>
            <p className="text-[#5E6778] text-sm sm:text-base max-w-xl mt-2 font-light">
              Authoritative market analysis, investment strategies, and regulatory updates from our research desk.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#C99A3B] transition-colors mt-4 md:mt-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Insight Cards */}
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
                      <Calendar className="w-3.5 h-3.5 text-[#C99A3B]" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C99A3B]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-[#111111] group-hover:text-[#C99A3B] transition-colors mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6778] line-clamp-2 font-light">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A3B] hover:text-[#8A6420] transition-colors"
                >
                  <span>Read Full Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
