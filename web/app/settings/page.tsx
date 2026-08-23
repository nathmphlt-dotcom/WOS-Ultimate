"use client"

import React, { useState } from "react"
import Link from "next/link"

type ToggleProps = {
  label: string
  description: string
  defaultChecked?: boolean
}

function SettingToggle({
  label,
  description,
  defaultChecked = false,
}: ToggleProps) {
  const [enabled, setEnabled] = useState(defaultChecked)

  return (
    <div className="wos-setting-row">
      <div className="wos-setting-info">
        <strong>{label}</strong>
        <p>{description}</p>
      </div>

      <button
        type="button"
        className={`wos-toggle ${enabled ? "active" : ""}`}
        onClick={() => setEnabled(!enabled)}
        aria-label={`${label} ${enabled ? "enabled" : "disabled"}`}
        aria-pressed={enabled}
      >
        <span />
      </button>
    </div>
  )
}

export default function SettingsPage() {
  const [language, setLanguage] = useState("TH")
  const [theme, setTheme] = useState("CyberGlass")

  return (
    <div className="wos-page-transition">

      {/* HEADER */}
      <section className="wos-page-header">
        <div className="wos-page-title-row">

          <div>
            <div className="page-kicker">
              WOS / CONFIGURATION
            </div>

            <h1>Settings</h1>

            <p>
              ตั้งค่า Interface, Language,
              Security และพฤติกรรมของ WOS Ultimate
            </p>
          </div>

          <span className="wos-page-badge">
            CONFIGURATION
          </span>

        </div>
      </section>

      {/* HERO */}
      <section className="hero-card">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            WOS CONFIGURATION CENTER
          </div>

          <h2>
            Configure your{" "}
            <strong>WOS Experience</strong>
          </h2>

          <p>
            ปรับแต่งประสบการณ์การใช้งาน WOS Ultimate
            ตั้งแต่ภาษา รูปแบบ Interface
            ไปจนถึงระบบความปลอดภัย
          </p>

          <div className="hero-buttons">

            <Link
              href="/"
              className="wos-button primary"
            >
              ⌂ Dashboard
            </Link>

            <Link
              href="/security"
              className="wos-button secondary"
            >
              ◆ Security
            </Link>

          </div>

        </div>

        <div className="hero-orb">

          <div className="orb-core">
            <span>
              WOS
            </span>
          </div>

        </div>

      </section>

      {/* APPEARANCE */}
      <section>

        <div className="section-heading">
          <div>
            <div className="section-kicker">
              INTERFACE
            </div>

            <h2>
              Appearance
            </h2>
          </div>
        </div>

        <div className="wos-glass-card wos-settings-card">

          <div className="wos-setting-row">

            <div className="wos-setting-info">
              <strong>Theme</strong>

              <p>
                เลือก Theme หลักของ WOS Interface
              </p>
            </div>

            <div className="wos-select-group">

              {["CyberGlass", "Dark"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`wos-select-button ${
                    theme === item ? "active" : ""
                  }`}
                  onClick={() => setTheme(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="wos-divider" />

          <SettingToggle
            label="Glass Effects"
            description="เปิดใช้ Glass / Blur Effect ของ Interface"
            defaultChecked
          />

          <SettingToggle
            label="Smooth Animations"
            description="เปิดใช้ Animation และ Page Transition"
            defaultChecked
          />

          <SettingToggle
            label="Ambient Lighting"
            description="แสดงแสง Ambient รอบ Interface"
            defaultChecked
          />

        </div>

      </section>

      {/* LANGUAGE */}
      <section>

        <div className="section-heading">
          <div>
            <div className="section-kicker">
              LOCALIZATION
            </div>

            <h2>
              Language
            </h2>
          </div>
        </div>

        <div className="wos-glass-card wos-settings-card">

          <div className="wos-setting-row">

            <div className="wos-setting-info">

              <strong>
                Interface Language
              </strong>

              <p>
                ภาษาที่ใช้แสดงผลใน WOS Ultimate
              </p>

            </div>

            <div className="wos-language-switch">

              <button
                type="button"
                className={`wos-language-option ${
                  language === "TH" ? "active" : ""
                }`}
                onClick={() => setLanguage("TH")}
              >
                🇹🇭 TH
              </button>

              <button
                type="button"
                className={`wos-language-option ${
                  language === "EN" ? "active" : ""
                }`}
                onClick={() => setLanguage("EN")}
              >
                🇬🇧 EN
              </button>

              <button
                type="button"
                className={`wos-language-option ${
                  language === "ES" ? "active" : ""
                }`}
                onClick={() => setLanguage("ES")}
              >
                🇪🇸 ES
              </button>

            </div>

          </div>

          <div className="wos-language-status">

            <span className="wos-status-dot" />

            Current language:

            <strong>
              {language}
            </strong>

          </div>

        </div>

      </section>

      {/* SECURITY */}
      <section>

        <div className="section-heading">
          <div>
            <div className="section-kicker">
              SECURITY
            </div>

            <h2>
              Security Settings
            </h2>
          </div>
        </div>

        <div className="wos-glass-card wos-settings-card">

          <SettingToggle
            label="Safe Mode"
            description="บังคับให้ Operation Engine ตรวจสอบ Safety Layer ก่อนทำงาน"
            defaultChecked
          />

          <div className="wos-divider" />

          <SettingToggle
            label="Operation Confirmation"
            description="ถามยืนยันก่อนดำเนินการเปลี่ยนแปลงระบบ"
            defaultChecked
          />

          <div className="wos-divider" />

          <SettingToggle
            label="Admin Protection"
            description="ป้องกัน Operation ที่ต้องใช้สิทธิ์ Administrator"
            defaultChecked
          />

          <div className="wos-divider" />

          <SettingToggle
            label="Operation Logging"
            description="บันทึกประวัติการทำงานของ WOS"
            defaultChecked
          />

        </div>

      </section>

      {/* PERFORMANCE */}
      <section>

        <div className="section-heading">
          <div>
            <div className="section-kicker">
              PERFORMANCE
            </div>

            <h2>
              Application Behavior
            </h2>
          </div>
        </div>

        <div className="wos-glass-card wos-settings-card">

          <SettingToggle
            label="Auto System Detection"
            description="ตรวจสอบข้อมูลระบบเมื่อเปิด WOS"
            defaultChecked
          />

          <div className="wos-divider" />

          <SettingToggle
            label="Background Monitoring"
            description="เตรียมระบบสำหรับ Monitoring Engine"
          />

          <div className="wos-divider" />

          <SettingToggle
            label="Startup Optimization"
            description="เตรียมระบบสำหรับตรวจสอบ Startup Items"
          />

        </div>

      </section>

      {/* INFORMATION */}
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
            gap: 12,
            alignItems: "flex-start",
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
              Configuration Architecture
            </strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "var(--wos-muted)",
                fontSize: 9,
                lineHeight: 1.7,
              }}
            >
              Settings ตอนนี้เป็น Interface Layer
              สำหรับเตรียมเชื่อมกับ Global Configuration,
              Language Provider, Security Provider
              และ Windows Backend ใน Part ถัดไป
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="system-footer">

        <div>
          <span className="footer-dot" />
          CONFIGURATION READY
        </div>

        <div>
          WOS ULTIMATE / SETTINGS
        </div>

      </footer>

    </div>
  )
          }
