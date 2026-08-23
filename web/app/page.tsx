"use client";

import {
  Activity,
  ArrowUpRight,
  Cpu,
  Gauge,
  Gamepad2,
  HardDrive,
  MemoryStick,
  Monitor,
  Network,
  Power,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "CPU LOAD",
    value: "32%",
    meta: "Optimal",
    icon: Cpu,
    type: "positive",
  },
  {
    label: "GPU LOAD",
    value: "47%",
    meta: "RTX detected",
    icon: Monitor,
    type: "positive",
  },
  {
    label: "MEMORY",
    value: "61%",
    meta: "9.8 / 16 GB",
    icon: MemoryStick,
    type: "positive",
  },
  {
    label: "FPS",
    value: "144",
    meta: "+18% estimated",
    icon: Gauge,
    type: "positive",
  },
];

const optimizations = [
  {
    title: "Gaming Performance",
    description: "Prepare Windows for maximum gaming performance.",
    icon: Gamepad2,
  },
  {
    title: "Background Processes",
    description: "Reduce unnecessary background activity.",
    icon: Activity,
  },
  {
    title: "Input Latency",
    description: "Optimize responsiveness for competitive gaming.",
    icon: Zap,
  },
  {
    title: "Network Performance",
    description: "Apply safe network performance optimizations.",
    icon: Network,
  },
];

