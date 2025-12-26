"use client"

import { motion } from "framer-motion"

export default function CloudSolutionsPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Cloud Solutions</h1>
        <p className="text-lg text-slate-600">
          Secure, scalable cloud infrastructure on AWS, Azure, and GCP with
          DevOps automation and monitoring.
        </p>
      </motion.div>
    </section>
  )
}
