"use client"

import React from "react"
import Link from "next/link"

const systemStats = [
  {
    title: "System Status",
    value: "READY",
    description: "ระบบ Windows พร้อมสำหรับการตรวจสอบ",
    icon: "▣",
    accent: "purple",
  },
  {
    title: "Performance",
    value: "READY",
    description: "Performance Engine พร้อมใช้งาน",
    icon: "◒",
    accent: "cyan",
  },
  {
    title: "Processes",
    value: "READY",
    description: "Process Monitor พร้อมใช้งาน",
    icon: "▤",
    accent: "green",
  },
  {
    title: "Services",
    value: "READY",
    description: "Windows Services Monitor พร้อมใช้งาน",
    icon: "⚙",
    accent: "orange",
  },
]

const systemModules = [
  {
    title: "Performance",
    description: "ตรวจสอบ CPU, GPU, RAM และ System Performance",
    icon: "◒",
    href: "/system/performance",
    accent: "cyan",
  },
  {
    title: "Processes",
    description: "ดู Process ที่กำลังทำงานอยู่บนระบบ",
    icon: "▤",
    href: "/system/processes",
    accent: "green",
  },
  {
    title: "Services",
    description: "ตรวจสอบ Windows Services และสถานะการทำงาน",
    icon: "⚙",
    href: "/system/services",
    accent: "orange",
  },
  {
    title: "Startup",
    description: "จัดการโปรแกรมที่เริ่มทำงานพร้อม Windows",
    icon: "↗",
    href: "/system/startup",
    accent: "purple",
  },
  {
    title: "Storage",
    description: "ตรวจสอบพื้นที่จัดเก็บและ Storage Health",
    icon: "▱",
    href: "/system/storage",
    accent: "cyan",
  },
  {
    title: "System Scanner",
    description: "สแกนข้อมูล Hardware และ Windows Configuration",
    icon: "◉",
    href: "/scanner",
    accent: "green",
  },
]

const systemInfo = [
  ["OS", "Windows"],
  ["Architecture", "x64"],
  ["System State", "READY"],
  ["WOS Engine", "ONLINE"],
]

export default function SystemPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / CONTROL CENTER
            </div>

            <h1>System</h1>

            <p>
              ศูนย์กลางตรวจสอบและควบคุม
              Windows System Architecture ของ WOS
            </p>
          </div>

          <span className="wos-page-badge">
            SYSTEM READY
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            SYSTEM ENGINE ONLINE
          </div>

          <h2>
            Control your{" "}
            <strong>Windows System</strong>
          </h2>

          <p>
            รวมเครื่องมือสำหรับตรวจสอบ
            Performance, Processes, Services,
            Startup และ Storage ไว้ในศูนย์กลางเดียว
          </p>

          <div className="hero-buttons">

            <Link
              href="/scanner"
              className="wos-button primary"
            >
              ◉ Scan System
            </Link>

            <Link
              href="/system/performance"
              className="wos-button secondary"
            >
              ◒ Performance
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              SYS
            </span>
          </div>

        </div>

      </section>

      {/* SYSTEM STATUS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SYSTEM MONITOR
            </div>

            <h2>
              System Environment
            </h2>
          </div>

          <div className="live-status">
            <span />
            SYSTEM ONLINE
          </div>

        </div>

        <div className="stats-grid">

          {systemStats.map((item) => (

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
                    width: "88%",
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

      {/* SYSTEM MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SYSTEM CONTROL
            </div>

            <h2>
              System Modules
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {systemModules.slice(0, 4).map((item) => (

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

      {/* ADDITIONAL MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SYSTEM TOOLS
            </div>

            <h2>
              Additional Tools
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {systemModules.slice(4).map((item) => (

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

      {/* SYSTEM INFORMATION */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SYSTEM INFORMATION
            </div>

            <h2>
              Environment Overview
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

            {systemInfo.map(([label, value]) => (

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
                    fontSize: 17,
                    color:
                      value === "ONLINE" ||
                      value === "READY"
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
            ▣
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Windows System Architecture
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              System Center เป็น UI Layer
              สำหรับเชื่อมต่อกับ System Scanner,
              Performance Engine และ Windows
              Optimization Engine ในขั้นตอนต่อไป
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          SYSTEM ENGINE ONLINE
        </div>

        <div>
          WOS ULTIMATE / SYSTEM CENTER
        </div>

      </footer>

    </div>
  )
  }
