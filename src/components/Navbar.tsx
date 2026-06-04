"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sun, Moon, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/lib/sidebar-context"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const sidebar = useSidebar()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const navLinks = [
    { href: "/docs", label: "Docs" },
  ]

  return (
    <header className="fixed top-0 w-full h-16 z-50 bg-[var(--color-bg-default)] border-b border-[var(--color-border)]">
      <div className="flex items-center h-full px-4 md:px-6 gap-4">
        <button
          onClick={sidebar.toggle}
          className="md:hidden relative text-secondary hover:text-default transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="flex items-center font-bold ml-0 md:-ml-2 text-2xl text-[var(--color-text-emphasis)] shrink-0">
          Tweetbook
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && link.href !== "#"
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm px-2.5 py-1 rounded-md transition-colors",
                  isActive
                    ? "text-[var(--color-text-default)] bg-[var(--color-primary-soft)]"
                    : "text-secondary hover:text-default hover:bg-[var(--color-primary-ghost-hover)]"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex-1" />

        <button className="hidden xl:flex min-w-52 items-center justify-between gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-2 text-sm text-secondary transition-colors hover:bg-[var(--color-primary-ghost-hover)] hover:text-default">
          <span>Search docs...</span>
          <kbd className="inline-flex items-center gap-0.5 text-xs text-tertiary">
            <span>⌘</span>K
          </kbd>
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:flex text-secondary hover:text-default transition-colors"
          aria-label="Toggle theme"
        >
          {!mounted ? <div className="h-5 w-5" /> : theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button className="md:hidden relative right-1 text-secondary hover:text-default transition-colors" aria-label="Search">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
