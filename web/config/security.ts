export type SecurityCheckStatus =
  | "protected"
  | "warning"
  | "unknown"
  | "danger"

export type SecurityCheck = {
  id: string
  title: string
  description: string
  status: SecurityCheckStatus
}

export const SECURITY_CHECKS: SecurityCheck[] = [
  {
    id: "administrator",
    title: "Administrator Privilege",
    description: "Native Windows privilege detection",
    status: "unknown",
  },
  {
    id: "uac",
    title: "UAC Protection",
    description: "Windows User Account Control",
    status: "unknown",
  },
  {
    id: "defender",
    title: "Windows Security",
    description: "Windows security provider status",
    status: "unknown",
  },
  {
    id: "backup",
    title: "Backup Protection",
    description: "Backup before system modification",
    status: "protected",
  },
  {
    id: "rollback",
    title: "Rollback Protection",
    description: "Ability to restore WOS changes",
    status: "protected",
  },
  {
    id: "validation",
    title: "Command Validation",
    description: "Commands must pass safety validation",
    status: "protected",
  },
  {
    id: "logging",
    title: "Operation Logging",
    description: "Privileged operations are recorded",
    status: "protected",
  },
]
