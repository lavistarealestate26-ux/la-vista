export type Language = "en" | "ar";

export interface Translations {
  // Navigation
  nav_buy: string;
  nav_rent: string;
  nav_leasing: string;
  nav_offplan: string;
  nav_commercial: string;
  nav_developers: string;
  nav_invest: string;
  nav_services: string;
  nav_insights: string;
  nav_about: string;
  nav_careers: string;
  nav_valuation: string;
  nav_phone: string;

  // Categories
  cat_all: string;
  cat_commercial: string;
  cat_residential: string;
  cat_leasing: string;

  // Hero
  hero_badge: string;
  hero_title_1: string;
  hero_title_italic: string;
  hero_subtitle: string;
  hero_tab_residential: string;
  hero_tab_commercial: string;
  hero_tab_leasing: string;
  hero_tab_buy: string;
  hero_tab_rent: string;
  hero_tab_offplan: string;
  hero_label_location: string;
  hero_placeholder_location: string;
  hero_label_beds: string;
  hero_any_beds: string;
  hero_label_price: string;
  hero_search_btn: string;

  // Trust Stats
  stat_listings: string;
  stat_advisors: string;
  stat_countries: string;
  stat_volume: string;

  // Developers
  dev_partners_label: string;
  dev_view_all: string;

  // Featured Properties
  feat_curated_badge: string;
  feat_heading: string;
  feat_subtitle: string;
  feat_filter_all: string;
  feat_filter_commercial: string;
  feat_filter_residential: string;
  feat_filter_leasing: string;
  feat_view_all: string;

  // Property Card Specs
  spec_studio: string;
  spec_beds: string;
  spec_baths: string;
  spec_sqft: string;
  card_explore: string;

  // Floating Actions
  float_social: string;
  float_whatsapp: string;
  float_call: string;
  float_enquiry: string;

  // Why La Vista
  why_badge: string;
  why_heading: string;
  why_subtitle: string;

  // Valuation Band
  val_badge: string;
  val_heading: string;
  val_subtitle: string;
  val_btn: string;
  val_trust: string;
}

