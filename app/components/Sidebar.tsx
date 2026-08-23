"use client";

interface SidebarProps {
  active: string;
  onNavigate: (page: string) => void;
}

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

export default function Sidebar({
  active,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          W
        </div>

        <div>
          <div className="brand-title">
            WOS
          </div>

          <div className="brand-subtitle">
            WINDOWS OPTIMIZER
          </div>
        </div>
      </div>

      <div className="sidebar-label">
        MAIN
      </div>

      <nav className="navigation">
        {menuItems.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`nav-item ${
              active === item.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              onNavigate(item.name)
            }
          >
            <span className="nav-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

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
            <div className="safe-title">
              SAFE MODE
            </div>

            <div className="safe-subtitle">
              Protection enabled
            </div>
          </div>
        </div>

        <div className="version">
          <span>WOS Ultimate</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </aside>
  );
}
