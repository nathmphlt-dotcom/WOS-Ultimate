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

      {/* =================================================
          THAI
          ================================================= */}

      <button
        type="button"
        className={`wos-language-option ${
          language === "th"
            ? "active"
            : ""
        }`}
        onClick={() => {
          setLanguage("th")
        }}
        aria-pressed={
          language === "th"
        }
      >

        <span
          className="wos-language-flag"
          aria-hidden="true"
        >
          🇹🇭
        </span>

        <span className="wos-language-label">
          ไทย
        </span>

      </button>

      {/* =================================================
          ENGLISH
          ================================================= */}

      <button
        type="button"
        className={`wos-language-option ${
          language === "en"
            ? "active"
            : ""
        }`}
        onClick={() => {
          setLanguage("en")
        }}
        aria-pressed={
          language === "en"
        }
      >

        <span
          className="wos-language-flag"
          aria-hidden="true"
        >
          🇬🇧
        </span>

        <span className="wos-language-label">
          English
        </span>

      </button>

    </div>
  )
}
