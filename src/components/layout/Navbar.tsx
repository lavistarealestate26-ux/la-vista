"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calculator,
  Globe,
  Sparkles,
  Building,
  Home,
  Check,
} from "lucide-react";
import Logo from "../common/Logo";
import ValuationModal from "../modals/ValuationModal";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/contactInfo";

interface NavDropdownItem {
  name: string;
  href: string;
  desc?: string;
  badge?: string;
}

interface NavSection {
  label: string;
  href?: string;
  badge?: string;
  items?: NavDropdownItem[];
}

const NAV_MENU: NavSection[] = [
  {
    label: "Buy",
    items: [
      { name: "Luxury Villas", href: "/listings?purpose=buy&type=villa", desc: "Private coastal estates in Umm Al Quwain & Wider UAE" },
      { name: "Commercial Properties", href: "/listings?category=commercial", desc: "Prime retail plazas, offices & logistics hubs" },
      { name: "Penthouses", href: "/listings?purpose=buy&type=penthouse", desc: "Panoramic sky residences with sea views" },
      { name: "Waterfront Mansions", href: "/listings?purpose=buy&type=villa", desc: "Al Sinniyah Island & coastal estates", badge: "Exclusive" },
    ],
  },
  {
    label: "Leasing",
    items: [
      { name: "All Leasing Properties", href: "/listings?category=leasing", desc: "Browse all residential & commercial lease listings", badge: "All" },
      { name: "Residential Leasing", href: "/listings?category=leasing", desc: "Annual luxury coastal villas and modern apartments" },
      { name: "Commercial Leasing", href: "/listings?category=commercial", desc: "Prime retail showrooms, corporate offices & warehouses" },
      { name: "UAQ Marina Waterfront", href: "/listings?category=leasing&community=UAQ+Marina", desc: "Turnkey coastal apartments with marina views" },
      { name: "Long-Term Estate Leases", href: "/listings?category=leasing", desc: "Private family compounds with flexible terms" },
    ],
  },
  {
    label: "Rent",
    items: [
      { name: "Luxury Furnished", href: "/listings?purpose=rent", desc: "Turnkey coastal residences with modern interiors" },
      { name: "Marina Living", href: "/listings?purpose=rent&community=UAQ+Marina", desc: "Waterfront apartments with yacht club access" },
      { name: "Family Villas", href: "/listings?purpose=rent&type=villa", desc: "Spacious homes in Al Salamah & Al Ramlah" },
    ],
  },
  {
    label: "Off-Plan",
    badge: "Hot",
    items: [
      { name: "New Launches 2026", href: "/listings?purpose=off-plan", desc: "Exclusive island and coastal allocations", badge: "New" },
      { name: "Al Sinniyah Island", href: "/listings?purpose=off-plan", desc: "Sobha & Master Waterfront Launches" },
      { name: "Post-Handover Payment Plans", href: "/listings?purpose=off-plan", desc: "Pay over 2 to 5 years after receiving keys" },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
  },
  {
    label: "Invest",
    items: [
      { name: "UAE 10-Year Golden Visa", href: "/invest", desc: "Complete qualification criteria for investors" },
      { name: "UAE Market Reports 2026", href: "/insights", desc: "Data insights on yields and capital appreciation" },
      { name: "ROI Calculator", href: "/invest#calculator", desc: "Estimate rental yields and capital gains" },
      { name: "Area Investment Guides", href: "/communities", desc: "Which UAE areas yield the highest returns" },
    ],
  },
  {
    label: "Services",
    items: [
      { name: "Property Valuation", href: "/valuation", desc: "Complimentary market valuation based on verified records" },
      { name: "Property Management", href: "/services", desc: "Turnkey tenant screening and asset care" },
      { name: "Commercial Advisory", href: "/services", desc: "Discreet acquisitions for business and family offices" },
      { name: "Leasing Management", href: "/services", desc: "Comprehensive tenant vetting and lease registration" },
    ],
  },
  {
    label: "About Us",
    items: [
      { name: "About La Vista", href: "/about", desc: "Premier boutique luxury brokerage in UAQ & UAE" },
      { name: "Private Advisors", href: "/about#team", desc: "Meet our multilingual property partners" },
      { name: "Market Reports & Insights", href: "/insights", desc: "Quarterly UAE transactional intelligence", badge: "2026" },
      { name: "Careers at La Vista", href: "/careers", desc: "Join our high-performing private brokerage" },
      { name: "Contact Headquarters", href: "/contact", desc: "Visit our Umm Al Quwain headquarters" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { language, t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isValuationOpen, setIsValuationOpen] = useState(false);
  const [currency, setCurrency] = useState("AED");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  // Check if we are on the homepage (hero video is only on homepage)
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Determine appearance: solid white when scrolled or when on subpages; transparent on home over hero
  const isSolid = isScrolled || !isHomePage;

  const getSectionLabel = (label: string) => {
    if (language === "ar") {
      switch (label) {
        case "Buy":
          return t.nav_buy;
        case "Leasing":
          return t.nav_leasing;
        case "Rent":
          return t.nav_rent;
        case "Off-Plan":
          return t.nav_offplan;
        case "Developers":
          return t.nav_developers;
        case "Invest":
          return t.nav_invest;
        case "Services":
          return t.nav_services;
        case "About Us":
          return t.nav_about;
        default:
          return label;
      }
    }
    return label;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSolid
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7DFCF] py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            {/* Logo */}
            <div className="shrink-0">
              <Logo
                variant={isSolid ? "light" : "dark"}
                size="md"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0" aria-label="Main Navigation">
              {NAV_MENU.map((section) => {
                const hasDropdown = !!section.items;
                const isOpen = activeDropdown === section.label;
                const displayLabel = getSectionLabel(section.label);

                return (
                  <div
                    key={section.label}
                    className="relative shrink-0"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(section.label)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    {hasDropdown ? (
                      <button
                        onClick={() => setActiveDropdown(isOpen ? null : section.label)}
                        className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 rounded-md shrink-0 ${
                          isSolid
                            ? "text-[#111111] hover:text-[#C99A3B]"
                            : "text-white/90 hover:text-white"
                        }`}
                        aria-expanded={isOpen}
                      >
                        <span className="whitespace-nowrap">{displayLabel}</span>
                        {section.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#C99A3B] text-white rounded font-bold uppercase tracking-normal leading-none shrink-0 whitespace-nowrap">
                            {section.badge}
                          </span>
                        )}
                        <ChevronDown
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#C99A3B]" : "opacity-70"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={section.href || "#"}
                        className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 rounded-md shrink-0 ${
                          isSolid
                            ? "text-[#111111] hover:text-[#C99A3B]"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        <span className="whitespace-nowrap">{displayLabel}</span>
                      </Link>
                    )}

                    {/* Mega-menu / Dropdown Panel */}
                    {hasDropdown && isOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-fadeIn">
                        <div className="bg-white rounded-xl shadow-2xl border border-[#E7DFCF] p-2 text-[#111111]">
                          <div className="space-y-1">
                            {section.items?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block p-2.5 rounded-lg hover:bg-[#F7F3EA] transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold text-[#111111] group-hover:text-[#C99A3B] transition-colors">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-[#C99A3B]/10 text-[#C99A3B] font-bold rounded">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.desc && (
                                  <p className="text-[11px] text-[#5E6778] line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Language Switcher + Currency Switcher + Free Valuation CTA Button */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
              {/* Language Switcher Button (EN / العربية) */}
              <button
                onClick={toggleLanguage}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border shrink-0 transition-all ${
                  isSolid
                    ? "border-[#E7DFCF] text-[#111111] hover:border-[#C99A3B] hover:text-[#C99A3B]"
                    : "border-white/30 text-white hover:border-white"
                }`}
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#C99A3B] shrink-0" />
                <span className="font-medium tracking-wide whitespace-nowrap">
                  {language === "en" ? "العربية" : "English"}
                </span>
              </button>

              {/* Currency Selector */}
              <div className="relative shrink-0">
                <button
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border shrink-0 transition-colors ${
                    isSolid
                      ? "border-[#E7DFCF] text-[#111111] hover:border-[#C99A3B]"
                      : "border-white/30 text-white hover:border-white"
                  }`}
                  aria-label="Select Currency"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C99A3B] shrink-0" />
                  <span className="whitespace-nowrap">{currency}</span>
                  <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
                </button>

                {currencyOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-28 bg-white rounded-lg shadow-xl border border-[#E7DFCF] py-1 text-xs text-[#111111] z-50">
                    {["AED", "USD", "EUR", "GBP"].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          setCurrencyOpen(false);
                        }}
                        className={`w-full px-3 py-1.5 text-left flex items-center justify-between hover:bg-[#F7F3EA] ${
                          currency === curr ? "font-bold text-[#C99A3B]" : "text-[#5E6778]"
                        }`}
                      >
                        <span>{curr}</span>
                        {currency === curr && <Check className="w-3.5 h-3.5 text-[#C99A3B]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Call Quick Link */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                className={`hidden 2xl:inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap px-2.5 py-1.5 transition-colors shrink-0 ${
                  isSolid ? "text-[#5E6778] hover:text-[#111111]" : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C99A3B] shrink-0" />
                <span className="whitespace-nowrap">{CONTACT_INFO.phoneDisplay}</span>
              </a>

              {/* Primary Solid Gold CTA Button */}
              <button
                onClick={() => setIsValuationOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 bg-[#C99A3B] hover:bg-[#8A6420] text-white text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow-md transition-all shrink-0 whitespace-nowrap"
              >
                <Calculator className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{t.nav_valuation}</span>
              </button>
            </div>

            {/* Mobile Controls: Language Toggle, Hamburger & Valuation CTA */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-[#111111] text-[#C99A3B] border border-[#C99A3B]/40 active:scale-95 shrink-0 whitespace-nowrap"
                aria-label="Toggle Language"
              >
                {language === "en" ? "العربية" : "EN"}
              </button>

              <button
                onClick={() => setIsValuationOpen(true)}
                className="hidden sm:inline-flex px-3 py-1.5 bg-[#C99A3B] text-white text-[11px] uppercase tracking-wider font-semibold rounded-md shrink-0 whitespace-nowrap"
              >
                {t.nav_valuation}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors shrink-0 ${
                  isSolid
                    ? "text-[#111111] hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle Navigation Drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (High Priority per Prompt Section 5) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-white flex flex-col animate-fadeIn">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#E7DFCF]">
            <Logo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#111111] hover:bg-[#F7F3EA] rounded-full transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Menu Items (Accordion) */}
          <div className="flex-1 overflow-y-auto px-4 py-6 divide-y divide-[#E7DFCF]/60">
            {NAV_MENU.map((section) => {
              const hasDropdown = !!section.items;
              const isExpanded = mobileExpandedSection === section.label;

              return (
                <div key={section.label} className="py-2.5">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileExpandedSection(isExpanded ? null : section.label)
                        }
                        className="w-full flex items-center justify-between py-2 text-base font-medium text-[#111111]"
                      >
                        <span className="flex items-center gap-2">
                          <span>{section.label}</span>
                          {section.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-[#C99A3B] text-white rounded font-bold">
                              {section.badge}
                            </span>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#5E6778] transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#C99A3B]" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 py-2 space-y-2 border-l-2 border-[#C99A3B]/40 ml-2 mt-1">
                          {section.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-1.5 text-sm text-[#5E6778] hover:text-[#C99A3B]"
                            >
                              <div className="font-medium text-[#111111]">{item.name}</div>
                              {item.desc && (
                                <div className="text-xs text-[#5E6778] line-clamp-1">{item.desc}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={section.href || "#"}
                      className="block py-2 text-base font-medium text-[#111111] hover:text-[#C99A3B]"
                    >
                      {section.label}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Quick Contact & Details in Drawer */}
            <div className="py-6 space-y-3">
              <a
                href="tel:+97144298888"
                className="flex items-center gap-3 text-sm text-[#111111] py-2"
              >
                <Phone className="w-4 h-4 text-[#C99A3B]" />
                <span>+971 4 429 8888</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#5E6778]">
                <Globe className="w-4 h-4 text-[#C99A3B]" />
                <span>Currency: {currency} (AED default)</span>
              </div>
            </div>
          </div>

          {/* Drawer Bottom CTA Button (thumb-friendly per spec) */}
          <div className="p-4 border-t border-[#E7DFCF] bg-[#F7F3EA] space-y-2">
            <button
              onClick={toggleLanguage}
              className="w-full py-2.5 px-3 bg-white border border-[#E7DFCF] text-[#111111] text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-[#C99A3B]" />
              <span>Language: {language === "en" ? "English (Switch to العربية)" : "العربية (Switch to English)"}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsValuationOpen(true);
              }}
              className="w-full min-h-[48px] py-3 bg-[#C99A3B] text-white text-sm uppercase tracking-wider font-bold rounded-xl shadow-md hover:bg-[#8A6420] transition-colors flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>{t.nav_valuation}</span>
            </button>
          </div>
        </div>
      )}

      {/* Free Valuation Modal */}
      <ValuationModal
        isOpen={isValuationOpen}
        onClose={() => setIsValuationOpen(false)}
      />
    </>
  );
}
