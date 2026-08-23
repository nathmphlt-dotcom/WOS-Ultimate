"use client"

import React from "react"
import Link from "next/link"

const scanItems = [
  {
    title: "Windows Integrity",
    description:
      "ตรวจสอบความสมบูรณ์ของไฟล์ระบบ Windows",
    icon: "◆",
    status: "READY",
    value: "100%",
    accent: "purple",
  },
  {
    title: "Background Processes",
    description:
      "ตรวจสอบโปรเซสที่ทำงานอยู่เบื้องหลัง",
    icon: "▤",
    status: "READY",
    value: "42",
    accent: "cyan",
  },
  {
    title: "Startup Programs",
    description:
      "ตรวจสอบโปรแกรมที่เริ่มทำงานพร้อม Windows",
    icon: "↗",
    status: "READY",
    value: "8",
    accent: "orange",
  },
  {
    title: "System Services",
    description:
      "ตรวจสอบ Windows Services ที่กำลังทำงาน",
    icon: "⚙",
    status: "READY",
    value: "96",
    accent: "green",
  },
]

const scanResults = [
  {
    title: "System Configuration",
    status: "NORMAL",
    description:
      "ไม่พบปัญหาการตั้งค่าระบบที่สำคัญ",
    icon: "✓",
  },
  {
    title: "Performance Configuration",
    status: "CHECK",
    description:
      "สามารถปรับแต่งประสิทธิภาพเพิ่มเติมได้",
    icon: "!",
  },
  {
    title: "Gaming Configuration",
    status: "CHECK",
    description:
      "พบตัวเลือกที่สามารถปรับแต่งสำหรับ Gaming",
    icon: "▶",
  },
]

export default function ScannerPage() {
  return (
    <div className="wos-page-transition">
      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              SYSTEM DIAGNOSTICS
            </div>

            <h1>System Scanner</h1>

            <p>
              วิเคราะห์ Windows และตรวจหาจุดที่สามารถ
              ปรับปรุงประสิทธิภาพได้
            </p>
          </div>

          <span className="wos-page-badge">
            READY
          </span>
        </div>
      </section>

      {/* SCANNER HERO */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            SCANNER ENGINE READY
          </div>

          <h2>
            Analyze your{" "}
            <strong>Windows System</strong>
          </h2>

          <p>
            สแกนโครงสร้างระบบ การทำงานเบื้องหลัง
            Startup และ Services เพื่อเตรียมข้อมูล
            สำหรับ WOS Optimization Engine
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Start Full Scan
            </button>

            <Link
              href="/optimizer"
              className="wos-button secondary"
            >
              ⚡ Open Optimizer
            </Link>
          </div>
        </div>

        <div className="hero-orb">
          <div className="orb-core">
            <span>SCAN</span>
          </div>
        </div>
      </section>

      {/* SCAN MODULES */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SCAN MODULES
            </div>

            <h2>System Analysis</h2>
          </div>

          <div className="live-status">
            <span />
            ENGINE READY
          </div>
        </div>

        <div className="stats-grid">
          {scanItems.map((item) => (
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

              <div className="stat-value">
                {item.value}
              </div>

              <div className="stat-line">
                <div
                  style={{
                    width:
                      item.value.includes("%")
                        ? item.value
                        : "68%",
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

      {/* SCAN RESULTS */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              DIAGNOSTIC PREVIEW
            </div>

            <h2>System Findings</h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {scanResults.map((result) => (
            <div
              key={result.title}
              className="wos-glass-card"
              style={{
                padding: "16px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
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
                  color:
                    result.status === "NORMAL"
                      ? "#4de8a4"
                      : "#ffb45d",
                  background:
                    result.status === "NORMAL"
                      ? "rgba(53,230,155,0.08)"
                      : "rgba(255,180,93,0.08)",
                  fontWeight: 900,
                }}
              >
                {result.icon}
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <strong
                    style={{
                      fontSize: 11,
                    }}
                  >
                    {result.title}
                  </strong>

                  <span
                    className="wos-page-badge"
                    style={{
                      color:
                        result.status === "NORMAL"
                          ? "#4de8a4"
                          : "#ffb45d",
                      borderColor:
                        result.status === "NORMAL"
                          ? "rgba(53,230,155,0.2)"
                          : "rgba(255,180,93,0.2)",
                      background:
                        result.status === "NORMAL"
                          ? "rgba(53,230,155,0.05)"
                          : "rgba(255,180,93,0.05)",
                    }}
                  >
                    {result.status}
                  </span>
                </div>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "var(--wos-muted)",
                    fontSize: 9,
                  }}
                >
                  {result.description}
                </p>
              </div>

              <span
                style={{
                  color: "#626778",
                  fontSize: 18,
                }}
              >
                ›
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SCAN INFO */}
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
              Scanner Engine
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              หน้านี้เป็น UI Architecture ของ
              System Scanner ก่อนเชื่อมต่อกับ Windows
              Scanner Engine จริงใน PART 3
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="system-footer">
        <div>
          <span className="footer-dot" />
          SYSTEM SCANNER ONLINE
        </div>

        <div>
          WOS ULTIMATE / SYSTEM DIAGNOSTICS
        </div>
      </footer>
    </div>
  )
      }
