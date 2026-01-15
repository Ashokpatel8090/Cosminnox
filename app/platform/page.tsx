"use client"

import { motion } from "framer-motion"
import { Cpu, Layers, ShieldCheck, Coins, Activity } from "lucide-react"

const layers = [
  {
    icon: Cpu,
    title: "Execution Intelligence",
    desc: "Decision frameworks, playbooks, and AI-guided actions that help founders make better decisions daily — not eventually.",
  },
  {
    icon: ShieldCheck,
    title: "Credential & Trust Layer",
    desc: "Recognized certifications and validations that convert skills into market credibility and signal seriousness.",
  },
  {
    icon: Layers,
    title: "Service Infrastructure",
    desc: "On-demand legal, compliance, tech, and growth services — accessed exactly when needed, without retainers.",
  },
  {
    icon: Coins,
    title: "Tokenized Incentives (IDCoins)",
    desc: "An internal incentive system that rewards learning, mentoring, and contribution — spendable inside the ecosystem.",
  },
  {
    icon: Activity,
    title: "Founder Health Stack",
    desc: "Performance nutrition and health systems designed to support long-term founder endurance and clarity.",
  },
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">

      {/* ================= HERO / DOCTRINE ================= */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            The Founder{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Operating System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Cosminnox is not a course, a community, or a consulting firm.
            It is a subscription-based operating system designed to help founders
            execute better decisions, consistently, at scale.
          </motion.p>
        </div>
      </section>

      {/* ================= WHY AN OPERATING SYSTEM ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Fragmented Tools",
              desc: "Founders juggle content, advisors, tools, and services with no unifying system.",
            },
            {
              title: "Unstructured Decisions",
              desc: "Most decisions are made on instinct, not repeatable frameworks.",
            },
            {
              title: "Burnout Before Scale",
              desc: "Health, focus, and momentum collapse long before the business stabilizes.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FIVE CORE LAYERS ================= */}
      <section className="py-24 px-6 bg-[#0f1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            The Five Core Layers of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Cosminnox
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {layers.map((layer, i) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                  <p className="text-slate-300">{layer.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= CLOSING STATEMENT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            This Is Not Education.
            <br />
            This Is Infrastructure.
          </h3>
          <p className="text-lg text-slate-300">
            Cosminnox exists to give founders a system — not motivation,
            not shortcuts, not hype. Just execution, compounded daily.
          </p>
        </div>
      </section>

    </div>
  )
}