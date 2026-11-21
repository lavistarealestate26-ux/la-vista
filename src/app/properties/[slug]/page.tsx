import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MOCK_LISTINGS } from "@/data/mockListings";
import PropertyDetailClient from "@/components/properties/PropertyDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_LISTINGS.map((listing) => ({
    slug: listing.slug,
  }));
}

const PROPERTY_METADATA: Record<string, { title: string; description: string }> = {
  "al-sinniyah-island-signature-beachfront-mansion": {
    title: "6-Bed Beachfront Mansion for Sale on Siniya Island, UAQ",
    description:
      "Signature 6-bedroom beachfront mansion for sale on Al Sinniyah (Siniya) Island, Umm Al Quwain, with private beach access. Call La Vista to arrange a viewing.",
  },
  "al-salamah-luxury-family-villa": {
    title: "5-Bedroom Luxury Villa for Sale in Al Salamah, UAQ",
    description:
      "Contemporary 5-bedroom family villa for sale in Al Salamah, Umm Al Quwain, on a private plot with landscaped grounds. Book a viewing with La Vista.",
  },
  "uaq-freehold-logistics-distribution-warehouse-sale": {
    title: "Freehold Logistics Warehouse for Sale in Umm Al Quwain",
    description:
      "Large freehold logistics and distribution warehouse for sale in Umm Al Quwain's industrial area. Ask La Vista for power load, plot details and price.",
  },
  "uaq-marina-waterfront-residence-lease": {
    title: "Waterfront Home for Rent in Umm Al Quwain Marina",
    description:
      "Panoramic waterfront residence for annual rent in Umm Al Quwain Marina, with lagoon views and marina living. Contact La Vista to arrange a viewing.",
  },
  "king-faisal-commercial-retail-plaza": {
    title: "Commercial Retail Plaza on King Faisal Street, UAQ",
    description:
      "Prime commercial retail plaza on King Faisal Street, Umm Al Quwain's main business road, with strong frontage and footfall. Enquire with La Vista.",
  },
  "mangrove-coastal-residence-lease": {
    title: "Beach Villa for Annual Lease on UAQ's Mangrove Coast",
    description:
      "Eco-luxury beach villa for annual lease on Umm Al Quwain's mangrove coastline, with direct beach access and calm lagoon views. Book a viewing today.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = MOCK_LISTINGS.find((p) => p.slug === slug);

  if (!listing) {
    return {
      title: "Property Not Found | La Vista Real Estate",
    };
  }

  const custom = PROPERTY_METADATA[slug];
  const title = custom?.title || `${listing.title} | La Vista Real Estate`;
  const description = custom?.description || listing.description.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: listing.images[0] }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const listing = MOCK_LISTINGS.find((p) => p.slug === slug);

  if (!listing) {
    notFound();
  }

  const similarProperties = MOCK_LISTINGS.filter(
    (p) =>
      p.id !== listing.id &&
      (p.community === listing.community || p.purpose === listing.purpose)
  ).slice(0, 3);

  return (
    <PropertyDetailClient
      listing={listing}
      similarProperties={similarProperties}
    />
  );
}
