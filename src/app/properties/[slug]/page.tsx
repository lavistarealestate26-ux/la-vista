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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = MOCK_LISTINGS.find((p) => p.slug === slug);

  if (!listing) {
    return {
      title: "Property Not Found | La Vista Real Estate Dubai",
    };
  }

  return {
    title: `${listing.title} | La Vista Real Estate`,
    description: listing.description.slice(0, 160),
    openGraph: {
      title: `${listing.title} | La Vista Real Estate Dubai`,
      description: listing.description.slice(0, 160),
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
