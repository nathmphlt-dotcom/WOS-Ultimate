"use client";

import {
  Activity,
  Bell,
  Bolt,
  Box,
  ChevronDown,
  CircleGauge,
  Cpu,
  Database,
  Gauge,
  Gamepad2,
  HardDrive,
  LayoutDashboard,
  Menu,
  Network,
  Power,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserCog,
  Wifi,
  X,
  Zap
} from "lucide-react";

import { useState } from "react";

export type WOSPage =
  | "Lobby"
  | "Dashboard"
  | "Smart Scan"
  | "Cleaning"
  | "Boost PC"
  | "FiveM Booster"
  | "Game Booster"
  | "Network Booster"
  | "Registry Manager"
  | "Service Manager"
  | "Startup Manager"
  | "Backup Center"
  | "Restore Center"
  | "Notification Center"
  | "Settings"
  | "System Information"
  | "Benchmark"
  | "Logs";

type IconType = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
}>;

interface NavItem {
  label: WOSPage;
  icon: IconType;
}

const mainNavigation: NavItem[] = [
  { label: "Lobby", icon: Box },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Smart Scan", icon: Search }
];

const optimizationNavigation: NavItem[] = [
  { label: "Cleaning", icon: Trash2 },
  { label: "Boost PC", icon: Zap },
  { label: "FiveM Booster", icon: Gamepad2 },
  { label: "Game Booster", icon: Gauge },
  { label: "Network Booster", icon: Network }
];

const systemNavigation: NavItem[] = [
  { label: "Registry Manager", icon: Database },
  { label: "Service Manager", icon: Settings },
  { label: "Startup Manager", icon: Power }
];

const utilityNavigation: NavItem[] = [
  { label: "Backup Center", icon: ShieldCheck },
  { label: "Restore Center", icon: Activity },
  { label: "Notification Center", icon: Bell },
  { label: "Settings", icon: Settings }
];

const extraNavigation: NavItem[] = [
  { label: "System Information", icon: Cpu },
  { label: "Benchmark", icon: CircleGauge },
  { label: "Logs", icon: HardDrive }
];

interface WOSLayoutProps {
  children: React.ReactNode;
  activePage: WOSPage;
  onNavigate: (page: WOSPage) => void;
}

