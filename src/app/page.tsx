import Link from "next/link"
import {
  MessageCircle,
  BarChart3,
  Target,
  Lightbulb,
  Clock,
  Search,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SidebarProvider } from "@/lib/sidebar-context"

export default function Home() {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
            <h1 className="text-[30px] leading-[42px] md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-emphasis)] tracking-tight">
              Twitter Growth Playbook
            </h1>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              A comprehensive, data-driven guide to scaling your X presence using
              2026 algorithm strategies, reply tactics, and semantic optimization.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-[var(--color-border)] text-sm text-secondary hover:text-default hover:bg-[var(--color-primary-ghost-hover)] transition-colors"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Quickstart code block */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="rounded-[28px] bg-[var(--color-bg-surface)] shadow-[0_36px_120px_-48px_rgba(15,23,42,0.55)] ring-1 ring-black/10 overflow-hidden">
            <div className="code-block-header">
              <span className="flex items-center gap-2">
                <span className="text-xs text-secondary">curl</span>
              </span>
              <button className="text-tertiary hover:text-default transition-colors text-xs">
                Copy
              </button>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
              <code className="text-[var(--color-text-default)]">
                {`# Apply the Reply Guy strategy in 3 steps
# Step 1: Find target accounts (5-20x your follower count)
# Step 2: Reply within 5 minutes of posting
# Step 3: Use one of 7 proven reply types

# Example reply types:
# - Data Reply: Share specific metrics
# - Experience Reply: Share personal stories
# - Insight Reply: Offer new perspective
# - Amplification Reply: Extend their point`}
              </code>
            </pre>
          </div>
        </section>

        {/* Build paths */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-xs tracking-wide text-secondary mb-4">BUILD PATHS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/algorithm-insights"
              className="group rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-surface)] p-5 hover:bg-[rgba(255,255,255,0.03)] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text-emphasis)]">
                    Algorithm Insights
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    Understand the 2026 X algorithm shifts, reply weighting, and
                    engagement velocity.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-secondary group-hover:text-default transition-colors shrink-0 mt-0.5" />
              </div>
            </Link>
            <Link
              href="/docs/reply-strategy"
              className="group rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-surface)] p-5 hover:bg-[var(--color-primary-ghost-hover)] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text-emphasis)]">
                    Reply Strategy
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    Master the 70/30 rule, target selection, and 7 proven reply
                    types.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-secondary group-hover:text-default transition-colors shrink-0 mt-0.5" />
              </div>
            </Link>
          </div>
        </section>

        {/* Models section — strategy tiers */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-xs tracking-wide text-secondary mb-4">STRATEGY TIERS</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Growth Starter",
                desc: "Foundation tactics for new accounts building initial momentum.",
              },
              {
                name: "Scaling Pro",
                desc: "Advanced reply patterns and timing optimization for consistent growth.",
              },
              {
                name: "Authority Builder",
                desc: "Full-stack strategy combining AEO, semantic SEO, and niche dominance.",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-surface)] p-5"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text-emphasis)]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Start building */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-xs tracking-wide text-secondary mb-4">
            START BUILDING
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Reply Strategy",
                desc: "Master the 7 reply types that drive engagement.",
                href: "/docs/reply-strategy",
              },
              {
                icon: BarChart3,
                title: "Algorithm Insights",
                desc: "Understand what the algorithm rewards.",
                href: "/docs/algorithm-insights",
              },
              {
                icon: Target,
                title: "Target Selection",
                desc: "Find the right accounts to engage with.",
                href: "/docs/reply-strategy",
              },
              {
                icon: Lightbulb,
                title: "Founder Niche",
                desc: "Patterns that resonate with builder audiences.",
                href: "/docs/founder-niche",
              },
              {
                icon: Clock,
                title: "Daily Routine",
                desc: "Optimal timing and volume for replies.",
                href: "/docs/daily-routine",
              },
              {
                icon: Search,
                title: "AEO & SEO",
                desc: "Optimize for AI search engines like Grok.",
                href: "/docs/aeo-seo",
              },
              {
                icon: Users,
                title: "Building in Public",
                desc: "Share progress to build authentic authority.",
                href: "/docs/founder-niche",
              },
              {
                icon: BookOpen,
                title: "Cheat Sheet",
                desc: "Quick reference of all key numbers.",
                href: "/docs/cheat-sheet",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-surface)] p-4 hover:bg-[var(--color-primary-ghost-hover)] transition-colors"
              >
                <item.icon className="h-5 w-5 text-secondary mb-3" />
                <h3 className="text-sm font-semibold text-[var(--color-text-emphasis)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </SidebarProvider>
  )
}
