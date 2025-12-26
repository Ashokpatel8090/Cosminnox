"use client"

import { motion } from "framer-motion"
import { Smartphone, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AppDevelopmentPage() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
              <Smartphone size={28} />
            </div>
            <h1 className="text-5xl font-bold">App Development</h1>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl">
            We design and build high-performance mobile applications for iOS,
            Android, and cross-platform environments with a strong focus on UX,
            scalability, and security.
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {[
            "Native iOS & Android Development",
            "React Native & Flutter Apps",
            "UI/UX-Driven Design",
            "API & Backend Integration",
            "App Store Deployment",
            "Performance Optimization",
          ].map((feature, i) => (
            <div key={i} className="flex gap-3 text-slate-700">
              <CheckCircle2 className="text-blue-600" size={20} />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-3xl p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Ready to build your mobile app?
            </h2>
            <p className="text-slate-600">
              Let’s turn your idea into a scalable, production-ready app.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Talk to Experts
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
