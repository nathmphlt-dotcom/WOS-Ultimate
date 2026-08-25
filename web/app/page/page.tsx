"use client";

import { useParams } from "next/navigation";

import { getPageById } from "../../config/pages";
import { useLanguage } from "../../components/LanguageProvider";

export default function WOSPage() {
  const params = useParams();
  const { t } = useLanguage();

  const pageId = String(params.page);
  const page = getPageById(pageId);

  if (!page) {
    return (
      <main className="wos-page">
        <div className="wos-page-header">
          <span className="wos-eyebrow">
            WOS SYSTEM
          </span>

          <h1>404</h1>

          <p>
            Page not found.
          </p>
        </div>
      </main>
    );
  }

  const label =
    t.navigation[
      page.id as keyof typeof t.navigation
    ];

  return (
    <main className="wos-page">
      <div className="wos-page-header">
        <span className="wos-eyebrow">
          WINDOWS OPTIMIZER SUITE
        </span>

        <h1>{label}</h1>

        <p>
          {t.common.appFullName}
        </p>
      </div>

      <section className="wos-page-placeholder">
        <div className="wos-page-placeholder-icon">
          {page.icon}
        </div>

        <div>
          <span className="wos-status">
            {t.common.ready}
          </span>

          <h2>{label}</h2>

          <p>
            {t.common.safe} ·{" "}
            {t.common.reversible} ·{" "}
            {t.common.verified}
          </p>
        </div>
      </section>
    </main>
  );
}
