"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Code2,
  Cloud,
  Zap,
  Users,
  Shield,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern & scalable web apps",
    href: "/services/web-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure cloud infrastructure",
    href: "/services/cloud-solutions",
  },
  {
    icon: Zap,
    title: "Digital Products",
    desc: "From idea to launch",
    href: "/services/digital-products",
  },
  {
    icon: Users,
    title: "Team Extension",
    desc: "Dedicated tech experts",
    href: "/services/team-extension",
  },
]

const stats = [
  { value: "150+", label: "Projects", icon: Sparkles },
  { value: "50+", label: "Experts", icon: Users },
  { value: "12+", label: "Years", icon: Shield },
  { value: "99.9%", label: "Satisfaction", icon: Zap },
]

export default function HomeHighlights() {
  return (
    <>
      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-2xl bg-white border border-blue-200/30 shadow-md flex flex-col"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>

                  <p className="text-slate-600 mb-6 flex-grow">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <div className="text-5xl font-bold">{s.value}</div>
                <div className="text-blue-100">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
