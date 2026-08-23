const th = {
  common: {
    appName: "WOS Ultimate",

    confirm: "ยืนยัน",
    cancel: "ยกเลิก",
    save: "บันทึก",
    close: "ปิด",
    back: "ย้อนกลับ",

    ready: "พร้อมใช้งาน",
    protected: "ป้องกันแล้ว",
    unknown: "ไม่ทราบสถานะ",
    enabled: "เปิดใช้งาน",
    disabled: "ปิดใช้งาน",

    now: "ตอนนี้",

    online: "ออนไลน์",
    offline: "ออฟไลน์",

    loading: "กำลังโหลด...",
    error: "เกิดข้อผิดพลาด",
    success: "สำเร็จ",
    warning: "คำเตือน",

    yes: "ใช่",
    no: "ไม่",

    apply: "นำไปใช้",
    reset: "รีเซ็ต",
    refresh: "รีเฟรช",
    scan: "สแกน",
    start: "เริ่ม",
    stop: "หยุด",
    details: "รายละเอียด",
  },

  navigation: {
    categories: {
      main: "หลัก",
      gaming: "เกมมิ่ง",
      system: "ระบบ",
      tools: "เครื่องมือ",
    },

    dashboard: "แดชบอร์ด",
    optimizer: "ตัวเพิ่มประสิทธิภาพ",
    scanner: "สแกนระบบ",
    security: "ความปลอดภัย",
    settings: "ตั้งค่า",
    fivem: "FiveM",
  },

  topbar: {
    systemReady: "ระบบพร้อมใช้งาน",
    systemNotReady: "ระบบยังไม่พร้อม",
    webMode: "โหมดเว็บ",
    desktopMode: "โหมดเดสก์ท็อป",
  },

  security: {
    title: "ศูนย์ความปลอดภัย",

    description:
      "ระบบความปลอดภัย สิทธิ์ และการป้องกันการทำงานของ WOS",

    administrator: "สิทธิ์ผู้ดูแลระบบ",
    uac: "การป้องกัน UAC",
    backup: "ระบบสำรองข้อมูล",
    rollback: "ระบบย้อนกลับ",

    securityContext: "สถานะความปลอดภัย",

    securityContextDescription:
      "สภาพแวดล้อมและระดับสิทธิ์ปัจจุบันของ WOS",

    executionMode: "โหมดการทำงาน",
    backend: "Backend",
    permission: "สิทธิ์",

    webPreview: "โหมด Web Preview",
    windowsDesktop: "Windows Desktop",

    operationSecurity: "ความปลอดภัยของ Operation",

    operationSecurityDescription:
      "ชั้นป้องกันที่ WOS ใช้ก่อนแก้ไขระบบ",

    securityEvents: "เหตุการณ์ด้านความปลอดภัย",

    securityEventsDescription:
      "กิจกรรมด้านความปลอดภัยล่าสุดของ WOS",

    securityInitialized:
      "ระบบ Security Context เริ่มทำงานแล้ว",

    webPreviewDescription:
      "การตรวจสอบสิทธิ์ Windows จริงจะเปิดใช้งานใน Desktop Mode",

    nativeBackendUnavailable:
      "Windows Backend ยังไม่เชื่อมต่อ",

    waitingForWindowsBackend:
      "กำลังรอ Windows Backend",

    protectedStatus: "ป้องกันแล้ว",
    unknownStatus: "ไม่ทราบสถานะ",

    operationPipeline:
      "กระบวนการทำงานที่ปลอดภัย",

    operationPipelineDescription:
      "ทุก Operation ที่มีสิทธิ์สูงต้องผ่าน Security Pipeline",

    pipelineReady: "พร้อมใช้งาน",

    permissionCheck: "ตรวจสอบสิทธิ์",
    safetyValidation: "ตรวจสอบความปลอดภัย",
    confirmation: "ยืนยันการทำงาน",
    backupStage: "สำรองข้อมูล",
    execute: "ดำเนินการ",
    verify: "ตรวจสอบผลลัพธ์",
    operationLog: "บันทึก Operation",

    backupRequired: "ต้องสำรองข้อมูล",
    backupDescription:
      "WOS จะสร้างข้อมูลสำหรับกู้คืนก่อนแก้ไขระบบ",

    securityConfirmation:
      "ยืนยันการทำงานด้านความปลอดภัย",

    operationBlocked:
      "Operation นี้ถูกบล็อก",

    operationCompleted:
      "Operation สำเร็จ",

    operationFailed:
      "Operation ล้มเหลว",

    rollbackStarted:
      "กำลังย้อนกลับการเปลี่ยนแปลง",

    rollbackCompleted:
      "ย้อนกลับการเปลี่ยนแปลงสำเร็จ",
  },

  permissions: {
    user: "ผู้ใช้",
    admin: "ผู้ดูแลระบบ",
    system: "ระบบ",

    permissionRequired:
      "ต้องการสิทธิ์เพิ่มเติม",

    insufficientPermission:
      "คุณไม่มีสิทธิ์เพียงพอสำหรับ Operation นี้",

    administratorRequired:
      "Operation นี้ต้องใช้สิทธิ์ Administrator",

    systemPermissionRequired:
      "Operation นี้ต้องใช้สิทธิ์ระดับ System",
  },

  operations: {
    systemScan: "สแกนระบบ",
    performanceScan: "สแกนประสิทธิภาพ",
    windowsTweak: "ปรับแต่ง Windows",
    registryModification: "แก้ไข Registry",
    serviceModification: "แก้ไข Services",
    processManagement: "จัดการ Processes",
    systemCleanup: "ทำความสะอาดระบบ",

    description: {
      systemScan:
        "วิเคราะห์ข้อมูลพื้นฐานของระบบ Windows",

      performanceScan:
        "วิเคราะห์ประสิทธิภาพของ CPU, GPU, RAM และระบบ",

      windowsTweak:
        "ปรับแต่งการตั้งค่า Windows",

      registryModification:
        "แก้ไข Windows Registry",

      serviceModification:
        "จัดการ Windows Services",

      processManagement:
        "จัดการ Windows Processes",

      systemCleanup:
        "ลบไฟล์ระบบที่ไม่จำเป็น",
    },
  },

  scanner: {
    title: "System Scanner",

    description:
      "ตรวจสอบและวิเคราะห์สถานะของระบบ Windows",

    systemOverview: "ภาพรวมระบบ",

    cpu: "CPU",
    gpu: "GPU",
    memory: "หน่วยความจำ",
    storage: "พื้นที่จัดเก็บ",
    network: "เครือข่าย",

    scanning: "กำลังสแกนระบบ...",
    scanComplete: "สแกนระบบเสร็จสิ้น",

    scanFailed: "การสแกนล้มเหลว",

    scanAgain: "สแกนอีกครั้ง",

    healthy: "ปกติ",
    attention: "ควรตรวจสอบ",
    critical: "วิกฤต",
  },

  optimizer: {
    title: "Windows Optimizer",

    description:
      "ปรับแต่ง Windows เพื่อประสิทธิภาพการใช้งานและการเล่นเกม",

    performance: "ประสิทธิภาพ",
    gaming: "เกมมิ่ง",
    latency: "ความหน่วง",
    background: "โปรแกรมเบื้องหลัง",

    optimize: "เริ่ม Optimize",
    optimizing: "กำลัง Optimize...",
    optimized: "Optimize แล้ว",

    recommended: "แนะนำ",
    custom: "กำหนดเอง",
  },

  fivem: {
    title: "FiveM Optimizer",

    description:
      "การปรับแต่งระบบสำหรับ FiveM",

    performance: "ประสิทธิภาพ FiveM",
    fps: "FPS",
    inputLatency: "Input Latency",
    networkLatency: "Network Latency",

    optimize: "Optimize FiveM",
    launch: "เปิด FiveM",
  },

  dashboard: {
    title: "Dashboard",

    description:
      "ภาพรวมสถานะและประสิทธิภาพของ WOS",

    systemStatus: "สถานะระบบ",
    performance: "ประสิทธิภาพ",
    security: "ความปลอดภัย",
    optimization: "การ Optimize",

    systemHealthy: "ระบบทำงานปกติ",
    optimizationReady:
      "พร้อมสำหรับการ Optimize",
  },

  settings: {
    title: "ตั้งค่า",

    description:
      "จัดการการตั้งค่าของ WOS",

    language: "ภาษา",
    appearance: "รูปลักษณ์",
    notifications: "การแจ้งเตือน",
    security: "ความปลอดภัย",

    languageThai: "ไทย",
    languageEnglish: "English",

    darkMode: "โหมดมืด",
    lightMode: "โหมดสว่าง",
    systemMode: "ตามระบบ",
  },

  language: {
    title: "ภาษา",
    select: "เลือกภาษา",
    thai: "ไทย",
    english: "English",
  },
}

export default th
