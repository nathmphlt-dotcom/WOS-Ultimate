"use client"

import React from "react"
import Navigation from "./Navigation"
import { SecurityProvider } from "./security/SecurityContext"

export default function WOSUI({
  children,
}: {
  children?: React.ReactNode
}) {
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

            <div className="wos-system-status">
              <span className="wos-status-dot" />
              SYSTEM READY
            </div>
          </div>

          <div className="wos-content">
            {children}
          </div>

          <footer className="wos-statusbar">
            <span>WOS Ultimate</span>
            <span>PART 2.7</span>
            <span>Security Context Online</span>
          </footer>
        </main>
      </div>
    </SecurityProvider>
  )
}
