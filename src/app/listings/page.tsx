import React, { Suspense } from "react";
import type { Metadata } from "next";
import ListingsContent from "@/components/listings/ListingsContent";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category.toLowerCase() : "";
  const purpose = typeof params.purpose === "string" ? params.purpose.toLowerCase() : "";
  const region = typeof params.region === "string" ? params.region : "";
  const community = typeof params.community === "string" ? params.community.toLowerCase() : "";

  let title = "Property for Sale & Rent in Umm Al Quwain | La Vista";
  let description =
    "Browse verified villas, apartments, commercial units and warehouses for sale and rent across Umm Al Quwain and the wider UAE.";

  if (community) {
    if (community.includes("sinniyah") || community.includes("siniya")) {
      title = "Siniya Island, Umm Al Quwain: Villas & Investment Guide";
      description =
        "Beachfront villas and marina residences on Siniya Island (Al Sinniyah), Umm Al Quwain. See current listings, prices and payment plans.";
    } else if (community.includes("salamah")) {
      title = "Al Salamah, Umm Al Quwain: Villas for Sale & Rent";
      description =
        "Al Salamah is one of UAQ's most established family areas. Browse villas for sale and annual rent, close to schools, mosques and Al Safeer Mall.";
    } else if (community.includes("marina") || community.includes("corniche")) {
      title = "Umm Al Quwain Marina & Corniche: Homes for Sale & Rent";
      description =
        "Waterfront villas and apartments around Umm Al Quwain Marina and the Corniche, for sale and annual rent, with lagoon and sea views.";
    } else if (community.includes("mangrove")) {
      title = "Mangrove Beach, Umm Al Quwain: Beachfront Homes";
      description =
        "Beachfront villas beside Umm Al Quwain's protected mangroves, for sale and annual lease. A calmer coastal lifestyle at UAQ prices.";
    } else if (community.includes("ramlah") || community.includes("raudah")) {
      title = "Al Ramlah & Al Raudah, Umm Al Quwain: Homes & Guide";
      description =
        "Newer villas, townhouses and the AMRA Residences launch. Browse homes for sale and rent in Al Ramlah and Al Raudah, Umm Al Quwain.";
    }
  } else if (category === "residential") {
    title = "Villas & Apartments for Sale in Umm Al Quwain | La Vista";
    description =
      "Browse villas, apartments, townhouses and plots for sale in Umm Al Quwain, with freehold options for expats and advice from local agents.";
  } else if (category === "leasing") {
    title = "Villas & Apartments for Rent in Umm Al Quwain | La Vista";
    description =
      "Find villas, townhouses and apartments for annual rent in Al Salamah, Al Ramlah, UAQ Marina and beyond. Verified listings and flexible cheque options.";
  } else if (category === "commercial") {
    title = "Commercial Property for Sale & Rent in Umm Al Quwain";
    description =
      "Shops, showrooms, offices and retail buildings for sale and rent in Umm Al Quwain, including prime units on King Faisal Street.";
  } else if (category === "warehouse") {
    title = "Warehouses for Sale & Rent in Umm Al Quwain | La Vista";
    description =
      "Warehouses, industrial plots and logistics facilities in Umm Al Thuoob and UAQ's industrial areas, with power load, plot size and ownership details.";
  } else if (purpose === "off-plan") {
    title = "Off-Plan Projects in Umm Al Quwain | New Launches 2026";
    description =
      "Compare new off-plan launches in Umm Al Quwain: prices, payment plans and handover dates for AMRA Residences, Siniya Island and more.";
  } else if (region.toLowerCase().includes("wider")) {
    title = "Prime Property Across the Wider UAE | La Vista";
    description =
      "Selected homes and investments beyond Umm Al Quwain, in Ajman, Ras Al Khaimah, Sharjah and Dubai, sourced by the same La Vista advisory team.";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function ListingsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-20 text-center text-[#5E6778]">
          <div className="w-10 h-10 border-4 border-[#C99A3B] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif text-lg">Loading La Vista Properties...</p>
        </div>
      }
    >
      <ListingsContent />
    </Suspense>
  );
}
