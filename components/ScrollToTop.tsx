"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        rounded-full p-3 shadow-lg
        bg-white text-slate-900
        hover:bg-slate-100
        dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800
        border border-slate-200 dark:border-white/10
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
