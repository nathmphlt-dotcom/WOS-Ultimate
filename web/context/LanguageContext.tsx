"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import th from "../locales/th"
import en from "../locales/en"

export type Language = "th" | "en"

type TranslationValue =
  | string
  | Record<string, unknown>

type LanguageDictionary = Record<
  string,
  TranslationValue
>

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  )

const dictionaries: Record<
  Language,
  LanguageDictionary
> = {
  th: th as LanguageDictionary,
  en: en as LanguageDictionary,
}

function getNestedValue(
  dictionary: LanguageDictionary,
  key: string
): unknown {
  return key
    .split(".")
    .reduce<unknown>((current, part) => {
      if (
        current &&
        typeof current === "object" &&
        part in current
      ) {
        return (
          current as Record<string, unknown>
        )[part]
      }

      return undefined
    }, dictionary)
}

function resolveTranslation(
  dictionary: LanguageDictionary,
  key: string
): string | undefined {
  const value = getNestedValue(
    dictionary,
    key
  )

  return typeof value === "string"
    ? value
    : undefined
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>("en")

  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const saved =
        window.localStorage.getItem(
          "wos-language"
        )

      if (
        saved === "th" ||
        saved === "en"
      ) {
        setLanguageState(saved)
      }
    } catch {
      // Ignore localStorage errors
    }

    setReady(true)
  }, [])

  const setLanguage = (
    nextLanguage: Language
  ) => {
    setLanguageState(nextLanguage)

    try {
      window.localStorage.setItem(
        "wos-language",
        nextLanguage
      )
    } catch {
      // Ignore localStorage errors
    }

    document.documentElement.lang =
      nextLanguage === "th"
        ? "th"
        : "en"
  }

  const toggleLanguage = () => {
    setLanguage(
      language === "th"
        ? "en"
        : "th"
    )
  }

  const t = (
    key: string,
    fallback?: string
  ) => {
    const current =
      resolveTranslation(
        dictionaries[language],
        key
      )

    if (current !== undefined) {
      return current
    }

    const english =
      resolveTranslation(
        dictionaries.en,
        key
      )

    if (english !== undefined) {
      return english
    }

    return (
      fallback ??
      key
    )
  }

  useEffect(() => {
    if (!ready) return

    document.documentElement.lang =
      language === "th"
        ? "th"
        : "en"
  }, [language, ready])

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
    <LanguageContext.Provider
      value={value}
    >
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
