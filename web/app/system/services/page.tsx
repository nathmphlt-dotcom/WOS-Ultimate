"use client"

import React from "react"
import Link from "next/link"

const serviceStats = [
  {
    title: "Windows Services",
    value: "--",
    icon: "⚙",
    accent: "purple",
    description: "รอเชื่อมต่อ Windows Service Engine",
  },
  {
    title: "Running",
    value: "--",
    icon: "●",
    accent: "green",
    description: "รอตรวจสอบ Service ที่กำลังทำงาน",
  },
  {
    title: "Stopped",
    value: "--",
    icon: "■",
    accent: "orange",
    description: "รอตรวจสอบ Service ที่หยุดทำงาน",
  },
  {
    title: "System Load",
    value: "--",
    icon: "◒",
    accent: "cyan",
    description: "รอวิเคราะห์ผลกระทบต่อระบบ",
  },
]

const serviceModules = [
  {
    title: "All Services",
    description: "ดู Windows Services ทั้งหมด",
    icon: "⚙",
    accent: "purple",
  },
  {
    title: "Running Services",
    description: "ดู Service ที่กำลังทำงาน",
    icon: "●",
    accent: "green",
  },
  {
    title: "Stopped Services",
    description: "ดู Service ที่หยุดทำงาน",
    icon: "■",
    accent: "orange",
  },
  {
    title: "Optimization",
    description: "วิเคราะห์ Service ที่สามารถปรับแต่งได้",
    icon: "⚡",
    accent: "cyan",
  },
]

const serviceRows = [
  ["Windows Service", "--", "WAITING"],
  ["Network Service", "--", "WAITING"],
  ["Security Service", "--", "WAITING"],
  ["Gaming Service", "--", "WAITING"],
]

export default function ServicesPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / WINDOWS SERVICES
            </div>

            <h1>Services</h1>

            <p>
              ตรวจสอบ Windows Services
              และเตรียมระบบวิเคราะห์ Service Optimization
            </p>
          </div>

          <span className="wos-page-badge">
            SERVICE ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            WINDOWS SERVICE MONITOR READY
          </div>

          <h2>
            Manage your{" "}
            <strong>Windows Services</strong>
          </h2>

          <p>
            ศูนย์กลางตรวจสอบ Service ของ Windows
            สำหรับดูสถานะ วิเคราะห์ Resource Usage
            และเตรียมระบบ Optimization Engine
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Scan Services
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
              SVC
            </span>
          </div>

        </div>

      </section>

      {/* SERVICE STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SERVICE MONITOR
            </div>

            <h2>
              Service Statistics
            </h2>
          </div>

          <div className="live-status">
            <span />
            MONITOR READY
          </div>

        </div>

        <div className="stats-grid">

          {serviceStats.map((item) => (

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

      {/* SERVICE MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SERVICE CONTROL
            </div>

            <h2>
              Service Categories
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {serviceModules.map((item) => (

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

      {/* SERVICE TABLE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              SERVICE DATABASE
            </div>

            <h2>
              Windows Services
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
                "2fr 1fr 1fr",
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
            <span>SERVICE</span>
            <span>STATE</span>
            <span>STATUS</span>
          </div>

          {serviceRows.map((row) => (

            <div
              key={row[0]}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "2fr 1fr 1fr",
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

              <span
                style={{
                  color: "#777986",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                }}
              >
                {row[2]}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICE OPTIMIZATION */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              OPTIMIZATION ENGINE
            </div>

            <h2>
              Service Optimization Pipeline
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
                text: "ตรวจสอบ Windows Services",
              },
              {
                number: "02",
                title: "Analyze",
                text: "วิเคราะห์ผลกระทบต่อ Performance",
              },
              {
                number: "03",
                title: "Optimize",
                text: "เลือก Optimization ที่ปลอดภัย",
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
            ⚙
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Safe Service Optimization
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
              สำหรับ Service Manager เท่านั้น
              ยังไม่มีการหยุดหรือเปลี่ยน Windows Service จริง
              จนกว่าจะเชื่อมต่อ Windows Backend
              และระบบ Safety Validation
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          SERVICE ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / SERVICES
        </div>

      </footer>

    </div>
  )
      }
