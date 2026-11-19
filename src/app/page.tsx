import HeroSection from "@/components/home/HeroSection";
import DeveloperMarquee from "@/components/home/DeveloperMarquee";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import OffPlanHighlights from "@/components/home/OffPlanHighlights";
import AmraShowcase from "@/components/home/AmraShowcase";
import ExploreCommunities from "@/components/home/ExploreCommunities";
import WhyLaVista from "@/components/home/WhyLaVista";
import ValuationCtaBand from "@/components/home/ValuationCtaBand";
import LatestInsightsSection from "@/components/home/LatestInsightsSection";

export default function Home() {
  return (
    <>
      {/* A2: Hero Video + B1: Headline & Property Search */}
      <HeroSection />

      {/* B2: Leading UAE Developers Marquee Loop */}
      <DeveloperMarquee />

      {/* Prominent Landmark Feature: AMRA Integrative Wellness Resort Showcase */}
      <AmraShowcase />

      {/* Featured Properties: Curated Luxury Listings */}
      <FeaturedProperties />

      {/* Off-Plan Highlights: Landmark Projects with Payment Plans */}
      <OffPlanHighlights />

      {/* Explore Communities: Umm Al Quwain & Wider UAE Tiles */}
      <ExploreCommunities />

      {/* Why Discerning Clients Choose La Vista Real Estate */}
      <WhyLaVista />

      {/* Valuation / List Your Property CTA Band */}
      <ValuationCtaBand />

      {/* Latest Market Research & Insights */}
      <LatestInsightsSection />
    </>
  );
}
