"use client"

import React from "react"
import Link from "next/link"

const startupStats = [
  {
    title: "Startup Items",
    value: "--",
    icon: "↗",
    accent: "purple",
    description: "รอเชื่อมต่อ Startup Engine",
  },
  {
    title: "Enabled",
    value: "--",
    icon: "●",
    accent: "green",
    description: "รอตรวจสอบรายการที่เปิดใช้งาน",
  },
  {
    title: "Disabled",
    value: "--",
    icon: "■",
    accent: "orange",
    description: "รอตรวจสอบรายการที่ปิดใช้งาน",
  },
  {
    title: "Boot Impact",
    value: "--",
    icon: "◒",
    accent: "cyan",
    description: "รอวิเคราะห์ผลกระทบต่อ Boot",
  },
]

const startupModules = [
  {
    title: "All Startup Items",
    description: "ดูโปรแกรมทั้งหมดที่เริ่มพร้อม Windows",
    icon: "↗",
    accent: "purple",
  },
  {
    title: "High Impact",
    description: "ค้นหารายการที่มีผลต่อเวลา Boot สูง",
    icon: "◒",
    accent: "cyan",
  },
  {
    title: "Enabled Items",
    description: "ดูรายการ Startup ที่กำลังเปิดใช้งาน",
    icon: "●",
    accent: "green",
  },
  {
    title: "Disabled Items",
    description: "ดูรายการ Startup ที่ถูกปิดไว้",
    icon: "■",
    accent: "orange",
  },
]

const startupRows = [
  ["Windows Startup", "--", "--", "WAITING"],
  ["Application Startup", "--", "--", "WAITING"],
  ["Background Startup", "--", "--", "WAITING"],
  ["System Startup", "--", "--", "WAITING"],
]

export default function StartupPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / STARTUP MANAGER
            </div>

            <h1>Startup</h1>

            <p>
              ตรวจสอบโปรแกรมที่เริ่มทำงานพร้อม Windows
              และวิเคราะห์ผลกระทบต่อ Boot Performance
            </p>
          </div>

          <span className="wos-page-badge">
            STARTUP ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            STARTUP MONITOR READY
          </div>

          <h2>
            Optimize your{" "}
            <strong>Windows Startup</strong>
          </h2>

          <p>
            ศูนย์กลางจัดการ Startup Architecture
            สำหรับตรวจสอบ Boot Items,
            Startup Impact และเตรียมระบบ
            Boot Optimization ของ WOS
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Scan Startup
            </button>

            <Link
              href="/system"
              className="wos-button secondary"
            >
              ▣ System Center
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              BOOT
            </span>
          </div>

        </div>

      </section>

      {/* STARTUP STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STARTUP MONITOR
            </div>

            <h2>
              Startup Statistics
            </h2>
          </div>

          <div className="live-status">
            <span />
            MONITOR READY
          </div>

        </div>

        <div className="stats-grid">

          {startupStats.map((item) => (

            <div
              key={item.title}
              className={`wos-glass-card wos-stat-card accent-${item.accent}`}
            >

              <div className="stat-top">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <span className="wos-page-badge">
                  WAITING
                </span>

              </div>

              <div className="stat-title">
                {item.title}
              </div>

              <div className="stat-value">
                {item.value}
              </div>

              <div className="stat-line">

                <div
                  style={{
                    width: "0%",
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

      {/* STARTUP MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STARTUP CONTROL
            </div>

            <h2>
              Startup Categories
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {startupModules.map((item) => (

            <button
              key={item.title}
              type="button"
              className={`wos-glass-card wos-action-card accent-${item.accent}`}
              style={{
                border:
                  "1px solid rgba(255,255,255,0.065)",
                color: "#fff",
                background:
                  "rgba(17,18,27,0.72)",
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

      {/* STARTUP TABLE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STARTUP DATABASE
            </div>

            <h2>
              Startup Items
            </h2>
          </div>

          <div className="live-status">
            <span />
            AWAITING SYSTEM DATA
          </div>

        </div>

        <div
          className="wos-glass-card"
          style={{
            overflow: "hidden",
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "2fr 1fr 1fr 1fr",
              gap: 12,
              padding: "14px 18px",
              borderBottom:
                "1px solid rgba(255,255,255,0.06)",
              color: "#656875",
              fontSize: 8,
              fontWeight: 800,
              letterSpacing: 1.2,
            }}
          >
            <span>ITEM</span>
            <span>STATE</span>
            <span>IMPACT</span>
            <span>STATUS</span>
          </div>

          {startupRows.map((row) => (

            <div
              key={row[0]}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "2fr 1fr 1fr 1fr",
                gap: 12,
                padding: "16px 18px",
                borderBottom:
                  "1px solid rgba(255,255,255,0.035)",
                color: "#8d909d",
                fontSize: 10,
              }}
            >

              <strong
                style={{
                  color: "#e6e7ed",
                  fontSize: 10,
                }}
              >
                {row[0]}
              </strong>

              <span>
                {row[1]}
              </span>

              <span>
                {row[2]}
              </span>

              <span
                style={{
                  color: "#777986",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                }}
              >
                {row[3]}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* BOOT OPTIMIZATION */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              BOOT OPTIMIZATION
            </div>

            <h2>
              Startup Optimization Pipeline
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

            {[
              {
                number: "01",
                title: "Detect",
                text: "ตรวจหา Startup Items",
              },
              {
                number: "02",
                title: "Analyze",
                text: "วิเคราะห์ Boot Impact",
              },
              {
                number: "03",
                title: "Optimize",
                text: "เตรียมรายการสำหรับ Optimization",
              },
            ].map((item) => (

              <div
                key={item.number}
                style={{
                  padding: 18,
                  borderRadius: 13,
                  background:
                    "rgba(255,255,255,0.025)",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                }}
              >

                <span
                  style={{
                    color: "#a66cff",
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  {item.number}
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: 10,
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </strong>

                <p
                  style={{
                    margin: "6px 0 0",
                    color:
                      "var(--wos-muted)",
                    fontSize: 9,
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SAFETY NOTICE */}
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
                "rgba(255,180,93,0.09)",
            }}
          >
            ↗
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Safe Startup Optimization
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
              หน้านี้เป็น UI Architecture
              สำหรับ Startup Manager เท่านั้น
              ยังไม่มีการแก้ Registry หรือปิด
              Startup Item จริง จนกว่าจะเชื่อมต่อ
              Windows Backend และ Safety Validation
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          STARTUP ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / STARTUP
        </div>

      </footer>

    </div>
  )
    }
