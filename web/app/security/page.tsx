"use client"

import React from "react"
import Link from "next/link"

const securityModules = [
  {
    title: "Security Context",
    value: "ONLINE",
    description:
      "ตรวจสอบสถานะ Security Context ของ WOS",
    icon: "◆",
    accent: "purple",
  },
  {
    title: "Administrator",
    value: "READY",
    description:
      "ตรวจสอบสิทธิ์สำหรับการทำงานระดับระบบ",
    icon: "♟",
    accent: "cyan",
  },
  {
    title: "System Protection",
    value: "ACTIVE",
    description:
      "ตรวจสอบสถานะการป้องกันระบบ",
    icon: "✓",
    accent: "green",
  },
  {
    title: "Policy Status",
    value: "NORMAL",
    description:
      "ตรวจสอบ Windows security policies",
    icon: "▣",
    accent: "orange",
  },
]

const securityChecks = [
  {
    title: "Security Context",
    description:
      "WOS Security Context พร้อมทำงาน",
    status: "ONLINE",
    icon: "◆",
    type: "success",
  },
  {
    title: "Administrator Access",
    description:
      "พร้อมสำหรับฟังก์ชันที่ต้องใช้สิทธิ์ Administrator",
    status: "READY",
    icon: "♟",
    type: "success",
  },
  {
    title: "Windows Protection",
    description:
      "ระบบป้องกัน Windows อยู่ในสถานะปกติ",
    status: "PROTECTED",
    icon: "✓",
    type: "success",
  },
  {
    title: "Optimization Permissions",
    description:
      "ตรวจสอบสิทธิ์ก่อนดำเนินการ Optimization",
    status: "CHECK",
    icon: "!",
    type: "warning",
  },
]

export default function SecurityPage() {
  return (
    <div className="wos-page-transition">
      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">
          <div>
            <div className="page-kicker">
              SECURITY CENTER
            </div>

            <h1>Security</h1>

            <p>
              จัดการ Security Context และสิทธิ์ของ WOS
            </p>
          </div>

          <span className="wos-page-badge">
            PROTECTED
          </span>
        </div>
      </section>

      {/* SECURITY HERO */}
      <section
        className="hero-card"
        style={{
          borderColor:
            "rgba(53,230,155,0.14)",
        }}
      >
        <div className="hero-content">
          <div
            className="hero-badge"
            style={{
              color: "#7cf4bc",
              borderColor:
                "rgba(71,229,159,0.18)",
              background:
                "rgba(71,229,159,0.04)",
            }}
          >
            <span />
            SECURITY CONTEXT ONLINE
          </div>

          <h2>
            WOS Security{" "}
            <strong>Protected</strong>
          </h2>

          <p>
            Security layer สำหรับควบคุมสิทธิ์
            และป้องกันการทำงานที่อาจส่งผลต่อระบบ
            Windows โดยไม่ได้รับอนุญาต
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="wos-button primary"
            >
              ◆ Security Check
            </button>

            <Link
              href="/scanner"
              className="wos-button secondary"
            >
              ◉ Open Scanner
            </Link>
          </div>
        </div>

        <div className="hero-orb">
          <div
            className="orb-core"
            style={{
              borderColor:
                "rgba(53,230,155,0.3)",
              boxShadow:
                "0 0 80px rgba(53,230,155,0.18), inset 0 0 40px rgba(53,230,155,0.08)",
            }}
          >
            <span
              style={{
                color: "#6ff0b5",
                textShadow:
                  "0 0 30px rgba(53,230,155,0.55)",
              }}
            >
              SEC
            </span>
          </div>
        </div>
      </section>

      {/* SECURITY MODULES */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SECURITY MONITOR
            </div>

            <h2>Security Status</h2>
          </div>

          <div className="live-status">
            <span />
            PROTECTED
          </div>
        </div>

        <div className="stats-grid">
          {securityModules.map((item) => (
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
                  fontSize: 21,
                }}
              >
                {item.value}
              </div>

              <div className="stat-line">
                <div
                  style={{
                    width:
                      item.value === "ONLINE"
                        ? "100%"
                        : item.value === "ACTIVE"
                          ? "100%"
                          : "78%",
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

      {/* SECURITY CHECKS */}
      <section>
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SECURITY CHECKS
            </div>

            <h2>Protection Status</h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {securityChecks.map((item) => {
            const success =
              item.type === "success"

            return (
              <div
                key={item.title}
                className="wos-glass-card"
                style={{
                  padding:
                    "16px 18px",
                  display: "flex",
                  alignItems:
                    "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    minWidth: 38,
                    display: "grid",
                    placeItems:
                      "center",
                    borderRadius: 10,
                    color: success
                      ? "#4de8a4"
                      : "#ffb45d",
                    background:
                      success
                        ? "rgba(53,230,155,0.08)"
                        : "rgba(255,180,93,0.08)",
                    fontWeight: 900,
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: 10,
                      flexWrap:
                        "wrap",
                    }}
                  >
                    <strong
                      style={{
                        fontSize: 11,
                      }}
                    >
                      {item.title}
                    </strong>

                    <span
                      className="wos-page-badge"
                      style={{
                        color: success
                          ? "#4de8a4"
                          : "#ffb45d",
                        borderColor:
                          success
                            ? "rgba(53,230,155,0.2)"
                            : "rgba(255,180,93,0.2)",
                        background:
                          success
                            ? "rgba(53,230,155,0.05)"
                            : "rgba(255,180,93,0.05)",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p
                    style={{
                      margin:
                        "5px 0 0",
                      color:
                        "var(--wos-muted)",
                      fontSize: 9,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <span
                  style={{
                    color:
                      success
                        ? "#4de8a4"
                        : "#ffb45d",
                    fontSize: 18,
                  }}
                >
                  {success
                    ? "✓"
                    : "!"}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECURITY NOTICE */}
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
            alignItems:
              "flex-start",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              minWidth: 34,
              display: "grid",
              placeItems:
                "center",
              borderRadius: 9,
              color: "#aa71ff",
              background:
                "rgba(140,66,255,0.09)",
            }}
          >
            ◆
          </div>

          <div>
            <strong
              style={{
                fontSize: 11,
              }}
            >
              WOS Security Layer
            </strong>

            <p
              style={{
                margin:
                  "6px 0 0",
                color:
                  "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              Security Context จะเป็นตัวกลาง
              สำหรับตรวจสอบสิทธิ์ก่อนที่ WOS
              จะสามารถดำเนินการกับระบบ Windows
              ในขั้นตอนต่อไป
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="system-footer">
        <div>
          <span className="footer-dot" />
          SECURITY CONTEXT ONLINE
        </div>

        <div>
          WOS ULTIMATE / SECURITY CENTER
        </div>
      </footer>
    </div>
  )
  }
