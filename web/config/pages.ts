export type WOSPage = {
  id: string
  title: string
  description: string
  path: string
  icon: string
  category: "main" | "gaming" | "system" | "tools"
}

export const WOS_PAGES: WOSPage[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Overview of your Windows system",
    path: "/dashboard",
    icon: "⌂",
    category: "main",
  },
  {
    id: "optimizer",
    title: "Optimizer",
    description: "Optimize Windows performance",
    path: "/optimizer",
    icon: "⚡",
    category: "main",
  },
  {
    id: "scanner",
    title: "System Scanner",
    description: "Analyze your system",
    path: "/scanner",
    icon: "⌕",
    category: "main",
  },
  {
    id: "gaming",
    title: "Gaming",
    description: "Gaming optimization center",
    path: "/gaming",
    icon: "◈",
    category: "gaming",
  },
  {
    id: "fivem",
    title: "FiveM Booster",
    description: "FiveM performance optimization",
    path: "/fivem",
    icon: "◆",
    category: "gaming",
  },
  {
    id: "gpu",
    title: "GPU",
    description: "Graphics performance",
    path: "/gpu",
    icon: "▣",
    category: "system",
  },
  {
    id: "cpu",
    title: "CPU",
    description: "Processor performance",
    path: "/cpu",
    icon: "▤",
    category: "system",
  },
  {
    id: "memory",
    title: "Memory",
    description: "RAM monitoring and optimization",
    path: "/memory",
    icon: "▥",
    category: "system",
  },
  {
    id: "network",
    title: "Network",
    description: "Network diagnostics and optimization",
    path: "/network",
    icon: "⌁",
    category: "system",
  },
  {
    id: "processes",
    title: "Processes",
    description: "Manage running processes",
    path: "/processes",
    icon: "◉",
    category: "system",
  },
  {
    id: "startup",
    title: "Startup",
    description: "Manage startup applications",
    path: "/startup",
    icon: "↗",
    category: "system",
  },
  {
    id: "cleanup",
    title: "Cleanup",
    description: "Clean unnecessary system files",
    path: "/cleanup",
    icon: "⌫",
    category: "system",
  },
  {
    id: "tweaks",
    title: "Windows Tweaks",
    description: "Advanced Windows configuration",
    path: "/tweaks",
    icon: "⚙",
    category: "system",
  },
  {
    id: "security",
    title: "Security",
    description: "Security and privilege management",
    path: "/security",
    icon: "◆",
    category: "tools",
  },
  {
    id: "backup",
    title: "Backup & Restore",
    description: "System backup and rollback",
    path: "/backup",
    icon: "↺",
    category: "tools",
  },
  {
    id: "logs",
    title: "Logs",
    description: "View WOS operation history",
    path: "/logs",
    icon: "☷",
    category: "tools",
  },
  {
    id: "settings",
    title: "Settings",
    description: "Configure WOS",
    path: "/settings",
    icon: "⚙",
    category: "tools",
  },
  {
    id: "tools",
    title: "System Tools",
    description: "Advanced system utilities",
    path: "/tools",
    icon: "⌘",
    category: "tools",
  },
]

export function getWOSPage(pathname: string): WOSPage | undefined {
  return WOS_PAGES.find((page) => page.path === pathname)
}
