"use client"

import React from "react"

import Navigation from "./Navigation"
import { SecurityProvider } from "./security/SecurityContext"

import {
  LanguageProvider,
  useLanguage,
} from "../context/LanguageContext"

function WOSContent({
  children,
}: {
  children?: React.ReactNode
}) {
  const { t } = useLanguage()

  return (
    <div className="wos-shell">

      <aside className="wos-sidebar">

        <div className="wos-brand">

          <div className="wos-brand-mark">
            W
          </div>

          <div className="wos-brand-text">
            <strong>WOS</strong>

            <span>
              ULTIMATE
            </span>
          </div>

        </div>

        <Navigation />

      </aside>

      <main className="wos-main">

        <header className="wos-topbar">

          <div className="wos-topbar-title">
            WINDOWS OPTIMIZER SUITE
          </div>

          <div className="wos-system-status">

            <span className="wos-status-dot" />

            <span>
              {t("status.systemReady")}
            </span>

          </div>

        </header>

        <section className="wos-content">

          <div className="wos-page-transition">
            {children}
          </div>

        </section>

        <footer className="wos-statusbar">

          <span>
            {t("footer.wosUltimate")}
          </span>

          <span>
            PART 2.8
          </span>

          <span>
            {t("footer.languageSystem")}
          </span>

          <span>
            {t("footer.securityContext")}
          </span>

        </footer>

      </main>

    </div>
  )
}

export default function WOSUI({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <LanguageProvider>

      <SecurityProvider>

        <WOSContent>
          {children}
        </WOSContent>

      </SecurityProvider>

    </LanguageProvider>
  )
}
