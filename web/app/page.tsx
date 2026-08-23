"use client";

import { useState } from "react";

const menuItems = [
  { name: "Lobby", icon: "⌂" },
  { name: "Dashboard", icon: "◈" },
  { name: "Smart Scan", icon: "⌕" },
  { name: "Cleaning", icon: "✦" },
  { name: "Boost PC", icon: "⚡" },
  { name: "FiveM", icon: "◉" },
  { name: "Game", icon: "▣" },
  { name: "Network", icon: "⌁" },
  { name: "Registry", icon: "▤" },
  { name: "Services", icon: "⚙" },
  { name: "Startup", icon: "↗" },
  { name: "Backup", icon: "◫" },
  { name: "Restore", icon: "↶" },
  { name: "Settings", icon: "⚙" },
];

const statCards = [
  {
    title: "CPU USAGE",
    value: "—",
    unit: "%",
    status: "WAITING",
    icon: "◈",
  },
  {
    title: "GPU USAGE",
    value: "—",
    unit: "%",
    status: "WAITING",
    icon: "◆",
  },
  {
    title: "RAM USAGE",
    value: "—",
    unit: "%",
    status: "WAITING",
    icon: "▦",
  },
  {
    title: "DISK USAGE",
    value: "—",
    unit: "%",
    status: "WAITING",
    icon: "▤",
  },
];

