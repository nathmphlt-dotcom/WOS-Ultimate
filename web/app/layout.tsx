import "../styles/globals.css";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: "WOS — Windows Optimizer Suite",
  description: "Professional Windows Gaming Optimization Suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
