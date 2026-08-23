"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { WOS_PAGES } from "../config/pages"
import {
  useLanguage,
} from "./i18n/LanguageContext"

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

  return (
    <nav
      className={`wos-navigation ${
        collapsed ? "is-collapsed" : ""
      }`}
    >
      <div className="wos-navigation-inner">

        {/* =================================================
            LANGUAGE SWITCHER
            ================================================= */}

        {!collapsed && (
          <div className="wos-language-box">

            <div className="wos-language-label">
              LANGUAGE
            </div>

            <div className="wos-language-switcher">

              <button
                type="button"
                className={`wos-language-button ${
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
                className={`wos-language-button ${
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
                    categoryTitles[
                      category
                    ]
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
