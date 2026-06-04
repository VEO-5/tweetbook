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
  Heart,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { buttonVariants } from "@/components/Button"
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
              <Link href="/docs" className={buttonVariants({ variant: "primary" })}>
                Get Started
              </Link>
              <Link href="#" className={buttonVariants({ variant: "secondary" })}>
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Quickstart code block */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="rounded-[28px] bg-[var(--color-bg-surface)] shadow-[0_36px_120px_-48px_rgba(15,23,42,0.55)] ring-1 ring-black/10 overflow-hidden">
            <div className="code-block-header">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: MessageCircle,
                title: "Reply Strategy",
                desc: "Master the 7 reply types that drive engagement.",
                href: "/docs/reply-strategy",
                hoverBg: "/hover1.jpg",
              },
              {
                icon: BarChart3,
                title: "Algorithm Insights",
                desc: "Understand what the algorithm rewards.",
                href: "/docs/algorithm-insights",
                hoverBg: "/hover2.jpg",
              },
              {
                icon: Target,
                title: "Target Selection",
                desc: "Find the right accounts to engage with.",
                href: "/docs/reply-strategy",
                hoverBg: "/hover3.jpg",
              },
              {
                icon: Lightbulb,
                title: "Founder Niche",
                desc: "Patterns that resonate with builder audiences.",
                href: "/docs/founder-niche",
                hoverBg: "/hover4.jpg",
              },
              {
                icon: Clock,
                title: "Daily Routine",
                desc: "Optimal timing and volume for replies.",
                href: "/docs/daily-routine",
                hoverBg: "/hover5.jpg",
              },
              {
                icon: Search,
                title: "AEO & SEO",
                desc: "Optimize for AI search engines like Grok.",
                href: "/docs/aeo-seo",
                hoverBg: "/hover7.jpg",
              },
              {
                icon: Users,
                title: "Building in Public",
                desc: "Share progress to build authentic authority.",
                href: "/docs/founder-niche",
                hoverBg: "/hover9.jpg",
              },
              {
                icon: Heart,
                title: "Signal Boost",
                desc: "Like posts when you reply to increase visibility with the author.",
                href: "/docs/reply-strategy",
                hoverBg: "/hover2.jpg",
              },
              {
                icon: BookOpen,
                title: "Cheat Sheet",
                desc: "Quick reference of all key numbers.",
                href: "/docs/cheat-sheet",
                hoverBg: "/hover3.jpg",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative h-[200px] md:h-[260px] overflow-hidden rounded-2xl bg-[var(--color-bg-surface)] p-6 md:p-8 transition duration-500"
              >
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url(${item.hoverBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div className="text-[var(--color-text-emphasis)] transition duration-500 group-hover:text-white">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-[var(--color-text-emphasis)] transition duration-500 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-secondary leading-relaxed transition duration-500 group-hover:text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </SidebarProvider>
  )
}
