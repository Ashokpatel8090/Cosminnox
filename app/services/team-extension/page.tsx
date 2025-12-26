"use client"

import { motion } from "framer-motion"

export default function TeamExtensionPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Team Extension</h1>
        <p className="text-lg text-slate-600">
          Extend your in-house team with vetted engineers, designers, and cloud
          experts on-demand.
        </p>
      </motion.div>
    </section>
  )
}
