import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { SidebarProvider } from "@/lib/sidebar-context"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Navbar />
      <Sidebar />
      <div className="pt-16 md:pl-[240px]">
        <main className="min-w-0 flex-1 px-6 py-8 md:py-12 max-w-4xl mx-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
