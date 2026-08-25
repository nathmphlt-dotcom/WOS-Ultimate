"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import th from "../locales/th";
import en from "../locales/en";

export type Language = "th" | "en";

const dictionaries = {
  th,
  en,
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("wos-language");

    if (saved === "th" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("wos-language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: dictionaries[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}
