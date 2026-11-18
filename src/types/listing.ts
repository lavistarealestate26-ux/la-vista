export type PropertyPurpose = "buy" | "rent" | "off-plan" | "leasing";
export type PropertyCategory = "commercial" | "residential" | "leasing";
export type PropertyType = "apartment" | "villa" | "townhouse" | "penthouse" | "plot" | "commercial" | "office" | "retail" | "warehouse" | "industrial";
export type PropertyStatus = "available" | "sold" | "rented";
export type PropertyRegion = "Umm Al Quwain" | "Wider UAE";

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
  category: PropertyCategory;
  region: PropertyRegion;
  propertyType: PropertyType;
  priceAED: number;
  rentFrequency?: "yearly" | "monthly";
  community: string;
  subCommunity: string;
  building?: string;
  beds: number; // 0 for Studio or Commercial N/A
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
  updatedAt: string;
}

export interface FilterState {
  keyword?: string;
  purpose?: PropertyPurpose;
  category?: PropertyCategory;
  region?: PropertyRegion;
  community?: string;
  propertyType?: string;
  beds?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: "newest" | "price-asc" | "price-desc" | "beds-desc";
}
