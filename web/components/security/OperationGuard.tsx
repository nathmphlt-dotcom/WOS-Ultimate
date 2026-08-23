"use client"

import type { ReactNode } from "react"

import {
  canPerformOperation,
  type PermissionLevel,
} from "../../config/security-state"

import { useSecurity } from "./SecurityContext"

type OperationGuardProps = {
  requiredPermission: PermissionLevel
  children: ReactNode
  fallback?: ReactNode
}

export default function OperationGuard({
  requiredPermission,
  children,
  fallback,
}: OperationGuardProps) {
  const { security } = useSecurity()

  const allowed = canPerformOperation(
    requiredPermission,
    security.permission
  )

  if (!allowed) {
    return (
      <>
        {fallback ?? (
          <div className="operation-locked">
            <strong>Permission Required</strong>

            <span>
              This operation requires{" "}
              {requiredPermission.toUpperCase()} privileges.
            </span>
          </div>
        )}
      </>
    )
  }

  return <>{children}</>
}
