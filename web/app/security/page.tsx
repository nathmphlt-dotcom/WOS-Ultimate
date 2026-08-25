"use client";

import { useLanguage } from "../../components/LanguageProvider";
import { useSecurity } from "../../components/SecurityProvider";

export default function SecurityPage() {
  const { t } = useLanguage();
  const {
    checks,
    safeMode,
    setSafeMode,
    isNativeEnvironment,
  } = useSecurity();

  return (
    <main className="wos-page">
      <header className="wos-page-header">
        <span className="wos-eyebrow">
          WOS SECURITY CORE
        </span>

        <h1>Security & Access</h1>

        <p>
          Verify system access before any
          Windows modification.
        </p>
      </header>

      <section className="wos-security-hero">
        <div>
          <span className="wos-status warning">
            {isNativeEnvironment
              ? "NATIVE ENVIRONMENT"
              : "WEB PREVIEW"}
          </span>

          <h2>
            Administrator privileges required
          </h2>

          <p>
            Windows optimization requires the
            native WOS desktop application.
          </p>
        </div>

        <button
          type="button"
          className={`wos-toggle ${
            safeMode ? "active" : ""
          }`}
          onClick={() =>
            setSafeMode(!safeMode)
          }
        >
          <span />

          {safeMode
            ? "SAFE MODE"
            : "EXPERT MODE"}
        </button>
      </section>

      <section className="wos-security-grid">
        {checks.map((check) => (
          <article
            key={check.id}
            className="wos-security-card"
          >
            <div className="wos-security-card-top">
              <span
                className={`wos-security-indicator ${check.status}`}
              />

              <span className="wos-security-status-label">
                {check.status.toUpperCase()}
              </span>
            </div>

            <h3>{check.label}</h3>

            <p>{check.description}</p>

            {check.nativeOnly && (
              <small>
                Native Windows check
              </small>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
