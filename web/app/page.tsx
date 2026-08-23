"use client"

import React from "react"
import Link from "next/link"

const stats = [
  {
    label: "CPU USAGE",
    value: "32",
    unit: "%",
    icon: "◒",
    progress: 32,
  },
  {
    label: "RAM USAGE",
    value: "48",
    unit: "%",
    icon: "▤",
    progress: 48,
  },
  {
    label: "GPU USAGE",
    value: "67",
    unit: "%",
    icon: "◈",
    progress: 67,
  },
  {
    label: "SYSTEM HEALTH",
    value: "98",
    unit: "%",
    icon: "◆",
    progress: 98,
  },
]

const actions = [
  {
    title: "Optimize Windows",
    description: "Apply safe system optimizations",
    icon: "⚡",
    href: "/optimizer",
    accent: "purple",
  },
  {
    title: "System Scanner",
    description: "Scan Windows for optimization issues",
    icon: "◉",
    href: "/scanner",
    accent: "cyan",
  },
  {
    title: "Gaming Boost",
    description: "Prepare Windows for gaming",
    icon: "▶",
    href: "/gaming",
    accent: "green",
  },
  {
    title: "FiveM Optimizer",
    description: "Optimize your FiveM gaming environment",
    icon: "◈",
    href: "/fivem",
    accent: "orange",
  },
]

export default function DashboardPage() {
  return (
    <div className="wos-page-transition">
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              SYSTEM OVERVIEW
            </div>

            <h1>Dashboard</h1>

            <p>
              Windows Optimizer Suite control center
            </p>
          </div>

          <span className="wos-page-badge">
            ONLINE
          </span>
        </div>
      </section>

      <section className="hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            SYSTEM READY
          </div>

          <h2>
            Optimize your{" "}
            <strong>Windows Experience</strong>
          </h2>

          <p>
            WOS Ultimate provides a centralized
            CyberGlass control center for Windows
            optimization, gaming performance,
            network tuning and system maintenance.
          </p>

          <div className="hero-buttons">
            <Link
              href="/optimizer"
              className="wos-button primary"
            >
              ⚡ Optimize Now
            </Link>

            <Link
              href="/scanner"
              className="wos-button secondary"
            >
              ◉ Scan System
            </Link>
          </div>
        </div>

        <div className="hero-orb">
          <div className="orb-core">
            <span>WOS</span>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SYSTEM MONITOR
            </div>

            <h2>Live Performance</h2>
          </div>

          <div className="live-status">
            <span />
            LIVE
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div
              className="wos-glass-card wos-stat-card"
              key={stat.label}
            >
              <div className="stat-top">
                <div className="stat-icon">
                  {stat.icon}
                </div>
              </div>

              <div className="stat-title">
                {stat.label}
              </div>

              <div className="stat-value">
                {stat.value}
                <span>{stat.unit}</span>
              </div>

              <div className="stat-line">
                <div
                  style={{
                    width: `${stat.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              QUICK ACTIONS
            </div>

            <h2>Optimization Center</h2>
          </div>
        </div>

        <div className="actions-grid">
          {actions.map((action) => (
            <Link
              href={action.href}
              key={action.title}
              className={`wos-glass-card wos-action-card accent-${action.accent}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="action-card-button">
                <div className="action-icon">
                  {action.icon}
                </div>

                <h3>{action.title}</h3>

                <p>{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="system-footer">
        <div>
          <span className="footer-dot" />
          WOS SYSTEM ONLINE
        </div>

        <div>
          WINDOWS OPTIMIZER SUITE
        </div>
      </footer>
    </div>
  )
}
