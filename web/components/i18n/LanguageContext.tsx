"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import th from "../../locales/th"
import en from "../../locales/en"

export type Language = "th" | "en"

type TranslationObject = typeof th

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, TranslationObject> = {
  th,
  en,
}

const LanguageContext =
  createContext<LanguageContextType | null>(null)

function getNestedValue(
  object: unknown,
  path: string
): string | undefined {
  const result = path
    .split(".")
    .reduce<unknown>((current, key) => {
      if (
        current &&
        typeof current === "object" &&
        key in current
      ) {
        return (
          current as Record<string, unknown>
        )[key]
      }

      return undefined
    }, object)

  return typeof result === "string"
    ? result
    : undefined
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>("th")

  useEffect(() => {
    const saved =
      window.localStorage.getItem(
        "wos-language"
      )

    if (saved === "th" || saved === "en") {
      setLanguageState(saved)
    }
  }, [])

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage)

    window.localStorage.setItem(
      "wos-language",
      nextLanguage
    )

    document.documentElement.lang =
      nextLanguage === "th"
        ? "th"
        : "en"
  }

  function toggleLanguage() {
    setLanguage(
      language === "th"
        ? "en"
        : "th"
    )
  }

  function t(key: string) {
    const value = getNestedValue(
      translations[language],
      key
    )

    if (value !== undefined) {
      return value
    }

    const fallback = getNestedValue(
      translations.th,
      key
    )

    if (fallback !== undefined) {
      return fallback
    }

    return key
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context =
    useContext(LanguageContext)

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    )
  }

  return context
  }
