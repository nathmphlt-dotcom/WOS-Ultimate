"use client"

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  DEFAULT_SECURITY_STATE,
  type SecurityState,
} from "../../config/security-state"

type SecurityContextValue = {
  security: SecurityState
  setSecurity: React.Dispatch<React.SetStateAction<SecurityState>>
  isWebMode: boolean
  isWindowsBackendConnected: boolean
}

const SecurityContext =
  createContext<SecurityContextValue | null>(null)

export function SecurityProvider({
  children,
}: {
  children: ReactNode
}) {
  const [security, setSecurity] = useState<SecurityState>(
    DEFAULT_SECURITY_STATE
  )

  const value = useMemo(
    () => ({
      security,
      setSecurity,
      isWebMode: security.backend === "web",
      isWindowsBackendConnected:
        security.backend === "connected",
    }),
    [security]
  )

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  )
}

export function useSecurity() {
  const context = useContext(SecurityContext)

  if (!context) {
    throw new Error(
      "useSecurity must be used inside SecurityProvider"
    )
  }

  return context
    }
