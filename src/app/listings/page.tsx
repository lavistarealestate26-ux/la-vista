import React, { Suspense } from "react";
import ListingsContent from "@/components/listings/ListingsContent";

export const metadata = {
  title: "Properties for Sale & Rent in Dubai | La Vista Real Estate",
  description:
    "Explore luxury apartments, beachfront villas, and sky penthouses across Palm Jumeirah, Downtown Dubai, Dubai Marina, and Dubai Hills Estate.",
};

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
