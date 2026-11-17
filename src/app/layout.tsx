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
  title: "La Vista Real Estate Dubai | Prime Luxury Residences & Off-Plan",
  description:
    "La Vista Real Estate is Dubai’s premier boutique brokerage specializing in luxury waterfront villas, iconic sky penthouses, and high-yield off-plan developments across Palm Jumeirah, Downtown Dubai, and Dubai Marina.",
  keywords: [
    "La Vista Real Estate",
    "Dubai luxury real estate",
    "Palm Jumeirah villas for sale",
    "Downtown Dubai penthouses",
    "Dubai off-plan developments",
    "Emaar off plan",
    "Dubai property investment",
    "UAE Golden Visa",
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
    title: "La Vista Real Estate Dubai | Luxury Properties & Estates",
    description:
      "Discover the finest selection of ultra-prime properties and off-plan launches in Dubai with La Vista Real Estate.",
    url: "https://lavistarealestate.ae",
    siteName: "La Vista Real Estate",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "La Vista Real Estate Dubai",
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
      <body className="min-h-screen flex flex-col bg-white text-[#111111] font-sans antialiased selection:bg-[#C99A3B]/30 selection:text-[#111111]">
        <LanguageProvider>
          {/* Sticky & Transparent Header */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow">{children}</main>

          {/* Floating Contact Stack (WhatsApp, Call, Enquiry) */}
          <FloatingActions />

          {/* Global Luxury Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
