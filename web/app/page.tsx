"use client";

import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import ActionCard from "./components/ActionCard";
import Button from "./components/Button";

export default function Home() {
  const [active, setActive] =
    useState("Lobby");

  return (
    <main className="wos-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Sidebar
        active={active}
        onNavigate={setActive}
      />

      <section className="content">
        <Topbar page={active} />

        <section className="hero-card">
          <div className="hero-content">
            <div className="hero-badge">
              <span />
              SYSTEM READY
            </div>

            <h2>
              Optimize your
              <br />
              <strong>
                Windows Experience.
              </strong>
            </h2>

            <p>
              Scan your system, detect
              performance issues and apply
              safe, reversible gaming
              optimizations.
            </p>

            <div className="hero-buttons">
              <Button variant="primary">
                ⚡ SMART BOOST
              </Button>

              <Button variant="secondary">
                ⌕ SMART SCAN
              </Button>
            </div>
          </div>

          <div className="hero-orb">
            <div className="orb-core">
              <span>WOS</span>
            </div>
          </div>
        </section>

        <div className="section-heading">
          <div>
            <span className="section-kicker">
              SYSTEM MONITOR
            </span>

            <h2>
              System Status
            </h2>
          </div>

          <div className="live-status">
            <span />
            LIVE
          </div>
        </div>

        <section className="stats-grid">
          <StatCard
            title="CPU USAGE"
            value="—"
            unit="%"
            icon="◈"
          />

          <StatCard
            title="GPU USAGE"
            value="—"
            unit="%"
            icon="◆"
          />

          <StatCard
            title="RAM USAGE"
            value="—"
            unit="%"
            icon="▦"
          />

          <StatCard
            title="DISK USAGE"
            value="—"
            unit="%"
            icon="▤"
          />
        </section>

        <div className="section-heading">
          <div>
            <span className="section-kicker">
              OPTIMIZATION CENTER
            </span>

            <h2>
              Quick Actions
            </h2>
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
    </main>
  );
}
