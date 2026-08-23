import type { ReactNode } from "react"

type GlassCardProps = {
  children: ReactNode
  className?: string
  accent?: "purple" | "cyan" | "green" | "orange" | "red"
}

export default function GlassCard({
  children,
  className = "",
  accent,
}: GlassCardProps) {
  return (
    <section
      className={`wos-card ${
        accent ? `accent-${accent}` : ""
      } ${className}`.trim()}
    >
      {children}
    </section>
  )
}
