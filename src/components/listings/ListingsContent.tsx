"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Filter,
  Grid,
  List as ListIcon,
  MapPin,
  SlidersHorizontal,
  ChevronDown,
  X,
  RotateCcw,
  Building,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpDown,
  Map,
} from "lucide-react";
import { MOCK_LISTINGS } from "@/data/mockListings";
import PropertyCard from "@/components/properties/PropertyCard";
import { Listing, PropertyPurpose, PropertyType } from "@/types/listing";

export default function ListingsContent() {
  const searchParams = useSearchParams();

  // URL parameters or defaults
  const initialPurpose = (searchParams.get("purpose") as PropertyPurpose) || "";
  const initialCommunity = searchParams.get("community") || "";
  const initialType = searchParams.get("type") || "";
  const initialBeds = searchParams.get("beds") || "";
  const initialMinPrice = searchParams.get("minPrice") || "";
  const initialMaxPrice = searchParams.get("maxPrice") || "";

  // State
  const [purpose, setPurpose] = useState<string>(initialPurpose);
  const [community, setCommunity] = useState<string>(initialCommunity);
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [beds, setBeds] = useState<string>(initialBeds);
  const [minPrice, setMinPrice] = useState<string>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<string>(initialMaxPrice);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMap, setShowMap] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Filter listings
  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter((item) => {
      // Purpose filter
      if (purpose && item.purpose !== purpose) return false;

      // Community filter
      if (
        community &&
        !item.community.toLowerCase().includes(community.toLowerCase())
      ) {
        return false;
      }

      // Property type filter
      if (propertyType && item.propertyType !== propertyType) return false;

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

      // Search query (keyword in title, community, description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(query) ||
          item.community.toLowerCase().includes(query) ||
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
  }, [purpose, community, propertyType, beds, minPrice, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setPurpose("");
    setCommunity("");
    setPropertyType("");
    setBeds("");
    setMinPrice("");
    setMaxPrice("");
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasActiveFilters =
    !!purpose ||
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-1">
                <span>Dubai Prime Portfolio</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                {purpose === "buy"
                  ? "Properties for Sale in Dubai"
                  : purpose === "rent"
                  ? "Luxury Residences for Rent in Dubai"
                  : purpose === "off-plan"
                  ? "Dubai Off-Plan Developments & New Launches"
                  : "All Dubai Properties & Estates"}
              </h1>
              <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl font-light">
                Verified Dubai Land Department permits, direct developer allocations, and discreet private listings.
              </p>
            </div>

            {/* Quick Purpose Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-xl border border-white/15">
              {[
                { id: "", label: "All" },
                { id: "buy", label: "Buy" },
                { id: "rent", label: "Rent" },
                { id: "off-plan", label: "Off-Plan" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPurpose(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all ${
                    purpose === tab.id
                      ? "bg-[#C99A3B] text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E7DFCF] p-4 sm:p-5 mb-8">
          {/* Mobile Filter Toggle Button */}
          <div className="flex sm:hidden items-center justify-between pb-3 mb-3 border-b border-[#E7DFCF]">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#111111] text-[#C99A3B] text-xs font-semibold uppercase tracking-wider rounded-xl"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{mobileFilterOpen ? "Hide Filter Options" : "Filter & Search Options"}</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-[#C99A3B]" />
              )}
            </button>

            <span className="text-xs font-semibold text-[#111111]">
              {filteredListings.length} Available
            </span>
          </div>

          <div className={`${mobileFilterOpen ? "grid" : "hidden sm:grid"} grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4`}>
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Keyword or Community
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#C99A3B] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Palm Jumeirah, Marina, Penthouse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
                />
              </div>
            </div>

            {/* Community Dropdown */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Area / Community
              </label>
              <select
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">All Communities</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                <option value="Business Bay">Business Bay</option>
                <option value="Jumeirah Village Circle">JVC</option>
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
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
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
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#5E6778] tracking-wider mb-1">
                Max Price (AED)
              </label>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F3EA]/60 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
              >
                <option value="">No Max Price</option>
                <option value="300000">AED 300,000</option>
                <option value="1000000">AED 1,000,000</option>
                <option value="5000000">AED 5,000,000</option>
                <option value="15000000">AED 15,000,000</option>
                <option value="30000000">AED 30,000,000</option>
                <option value="50000000">AED 50,000,000</option>
              </select>
            </div>
          </div>

          {/* Filter Bar Controls & Active Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E7DFCF]">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#111111]">
                Showing {filteredListings.length} {filteredListings.length === 1 ? "Property" : "Properties"}
              </span>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C99A3B] hover:text-[#8A6420] ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All Filters</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Map Toggle Placeholder */}
              <button
                onClick={() => setShowMap(!showMap)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  showMap
                    ? "bg-[#111111] text-[#C99A3B] border-[#111111]"
                    : "border-[#E7DFCF] text-[#5E6778] hover:text-[#111111]"
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>{showMap ? "Hide Map" : "Show Map View"}</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 text-xs text-[#5E6778]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#C99A3B]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 bg-transparent border border-[#E7DFCF] rounded-lg text-xs focus:outline-none focus:border-[#C99A3B]"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="size-desc">Largest Size (Sq Ft)</option>
                </select>
              </div>

              {/* View Mode Toggle (Grid vs List) */}
              <div className="flex items-center border border-[#E7DFCF] rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid View"
                  className={`p-1.5 rounded ${
                    viewMode === "grid" ? "bg-[#111111] text-white" : "text-[#5E6778]"
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List View"
                  className={`p-1.5 rounded ${
                    viewMode === "list" ? "bg-[#111111] text-white" : "text-[#5E6778]"
                  }`}
                >
                  <ListIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder View (when toggled) */}
        {showMap && (
          <div className="mb-8 bg-white rounded-2xl border border-[#E7DFCF] overflow-hidden shadow-sm">
            <div className="relative h-80 w-full bg-slate-900 flex items-center justify-center text-center p-6">
              <div className="relative z-10">
                <MapPin className="w-10 h-10 text-[#C99A3B] mx-auto mb-2 animate-bounce" />
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  Interactive Dubai Map View
                </h3>
                <p className="text-xs text-white/70 max-w-md mx-auto mb-4 font-light">
                  Showing geographic clusters across Palm Jumeirah, Downtown Dubai, Dubai Marina, and Dubai Hills Estate.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  {["Palm Jumeirah (2)", "Downtown (2)", "Marina (2)", "Dubai Hills (1)", "Business Bay (1)"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
                alt="Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
              />
            </div>
          </div>
        )}

        {/* Listings Display: Grid or List */}
        {filteredListings.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E7DFCF] p-8">
            <Search className="w-12 h-12 text-[#C99A3B] mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-[#111111] mb-2">
              No matching properties found
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6778] max-w-md mx-auto mb-6">
              We couldn't find listings matching your exact criteria. Try resetting filters or reach out to our private advisory team for off-market properties.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#C99A3B] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#8A6420] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredListings.length > 0 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#111111] text-[#C99A3B] border border-[#111111]">
              1
            </button>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white text-[#5E6778] border border-[#E7DFCF] hover:border-[#C99A3B]">
              2
            </button>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white text-[#5E6778] border border-[#E7DFCF] hover:border-[#C99A3B]">
              3
            </button>
            <span className="text-xs text-[#5E6778] px-2">...</span>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white text-[#5E6778] border border-[#E7DFCF] hover:border-[#C99A3B]">
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
