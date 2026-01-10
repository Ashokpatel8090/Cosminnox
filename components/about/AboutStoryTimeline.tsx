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
      <section className="py-24 bg-background text-foreground">
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
                <div
                  key={i}
                  className="glass-card hover-lift p-8 rounded-2xl text-center border border-border"
                >
                  <div className="text-xl font-semibold text-foreground">
                    {stat}
                  </div>
                </div>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}

    </>
  )
}
