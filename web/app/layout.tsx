import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WOS — Windows Optimizer Suite",
  description: "WOS CyberGlass UI Preview"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
