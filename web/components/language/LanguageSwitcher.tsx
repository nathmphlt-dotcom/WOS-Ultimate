"use client"

import {
  SUPPORTED_LANGUAGES,
} from "../../config/languages"

import {
  useLanguage,
} from "../../context/LanguageContext"

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage()

  return (
    <div className="language-switcher">

      {SUPPORTED_LANGUAGES.map(
        (item) => {
          const active =
            language === item.id

          return (
            <button
              key={item.id}
              type="button"
              className={
                active
                  ? "language-button active"
                  : "language-button"
              }
              onClick={() =>
                setLanguage(item.id)
              }
            >
              {item.id === "th"
                ? "🇹🇭"
                : "🇬🇧"}

              <span>
                {item.nativeName}
              </span>
            </button>
          )
        }
      )}

    </div>
  )
                }
