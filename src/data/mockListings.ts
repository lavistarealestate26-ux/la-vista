import { Listing } from "@/types/listing";

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "lv-prop-01",
    slug: "palm-jumeirah-signature-beachfront-mansion",
    title: "Signature Beachfront Mansion on Palm Jumeirah",
    tagline: "Ultra-luxury custom beachfront estate with private beach and infinity pool",
    purpose: "buy",
    propertyType: "villa",
    priceAED: 48500000,
    community: "Palm Jumeirah",
    subCommunity: "Frond N",
    building: "Custom Signature Villa",
    beds: 6,
    baths: 7,
    sizeSqft: 11450,
    description: "Nestled on an exclusive private frond of Palm Jumeirah, this architectural masterpiece represents the pinnacle of Arabian Gulf waterfront living. Featuring bespoke Italian marble finishes, double-height ceilings with floor-to-ceiling acoustic glass, private infinity pool spilling toward your own private sandy beach, and panoramic views of the Dubai Marina skyline.",
    highlights: [
      "Direct Private Beach Access with 120ft shoreline",
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-real-estate-house-with-pool-42525-large.mp4",
    developer: "Nakheel / Private Architect",
    permitNumber: "DLD-PERMIT-7182901",
    dldQrImage: "/images/compliance/dld-sample-qr.png",
    agent: {
      name: "Tariq Mansoor",
      title: "Senior Luxury Partner",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "tariq@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-10",
    locationCoordinates: { lat: 25.1124, lng: 55.139 }
  },
  {
    id: "lv-prop-02",
    slug: "downtown-dubai-sky-penthouse-burj-crown",
    title: "Panoramic Sky Penthouse with Full Burj Khalifa Views",
    tagline: "Spectacular duplex sky villa overlooking the Dubai Fountains & Opera",
    purpose: "buy",
    propertyType: "penthouse",
    priceAED: 19800000,
    community: "Downtown Dubai",
    subCommunity: "Opera District",
    building: "Il Primo Tower",
    beds: 4,
    baths: 5,
    sizeSqft: 5280,
    description: "Perched high above the Downtown Dubai cultural district, this duplex sky penthouse offers an uninhibited front-row seat to the Burj Khalifa and Dubai Fountain light shows. Designed with bronze accents, herringbone parquet flooring, floor-to-ceiling glass wrapping 270 degrees, and oversized entertainment terraces.",
    highlights: [
      "Unobstructed Burj Khalifa & Fountain views from every room",
      "Sprawling 1,200 sqft Wrap-Around Sunset Terrace",
      "Private High-Speed Elevator with Direct Penthouse Foyer",
      "Custom German Poliform Kitchen with Sub-Zero refrigeration",
      "En-suite Spa Bathrooms clad in Bookmatched Calacatta Gold"
    ],
    amenities: [
      "Burj Khalifa View",
      "Concierge Service 24/7",
      "Infinity Edge Pool",
      "Private Valet Parking",
      "Gym & Pilates Studio",
      "Residents Cigar Lounge",
      "Direct Metro Access",
      "Children's Play Area"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Emaar Properties",
    permitNumber: "DLD-PERMIT-8492019",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Head of Prime Residential",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "sophia@lavistarealestate.ae",
      brn: "38921"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-14",
    locationCoordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: "lv-prop-03",
    slug: "dubai-marina-waterfront-residence-marina-gate",
    title: "High-Floor Waterfront Residence at Marina Gate",
    tagline: "Turnkey luxury furnished 2-bedroom with panoramic yacht harbor vistas",
    purpose: "rent",
    propertyType: "apartment",
    priceAED: 275000,
    rentFrequency: "yearly",
    community: "Dubai Marina",
    subCommunity: "Marina Gate",
    building: "Jumeirah Living Marina Gate",
    beds: 2,
    baths: 3,
    sizeSqft: 1540,
    description: "Experience effortless waterfront living in one of Dubai Marina's most coveted residential towers. This fully furnished home boasts floor-to-ceiling glass, Italian designer furniture, bespoke lighting, and uninterrupted views across the yacht marina and Arabian Gulf horizon.",
    highlights: [
      "Fully Furnished by Luxury European Interior Designer",
      "Spacious Corner Balcony overlooking the Yacht Marina",
      "Integrated Smart Climate & Mood Lighting System",
      "Immediate Marina Walk Promenade Access"
    ],
    amenities: [
      "Marina View",
      "Chiller Free",
      "Infinity Pool on Level 50",
      "Dual Gym with Squash Courts",
      "24/7 Security & Concierge",
      "Covered Secure Parking",
      "Steam & Sauna Rooms"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Select Group",
    permitNumber: "DLD-PERMIT-4920194",
    agent: {
      name: "Alexander Vance",
      title: "Marina & Waterfront Specialist",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "alexander@lavistarealestate.ae",
      brn: "52014"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-18",
    locationCoordinates: { lat: 25.0805, lng: 55.1403 }
  },
  {
    id: "lv-prop-04",
    slug: "dubai-hills-estate-championship-golf-villa",
    title: "Championship Golf Course Villa in Dubai Hills Estate",
    tagline: "Contemporary 5-bedroom sanctuary backing directly onto the fairway",
    purpose: "buy",
    propertyType: "villa",
    priceAED: 14200000,
    community: "Dubai Hills Estate",
    subCommunity: "Golf Place II",
    building: "Contemporary Collection Villa",
    beds: 5,
    baths: 6,
    sizeSqft: 7350,
    description: "Positioned directly on the 18-hole championship golf course, this elegant villa merges minimalist architecture with serene green panoramas. An expansive open-plan lounge flows seamlessly into a private landscaped garden with sunken firepit, heated pool, and alfresco dining terrace.",
    highlights: [
      "Prime Direct Golf Course Frontage",
      "Custom Private Temperature-Controlled Swimming Pool",
      "Rooftop Terrace with Downtown Dubai Skyline Views",
      "High Ceilings and Premium Italian Porcelain Tiling",
      "Separate Maid and Driver En-suite Accommodations"
    ],
    amenities: [
      "Golf Course View",
      "Private Pool",
      "Private Landscaped Garden",
      "Covered 3-Car Parking",
      "Gated Community Security",
      "Clubhouse & Tennis Courts",
      "Dubai Hills Mall Proximity"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Emaar Properties",
    permitNumber: "DLD-PERMIT-9301284",
    agent: {
      name: "Tariq Mansoor",
      title: "Senior Luxury Partner",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "tariq@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-12",
    locationCoordinates: { lat: 25.1112, lng: 55.2635 }
  },
  {
    id: "lv-prop-05",
    slug: "business-bay-canal-front-designer-penthouse",
    title: "Canal Front Designer Penthouse at Dorchester Collection",
    tagline: "Unrivaled luxury with hotel-grade 5-star concierge services & private berth",
    purpose: "buy",
    propertyType: "penthouse",
    priceAED: 36000000,
    community: "Business Bay",
    subCommunity: "Marasi Bay",
    building: "The Lana Residences, Dorchester Collection",
    beds: 4,
    baths: 5,
    sizeSqft: 7900,
    description: "Managed by the world-renowned Dorchester Collection, this ultra-exclusive canal-side penthouse represents the pinnacle of hospitality-infused residential luxury. Gilles & Boissier interior design, private rooftop swimming pool, bespoke Oak joinery, and private yacht mooring access.",
    highlights: [
      "Full Management by Dorchester Collection with 24/7 in-residence dining",
      "Private Heated Rooftop Pool with Dubai Canal & Skyline views",
      "Dedicated Private Marina Berth for up to 60ft Yacht",
      "Double-height living salon with 8-meter soaring glass"
    ],
    amenities: [
      "Canal & Skyline View",
      "Private Pool",
      "Dorchester 5-Star Service",
      "Yacht Marina Berth",
      "Valet & Chauffeur Service",
      "Private Meeting Suites",
      "Luxury Spa & Hydrotherapy"
    ],
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Omniyat",
    permitNumber: "DLD-PERMIT-1092834",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Head of Prime Residential",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "sophia@lavistarealestate.ae",
      brn: "38921"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-15",
    locationCoordinates: { lat: 25.1865, lng: 55.2789 }
  },
  {
    id: "lv-prop-06",
    slug: "jvc-private-plunge-pool-duplex-garden",
    title: "Luxury Duplex with Private Pool in JVC",
    tagline: "Contemporary garden terrace residence in high-yielding boutique community",
    purpose: "rent",
    propertyType: "apartment",
    priceAED: 135000,
    rentFrequency: "yearly",
    community: "Jumeirah Village Circle (JVC)",
    subCommunity: "District 13",
    building: "Binghatti Corner",
    beds: 2,
    baths: 3,
    sizeSqft: 1680,
    description: "A rare urban oasis offering a private plunge pool on a spacious 450 sqft private garden terrace. Featuring Italian fitted kitchen, floor-to-ceiling soundproof windows, high rental yield potential, and peaceful residential ambiance.",
    highlights: [
      "Private Heated Plunge Pool on wrap-around terrace",
      "Smart Home lighting and digital AC thermostat",
      "Close to Circle Mall and direct Al Khail Road access",
      "Modern Scandinavian-inspired interior styling"
    ],
    amenities: [
      "Private Plunge Pool",
      "Balcony & Garden Terrace",
      "Equipped Gymnasium",
      "Rooftop Swimming Pool",
      "Covered Parking",
      "24/7 Security"
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Binghatti Developers",
    permitNumber: "DLD-PERMIT-3019827",
    agent: {
      name: "Alexander Vance",
      title: "Marina & Waterfront Specialist",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "alexander@lavistarealestate.ae",
      brn: "52014"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-16",
    locationCoordinates: { lat: 25.0682, lng: 55.2081 }
  },

  // OFF-PLAN HIGHLIGHTS (Section 3 & Section 4)
  {
    id: "lv-offplan-01",
    slug: "the-oasis-by-emaar-luxury-mansions",
    title: "The Oasis by Emaar — Ultra Luxury Water Mansions",
    tagline: "A multi-billion dollar blue lagoon paradise of palatial resort villas",
    purpose: "off-plan",
    propertyType: "villa",
    priceAED: 8400000,
    community: "Dubailand",
    subCommunity: "The Oasis",
    building: "Mirage & Palmiera Mansions",
    beds: 4,
    baths: 5,
    sizeSqft: 6850,
    description: "The Oasis by Emaar is Dubai's newest landmark sanctuary. Spanning over 100 million square feet, with crystal water lagoons, 1.5 million square feet of parklands, luxury boutiques, and Michelin-star dining. Designed for generational wealth and resort-style family living.",
    highlights: [
      "Crystal Clear Swimmable Blue Lagoons",
      "Designed by internationally acclaimed architects",
      "Flexible 80/20 Payment Plan with 2-year post-handover",
      "High Capital Appreciation & 8%+ Projected Rental Yield"
    ],
    amenities: [
      "Swimmable Lagoons",
      "Private Beach Clubs",
      "18-Hole Championship Golf nearby",
      "Wellness & Fitness Pavilions",
      "Gourmet Waterfront Dining",
      "Private Marina & Yacht Club"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Emaar Properties",
    handoverDate: "Q4 2028",
    paymentPlan: "80/20 (10% Booking, 70% During Construction, 20% on Handover)",
    paymentPlanBreakdown: [
      { stage: "Down Payment", percentage: 10, milestoneDescription: "On Booking" },
      { stage: "Construction Milestone 1", percentage: 20, milestoneDescription: "Within 6 Months" },
      { stage: "Construction Milestone 2", percentage: 20, milestoneDescription: "Upon 50% Completion" },
      { stage: "Construction Milestone 3", percentage: 30, milestoneDescription: "Upon 80% Completion" },
      { stage: "Handover", percentage: 20, milestoneDescription: "100% Completion (Q4 2028)" }
    ],
    permitNumber: "DLD-OFFPLAN-910283",
    agent: {
      name: "Tariq Mansoor",
      title: "Senior Luxury Partner",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "tariq@lavistarealestate.ae",
      brn: "41982"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-01",
    locationCoordinates: { lat: 25.045, lng: 55.31 }
  },
  {
    id: "lv-offplan-02",
    slug: "sobha-seahaven-dubai-harbour-waterfront",
    title: "Sobha SeaHaven — Dubai Harbour Tower",
    tagline: "Iconic waterfront super-tower with 360-degree sea & Palm Jumeirah panoramas",
    purpose: "off-plan",
    propertyType: "apartment",
    priceAED: 3350000,
    community: "Dubai Harbour",
    subCommunity: "Marina Waterfront",
    building: "Tower B — SeaHaven",
    beds: 2,
    baths: 2,
    sizeSqft: 1350,
    description: "Rising dramatically over the Dubai Harbour cruise terminal and superyacht marina, Sobha SeaHaven redefines maritime glamour. Each residence features smart home automation, high-end Miele appliances, custom veneer finishes, and infinity pools perched on the 65th floor.",
    highlights: [
      "Front-line views of Palm Jumeirah, Ain Dubai, and Burj Al Arab",
      "Infinity Sky Pool & Health Club on Level 65",
      "Direct pedestrian connection to private cruise terminal & marina",
      "Attractive 60/40 payment plan with low barrier entry"
    ],
    amenities: [
      "Infinity Sea Pool",
      "Private Residents Cinema",
      "Cruise Terminal Access",
      "Yoga & Aerobics Deck",
      "Executive Boardrooms",
      "Smart Automated Valet"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Sobha Realty",
    handoverDate: "Q4 2026",
    paymentPlan: "60/40 (20% Booking, 40% Construction, 40% on Handover)",
    paymentPlanBreakdown: [
      { stage: "Booking", percentage: 20, milestoneDescription: "Immediate Confirmation" },
      { stage: "Foundation Completed", percentage: 10, milestoneDescription: "Q2 2025" },
      { stage: "Superstructure 50%", percentage: 15, milestoneDescription: "Q4 2025" },
      { stage: "Façade Completion", percentage: 15, milestoneDescription: "Q2 2026" },
      { stage: "Key Handover", percentage: 40, milestoneDescription: "Q4 2026 Completion" }
    ],
    permitNumber: "DLD-OFFPLAN-441092",
    agent: {
      name: "Sophia Al-Hashemi",
      title: "Head of Prime Residential",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "sophia@lavistarealestate.ae",
      brn: "38921"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-05",
    locationCoordinates: { lat: 25.0935, lng: 55.142 }
  },
  {
    id: "lv-offplan-03",
    slug: "palm-beach-towers-by-nakheel",
    title: "Palm Beach Towers by Nakheel — Waterfront Suites",
    tagline: "Direct tram access, private beach club, and iconic Palm monorail terminal",
    purpose: "off-plan",
    propertyType: "apartment",
    priceAED: 4600000,
    community: "Palm Jumeirah",
    subCommunity: "Gateway Gateway",
    building: "Palm Beach Tower 2",
    beds: 3,
    baths: 4,
    sizeSqft: 2150,
    description: "Located at the entrance to Palm Jumeirah, Palm Beach Towers offers an interconnected resort lifestyle with private beach club access, boat docking, and a sky lounge boasting 360-degree vistas across Dubai's most celebrated coastline.",
    highlights: [
      "Direct Bridge & Tram link to mainland and Palm Jumeirah",
      "Private Beachfront Park & Podiums",
      "Outdoor Yoga & Sunset Lounges",
      "70/30 Payment Plan with Nakheel Guarantee"
    ],
    amenities: [
      "Beach Club Access",
      "Rooftop Infinity Deck",
      "Kids Water Playground",
      "Multi-purpose Sports Courts",
      "Gourmet Cafes on Podium"
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80"
    ],
    developer: "Nakheel",
    handoverDate: "Q1 2027",
    paymentPlan: "70/30 (15% Booking, 55% Construction, 30% on Handover)",
    paymentPlanBreakdown: [
      { stage: "Booking Deposit", percentage: 15, milestoneDescription: "On Signing" },
      { stage: "Quarterly Installments", percentage: 55, milestoneDescription: "Linked to Construction" },
      { stage: "Completion & Keys", percentage: 30, milestoneDescription: "Q1 2027 Handover" }
    ],
    permitNumber: "DLD-OFFPLAN-882019",
    agent: {
      name: "Alexander Vance",
      title: "Marina & Waterfront Specialist",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      phone: "+971 4 429 8888",
      whatsapp: "971501234567",
      email: "alexander@lavistarealestate.ae",
      brn: "52014"
    },
    status: "available",
    featured: true,
    createdAt: "2026-02-08",
    locationCoordinates: { lat: 25.101, lng: 55.148 }
  }
];

export const DUBAI_COMMUNITIES = [
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    description: "The world's most renowned man-made island, celebrated for private beachfront villas and 5-star resort living.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
    listingCount: 142,
    startingPrice: "AED 3.8M",
    tag: "Waterfront Luxury"
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    description: "The vibrant heart of the city, home to Burj Khalifa, Dubai Mall, and premier luxury high-rise residences.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    listingCount: 210,
    startingPrice: "AED 1.9M",
    tag: "City Center"
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    description: "A glamorous waterfront district known for yachting, al fresco promenade dining, and stunning coastal skyscrapers.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    listingCount: 185,
    startingPrice: "AED 1.6M",
    tag: "Yachting & Coastal"
  },
  {
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate",
    description: "Dubai's green heart featuring an 18-hole golf course, private villa enclaves, and premier family amenities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    listingCount: 96,
    startingPrice: "AED 2.4M",
    tag: "Golf & Family Living"
  },
  {
    name: "Business Bay",
    slug: "business-bay",
    description: "Dynamic canal-front destination blending contemporary commercial headquarters and stylish waterfront penthouses.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1000&q=80",
    listingCount: 164,
    startingPrice: "AED 1.4M",
    tag: "Canal Front"
  },
  {
    name: "Bluewaters & JBR",
    slug: "bluewaters-and-jbr",
    description: "A prestigious island destination anchored by Ain Dubai with chic waterfront cafes and direct beach access.",
    image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=80",
    listingCount: 78,
    startingPrice: "AED 4.2M",
    tag: "Island Living"
  }
];

export const DEVELOPER_PARTNERS = [
  { name: "Emaar Properties", tier: "Master Developer", projects: 45 },
  { name: "Nakheel", tier: "Waterfront Specialist", projects: 32 },
  { name: "DAMAC Properties", tier: "Luxury Living", projects: 28 },
  { name: "Sobha Realty", tier: "Precision Quality", projects: 22 },
  { name: "Meraas", tier: "Urban Masterpieces", projects: 19 },
  { name: "Omniyat", tier: "Ultra-Luxury Architectural", projects: 14 },
  { name: "Ellington Properties", tier: "Design-Led Boutique", projects: 18 },
  { name: "Aldar", tier: "Premier Regional Developer", projects: 12 },
  { name: "Danube Properties", tier: "High-Yield Investments", projects: 16 }
];

export const LATEST_INSIGHTS = [
  {
    id: "ins-1",
    slug: "dubai-real-estate-market-outlook-2026",
    title: "Dubai Prime Real Estate Report 2026: Capital Growth & Off-Plan Trends",
    summary: "Comprehensive analysis of high-net-worth migration, record capital appreciation in Palm Jumeirah, and prime off-plan yields.",
    date: "February 14, 2026",
    readTime: "5 min read",
    category: "Market Report",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ins-2",
    slug: "uae-golden-visa-property-investment-guide",
    title: "UAE 10-Year Golden Visa via Property Investment: Rules & Requirements",
    summary: "Everything international investors need to know about qualifying for long-term UAE residency through freehold property acquisition.",
    date: "February 08, 2026",
    readTime: "4 min read",
    category: "Investor Guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ins-3",
    slug: "off-plan-vs-secondary-market-in-dubai",
    title: "Off-Plan vs Ready Properties in Dubai: Maximizing ROI in 2026",
    summary: "A practical guide comparing capital gains in off-plan developments against immediate rental cash flows in established communities.",
    date: "January 28, 2026",
    readTime: "6 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];
