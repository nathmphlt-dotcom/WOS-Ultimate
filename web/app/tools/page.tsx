"use client"

import React from "react"
import Link from "next/link"

const toolStats = [
  {
    title: "Tools Available",
    value: "--",
    icon: "▦",
    accent: "purple",
    description: "รอเชื่อมต่อ WOS Tools Engine",
  },
  {
    title: "Ready",
    value: "--",
    icon: "●",
    accent: "green",
    description: "รอตรวจสอบเครื่องมือที่พร้อมใช้งาน",
  },
  {
    title: "Operations",
    value: "--",
    icon: "⚡",
    accent: "cyan",
    description: "รอระบบ Operation Engine",
  },
  {
    title: "System Safety",
    value: "--",
    icon: "◆",
    accent: "orange",
    description: "รอ Safety Validation",
  },
]

const tools = [
  {
    title: "System Cleanup",
    description: "วิเคราะห์และจัดการไฟล์ที่ไม่จำเป็น",
    icon: "⌫",
    accent: "purple",
    href: "/tools/cleanup",
  },
  {
    title: "Operation Logs",
    description: "ดูประวัติการทำงานของ WOS",
    icon: "≡",
    accent: "cyan",
    href: "/tools/logs",
  },
  {
    title: "Optimization Tools",
    description: "เครื่องมือสำหรับ Windows Optimization",
    icon: "⚡",
    accent: "green",
    href: "/optimizer",
  },
  {
    title: "System Scanner",
    description: "สแกนสถานะและข้อมูลของระบบ",
    icon: "◉",
    accent: "orange",
    href: "/scanner",
  },
]

const pipeline = [
  {
    number: "01",
    title: "Detect",
    description: "ตรวจสอบข้อมูลระบบและค้นหาสิ่งที่สามารถปรับแต่งได้",
  },
  {
    number: "02",
    title: "Analyze",
    description: "วิเคราะห์ผลกระทบและความปลอดภัยก่อนดำเนินการ",
  },
  {
    number: "03",
    title: "Execute",
    description: "ดำเนินการผ่าน Windows Backend เมื่อระบบพร้อม",
  },
]

export default function ToolsPage() {
  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              WOS / SYSTEM TOOLS
            </div>

            <h1>Tools</h1>

            <p>
              ศูนย์รวมเครื่องมือสำหรับตรวจสอบ
              วิเคราะห์ และจัดการ Windows
            </p>
          </div>

          <span className="wos-page-badge">
            TOOLS ENGINE
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            WOS TOOLS CENTER READY
          </div>

          <h2>
            Powerful{" "}
            <strong>System Tools</strong>
          </h2>

          <p>
            รวมเครื่องมือหลักของ WOS Ultimate
            ไว้ในพื้นที่เดียว เพื่อให้สามารถ
            ตรวจสอบ วิเคราะห์ และเตรียมการ
            Optimization ได้อย่างเป็นระบบ
          </p>

          <div className="hero-buttons">

            <Link
              href="/optimizer"
              className="wos-button primary"
            >
              ⚡ Open Optimizer
            </Link>

            <Link
              href="/scanner"
              className="wos-button secondary"
            >
              ◉ System Scanner
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              TOOLS
            </span>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              TOOLS MONITOR
            </div>

            <h2>
              Tools Overview
            </h2>
          </div>

          <div className="live-status">
            <span />
            TOOLS CENTER READY
          </div>

        </div>

        <div className="stats-grid">

          {toolStats.map((item) => (

            <div
              key={item.title}
              className={`wos-glass-card wos-stat-card accent-${item.accent}`}
            >

              <div className="stat-top">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <span className="wos-page-badge">
                  READY
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

      {/* TOOLS GRID */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              AVAILABLE MODULES
            </div>

            <h2>
              WOS Tools
            </h2>
          </div>

        </div>

        <div className="actions-grid">

          {tools.map((tool) => (

            <Link
              key={tool.title}
              href={tool.href}
              className={`wos-glass-card wos-action-card accent-${tool.accent}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >

              <div className="action-card-button">

                <div className="action-icon">
                  {tool.icon}
                </div>

                <h3>
                  {tool.title}
                </h3>

                <p>
                  {tool.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* OPERATION PIPELINE */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              OPERATION ENGINE
            </div>

            <h2>
              Tool Execution Pipeline
            </h2>
          </div>

        </div>

        <div className="wos-glass-card" style={{ padding: 20 }}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: 12,
            }}
          >

            {pipeline.map((item) => (

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
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section>

        <div className="section-heading">

          <div>
            <div className="section-kicker">
              QUICK ACCESS
            </div>

            <h2>
              System Management
            </h2>
          </div>

        </div>

        <div
          className="wos-glass-card"
          style={{
            padding: 20,
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: 12,
          }}
        >

          <Link
            href="/system/services"
            className="wos-placeholder-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              minHeight: 120,
            }}
          >
            <span>
              WINDOWS
            </span>

            <strong>
              Services
            </strong>

            <small>
              Manage Windows Services
            </small>
          </Link>

          <Link
            href="/system/startup"
            className="wos-placeholder-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              minHeight: 120,
            }}
          >
            <span>
              SYSTEM
            </span>

            <strong>
              Startup
            </strong>

            <small>
              Manage Startup Items
            </small>
          </Link>

          <Link
            href="/system/storage"
            className="wos-placeholder-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              minHeight: 120,
            }}
          >
            <span>
              STORAGE
            </span>

            <strong>
              Storage
            </strong>

            <small>
              Analyze System Storage
            </small>
          </Link>

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
              Safe Operation Architecture
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              Tools Center ตอนนี้เป็น UI Architecture
              สำหรับ WOS Ultimate เท่านั้น
              การเปลี่ยนแปลงระบบจริงจะถูกเชื่อมต่อ
              ผ่าน Windows Backend, Permission Layer
              และ Safety Validation ใน Part ถัดไป
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          TOOLS ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / TOOLS
        </div>

      </footer>

    </div>
  )
      }
