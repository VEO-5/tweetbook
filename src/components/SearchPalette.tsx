"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText } from "lucide-react"
import Fuse from "fuse.js"

interface SearchDoc {
  slug: string
  title: string
  description: string
  group: string
  content: string
}

interface SearchPaletteProps {
  open: boolean
  onClose: () => void
}

export function SearchPalette({ open, onClose }: SearchPaletteProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const [docs, setDocs] = useState<SearchDoc[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const fuseRef = useRef<Fuse<SearchDoc> | null>(null)

  useEffect(() => {
    if (open && docs.length === 0) {
      fetch("/api/search")
        .then((res) => res.json())
        .then((data: SearchDoc[]) => {
          setDocs(data)
          fuseRef.current = new Fuse(data, {
            keys: ["title", "description", "content"],
            threshold: 0.4,
            includeScore: true,
          })
        })
    }
  }, [open, docs.length])

  useEffect(() => {
    if (open) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const results = useMemo(() => {
    if (!query.trim() || !fuseRef.current) return docs
    return fuseRef.current.search(query).map((r) => r.item)
  }, [query, docs])

  const navigate = useCallback(
    (doc: SearchDoc) => {
      const href = doc.slug === "getting-started" ? "/docs" : `/docs/${doc.slug}`
      router.push(href)
      onClose()
    },
    [router, onClose]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => Math.max(prev - 1, 0))
          break
        case "Enter":
          e.preventDefault()
          if (results[selectedIndex]) {
            navigate(results[selectedIndex])
          }
          break
        case "Escape":
          e.preventDefault()
          onClose()
          break
      }
    },
    [results, selectedIndex, navigate, onClose]
  )

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-[var(--color-overlay)] backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl mx-4 bg-[var(--color-bg-surface)] rounded-xl shadow-2xl border border-[var(--color-border)] overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-[var(--color-border)]">
          <Search className="h-4 w-4 text-secondary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search docs..."
            className="flex-1 py-3.5 bg-transparent text-sm text-default placeholder:text-tertiary outline-none border-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-default)] px-1.5 py-0.5 text-[11px] text-tertiary">
            ESC
          </kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-1">
          {results.length === 0 ? (
            <div className="px-3 py-8 text-center text-sm text-tertiary">
              {query ? (
                <>
                  No results for "<span className="text-default font-medium">{query}</span>"
                </>
              ) : (
                "Start typing to search..."
              )}
            </div>
          ) : (
            results.map((doc, i) => (
              <button
                key={doc.slug}
                onClick={() => navigate(doc)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`flex w-full items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  i === selectedIndex
                    ? "bg-[var(--color-primary-soft)]"
                    : "hover:bg-[var(--color-primary-ghost-hover)]"
                }`}
              >
                <FileText className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-default truncate">{doc.title}</div>
                  <div className="text-xs text-secondary truncate">{doc.description}</div>
                </div>
                <span className="shrink-0 text-[10px] text-tertiary truncate max-w-28">{doc.group}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
