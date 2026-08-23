"use client"

type SecurityStatusProps = {
  label: string
  value: string
  status: "protected" | "warning" | "unknown" | "danger"
}

export default function SecurityStatus({
  label,
  value,
  status,
}: SecurityStatusProps) {
  return (
    <div className={`security-status-card ${status}`}>
      <div className="security-status-header">
        <span>{label}</span>

        <span className="security-status-dot" />
      </div>

      <strong>{value}</strong>

      <small>
        {status === "protected" && "Protection active"}
        {status === "warning" && "Attention required"}
        {status === "unknown" && "Waiting for Windows backend"}
        {status === "danger" && "Security issue detected"}
      </small>
    </div>
  )
        }
