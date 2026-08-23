import "../styles/globals.css"
import WOSUI from "../components/WOSUI"

export const metadata = {
  title: "WOS Ultimate",
  description: "Windows Optimizer Suite",
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
