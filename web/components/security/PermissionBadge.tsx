"use client"

import type { PermissionLevel } from "../../config/security-state"

type PermissionBadgeProps = {
  level: PermissionLevel
}

const labels: Record<PermissionLevel, string> = {
  user: "USER",
  admin: "ADMIN",
  system: "SYSTEM",
}

export default function PermissionBadge({
  level,
}: PermissionBadgeProps) {
  return (
    <span className={`permission-badge ${level}`}>
      {labels[level]}
    </span>
  )
}
