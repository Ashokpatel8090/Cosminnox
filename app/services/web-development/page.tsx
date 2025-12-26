"use client"

import { motion } from "framer-motion"

export default function WebDevelopmentPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6">Web Development</h1>
        <p className="text-lg text-slate-600">
          We build fast, scalable, and secure web applications using modern
          frameworks like Next.js, React, and cloud-native architectures.
        </p>
      </motion.div>
    </section>
  )
}
