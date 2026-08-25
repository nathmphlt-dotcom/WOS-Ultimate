export type SecurityStatus =
  | "ready"
  | "warning"
  | "required"
  | "unsupported"
  | "failed";

export type SecurityCheck = {
  id: string;
  label: string;
  description: string;
  status: SecurityStatus;
  nativeOnly: boolean;
};

export const SECURITY_CHECKS: SecurityCheck[] = [
  {
    id: "administrator",
    label: "Administrator Privileges",
    description:
      "Required for Windows system modifications.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "windows",
    label: "Windows Version",
    description:
      "Detect Windows edition and version.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "architecture",
    label: "System Architecture",
    description:
      "Detect x64 / ARM64 architecture.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "powershell",
    label: "PowerShell",
    description:
      "Verify Windows PowerShell availability.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "cmd",
    label: "Command Processor",
    description:
      "Verify CMD execution capability.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "registry",
    label: "Registry Access",
    description:
      "Verify registry access before modifications.",
    status: "required",
    nativeOnly: true,
  },
  {
    id: "security",
    label: "Security Environment",
    description:
      "Verify that protected Windows security components remain untouched.",
    status: "ready",
    nativeOnly: true,
  },
];
