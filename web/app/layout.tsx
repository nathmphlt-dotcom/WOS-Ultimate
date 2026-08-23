import type { Metadata } from "next"
import "../styles/globals.css"

import WOSUI from "../components/WOSUI"

export const metadata: Metadata = {
  title: "WOS Ultimate",
  description:
    "Windows Optimizer Suite — CyberGlass System Optimization",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <WOSUI>
          {children}
        </WOSUI>
      </body>
    </html>
  )
}
