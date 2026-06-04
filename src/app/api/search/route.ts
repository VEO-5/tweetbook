import { NextResponse } from "next/server"
import { docSections } from "@/lib/content"
import { getMarkdownContent } from "@/lib/markdown"

export async function GET() {
  const docs = docSections.map((section) => {
    const content = getMarkdownContent(section.slug) ?? ""
    return {
      slug: section.slug,
      title: section.title,
      description: section.description,
      group: section.group,
      content,
    }
  })
  return NextResponse.json(docs)
}
