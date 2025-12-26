"use client"

import type React from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@latest/bundled/lenis.js"
    script.async = true

    script.onload = () => {
      const lenis = new (window as any).Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
