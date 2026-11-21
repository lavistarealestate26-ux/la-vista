import { MetadataRoute } from "next";
import { MOCK_LISTINGS, LATEST_INSIGHTS } from "@/data/mockListings";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lavistarealestate.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/listings`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/communities`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/invest`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/amra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/valuation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Property Listing Pages
  const propertyRoutes: MetadataRoute.Sitemap = MOCK_LISTINGS.map((property) => ({
    url: `${BASE_URL}/properties/${property.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Insight Article Pages
  const insightRoutes: MetadataRoute.Sitemap = LATEST_INSIGHTS.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...propertyRoutes, ...insightRoutes];
}
