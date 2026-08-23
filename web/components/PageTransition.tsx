"use client"

import React from "react"

type PageTransitionProps = {
  children: React.ReactNode
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  return (
    <div className="wos-page-transition">
      {children}
    </div>
  )
}
