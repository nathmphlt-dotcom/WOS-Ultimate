"use client"

import React, { useState } from "react"
import Link from "next/link"

type LogStatus = "SUCCESS" | "INFO" | "WARNING"

type LogItem = {
  id: number
  time: string
  module: string
  operation: string
  status: LogStatus
}

const initialLogs: LogItem[] = [
  {
    id: 1,
    time: "--:--:--",
    module: "SYSTEM",
    operation: "Waiting for Windows Backend",
    status: "INFO",
  },
  {
    id: 2,
    time: "--:--:--",
    module: "SECURITY",
    operation: "Security Context initialized",
    status: "SUCCESS",
  },
  {
    id: 3,
    time: "--:--:--",
    module: "TOOLS",
    operation: "Operation Logger ready",
    status: "SUCCESS",
  },
  {
    id: 4,
    time: "--:--:--",
    module: "OPTIMIZER",
    operation: "Optimization Engine waiting",
    status: "INFO",
  },
  {
    id: 5,
    time: "--:--:--",
    module: "SYSTEM",
    operation: "Backend connection not configured",
    status: "WARNING",
  },
]

const statusColors: Record<LogStatus, string> = {
  SUCCESS: "#35e69b",
  INFO: "#45e7ff",
  WARNING: "#ffb45d",
}

