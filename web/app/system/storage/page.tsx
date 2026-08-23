"use client"

import React from "react"
import Link from "next/link"

const storageStats = [
  {
    title: "Total Storage",
    value: "--",
    icon: "▱",
    accent: "purple",
    description: "รอเชื่อมต่อ Storage Engine",
  },
  {
    title: "Used Space",
    value: "--",
    icon: "◒",
    accent: "orange",
    description: "รอตรวจสอบพื้นที่ที่ใช้งาน",
  },
  {
    title: "Free Space",
    value: "--",
    icon: "●",
    accent: "green",
    description: "รอตรวจสอบพื้นที่ว่าง",
  },
  {
    title: "Drive Health",
    value: "--",
    icon: "◆",
    accent: "cyan",
    description: "รอตรวจสอบสถานะ Drive",
  },
]

const storageModules = [
  {
    title: "Disk Overview",
    description: "ดูข้อมูล Storage และ Disk ทั้งหมด",
    icon: "▱",
    accent: "purple",
  },
  {
    title: "Storage Cleanup",
    description: "วิเคราะห์ไฟล์ที่สามารถล้างได้",
    icon: "⌫",
    accent: "orange",
  },
  {
    title: "Disk Health",
    description: "ตรวจสอบสถานะและสุขภาพของ Drive",
    icon: "◆",
    accent: "green",
  },
  {
    title: "Storage Analysis",
    description: "วิเคราะห์พื้นที่และไฟล์ที่ใช้พื้นที่สูง",
    icon: "◒",
    accent: "cyan",
  },
]

const driveRows = [
  ["System Drive", "--", "--", "--", "WAITING"],
  ["Game Drive", "--", "--", "--", "WAITING"],
  ["Data Drive", "--", "--", "--", "WAITING"],
  ["External Storage", "--", "--", "--", "WAITING"],
]

export default function StoragePage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / STORAGE MANAGER
            </div>

            <h1>Storage</h1>

            <p>
              ตรวจสอบพื้นที่จัดเก็บ วิเคราะห์ Disk
              และเตรียมระบบ Storage Optimization
            </p>
          </div>

          <span className="wos-page-badge">
            STORAGE ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            STORAGE MONITOR READY
          </div>

          <h2>
            Manage your{" "}
            <strong>System Storage</strong>
          </h2>

          <p>
            ศูนย์กลางตรวจสอบ Disk และ Storage
            สำหรับดูพื้นที่ใช้งาน วิเคราะห์ไฟล์
            ตรวจสอบ Drive Health และเตรียมระบบ
            Cleanup Engine ของ WOS
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Scan Storage
            </button>

            <Link
              href="/tools/cleanup"
              className="wos-button secondary"
            >
              ⌫ Storage Cleanup
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              DISK
            </span>
          </div>

        </div>

      </section>

      {/* STORAGE STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STORAGE MONITOR
            </div>

            <h2>
              Storage Statistics
            </h2>
          </div>

          <div className="live-status">
            <span />
            MONITOR READY
          </div>

        </div>

        <div className="stats-grid">

          {storageStats.map((item) => (

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

      {/* STORAGE MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STORAGE CONTROL
            </div>

            <h2>
              Storage Categories
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {storageModules.map((item) => (

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

      {/* DRIVE TABLE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STORAGE DATABASE
            </div>

            <h2>
              Disk & Drives
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
                "2fr 1fr 1fr 1fr 1fr",
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
            <span>DRIVE</span>
            <span>TOTAL</span>
            <span>USED</span>
            <span>FREE</span>
            <span>STATUS</span>
          </div>

          {driveRows.map((row) => (

            <div
              key={row[0]}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "2fr 1fr 1fr 1fr 1fr",
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

              <span>
                {row[3]}
              </span>

              <span
                style={{
                  color: "#777986",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                }}
              >
                {row[4]}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* STORAGE ANALYSIS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              STORAGE ANALYSIS
            </div>

            <h2>
              Storage Optimization Pipeline
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
                text: "ตรวจสอบ Drive และพื้นที่ทั้งหมด",
              },
              {
                number: "02",
                title: "Analyze",
                text: "วิเคราะห์พื้นที่และไฟล์ที่ใช้ทรัพยากร",
              },
              {
                number: "03",
                title: "Optimize",
                text: "เตรียม Cleanup และ Storage Optimization",
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

      {/* STORAGE SAFETY */}
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
            ▱
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Safe Storage Management
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
              สำหรับ Storage Manager เท่านั้น
              ยังไม่มีการลบไฟล์หรือแก้ไขข้อมูลจริง
              จนกว่าจะเชื่อมต่อ Storage Backend
              และระบบ Safety Validation
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          STORAGE ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / STORAGE
        </div>

      </footer>

    </div>
  )
        }
