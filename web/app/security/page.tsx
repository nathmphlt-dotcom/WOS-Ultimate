import PageHeader from "../../components/PageHeader"
import PageTransition from "../../components/PageTransition"
import SecurityStatus from "../../components/security/SecurityStatus"
import SecurityCheck from "../../components/security/SecurityCheck"
import SecurityEvent from "../../components/security/SecurityEvent"
import { SECURITY_CHECKS } from "../../config/security"

export default function SecurityPage() {
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
            value="UNKNOWN"
            status={administrator?.status ?? "unknown"}
          />

          <SecurityStatus
            label="UAC PROTECTION"
            value="UNKNOWN"
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
                Recent privileged operations and security events.
              </p>
            </div>
          </div>

          <div className="security-events">

            <SecurityEvent
              title="Security system initialized"
              description="WOS security layer is ready."
              time="Now"
            />

            <SecurityEvent
              title="Windows backend unavailable"
              description="Native Windows checks will be enabled in Desktop mode."
              time="Now"
              status="warning"
            />

          </div>

        </section>

      </div>
    </PageTransition>
  )
}
