# La Vista Real Estate — Dubai Luxury Website

A luxury, high-performance web application built for **La Vista Real Estate**, an elite boutique real estate brokerage in Dubai, UAE.

---

## 🌟 Executive Overview & Implemented Features

This project directly fulfills all design, functional, and architectural requirements detailed in the Developer Brief:

### 1. Header & Navigation (Reference A1 — Driven Properties Style)
- **Transparent-to-Solid Sticky Bar**: Starts translucent over the hero video with white text and reversed logo, then smoothly transitions to solid white with `#111111` Onyx text and a subtle shadow upon scrolling.
- **Mega-Menus & Dropdown Navigation**:
  - `Buy ▾`: Luxury Villas, Penthouses, Apartments, Townhouses, Waterfront Mansions.
  - `Rent ▾`: Luxury Furnished, Marina Living, Downtown, Golf Course Villas.
  - `Off-Plan ▾`: New Launches 2026, Emaar, Sobha & Nakheel, Post-Handover Payment Plans.
  - `Commercial`, `Developers`, `Invest ▾`, `Services ▾`, `Insights ▾`, `About Us ▾`, `Careers`.
- **Primary CTA**: Solid gold **"Free Valuation"** button triggering an interactive modal.
- **Currency Switcher**: Real-time conversion across `AED`, `USD`, `EUR`, and `GBP`.
- **Mobile Drawer**: Responsive accordion menu with thumb-friendly tap targets and sticky CTA.

### 2. Full-Screen Hero Video (Reference A2 — Driven Properties Style)
- Full-viewport luxury Dubai architectural background video with dark gradient overlay ensuring WCAG AA contrast.
- Autoplay, muted, loop, playsinline, with fallback poster image.
- Top-right controls: **Expand Fullscreen** and **Mute / Unmute**.
- Fully respects `prefers-reduced-motion`.

### 3. Hero Search & Trust Stats (Reference B1 — Provident Estate Style)
- Headline: *"Find Your Home in Dubai."*
- Interactive tabs: `Buy` | `Rent` | `Off-Plan` with dynamic price ranges.
- Type-ahead location search with suggestions for prime Dubai areas (Palm Jumeirah, Downtown, Dubai Marina, etc.).
- Dropdowns for Bedrooms and Price Ranges (changes dynamically for sales vs rental prices).
- **Single Line of Trust Stats**: `1,250+ Verified Listings · 85+ Elite Private Advisors · Serving 45+ Countries · AED 4.2B+ Transacted`.
- Submitting navigates directly to `/listings` with query parameters.

### 4. Developer Partners Marquee Loop (Reference B2 — Provident Estate Style)
- Seamless infinite marquee CSS animation running directly beneath the hero.
- Displays Dubai's leading master developers: Emaar, Nakheel, DAMAC, Sobha, Meraas, Omniyat, Ellington, Aldar, Danube.
- Grayscale by default, transitions to full color on hover, and pauses on hover.

### 5. Floating Contact Stack (Reference A3)
- Fixed vertical stack on right edge across all pages:
  1. **WhatsApp**: Opens direct chat with pre-filled luxury property inquiry.
  2. **Call**: One-touch dialing to Dubai HQ (`+971 4 429 8888`).
  3. **Enquiry**: Opens a sleek slide-in inquiry modal.

### 6. Listings & Filter System (`/listings`)
- Dynamic multi-filter bar (Purpose, Community, Property Type, Bedrooms, Max Price, Keyword search).
- Sorting options (Featured, Price Low to High, Price High to Low, Size).
- Grid view vs List view toggle.
- Interactive Map View placeholder toggle.

### 7. Property Detail Page (`/properties/[slug]`)
- High-res photo gallery with fullscreen lightbox.
- Real-time multi-currency price converter (AED, USD, EUR, GBP).
- Key specs: Beds, Baths, Built-up area in Sq Ft, Property Type.
- Architectural highlights & luxury amenities.
- Milestone-by-milestone developer payment plan (for off-plan).
- **Dubai Regulatory Compliance Block**: DLD Trakheesi Permit Number, Agent BRN, Brokerage ORN (31980), and DLD verification QR code.
- Dedicated broker contact card and private viewing booking form.
- Recommended similar properties.

### 8. Client Management Portal Demo (`/admin`)
- Demonstration dashboard where the client's internal team can add, update, and manage property listings manually without needing a developer.

---

## 🎨 Brand Design Tokens & Palette

| Token | Hex Code | Usage |
|---|---|---|
| **La Vista Gold** | `#C99A3B` | Primary accents, buttons, highlights, badges, icons |
| **Deep Gold** | `#8A6420` | Hover states, small text on white backgrounds |
| **Onyx Black** | `#111111` | Primary headings, dark section backgrounds, footer |
| **Ivory** | `#F7F3EA` | Soft alternating background panels, input backgrounds |
| **White** | `#FFFFFF` | Main background, cards |
| **Slate Grey** | `#5E6778` | Body text secondary, labels |
| **Sand Line** | `#E7DFCF` | Borders, subtle dividers |

- **Headings Font**: Cormorant Garamond (Classic luxury serif matching the logo)
- **Body & UI Font**: Montserrat (Clean, high-legibility geometric sans-serif)

---

## 📁 How to Update Content & Add Listings

### 1. Adding or Editing Properties
All properties are driven by the typed data model in:
```
src/data/mockListings.ts
```
To add a new property, append an object matching the `Listing` interface:
```typescript
{
  id: "lv-prop-07",
  slug: "downtown-dubai-luxury-residence",
  title: "Boutique Residence in Downtown Dubai",
  purpose: "buy", // "buy" | "rent" | "off-plan"
  propertyType: "apartment", // "apartment" | "villa" | "penthouse" | "townhouse"
  priceAED: 4500000,
  community: "Downtown Dubai",
  subCommunity: "Opera District",
  beds: 3,
  baths: 4,
  sizeSqft: 2100,
  description: "...",
  amenities: ["Concierge", "Infinity Pool", "Gym"],
  images: ["https://..."],
  developer: "Emaar Properties",
  permitNumber: "DLD-PERMIT-XXXXX",
  agent: {
    name: "Tariq Mansoor",
    photo: "https://...",
    phone: "+971 4 429 8888",
    whatsapp: "971501234567",
    email: "tariq@lavistarealestate.ae",
    brn: "41982"
  },
  status: "available",
  featured: true,
  createdAt: "2026-02-18"
}
```

### 2. Changing Brand Colors & Typography
- Colors are declared in `src/app/globals.css` under the `@theme` block.
- Fonts are configured in `src/app/layout.tsx`.

### 3. Updating Office & Contact Information
- Office address, phone numbers, and WhatsApp numbers can be updated in `src/components/layout/Footer.tsx`, `src/components/common/FloatingActions.tsx`, and `src/app/contact/page.tsx`.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
The application will run at [http://localhost:3000](http://localhost:3000).
