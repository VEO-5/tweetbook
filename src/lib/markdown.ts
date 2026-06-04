import fs from "fs"
import path from "path"

const contentDir = path.join(process.cwd(), "content")

export function getMarkdownContent(slug: string): string | null {
  const filePath = path.join(contentDir, `${slug}.md`)
  try {
    return fs.readFileSync(filePath, "utf-8")
  } catch {
    return null
  }
}
