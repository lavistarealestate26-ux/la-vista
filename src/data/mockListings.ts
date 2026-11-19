import { Listing } from "@/types/listing";

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "lv-prop-01",
    slug: "al-sinniyah-island-signature-beachfront-mansion",
    title: "Signature Beachfront Mansion on Al Sinniyah Island",
    tagline: "Ultra-luxury custom coastal estate with private beach and infinity pool",
    purpose: "buy",
    category: "residential",
    region: "Umm Al Quwain",
    propertyType: "villa",
    priceAED: 24500000,
    community: "Al Sinniyah Island",
    subCommunity: "North Bay",
    building: "Custom Island Villa",
    beds: 6,
    baths: 7,
    sizeSqft: 10450,
    description: "Nestled along the pristine natural shoreline of Al Sinniyah Island in Umm Al Quwain, this architectural masterpiece represents the pinnacle of private coastal luxury. Featuring Italian marble finishes, double-height ceilings with floor-to-ceiling acoustic glass, private infinity pool spilling toward your own sandy beach, and panoramic Arabian Gulf sunset views.",
    highlights: [
      "Direct Private Beach Access with 110ft coastal shoreline",
      "Private Infinity Edge Swimming Pool & Jacuzzi",
      "Show Kitchen with Miele appliances + Separate Chef's Prep Kitchen",
      "Private Cinema, Wellness Spa, and Finnish Sauna",
      "Smart Home Automation by Crestron with biometric access",
      "Underground Temperature-Controlled 4-Car Showroom Garage"
    ],
    amenities: [
      "Private Beach Access",
      "Infinity Pool",
      "Private Spa & Sauna",
      "Home Cinema",
      "Smart Home Automation",
      "Maid & Driver Quarters",
      "Private Elevator",
      "Landscaped Zen Garden",
      "24/7 Security Patrol",
      "Barbecue Pavilion"
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Sobha & UAQ Waterfront Developments",
    permitNumber: "UAQ-PERMIT-2026-901",
    dldQrImage: "/images/compliance/dld-sample-qr.png",
    agent: {
      name: "Tariq Mansoor",
      title: "Senior Luxury Partner",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-01-15T08:00:00Z",
    updatedAt: "2026-02-10T12:00:00Z"
  },
  {
    id: "lv-prop-02",
    slug: "al-salamah-luxury-family-villa",
    title: "Contemporary 5-Bedroom Luxury Villa in Al Salamah",
    tagline: "Expansive private estate with landscaped grounds and private pool",
    purpose: "buy",
    category: "residential",
    region: "Umm Al Quwain",
    propertyType: "villa",
    priceAED: 4950000,
    community: "Al Salamah",
    subCommunity: "Sector 3",
    building: "Private Compound Villa",
    beds: 5,
    baths: 6,
    sizeSqft: 6800,
    description: "Located in the highly sought-after community of Al Salamah in Umm Al Quwain, this standalone contemporary villa features expansive open-plan living, custom European cabinetry, private swimming pool, and proximity to top schools, healthcare, and retail centres.",
    highlights: [
      "Large 10,000 sqft corner plot with landscaped gardens",
      "Private swimming pool with waterfall feature",
      "Separate maid's and driver's quarters",
      "Shaded parking for 4 vehicles",
      "Minutes to Sheikh Mohammed Bin Zayed Road (E311)"
    ],
    amenities: [
      "Private Swimming Pool",
      "Landscaped Lawn",
      "Maid's Room",
      "Driver's Room",
      "Covered Parking",
      "Built-in Wardrobes",
      "Central A/C"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Private Local Developer",
    permitNumber: "UAQ-PERMIT-2026-902",
    agent: {
      name: "Rashid Al-Nuaimi",
      title: "UAQ Residential Specialist",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "39201"
    },
    status: "available",
    featured: true,
    createdAt: "2026-01-20T09:00:00Z",
    updatedAt: "2026-02-12T14:30:00Z"
  },
  {
    id: "lv-prop-03",
    slug: "uaq-marina-waterfront-residence-lease",
    title: "Panoramic Waterfront Residence in Umm Al Quwain Marina",
    tagline: "Spectacular coastal apartment overlooking the turquoise marina basin",
    purpose: "leasing",
    category: "leasing",
    region: "Umm Al Quwain",
    propertyType: "apartment",
    priceAED: 95000,
    rentFrequency: "yearly",
    community: "UAQ Marina",
    subCommunity: "Marina Promenade",
    building: "Marina Bay Tower",
    beds: 3,
    baths: 4,
    sizeSqft: 2250,
    description: "Experience premium coastal living in this brand-new 3-bedroom apartment for annual lease in Umm Al Quwain Marina. Boasting floor-to-ceiling windows, modern German appliances, and direct access to waterfront jogging paths, yacht club, and retail dining.",
    highlights: [
      "Direct panoramic views of the marina and Arabian Gulf",
      "Floor-to-ceiling soundproof double-glazed windows",
      "Premium built-in kitchen appliances",
      "Includes 2 dedicated basement parking bays",
      "Chiller-free annual lease with flexible payment terms"
    ],
    amenities: [
      "Sea View",
      "Shared Infinity Pool",
      "Fitness Center",
      "Concierge Service",
      "Covered Parking",
      "Yacht Club Access",
      "24/7 Security"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "UAQ Marina Properties",
    permitNumber: "UAQ-PERMIT-2026-903",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Senior Leasing Advisor",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "52140"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-01T10:00:00Z",
    updatedAt: "2026-02-14T11:00:00Z"
  },
  {
    id: "lv-prop-04",
    slug: "king-faisal-commercial-retail-plaza",
    title: "Prime Commercial Retail Plaza on King Faisal Street",
    tagline: "High-visibility retail showroom and corporate suites in heart of Umm Al Quwain",
    purpose: "buy",
    category: "commercial",
    region: "Umm Al Quwain",
    propertyType: "commercial",
    priceAED: 16500000,
    community: "Al Khor",
    subCommunity: "King Faisal St",
    building: "La Vista Commercial Plaza",
    beds: 0,
    baths: 12,
    sizeSqft: 18500,
    description: "An extraordinary commercial investment opportunity in central Umm Al Quwain. This modern G+3 commercial building features ground-floor flagship retail showrooms with direct main road frontage, 14 executive corporate offices, and an expansive rooftop terrace.",
    highlights: [
      "100% prime commercial frontage on King Faisal Street",
      "Fully leased ground-floor retail tenancies generating 8.5% net ROI",
      "Private basement and surface parking for 35+ vehicles",
      "High-speed passenger and freight elevators",
      "Freehold ownership open to UAE and GCC nationals and approved corporate entities"
    ],
    amenities: [
      "Main Road Frontage",
      "Elevator",
      "Basement Parking",
      "Central HVAC",
      "24/7 Security & CCTV",
      "Fire Safety Compliant",
      "High Yield Potential"
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "La Vista Commercial Holdings",
    permitNumber: "UAQ-COMM-2026-441",
    agent: {
      name: "Tariq Mansoor",
      title: "Commercial Investment Director",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-01-25T11:00:00Z",
    updatedAt: "2026-02-15T16:00:00Z"
  },
  {
    id: "lv-prop-05",
    slug: "uaq-industrial-logistics-facility-lease",
    title: "Modern Industrial Logistics & Distribution Hub for Lease",
    tagline: "High-spec 22,000 sqft warehouse and storage facility with 3-phase power",
    purpose: "leasing",
    category: "commercial",
    region: "Umm Al Quwain",
    propertyType: "warehouse",
    priceAED: 280000,
    rentFrequency: "yearly",
    community: "UAQ Industrial Area",
    subCommunity: "Industrial 2",
    building: "UAQ Logistics Park",
    beds: 0,
    baths: 4,
    sizeSqft: 22000,
    description: "Located in the expanding industrial heart of Umm Al Quwain with seamless connectivity to E311 and E611 highways, this warehouse facility provides 10-meter clear ceiling heights, insulated panels, heavy power capacity, and dedicated container loading bays.",
    highlights: [
      "10-meter clear internal ceiling height",
      "Heavy 3-phase power capacity (150 kW)",
      "Built-in administrative office suite and staff pantry",
      "Dedicated turning apron for 40-foot articulated containers",
      "Civil defense approved with complete sprinkler network"
    ],
    amenities: [
      "3-Phase Power",
      "Loading Bays",
      "Sprinkler System",
      "Administrative Office",
      "Container Access",
      "24/7 Security"
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "UAQ Industrial Development Authority",
    permitNumber: "UAQ-COMM-2026-442",
    agent: {
      name: "Rashid Al-Nuaimi",
      title: "Commercial & Industrial Specialist",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "39201"
    },
    status: "available",
    featured: false,
    createdAt: "2026-02-05T08:30:00Z",
    updatedAt: "2026-02-16T10:00:00Z"
  },
  {
    id: "lv-prop-06",
    slug: "mangrove-coastal-residence-lease",
    title: "Eco-Luxury Beach Villa for Annual Lease - Mangrove Coast",
    tagline: "Exclusive sanctuary nestled along serene mangrove reserves with private pool",
    purpose: "leasing",
    category: "leasing",
    region: "Umm Al Quwain",
    propertyType: "villa",
    priceAED: 220000,
    rentFrequency: "yearly",
    community: "Mangrove Beachfront",
    subCommunity: "Coastal Eco Enclave",
    building: "Mangrove Sanctuary Villa",
    beds: 4,
    baths: 5,
    sizeSqft: 4500,
    description: "Available for annual lease, this serene eco-luxury beachfront villa in Umm Al Quwain overlooks natural mangrove channels and tranquil bird sanctuaries. Featuring private swimming pool, sun deck, expansive glass façades, and direct kayak launch access.",
    highlights: [
      "Private swimming pool with sun deck facing the mangroves",
      "Direct water access for kayaking and paddleboarding",
      "Sustainable energy-efficient solar water heating",
      "Maid's room and laundry utility suite",
      "Gated community with 24/7 security patrol"
    ],
    amenities: [
      "Private Pool",
      "Waterfront View",
      "Kayak Access",
      "Maid's Room",
      "Gated Community",
      "Pet Friendly",
      "Covered Parking"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "UAQ Tourism & Coastal Properties",
    permitNumber: "UAQ-PERMIT-2026-904",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Senior Leasing Advisor",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "52140"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-08T14:00:00Z",
    updatedAt: "2026-02-16T15:00:00Z"
  },
  {
    id: "lv-prop-07",
    slug: "wider-uae-signature-waterfront-estate",
    title: "Signature Waterfront Luxury Villa - Wider UAE",
    tagline: "World-class private beachfront estate representing the finest in UAE luxury living",
    purpose: "buy",
    category: "residential",
    region: "Wider UAE",
    propertyType: "villa",
    priceAED: 38000000,
    community: "Wider UAE Coastal",
    subCommunity: "Prime Enclave",
    building: "Private Architectural Estate",
    beds: 6,
    baths: 8,
    sizeSqft: 12000,
    description: "Representing La Vista's premier wider UAE luxury collection, this extraordinary private residence offers absolute beachfront privacy, cascading infinity pools, private marina yacht mooring, and bespoke European craftsmanship.",
    highlights: [
      "Direct private beach access with private jetty",
      "Dual infinity-edge heated pools",
      "Private wellness suite and sauna",
      "Staff quarters for 4 personnel",
      "Elevated security systems and perimeter privacy"
    ],
    amenities: [
      "Private Beach",
      "Infinity Pool",
      "Jetty Access",
      "Cinema",
      "Spa",
      "Maid & Driver Quarters"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Master UAE Developer",
    permitNumber: "UAE-PERMIT-2026-118",
    agent: {
      name: "Tariq Mansoor",
      title: "Senior Luxury Partner",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-01-18T10:00:00Z",
    updatedAt: "2026-02-12T16:00:00Z"
  },
  {
    id: "lv-prop-08",
    slug: "wider-uae-sky-penthouse-residence",
    title: "Panoramic Sky Penthouse - Wider UAE Metro",
    tagline: "Spectacular duplex sky villa overlooking premier city landmarks",
    purpose: "buy",
    category: "residential",
    region: "Wider UAE",
    propertyType: "penthouse",
    priceAED: 18500000,
    community: "Wider UAE Prime",
    subCommunity: "Downtown Enclave",
    building: "Crown Tower",
    beds: 4,
    baths: 5,
    sizeSqft: 4800,
    description: "Curated for international connoisseurs, this triplex sky villa features 360-degree skyline views, private plunge pool on the upper terrace, and dedicated private elevator access.",
    highlights: [
      "360-degree panoramic skyline vistas",
      "Private terrace plunge pool and outdoor bar",
      "Private elevator foyer directly into residence",
      "Designer Italian furniture package included"
    ],
    amenities: [
      "Sky Pool",
      "Private Elevator",
      "Concierge",
      "Valet Parking",
      "Gym & Spa"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Master UAE Developer",
    permitNumber: "UAE-PERMIT-2026-119",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Senior Luxury Advisor",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 6 767 5181",
      whatsapp: "97167675181",
      email: "info@lavistarealestate.ae",
      brn: "52140"
    },
    status: "available",
    featured: false,
    createdAt: "2026-01-22T12:00:00Z",
    updatedAt: "2026-02-14T18:00:00Z"
  }
];

export const MOCK_DEVELOPERS = [
  {
    name: "Citi Developers",
    logo: "/images/developers/citi-developer-gold.svg",
    tier: "Master Developer",
    projects: "Prime Luxury & Waterfront Developments",
    description: "Leading international developer recognized for high-end luxury residences, innovative architectural design, and master-planned destinations across the UAE."
  },
  {
    name: "Khadamat",
    logo: "/images/developers/khadamat.png",
    tier: "Strategic Facilities Partner",
    projects: "Strategic Facilities & Infrastructure",
    description: "Premier institutional services and facilities partner managing prime developments and infrastructure across the UAE."
  },
  {
    name: "Sobha Realty",
    logo: "/images/developers/sobha-realty.svg",
    tier: "Signature Island Partner",
    projects: "Al Sinniyah Island & Coastal Developments",
    description: "Renowned for backward-integrated European craftsmanship and luxury waterfront master-plans across Umm Al Quwain and the wider UAE."
  }
];

export const MOCK_COMMUNITIES = [
  {
    name: "Al Sinniyah Island",
    region: "Umm Al Quwain",
    description: "A prestigious natural island sanctuary featuring pristine mangrove reserves, turquoise waters, and signature private beachfront villas.",
    avgYield: "8.4%",
    avgPriceSqft: "AED 1,650",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "25+ Properties"
  },
  {
    name: "Al Salamah",
    region: "Umm Al Quwain",
    description: "Umm Al Quwain's premier family community known for standalone luxury villas, expansive plots, and rapid access to E311 highway.",
    avgYield: "7.8%",
    avgPriceSqft: "AED 950",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "40+ Properties"
  },
  {
    name: "UAQ Marina & Corniche",
    region: "Umm Al Quwain",
    description: "Vibrant coastal and marina living with yacht berths, waterfront promenades, and boutique residential and leasing towers.",
    avgYield: "8.9%",
    avgPriceSqft: "AED 1,200",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "35+ Properties"
  },
  {
    name: "Mangrove Beachfront",
    region: "Umm Al Quwain",
    description: "An eco-luxury coastal destination blending natural flamingos and mangrove reserves with peaceful waterfront residential estates.",
    avgYield: "8.1%",
    avgPriceSqft: "AED 1,400",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "18+ Properties"
  },
  {
    name: "Al Ramlah & Al Raudah",
    region: "Umm Al Quwain",
    description: "Quiet residential neighbourhoods in Umm Al Quwain offering modern bespoke villas, commercial plots, and community parks.",
    avgYield: "7.5%",
    avgPriceSqft: "AED 880",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "22+ Properties"
  },
  {
    name: "Wider UAE Prime Enclaves",
    region: "Wider UAE",
    description: "Curated sky penthouses, golf estates, and signature branded residences across prime metropolitan enclaves in the UAE.",
    avgYield: "7.9%",
    avgPriceSqft: "AED 2,400",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    propertyCount: "120+ Properties"
  }
];

export const DEVELOPER_PARTNERS = MOCK_DEVELOPERS;
export const UAQ_COMMUNITIES = MOCK_COMMUNITIES;

export const LATEST_INSIGHTS = [
  {
    id: "ins-1",
    slug: "umm-al-quwain-coastal-waterfront-market-outlook-2026",
    title: "Umm Al Quwain Real Estate Report 2026: Coastal Growth & Al Sinniyah Island",
    summary: "Comprehensive analysis of high-net-worth coastal migration, natural island appreciation, and prime waterfront investment yields.",
    excerpt: "Comprehensive analysis of high-net-worth coastal migration, natural island appreciation, and prime waterfront investment yields.",
    date: "February 14, 2026",
    readTime: "5 min read",
    category: "Market Report",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ins-2",
    slug: "uae-golden-visa-property-investment-guide",
    title: "UAE 10-Year Golden Visa via Property Investment: Rules & Requirements",
    summary: "Everything international investors need to know about qualifying for long-term UAE residency through freehold property acquisition.",
    excerpt: "Everything international investors need to know about qualifying for long-term UAE residency through freehold property acquisition.",
    date: "February 08, 2026",
    readTime: "4 min read",
    category: "Investor Guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ins-3",
    slug: "commercial-and-leasing-growth-in-uaq",
    title: "Commercial & Leasing Growth in Umm Al Quwain & Wider UAE: Maximizing Cash Flow",
    summary: "A practical guide comparing capital gains in coastal island master plans against immediate leasing cash flows in prime commercial and residential sectors.",
    excerpt: "A practical guide comparing capital gains in coastal island master plans against immediate leasing cash flows in prime commercial and residential sectors.",
    date: "January 28, 2026",
    readTime: "6 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
];
