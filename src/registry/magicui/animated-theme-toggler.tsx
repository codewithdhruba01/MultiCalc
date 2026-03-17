"use client"

import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const currentTheme = theme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme

    const newTheme = currentTheme === "light" ? "dark" : "light"

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [theme, setTheme, duration])

  const currentTheme = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-none text-sm font-medium transition duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none",
        "h-11 w-11 border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_black]",
        "hover:bg-[#E0E0E0]",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        "focus-visible:outline-none focus-visible:ring-0 bauhaus-focus-ring",
        className
      )}
      {...props}
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
