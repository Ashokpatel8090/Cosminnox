"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"

const milestones = [
  {
    year: "Research",
    title: "Deep-Tech Foundation",
    description:
      "Strong roots in AI, robotics, and advanced research-driven technologies.",
  },
  {
    year: "Collaboration",
    title: "Industry Partnerships",
    description:
      "Bridging startups with industry leaders and real-world use cases.",
  },
  {
    year: "Funding",
    title: "Capital Access",
    description:
      "Helping founders overcome funding delays through curated investor networks.",
  },
  {
    year: "Scale",
    title: "Commercialization",
    description:
      "Transforming research innovations into scalable, market-ready solutions.",
  },
]

export default function AboutStoryTimeline() {
  return (
    <>
      {/* ================= STORY ================= */}
      <section className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gradient-animated">
                Empowering India’s Deep-Tech Startups
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-6 mb-6 leading-tight">COSMINNOX </span>  accelerates AI, robotics, and deep-tech startups by
                bridging cutting-edge research with real-world commercialization.
                We enable founders with access to funding, industry collaborations,
                and world-class infrastructure to support both early and growth-stage
                ventures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                India’s deep-tech ecosystem often faces funding delays, weak industry
                integration, and infrastructure gaps. COSMINNOX closes this gap—
                transforming research innovations into scalable commercial impact.
              </p>
            </div>
          </ScrollReveal>
          <ParallaxSection>
            <div className="grid grid-cols-2 gap-6">
              {[
                "AI & Robotics",
                "Deep-Tech Focus",
                "Industry Access",
                "Startup Acceleration",
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="
                    relative
                    group
                    h-full
                    rounded-2xl
                    border border-border
                    bg-background
                    p-8
                    flex items-center justify-center
                    text-center
                    overflow-hidden
                    shadow-sm
                    hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  {/* ===== Hover Gradient Glow ===== */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-blue-500/10
                      via-purple-500/10
                      to-cyan-500/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />

                  {/* ===== Content ===== */}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {stat}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>
      {/* ================= TIMELINE ================= */}

    </>
  )
}
