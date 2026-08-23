"use client"

import React from "react"

import {
  useLanguage,
} from "./i18n/LanguageContext"

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage()

  return (
    <div
      className="wos-language-switch"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={
          language === "th"
            ? "wos-language-option active"
            : "wos-language-option"
        }
        onClick={() => setLanguage("th")}
        aria-pressed={language === "th"}
      >
        <span className="wos-language-flag">
          🇹🇭
        </span>

        <span className="wos-language-label">
          ไทย
        </span>
      </button>

      <button
        type="button"
        className={
          language === "en"
            ? "wos-language-option active"
            : "wos-language-option"
        }
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        <span className="wos-language-flag">
          🇬🇧
        </span>

        <span className="wos-language-label">
          English
        </span>
      </button>
    </div>
  )
}