export default function Home() {
  const [active, setActive] = useState("Lobby");

  return (
    <main className="wos-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">W</div>

          <div>
            <div className="brand-title">WOS</div>
            <div className="brand-subtitle">WINDOWS OPTIMIZER</div>
          </div>
        </div>

        <div className="sidebar-label">MAIN</div>

        <nav className="navigation">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>

              {item.name === "FiveM" && (
                <span className="nav-dot" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="safe-mode">
            <div className="safe-indicator" />

            <div>
              <div className="safe-title">SAFE MODE</div>
              <div className="safe-subtitle">
                Protection enabled
              </div>
            </div>
          </div>

          <div className="version">
            WOS Ultimate
            <span>v1.0.0</span>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <section className="content">

        {/* TOP BAR */}
        <header className="topbar">
          <div>
            <div className="page-kicker">WINDOWS OPTIMIZER SUITE</div>
            <h1>{active}</h1>
          </div>

          <div className="top-actions">
            <button className="icon-button">⌕</button>
            <button className="icon-button notification">
              ◇
              <span />
            </button>

            <div className="admin-badge">
              <div className="admin-dot" />
              <div>
                <strong>ADMIN</strong>
                <small>Privilege status</small>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero-card">
          <div className="hero-content">
            <div className="hero-badge">
              <span />
              SYSTEM READY
            </div>

            <h2>
              Optimize your
              <br />
              <strong>Windows Experience.</strong>
            </h2>

            <p>
              Scan your system, detect performance issues and
              apply safe, reversible gaming optimizations.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                <span>⚡</span>
                SMART BOOST
              </button>

              <button className="secondary-button">
                <span>⌕</span>
                SMART SCAN
              </button>
            </div>
          </div>

          <div className="hero-orb">
            <div className="orb-core">
              <span>WOS</span>
            </div>
          </div>
        </section>

        {/* SYSTEM STATUS */}
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              SYSTEM MONITOR
            </span>
            <h2>System Status</h2>
          </div>

          <div className="live-status">
            <span />
            LIVE
          </div>
        </div>

        <section className="stats-grid">
          {statCards.map((card) => (
            <div className="stat-card" key={card.title}>
              <div className="stat-top">
                <div className="stat-icon">
                  {card.icon}
                </div>

                <span className="status-badge">
                  {card.status}
                </span>
              </div>

              <div className="stat-title">
                {card.title}
              </div>

              <div className="stat-value">
                {card.value}
                <span>{card.unit}</span>
              </div>

              <div className="stat-line">
                <div />
              </div>
            </div>
          ))}
        </section>

        {/* QUICK ACTIONS */}
        <div className="section-heading actions-heading">
          <div>
            <span className="section-kicker">
              OPTIMIZATION CENTER
            </span>
            <h2>Quick Actions</h2>
          </div>
        </div>

        <section className="actions-grid">
          <ActionCard
            icon="⚡"
            title="Boost PC"
            description="Optimize Windows for gaming."
            accent="purple"
          />

          <ActionCard
            icon="◉"
            title="FiveM Booster"
            description="Optimize FiveM performance."
            accent="cyan"
          />

          <ActionCard
            icon="✦"
            title="Clean PC"
            description="Remove safe temporary files."
            accent="green"
          />

          <ActionCard
            icon="⌁"
            title="Network"
            description="Analyze network stability."
            accent="orange"
          />
        </section>

        {/* FOOTER STATUS */}
        <footer className="system-footer">
          <div>
            <span className="footer-dot" />
            WOS ENGINE ONLINE
          </div>

          <div>
            SAFE • REVERSIBLE • VERIFIED
          </div>
        </footer>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #07080d;
          color: #f5f7ff;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        body {
          min-height: 100vh;
        }

        button {
          font: inherit;
        }

        .wos-shell {
          min-height: 100vh;
          display: flex;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(125, 45, 255, 0.09),
              transparent 28%
            ),
            radial-gradient(
              circle at 30% 80%,
              rgba(0, 229, 255, 0.045),
              transparent 25%
            ),
            #07080d;
        }

        .ambient {
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
          opacity: 0.12;
        }

        .ambient-one {
          background: #742cff;
          right: -180px;
          top: -160px;
        }

        .ambient-two {
          background: #00d9ff;
          left: 200px;
          bottom: -300px;
        }

        /* SIDEBAR */

        .sidebar {
          width: 250px;
          min-width: 250px;
          min-height: 100vh;
          padding: 26px 16px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(10, 11, 18, 0.82);
          backdrop-filter: blur(30px);
          position: relative;
          z-index: 5;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 10px 30px;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 19px;
          background:
            linear-gradient(
              135deg,
              #8e42ff,
              #5420cf
            );
          box-shadow:
            0 0 25px rgba(125, 45, 255, 0.45);
        }

        .brand-title {
          font-size: 17px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .brand-subtitle {
          color: #70758a;
          font-size: 8px;
          letter-spacing: 1.5px;
          margin-top: 3px;
        }

        .sidebar-label,
        .section-kicker,
        .page-kicker {
          color: #696e82;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .sidebar-label {
          padding: 0 12px 10px;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          border: 0;
          width: 100%;
          color: #85899a;
          background: transparent;
          padding: 10px 12px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          cursor: pointer;
          transition: 0.2s ease;
          font-size: 12px;
          position: relative;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.045);
        }

        .nav-item.active {
          color: #fff;
          background:
            linear-gradient(
              90deg,
              rgba(126, 45, 255, 0.22),
              rgba(126, 45, 255, 0.06)
            );
          box-shadow:
            inset 2px 0 0 #8c42ff;
        }

        .nav-icon {
          width: 18px;
          text-align: center;
          color: #888da2;
          font-size: 15px;
        }

        .nav-item.active .nav-icon {
          color: #a96cff;
        }

        .nav-dot {
          margin-left: auto;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00e0ff;
          box-shadow: 0 0 10px #00e0ff;
        }

        .sidebar-bottom {
          margin-top: auto;
        }

        .safe-mode {
          padding: 13px;
          border: 1px solid rgba(0, 224, 255, 0.09);
          border-radius: 13px;
          background: rgba(0, 224, 255, 0.035);
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .safe-indicator,
        .admin-dot,
        .live-status span,
        .footer-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #35e69b;
          box-shadow: 0 0 12px rgba(53, 230, 155, 0.8);
        }

        .safe-title {
          font-size: 10px;
          font-weight: 800;
        }

        .safe-subtitle {
          color: #666c80;
          font-size: 9px;
          margin-top: 3px;
        }

        .version {
          color: #555a6d;
          font-size: 9px;
          padding: 18px 4px 0;
          display: flex;
          justify-content: space-between;
        }

        .version span {
          color: #777c8f;
        }

        /* CONTENT */

        .content {
          flex: 1;
          min-width: 0;
          padding: 30px 38px;
          position: relative;
          z-index: 2;
          overflow-y: auto;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .topbar h1 {
          margin: 5px 0 0;
          font-size: 25px;
          letter-spacing: -0.5px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .icon-button {
          width: 37px;
          height: 37px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: #a6aabd;
          background: rgba(255, 255, 255, 0.025);
          cursor: pointer;
        }

        .notification {
          position: relative;
        }

        .notification span {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8c42ff;
          top: 8px;
          right: 8px;
        }

        .admin-badge {
          margin-left: 8px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.025);
        }

        .admin-badge strong {
          display: block;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .admin-badge small {
          display: block;
          color: #606579;
          font-size: 8px;
          margin-top: 2px;
        }

        /* HERO */

        .hero-card {
          min-height: 290px;
          border-radius: 20px;
          border: 1px solid rgba(155, 100, 255, 0.15);
          background:
            linear-gradient(
              120deg,
              rgba(30, 20, 49, 0.9),
              rgba(16, 17, 26, 0.8)
            );
          position: relative;
          overflow: hidden;
          padding: 38px 42px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.025),
            0 25px 70px rgba(0, 0, 0, 0.22);
        }

        .hero-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(139, 64, 255, 0.08),
              transparent 55%
            );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 570px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7cf4bc;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.3px;
          padding: 6px 9px;
          border: 1px solid rgba(71, 229, 159, 0.15);
          border-radius: 7px;
          background: rgba(71, 229, 159, 0.04);
        }

        .hero-badge span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #47e59f;
          box-shadow: 0 0 10px #47e59f;
        }

        .hero-card h2 {
          margin: 20px 0 10px;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .hero-card h2 strong {
          background:
            linear-gradient(
              90deg,
              #ffffff,
              #a66cff
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-card p {
          max-width: 510px;
          color: #85899b;
          font-size: 12px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 10px;
          margin-top: 23px;
        }

        .primary-button,
        .secondary-button {
          border: 0;
          border-radius: 10px;
          padding: 12px 17px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.7px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .primary-button {
          color: #fff;
          background:
            linear-gradient(
              135deg,
              #8c42ff,
              #6625dd
            );
          box-shadow:
            0 10px 30px rgba(124, 45, 255, 0.28);
        }

        .primary-button:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 35px rgba(124, 45, 255, 0.4);
        }

        .secondary-button {
          color: #b3b6c6;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.035);
        }

        .hero-orb {
          position: absolute;
          width: 280px;
          height: 280px;
          right: 80px;
          top: 5px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(136, 58, 255, 0.16),
              transparent 62%
            );
        }

        .orb-core {
          width: 155px;
          height: 155px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid rgba(153, 91, 255, 0.35);
          background:
            radial-gradient(
              circle,
              rgba(139, 62, 255, 0.2),
              rgba(9, 9, 16, 0.85)
            );
          box-shadow:
            0 0 80px rgba(123, 45, 255, 0.35),
            inset 0 0 40px rgba(123, 45, 255, 0.12);
        }

        .orb-core span {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: 4px;
          color: #b27aff;
          text-shadow: 0 0 30px rgba(167, 105, 255, 0.7);
        }

        /* SECTIONS */

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin: 30px 0 14px;
        }

        .section-heading h2 {
          margin: 4px 0 0;
          font-size: 17px;
        }

        .live-status {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #5c6377;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        /* STATS */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .stat-card {
          min-height: 155px;
          padding: 17px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.065);
          background: rgba(17, 18, 27, 0.72);
          transition: 0.2s ease;
        }

        .stat-card:hover {
          border-color: rgba(140, 66, 255, 0.25);
          transform: translateY(-2px);
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-icon {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          color: #9c5cff;
          background: rgba(140, 66, 255, 0.08);
        }

        .status-badge {
          color: #656a7d;
          font-size: 7px;
          letter-spacing: 1px;
          padding: 4px 6px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.035);
        }

        .stat-title {
          color: #707588;
          margin-top: 18px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .stat-value {
          margin-top: 4px;
          font-size: 29px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .stat-value span {
          color: #64697b;
          font-size: 11px;
          margin-left: 2px;
        }

        .stat-line {
          margin-top: 16px;
          height: 3px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .stat-line div {
          width: 0%;
          height: 100%;
          border-radius: inherit;
          background: #8b42ff;
        }

        /* ACTIONS */

        .actions-heading {
          margin-top: 32px;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .action-card {
          min-height: 125px;
          padding: 18px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.065);
          background: rgba(17, 18, 27, 0.72);
          cursor: pointer;
          transition: 0.2s ease;
        }

        .action-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .action-icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          font-size: 15px;
        }

        .action-icon.purple {
          color: #aa71ff;
          background: rgba(140, 66, 255, 0.1);
        }

        .action-icon.cyan {
          color: #45e7ff;
          background: rgba(0, 216, 255, 0.08);
        }

        .action-icon.green {
          color: #4de8a4;
          background: rgba(58, 229, 155, 0.08);
        }

        .action-icon.orange {
          color: #ffb45d;
          background: rgba(255, 169, 77, 0.08);
        }

        .action-card h3 {
          margin: 13px 0 4px;
          font-size: 12px;
        }

        .action-card p {
          margin: 0;
          color: #656a7c;
          font-size: 9px;
        }

        .system-footer {
          margin-top: 35px;
          padding: 15px 2px 5px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          color: #505568;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .system-footer > div:first-child {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .sidebar {
            width: 220px;
            min-width: 220px;
          }

          .content {
            padding: 25px;
          }

          .hero-orb {
            right: -20px;
            opacity: 0.55;
          }

          .stats-grid,
          .actions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .wos-shell {
            display: block;
          }

          .sidebar {
            width: 100%;
            min-width: 0;
            min-height: auto;
            height: auto;
            padding: 16px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }

          .brand {
            padding-bottom: 15px;
          }

          .sidebar-label,
          .sidebar-bottom {
            display: none;
          }

          .navigation {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          .nav-item {
            justify-content: center;
            padding: 9px 5px;
          }

          .nav-item span:last-child {
            display: none;
          }

          .nav-dot {
            display: none;
          }

          .content {
            padding: 20px 15px;
          }

          .topbar {
            align-items: flex-start;
          }

          .top-actions {
            gap: 5px;
          }

          .admin-badge {
            display: none;
          }

          .hero-card {
            padding: 28px 23px;
          }

          .hero-orb {
            display: none;
          }

          .hero-card h2 {
            font-size: 29px;
          }

          .stats-grid,
          .actions-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .navigation {
            grid-template-columns: repeat(3, 1fr);
          }

          .stats-grid,
          .actions-grid {
            grid-template-columns: 1fr;
          }

          .topbar h1 {
            font-size: 21px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .system-footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}

function ActionCard({
  icon,
  title,
  description,
  accent,
}: {
  icon: string;
  title: string;
  description: string;
  accent: "purple" | "cyan" | "green" | "orange";
}) {
  return (
    <div className="action-card">
      <div className={`action-icon ${accent}`}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}
