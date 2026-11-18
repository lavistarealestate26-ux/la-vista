"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  lockup?: "horizontal" | "stacked";
}

export default function Logo({
  variant = "light",
  showTagline = true,
  className = "",
  size = "md",
  lockup = "horizontal",
}: LogoProps) {
  const isDark = variant === "dark"; // dark background (hero video, footer) vs light background (white header)
  const [imgError, setImgError] = useState(false);

  // Height configurations
  const heightClasses = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11 md:h-12",
    lg: "h-12 sm:h-14 md:h-16",
    xl: "h-16 sm:h-18 md:h-20",
  };

  // 1. Horizontal Lockup (Emblem + LA VISTA REAL ESTATE side-by-side for optimal header balance)
  const horizontalDark = "/images/logo/logo-horizontal-dark.png";   // From WhatsApp Image 2026-11-17 at 11.51.26 PM.jpeg
  const horizontalLight = "/images/logo/logo-horizontal-light.png"; // From WhatsApp Image 2026-11-17 at 11.51.25 PM.jpeg

  // 2. Stacked Lockup (Original vertical orientation from client files)
  const stackedDark = "/images/logo/logo-header-dark.png";
  const stackedLight = "/images/logo/logo-header-light.png";

  const lightSrc = lockup === "horizontal" ? horizontalLight : stackedLight;
  const darkSrc = lockup === "horizontal" ? horizontalDark : stackedDark;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="La Vista Real Estate"
    >
      {!imgError ? (
        <div
          className={`relative ${heightClasses[size]} w-auto flex items-center transition-transform duration-300 group-hover:scale-102`}
        >
          {/* Light Mode Logo (Visible on Scrolled White Navbar) */}
          <img
            src={lightSrc}
            alt="La Vista Real Estate"
            className={`${heightClasses[size]} w-auto object-contain transition-opacity duration-300 ease-in-out ${
              isDark ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onError={() => setImgError(true)}
          />

          {/* Dark Mode Logo (Visible on Transparent Header over Hero Video) */}
          <img
            src={darkSrc}
            alt="La Vista Real Estate"
            className={`absolute inset-0 ${heightClasses[size]} w-auto object-contain transition-opacity duration-300 ease-in-out ${
              isDark ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* High-Res SVG Monogram Fallback */
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            className={`${heightClasses[size]} w-auto aspect-square text-[#C99A3B]`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4L43 19V44H5V19L24 4Z"
              stroke={isDark ? "#C99A3B" : "#111111"}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <text
              x="24"
              y="34"
              textAnchor="middle"
              fill="#C99A3B"
              fontFamily="Cinzel, Cormorant Garamond, serif"
              fontSize="18"
              fontWeight="700"
            >
              LV
            </text>
          </svg>
          <div className="flex flex-col">
            <span
              className={`font-serif tracking-[0.22em] font-bold uppercase leading-none ${
                isDark ? "text-white" : "text-[#111111]"
              } text-xl`}
            >
              LA VISTA
            </span>
            {showTagline && (
              <span className="tracking-[0.28em] text-[9px] uppercase font-semibold text-[#C99A3B] mt-1">
                REAL ESTATE · UMM AL QUWAIN
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
