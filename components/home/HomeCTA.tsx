"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomeCTA() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto p-16 rounded-3xl text-center border border-blue-300/30 shadow-xl"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Ready to Transform?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Let’s build something extraordinary together.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Your Journey <ArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </section>
  )
}
