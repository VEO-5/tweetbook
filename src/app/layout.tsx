import type { Metadata } from "next"
import { ThemeProvider } from "@/app/providers/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Twitter Growth Playbook",
  description: "A comprehensive guide to scaling your Twitter presence using 2026 algorithm strategies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full bg-[var(--color-bg-default)] text-[var(--color-text-default)] font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
