"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  SECURITY_CHECKS,
  type SecurityCheck,
} from "../config/security";

type SecurityContextValue = {
  checks: SecurityCheck[];
  isNativeEnvironment: boolean;
  isAdministrator: boolean;
  safeMode: boolean;
  setSafeMode: (enabled: boolean) => void;
};

const SecurityContext =
  createContext<SecurityContextValue | null>(null);

export function SecurityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [safeMode, setSafeMode] = useState(true);

  const value = useMemo(
    () => ({
      checks: SECURITY_CHECKS,
      isNativeEnvironment: false,
      isAdministrator: false,
      safeMode,
      setSafeMode,
    }),
    [safeMode],
  );

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
}

export function useSecurity() {
  const context = useContext(SecurityContext);

  if (!context) {
    throw new Error(
      "useSecurity must be used inside SecurityProvider",
    );
  }

  return context;
}
