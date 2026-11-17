export type PropertyPurpose = "buy" | "rent" | "off-plan";
export type PropertyType = "apartment" | "villa" | "townhouse" | "penthouse" | "plot" | "commercial";
export type PropertyStatus = "available" | "sold" | "rented";

export interface Agent {
  name: string;
  title?: string;
  photo: string;
  phone: string;
  whatsapp: string;
  email: string;
  brn: string;
}

export interface PaymentPlanMilestone {
  stage: string;
  percentage: number;
  milestoneDescription: string;
}

export interface Listing {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  purpose: PropertyPurpose;
  propertyType: PropertyType;
  priceAED: number;
  rentFrequency?: "yearly" | "monthly";
  community: string;
  subCommunity: string;
  building?: string;
  beds: number; // 0 for Studio
  baths: number;
  sizeSqft: number;
  description: string;
  highlights?: string[];
  amenities: string[];
  images: string[];
  videoUrl?: string;
  developer?: string;
  handoverDate?: string;
  paymentPlan?: string;
  paymentPlanBreakdown?: PaymentPlanMilestone[];
  permitNumber: string;
  dldQrImage?: string;
  agent: Agent;
  status: PropertyStatus;
  featured: boolean;
  createdAt: string;
  locationCoordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FilterOptions {
  purpose?: PropertyPurpose;
  community?: string;
  propertyType?: string;
  beds?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
  sortBy?: "price-asc" | "price-desc" | "newest" | "featured";
}
