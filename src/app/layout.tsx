import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/common/FloatingActions";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lavista.ae"),
  title: "Umm Al Quwain Real Estate: Buy, Rent & Invest | La Vista",
  description:
    "Licensed real estate brokerage in Umm Al Quwain. Buy, rent or invest in beachfront villas, off-plan projects, commercial units and warehouses.",
  keywords: [
    "La Vista Real Estate",
    "Umm Al Quwain real estate",
    "UAQ luxury properties",
    "Al Sinniyah Island villas",
    "UAQ Marina properties",
    "Wider UAE real estate",
    "Commercial real estate UAE",
    "Leasing properties Umm Al Quwain",
    "UAE Golden Visa",
    "Warehouses Umm Al Quwain",
  ],
  authors: [{ name: "La Vista Real Estate LLC" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Umm Al Quwain Real Estate: Buy, Rent & Invest | La Vista",
    description:
      "Licensed real estate brokerage in Umm Al Quwain. Buy, rent or invest in beachfront villas, off-plan projects, commercial units and warehouses.",
    url: "https://lavista.ae",
    siteName: "La Vista Real Estate",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "La Vista Real Estate Umm Al Quwain",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#111111] font-sans antialiased selection:bg-[#C99A3B]/30 selection:text-[#111111] w-full max-w-full overflow-x-hidden">
        <LanguageProvider>
          {/* Sticky & Transparent Header */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow pb-24 lg:pb-0 w-full max-w-full overflow-x-hidden">{children}</main>

          {/* Floating Contact Stack (WhatsApp, Call, Enquiry) */}
          <FloatingActions />

          {/* Global Luxury Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
