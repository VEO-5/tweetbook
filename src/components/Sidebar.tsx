"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { docSections, groups } from "@/lib/content"
import { useState } from "react"
import { useSidebar } from "@/lib/sidebar-context"

export function Sidebar() {
  const pathname = usePathname()
  const sidebar = useSidebar()
  const { theme, setTheme } = useTheme()
  const [mounted] = useState(() => typeof window !== "undefined")

  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(groups)
  )

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(group)) next.delete(group)
      else next.add(group)
      return next
    })
  }

  const isActive = (slug: string) =>
    pathname === `/docs/${slug}` || (slug === "getting-started" && pathname === "/docs")

  const content = (
    <div className="flex flex-col h-full">
      <nav className="flex-1 overflow-y-auto overflow-x-visible py-2">
        {groups.map((group) => {
          const groupSections = docSections.filter((s) => s.group === group)
          const isExpanded = expandedGroups.has(group)

          if (groupSections.length === 1) {
            const section = groupSections[0]
            return (
              <div key={group} className="mb-1">
                <Link
                  href={section.slug === "getting-started" ? "/docs" : `/docs/${section.slug}`}
                  onClick={sidebar.close}
                  className={cn(
                    "flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm font-normal transition-colors",
                    isActive(section.slug)
                      ? "bg-[var(--color-primary-ghost-active)] text-default font-semibold"
                      : "text-secondary hover:bg-[var(--color-primary-ghost-hover)] hover:text-default"
                  )}
                >
                  <span className="flex-1">{section.title}</span>
                  {(section.slug === "reply-strategy" || section.slug === "cheat-sheet") && (
                    <span className="shrink-0 rounded-full bg-[var(--color-primary-soft)] px-2 py-0.5 text-[10px] font-medium text-secondary">
                      NEW
                    </span>
                  )}
                </Link>
              </div>
            )
          }

          return (
            <div key={group} className="mb-1">
              <button
                onClick={() => toggleGroup(group)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2 rounded-lg transition-colors hover:text-default hover:bg-[var(--color-primary-ghost-hover)] text-xs tracking-wide text-secondary"
              >
                <span>{group}</span>
                <ChevronRight
                  className={cn(
                    "h-3 w-3 transition-transform",
                    isExpanded && "rotate-90"
                  )}
                />
              </button>

              {isExpanded && (
                <div className="ml-0">
                  {groupSections.map((section) => (
                    <Link
                      key={section.slug}
                      href={
                        section.slug === "getting-started"
                          ? "/docs"
                          : `/docs/${section.slug}`
                      }
                      onClick={sidebar.close}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-sm font-normal transition-colors",
                        isActive(section.slug)
                          ? "bg-[var(--color-primary-ghost-active)] text-default font-semibold"
                          : "text-secondary hover:bg-[var(--color-primary-ghost-hover)] hover:text-default"
                      )}
                    >
                      <span className="flex-1">{section.title}</span>
                      {(section.slug === "reply-strategy" || section.slug === "cheat-sheet") && (
                        <span className="shrink-0 rounded-full bg-[var(--color-primary-soft)] px-2 py-0.5 text-[10px] font-medium text-secondary">
                          NEW
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>


    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-[218px] px-3 pb-6 pt-2 fixed top-16 bottom-0 z-40 bg-[var(--color-bg-default)]">
        {content}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebar.open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-xs"
            onClick={sidebar.close}
          />
          <div className="relative z-10 w-[280px] h-full bg-[var(--color-bg-surface)] shadow-xl overflow-y-auto">
            {content}
          </div>
        </div>
      )}
    </>
  )
}
