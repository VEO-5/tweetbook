"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

function getTocItems(): TocItem[] {
  if (typeof document === "undefined") return []
  const headings = document.querySelectorAll(".prose h2, .prose h3")
  return Array.from(headings).map((h) => ({
    id: h.id,
    text: h.textContent || "",
    level: h.tagName === "H2" ? 2 : 3,
  }))
}

export function TableOfContentsProvider() {
  const [items] = useState<TocItem[]>(getTocItems)
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll(".prose h2, .prose h3")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <aside className="hidden xl:block w-[218px] shrink-0">
      <div className="fixed top-24">
        <h3 className="text-xs font-medium tracking-wide text-secondary mb-3">
          On this page
        </h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-colors py-0.5 border-l-2 pl-3",
                item.level === 3 ? "ml-3" : "",
                activeId === item.id
                  ? "text-[var(--color-text-emphasis)] border-[var(--color-text-emphasis)] font-medium"
                  : "text-tertiary border-transparent hover:text-secondary hover:border-secondary"
              )}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
