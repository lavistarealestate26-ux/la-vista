import React, { Suspense } from "react";
import ListingsContent from "@/components/listings/ListingsContent";

export const metadata = {
  title: "Properties in Umm Al Quwain & Wider UAE | Commercial, Residential & Leasing | La Vista",
  description:
    "Explore luxury residential homes, waterfront villas, commercial properties, and leasing opportunities across Umm Al Quwain and the wider UAE.",
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
