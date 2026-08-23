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

/* =========================================================
   LANGUAGE TYPES
   ========================================================= */

export type Language = "th" | "en"

type TranslationObject = typeof th

type LanguageContextType = {
  language: Language

  setLanguage: (
    language: Language
  ) => void

  t: (
    key: string
  ) => string
}

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations: Record<
  Language,
  TranslationObject
> = {
  th,
  en,
}

/* =========================================================
   CONTEXT
   ========================================================= */

const LanguageContext =
  createContext<
    LanguageContextType | undefined
  >(undefined)

/* =========================================================
   GET NESTED TRANSLATION
   Example:
   t("navigation.optimizer")
   t("dashboard.title")
   ========================================================= */

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

/* =========================================================
   PROVIDER
   ========================================================= */

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

  /* =======================================================
     LOAD SAVED LANGUAGE
     ======================================================= */

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

  /* =======================================================
     CHANGE LANGUAGE
     ======================================================= */

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

  /* =======================================================
     TRANSLATION FUNCTION
     ======================================================= */

  const t = (
    key: string
  ): string => {
    const currentTranslations =
      translations[language]

    const translated =
      getTranslation(
        currentTranslations,
        key
      )

    /*
     * ถ้าหา Translation ไม่เจอ
     * ลอง fallback ไปภาษาอังกฤษ
     */

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

    /*
     * ถ้ายังไม่มี key จริง ๆ
     * คืน key กลับมาแทน
     * เพื่อป้องกันหน้าเว็บพัง
     */

    return key
  }

  /* =======================================================
     CONTEXT VALUE
     ======================================================= */

  const value =
    useMemo(
      () => ({
        language,
        setLanguage,
        t,
      }),
      [language]
    )

  /*
   * ป้องกัน hydration mismatch
   * ตอนโหลดหน้าเว็บครั้งแรก
   */

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

/* =========================================================
   HOOK
   ========================================================= */

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
