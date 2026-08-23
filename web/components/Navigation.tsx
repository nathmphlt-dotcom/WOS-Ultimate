"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { WOS_PAGES } from "../config/pages"
import { useLanguage } from "./i18n/LanguageContext"

type NavigationProps = {
  collapsed?: boolean
}

const categoryTitles = {
  main: "navigation.categories.main",
  gaming: "navigation.categories.gaming",
  system: "navigation.categories.system",
  tools: "navigation.categories.tools",
} as const

export default function Navigation({
  collapsed = false,
}: NavigationProps) {
  const pathname = usePathname()

  const {
    language,
    setLanguage,
    t,
  } = useLanguage()

  const categories = [
    "main",
    "gaming",
    "system",
    "tools",
  ] as const

  const languageBoxStyle: React.CSSProperties = {
    width: "100%",
    marginBottom: "18px",
    padding: "11px",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "14px",
    background:
      "linear-gradient(145deg, rgba(24,21,36,0.96), rgba(10,11,18,0.94))",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.025), 0 12px 30px rgba(0,0,0,0.22)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
  }

  const languageHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1px 3px 9px",
  }

  const languageTitleStyle: React.CSSProperties = {
    color: "#656978",
    fontSize: "8px",
    fontWeight: 900,
    letterSpacing: "1.7px",
  }

  const languageStatusStyle: React.CSSProperties = {
    minWidth: "25px",
    height: "18px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 6px",
    border: "1px solid rgba(140,66,255,0.22)",
    borderRadius: "6px",
    color: "#a66cff",
    background: "rgba(140,66,255,0.10)",
    fontSize: "7px",
    fontWeight: 900,
    letterSpacing: "0.8px",
  }

  const languageSwitcherStyle: React.CSSProperties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5px",
    padding: "4px",
    border: "1px solid rgba(255,255,255,0.055)",
    borderRadius: "10px",
    background: "rgba(3,4,8,0.88)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
  }

  const getLanguageButtonStyle = (
    active: boolean
  ): React.CSSProperties => ({
    position: "relative",

    width: "100%",
    minWidth: 0,
    minHeight: "38px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",
    padding: "0 7px",

    border: active
      ? "1px solid rgba(166,108,255,0.32)"
      : "1px solid transparent",

    borderRadius: "8px",

    outline: "none",

    color: active
      ? "#ffffff"
      : "#777b8c",

    background: active
      ? "linear-gradient(135deg, rgba(140,66,255,0.38), rgba(98,38,214,0.18))"
      : "rgba(255,255,255,0.018)",

    boxShadow: active
      ? "0 0 20px rgba(140,66,255,0.16), inset 0 0 14px rgba(166,108,255,0.05)"
      : "none",

    fontFamily: "inherit",
    fontSize: "9px",
    fontWeight: 800,

    whiteSpace: "nowrap",

    cursor: "pointer",

    appearance: "none",
    WebkitAppearance: "none",

    WebkitTapHighlightColor: "transparent",

    transition:
      "color 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
  })

  return (
    <nav
      className={`wos-navigation ${
        collapsed ? "is-collapsed" : ""
      }`}
    >
      <div className="wos-navigation-inner">

        {/* =================================================
            LANGUAGE
            ================================================= */}

        {!collapsed && (
          <div
            className="wos-language-box"
            style={languageBoxStyle}
          >
            <div
              className="wos-language-box-header"
              style={languageHeaderStyle}
            >
              <span
                className="wos-language-box-title"
                style={languageTitleStyle}
              >
                LANGUAGE
              </span>

              <span
                className="wos-language-box-status"
                style={languageStatusStyle}
              >
                {language === "th" ? "TH" : "EN"}
              </span>
            </div>

            <div
              className="wos-language-switcher"
              style={languageSwitcherStyle}
            >

              {/* THAI */}

              <button
                type="button"
                className="wos-language-button"
                style={getLanguageButtonStyle(
                  language === "th"
                )}
                onClick={() =>
                  setLanguage("th")
                }
                aria-label="เปลี่ยนเป็นภาษาไทย"
                aria-pressed={
                  language === "th"
                }
              >
                <span
                  className="wos-language-flag"
                  style={{
                    width: "18px",
                    minWidth: "18px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    lineHeight: 1,
                  }}
                >
                  🇹🇭
                </span>

                <span
                  className="wos-language-button-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                  }}
                >
                  ไทย
                </span>

                {language === "th" && (
                  <span
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "6px",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#a66cff",
                      boxShadow:
                        "0 0 8px rgba(166,108,255,0.9)",
                    }}
                  />
                )}
              </button>

              {/* ENGLISH */}

              <button
                type="button"
                className="wos-language-button"
                style={getLanguageButtonStyle(
                  language === "en"
                )}
                onClick={() =>
                  setLanguage("en")
                }
                aria-label="Switch to English"
                aria-pressed={
                  language === "en"
                }
              >
                <span
                  className="wos-language-flag"
                  style={{
                    width: "18px",
                    minWidth: "18px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    lineHeight: 1,
                  }}
                >
                  🇬🇧
                </span>

                <span
                  className="wos-language-button-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                  }}
                >
                  English
                </span>

                {language === "en" && (
                  <span
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "6px",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#a66cff",
                      boxShadow:
                        "0 0 8px rgba(166,108,255,0.9)",
                    }}
                  />
                )}
              </button>

            </div>
          </div>
        )}

        {/* =================================================
            NAVIGATION
            ================================================= */}

        {categories.map((category) => {
          const pages =
            WOS_PAGES.filter(
              (page) =>
                page.category === category
            )

          return (
            <div
              className="wos-navigation-group"
              key={category}
            >
              {!collapsed && (
                <div className="wos-navigation-label">
                  {t(
                    categoryTitles[category]
                  )}
                </div>
              )}

              {pages.map((page) => {
                const active =
                  pathname === page.path ||
                  pathname.startsWith(
                    `${page.path}/`
                  )

                const translatedTitle =
                  page.translationKey
                    ? t(
                        page.translationKey
                      )
                    : page.title

                return (
                  <Link
                    href={page.path}
                    key={page.id}
                    className={`wos-navigation-item ${
                      active
                        ? "active"
                        : ""
                    }`}
                    title={
                      collapsed
                        ? translatedTitle
                        : undefined
                    }
                  >
                    <span className="wos-navigation-icon">
                      {page.icon}
                    </span>

                    {!collapsed && (
                      <span className="wos-navigation-text">
                        {translatedTitle}
                      </span>
                    )}

                    {active && (
                      <span className="wos-navigation-active-line" />
                    )}
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
