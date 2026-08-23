"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  DEFAULT_LANGUAGE,
  type Language,
} from "../config/languages"

import th from "../locales/th"
import en from "../locales/en"

const translations = {
  th,
  en,
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext =
  createContext<LanguageContextValue | null>(null)

function getTranslation(
  object: any,
  path: string
): string {
  const result = path
    .split(".")
    .reduce(
      (current, key) => current?.[key],
      object
    )

  return typeof result === "string"
    ? result
    : path
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const saved =
      window.localStorage.getItem(
        "wos-language"
      ) as Language | null

    if (saved === "th" || saved === "en") {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (next: Language) => {
    setLanguageState(next)

    window.localStorage.setItem(
      "wos-language",
      next
    )
  }

  const value = useMemo(
    () => ({
      language,

      setLanguage,

      t: (key: string) =>
        getTranslation(
          translations[language],
          key
        ),
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
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    )
  }

  return context
                                             }
