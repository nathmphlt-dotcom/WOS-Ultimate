"use client"

import React from "react"
import Link from "next/link"

const networkStats = [
  {
    title: "Network Status",
    value: "ONLINE",
    description: "ตรวจพบ Network Connection",
    icon: "⌁",
    accent: "cyan",
  },
  {
    title: "Connection",
    value: "READY",
    description: "Gaming Connection พร้อมใช้งาน",
    icon: "◉",
    accent: "green",
  },
  {
    title: "DNS Profile",
    value: "AUTO",
    description: "DNS Configuration ปัจจุบัน",
    icon: "◆",
    accent: "purple",
  },
  {
    title: "Optimization",
    value: "READY",
    description: "Network Optimization Engine",
    icon: "⚡",
    accent: "orange",
  },
]

const networkModules = [
  {
    title: "Network Scanner",
    description: "ตรวจสอบสถานะ Network Adapter และ Connection",
    icon: "⌁",
    accent: "cyan",
  },
  {
    title: "DNS Optimization",
    description: "เตรียมโปรไฟล์ DNS สำหรับ Gaming",
    icon: "◆",
    accent: "purple",
  },
  {
    title: "Latency Monitor",
    description: "เตรียมระบบตรวจสอบ Latency และ Connection",
    icon: "◉",
    accent: "green",
  },
  {
    title: "Network Profile",
    description: "จัดการ Gaming Network Profile",
    icon: "⚡",
    accent: "orange",
  },
]

const profiles = [
  {
    name: "Default",
    description: "ใช้ค่าการเชื่อมต่อปัจจุบันของ Windows",
    active: true,
  },
  {
    name: "Gaming",
    description: "โปรไฟล์สำหรับ Gaming และ FiveM",
    active: false,
  },
  {
    name: "Low Latency",
    description: "โปรไฟล์เน้นลด Latency",
    active: false,
  },
]

export default function GamingNetworkPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              GAMING / NETWORK
            </div>

            <h1>Gaming Network</h1>

            <p>
              ศูนย์กลาง Network Optimization
              สำหรับ Gaming และ FiveM
            </p>
          </div>

          <span className="wos-page-badge">
            NETWORK READY
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            NETWORK ENGINE ONLINE
          </div>

          <h2>
            Optimize your{" "}
            <strong>Gaming Network</strong>
          </h2>

          <p>
            ตรวจสอบ Connection, DNS, Latency
            และ Network Profile เพื่อเตรียมระบบ
            สำหรับ Gaming โดยไม่แก้ไขค่าระบบจริง
            จนกว่าจะสั่งใช้งาน
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ⌁ Scan Network
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
              NET
            </span>

          </div>

        </div>

      </section>

      {/* NETWORK STATUS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              NETWORK MONITOR
            </div>

            <h2>
              Connection Status
            </h2>
          </div>

          <div className="live-status">
            <span />
            ONLINE
          </div>

        </div>

        <div className="stats-grid">

          {networkStats.map((item) => (

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
                  fontSize: 20,
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

      {/* NETWORK MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              NETWORK CONTROL
            </div>

            <h2>
              Network Modules
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {networkModules.map((item) => (

            <button
              key={item.title}
              type="button"
              className={`wos-glass-card wos-action-card accent-${item.accent}`}
              style={{
                border: "1px solid rgba(255,255,255,0.065)",
                color: "#fff",
                background: "rgba(17,18,27,0.72)",
                textAlign: "left",
                cursor: "pointer",
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

            </button>

          ))}

        </div>

      </section>

      {/* NETWORK PROFILE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              NETWORK PROFILES
            </div>

            <h2>
              Connection Profile
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
                border: profile.active
                  ? "1px solid rgba(0,220,255,0.25)"
                  : "1px solid rgba(255,255,255,0.065)",
                background: profile.active
                  ? "rgba(0,220,255,0.045)"
                  : "rgba(17,18,27,0.72)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                    color: profile.active
                      ? "#45e7ff"
                      : "#85899b",
                    background: profile.active
                      ? "rgba(0,220,255,0.08)"
                      : "rgba(255,255,255,0.035)",
                    fontSize: 17,
                  }}
                >
                  ⌁
                </div>

                {profile.active && (
                  <span
                    className="wos-page-badge"
                    style={{
                      color: "#45e7ff",
                      borderColor:
                        "rgba(0,220,255,0.18)",
                      background:
                        "rgba(0,220,255,0.05)",
                    }}
                  >
                    ACTIVE
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
                  color: profile.active
                    ? "#45e7ff"
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

      {/* NETWORK METRICS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              CONNECTION METRICS
            </div>

            <h2>
              Network Overview
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

            {[
              ["CONNECTION", "ONLINE"],
              ["LATENCY", "-- ms"],
              ["PACKET LOSS", "0%"],
              ["DNS", "AUTO"],
            ].map(([label, value]) => (

              <div
                key={label}
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
                  {label}
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: 8,
                    fontSize: 18,
                    color:
                      value === "ONLINE"
                        ? "#4de8a4"
                        : "#fff",
                  }}
                >
                  {value}
                </strong>

              </div>

            ))}

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
              Network Optimization Engine
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              หน้านี้เป็น CyberGlass UI
              สำหรับ Network Architecture ก่อน
              เชื่อมต่อระบบ Scanner, DNS และ
              Latency Engine จริงในขั้นตอน Backend
              และ Windows EXE
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          NETWORK ENGINE ONLINE
        </div>

        <div>
          WOS ULTIMATE / GAMING NETWORK
        </div>

      </footer>

    </div>
  )
    }
