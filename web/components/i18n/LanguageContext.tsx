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

type TranslationVariables =
  Record<string, string | number>

type LanguageContextType = {
  language: Language

  setLanguage: (
    language: Language
  ) => void

  t: (
    key: string,
    variables?: TranslationVariables
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
   INTERPOLATION
   Supports:

   {{name}}
   {{count}}
   ========================================================= */

function interpolate(
  text: string,
  variables?: TranslationVariables
): string {
  if (!variables) {
    return text
  }

  return text.replace(
    /\{\{(\w+)\}\}/g,
    (
      _match,
      variableName: string
    ) => {
      const value =
        variables[variableName]

      return value === undefined
        ? `{{${variableName}}}`
        : String(value)
    }
  )
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
      // localStorage unavailable
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
      // localStorage unavailable
    }
  }

  /* =======================================================
     TRANSLATION
     ======================================================= */

  const t = (
    key: string,
    variables?: TranslationVariables
  ): string => {
    const currentTranslations =
      translations[language]

    let translated =
      getTranslation(
        currentTranslations,
        key
      )

    /*
     * Fallback English
     */

    if (
      translated === undefined
    ) {
      translated =
        getTranslation(
          translations.en,
          key
        )
    }

    /*
     * Missing key
     */

    if (
      translated === undefined
    ) {
      return key
    }

    return interpolate(
      translated,
      variables
    )
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

  /* =======================================================
     HYDRATION
     ======================================================= */

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
