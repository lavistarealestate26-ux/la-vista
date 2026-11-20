"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Building2,
  KeyRound,
  Home,
  Warehouse,
} from "lucide-react";
import { MOCK_LISTINGS } from "@/data/mockListings";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertyCategory, PropertyPurpose } from "@/types/listing";

export default function ListingsContent() {
  const searchParams = useSearchParams();

  // URL parameters or defaults
  const initialCategory = (searchParams.get("category") as PropertyCategory) || "";
  const initialPurpose = (searchParams.get("purpose") as PropertyPurpose) || "";
  const initialCommunity = searchParams.get("community") || "";
  const initialRegion = searchParams.get("region") || "";
  const initialType = searchParams.get("type") || "";
  const initialBeds = searchParams.get("beds") || "";
  const initialMinPrice = searchParams.get("minPrice") || "";
  const initialMaxPrice = searchParams.get("maxPrice") || "";

  // State
  const [category, setCategory] = useState<string>(initialCategory);
  const [purpose, setPurpose] = useState<string>(initialPurpose);
  const [region, setRegion] = useState<string>(initialRegion);
  const [community, setCommunity] = useState<string>(initialCommunity);
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [beds, setBeds] = useState<string>(initialBeds);
  const [minPrice, setMinPrice] = useState<string>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<string>(initialMaxPrice);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Synchronize component state whenever URL query parameters change (e.g. from bottom nav tabs)
  useEffect(() => {
    setCategory((searchParams.get("category") as PropertyCategory) || "");
    setPurpose((searchParams.get("purpose") as PropertyPurpose) || "");
    setCommunity(searchParams.get("community") || "");
    setRegion(searchParams.get("region") || "");
    setPropertyType(searchParams.get("type") || "");
    setBeds(searchParams.get("beds") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  // Filter listings dynamically
  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter((item) => {
      // Category filter (commercial | residential | leasing | warehouse)
      if (category) {
        if (category === "leasing") {
          // If category is leasing, match category === "leasing" or purpose === "rent" / "leasing"
          if (item.category !== "leasing" && item.purpose !== "rent" && item.purpose !== "leasing") {
            return false;
          }
        } else if (category === "warehouse") {
          if (item.category !== "warehouse" && item.propertyType !== "warehouse") {
            return false;
          }
        } else if (item.category !== category) {
          return false;
        }
      }

      // Purpose filter
      if (purpose && item.purpose !== purpose) {
        return false;
      }

      // Region filter (Umm Al Quwain | Wider UAE)
      if (region && item.region !== region) {
        return false;
      }

      // Community / Area filter
      if (community) {
        const itemComm = (item.community || "").toLowerCase();
        const targetComm = community.toLowerCase();
        if (!itemComm.includes(targetComm) && !targetComm.includes(itemComm)) {
          return false;
        }
      }

      // Property type filter
      if (propertyType) {
        if (propertyType === "warehouse" || propertyType === "industrial") {
          if (item.propertyType !== "warehouse" && item.propertyType !== "industrial") {
            return false;
          }
        } else if (item.propertyType !== propertyType) {
          return false;
        }
      }

      // Beds filter
      if (beds) {
        if (beds === "5") {
          if (item.beds < 5) return false;
        } else if (beds === "0") {
          if (item.beds !== 0) return false;
        } else {
          if (item.beds !== Number(beds)) return false;
        }
      }

      // Min Price
      if (minPrice && item.priceAED < Number(minPrice)) return false;

      // Max Price
      if (maxPrice && item.priceAED > Number(maxPrice)) return false;

      // Search query (keyword in title, community, description, developer)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(query) ||
          item.community.toLowerCase().includes(query) ||
          (item.region && item.region.toLowerCase().includes(query)) ||
          item.description.toLowerCase().includes(query) ||
          (item.developer && item.developer.toLowerCase().includes(query));
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceAED - b.priceAED;
      if (sortBy === "price-desc") return b.priceAED - a.priceAED;
      if (sortBy === "size-desc") return b.sizeSqft - a.sizeSqft;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [category, purpose, region, community, propertyType, beds, minPrice, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setCategory("");
    setPurpose("");
    setRegion("");
    setCommunity("");
    setPropertyType("");
    setBeds("");
    setMinPrice("");
    setMaxPrice("");
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasActiveFilters =
    !!category ||
    !!purpose ||
    !!region ||
    !!community ||
    !!propertyType ||
    !!beds ||
    !!minPrice ||
    !!maxPrice ||
    !!searchQuery;

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/30 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#111111] text-white py-12 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-1">
                <span>Umm Al Quwain & Wider UAE Portfolio</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                {category === "commercial"
                  ? "Commercial Properties & Assets"
                  : category === "residential"
                  ? "Residential Luxury Homes & Villas"
                  : category === "warehouse"
                  ? "Industrial Warehouses & Logistics Hubs"
                  : category === "leasing"
                  ? "Leasing Properties & Rental Portfolios"
                  : purpose === "buy"
                  ? "Properties for Sale"
                  : purpose === "rent"
                  ? "Residences & Assets for Lease"
                  : "All Properties & Exclusive Portfolios"}
              </h1>
              <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl font-light">
                Discover prime real estate opportunities across Umm Al Quwain and the wider UAE, with verified titles and direct developer representation.
              </p>
            </div>

            {/* Client Requested Primary Category Tabs: All, Residential, Commercial, Warehouses, Leasing */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-white/10 rounded-xl sm:rounded-2xl border border-white/15 w-full sm:w-auto">
              {[
                { id: "", label: "All Properties", icon: null },
                { id: "residential", label: "Residential", icon: Home },
                { id: "commercial", label: "Commercial", icon: Building2 },
                { id: "warehouse", label: "Warehouses", icon: Warehouse },
                { id: "leasing", label: "Leasing", icon: KeyRound },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = category === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setCategory(tab.id);
                      if (tab.id === "leasing") {
                        setPurpose("");
                      }
                    }}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wide rounded-lg sm:rounded-xl transition-all ${
                      isActive
                        ? "bg-[#C99A3B] text-white shadow-md font-bold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E7DFCF] p-3.5 sm:p-5 mb-8">
          {/* Mobile Filter Toggle Header (Compact, balanced and non-overlapping) */}
          <div className="flex sm:hidden items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E7DFCF]">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] hover:bg-[#222222] text-[#C99A3B] text-xs font-medium rounded-lg border border-[#C99A3B]/40 active:scale-95 transition-all shadow-sm shrink-0"
              aria-expanded={mobileFilterOpen}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
              <span>{mobileFilterOpen ? "Hide Filters" : "Filter & Search"}</span>
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B] shrink-0" />
              )}
            </button>

            <span className="text-xs text-[#5E6778] font-medium shrink-0">
              <strong className="text-[#111111] font-semibold">{filteredListings.length}</strong> {filteredListings.length === 1 ? "Available" : "Available"}
            </span>
          </div>

          <div
            className={`${
              mobileFilterOpen ? "grid" : "hidden sm:grid"
            } grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4`}
          >
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Keyword Search
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#C99A3B] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Al Sinniyah, Villa, Marina, Office..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                />
              </div>
            </div>

            {/* Location / Area Dropdown (Umm Al Quwain & Wider UAE) */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Area / Location
              </label>
              <select
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">All Locations</option>
                <optgroup label="Umm Al Quwain">
                  <option value="Al Sinniyah Island">Al Sinniyah Island</option>
                  <option value="Al Salamah">Al Salamah</option>
                  <option value="Al Haditha">Al Haditha (King Faisal Road)</option>
                  <option value="UAQ Marina">UAQ Marina</option>
                  <option value="Mangrove Beachfront">Mangrove Beachfront</option>
                  <option value="Al Ramlah">Al Ramlah & Al Raudah</option>
                  <option value="Al Khor">Al Khor District</option>
                  <option value="Industrial">UAQ Industrial Area</option>
                  <option value="Falaj Al Mualla">Falaj Al Mualla</option>
                </optgroup>
                <optgroup label="Wider UAE">
                  <option value="Wider UAE">Wider UAE Enclaves</option>
                </optgroup>
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Geographic Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">All Regions</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
                <option value="Wider UAE">Wider UAE</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">All Types</option>
                <option value="villa">Villas & Mansions</option>
                <option value="apartment">Apartments</option>
                <option value="penthouse">Penthouses</option>
                <option value="townhouse">Townhouses</option>
                <option value="commercial">Commercial / Office</option>
                <option value="warehouse">Warehouses & Logistics</option>
                <option value="industrial">Industrial Facilities</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Bedrooms
              </label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">Any Beds</option>
                <option value="0">Studio / Commercial</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips and Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E7DFCF]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#5E6778]">
                Showing <strong className="text-[#111111]">{filteredListings.length}</strong> properties
              </span>

              {category && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F3EA] text-[#111111] text-[11px] font-semibold rounded-lg border border-[#E7DFCF]">
                  Category: {category === "warehouse" ? "Warehouses" : category.charAt(0).toUpperCase() + category.slice(1)}
                  <button onClick={() => setCategory("")} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {community && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F3EA] text-[#111111] text-[11px] font-semibold rounded-lg border border-[#E7DFCF]">
                  Location: {community}
                  <button onClick={() => setCommunity("")} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {region && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F3EA] text-[#111111] text-[11px] font-semibold rounded-lg border border-[#E7DFCF]">
                  Region: {region}
                  <button onClick={() => setRegion("")} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {propertyType && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F3EA] text-[#111111] text-[11px] font-semibold rounded-lg border border-[#E7DFCF]">
                  Type: {propertyType}
                  <button onClick={() => setPropertyType("")} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-xs text-[#C99A3B] hover:text-[#8A6420] font-semibold ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#5E6778] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2.5 py-1.5 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Largest Area</option>
              </select>
            </div>
          </div>
        </div>

        {/* Listings Grid or Empty State */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing, index) => (
              <PropertyCard key={listing.id} listing={listing} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E7DFCF] shadow-sm max-w-lg mx-auto">
            <Building2 className="w-12 h-12 text-[#C99A3B] mx-auto mb-4 opacity-70" />
            <h3 className="text-xl font-serif font-bold text-[#111111] mb-2">
              No Properties Matching Your Criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6778] mb-6">
              We could not find active listings with your specific combination in Umm Al Quwain or the wider UAE. Try adjusting your category or clearing filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
            >
              View All Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