export function WOSLayout({
  children,
  activePage,
  onNavigate
}: WOSLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (page: WOSPage) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <div className="wos-shell">
      <div className="wos-background-grid" />
      <div className="wos-background-glow wos-glow-one" />
      <div className="wos-background-glow wos-glow-two" />

      <aside className={`wos-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="wos-brand">
          <div className="wos-logo">
            <Sparkles size={21} strokeWidth={2.4} />
          </div>

          <div className="wos-brand-text">
            <strong>WOS</strong>
            <span>Windows Optimizer Suite</span>
          </div>

          <button
            className="wos-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="wos-nav">
          <NavSection
            title="MAIN"
            items={mainNavigation}
            activePage={activePage}
            onNavigate={navigate}
          />

          <NavSection
            title="OPTIMIZATION"
            items={optimizationNavigation}
            activePage={activePage}
            onNavigate={navigate}
          />

          <NavSection
            title="SYSTEM TOOLS"
            items={systemNavigation}
            activePage={activePage}
            onNavigate={navigate}
          />

          <NavSection
            title="UTILITY"
            items={utilityNavigation}
            activePage={activePage}
            onNavigate={navigate}
          />

          <NavSection
            title="ANALYSIS"
            items={extraNavigation}
            activePage={activePage}
            onNavigate={navigate}
          />
        </nav>

        <div className="wos-sidebar-footer">
          <div className="wos-sidebar-status">
            <span className="status-dot status-success" />
            <span>System Ready</span>
          </div>

          <div className="wos-sidebar-version">
            WOS Ultimate <span>0.2.0</span>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <button
          className="wos-mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <main className="wos-main">
        <header className="wos-topbar">
          <button
            className="wos-mobile-menu"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>

          <div className="wos-breadcrumb">
            <span>WOS</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{activePage}</strong>
          </div>

          <div className="wos-topbar-actions">
            <div className="wos-admin">
              <span className="status-dot status-success" />
              <UserCog size={15} />
              <span>ADMINISTRATOR</span>
            </div>

            <button className="wos-icon-button">
              <Bell size={17} />
              <span className="notification-dot" />
            </button>

            <button className="wos-icon-button">
              <Settings size={17} />
            </button>

            <button className="wos-user-button">
              <div className="wos-avatar">A</div>
              <ChevronDown size={14} />
            </button>
          </div>
        </header>

        <section className="wos-content">
          {children}
        </section>

        <footer className="wos-statusbar">
          <span>CPU <b>24%</b></span>
          <span>GPU <b>37%</b></span>
          <span>RAM <b>8.2 / 16 GB</b></span>
          <span>NET <b className="text-cyan">32ms</b></span>
          <span className="status-ready">
            <span className="status-dot status-success" />
            STATUS: READY
          </span>
        </footer>
      </main>
    </div>
  );
}

function NavSection({
  title,
  items,
  activePage,
  onNavigate
}: {
  title: string;
  items: NavItem[];
  activePage: WOSPage;
  onNavigate: (page: WOSPage) => void;
}) {
  return (
    <div className="wos-nav-section">
      <div className="wos-nav-title">{title}</div>

      {items.map((item) => {
        const Icon = item.icon;
        const active = item.label === activePage;

        return (
          <button
            key={item.label}
            className={`wos-nav-item ${active ? "active" : ""}`}
            onClick={() => onNavigate(item.label)}
          >
            <Icon size={15} strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="wos-page-header">
      <div>
        {eyebrow && <div className="wos-eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

export function GlassCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  type = "purple",
  chart = "up"
}: {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
  type?: "purple" | "cyan" | "green" | "orange";
  chart?: "up" | "down" | "flat";
}) {
  return (
    <GlassCard className={`stat-card stat-${type}`}>
      <div className="stat-card-top">
        <div>
          <span className="stat-label">{label}</span>
          <strong>{value}</strong>
          <small>{detail}</small>
        </div>

        <div className="stat-icon">
          <Icon size={17} />
        </div>
      </div>

      <div className={`mini-chart ${chart}`}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </GlassCard>
  );
}

export function ActionCard({
  icon: Icon,
  title,
  description,
  type = "purple",
  onClick
}: {
  icon: IconType;
  title: string;
  description: string;
  type?: "purple" | "cyan" | "green" | "orange";
  onClick?: () => void;
}) {
  return (
    <button
      className={`action-card action-${type}`}
      onClick={onClick}
    >
      <div className="action-icon">
        <Icon size={20} />
      </div>

      <div className="action-content">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <div className="action-arrow">›</div>
    </button>
  );
}

export function StatusBadge({
  status
}: {
  status:
    | "READY"
    | "RUNNING"
    | "SUCCESS"
    | "WARNING"
    | "FAILED"
    | "LOW";
}) {
  return (
    <span className={`status-badge badge-${status.toLowerCase()}`}>
      <span />
      {status}
    </span>
  );
}

export function PrimaryButton({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button className="wos-primary-button" onClick={onClick}>
      <Zap size={15} />
      {children}
    </button>
  );
}

export function Dashboard({
  onNavigate
}: {
  onNavigate: (page: WOSPage) => void;
}) {
  return (
    <div className="dashboard-page">
      <PageHeader
        eyebrow="SYSTEM OVERVIEW"
        title="Dashboard"
        description="Real-time overview of your Windows gaming system."
        action={
          <PrimaryButton onClick={() => onNavigate("Smart Scan")}>
            SMART SCAN
          </PrimaryButton>
        }
      />

      <div className="stat-grid">
        <StatCard
          label="CPU"
          value="24%"
          detail="3.6 GHz"
          icon={Cpu}
          type="purple"
        />

        <StatCard
          label="GPU"
          value="37%"
          detail="67°C"
          icon={Gauge}
          type="cyan"
        />

        <StatCard
          label="RAM"
          value="8.2 GB"
          detail="of 16 GB"
          icon={Database}
          type="purple"
        />

        <StatCard
          label="NETWORK"
          value="32 ms"
          detail="Stable"
          icon={Wifi}
          type="green"
        />
      </div>

      <div className="dashboard-grid">
        <GlassCard className="performance-card">
          <div className="card-heading">
            <div>
              <span>PERFORMANCE</span>
              <strong>System Activity</strong>
            </div>

            <StatusBadge status="READY" />
          </div>

          <div className="big-chart">
            <div className="chart-y">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid-lines">
                <span />
                <span />
                <span />
                <span />
              </div>

              <svg
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
                className="performance-svg"
              >
                <defs>
                  <linearGradient
                    id="wosChartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#9d4dff"
                      stopOpacity="0.45"
                    />
                    <stop
                      offset="100%"
                      stopColor="#9d4dff"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 165 C30 140 42 180 70 150 C95 123 110 156 135 126 C165 90 180 145 205 125 C235 95 245 150 275 115 C305 80 320 132 350 105 C380 75 395 122 420 90 C450 54 470 110 495 75 C525 40 540 105 565 68 C580 45 590 58 600 42 L600 220 L0 220 Z"
                  fill="url(#wosChartGradient)"
                />

                <path
                  d="M0 165 C30 140 42 180 70 150 C95 123 110 156 135 126 C165 90 180 145 205 125 C235 95 245 150 275 115 C305 80 320 132 350 105 C380 75 395 122 420 90 C450 54 470 110 495 75 C525 40 540 105 565 68 C580 45 590 58 600 42"
                  fill="none"
                  stroke="#9d4dff"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          <div className="chart-footer">
            <span>60 seconds</span>
            <strong>CPU Usage 24%</strong>
          </div>
        </GlassCard>

        <GlassCard className="system-status-card">
          <div className="card-heading">
            <div>
              <span>SYSTEM STATUS</span>
              <strong>Optimization State</strong>
            </div>
          </div>

          <SystemStatusRow
            label="Windows 11"
            value="Pro 64-bit"
            good
          />

          <SystemStatusRow
            label="Power Plan"
            value="High Performance"
            good
          />

          <SystemStatusRow
            label="Game Mode"
            value="Enabled"
            good
          />

          <SystemStatusRow
            label="Administrator"
            value="Yes"
            good
          />

          <SystemStatusRow
            label="FiveM"
            value="Detected"
            good
          />

          <SystemStatusRow
            label="HAGS"
            value="Supported"
            good
          />
        </GlassCard>
      </div>

      <GlassCard className="quick-actions-card">
        <div className="card-heading">
          <div>
            <span>QUICK ACTIONS</span>
            <strong>Optimization Tools</strong>
          </div>
        </div>

        <div className="quick-actions">
          <ActionCard
            icon={Search}
            title="Smart Scan"
            description="Analyze system"
            type="purple"
            onClick={() => onNavigate("Smart Scan")}
          />

          <ActionCard
            icon={Trash2}
            title="Clean PC"
            description="Safe cleanup"
            type="cyan"
            onClick={() => onNavigate("Cleaning")}
          />

          <ActionCard
            icon={Zap}
            title="Boost PC"
            description="Optimize Windows"
            type="purple"
            onClick={() => onNavigate("Boost PC")}
          />

          <ActionCard
            icon={Gamepad2}
            title="Boost FiveM"
            description="Optimize FiveM"
            type="orange"
            onClick={() => onNavigate("FiveM Booster")}
          />
        </div>
      </GlassCard>
    </div>
  );
}

function SystemStatusRow({
  label,
  value,
  good
}: {
  label: string;
  value: string;
  good?: boolean;
}) {
  return (
    <div className="system-status-row">
      <div>
        <span
          className={`status-dot ${
            good ? "status-success" : "status-warning"
          }`}
        />
        <span>{label}</span>
      </div>

      <strong>{value}</strong>
    </div>
  );
}

export function Lobby({
  onNavigate
}: {
  onNavigate: (page: WOSPage) => void;
}) {
  return (
    <div className="lobby-page">
      <PageHeader
        eyebrow="OPTIMIZE • CLEAN • BOOST • PROTECT"
        title="Welcome back, Admin"
        description="Choose an optimization tool to improve your Windows gaming experience."
      />

      <div className="lobby-grid">
        <ActionCard
          icon={Trash2}
          title="CLEAN PC"
          description="Clean temporary files and safe system cache."
          type="purple"
          onClick={() => onNavigate("Cleaning")}
        />

        <ActionCard
          icon={Zap}
          title="BOOST PC"
          description="Optimize Windows for maximum system responsiveness."
          type="cyan"
          onClick={() => onNavigate("Boost PC")}
        />

        <ActionCard
          icon={Gamepad2}
          title="BOOST FIVEM"
          description="Optimize FiveM gaming performance safely."
          type="orange"
          onClick={() => onNavigate("FiveM Booster")}
        />

        <ActionCard
          icon={Gamepad2}
          title="BOOST GAME"
          description="Create a safe optimization profile for your game."
          type="green"
          onClick={() => onNavigate("Game Booster")}
        />

        <ActionCard
          icon={Network}
          title="BOOST NETWORK"
          description="Analyze network stability and connection health."
          type="cyan"
          onClick={() => onNavigate("Network Booster")}
        />

        <ActionCard
          icon={Sparkles}
          title="SMART BOOST"
          description="Scan your system and recommend safe optimizations."
          type="orange"
          onClick={() => onNavigate("Smart Scan")}
        />
      </div>

      <div className="lobby-bottom-grid">
        <GlassCard>
          <div className="card-heading">
            <div>
              <span>HARDWARE</span>
              <strong>Gaming System</strong>
            </div>
          </div>

          <div className="hardware-grid">
            <HardwareItem icon={Cpu} label="CPU" value="Intel Core i3 Gen 10" />
            <HardwareItem icon={Gauge} label="GPU" value="NVIDIA RTX 2060" />
            <HardwareItem icon={Database} label="RAM" value="16 GB" />
            <HardwareItem icon={HardDrive} label="STORAGE" value="SSD / NVMe" />
          </div>
        </GlassCard>

        <GlassCard>
          <div className="card-heading">
            <div>
              <span>SECURITY</span>
              <strong>Protection Status</strong>
            </div>

            <StatusBadge status="SUCCESS" />
          </div>

          <div className="security-status">
            <ShieldCheck size={32} />
            <div>
              <strong>Safe Mode Active</strong>
              <span>
                Only low-risk reversible optimizations are enabled.
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function HardwareItem({
  icon: Icon,
  label,
  value
}: {
  icon: IconType;
  label: string;
  value: string;
}) {
  return (
    <div className="hardware-item">
      <div className="hardware-icon">
        <Icon size={17} />
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export function PlaceholderPage({
  page
}: {
  page: WOSPage;
}) {
  return (
    <div>
      <PageHeader
        eyebrow="WOS MODULE"
        title={page}
        description="This module is part of the WOS CyberGlass interface architecture."
      />

      <GlassCard className="placeholder-module">
        <div className="placeholder-icon">
          <Bolt size={30} />
        </div>

        <h2>{page}</h2>

        <p>
          UI architecture is ready. The functional implementation
          will be added in its assigned development PART.
        </p>

        <StatusBadge status="READY" />
      </GlassCard>
    </div>
  );
}
