"use client"

import { motion } from "framer-motion"
import { Check, Shield, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const router = useRouter()
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
            Simple Pricing.
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Serious Outcomes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Cosminnox is not priced to extract value.
            It is priced to scale discipline, consistency, and execution.
          </motion.p>
        </div>
      </section>

      {/* ================= PRICING CARD ================= */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Founder Subscription</h2>
            <p className="text-slate-400 mb-8">
              One price. Full access. No tiers.
            </p>

            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="text-5xl font-extrabold">$1</span>
              <span className="text-slate-400 mb-1">/ day</span>
            </div>

            <p className="text-slate-300 mb-10">
              Billed quarterly or annually.
              <br />
              Cancel anytime.
            </p>

            <div className="max-w-md mx-auto space-y-4 text-left">
              {[
                "Full access to all five core modules",
                "Execution frameworks and AI-guided mentorship",
                "Recognized certifications and trust signals",
                "Marketplace access for services",
                "Tokenized incentives (IDCoins)",
                "Founder health and performance systems",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-cyan-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <button
              className="mt-12 inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-xl
              bg-gradient-to-r from-blue-600 to-cyan-600
              font-semibold text-white
              hover:scale-105 transition"
              onClick={()=> router.push("/join")}
            >
              Join for $1/day
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY THIS PRICE ================= */}
      <section className="py-24 px-6 bg-[#0f1526]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Zap,
              title: "Designed for Daily Use",
              desc: "Pricing is low enough to encourage daily engagement, not one-time consumption.",
            },
            {
              icon: Shield,
              title: "Aligned Incentives",
              desc: "We only win when founders stay, grow, and compound value inside the system.",
            },
            {
              icon: Check,
              title: "No Upsell Traps",
              desc: "No hidden fees. No forced upgrades. No artificial limitations.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= TRUST STATEMENT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            This Is Not a Discount.
            <br />
            This Is a Design Choice.
          </h3>
          <p className="text-lg text-slate-300">
            High prices filter by money.
            Low prices filter by discipline.
            <br />
            Cosminnox is built for founders who show up every day.
          </p>
        </div>
      </section>

    </div>
  )
}