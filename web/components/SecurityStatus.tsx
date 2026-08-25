"use client";

import { useSecurity } from "./SecurityProvider";

export default function SecurityStatus() {
  const {
    isNativeEnvironment,
    isAdministrator,
    safeMode,
  } = useSecurity();

  const adminLabel = !isNativeEnvironment
    ? "NATIVE CHECK REQUIRED"
    : isAdministrator
      ? "ADMINISTRATOR"
      : "ADMIN REQUIRED";

  return (
    <div className="wos-security-status">
      <span
        className={`wos-security-dot ${
          isAdministrator && isNativeEnvironment
            ? "success"
            : "warning"
        }`}
      />

      <div className="wos-security-content">
        <strong>{adminLabel}</strong>

        <span>
          {safeMode
            ? "SAFE MODE"
            : "EXPERT MODE"}
        </span>
      </div>
    </div>
  );
}
