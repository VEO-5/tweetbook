export interface DocSection {
  slug: string
  title: string
  description: string
  group: string
}

export const docSections: DocSection[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Overview and quick start checklist",
    group: "Getting Started",
  },
  {
    slug: "algorithm-insights",
    title: "Algorithm Insights",
    description: "Twitter algorithm shifts and negative signals",
    group: "Algorithm Insights",
  },
  {
    slug: "reply-strategy",
    title: "Reply Strategy",
    description: "70/30 rule, target selection, and 7 reply types",
    group: "Reply Strategy",
  },
  {
    slug: "founder-niche",
    title: "Founder/AI Niche",
    description: "PAS framework, building in public, zero-click content",
    group: "Founder/AI Niche",
  },
  {
    slug: "daily-routine",
    title: "Daily Routine",
    description: "Volume recommendations and timing windows",
    group: "Daily Routine",
  },
  {
    slug: "aeo-seo",
    title: "AEO & Semantic SEO",
    description: "Entity mapping, Grok integration, keywords",
    group: "AEO & Semantic SEO",
  },
  {
    slug: "signal-boost",
    title: "Signal Boost",
    description: "Like posts to increase reply visibility with the author",
    group: "Reply Strategy",
  },
  {
    slug: "cheat-sheet",
    title: "Cheat Sheet",
    description: "Quick reference of all key numbers and rules",
    group: "Cheat Sheet",
  },
]

export const groups = Array.from(new Set(docSections.map((s) => s.group)))
