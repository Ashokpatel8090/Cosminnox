"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-6 mb-6 leading-tight">
          Building Meaningful <br className="hidden sm:block" /> <span className="text-6xl">Digital Experiences</span> 
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
          Since 2012, we’ve partnered with forward-thinking businesses to design, build, and scale
          digital products that are reliable, human-centric, and future-ready.
        </p>

        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10">
          Our work blends strategy, design, and engineering—focused not just on what’s possible today,
          but what will matter tomorrow.
        </p>

        {/* Optional CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition"
          >
            Work With Us
          </a>

          <a
            href="/careers"
            className="px-8 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
          >
            Join Our Team
          </a>
        </div>
      </motion.div>
    </section>
  )
}
