"use client"

import React from "react"
import Link from "next/link"

const modes = [
  {
    title: "Windows Game Mode",
    status: "READY",
    description:
      "เตรียม Windows Game Mode สำหรับการเล่นเกม",
    icon: "▶",
    accent: "purple",
  },
  {
    title: "Performance Mode",
    status: "READY",
    description:
      "โปรไฟล์เน้นประสิทธิภาพสูงสุดสำหรับ Gaming",
    icon: "⚡",
    accent: "cyan",
  },
  {
    title: "Background Control",
    status: "READY",
    description:
      "ลดผลกระทบจากโปรแกรมเบื้องหลัง",
    icon: "▤",
    accent: "green",
  },
  {
    title: "Power Profile",
    status: "DEFAULT",
    description:
      "ตรวจสอบ Power Plan ของ Windows",
    icon: "◉",
    accent: "orange",
  },
]

const profiles = [
  {
    name: "Balanced",
    description:
      "สมดุลระหว่าง Performance และการใช้พลังงาน",
    icon: "◒",
    recommended: false,
  },
  {
    name: "Gaming",
    description:
      "เน้นประสิทธิภาพสำหรับเกมและ FiveM",
    icon: "▶",
    recommended: true,
  },
  {
    name: "Maximum Performance",
    description:
      "เน้นประสิทธิภาพสูงสุดของระบบ",
    icon: "⚡",
    recommended: false,
  },
]

export default function GameModePage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              GAMING / GAME MODE
            </div>

            <h1>Game Mode</h1>

            <p>
              จัดการ Gaming Profile และ Windows
              Game Mode สำหรับประสิทธิภาพสูงสุด
            </p>
          </div>

          <span className="wos-page-badge">
            READY
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            GAME MODE ENGINE READY
          </div>

          <h2>
            Optimize your{" "}
            <strong>Gaming Mode</strong>
          </h2>

          <p>
            เลือก Gaming Profile ที่เหมาะสม
            และเตรียม Windows สำหรับการเล่นเกม
            โดยไม่เปลี่ยนแปลงค่าระบบจนกว่าจะสั่งใช้จริง
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ▶ Enable Gaming Mode
            </button>

            <Link
              href="/gaming"
              className="wos-button secondary"
            >
              ◈ Gaming Center
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

      {/* STATUS */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              GAME MODE MONITOR
            </div>

            <h2>
              Gaming Controls
            </h2>

          </div>

          <div className="live-status">
            <span />
            ENGINE READY
          </div>

        </div>

        <div className="stats-grid">

          {modes.map((item) => (

            <div
              key={item.title}
              className={`wos-glass-card wos-stat-card accent-${item.accent}`}
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

              <div
                className="stat-value"
                style={{
                  fontSize: 20,
                }}
              >
                {item.status}
              </div>

              <div className="stat-line">

                <div
                  style={{
                    width:
                      item.status === "READY"
                        ? "88%"
                        : "55%",
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

      {/* PROFILES */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              GAMING PROFILES
            </div>

            <h2>
              Performance Profile
            </h2>

          </div>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: 12,
          }}
        >

          {profiles.map((profile) => (

            <button
              key={profile.name}
              type="button"
              className="wos-glass-card"
              style={{
                padding: 20,
                textAlign: "left",
                color: "#fff",
                cursor: "pointer",
                border:
                  profile.recommended
                    ? "1px solid rgba(140,66,255,0.3)"
                    : "1px solid rgba(255,255,255,0.065)",
                background:
                  profile.recommended
                    ? "rgba(140,66,255,0.07)"
                    : "rgba(17,18,27,0.72)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >

                <div
                  style={{
                    width: 38,
                    height: 38,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 10,
                    color:
                      profile.recommended
                        ? "#aa71ff"
                        : "#8e92a5",
                    background:
                      profile.recommended
                        ? "rgba(140,66,255,0.1)"
                        : "rgba(255,255,255,0.035)",
                    fontSize: 17,
                  }}
                >
                  {profile.icon}
                </div>

                {profile.recommended && (
                  <span
                    className="wos-page-badge"
                    style={{
                      color: "#aa71ff",
                    }}
                  >
                    RECOMMENDED
                  </span>
                )}

              </div>

              <h3
                style={{
                  margin: "17px 0 6px",
                  fontSize: 13,
                }}
              >
                {profile.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--wos-muted)",
                  fontSize: 9,
                  lineHeight: 1.7,
                }}
              >
                {profile.description}
              </p>

              <div
                style={{
                  marginTop: 16,
                  color:
                    profile.recommended
                      ? "#aa71ff"
                      : "#686d80",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                SELECT PROFILE →
              </div>

            </button>

          ))}

        </div>

      </section>

      {/* CURRENT PROFILE */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              ACTIVE PROFILE
            </div>

            <h2>
              Current Configuration
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
                "repeat(4, minmax(0, 1fr))",
              gap: 12,
            }}
          >

            <div
              style={{
                padding: 15,
                borderRadius: 11,
                background:
                  "rgba(255,255,255,0.025)",
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
                  marginTop: 7,
                  fontSize: 16,
                }}
              >
                Gaming
              </strong>
            </div>

            <div
              style={{
                padding: 15,
                borderRadius: 11,
                background:
                  "rgba(255,255,255,0.025)",
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
                GAME MODE
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: 7,
                  fontSize: 16,
                  color: "#4de8a4",
                }}
              >
                READY
              </strong>
            </div>

            <div
              style={{
                padding: 15,
                borderRadius: 11,
                background:
                  "rgba(255,255,255,0.025)",
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
                POWER
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: 7,
                  fontSize: 16,
                }}
              >
                Gaming
              </strong>
            </div>

            <div
              style={{
                padding: 15,
                borderRadius: 11,
                background:
                  "rgba(255,255,255,0.025)",
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
                  marginTop: 7,
                  fontSize: 16,
                  color: "#4de8a4",
                }}
              >
                READY
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* NOTICE */}
      <section
        className="wos-glass-card"
        style={{
          marginTop: 20,
          padding: 20,
          borderColor:
            "rgba(0,220,255,0.1)",
          background:
            "rgba(0,220,255,0.025)",
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
              color: "#45e7ff",
              background:
                "rgba(0,220,255,0.08)",
            }}
          >
            i
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Game Mode Engine
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
              ตอนนี้เป็น UI Architecture
              สำหรับ Game Mode ก่อนเชื่อมต่อ
              Windows Optimization Engine จริง
              ในขั้นตอน Backend และ Windows EXE
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          GAME MODE ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / GAME MODE
        </div>

      </footer>

    </div>
  )
      }
