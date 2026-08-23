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

type TranslationDictionary = Record<string, unknown>

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations: Record<
  Language,
  TranslationDictionary
> = {
  th: th as TranslationDictionary,
  en: en as TranslationDictionary,
}

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  )

function getTranslation(
  object: unknown,
  key: string
): string | undefined {
  if (
    typeof object !== "object" ||
    object === null
  ) {
    return undefined
  }

  let current: unknown = object

  for (const part of key.split(".")) {
    if (
      typeof current !== "object" ||
      current === null
    ) {
      return undefined
    }

    if (!(part in current)) {
      return undefined
    }

    current = (
      current as Record<string, unknown>
    )[part]
  }

  return typeof current === "string"
    ? current
    : undefined
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>("en")

  const [initialized, setInitialized] =
    useState(false)

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
      // Ignore storage errors
    }

    setInitialized(true)
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
      // Ignore storage errors
    }
  }

  const t = (key: string): string => {
    const current =
      getTranslation(
        translations[language],
        key
      )

    if (current !== undefined) {
      return current
    }

    const fallback =
      getTranslation(
        translations.en,
        key
      )

    return fallback ?? key
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language]
  )

  if (!initialized) {
    return null
  }

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
