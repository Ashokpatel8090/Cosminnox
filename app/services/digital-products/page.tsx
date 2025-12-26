"use client"

import { motion } from "framer-motion"

export default function DigitalProductsPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-slate-50">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Digital Products</h1>
        <p className="text-lg text-slate-600">
          From MVP to full-scale product launch — UX, engineering, and growth
          support under one roof.
        </p>
      </motion.div>
    </section>
  )
}
