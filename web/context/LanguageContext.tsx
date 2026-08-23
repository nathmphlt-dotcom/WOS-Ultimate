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

  setLanguage: (
    language: Language
  ) => void

  t: (
    key: string,
    fallback?: string
  ) => string
}

const translations: Record<
  Language,
  TranslationObject
> = {
  th,
  en,
}

const LanguageContext =
  createContext<
    LanguageContextType | undefined
  >(undefined)

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

  const parts = key.split(".")

  let current: unknown = object

  for (const part of parts) {
    if (
      typeof current !== "object" ||
      current === null
    ) {
      return undefined
    }

    if (
      !(part in current)
    ) {
      return undefined
    }

    current = (
      current as Record<
        string,
        unknown
      >
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
  const [
    language,
    setLanguageState,
  ] = useState<Language>("en")

  const [
    initialized,
    setInitialized,
  ] = useState(false)

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

    setInitialized(true)
  }, [])

  const setLanguage = (
    nextLanguage: Language
  ) => {
    setLanguageState(
      nextLanguage
    )

    try {
      window.localStorage.setItem(
        "wos-language",
        nextLanguage
      )
    } catch {
      // Ignore localStorage errors
    }
  }

  /*
   * รองรับทั้ง:
   *
   * t("dashboard.title")
   *
   * และ
   *
   * t("dashboard.title", "Dashboard")
   *
   * เพื่อป้องกัน component เก่าหรือ component
   * ใหม่เรียก translation ด้วย fallback
   */

  const t = (
    key: string,
    fallback?: string
  ): string => {
    const currentTranslations =
      translations[language]

    const translated =
      getTranslation(
        currentTranslations,
        key
      )

    if (
      translated !== undefined
    ) {
      return translated
    }

    const englishFallback =
      getTranslation(
        translations.en,
        key
      )

    if (
      englishFallback !== undefined
    ) {
      return englishFallback
    }

    if (
      fallback !== undefined
    ) {
      return fallback
    }

    return key
  }

  const value =
    useMemo(
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
    useContext(
      LanguageContext
    )

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    )
  }

  return context
}
