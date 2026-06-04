import { getMarkdownContent } from "@/lib/markdown"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { PageNavigation } from "@/components/PageNavigation"
import { TableOfContentsProvider } from "@/components/TableOfContents"

export default function DocsPage() {
  const content = getMarkdownContent("getting-started")

  if (!content) {
    return <div className="text-secondary">Content not found.</div>
  }

  return (
    <div className="flex gap-8">
      <div className="min-w-0 flex-1">
        <MarkdownRenderer content={content} />
        <PageNavigation currentSlug="getting-started" />
      </div>
      <TableOfContentsProvider />
    </div>
  )
}