export default function Home() {
  const [boosting, setBoosting] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const handleBoost = () => {
    setBoosting(true);

    setTimeout(() => {
      setBoosting(false);
      setOptimized(true);
    }, 1800);
  };

  return (
    <main className="wos-app">
      <div className="wos-shell">

        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        <aside className="wos-sidebar">
          <div className="wos-logo">
            <div className="wos-logo-mark">
              <Sparkles size={19} />
            </div>

            <div>
              <div className="wos-logo-text">WOS</div>
              <div className="wos-logo-subtitle">
                WINDOWS OPTIMIZER
              </div>
            </div>
          </div>

          <nav className="wos-nav">

            <div className="wos-nav-section">
              <div className="wos-nav-title">
                Command
              </div>

              <button className="wos-nav-item active">
                <span className="wos-nav-icon">
                  <Gauge size={17} />
                </span>
                <span className="wos-nav-label">
                  Dashboard
                </span>
              </button>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Activity size={17} />
                </span>
                <span className="wos-nav-label">
                  Performance
                </span>
              </button>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Rocket size={17} />
                </span>
                <span className="wos-nav-label">
                  FPS Boost
                </span>
                <span className="wos-nav-badge">
                  PRO
                </span>
              </button>
            </div>

            <div className="wos-nav-section">
              <div className="wos-nav-title">
                Gaming
              </div>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Gamepad2 size={17} />
                </span>
                <span className="wos-nav-label">
                  Game Mode
                </span>
              </button>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Network size={17} />
                </span>
                <span className="wos-nav-label">
                  Network
                </span>
              </button>
            </div>

            <div className="wos-nav-section">
              <div className="wos-nav-title">
                System
              </div>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Cpu size={17} />
                </span>
                <span className="wos-nav-label">
                  Processes
                </span>
              </button>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <HardDrive size={17} />
                </span>
                <span className="wos-nav-label">
                  Storage
                </span>
              </button>

              <button className="wos-nav-item">
                <span className="wos-nav-icon">
                  <Settings size={17} />
                </span>
                <span className="wos-nav-label">
                  Settings
                </span>
              </button>
            </div>
          </nav>

          <div className="wos-sidebar-footer">
            <div className="wos-system-chip">
              <span className="wos-status-dot" />

              <div className="wos-system-text">
                <div className="wos-system-name">
                  System Online
                </div>

                <div className="wos-system-state">
                  WOS CORE READY
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* =====================================================
            TOPBAR
        ===================================================== */}

        <header className="wos-topbar">
          <div className="wos-topbar-left">
            <div className="wos-breadcrumb">
              WOS / <strong>Command Center</strong>
            </div>

            <div className="wos-live">
              <span className="wos-live-dot" />
              SYSTEM ONLINE
            </div>
          </div>

          <div className="wos-topbar-right">
            <button className="wos-icon-button">
              <ShieldCheck size={16} />
            </button>

            <button className="wos-icon-button">
              <Settings size={16} />
            </button>
          </div>
        </header>

        {/* =====================================================
            MAIN
        ===================================================== */}

        <section className="wos-main">
          <div className="wos-content">

            {/* PAGE HEADER */}

            <div className="wos-page-header">
              <div>
                <div className="wos-page-eyebrow">
                  <Activity size={12} />
                  COMMAND CENTER
                </div>

                <h1 className="wos-page-title">
                  System Overview
                </h1>

                <p className="wos-page-description">
                  Monitor your system and prepare Windows for
                  a faster, smoother gaming experience.
                </p>
              </div>
            </div>

            {/* =================================================
                COMMAND CENTER HERO
            ================================================= */}

            <section className="wos-command-center">
              <div className="wos-command-content">

                <div className="wos-page-eyebrow">
                  <Sparkles size={12} />
                  PREMIUM GAMING OS
                </div>

                <h2 className="wos-command-title">
                  Take Control.
                  <br />
                  <span>Unlock Performance.</span>
                </h2>

                <p className="wos-command-description">
                  WOS analyzes your gaming environment and
                  provides a centralized command center for
                  performance optimization.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 9,
                    marginTop: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="wos-button wos-button-primary"
                    onClick={handleBoost}
                    disabled={boosting}
                  >
                    <Power size={14} />

                    {boosting
                      ? "OPTIMIZING..."
                      : optimized
                        ? "SYSTEM OPTIMIZED"
                        : "BOOST NOW"}
                  </button>

                  <button className="wos-button wos-button-secondary">
                    <Activity size={14} />
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </section>

            {/* =================================================
                SYSTEM STATS
            ================================================= */}

            <div
              className="wos-grid wos-grid-4"
              style={{ marginTop: 14 }}
            >
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    className="wos-stat-card"
                    key={stat.label}
                  >
                    <div className="wos-stat-header">
                      <span className="wos-stat-label">
                        {stat.label}
                      </span>

                      <span className="wos-stat-icon">
                        <Icon size={15} />
                      </span>
                    </div>

                    <div className="wos-stat-value">
                      {stat.value}
                    </div>

                    <div className="wos-stat-meta">
                      <span className="wos-stat-positive">
                        ●
                      </span>

                      {stat.meta}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                MAIN PERFORMANCE GRID
            ================================================= */}

            <div
              className="wos-grid-main"
              style={{ marginTop: 14 }}
            >

              {/* PERFORMANCE */}

              <section className="wos-panel">
                <div className="wos-panel-header">
                  <div>
                    <div className="wos-panel-title">
                      System Performance
                    </div>

                    <div className="wos-panel-subtitle">
                      Live resource utilization
                    </div>
                  </div>

                  <span className="wos-status wos-status-success">
                    OPTIMAL
                  </span>
                </div>

                <div className="wos-panel-body">

                  <div className="wos-metric">
                    <div className="wos-metric-top">
                      <span className="wos-metric-name">
                        CPU
                      </span>

                      <span className="wos-metric-value">
                        32%
                      </span>
                    </div>

                    <div className="wos-meter">
                      <div
                        className="wos-meter-fill"
                        style={{ width: "32%" }}
                      />
                    </div>
                  </div>

                  <div className="wos-metric">
                    <div className="wos-metric-top">
                      <span className="wos-metric-name">
                        GPU
                      </span>

                      <span className="wos-metric-value">
                        47%
                      </span>
                    </div>

                    <div className="wos-meter">
                      <div
                        className="wos-meter-fill cyan"
                        style={{ width: "47%" }}
                      />
                    </div>
                  </div>

                  <div className="wos-metric">
                    <div className="wos-metric-top">
                      <span className="wos-metric-name">
                        MEMORY
                      </span>

                      <span className="wos-metric-value">
                        61%
                      </span>
                    </div>

                    <div className="wos-meter">
                      <div
                        className="wos-meter-fill green"
                        style={{ width: "61%" }}
                      />
                    </div>
                  </div>

                  <div className="wos-metric">
                    <div className="wos-metric-top">
                      <span className="wos-metric-name">
                        DISK
                      </span>

                      <span className="wos-metric-value">
                        14%
                      </span>
                    </div>

                    <div className="wos-meter">
                      <div
                        className="wos-meter-fill orange"
                        style={{ width: "14%" }}
                      />
                    </div>
                  </div>

                </div>
              </section>

              {/* QUICK STATUS */}

              <section className="wos-panel">
                <div className="wos-panel-header">
                  <div>
                    <div className="wos-panel-title">
                      System Status
                    </div>

                    <div className="wos-panel-subtitle">
                      WOS health monitor
                    </div>
                  </div>
                </div>

                <div className="wos-panel-body">

                  <div
                    className="wos-optimization"
                    style={{ marginBottom: 9 }}
                  >
                    <div className="wos-optimization-icon">
                      <ShieldCheck size={18} />
                    </div>

                    <div className="wos-optimization-content">
                      <div className="wos-optimization-title">
                        Protection
                      </div>

                      <div className="wos-optimization-description">
                        System safeguards active
                      </div>
                    </div>

                    <span className="wos-status wos-status-success">
                      OK
                    </span>
                  </div>

                  <div
                    className="wos-optimization"
                    style={{ marginBottom: 9 }}
                  >
                    <div className="wos-optimization-icon">
                      <Network size={18} />
                    </div>

                    <div className="wos-optimization-content">
                      <div className="wos-optimization-title">
                        Network
                      </div>

                      <div className="wos-optimization-description">
                        Connection stable
                      </div>
                    </div>

                    <span className="wos-status wos-status-success">
                      18ms
                    </span>
                  </div>

                  <div className="wos-optimization">
                    <div className="wos-optimization-icon">
                      <Rocket size={18} />
                    </div>

                    <div className="wos-optimization-content">
                      <div className="wos-optimization-title">
                        Optimizer
                      </div>

                      <div className="wos-optimization-description">
                        Ready for optimization
                      </div>
                    </div>

                    <span className="wos-status wos-status-neutral">
                      READY
                    </span>
                  </div>

                </div>
              </section>
            </div>

            {/* =================================================
                QUICK OPTIMIZATION
            ================================================= */}

            <section
              className="wos-panel"
              style={{ marginTop: 14 }}
            >
              <div className="wos-panel-header">
                <div>
                  <div className="wos-panel-title">
                    Quick Optimization
                  </div>

                  <div className="wos-panel-subtitle">
                    Safe performance modules
                  </div>
                </div>

                <span className="wos-tech">
                  {optimized
                    ? "OPTIMIZATION COMPLETE"
                    : "READY"}
                </span>
              </div>

              <div className="wos-panel-body">

                <div
                  className="wos-grid wos-grid-2"
                >
                  {optimizations.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="wos-optimization"
                        key={item.title}
                      >
                        <div className="wos-optimization-icon">
                          <Icon size={18} />
                        </div>

                        <div className="wos-optimization-content">
                          <div className="wos-optimization-title">
                            {item.title}
                          </div>

                          <div className="wos-optimization-description">
                            {item.description}
                          </div>
                        </div>

                        <button className="wos-icon-button">
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* =================================================
                FOOTER SYSTEM INFO
            ================================================= */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                padding: "20px 4px 5px",
                flexWrap: "wrap",
              }}
            >
              <span className="wos-tech">
                WOS CORE • COMMAND CENTER
              </span>

              <span className="wos-tech">
                WINDOWS OPTIMIZER SUITE
              </span>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
