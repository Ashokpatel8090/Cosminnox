"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Network,
  Globe,
} from "lucide-react"

/* ===================== DATA ===================== */
const programs = [
  {
    icon: Brain,
    title: "One-on-One Mentorship",
    description:
      "Personal mentorship sessions with global AI pioneers, deep-tech founders, and experienced business strategists.",
  },
  {
    icon: Network,
    title: "Industry Meetups & Hackathons",
    description:
      "Industry meetups and innovation-driven hackathons designed to encourage collaboration and real-world problem solving.",
  },
  {
    icon: Globe,
    title: "International Startup Exchange",
    description:
      "Global exchange programs enabling startups to connect with international markets, mentors, and strategic partners.",
  },
]

/* ===================== COMPONENT ===================== */
export default function ServicesProcess() {
  return (
    <section className="py-12 bg-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* ===================== BACKGROUND GLOW ===================== */}
        <div className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[600px] h-[600px] 
          bg-blue-300/20 
          rounded-full 
          blur-[100px]
        " />

        {/* ===================== HEADER ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-snug">
            Global{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Mentorship & Networking
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-700">
            Startups gain access to a curated network of AI researchers,
            corporate leaders, and deep-tech investors to accelerate growth
            and global expansion.
          </p>
        </motion.div>

        {/* ===================== PROGRAM CARDS ===================== */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-3xl p-10
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="
                  w-16 h-16 mb-6 rounded-2xl
                  bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500
                  flex items-center justify-center
                  text-white shadow-lg
                ">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
