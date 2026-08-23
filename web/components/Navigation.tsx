"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "../context/LanguageContext"

const navigationItems = [
  {
    href: "/",
    key: "navigation.dashboard",
    icon: "⌂",
  },
  {
    href: "/optimizer",
    key: "navigation.optimizer",
    icon: "⚡",
  },
  {
    href: "/scanner",
    key: "navigation.scanner",
    icon: "◉",
  },
  {
    href: "/security",
    key: "navigation.security",
    icon: "◆",
  },
  {
    href: "/fivem",
    key: "navigation.fivem",
    icon: "◈",
  },
  {
    href: "/settings",
    key: "navigation.settings",
    icon: "⚙",
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <nav className="wos-navigation">

      {navigationItems.map((item) => {
        const active =
          pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "wos-nav-item active"
                : "wos-nav-item"
            }
          >
            <span className="wos-nav-icon">
              {item.icon}
            </span>

            <span className="wos-nav-label">
              {t(item.key)}
            </span>
          </Link>
        )
      })}

    </nav>
  )
}
