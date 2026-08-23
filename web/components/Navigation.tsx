"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WOS_PAGES } from "../config/pages"

type NavigationProps = {
  collapsed?: boolean
}

const categoryTitles = {
  main: "MAIN",
  gaming: "GAMING",
  system: "SYSTEM",
  tools: "TOOLS",
}

export default function Navigation({
  collapsed = false,
}: NavigationProps) {
  const pathname = usePathname()

  const categories = ["main", "gaming", "system", "tools"] as const

  return (
    <nav
      className={`wos-navigation ${
        collapsed ? "is-collapsed" : ""
      }`}
    >
      <div className="wos-navigation-inner">
        {categories.map((category) => {
          const pages = WOS_PAGES.filter(
            (page) => page.category === category
          )

          return (
            <div
              className="wos-navigation-group"
              key={category}
            >
              {!collapsed && (
                <div className="wos-navigation-label">
                  {categoryTitles[category]}
                </div>
              )}

              {pages.map((page) => {
                const active =
                  pathname === page.path ||
                  pathname.startsWith(`${page.path}/`)

                return (
                  <Link
                    href={page.path}
                    key={page.id}
                    className={`wos-navigation-item ${
                      active ? "active" : ""
                    }`}
                    title={collapsed ? page.title : undefined}
                  >
                    <span className="wos-navigation-icon">
                      {page.icon}
                    </span>

                    {!collapsed && (
                      <span className="wos-navigation-text">
                        {page.title}
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
