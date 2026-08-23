export type AdminState =
  | "unknown"
  | "administrator"
  | "standard"

export type UACState =
  | "unknown"
  | "enabled"
  | "disabled"

export type BackendState =
  | "web"
  | "connecting"
  | "connected"
  | "disconnected"

export type PermissionLevel =
  | "user"
  | "admin"
  | "system"

export type SecurityState = {
  admin: AdminState
  uac: UACState
  backend: BackendState
  permission: PermissionLevel
}

export const DEFAULT_SECURITY_STATE: SecurityState = {
  admin: "unknown",
  uac: "unknown",
  backend: "web",
  permission: "user",
}

export function canPerformOperation(
  required: PermissionLevel,
  current: PermissionLevel
): boolean {
  const levels: Record<PermissionLevel, number> = {
    user: 1,
    admin: 2,
    system: 3,
  }

  return levels[current] >= levels[required]
  }
