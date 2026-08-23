type SecurityEventProps = {
  title: string
  description: string
  time: string
  status?: "safe" | "warning" | "danger"
}

export default function SecurityEvent({
  title,
  description,
  time,
  status = "safe",
}: SecurityEventProps) {
  return (
    <div className="security-event">
      <div className={`security-event-indicator ${status}`} />

      <div className="security-event-content">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <time>{time}</time>
    </div>
  )
          }
