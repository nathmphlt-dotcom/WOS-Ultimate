import type { SecurityCheck as SecurityCheckType } from "../../config/security"

type SecurityCheckProps = {
  check: SecurityCheckType
}

export default function SecurityCheck({
  check,
}: SecurityCheckProps) {
  const statusText = {
    protected: "PROTECTED",
    warning: "WARNING",
    unknown: "UNKNOWN",
    danger: "DANGER",
  }

  return (
    <div className="security-check">
      <div className="security-check-icon">
        {check.status === "protected" && "✓"}
        {check.status === "warning" && "!"}
        {check.status === "unknown" && "?"}
        {check.status === "danger" && "×"}
      </div>

      <div className="security-check-content">
        <strong>{check.title}</strong>
        <span>{check.description}</span>
      </div>

      <div className={`security-check-status ${check.status}`}>
        {statusText[check.status]}
      </div>
    </div>
  )
}
