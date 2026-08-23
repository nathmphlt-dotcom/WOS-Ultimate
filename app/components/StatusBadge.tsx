"use client";

type Status =
  | "QUEUED"
  | "RUNNING"
  | "SUCCESS"
  | "WARNING"
  | "FAILED"
  | "ROLLED BACK"
  | "SKIPPED"
  | "UNSUPPORTED"
  | "WAITING"
  | "OPTIMIZED";

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const className = status
    .toLowerCase()
    .replace(" ", "-");

  return (
    <span
      className={`wos-status-badge status-${className}`}
    >
      <span className="status-dot" />
      {status}
    </span>
  );
}
