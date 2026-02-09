"use client"

import { motion } from "framer-motion"
import { Zap, Layers, Cpu, Rocket, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  { title: "Clarity", desc: "Market, problem, positioning", icon: Zap },
  { title: "Design", desc: "Product, experience, brand", icon: Layers },
  { title: "Engineering", desc: "Scalable and secure systems", icon: Cpu },
  { title: "Launch", desc: "Speed with stability", icon: Rocket },
  { title: "Scale", desc: "Automation, partnerships, growth", icon: ArrowRight },
]

export default function HowWeBuildSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const triggerLine = window.innerHeight * 0.45

      let currentActive = 0

      refs.current.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()

        if (rect.top < triggerLine) {
          currentActive = idx
        }
      })

      setActiveIndex(currentActive)
    }

    window.addEventListener("scroll", onScroll)
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="mb-32 max-w-5xl mx-auto px-6 bg-white mt-15">
      <h2 className="text-3xl font-bold mb-16 text-center md:text-left text-gray-900">
        How We Build
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400/40 via-violet-400/40 to-transparent hidden md:block" />

        <div className="space-y-20">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = idx === activeIndex

            return (
              <motion.div
                key={step.title}
                ref={(el) => (refs.current[idx] = el)}
                className="flex items-start gap-6 md:gap-10"
                animate={{
                  scale: isActive ? 1.04 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                {/* ICON */}
                <motion.div
                  className="
                    flex-shrink-0
                    h-14 w-14 rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                  "
                  animate={{
                    scale: isActive ? 1.3 : 1,
                    boxShadow: isActive
                      ? "0 0 0 6px rgba(6,182,212,0.25), 0 12px 40px rgba(6,182,212,0.45)"
                      : "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-cyan-600" : "text-gray-500"
                    }`}
                  />
                </motion.div>

                {/* TEXT */}
                <div className="pt-2">
                  <h3
                    className={`text-xl font-bold ${
                      isActive ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 max-w-md ${
                      isActive ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
