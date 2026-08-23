"use client"

import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"

import SecurityStatus from "../../components/security/SecurityStatus"
import SecurityCheck from "../../components/security/SecurityCheck"
import SecurityEvent from "../../components/security/SecurityEvent"
import PermissionBadge from "../../components/security/PermissionBadge"

import { SECURITY_CHECKS } from "../../config/security"
import { useSecurity } from "../../components/security/SecurityContext"

export default function SecurityPage() {
  const { security, isWebMode } = useSecurity()

  const administrator = SECURITY_CHECKS.find(
    (item) => item.id === "administrator"
  )

  const uac = SECURITY_CHECKS.find(
    (item) => item.id === "uac"
  )

  return (
    <PageTransition>
      <PageHeader
        title="Security Center"
        description="WOS security, privileges and operation protection"
        badge="SECURITY"
      />

      <div className="security-page">

        <section className="security-status-grid">

          <SecurityStatus
            label="ADMINISTRATOR"
            value={
              security.admin === "unknown"
                ? "UNKNOWN"
                : security.admin.toUpperCase()
            }
            status={administrator?.status ?? "unknown"}
          />

          <SecurityStatus
            label="UAC PROTECTION"
            value={
              security.uac === "unknown"
                ? "UNKNOWN"
                : security.uac.toUpperCase()
            }
            status={uac?.status ?? "unknown"}
          />

          <SecurityStatus
            label="BACKUP"
            value="READY"
            status="protected"
          />

          <SecurityStatus
            label="ROLLBACK"
            value="READY"
            status="protected"
          />

        </section>

        <section className="security-panel">

          <div className="security-panel-header">
            <div>
              <h2>Security Context</h2>

              <p>
                Current WOS execution environment and permission level.
              </p>
            </div>

            <PermissionBadge
              level={security.permission}
            />
          </div>

          <div className="security-context-grid">

            <div className="security-context-item">
              <span>EXECUTION MODE</span>
              <strong>
                {isWebMode
                  ? "WEB PREVIEW"
                  : "WINDOWS DESKTOP"}
              </strong>
            </div>

            <div className="security-context-item">
              <span>BACKEND</span>
              <strong>
                {security.backend.toUpperCase()}
              </strong>
            </div>

            <div className="security-context-item">
              <span>PERMISSION</span>
              <strong>
                {security.permission.toUpperCase()}
              </strong>
            </div>

          </div>

        </section>

        <section className="security-panel">

          <div className="security-panel-header">
            <div>
              <h2>Operation Security</h2>

              <p>
                Protection layers used before WOS modifies the system.
              </p>
            </div>

            <span className="security-protected-badge">
              PROTECTED
            </span>
          </div>

          <div className="security-check-list">
            {SECURITY_CHECKS
              .filter(
                (check) =>
                  check.id !== "administrator" &&
                  check.id !== "uac"
              )
              .map((check) => (
                <SecurityCheck
                  key={check.id}
                  check={check}
                />
              ))}
          </div>

        </section>

        <section className="security-panel">

          <div className="security-panel-header">
            <div>
              <h2>Security Events</h2>

              <p>
                Recent WOS security activity.
              </p>
            </div>
          </div>

          <div className="security-events">

            <SecurityEvent
              title="Security context initialized"
              description="WOS security state is active."
              time="Now"
            />

            <SecurityEvent
              title="Web preview mode"
              description="Native Windows privileges are unavailable."
              time="Now"
              status="warning"
            />

          </div>

        </section>

      </div>
    </PageTransition>
  )
                }
