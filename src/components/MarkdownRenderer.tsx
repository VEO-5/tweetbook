import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Components = {
    h1: ({ children }) => {
      const slug = String(children).toLowerCase().replace(/\s+/g, "-")
      return (
        <h1 id={slug} className="scroll-mt-24">
          {children}
        </h1>
      )
    },
    h2: ({ children }) => {
      const slug = String(children).toLowerCase().replace(/\s+/g, "-")
      return (
        <h2 id={slug} className="scroll-mt-24 group">
          <a href={`#${slug}`} className="heading-anchor">
            #
          </a>
          {children}
        </h2>
      )
    },
    h3: ({ children }) => {
      const slug = String(children).toLowerCase().replace(/\s+/g, "-")
      return (
        <h3 id={slug} className="scroll-mt-24 group">
          <a href={`#${slug}`} className="heading-anchor">
            #
          </a>
          {children}
        </h3>
      )
    },
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    code: ({ className, children }) => {
      const isInline = !className
      if (isInline) {
        return <code>{children}</code>
      }
      return (
        <pre>
          <div className="code-block-header">
            <span>{(className || "").replace("language-", "")}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(String(children).replace(/\n$/, ""))
              }}
              className="text-tertiary hover:text-default transition-colors text-xs"
            >
              Copy
            </button>
          </div>
          <code className={className}>{children}</code>
        </pre>
      )
    },
    pre: ({ children }) => <>{children}</>,
    table: ({ children }) => (
      <div className="overflow-x-auto">
        <table>{children}</table>
      </div>
    ),
    input: ({ type, checked }) => {
      if (type === "checkbox") {
        return (
          <span className="inline-flex items-center">
            <span
              className={`inline-block w-4 h-4 mr-2 rounded border ${
                checked
                  ? "bg-[var(--color-text-emphasis)] border-[var(--color-text-emphasis)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {checked && (
                <svg viewBox="0 0 16 16" className="w-4 h-4 text-[var(--color-bg-default)]">
                  <path
                    fill="currentColor"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  />
                </svg>
              )}
            </span>
          </span>
        )
      }
      return <input type={type} checked={checked} readOnly />
    },
    li: ({ children, className }) => {
      if (className?.includes("task-list-item")) {
        return <li className="list-none -ml-1.5">{children}</li>
      }
      return <li>{children}</li>
    },
  }

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
