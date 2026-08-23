"use client"

import React from "react"
import Link from "next/link"

const cleanupStats = [
  {
    title: "Junk Files",
    value: "--",
    icon: "⌫",
    accent: "purple",
    description: "รอวิเคราะห์ไฟล์ที่ไม่จำเป็น",
  },
  {
    title: "Cache",
    value: "--",
    icon: "◒",
    accent: "cyan",
    description: "รอตรวจสอบ Cache ของระบบ",
  },
  {
    title: "Temporary Files",
    value: "--",
    icon: "▱",
    accent: "orange",
    description: "รอตรวจสอบ Temporary Files",
  },
  {
    title: "Recoverable",
    value: "--",
    icon: "◆",
    accent: "green",
    description: "รอคำนวณพื้นที่ที่สามารถคืนได้",
  },
]

const cleanupModules = [
  {
    title: "Windows Temp",
    description: "วิเคราะห์ไฟล์ Temporary ของ Windows",
    icon: "▱",
    accent: "purple",
  },
  {
    title: "User Cache",
    description: "ตรวจสอบ Cache ของผู้ใช้",
    icon: "◒",
    accent: "cyan",
  },
  {
    title: "Browser Cache",
    description: "ตรวจสอบ Browser Cache",
    icon: "◎",
    accent: "green",
  },
  {
    title: "Recycle Bin",
    description: "ตรวจสอบรายการใน Recycle Bin",
    icon: "⌫",
    accent: "orange",
  },
]

const cleanupRows = [
  ["Windows Temporary Files", "--", "WAITING"],
  ["User Temporary Files", "--", "WAITING"],
  ["System Cache", "--", "WAITING"],
  ["Browser Cache", "--", "WAITING"],
  ["Recycle Bin", "--", "WAITING"],
]

export default function CleanupPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              TOOLS / SYSTEM CLEANUP
            </div>

            <h1>System Cleanup</h1>

            <p>
              วิเคราะห์ไฟล์ชั่วคราว Cache และข้อมูลที่ไม่จำเป็น
              เพื่อเตรียมพื้นที่สำหรับ Cleanup Engine
            </p>
          </div>

          <span className="wos-page-badge">
            CLEANUP ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            SAFE CLEANUP SCANNER READY
          </div>

          <h2>
            Clean your{" "}
            <strong>Windows System</strong>
          </h2>

          <p>
            ระบบวิเคราะห์ Cleanup ของ WOS Ultimate
            สำหรับค้นหาไฟล์ชั่วคราว Cache และข้อมูล
            ที่อาจสามารถลบได้อย่างปลอดภัย
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Scan for Junk
            </button>

            <Link
              href="/system/storage"
              className="wos-button secondary"
            >
              ▱ Storage
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              CLEAN
            </span>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              CLEANUP MONITOR
            </div>

            <h2>
              Cleanup Statistics
            </h2>
          </div>

          <div className="live-status">
            <span />
            SCANNER READY
          </div>

        </div>

        <div className="stats-grid">

          {cleanupStats.map((item) => (

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

      {/* CLEANUP MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              CLEANUP CATEGORIES
            </div>

            <h2>
              Cleanup Modules
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {cleanupModules.map((item) => (

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

      {/* CLEANUP DATABASE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              CLEANUP DATABASE
            </div>

            <h2>
              Detected Cleanup Areas
            </h2>
          </div>

          <div className="live-status">
            <span />
            AWAITING SCAN
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
            <span>CLEANUP AREA</span>
            <span>SIZE</span>
            <span>STATUS</span>
          </div>

          {cleanupRows.map((row) => (

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

      {/* CLEANUP PIPELINE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              CLEANUP PIPELINE
            </div>

            <h2>
              Safe Cleanup Workflow
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
                title: "Scan",
                text: "ค้นหาไฟล์และข้อมูลที่สามารถตรวจสอบได้",
              },
              {
                number: "02",
                title: "Review",
                text: "แสดงรายการและประเมินความปลอดภัยก่อนลบ",
              },
              {
                number: "03",
                title: "Clean",
                text: "ลบเฉพาะรายการที่ผ่าน Safety Validation",
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
                    color: "var(--wos-muted)",
                    fontSize: 9,
                    lineHeight: 1.7,
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
            "rgba(255,93,114,0.12)",
          background:
            "rgba(255,93,114,0.025)",
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
              color: "#ff7c8d",
              background:
                "rgba(255,93,114,0.09)",
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
              Safety First
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              Cleanup Engine ตอนนี้เป็น UI Architecture
              เท่านั้น ยังไม่มีการลบไฟล์จริง
              ระบบจริงจะต้องตรวจสอบรายการ,
              Permission และ Safety Validation
              ก่อนดำเนินการทุกครั้ง
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          CLEANUP ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / SYSTEM CLEANUP
        </div>

      </footer>

    </div>
  )
    }
