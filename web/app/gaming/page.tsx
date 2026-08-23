"use client"

import React from "react"
import Link from "next/link"

const gamingStats = [
  {
    title: "Gaming Mode",
    value: "READY",
    description: "โปรไฟล์ Gaming พร้อมใช้งาน",
    icon: "▶",
    accent: "purple",
  },
  {
    title: "GPU Profile",
    value: "READY",
    description: "โปรไฟล์ GPU สำหรับ Gaming",
    icon: "◈",
    accent: "cyan",
  },
  {
    title: "Network",
    value: "ONLINE",
    description: "Gaming Network พร้อมใช้งาน",
    icon: "⌁",
    accent: "green",
  },
  {
    title: "FPS Engine",
    value: "READY",
    description: "Optimization Engine พร้อมทำงาน",
    icon: "⚡",
    accent: "orange",
  },
]

const gamingActions = [
  {
    title: "Game Mode",
    description:
      "จัดการ Windows Game Mode และ Gaming Profile",
    icon: "▶",
    href: "/gaming/game-mode",
    accent: "purple",
  },
  {
    title: "Gaming Network",
    description:
      "ตรวจสอบและเตรียม Network สำหรับ Gaming",
    icon: "⌁",
    href: "/gaming/network",
    accent: "cyan",
  },
  {
    title: "FiveM Optimizer",
    description:
      "เปิดศูนย์ Optimization สำหรับ FiveM",
    icon: "◈",
    href: "/fivem",
    accent: "green",
  },
  {
    title: "System Optimizer",
    description:
      "ปรับแต่ง Windows สำหรับ Gaming",
    icon: "⚡",
    href: "/optimizer",
    accent: "orange",
  },
]

export default function GamingPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              GAMING CENTER
            </div>

            <h1>Gaming</h1>

            <p>
              ศูนย์กลางควบคุม Gaming Performance
              และ Game Optimization ของ WOS
            </p>
          </div>

          <span className="wos-page-badge">
            GAMING READY
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            GAMING ENGINE ONLINE
          </div>

          <h2>
            Maximize your{" "}
            <strong>Gaming Performance</strong>
          </h2>

          <p>
            รวมเครื่องมือสำหรับ Gaming Mode,
            GPU Profile, Network Optimization,
            FPS Optimization และ FiveM
            ไว้ในศูนย์กลางเดียว
          </p>

          <div className="hero-buttons">

            <Link
              href="/optimizer"
              className="wos-button primary"
            >
              ⚡ Start Optimization
            </Link>

            <Link
              href="/fivem"
              className="wos-button secondary"
            >
              ◈ FiveM Optimizer
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">

            <span>
              GAME
            </span>

          </div>

        </div>

      </section>

      {/* GAMING STATUS */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              GAMING MONITOR
            </div>

            <h2>
              Gaming Environment
            </h2>

          </div>

          <div className="live-status">
            <span />
            ONLINE
          </div>

        </div>

        <div className="stats-grid">

          {gamingStats.map((item) => (

            <div
              key={item.title}
              className={`wos-glass-card wos-stat-card accent-${item.accent}`}
            >

              <div className="stat-top">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <span className="wos-page-badge">
                  {item.value}
                </span>

              </div>

              <div className="stat-title">
                {item.title}
              </div>

              <div
                className="stat-value"
                style={{
                  fontSize: 21,
                }}
              >
                {item.value}
              </div>

              <div className="stat-line">

                <div
                  style={{
                    width:
                      item.value === "ONLINE"
                        ? "100%"
                        : "85%",
                  }}
                />

              </div>

              <p
                style={{
                  margin: "12px 0 0",
                  color: "var(--wos-muted)",
                  fontSize: 9,
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* GAMING ACTIONS */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              GAMING CONTROL
            </div>

            <h2>
              Gaming Modules
            </h2>

          </div>

        </div>

        <div className="actions-grid">

          {gamingActions.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className={`wos-glass-card wos-action-card accent-${item.accent}`}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >

              <div
                className="action-card-button"
                style={{
                  display: "block",
                }}
              >

                <div className="action-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* PERFORMANCE PROFILE */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              PERFORMANCE PROFILE
            </div>

            <h2>
              Current Gaming Profile
            </h2>

          </div>

        </div>

        <div
          className="wos-glass-card"
          style={{
            padding: 20,
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: 12,
            }}
          >

            <div
              style={{
                padding: 16,
                borderRadius: 12,
                background:
                  "rgba(255,255,255,0.025)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
              }}
            >

              <span
                style={{
                  color: "#707588",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                PROFILE
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: 8,
                  fontSize: 18,
                }}
              >
                Gaming
              </strong>

              <small
                style={{
                  display: "block",
                  marginTop: 5,
                  color:
                    "var(--wos-muted)",
                  fontSize: 9,
                }}
              >
                Default Gaming Profile
              </small>

            </div>

            <div
              style={{
                padding: 16,
                borderRadius: 12,
                background:
                  "rgba(255,255,255,0.025)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
              }}
            >

              <span
                style={{
                  color: "#707588",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                TARGET
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: 8,
                  fontSize: 18,
                }}
              >
                FPS
              </strong>

              <small
                style={{
                  display: "block",
                  marginTop: 5,
                  color:
                    "var(--wos-muted)",
                  fontSize: 9,
                }}
              >
                Maximum Performance
              </small>

            </div>

            <div
              style={{
                padding: 16,
                borderRadius: 12,
                background:
                  "rgba(255,255,255,0.025)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
              }}
            >

              <span
                style={{
                  color: "#707588",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                STATUS
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: 8,
                  fontSize: 18,
                  color: "#4de8a4",
                }}
              >
                READY
              </strong>

              <small
                style={{
                  display: "block",
                  marginTop: 5,
                  color:
                    "var(--wos-muted)",
                  fontSize: 9,
                }}
              >
                Waiting for Optimization
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* INFO */}
      <section
        className="wos-glass-card"
        style={{
          marginTop: 20,
          padding: 20,
          borderColor:
            "rgba(140,66,255,0.12)",
          background:
            "rgba(140,66,255,0.025)",
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
              color: "#aa71ff",
              background:
                "rgba(140,66,255,0.09)",
            }}
          >
            ◈
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Gaming Optimization Engine
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color:
                  "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              Gaming Center เป็นศูนย์กลางของ
              Gaming Architecture โดยจะเชื่อมต่อ
              Game Mode, Network, FiveM และ
              Optimization Engine ในขั้นตอนต่อไป
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          GAMING ENGINE ONLINE
        </div>

        <div>
          WOS ULTIMATE / GAMING CENTER
        </div>

      </footer>

    </div>
  )
    }
