"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  X,
  Save,
} from "lucide-react";
import { MOCK_LISTINGS } from "@/data/mockListings";
import { Listing, PropertyPurpose, PropertyType, PropertyStatus } from "@/types/listing";

export default function AdminPage() {
  const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    purpose: "buy" as PropertyPurpose,
    propertyType: "apartment" as PropertyType,
    priceAED: 2500000,
    community: "UAQ Marina",
    beds: 2,
    baths: 2,
    sizeSqft: 1400,
    developer: "Emaar Properties",
    permitNumber: "DLD-PERMIT-2026-X",
    status: "available" as PropertyStatus,
    featured: true,
  });

  const filtered = listings.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.community.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this listing?")) {
      setListings(listings.filter((l) => l.id !== id));
    }
  };

  const handleEdit = (item: Listing) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      purpose: item.purpose,
      propertyType: item.propertyType,
      priceAED: item.priceAED,
      community: item.community,
      beds: item.beds,
      baths: item.baths,
      sizeSqft: item.sizeSqft,
      developer: item.developer || "",
      permitNumber: item.permitNumber,
      status: item.status,
      featured: item.featured,
    });
    setModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      title: "",
      purpose: "buy",
      propertyType: "apartment",
      priceAED: 2500000,
      community: "UAQ Marina",
      beds: 2,
      baths: 2,
      sizeSqft: 1400,
      developer: "Emaar Properties",
      permitNumber: "DLD-PERMIT-2026-X",
      status: "available",
      featured: true,
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setListings(
        listings.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: formData.title,
                purpose: formData.purpose,
                propertyType: formData.propertyType,
                priceAED: Number(formData.priceAED),
                community: formData.community,
                beds: Number(formData.beds),
                baths: Number(formData.baths),
                sizeSqft: Number(formData.sizeSqft),
                developer: formData.developer,
                permitNumber: formData.permitNumber,
                status: formData.status,
                featured: formData.featured,
              }
            : item
        )
      );
    } else {
      const newListing: Listing = {
        id: `lv-prop-${Date.now()}`,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: formData.title,
        purpose: formData.purpose,
        category: (formData.propertyType === "commercial" || formData.propertyType === "office" || formData.propertyType === "retail" || formData.propertyType === "warehouse" || formData.propertyType === "industrial" ? "commercial" : "residential"),
        region: "Umm Al Quwain",
        propertyType: formData.propertyType,
        priceAED: Number(formData.priceAED),
        community: formData.community,
        subCommunity: "Prime Zone",
        beds: Number(formData.beds),
        baths: Number(formData.baths),
        sizeSqft: Number(formData.sizeSqft),
        description: "Newly added luxury property via La Vista broker portal.",
        amenities: ["Swimming Pool", "Gym", "Concierge", "Covered Parking"],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        ],
        developer: formData.developer,
        permitNumber: formData.permitNumber,
        agent: {
          name: "Tariq Mansoor",
          title: "Senior Luxury Partner",
          photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
          phone: "+971 6 767 5181",
          whatsapp: "97167675181",
          email: "info@lavistarealestate.ae",
          brn: "41982",
        },
        status: formData.status,
        featured: formData.featured,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString(),
      };
      setListings([newListing, ...listings]);
    }
    setModalOpen(false);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F3EA]/40 min-h-screen">
      {/* Admin Header */}
      <div className="bg-[#111111] text-white py-10 border-b border-[#C99A3B]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#C99A3B] text-xs font-semibold tracking-widest uppercase mb-1">
              <span>Admin Demonstration Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold tracking-tight">
              La Vista Property Management
            </h1>
            <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
              Demonstrating how your internal team can add, update, and manage Umm Al Quwain and UAE properties manually.
            </p>
          </div>

          <button
            onClick={handleAddNew}
            className="px-5 py-3 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center gap-2 shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Listing</span>
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Stats Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7DFCF] shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#C99A3B] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by title, community..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#F7F3EA]/70 border border-[#E7DFCF] rounded-xl focus:outline-none focus:border-[#C99A3B]"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-[#5E6778]">
            <span>
              Total Database Records: <strong className="text-[#111111]">{listings.length}</strong>
            </span>
          </div>
        </div>

        {/* Listings Table */}
        <div className="bg-white rounded-2xl border border-[#E7DFCF] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#111111] text-[#C99A3B] uppercase tracking-wider font-semibold border-b border-[#E7DFCF]">
                  <th className="py-3.5 px-4">Property</th>
                  <th className="py-3.5 px-4">Purpose</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Price (AED)</th>
                  <th className="py-3.5 px-4">Community</th>
                  <th className="py-3.5 px-4">Specs</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7DFCF] text-[#111111]">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F7F3EA]/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.images[0]}
                          alt=""
                          className="w-12 h-10 object-cover rounded-lg border border-[#E7DFCF]"
                        />
                        <div>
                          <div className="font-semibold text-xs line-clamp-1">{item.title}</div>
                          <span className="text-[10px] text-[#5E6778] font-mono">
                            Ref: {item.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-[#111111] text-[#C99A3B]">
                        {item.purpose}
                      </span>
                    </td>
                    <td className="py-3 px-4 capitalize font-medium">{item.propertyType}</td>
                    <td className="py-3 px-4 font-bold font-serif text-sm">
                      {new Intl.NumberFormat("en-AE").format(item.priceAED)}
                    </td>
                    <td className="py-3 px-4">{item.community}</td>
                    <td className="py-3 px-4 text-[#5E6778]">
                      {item.beds} Beds · {item.baths} Baths · {new Intl.NumberFormat("en-AE").format(item.sizeSqft)} sqft
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-100 text-green-800 capitalize">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/properties/${item.slug}`}
                          target="_blank"
                          className="p-1.5 text-gray-500 hover:text-[#C99A3B]"
                          title="View Live Listing"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1.5 text-gray-500 hover:text-[#111111]"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 text-gray-500 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add / Edit Listing Modal (Section 6 Demo) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E7DFCF] text-[#111111]">
            <div className="bg-[#111111] px-6 py-4 text-white flex items-center justify-between border-b border-[#C99A3B]/30 sticky top-0 z-10">
              <h3 className="text-lg font-serif font-bold text-white">
                {editingId ? "Edit Listing Record" : "Create New Property Listing"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                  Property Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Signature Beachfront Villa on Palm Jumeirah"
                  className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Purpose
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value as PropertyPurpose })
                    }
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  >
                    <option value="buy">For Sale (Buy)</option>
                    <option value="rent">For Rent</option>
                    <option value="off-plan">Off-Plan Launch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value as PropertyType })
                    }
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  >
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Price (AED) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.priceAED}
                    onChange={(e) => setFormData({ ...formData, priceAED: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Community
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    value={formData.baths}
                    onChange={(e) => setFormData({ ...formData, baths: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Size (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={formData.sizeSqft}
                    onChange={(e) => setFormData({ ...formData, sizeSqft: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    Developer (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.developer}
                    onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                    placeholder="e.g. Emaar, Nakheel"
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-[#5E6778] mb-1">
                    DLD Permit No.
                  </label>
                  <input
                    type="text"
                    value={formData.permitNumber}
                    onChange={(e) => setFormData({ ...formData, permitNumber: e.target.value })}
                    placeholder="DLD-PERMIT-..."
                    className="w-full px-3 py-2 text-xs border border-[#E7DFCF] rounded-lg focus:outline-none focus:border-[#C99A3B]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded text-[#C99A3B] focus:ring-[#C99A3B]"
                />
                <label htmlFor="featured-check" className="text-xs text-[#111111] font-medium">
                  Feature this property on the Homepage
                </label>
              </div>

              <div className="pt-4 border-t border-[#E7DFCF] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-[#E7DFCF] text-xs font-semibold rounded-lg hover:bg-[#F7F3EA]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Listing</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
