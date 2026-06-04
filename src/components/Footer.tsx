import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-secondary mb-3">
              PLAYBOOK
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/cheat-sheet"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Cheat Sheet
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-secondary mb-3">
              STRATEGY
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/algorithm-insights"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Algorithm
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/reply-strategy"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Reply Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/founder-niche"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Founder Niche
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-secondary mb-3">
              OPTIMIZATION
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/aeo-seo"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  AEO & SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/daily-routine"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Daily Routine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-secondary mb-3">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-tertiary">
            &copy; {new Date().getFullYear()} Twitter Growth Playbook. Built with
            insights from the 2026 X algorithm.
          </p>
        </div>
      </div>
    </footer>
  )
}
