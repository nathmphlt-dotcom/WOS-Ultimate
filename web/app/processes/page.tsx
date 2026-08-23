"use client"

import React from "react"
import Link from "next/link"

const processStats = [
  {
    title: "Active Processes",
    value: "--",
    icon: "▤",
    accent: "purple",
    description: "รอเชื่อมต่อ Process Engine",
  },
  {
    title: "CPU Load",
    value: "--",
    icon: "◒",
    accent: "cyan",
    description: "รออ่าน CPU Usage",
  },
  {
    title: "Memory Load",
    value: "--",
    icon: "▥",
    accent: "green",
    description: "รออ่าน Memory Usage",
  },
  {
    title: "Background",
    value: "--",
    icon: "◇",
    accent: "orange",
    description: "รอตรวจสอบ Background Tasks",
  },
]

const processCategories = [
  {
    title: "All Processes",
    description: "แสดง Process ทั้งหมดที่ทำงานอยู่",
    icon: "▤",
    accent: "purple",
  },
  {
    title: "High CPU",
    description: "ค้นหา Process ที่ใช้ CPU สูง",
    icon: "◒",
    accent: "cyan",
  },
  {
    title: "High Memory",
    description: "ค้นหา Process ที่ใช้ RAM สูง",
    icon: "▥",
    accent: "green",
  },
  {
    title: "Background",
    description: "ตรวจสอบ Background Process",
    icon: "◇",
    accent: "orange",
  },
]

export default function ProcessesPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / PROCESS MANAGER
            </div>

            <h1>Processes</h1>

            <p>
              ตรวจสอบ Process ที่กำลังทำงาน
              และวิเคราะห์การใช้ CPU / RAM
            </p>
          </div>

          <span className="wos-page-badge">
            PROCESS ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            PROCESS MONITOR READY
          </div>

          <h2>
            Manage your{" "}
            <strong>Windows Processes</strong>
          </h2>

          <p>
            ศูนย์กลางสำหรับดู Process,
            วิเคราะห์ Resource Usage
            และเตรียมระบบจัดการ Background
            Tasks ของ WOS
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Scan Processes
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
              PROC
            </span>
          </div>

        </div>

      </section>

      {/* PROCESS STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PROCESS MONITOR
            </div>

            <h2>
              Process Statistics
            </h2>
          </div>

          <div className="live-status">
            <span />
            MONITOR READY
          </div>

        </div>

        <div className="stats-grid">

          {processStats.map((item) => (

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

      {/* PROCESS FILTERS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PROCESS ANALYSIS
            </div>

            <h2>
              Process Categories
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {processCategories.map((item) => (

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

      {/* PROCESS TABLE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PROCESS DATABASE
            </div>

            <h2>
              Running Processes
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
            <span>PROCESS</span>
            <span>CPU</span>
            <span>MEMORY</span>
            <span>STATUS</span>
          </div>

          {[
            ["Process Engine", "--", "--", "WAITING"],
            ["System Monitor", "--", "--", "WAITING"],
            ["WOS Service", "--", "--", "WAITING"],
            ["Background Tasks", "--", "--", "WAITING"],
          ].map((row) => (

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

              <span>{row[1]}</span>
              <span>{row[2]}</span>

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

      {/* ENGINE PIPELINE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PROCESS ENGINE
            </div>

            <h2>
              Monitoring Pipeline
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
                title: "Enumerate",
                text: "ค้นหา Process จาก Windows",
              },
              {
                number: "02",
                title: "Analyze",
                text: "วิเคราะห์ CPU และ Memory",
              },
              {
                number: "03",
                title: "Optimize",
                text: "เตรียมส่งข้อมูลให้ Optimization Engine",
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
            ▤
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Process Engine Architecture
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
              หน้า Processes ตอนนี้เป็น
              CyberGlass UI และมีโครงสร้าง
              Process Table พร้อมแล้ว
              ขั้นตอน Backend จะเชื่อมต่อ
              Windows Process API เพื่ออ่านข้อมูลจริง
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          PROCESS ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / PROCESSES
        </div>

      </footer>

    </div>
  )
      }
