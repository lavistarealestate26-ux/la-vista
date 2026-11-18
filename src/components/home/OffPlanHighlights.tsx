"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Building, CreditCard, ArrowRight, Download, Sparkles } from "lucide-react";
import { MOCK_LISTINGS } from "@/data/mockListings";
import EnquiryModal from "../modals/EnquiryModal";

export default function OffPlanHighlights() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Filter 3 off-plan projects
  const offPlanList = MOCK_LISTINGS.filter((p) => p.purpose === "off-plan").slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AE").format(price);
  };

  return (
    <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Decorative Gold Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C99A3B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C99A3B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Developer Allocations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
              Exclusive Off-Plan Launches
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mt-2 font-light">
              Secure VIP launch allocations, waterfront master communities, and flexible payment plans across Umm Al Quwain and the wider UAE.
            </p>
          </div>

          <Link
            href="/listings?purpose=off-plan"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C99A3B] hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span>View All Off-Plan Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Off-Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offPlanList.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-[#C99A3B]/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top Handover Badge */}
                  <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#C99A3B]/40 flex items-center gap-1.5 text-xs text-[#C99A3B]">
                    <Calendar className="w-3 h-3" />
                    <span>Handover: {project.handoverDate}</span>
                  </div>

                  {/* Developer Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-semibold drop-shadow">
                    <Building className="w-3.5 h-3.5 text-[#C99A3B]" />
                    <span>{project.developer}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-[10px] uppercase font-bold text-[#C99A3B] tracking-wider block">
                      Starting Price
                    </span>
                    <span className="text-2xl font-serif font-bold text-white tracking-tight">
                      AED {formatPrice(project.priceAED)}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#C99A3B] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-white/60 line-clamp-2 mb-4 font-light">
                    {project.description}
                  </p>

                  {/* Payment Plan Highlight */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-4 flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-[#C99A3B] flex-shrink-0" />
                    <div className="text-xs">
                      <span className="text-white/50 block text-[10px] uppercase tracking-wider">
                        Payment Structure
                      </span>
                      <span className="text-white font-medium">{project.paymentPlan}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedProject(project.title)}
                  className="py-2.5 px-3 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors text-center"
                >
                  Enquire VIP
                </button>
                <Link
                  href={`/properties/${project.slug}`}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors text-center"
                >
                  Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Modal */}
      <EnquiryModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        propertyTitle={selectedProject || ""}
        defaultPurpose="off-plan"
      />
    </section>
  );
}
