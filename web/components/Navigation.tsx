"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { WOS_PAGES } from "../config/pages"

import {
  useLanguage,
} from "./i18n/LanguageContext"

/* =========================================================
   NAVIGATION
   ========================================================= */

type NavigationProps = {
  collapsed?: boolean
}

/* =========================================================
   CATEGORY TRANSLATIONS
   ========================================================= */

const categoryTitles = {
  main: "navigation.categories.main",
  gaming: "navigation.categories.gaming",
  system: "navigation.categories.system",
  tools: "navigation.categories.tools",
} as const

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Navigation({
  collapsed = false,
}: NavigationProps) {
  const pathname =
    usePathname()

  const { t } =
    useLanguage()

  const categories = [
    "main",
    "gaming",
    "system",
    "tools",
  ] as const

  return (
    <nav
      className={`wos-navigation ${
        collapsed
          ? "is-collapsed"
          : ""
      }`}
    >

      <div className="wos-navigation-inner">

        {/* =================================================
            NAVIGATION GROUPS
            ================================================= */}

        {categories.map(
          (category) => {

            const pages =
              WOS_PAGES.filter(
                (page) =>
                  page.category ===
                  category
              )

            /*
             * ไม่สร้าง category
             * ถ้าไม่มีหน้า
             */

            if (
              pages.length === 0
            ) {
              return null
            }

            return (
              <div
                className="wos-navigation-group"
                key={category}
              >

                {/* =========================================
                    CATEGORY TITLE
                    ========================================= */}

                {!collapsed && (
                  <div className="wos-navigation-label">
                    {t(
                      categoryTitles[
                        category
                      ]
                    )}
                  </div>
                )}

                {/* =========================================
                    PAGES
                    ========================================= */}

                {pages.map(
                  (page) => {

                    const active =
                      pathname ===
                        page.path ||
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
                        href={
                          page.path
                        }
                        key={
                          page.id
                        }
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

                        {/* ICON */}

                        <span className="wos-navigation-icon">
                          {
                            page.icon
                          }
                        </span>

                        {/* TEXT */}

                        {!collapsed && (
                          <span className="wos-navigation-text">
                            {
                              translatedTitle
                            }
                          </span>
                        )}

                        {/* ACTIVE LINE */}

                        {active && (
                          <span className="wos-navigation-active-line" />
                        )}

                      </Link>
                    )
                  }
                )}

              </div>
            )
          }
        )}

      </div>

    </nav>
  )
}
