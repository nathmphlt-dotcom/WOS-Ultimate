"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { WOS_PAGES } from "../config/pages";
import { useLanguage } from "./LanguageProvider";

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const mainPages = WOS_PAGES.filter(
    (page) => page.section === "main",
  );

  const optimizationPages = WOS_PAGES.filter(
    (page) => page.section === "optimization",
  );

  const systemPages = WOS_PAGES.filter(
    (page) => page.section === "system",
  );

  const getLabel = (id: string) => {
    const key = id as keyof typeof t.navigation;
    return t.navigation[key];
  };

  const renderPages = (
    pages: typeof WOS_PAGES,
  ) => {
    return pages.map((page) => {
      const active =
        page.path === "/"
          ? pathname === "/"
          : pathname.startsWith(page.path);

      return (
        <Link
          key={page.id}
          href={page.path}
          className={`wos-nav-item ${
            active ? "active" : ""
          }`}
        >
          <span className="wos-nav-icon">
            {page.icon}
          </span>

          <span className="wos-nav-label">
            {getLabel(page.id)}
          </span>
        </Link>
      );
    });
  };

  return (
    <nav className="wos-navigation">
      <div className="wos-nav-section">
        <div className="wos-nav-section-title">
          {t.navigation.main}
        </div>

        {renderPages(mainPages)}
      </div>

      <div className="wos-nav-section">
        <div className="wos-nav-section-title">
          {t.navigation.optimization}
        </div>

        {renderPages(optimizationPages)}
      </div>

      <div className="wos-nav-section">
        <div className="wos-nav-section-title">
          {t.navigation.system}
        </div>

        {renderPages(systemPages)}
      </div>
    </nav>
  );
}
