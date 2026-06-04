import { notFound } from "next/navigation"
import { getMarkdownContent } from "@/lib/markdown"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { PageNavigation } from "@/components/PageNavigation"
import { TableOfContentsProvider } from "@/components/TableOfContents"
import { docSections } from "@/lib/content"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return docSections
    .filter((s) => s.slug !== "getting-started")
    .map((s) => ({ slug: s.slug }))
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const content = getMarkdownContent(slug)

  if (!content) {
    notFound()
  }

  const currentSlug = docSections.find((s) => s.slug === slug) ? slug : "getting-started"

  return (
    <div className="flex gap-8">
      <div className="min-w-0 flex-1">
        <MarkdownRenderer content={content} />
        <PageNavigation currentSlug={currentSlug} />
      </div>
      <TableOfContentsProvider />
    </div>
  )
}
