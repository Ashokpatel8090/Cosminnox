"use client"

import { motion } from "framer-motion"

export default function BuildEcosystemSection() {
  return (
    <section className="relative py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our Product Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build focused digital platforms across healthcare,
            lifestyle, and enterprise — designed to scale, adapt,
            and solve real-world problems.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Medicaps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              MediCAPS
            </h3>
            <p className="text-gray-600">
              A modern healthcare platform for managing patients,
              doctors, appointments, and digital consultations
              with privacy and reliability.
            </p>
          </motion.div>

          {/* Grasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              GRASA
            </h3>
            <p className="text-gray-600">
              A food and lifestyle platform connecting recipes,
              nutrition, and daily habits to help users make
              healthier choices effortlessly.
            </p>
          </motion.div>

          {/* IDC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              IDC India
            </h3>
            <p className="text-gray-600">
              An enterprise-grade digital platform built for
              governance, workflows, and long-term organizational
              operations.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
