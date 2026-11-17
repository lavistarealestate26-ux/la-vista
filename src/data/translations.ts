export type Language = "en" | "ar";

export interface Translations {
  // Navigation
  nav_buy: string;
  nav_rent: string;
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

  // Hero
  hero_badge: string;
  hero_title_1: string;
  hero_title_italic: string;
  hero_subtitle: string;
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
  feat_filter_buy: string;
  feat_filter_rent: string;
  feat_filter_offplan: string;
  feat_view_all: string;

  // Property Card Specs
  spec_studio: string;
  spec_beds: string;
  spec_baths: string;
  spec_sqft: string;
  card_explore: string;

  // Floating Actions
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
    nav_offplan: "Off-Plan",
    nav_commercial: "Commercial",
    nav_developers: "Developers",
    nav_invest: "Invest",
    nav_services: "Services",
    nav_insights: "Insights",
    nav_about: "About Us",
    nav_careers: "Careers",
    nav_valuation: "Free Valuation",
    nav_phone: "+971 4 429 8888",

    hero_badge: "Dubai Prime Real Estate",
    hero_title_1: "Find Your Home",
    hero_title_italic: "in Dubai.",
    hero_subtitle: "Exceptional waterfront villas, sky penthouses, and premier off-plan investments curated exclusively by La Vista Real Estate.",
    hero_tab_buy: "Buy Properties",
    hero_tab_rent: "Rent Residences",
    hero_tab_offplan: "Off-Plan Launches",
    hero_label_location: "Location or Community",
    hero_placeholder_location: "e.g. Palm Jumeirah, Downtown, Dubai Marina...",
    hero_label_beds: "Bedrooms",
    hero_any_beds: "Any Bedrooms",
    hero_label_price: "Price Range",
    hero_search_btn: "Search",

    stat_listings: "1,250+ Verified Listings",
    stat_advisors: "85+ Elite Private Advisors",
    stat_countries: "Serving 45+ Countries",
    stat_volume: "AED 4.2B+ Transacted",

    dev_partners_label: "Partners with Dubai’s Leading Developers",
    dev_view_all: "View All Developers →",

    feat_curated_badge: "Curated Portfolio",
    feat_heading: "Featured Dubai Properties",
    feat_subtitle: "Hand-selected luxury estates, sky villas, and signature residences inspected by our private advisory team.",
    feat_filter_all: "All Curated",
    feat_filter_buy: "For Sale",
    feat_filter_rent: "For Rent",
    feat_filter_offplan: "Off-Plan",
    feat_view_all: "Explore All 1,250+ Listings",

    spec_studio: "Studio",
    spec_beds: "Beds",
    spec_baths: "Baths",
    spec_sqft: "sqft",
    card_explore: "Explore",

    float_whatsapp: "Chat on WhatsApp",
    float_call: "Call +971 4 429 8888",
    float_enquiry: "Register Enquiry",

    why_badge: "The La Vista Standard",
    why_heading: "Why Discerning Clients Choose La Vista",
    why_subtitle: "A bespoke private brokerage combining deep Dubai market intelligence with discreet, Swiss-grade service standards.",

    val_badge: "For Dubai Property Owners",
    val_heading: "Thinking of Selling or Leasing Your Property?",
    val_subtitle: "Connect with our international network of qualified high-net-worth buyers and family offices. Request a confidential, data-backed market appraisal based on verified Dubai Land Department transactions.",
    val_btn: "Request Free Valuation",
    val_trust: "Confidential · No Obligation · RERA Licensed",
  },
  ar: {
    nav_buy: "شراء",
    nav_rent: "إيجار",
    nav_offplan: "على الخارطة",
    nav_commercial: "تجاري",
    nav_developers: "المطورون",
    nav_invest: "استثمار",
    nav_services: "خدماتنا",
    nav_insights: "الأبحاث",
    nav_about: "من نحن",
    nav_careers: "الوظائف",
    nav_valuation: "تقييم مجاني",
    nav_phone: "+971 4 429 8888",

    hero_badge: "عقارات دبي الفاخرة",
    hero_title_1: "ابحث عن منزلك الفاخر",
    hero_title_italic: "في دبي.",
    hero_subtitle: "فلل حصرية على الواجهة البحرية، وبنتهاوس بإطلالات بانورامية، ومشاريع استثمارية واعدة بإشراف لا فيستا العقارية.",
    hero_tab_buy: "عقارات للبيع",
    hero_tab_rent: "عقارات للإيجار",
    hero_tab_offplan: "مشاريع قيد الإنشاء",
    hero_label_location: "المنطقة أو المشروع",
    hero_placeholder_location: "مثال: نخلة جميرا، وسط مدينة دبي، دبي مارينا...",
    hero_label_beds: "غرف النوم",
    hero_any_beds: "أي عدد غرف",
    hero_label_price: "نطاق السعر",
    hero_search_btn: "بحث",

    stat_listings: "+1,250 عقار حصري معتمد",
    stat_advisors: "+85 مستشار عقاري خاص",
    stat_countries: "خدمة عملاء من +45 دولة",
    stat_volume: "+4.2 مليار درهم إجمالي الصفقات",

    dev_partners_label: "شركاء مع كبرى شركات التطوير العقاري في دبي",
    dev_view_all: "عرض جميع المطورين ←",

    feat_curated_badge: "محفظة عقارية حصرية",
    feat_heading: "عقارات دبي المختارة",
    feat_subtitle: "فلل وقصور وشقق بنتهاوس فاخرة تم اختيارها بعناية فائقة من قبل خبرائنا المعتمدين.",
    feat_filter_all: "الكل",
    feat_filter_buy: "للبيع",
    feat_filter_rent: "للإيجار",
    feat_filter_offplan: "على الخارطة",
    feat_view_all: "استكشف جميع العقارات (+1,250)",

    spec_studio: "استوديو",
    spec_beds: "غرف",
    spec_baths: "حمامات",
    spec_sqft: "قدم²",
    card_explore: "تفاصيل",

    float_whatsapp: "محادثة عبر واتساب",
    float_call: "اتصال مباشر",
    float_enquiry: "طلب استفسار",

    why_badge: "معايير لا فيستا العقارية",
    why_heading: "لماذا يختار كبار المستثمرين لا فيستا؟",
    why_subtitle: "استشارات عقارية نخبوية تجمع بين أدق بيانات سوق دبي والسرية التامة وفق أرقى المعايير العالمية.",

    val_badge: "لملاك العقارات في دبي",
    val_heading: "هل ترغب في بيع أو تأجير عقارك بأعلى عائد؟",
    val_subtitle: "تواصل مع شبكتنا العالمية من كبار المستثمرين والمكاتب العائلية. احصل على تقييم فوري ومعتمد مستند إلى صفقات دائرة الأراضي والأملاك الحقيقية.",
    val_btn: "اطلب تقييم عقارك مجاناً",
    val_trust: "سري تماماً · بدون التزام · مرخص من مؤسسة التنظيم العقاري (RERA)",
  },
};
