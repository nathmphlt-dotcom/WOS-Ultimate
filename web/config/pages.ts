export type WOSPageCategory =
  | "main"
  | "gaming"
  | "system"
  | "tools"

export type WOSPage = {
  id: string
  path: string
  title: string
  icon: string
  category: WOSPageCategory
  translationKey?: string
}

export const WOS_PAGES: WOSPage[] = [
  // =====================================================
  // MAIN
  // =====================================================

  {
    id: "dashboard",
    path: "/",
    title: "Dashboard",
    icon: "⌂",
    category: "main",
    translationKey: "dashboard.title",
  },

  {
    id: "optimizer",
    path: "/optimizer",
    title: "Optimizer",
    icon: "⚡",
    category: "main",
    translationKey: "navigation.optimizer",
  },

  {
    id: "scanner",
    path: "/scanner",
    title: "System Scanner",
    icon: "◉",
    category: "main",
    translationKey: "navigation.scanner",
  },

  {
    id: "security",
    path: "/security",
    title: "Security",
    icon: "◆",
    category: "main",
    translationKey: "navigation.security",
  },

  // =====================================================
  // GAMING
  // =====================================================

  {
    id: "fivem",
    path: "/fivem",
    title: "FiveM",
    icon: "◈",
    category: "gaming",
    translationKey: "fivem.title",
  },

  {
    id: "gaming",
    path: "/gaming",
    title: "Gaming",
    icon: "◈",
    category: "gaming",
    translationKey: "navigation.gaming",
  },

  {
    id: "game-mode",
    path: "/gaming/game-mode",
    title: "Game Mode",
    icon: "▶",
    category: "gaming",
    translationKey: "navigation.gameMode",
  },

  {
    id: "network",
    path: "/gaming/network",
    title: "Gaming Network",
    icon: "⌁",
    category: "gaming",
    translationKey: "navigation.gamingNetwork",
  },

  // =====================================================
  // SYSTEM
  // =====================================================

  {
    id: "system",
    path: "/system",
    title: "System",
    icon: "▣",
    category: "system",
    translationKey: "navigation.system",
  },

  {
    id: "performance",
    path: "/system/performance",
    title: "Performance",
    icon: "◒",
    category: "system",
    translationKey: "navigation.performance",
  },

  {
    id: "processes",
    path: "/system/processes",
    title: "Processes",
    icon: "▤",
    category: "system",
    translationKey: "navigation.processes",
  },

  {
    id: "services",
    path: "/system/services",
    title: "Services",
    icon: "⚙",
    category: "system",
    translationKey: "navigation.services",
  },

  {
    id: "startup",
    path: "/system/startup",
    title: "Startup",
    icon: "↗",
    category: "system",
    translationKey: "navigation.startup",
  },

  {
    id: "storage",
    path: "/system/storage",
    title: "Storage",
    icon: "▱",
    category: "system",
    translationKey: "navigation.storage",
  },

  // =====================================================
  // TOOLS
  // =====================================================

  {
    id: "tools",
    path: "/tools",
    title: "Tools",
    icon: "▦",
    category: "tools",
    translationKey: "navigation.tools",
  },

  {
    id: "cleanup",
    path: "/tools/cleanup",
    title: "System Cleanup",
    icon: "⌫",
    category: "tools",
    translationKey: "operations.systemCleanup",
  },

  {
    id: "settings",
    path: "/settings",
    title: "Settings",
    icon: "⚙",
    category: "tools",
    translationKey: "settings.title",
  },

  {
    id: "logs",
    path: "/tools/logs",
    title: "Operation Logs",
    icon: "≡",
    category: "tools",
    translationKey: "navigation.logs",
  },
]
