"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Join the{" "}
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
            Cosminnox is built for founders who want systems,
            not shortcuts. If you’re serious about building,
            this is where you start.
          </motion.p>
        </div>
      </section>

      {/* ================= JOIN CARD ================= */}
      <section className="pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-2 text-center">
              Founder Access
            </h2>
            <p className="text-slate-400 mb-8 text-center">
              $1 / day · Full platform access
            </p>

            {/* FORM */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#0f1526] border border-white/10
                  text-white placeholder-slate-500
                  focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#0f1526] border border-white/10
                  text-white placeholder-slate-500
                  focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Role
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#0f1526] border border-white/10
                  text-white
                  focus:outline-none focus:border-cyan-400"
                >
                  <option>Student Founder</option>
                  <option>Early-Stage Founder</option>
                  <option>Solopreneur / Freelancer</option>
                  <option>SME Owner</option>
                  <option>Professional Transitioning to Startup</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-xl
                bg-gradient-to-r from-blue-600 to-cyan-600
                font-semibold text-white
                hover:scale-105 transition"
              >
                Continue to Payment
                <ArrowRight size={18} />
              </button>
            </form>

            {/* TRUST NOTES */}
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="text-cyan-400 mt-1" />
                <span>No hidden fees. Cancel anytime.</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap size={16} className="text-cyan-400 mt-1" />
                <span>Immediate access after signup.</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-cyan-400 mt-1" />
                <span>Designed for daily use, not one-time consumption.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL STATEMENT ================= */}
      <section className="py-20 px-6 bg-[#0f1526]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            This Is Not for Everyone.
          </h3>
          <p className="text-lg text-slate-300">
            If you’re looking for shortcuts, motivation,
            or guarantees — this isn’t it.
            <br />
            If you’re ready to operate with discipline and systems,
            welcome to Cosminnox.
          </p>
        </div>
      </section>

    </div>
  )
}