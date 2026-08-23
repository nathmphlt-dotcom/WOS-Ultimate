const en = {
  common: {
    appName: "WOS Ultimate",

    confirm: "Confirm",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    back: "Back",

    ready: "Ready",
    protected: "Protected",
    unknown: "Unknown",
    enabled: "Enabled",
    disabled: "Disabled",

    now: "Now",

    online: "Online",
    offline: "Offline",

    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    warning: "Warning",

    yes: "Yes",
    no: "No",

    apply: "Apply",
    reset: "Reset",
    refresh: "Refresh",
    scan: "Scan",
    start: "Start",
    stop: "Stop",
    details: "Details",
  },

  navigation: {
    categories: {
      main: "MAIN",
      gaming: "GAMING",
      system: "SYSTEM",
      tools: "TOOLS",
    },

    dashboard: "Dashboard",
    optimizer: "Optimizer",
    scanner: "System Scanner",
    security: "Security",
    settings: "Settings",
    fivem: "FiveM",
  },

  topbar: {
    systemReady: "SYSTEM READY",
    systemNotReady: "SYSTEM NOT READY",
    webMode: "WEB MODE",
    desktopMode: "DESKTOP MODE",
  },

  security: {
    title: "Security Center",

    description:
      "WOS security, privileges and operation protection",

    administrator: "Administrator Privilege",
    uac: "UAC Protection",
    backup: "Backup Protection",
    rollback: "Rollback Protection",

    securityContext: "Security Context",

    securityContextDescription:
      "Current WOS execution environment and permission level",

    executionMode: "Execution Mode",
    backend: "Backend",
    permission: "Permission",

    webPreview: "Web Preview",
    windowsDesktop: "Windows Desktop",

    operationSecurity: "Operation Security",

    operationSecurityDescription:
      "Protection layers used before WOS modifies the system",

    securityEvents: "Security Events",

    securityEventsDescription:
      "Recent WOS security activity",

    securityInitialized:
      "Security context initialized",

    webPreviewDescription:
      "Native Windows privilege checks will be enabled in Desktop Mode",

    nativeBackendUnavailable:
      "Windows Backend unavailable",

    waitingForWindowsBackend:
      "Waiting for Windows Backend",

    protectedStatus: "PROTECTED",
    unknownStatus: "UNKNOWN",

    operationPipeline:
      "Secure Operation Pipeline",

    operationPipelineDescription:
      "Every protected WOS operation must pass the security pipeline",

    pipelineReady: "READY",

    permissionCheck: "Permission Check",
    safetyValidation: "Safety Validation",
    confirmation: "Confirmation",
    backupStage: "Backup",
    execute: "Execute",
    verify: "Verify",
    operationLog: "Operation Log",

    backupRequired: "BACKUP REQUIRED",

    backupDescription:
      "WOS will create recovery data before modifying protected system data.",

    securityConfirmation:
      "SECURITY CONFIRMATION",

    operationBlocked:
      "Operation Blocked",

    operationCompleted:
      "Operation Completed",

    operationFailed:
      "Operation Failed",

    rollbackStarted:
      "Rollback Started",

    rollbackCompleted:
      "Rollback Completed",
  },

  permissions: {
    user: "USER",
    admin: "ADMIN",
    system: "SYSTEM",

    permissionRequired:
      "Permission Required",

    insufficientPermission:
      "Insufficient permission for this operation.",

    administratorRequired:
      "This operation requires Administrator privileges.",

    systemPermissionRequired:
      "This operation requires System privileges.",
  },

  operations: {
    systemScan: "System Scan",
    performanceScan: "Performance Scan",
    windowsTweak: "Windows Tweak",
    registryModification: "Registry Modification",
    serviceModification: "Service Modification",
    processManagement: "Process Management",
    systemCleanup: "System Cleanup",

    description: {
      systemScan:
        "Analyze basic Windows system information",

      performanceScan:
        "Analyze CPU, GPU, RAM and system performance",

      windowsTweak:
        "Modify Windows configuration",

      registryModification:
        "Modify Windows Registry",

      serviceModification:
        "Manage Windows Services",

      processManagement:
        "Manage Windows Processes",

      systemCleanup:
        "Remove unnecessary system files",
    },
  },

  scanner: {
    title: "System Scanner",

    description:
      "Scan and analyze the current Windows system state",

    systemOverview: "System Overview",

    cpu: "CPU",
    gpu: "GPU",
    memory: "Memory",
    storage: "Storage",
    network: "Network",

    scanning: "Scanning system...",
    scanComplete: "System scan completed",

    scanFailed: "System scan failed",

    scanAgain: "Scan Again",

    healthy: "Healthy",
    attention: "Needs Attention",
    critical: "Critical",
  },

  optimizer: {
    title: "Windows Optimizer",

    description:
      "Optimize Windows for performance and gaming",

    performance: "Performance",
    gaming: "Gaming",
    latency: "Latency",
    background: "Background Processes",

    optimize: "Start Optimization",
    optimizing: "Optimizing...",
    optimized: "Optimized",

    recommended: "Recommended",
    custom: "Custom",
  },

  fivem: {
    title: "FiveM Optimizer",

    description:
      "System optimization for FiveM",

    performance: "FiveM Performance",
    fps: "FPS",
    inputLatency: "Input Latency",
    networkLatency: "Network Latency",

    optimize: "Optimize FiveM",
    launch: "Launch FiveM",
  },

  dashboard: {
    title: "Dashboard",

    description:
      "WOS system and performance overview",

    systemStatus: "System Status",
    performance: "Performance",
    security: "Security",
    optimization: "Optimization",

    systemHealthy: "System is healthy",

    optimizationReady:
      "Ready for optimization",
  },

  settings: {
    title: "Settings",

    description:
      "Manage WOS settings",

    language: "Language",
    appearance: "Appearance",
    notifications: "Notifications",
    security: "Security",

    languageThai: "ไทย",
    languageEnglish: "English",

    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    systemMode: "System",
  },

  language: {
    title: "Language",
    select: "Select Language",
    thai: "ไทย",
    english: "English",
  },
}

export default en
