"use client"

import React from "react"
import Navigation from "./Navigation"

import {
  SecurityProvider,
} from "./security/SecurityContext"

import {
  LanguageProvider,
  useLanguage,
} from "../context/LanguageContext"

import LanguageSwitcher from "./language/LanguageSwitcher"

function WOSLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const { t } = useLanguage()

  return (
    <SecurityProvider>
      <div className="wos-shell">

        <aside className="wos-sidebar">

          <div className="wos-brand">
            <div className="wos-brand-mark">
              W
            </div>

            <div className="wos-brand-text">
              <strong>WOS</strong>
              <span>ULTIMATE</span>
            </div>
          </div>

          <Navigation />

        </aside>

        <main className="wos-main">

          <div className="wos-topbar">

            <div className="wos-topbar-title">
              WINDOWS OPTIMIZER SUITE
            </div>

            <div className="wos-topbar-actions">

              <LanguageSwitcher />

              <div className="wos-system-status">
                <span className="wos-status-dot" />
                {t("topbar.systemReady")}
              </div>

            </div>

          </div>

          <div className="wos-content">
            {children}
          </div>

          <footer className="wos-statusbar">

            <span>
              {t("common.appName")}
            </span>

            <span>
              PART 2.8-L
            </span>

            <span>
              Language System Online
            </span>

          </footer>

        </main>

      </div>
    </SecurityProvider>
  )
}

export default function WOSUI({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <WOSLayout>
        {children}
      </WOSLayout>
    </LanguageProvider>
  )
}
