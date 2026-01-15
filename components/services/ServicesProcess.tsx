"use client"

import { motion } from "framer-motion"
import { Brain, Network, Globe } from "lucide-react"

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
    <section className="relative py-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      
      {/* ===================== BACKGROUND GLOW ===================== */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[700px]
          bg-cyan-300/30
          rounded-full
          blur-[120px]
        " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===================== HEADER ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 leading-snug">
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
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  relative
                  group
                  p-10
                  rounded-3xl
                  bg-white/80
                  backdrop-blur-xl
                  border border-slate-200
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                  hover:border-cyan-300
                "
              >
                {/* ================= ICON ================= */}
                <div className="
                  w-16 h-16 mb-6 rounded-2xl
                  bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
                  flex items-center justify-center
                  text-white
                  shadow-lg
                  transition-transform duration-300
                  group-hover:scale-110
                ">
                  <Icon size={30} />
                </div>

                {/* ================= TITLE ================= */}
                <h3 className="
                  text-2xl font-bold text-slate-900 mb-4
                  group-hover:text-cyan-700
                  transition-colors
                ">
                  {item.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                <p className="text-slate-700 leading-relaxed">
                  {item.description}
                </p>

                {/* ================= HOVER GLOW ================= */}
                <div className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                  bg-gradient-to-br
                  from-cyan-500/10 via-transparent to-purple-500/10
                " />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
