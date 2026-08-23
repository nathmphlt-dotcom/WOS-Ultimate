"use client"

import React from "react"

import {
  useLanguage,
} from "../context/LanguageContext"

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage()

  return (
    <div className="wos-language-switch">

      <button
        type="button"
        className={`wos-language-option ${
          language === "th"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setLanguage("th")
        }
        aria-label="เปลี่ยนเป็นภาษาไทย"
      >
        <span className="wos-language-flag">
          🇹🇭
        </span>

        <span>
          ไทย
        </span>
      </button>

      <button
        type="button"
        className={`wos-language-option ${
          language === "en"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setLanguage("en")
        }
        aria-label="Switch to English"
      >
        <span className="wos-language-flag">
          🇬🇧
        </span>

        <span>
          English
        </span>
      </button>

    </div>
  )
}
