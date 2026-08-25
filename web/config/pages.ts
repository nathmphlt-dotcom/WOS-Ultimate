export type WOSPage = {
  id: string;
  path: string;
  icon: string;
  section: "main" | "optimization" | "system";
};

export const WOS_PAGES: WOSPage[] = [
  {
    id: "lobby",
    path: "/",
    icon: "⌂",
    section: "main",
  },
  {
    id: "dashboard",
    path: "/dashboard",
    icon: "◇",
    section: "main",
  },
  {
    id: "smartScan",
    path: "/smart-scan",
    icon: "⌕",
    section: "main",
  },

  {
    id: "cleaning",
    path: "/cleaning",
    icon: "✦",
    section: "optimization",
  },
  {
    id: "boostPC",
    path: "/boost-pc",
    icon: "ϟ",
    section: "optimization",
  },
  {
    id: "fivem",
    path: "/fivem",
    icon: "◉",
    section: "optimization",
  },
  {
    id: "game",
    path: "/game",
    icon: "▣",
    section: "optimization",
  },
  {
    id: "network",
    path: "/network",
    icon: "⌁",
    section: "optimization",
  },

  {
    id: "registry",
    path: "/registry",
    icon: "▤",
    section: "system",
  },
  {
    id: "services",
    path: "/services",
    icon: "⚙",
    section: "system",
  },
  {
    id: "startup",
    path: "/startup",
    icon: "↗",
    section: "system",
  },
  {
    id: "backup",
    path: "/backup",
    icon: "▥",
    section: "system",
  },
  {
    id: "restore",
    path: "/restore",
    icon: "↶",
    section: "system",
  },
  {
    id: "notifications",
    path: "/notifications",
    icon: "♢",
    section: "system",
  },
  {
    id: "settings",
    path: "/settings",
    icon: "⚙",
    section: "system",
  },
  {
    id: "system",
    path: "/system",
    icon: "▦",
    section: "system",
  },
  {
    id: "benchmark",
    path: "/benchmark",
    icon: "◌",
    section: "system",
  },
  {
    id: "logs",
    path: "/logs",
    icon: "≡",
    section: "system",
  },
];

export const getPageById = (id: string) =>
  WOS_PAGES.find((page) => page.id === id);

export const getPageByPath = (path: string) =>
  WOS_PAGES.find((page) => page.path === path);
