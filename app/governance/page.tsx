"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Scale, Coins, Database } from "lucide-react"

const principles = [
  {
    icon: ShieldCheck,
    title: "Founder-First Governance",
    desc: "Cosminnox is designed to protect founder interests. No dark patterns, no exploitative pricing, and no data misuse.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Control",
    desc: "Founder data is treated as sensitive infrastructure. We do not sell personal data or behavioral insights to third parties.",
  },
  {
    icon: Database,
    title: "Responsible Data Usage",
    desc: "Platform data is used only to improve systems, personalize guidance, and identify high-performing founders for internal opportunities.",
  },
  {
    icon: Coins,
    title: "Transparent Token Logic",
    desc: "IDCoins are a utility and incentive mechanism inside Cosminnox — not a speculative financial instrument.",
  },
  {
    icon: Scale,
    title: "Compliance & Accountability",
    desc: "Cosminnox is built to align with applicable regulations, ethical standards, and long-term institutional accountability.",
  },
]

export default function GovernancePage() {
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
            Governance by{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Design
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Cosminnox is built as long-term infrastructure.
            Governance is not an afterthought — it is part of the system architecture.
          </motion.p>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {principles.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= TOKEN CLARITY ================= */}
      <section className="py-24 px-6 bg-[#0f1526]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About IDCoins
          </h2>
          <p className="text-lg text-slate-300 mb-4">
            IDCoins are an internal utility mechanism used to reward participation,
            learning, mentoring, and contribution inside the Cosminnox ecosystem.
          </p>
          <p className="text-slate-400">
            They are not a cryptocurrency, not an investment product,
            and not transferable outside the platform.
          </p>
        </div>
      </section>

      {/* ================= DATA & TRUST STATEMENT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Scale. Governed for Trust.
          </h3>
          <p className="text-lg text-slate-300">
            Platforms fail when governance lags growth.
            <br />
            Cosminnox is designed to scale to millions of founders
            without compromising ethics, privacy, or accountability.
          </p>
        </div>
      </section>

    </div>
  )
}