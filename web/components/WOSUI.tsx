"use client"

import React from "react"

import Navigation from "./Navigation"
import LanguageSwitcher from "./LanguageSwitcher"

import { SecurityProvider } from "./security/SecurityContext"

import {
  LanguageProvider,
  useLanguage,
} from "./i18n/LanguageContext"

/* =========================================================
   WOS CONTENT
   ========================================================= */

function WOSContent({
  children,
}: {
  children?: React.ReactNode
}) {
  const { t } = useLanguage()

  return (
    <div className="wos-shell">

      {/* ===================================================
          SIDEBAR
          =================================================== */}

      <aside className="wos-sidebar">

        <div className="wos-brand">

          <div className="wos-brand-mark">
            W
          </div>

          <div className="wos-brand-text">

            <strong>
              WOS
            </strong>

            <span>
              ULTIMATE
            </span>

          </div>

        </div>

        <Navigation />

      </aside>

      {/* ===================================================
          MAIN
          =================================================== */}

      <main className="wos-main">

        {/* =================================================
            TOPBAR
            ================================================= */}

        <header className="wos-topbar">

          <div className="wos-topbar-title">
            WINDOWS OPTIMIZER SUITE
          </div>

          <div className="wos-topbar-actions">

            {/* LANGUAGE */}

            <LanguageSwitcher />

            {/* SYSTEM STATUS */}

            <div className="wos-system-status">

              <span className="wos-status-dot" />

              <span>
                {t(
                  "status.systemReady",
                  "SYSTEM READY"
                )}
              </span>

            </div>

          </div>

        </header>

        {/* =================================================
            PAGE CONTENT
            ================================================= */}

        <section className="wos-content">

          <div className="wos-page-transition">
            {children}
          </div>

        </section>

        {/* =================================================
            STATUS BAR
            ================================================= */}

        <footer className="wos-statusbar">

          <span>
            {t(
              "footer.wosUltimate",
              "WOS Ultimate"
            )}
          </span>

          <span>
            PART 2.8
          </span>

          <span>
            {t(
              "footer.languageSystem",
              "Language System Online"
            )}
          </span>

          <span>
            {t(
              "footer.securityContext",
              "Security Context Online"
            )}
          </span>

        </footer>

      </main>

    </div>
  )
}

/* =========================================================
   WOS UI ROOT
   ========================================================= */

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
