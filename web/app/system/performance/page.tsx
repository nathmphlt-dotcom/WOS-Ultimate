"use client"

import React from "react"
import Link from "next/link"

const performanceStats = [
  {
    title: "CPU Usage",
    value: "--",
    unit: "%",
    description: "รอเชื่อมต่อ System Monitor",
    icon: "◒",
    accent: "purple",
  },
  {
    title: "GPU Usage",
    value: "--",
    unit: "%",
    description: "รอเชื่อมต่อ GPU Monitor",
    icon: "◈",
    accent: "cyan",
  },
  {
    title: "Memory Usage",
    value: "--",
    unit: "%",
    description: "รอเชื่อมต่อ RAM Monitor",
    icon: "▤",
    accent: "green",
  },
  {
    title: "Temperature",
    value: "--",
    unit: "°C",
    description: "รอเชื่อมต่อ Hardware Sensor",
    icon: "◇",
    accent: "orange",
  },
]

const performanceModules = [
  {
    title: "CPU Monitor",
    description:
      "ตรวจสอบการใช้ CPU และสถานะ Processor แบบ Real-time",
    icon: "◒",
    accent: "purple",
  },
  {
    title: "GPU Monitor",
    description:
      "ตรวจสอบ GPU Load, Memory และสถานะ Graphics",
    icon: "◈",
    accent: "cyan",
  },
  {
    title: "RAM Monitor",
    description:
      "ตรวจสอบ Memory Usage และ Available RAM",
    icon: "▤",
    accent: "green",
  },
  {
    title: "Temperature",
    description:
      "เตรียมระบบตรวจสอบอุณหภูมิ Hardware",
    icon: "◇",
    accent: "orange",
  },
]

export default function PerformancePage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              SYSTEM / PERFORMANCE
            </div>

            <h1>Performance</h1>

            <p>
              ตรวจสอบ CPU, GPU, RAM และ
              Hardware Performance ของระบบ
            </p>
          </div>

          <span className="wos-page-badge">
            MONITOR READY
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            PERFORMANCE ENGINE READY
          </div>

          <h2>
            Monitor your{" "}
            <strong>System Performance</strong>
          </h2>

          <p>
            ศูนย์กลางตรวจสอบประสิทธิภาพระบบ
            สำหรับ CPU, GPU, Memory และ
            Hardware Sensor โดยจะเชื่อมต่อ
            Real-time Monitor ในขั้นตอน Backend
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
            >
              ◉ Start Monitoring
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
              PERF
            </span>
          </div>

        </div>

      </section>

      {/* PERFORMANCE STATUS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              LIVE PERFORMANCE
            </div>

            <h2>
              System Metrics
            </h2>
          </div>

          <div className="live-status">
            <span />
            MONITOR READY
          </div>

        </div>

        <div className="stats-grid">

          {performanceStats.map((item) => (

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

                <span>
                  {item.unit}
                </span>

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

      {/* PERFORMANCE MODULES */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PERFORMANCE CONTROL
            </div>

            <h2>
              Monitoring Modules
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {performanceModules.map((item) => (

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

      {/* PERFORMANCE OVERVIEW */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              PERFORMANCE OVERVIEW
            </div>

            <h2>
              Current System State
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
              ["CPU", "WAITING"],
              ["GPU", "WAITING"],
              ["RAM", "WAITING"],
              ["SENSOR", "WAITING"],
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
                    fontSize: 16,
                    color: "#777986",
                  }}
                >
                  {value}
                </strong>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MONITORING PIPELINE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              MONITORING PIPELINE
            </div>

            <h2>
              Performance Engine
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
                title: "Hardware",
                text: "ตรวจจับ Hardware",
              },
              {
                number: "02",
                title: "Monitor",
                text: "อ่านค่า Performance",
              },
              {
                number: "03",
                title: "Engine",
                text: "ส่งข้อมูลเข้า WOS",
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
            ◒
          </div>

          <div>

            <strong
              style={{
                fontSize: 11,
              }}
            >
              Real-time Performance Monitor
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
              ตอนนี้หน้า Performance เป็น
              CyberGlass UI Architecture
              และยังไม่ได้อ่านค่า Hardware จริง
              จากเครื่องผู้ใช้ โดยจะเชื่อมต่อ
              Windows Monitoring Engine
              ในขั้นตอน EXE/Backend
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          PERFORMANCE ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / PERFORMANCE
        </div>

      </footer>

    </div>
  )
    }
