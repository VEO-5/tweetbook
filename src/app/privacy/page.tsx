import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SidebarProvider } from "@/lib/sidebar-context"

export default function PrivacyPage() {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link href="/" className="text-xs text-tertiary hover:text-secondary transition-colors">
            &larr; Back to home
          </Link>
          <h1 className="mt-6 text-3xl font-semibold text-[var(--color-text-emphasis)] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-tertiary">Last updated: June 11, 2026</p>

          <div className="mt-10 space-y-6 text-sm text-secondary leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">1. Information We Collect</h2>
              <p>
                We collect minimal information necessary to provide the Twitter Growth Playbook service. This may include
                anonymous usage data such as page views and feature interactions to help us improve the content.
              </p>
              <p className="mt-2">
                We do not collect personal information unless you voluntarily provide it (e.g., by contacting us).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">2. How We Use Your Information</h2>
              <p>
                Any information collected is used solely to operate, maintain, and improve the Playbook experience.
                We do not sell, trade, or share your personal data with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">3. Cookies & Local Storage</h2>
              <p>
                We use browser local storage solely to remember your theme preference (light/dark mode).
                No cookies are used for tracking or advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">4. Third-Party Services</h2>
              <p>
                This site is built with Next.js and may use Vercel for hosting. Vercel may collect standard
                server logs (IP address, browser type, pages visited) as part of their normal operations.
                Please refer to Vercel&apos;s privacy policy for more details.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">5. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[var(--color-text-emphasis)] mb-2">6. Contact</h2>
              <p>
                If you have any questions about this policy, please open an issue on our
                GitHub repository.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  )
}