export const DICTIONARY: Record<Language, Translations> = {
  en: {
    nav_buy: "Buy",
    nav_rent: "Rent",
    nav_leasing: "Leasing",
    nav_offplan: "Off-Plan",
    nav_commercial: "Commercial",
    nav_developers: "Developers",
    nav_invest: "Invest",
    nav_services: "Services",
    nav_insights: "Insights",
    nav_about: "About Us",
    nav_careers: "Careers",
    nav_valuation: "Free Valuation",
    nav_phone: "+971 6 766 8888",

    cat_all: "All Properties",
    cat_commercial: "Commercial Properties",
    cat_residential: "Residential Properties",
    cat_leasing: "Leasing Properties",

    hero_badge: "Umm Al Quwain & Wider UAE",
    hero_title_1: "Find Your Home",
    hero_title_italic: "in Umm Al Quwain & Wider UAE.",
    hero_subtitle: "Exceptional beachfront villas, commercial investments, and premier residential leasing curated exclusively by La Vista Real Estate.",
    hero_tab_residential: "Residential",
    hero_tab_commercial: "Commercial",
    hero_tab_leasing: "Leasing",
    hero_tab_buy: "Buy Properties",
    hero_tab_rent: "Rent Residences",
    hero_tab_offplan: "Off-Plan Launches",
    hero_label_location: "Location or Area",
    hero_placeholder_location: "e.g. Al Sinniyah Island, Al Salamah, UAQ Marina...",
    hero_label_beds: "Bedrooms / Size",
    hero_any_beds: "Any Size",
    hero_label_price: "Price Range",
    hero_search_btn: "Search Properties",

    stat_listings: "450+ Verified Properties",
    stat_advisors: "45+ Private UAE Advisors",
    stat_countries: "Serving International Investors",
    stat_volume: "AED 1.8B+ Transacted",

    dev_partners_label: "Partners with Leading Master Developers across UAE",
    dev_view_all: "View All Partners →",

    feat_curated_badge: "Curated Portfolio",
    feat_heading: "Featured Umm Al Quwain & UAE Properties",
    feat_subtitle: "Hand-selected luxury estates, commercial hubs, and premier leasing portfolios inspected by our advisory team.",
    feat_filter_all: "All Categories",
    feat_filter_commercial: "Commercial",
    feat_filter_residential: "Residential",
    feat_filter_leasing: "Leasing",
    feat_view_all: "Explore All Properties",

    spec_studio: "Studio",
    spec_beds: "Beds",
    spec_baths: "Baths",
    spec_sqft: "sqft",
    card_explore: "Explore",

    float_social: "Social Media",
    float_whatsapp: "Chat on WhatsApp",
    float_call: "Call +971 6 766 8888",
    float_enquiry: "Register Enquiry",

    why_badge: "The La Vista Standard",
    why_heading: "Why Discerning Clients Choose La Vista",
    why_subtitle: "A bespoke private brokerage combining deep Umm Al Quwain and UAE market intelligence with discreet, Swiss-grade service standards.",

    val_badge: "For Property Owners in UAE",
    val_heading: "Thinking of Selling or Leasing Your Property?",
    val_subtitle: "Connect with our network of qualified buyers, tenants, and institutional investors. Request a confidential, data-backed market appraisal.",
    val_btn: "Request Free Valuation",
    val_trust: "Confidential · No Obligation · Licensed & Regulated",
  },
  ar: {
    nav_buy: "شراء",
    nav_rent: "إيجار",
    nav_leasing: "تأجير",
    nav_offplan: "على الخارطة",
    nav_commercial: "تجاري",
    nav_developers: "المطورون",
    nav_invest: "استثمار",
    nav_services: "خدماتنا",
    nav_insights: "الأبحاث",
    nav_about: "من نحن",
    nav_careers: "الوظائف",
    nav_valuation: "تقييم مجاني",
    nav_phone: "+971 6 766 8888",

    cat_all: "جميع العقارات",
    cat_commercial: "عقارات تجارية",
    cat_residential: "عقارات سكنية",
    cat_leasing: "عقارات التأجير",

    hero_badge: "أم القيوين وعموم الإمارات",
    hero_title_1: "ابحث عن عقارك المثالي",
    hero_title_italic: "في أم القيوين وعموم الإمارات.",
    hero_subtitle: "فلل ساحلية فاخرة، عقارات تجارية استثمارية، ومحفظة تأجير راقية بإشراف مباشر من لا فيستا العقارية.",
    hero_tab_residential: "سكني",
    hero_tab_commercial: "تجاري",
    hero_tab_leasing: "تأجير",
    hero_tab_buy: "شراء",
    hero_tab_rent: "إيجار",
    hero_tab_offplan: "على الخارطة",
    hero_label_location: "المنطقة أو المشروع",
    hero_placeholder_location: "مثال: جزيرة السينية، السلمة، مارينا أم القيوين...",
    hero_label_beds: "الغرف / المساحة",
    hero_any_beds: "أي مساحة",
    hero_label_price: "نطاق السعر",
    hero_search_btn: "بحث عن العقارات",

    stat_listings: "+450 عقار معتمد",
    stat_advisors: "+45 مستشار عقاري متخصص",
    stat_countries: "خدمة المستثمرين محلياً ودولياً",
    stat_volume: "+1.8 مليار درهم صفقات منجزة",

    dev_partners_label: "شركاء مع كبرى شركات التطوير في الإمارات",
    dev_view_all: "عرض جميع الشركاء ←",

    feat_curated_badge: "محفظة عقارية حصرية",
    feat_heading: "عقارات مميزة في أم القيوين والإمارات",
    feat_subtitle: "فلل شاطئية وأبراج سكنية ومجمعات تجارية معتمدة تلبي أرقى متطلبات السكن والاستثمار.",
    feat_filter_all: "الكل",
    feat_filter_commercial: "تجاري",
    feat_filter_residential: "سكني",
    feat_filter_leasing: "تأجير",
    feat_view_all: "استكشف جميع العقارات",

    spec_studio: "استوديو",
    spec_beds: "غرف",
    spec_baths: "حمامات",
    spec_sqft: "قدم²",
    card_explore: "تفاصيل",

    float_social: "منصات التواصل",
    float_whatsapp: "محادثة عبر واتساب",
    float_call: "اتصال مباشر",
    float_enquiry: "طلب استفسار",

    why_badge: "معايير لا فيستا العقارية",
    why_heading: "لماذا يختار كبار المستثمرين لا فيستا؟",
    why_subtitle: "وساطة عقارية خاصة تجمع بين المعرفة العميقة بسوق أم القيوين والإمارات وأعلى معايير السرية والموثوقية.",

    val_badge: "لملاك العقارات في الإمارات",
    val_heading: "هل ترغب في بيع أو تأجير عقارك بأعلى عائد؟",
    val_subtitle: "تواصل مع شبكتنا من المشترين والمستأجرين المؤهلين. احصل على تقييم فوري وموثوق لعقارك.",
    val_btn: "اطلب تقييم عقارك مجاناً",
    val_trust: "سري تماماً · بدون التزام · مرخص ومعتمد رسمياً",
  },
};
