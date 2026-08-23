"use client"

import React from "react"
import Link from "next/link"

const optimizationItems = [
  {
    title: "CPU Optimization",
    description:
      "Reduce unnecessary CPU background workload.",
    icon: "◒",
    status: "READY",
    value: "32%",
  },
  {
    title: "GPU Optimization",
    description:
      "Prepare GPU scheduling for gaming workloads.",
    icon: "◈",
    status: "READY",
    value: "67%",
  },
  {
    title: "Memory Optimization",
    description:
      "Clean unnecessary memory usage and improve availability.",
    icon: "▤",
    status: "READY",
    value: "48%",
  },
  {
    title: "Background Services",
    description:
      "Analyze unnecessary background Windows services.",
    icon: "⚙",
    status: "READY",
    value: "12",
  },
]

const optimizationModes = [
  {
    title: "Safe Optimization",
    description:
      "Apply conservative changes designed for everyday use.",
    icon: "◆",
  },
  {
    title: "Gaming Optimization",
    description:
      "Prioritize gaming performance and reduce background activity.",
    icon: "▶",
  },
  {
    title: "Advanced Optimization",
    description:
      "Use advanced system tuning options.",
    icon: "⚡",
  },
]

export default function OptimizerPage() {
  return (
    <div className="wos-page-transition">
      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              PERFORMANCE ENGINE
            </div>

            <h1>Optimizer</h1>

            <p>
              Windows optimization and performance
              control center
            </p>
          </div>

          <span className="wos-page-badge">
            READY
          </span>
        </div>
      </section>

      {/* MAIN CONTROL */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            OPTIMIZATION ENGINE READY
          </div>

          <h2>
            Boost your{" "}
            <strong>System Performance</strong>
          </h2>

          <p>
            Analyze your Windows environment and
            prepare optimization tasks before making
            system changes.
          </p>

          <div className="hero-buttons">
            <button
              className="wos-button primary"
              type="button"
            >
              ⚡ Start Optimization
            </button>

            <Link
              href="/scanner"
              className="wos-button secondary"
            >
              ◉ Run System Scan
            </Link>
          </div>
        </div>

        <div className="hero-orb">
          <div className="orb-core">
            <span>OPT</span>
          </div>
        </div>
      </section>

      {/* SYSTEM ANALYSIS */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SYSTEM ANALYSIS
            </div>

            <h2>Optimization Status</h2>
          </div>

          <div className="live-status">
            <span />
            READY
          </div>
        </div>

        <div className="stats-grid">
          {optimizationItems.map((item) => (
            <div
              key={item.title}
              className="wos-glass-card wos-stat-card"
            >
              <div className="stat-top">
                <div className="stat-icon">
                  {item.icon}
                </div>

                <span className="wos-page-badge">
                  {item.status}
                </span>
              </div>

              <div className="stat-title">
                {item.title}
              </div>

              <div className="stat-value">
                {item.value}
                {item.title !==
                  "Background Services" && (
                  <span>%</span>
                )}
              </div>

              <div className="stat-line">
                <div
                  style={{
                    width:
                      item.title ===
                      "Background Services"
                        ? "35%"
                        : item.value,
                  }}
                />
              </div>

              <p
                style={{
                  margin: "12px 0 0",
                  color: "var(--wos-muted)",
                  fontSize: "9px",
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIMIZATION MODES */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              OPTIMIZATION PROFILES
            </div>

            <h2>Select Optimization Mode</h2>
          </div>
        </div>

        <div className="actions-grid">
          {optimizationModes.map((mode, index) => (
            <button
              key={mode.title}
              type="button"
              className={`wos-glass-card wos-action-card ${
                index === 0
                  ? "accent-green"
                  : index === 1
                    ? "accent-purple"
                    : "accent-orange"
              }`}
              style={{
                border: "1px solid rgba(255,255,255,0.065)",
                color: "inherit",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <div className="action-card-button">
                <div className="action-icon">
                  {mode.icon}
                </div>

                <h3>{mode.title}</h3>

                <p>{mode.description}</p>
              </div>
            </button>
          ))}

          <Link
            href="/settings"
            className="wos-glass-card wos-action-card accent-cyan"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="action-card-button">
              <div className="action-icon">
                ⚙
              </div>

              <h3>Optimizer Settings</h3>

              <p>
                Configure optimization preferences
                and system behavior.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* WARNING / SAFETY */}
      <section
        className="wos-glass-card"
        style={{
          marginTop: 20,
          padding: 20,
          borderColor:
            "rgba(255,180,93,0.12)",
          background:
            "rgba(255,180,93,0.025)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              minWidth: 34,
              display: "grid",
              placeItems: "center",
              borderRadius: 9,
              color: "#ffb45d",
              background:
                "rgba(255,180,93,0.08)",
            }}
          >
            !
          </div>

          <div>
            <strong
              style={{
                fontSize: 11,
              }}
            >
              Safe Optimization Mode
            </strong>

            <p
              style={{
                margin:
                  "6px 0 0",
                color:
                  "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              WOS will analyze the system before
              applying optimization changes. The
              actual optimization engine will be
              connected in a later development phase.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="system-footer">
        <div>
          <span className="footer-dot" />
          OPTIMIZATION ENGINE ONLINE
        </div>

        <div>
          WOS ULTIMATE / OPTIMIZER
        </div>
      </footer>
    </div>
  )
}
