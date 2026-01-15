"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Layers, Coins, Activity } from "lucide-react"

const modules = [
  {
    icon: Cpu,
    title: "Execution Intelligence",
    subtitle: "How founders think and decide",
    desc: [
      "AI-guided decision frameworks for daily founder problems",
      "Battle-tested playbooks for strategy, hiring, growth, and operations",
      "Structured thinking replaces instinct-driven execution",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Credential & Trust Layer",
    subtitle: "How credibility is established",
    desc: [
      "Industry-recognized certifications and validations",
      "Signals seriousness to partners, employers, and investors",
      "Converts learning into market-recognized proof",
    ],
  },
  {
    icon: Layers,
    title: "Service Infrastructure",
    subtitle: "How work actually gets done",
    desc: [
      "On-demand legal, compliance, tech, and growth services",
      "No retainers, no agencies, no guesswork",
      "Access services exactly when execution requires them",
    ],
  },
  {
    icon: Coins,
    title: "Tokenized Incentives (IDCoins)",
    subtitle: "How contribution is rewarded",
    desc: [
      "Earn tokens by learning, mentoring, and helping others",
      "Spend tokens on tools, services, and visibility",
      "Aligns incentives inside the ecosystem",
    ],
  },
  {
    icon: Activity,
    title: "Founder Health Stack",
    subtitle: "How founders sustain performance",
    desc: [
      "Performance nutrition and health systems",
      "Designed for long-term endurance, not short-term hustle",
      "Because burnout kills more startups than bad ideas",
    ],
  },
]

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            The Modules Behind the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Founder Operating System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Each module solves a specific failure point in the founder journey.
            Together, they form a system — not a feature list.
          </motion.p>
        </div>
      </section>

      {/* ================= MODULE SECTIONS ================= */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {modules.map((module, i) => {
            const Icon = module.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-8 p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                {/* Left */}
                <div>
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
                  <p className="text-slate-400">{module.subtitle}</p>
                </div>

                {/* Right */}
                <div className="md:col-span-2">
                  <ul className="space-y-4 text-slate-300">
                    {module.desc.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-24 px-6 bg-[#0f1526]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Modules Are Powerful.
            <br />
            Systems Are Inevitable.
          </h3>
          <p className="text-lg text-slate-300">
            Cosminnox is designed so each module compounds the others.
            This is how execution scales — without chaos.
          </p>
        </div>
      </section>

    </div>
  )
}