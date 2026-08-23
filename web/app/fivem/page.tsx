"use client"

import React from "react"
import Link from "next/link"

const fivemModules = [
  {
    title: "FiveM Status",
    value: "READY",
    description: "ตรวจสอบสถานะ FiveM และ Gaming Environment",
    icon: "◈",
    accent: "purple",
  },
  {
    title: "FPS Optimization",
    value: "READY",
    description: "เตรียมระบบสำหรับปรับแต่งประสิทธิภาพ FiveM",
    icon: "⚡",
    accent: "cyan",
  },
  {
    title: "Network",
    value: "ONLINE",
    description: "ตรวจสอบ Network สำหรับการเล่น FiveM",
    icon: "⌁",
    accent: "green",
  },
  {
    title: "Game Profile",
    value: "DEFAULT",
    description: "โปรไฟล์การตั้งค่า FiveM ปัจจุบัน",
    icon: "▣",
    accent: "orange",
  },
]

const optimizations = [
  {
    title: "FPS Optimization",
    description:
      "เตรียมค่าปรับแต่ง CPU, GPU และ Windows สำหรับ FiveM",
    icon: "⚡",
    status: "READY",
  },
  {
    title: "Input Latency",
    description:
      "เตรียมระบบสำหรับลด Input Latency ในเกม",
    icon: "⌁",
    status: "READY",
  },
  {
    title: "Network Optimization",
    description:
      "เตรียมค่าปรับแต่ง Network สำหรับ Gaming",
    icon: "◉",
    status: "READY",
  },
  {
    title: "Background Control",
    description:
      "ตรวจสอบโปรแกรมเบื้องหลังที่อาจกระทบ FPS",
    icon: "▤",
    status: "CHECK",
  },
]

export default function FiveMPage() {
  return (
    <div className="wos-page-transition">
      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              GAMING / FIVEM
            </div>

            <h1>FiveM Optimizer</h1>

            <p>
              ศูนย์ควบคุม Optimization สำหรับ FiveM
              และ Gaming Performance
            </p>
          </div>

          <span
            className="wos-page-badge"
            style={{
              color: "#aa71ff",
            }}
          >
            FIVEM READY
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            FIVEM OPTIMIZATION ENGINE READY
          </div>

          <h2>
            Boost your{" "}
            <strong>FiveM Experience</strong>
          </h2>

          <p>
            รวมระบบ Optimization สำหรับ FiveM
            เพื่อเตรียมปรับปรุง FPS, Input Latency,
            Network และ Background Processes
            ภายใน WOS
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="wos-button primary"
            >
              ⚡ Optimize FiveM
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
            <span>FIVEM</span>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              FIVEM MONITOR
            </div>

            <h2>Gaming Environment</h2>
          </div>

          <div className="live-status">
            <span />
            ENGINE READY
          </div>
        </div>

        <div className="stats-grid">
          {fivemModules.map((item) => (
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
                        : item.value === "READY"
                          ? "86%"
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

      {/* OPTIMIZATION MODULES */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              FIVEM OPTIMIZATION
            </div>

            <h2>Optimization Modules</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: 12,
          }}
        >
          {optimizations.map((item) => (
            <button
              key={item.title}
              type="button"
              className="wos-glass-card"
              style={{
                minHeight: 120,
                padding: 18,
                border:
                  "1px solid rgba(255,255,255,0.065)",
                color: "#fff",
                textAlign: "left",
                cursor: "pointer",
                transition: "0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 13,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    minWidth: 36,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 10,
                    color: "#aa71ff",
                    background:
                      "rgba(140,66,255,0.09)",
                    fontSize: 16,
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                      gap: 10,
                    }}
                  >
                    <strong
                      style={{
                        fontSize: 12,
                      }}
                    >
                      {item.title}
                    </strong>

                    <span className="wos-page-badge">
                      {item.status}
                    </span>
                  </div>

                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "var(--wos-muted)",
                      fontSize: 9,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* QUICK LINKS */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              QUICK ACCESS
            </div>

            <h2>Gaming Tools</h2>
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
          <Link
            href="/gaming"
            className="wos-glass-card"
            style={{
              padding: 18,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <div className="action-icon">
              ◈
            </div>

            <h3
              style={{
                margin: "12px 0 4px",
                fontSize: 12,
              }}
            >
              Gaming Center
            </h3>

            <p
              style={{
                margin: 0,
                color: "var(--wos-muted)",
                fontSize: 9,
              }}
            >
              เปิด Gaming Dashboard
            </p>
          </Link>

          <Link
            href="/gaming/game-mode"
            className="wos-glass-card"
            style={{
              padding: 18,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <div className="action-icon">
              ▶
            </div>

            <h3
              style={{
                margin: "12px 0 4px",
                fontSize: 12,
              }}
            >
              Game Mode
            </h3>

            <p
              style={{
                margin: 0,
                color: "var(--wos-muted)",
                fontSize: 9,
              }}
            >
              จัดการ Windows Game Mode
            </p>
          </Link>

          <Link
            href="/gaming/network"
            className="wos-glass-card"
            style={{
              padding: 18,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <div className="action-icon">
              ⌁
            </div>

            <h3
              style={{
                margin: "12px 0 4px",
                fontSize: 12,
              }}
            >
              Gaming Network
            </h3>

            <p
              style={{
                margin: 0,
                color: "var(--wos-muted)",
                fontSize: 9,
              }}
            >
              ตรวจสอบ Network Gaming
            </p>
          </Link>
        </div>
      </section>

      {/* NOTICE */}
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
              FiveM Optimization Engine
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              หน้านี้เป็น CyberGlass UI และ
              Architecture Layer ก่อนเชื่อมต่อ
              FiveM Optimization Engine จริง
              ในขั้นตอน Backend / Windows EXE
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="system-footer">
        <div>
          <span className="footer-dot" />
          FIVEM ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / FIVEM OPTIMIZER
        </div>
      </footer>
    </div>
  )
      }
