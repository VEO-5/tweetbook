"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import Script from "next/script"

const STORAGE_KEY = "theme"
const THEMES = ["light", "dark"] as const
type Theme = (typeof THEMES)[number]

interface ThemeContextValue {
  theme: Theme | undefined
  setTheme: (theme: Theme) => void
  resolvedTheme: Theme
}

const ThemeCtx = createContext<ThemeContextValue>({
  theme: undefined,
  setTheme: () => {},
  resolvedTheme: "light",
})

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getSavedTheme(): Theme | undefined {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "dark" || saved === "light") return saved
  } catch {}
  return undefined
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove(...THEMES)
  root.classList.add(theme)
  root.style.colorScheme = theme
}

export function ThemeProvider({ children, defaultTheme = "dark", enableSystem = true }: {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
}) {
  const [theme, setThemeState] = useState<Theme | undefined>(undefined)
  const [systemTheme, setSystemTheme] = useState<Theme>("light")

  useEffect(() => {
    const saved = getSavedTheme()
    const initial = saved ?? (enableSystem ? getSystemTheme() : defaultTheme)
    setThemeState(initial)
    applyTheme(initial)

    if (!saved && enableSystem) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = () => {
        const st = mq.matches ? "dark" : "light"
        setSystemTheme(st)
      }
      mq.addEventListener("change", handler)
      return () => mq.removeEventListener("change", handler)
    }
  }, [enableSystem, defaultTheme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    applyTheme(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
  }, [])

  useEffect(() => {
    if (!theme && enableSystem) {
      const st = getSystemTheme()
      setSystemTheme(st)
      setThemeState(st)
      applyTheme(st)
    }
  }, [theme, enableSystem])

  const resolvedTheme = theme === undefined ? defaultTheme : theme

  const value = useMemo(() => ({ theme, setTheme, resolvedTheme }), [theme, setTheme, resolvedTheme])

  return (
    <>
      <Script id="theme-init" strategy="beforeInteractive">
        {`!function(){try{var e=localStorage.getItem("${STORAGE_KEY}");if(e==="dark"||e==="light"){document.documentElement.classList.remove(${THEMES.map(t => `"${t}"`).join(",")});document.documentElement.classList.add(e);document.documentElement.style.colorScheme=e}else if(${enableSystem}){var t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t}}catch(e){}}()`}
      </Script>
      <ThemeCtx.Provider value={value}>
        {children}
      </ThemeCtx.Provider>
    </>
  )
}

export function useTheme() {
  return useContext(ThemeCtx)
}
