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
  },

  navigation: {
    dashboard: "แดชบอร์ด",
    optimizer: "ตัวเพิ่มประสิทธิภาพ",
    scanner: "สแกนระบบ",
    security: "ความปลอดภัย",
    settings: "ตั้งค่า",
    fivem: "FiveM",
  },

  topbar: {
    systemReady: "ระบบพร้อมใช้งาน",
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

    securityContextDescription:
      "สภาพแวดล้อมและระดับสิทธิ์ปัจจุบันของ WOS",

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
  },

  permissions: {
    user: "ผู้ใช้",
    admin: "ผู้ดูแลระบบ",
    system: "ระบบ",
    permissionRequired: "ต้องการสิทธิ์เพิ่มเติม",
    insufficientPermission:
      "คุณไม่มีสิทธิ์เพียงพอสำหรับ Operation นี้",
  },

  operations: {
    systemScan: "สแกนระบบ",
    performanceScan: "สแกนประสิทธิภาพ",
    windowsTweak: "ปรับแต่ง Windows",
    registryModification: "แก้ไข Registry",
    serviceModification: "แก้ไข Services",
    processManagement: "จัดการ Processes",
    systemCleanup: "ทำความสะอาดระบบ",
  },
}

export default th
