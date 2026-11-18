"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "light",
  showTagline = true,
  className = "",
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark"; // on dark backgrounds (hero video, footer)
  const [imgError, setImgError] = useState(false);

  // Height configurations
  const heightClasses = {
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-10 md:h-12",
    lg: "h-12 sm:h-14 md:h-16",
  };

  // Select the actual cropped logo provided by client
  // logo-light.png is the reversed gold/white logo on black
  // logo-dark.png is the gold/black logo on white
  const logoSrc = isDark ? "/images/logo/logo-light.png" : "/images/logo/logo-dark.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="La Vista Real Estate"
    >
      {!imgError ? (
        <div className={`relative ${heightClasses[size]} w-auto flex items-center transition-transform duration-300 group-hover:scale-103`}>
          <img
            src={logoSrc}
            alt="La Vista Real Estate"
            className={`${heightClasses[size]} w-auto object-contain drop-shadow-sm`}
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
