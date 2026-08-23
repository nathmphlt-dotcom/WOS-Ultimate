import type { PermissionLevel } from "./security-state"

export type OperationDefinition = {
  id: string
  title: string
  description: string
  requiredPermission: PermissionLevel
  requiresBackup: boolean
  requiresConfirmation: boolean
}

export const WOS_OPERATIONS: OperationDefinition[] = [
  {
    id: "system-scan",
    title: "System Scan",
    description: "Analyze Windows system information",
    requiredPermission: "user",
    requiresBackup: false,
    requiresConfirmation: false,
  },

  {
    id: "performance-scan",
    title: "Performance Scan",
    description: "Analyze system performance",
    requiredPermission: "user",
    requiresBackup: false,
    requiresConfirmation: false,
  },

  {
    id: "windows-tweak",
    title: "Windows Tweak",
    description: "Modify Windows configuration",
    requiredPermission: "admin",
    requiresBackup: true,
    requiresConfirmation: true,
  },

  {
    id: "registry-modification",
    title: "Registry Modification",
    description: "Modify Windows Registry",
    requiredPermission: "admin",
    requiresBackup: true,
    requiresConfirmation: true,
  },

  {
    id: "service-modification",
    title: "Service Modification",
    description: "Modify Windows services",
    requiredPermission: "admin",
    requiresBackup: true,
    requiresConfirmation: true,
  },

  {
    id: "process-management",
    title: "Process Management",
    description: "Manage Windows processes",
    requiredPermission: "admin",
    requiresBackup: false,
    requiresConfirmation: true,
  },

  {
    id: "system-cleanup",
    title: "System Cleanup",
    description: "Remove unnecessary system files",
    requiredPermission: "admin",
    requiresBackup: true,
    requiresConfirmation: true,
  },
]