export default function LogsPage() {
  const [logs, setLogs] = useState(initialLogs)
  const [filter, setFilter] = useState<"ALL" | LogStatus>("ALL")

  const filteredLogs =
    filter === "ALL"
      ? logs
      : logs.filter((log) => log.status === filter)

  function clearLogs() {
    setLogs([])
  }

  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">

        <div className="wos-page-title-row">

          <div>

            <div className="page-kicker">
              TOOLS / OPERATION LOGS
            </div>

            <h1>
              Operation Logs
            </h1>

            <p>
              ตรวจสอบประวัติการทำงานของ WOS
              และติดตามสถานะของ Operation Engine
            </p>

          </div>

          <span className="wos-page-badge">
            LOG ENGINE
          </span>

        </div>

      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">

            <span />

            OPERATION LOGGER READY

          </div>

          <h2>
            Monitor your{" "}
            <strong>WOS Operations</strong>
          </h2>

          <p>
            ระบบบันทึก Operation ของ WOS Ultimate
            สำหรับตรวจสอบการทำงานของแต่ละ Module
            และเตรียมเชื่อมต่อกับ Windows Backend
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="wos-button primary"
              onClick={() => {
                setLogs(initialLogs)
              }}
            >
              ↻ Refresh Logs
            </button>

            <Link
              href="/tools"
              className="wos-button secondary"
            >
              ▦ Tools Center
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">

            <span>
              LOGS
            </span>

          </div>

        </div>

      </section>

      {/* STAT CARDS */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              LOG MONITOR
            </div>

            <h2>
              Operation Overview
            </h2>

          </div>

          <div className="live-status">
            <span />
            LOGGER ONLINE
          </div>

        </div>

        <div className="stats-grid">

          <div className="wos-glass-card wos-stat-card">

            <div className="stat-top">

              <div className="stat-icon">
                ≡
              </div>

            </div>

            <div className="stat-title">
              TOTAL LOGS
            </div>

            <div className="stat-value">
              {logs.length}
            </div>

            <div className="stat-line">
              <div
                style={{
                  width: logs.length
                    ? "100%"
                    : "0%",
                }}
              />
            </div>

          </div>

          <div className="wos-glass-card wos-stat-card">

            <div className="stat-top">

              <div className="stat-icon">
                ✓
              </div>

            </div>

            <div className="stat-title">
              SUCCESS
            </div>

            <div className="stat-value">
              {
                logs.filter(
                  (log) =>
                    log.status === "SUCCESS"
                ).length
              }
            </div>

            <div className="stat-line">

              <div
                style={{
                  width: "100%",
                  background:
                    "var(--wos-green)",
                }}
              />

            </div>

          </div>

          <div className="wos-glass-card wos-stat-card">

            <div className="stat-top">

              <div className="stat-icon">
                i
              </div>

            </div>

            <div className="stat-title">
              INFORMATION
            </div>

            <div className="stat-value">
              {
                logs.filter(
                  (log) =>
                    log.status === "INFO"
                ).length
              }
            </div>

            <div className="stat-line">

              <div
                style={{
                  width: "100%",
                  background:
                    "var(--wos-cyan)",
                }}
              />

            </div>

          </div>

          <div className="wos-glass-card wos-stat-card">

            <div className="stat-top">

              <div className="stat-icon">
                !
              </div>

            </div>

            <div className="stat-title">
              WARNING
            </div>

            <div className="stat-value">
              {
                logs.filter(
                  (log) =>
                    log.status === "WARNING"
                ).length
              }
            </div>

            <div className="stat-line">

              <div
                style={{
                  width: "100%",
                  background:
                    "var(--wos-orange)",
                }}
              />

            </div>

          </div>

        </div>

      </section>

      {/* LOG CONTROLS */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              LOG MANAGEMENT
            </div>

            <h2>
              Operation History
            </h2>

          </div>

          <button
            type="button"
            className="wos-log-clear"
            onClick={clearLogs}
          >
            Clear Logs
          </button>

        </div>

        <div className="wos-glass-card wos-log-panel">

          {/* FILTER */}
          <div className="wos-log-toolbar">

            <div className="wos-log-filters">

              {(
                [
                  "ALL",
                  "SUCCESS",
                  "INFO",
                  "WARNING",
                ] as const
              ).map((item) => (

                <button
                  key={item}
                  type="button"
                  className={`wos-log-filter ${
                    filter === item
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter(item)
                  }
                >
                  {item}
                </button>

              ))}

            </div>

            <span className="wos-log-count">
              {filteredLogs.length} RECORDS
            </span>

          </div>

          {/* TABLE HEADER */}
          <div className="wos-log-header">

            <span>TIME</span>
            <span>MODULE</span>
            <span>OPERATION</span>
            <span>STATUS</span>

          </div>

          {/* LOG ROWS */}
          <div className="wos-log-list">

            {filteredLogs.length > 0 ? (

              filteredLogs.map((log) => (

                <div
                  className="wos-log-row"
                  key={log.id}
                >

                  <span className="wos-log-time">
                    {log.time}
                  </span>

                  <span className="wos-log-module">
                    {log.module}
                  </span>

                  <span className="wos-log-operation">
                    {log.operation}
                  </span>

                  <span
                    className="wos-log-status"
                    style={{
                      color:
                        statusColors[
                          log.status
                        ],
                    }}
                  >
                    <i
                      style={{
                        background:
                          statusColors[
                            log.status
                          ],
                      }}
                    />

                    {log.status}

                  </span>

                </div>

              ))

            ) : (

              <div className="wos-log-empty">

                <div className="wos-log-empty-icon">
                  ≡
                </div>

                <strong>
                  No Logs Found
                </strong>

                <p>
                  ยังไม่มี Operation Log
                  ที่ตรงกับ Filter นี้
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* OPERATION FLOW */}
      <section>

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              OPERATION PIPELINE
            </div>

            <h2>
              Logging Architecture
            </h2>

          </div>

        </div>

        <div
          className="wos-glass-card"
          style={{
            padding: 20,
          }}
        >

          <div className="wos-log-pipeline">

            <div className="wos-log-pipeline-item">

              <span>
                01
              </span>

              <strong>
                Operation
              </strong>

              <p>
                WOS Module เริ่มการทำงาน
              </p>

            </div>

            <div className="wos-log-pipeline-line" />

            <div className="wos-log-pipeline-item">

              <span>
                02
              </span>

              <strong>
                Validation
              </strong>

              <p>
                Security Layer ตรวจสอบ Operation
              </p>

            </div>

            <div className="wos-log-pipeline-line" />

            <div className="wos-log-pipeline-item">

              <span>
                03
              </span>

              <strong>
                Logger
              </strong>

              <p>
                บันทึกผลลัพธ์เข้าสู่ Log Engine
              </p>

            </div>

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
            "rgba(0,220,255,0.12)",
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
              Operation Logging Layer
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              ตอนนี้ Logs เป็น Client-side
              Architecture สำหรับทดสอบ UI
              ก่อนเชื่อมต่อ Persistent Log Storage
              และ Windows Operation Backend
              ในขั้นตอนต่อไป
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          LOG ENGINE READY
        </div>

        <div>
          WOS ULTIMATE / OPERATION LOGS
        </div>

      </footer>

    </div>
  )
    }
