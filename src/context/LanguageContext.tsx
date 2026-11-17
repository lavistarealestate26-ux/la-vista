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
  const [language, setLanguageState] = useState<Language>("en");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("lv_lang") as Language | null;
      if (savedLang === "ar" || savedLang === "en") {
        setLanguageState(savedLang);
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = savedLang;
      }
    } catch (e) {
      // LocalStorage unavailable
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    const newDir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = newDir;
    document.documentElement.lang = newLang;
    try {
      localStorage.setItem("lv_lang", newLang);
    } catch (e) {}
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
  return useContext(LanguageContext);
}
