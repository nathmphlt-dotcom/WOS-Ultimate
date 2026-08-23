"use client"

import React, { useState } from "react"
import { useLanguage } from "../../../components/i18n/LanguageContext"

type CleanupItem = {
  id: string
  icon: string
  title: string
  description: string
  size: string
}

export default function CleanupPage() {
  const { language } = useLanguage()

  const isThai = language === "th"

  const [selected, setSelected] = useState<
    Record<string, boolean>
  >({
    temp: true,
    cache: true,
    recycle: false,
    shader: true,
    logs: false,
    thumbnails: true,
  })

  const [cleaning, setCleaning] = useState(false)
  const [complete, setComplete] = useState(false)

  const items: CleanupItem[] = [
    {
      id: "temp",
      icon: "◈",
      title: isThai
        ? "ไฟล์ชั่วคราว"
        : "Temporary Files",
      description: isThai
        ? "ลบไฟล์ชั่วคราวที่ไม่จำเป็น"
        : "Remove unnecessary temporary files",
      size: "1.8 GB",
    },
    {
      id: "cache",
      icon: "◆",
      title: isThai
        ? "Windows Cache"
        : "Windows Cache",
      description: isThai
        ? "ล้าง Cache ที่สะสมจาก Windows"
        : "Clear accumulated Windows cache",
      size: "624 MB",
    },
    {
      id: "recycle",
      icon: "⌫",
      title: isThai
        ? "ถังรีไซเคิล"
        : "Recycle Bin",
      description: isThai
        ? "ลบไฟล์ที่อยู่ในถังรีไซเคิล"
        : "Remove files from Recycle Bin",
      size: "2.4 GB",
    },
    {
      id: "shader",
      icon: "◉",
      title: isThai
        ? "Shader Cache"
        : "Shader Cache",
      description: isThai
        ? "ล้าง Shader Cache ของ GPU"
        : "Clear GPU shader cache",
      size: "412 MB",
    },
    {
      id: "logs",
      icon: "≡",
      title: isThai
        ? "System Logs"
        : "System Logs",
      description: isThai
        ? "ลบ Log เก่าของระบบ"
        : "Remove old system logs",
      size: "186 MB",
    },
    {
      id: "thumbnails",
      icon: "▧",
      title: isThai
        ? "Thumbnail Cache"
        : "Thumbnail Cache",
      description: isThai
        ? "ล้าง Thumbnail Cache"
        : "Clear thumbnail cache",
      size: "95 MB",
    },
  ]

  const selectedItems = items.filter(
    (item) => selected[item.id]
  )

  const totalSize = selectedItems.reduce(
    (total, item) =>
      total +
      parseFloat(
        item.size.replace(" GB", "").replace(" MB", "")
      ) *
        (item.size.includes("GB") ? 1024 : 1),
    0
  )

  const totalGB = (
    totalSize / 1024
  ).toFixed(2)

  const toggleItem = (id: string) => {
    setSelected((current) => ({
      ...current,
      [id]: !current[id],
    }))

    setComplete(false)
  }

  const selectAll = () => {
    const next: Record<string, boolean> = {}

    items.forEach((item) => {
      next[item.id] = true
    })

    setSelected(next)
    setComplete(false)
  }

  const clearSelection = () => {
    const next: Record<string, boolean> = {}

    items.forEach((item) => {
      next[item.id] = false
    })

    setSelected(next)
    setComplete(false)
  }

  const startCleanup = async () => {
    if (selectedItems.length === 0) {
      return
    }

    setCleaning(true)
    setComplete(false)

    await new Promise((resolve) =>
      setTimeout(resolve, 1600)
    )

    setCleaning(false)
    setComplete(true)
  }

  return (
    <div className="wos-cleanup-page">

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="wos-page-header">

        <div className="wos-page-title-row">

          <div>
            <div className="wos-page-kicker">
              WOS / TOOLS
            </div>

            <h1>
              {isThai
                ? "ทำความสะอาดระบบ"
                : "System Cleanup"}
            </h1>

            <p>
              {isThai
                ? "ลบไฟล์ที่ไม่จำเป็นและเพิ่มพื้นที่จัดเก็บ"
                : "Remove unnecessary files and free up storage space"}
            </p>
          </div>

          <div className="wos-page-badge">
            CLEANUP
          </div>

        </div>

      </div>

      {/* =================================================
          SUMMARY
          ================================================= */}

      <div className="wos-cleanup-summary">

        <div className="wos-cleanup-summary-main">

          <div className="wos-cleanup-summary-icon">
            ⌫
          </div>

          <div>
            <span>
              {isThai
                ? "พื้นที่ที่เลือก"
                : "SELECTED SPACE"}
            </span>

            <strong>
              {totalGB}
              <small> GB</small>
            </strong>

            <p>
              {selectedItems.length}{" "}
              {isThai
                ? "รายการที่เลือก"
                : "items selected"}
            </p>
          </div>

        </div>

        <div className="wos-cleanup-summary-actions">

          <button
            type="button"
            className="wos-cleanup-secondary"
            onClick={selectAll}
          >
            {isThai
              ? "เลือกทั้งหมด"
              : "Select All"}
          </button>

          <button
            type="button"
            className="wos-cleanup-secondary"
            onClick={clearSelection}
          >
            {isThai
              ? "ยกเลิกทั้งหมด"
              : "Clear All"}
          </button>

        </div>

      </div>

      {/* =================================================
          CLEANUP ITEMS
          ================================================= */}

      <div className="wos-cleanup-section">

        <div className="wos-cleanup-section-header">

          <div>
            <div className="wos-section-kicker">
              CLEANUP TARGETS
            </div>

            <h2>
              {isThai
                ? "รายการที่สามารถทำความสะอาดได้"
                : "Available Cleanup Targets"}
            </h2>
          </div>

          <span className="wos-cleanup-count">
            {selectedItems.length}/{items.length}
          </span>

        </div>

        <div className="wos-cleanup-grid">

          {items.map((item) => {

            const active =
              selected[item.id]

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  toggleItem(item.id)
                }
                className={`wos-cleanup-card ${
                  active ? "selected" : ""
                }`}
              >

                <div className="wos-cleanup-card-top">

                  <div className="wos-cleanup-icon">
                    {item.icon}
                  </div>

                  <div
                    className={`wos-cleanup-checkbox ${
                      active
                        ? "checked"
                        : ""
                    }`}
                  >
                    {active ? "✓" : ""}
                  </div>

                </div>

                <strong>
                  {item.title}
                </strong>

                <p>
                  {item.description}
                </p>

                <div className="wos-cleanup-card-bottom">
                  <span>
                    {isThai
                      ? "ขนาด"
                      : "SIZE"}
                  </span>

                  <b>
                    {item.size}
                  </b>
                </div>

              </button>
            )
          })}

        </div>

      </div>

      {/* =================================================
          ACTION
          ================================================= */}

      <div className="wos-cleanup-action">

        <div>

          <div className="wos-cleanup-status-dot" />

          <div>
            <strong>
              {complete
                ? isThai
                  ? "ทำความสะอาดเสร็จแล้ว"
                  : "Cleanup Complete"
                : cleaning
                  ? isThai
                    ? "กำลังทำความสะอาด..."
                    : "Cleaning..."
                  : isThai
                    ? "ระบบพร้อมทำความสะอาด"
                    : "System Ready"}
            </strong>

            <span>
              {complete
                ? isThai
                  ? "ไฟล์ที่เลือกได้รับการประมวลผลแล้ว"
                  : "Selected targets have been processed"
                : isThai
                  ? "เลือกเป้าหมายที่ต้องการก่อนเริ่ม"
                  : "Select targets before starting"}
            </span>
          </div>

        </div>

        <button
          type="button"
          className="wos-cleanup-primary"
          disabled={
            cleaning ||
            selectedItems.length === 0
          }
          onClick={startCleanup}
        >
          {cleaning
            ? isThai
              ? "กำลังทำความสะอาด..."
              : "Cleaning..."
            : complete
              ? isThai
                ? "ทำความสะอาดอีกครั้ง"
                : "Clean Again"
              : isThai
                ? "เริ่มทำความสะอาด"
                : "Start Cleanup"}
        </button>

      </div>

    </div>
  )
    }
