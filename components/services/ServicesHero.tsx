"use client"

import { motion } from "framer-motion"

export default function ServicesHero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-500 font-semibold">
          Comprehensive Solutions
        </span>

        <h1 className="mt-6 text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Elevate Your Digital Presence
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          From web and mobile applications to cloud infrastructure and digital products.
        </p>
      </motion.div>
    </section>
  )
}
