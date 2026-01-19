"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function PlacementsStats() {
  return (
    <>
      {/* ================= RECRUITERS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h3 className="text-3xl font-semibold text-slate-900 mb-6">
          Our Recruiters
        </h3>

        <p className="text-slate-600 max-w-3xl mx-auto mb-12">
          Students are placed with leading IT and technology-driven organizations
          across software development, consulting, cloud, and digital services.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { name: "TCS", logo: "/placements/tcs.png" },
            { name: "Infosys", logo: "/placements/infosys.png" },
            { name: "Wipro", logo: "/placements/wipro.png" },
            { name: "Accenture", logo: "/placements/accenture.png" },
            { name: "Cognizant", logo: "/placements/cognizant.png" },
            { name: "HCL", logo: "/placements/hcl.png" },
            { name: "Capgemini", logo: "/placements/capgemini.png" },
            { name: "Tech Mahindra", logo: "/placements/tech.png" },
          ].map((company) => (
            <motion.div
              key={company.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white h-32 shadow flex items-center justify-center px-6"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= STUDENT STATS ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg p-14 grid md:grid-cols-4 gap-10 text-center"
      >
        {[
          { value: "500+", label: "Students Placed", color: "text-blue-600" },
          { value: "100+", label: "Recruiting Companies", color: "text-green-600" },
          { value: "200+", label: "Placement Drives", color: "text-purple-600" },
          { value: "50+", label: "Industrial Visits", color: "text-orange-600" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <h4 className={`text-4xl font-bold ${stat.color}`}>
              {stat.value}
            </h4>
            <p className="text-slate-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
