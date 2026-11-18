"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, DICTIONARY } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  dir: "ltr" | "rtl";
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  dir: "ltr",
  t: DICTIONARY.en,
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initial state safely accessing localStorage on client without cascading render
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedLang = localStorage.getItem("lv_lang") as Language | null;
        if (savedLang === "ar" || savedLang === "en") {
          return savedLang;
        }
      } catch {
        // LocalStorage unavailable
      }
    }
    return "en";
  });

  // Synchronize document direction and lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("lv_lang", newLang);
    } catch {
      // LocalStorage unavailable
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, dir, t, toggleLanguage, setLanguage }}>
      <div className={language === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
