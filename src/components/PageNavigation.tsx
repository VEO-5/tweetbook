import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { docSections } from "@/lib/content"

interface PageNavigationProps {
  currentSlug: string
}

export function PageNavigation({ currentSlug }: PageNavigationProps) {
  const currentIndex = docSections.findIndex((s) => s.slug === currentSlug)
  const prev = currentIndex > 0 ? docSections[currentIndex - 1] : null
  const next =
    currentIndex < docSections.length - 1 ? docSections[currentIndex + 1] : null

  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-[var(--color-border)]">
      {prev ? (
        <Link
          href={prev.slug === "getting-started" ? "/docs" : `/docs/${prev.slug}`}
          className="flex items-center gap-1 text-sm text-secondary hover:text-default transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="flex items-center gap-1 text-sm text-secondary hover:text-default transition-colors"
        >
          <span>{next.title}</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
