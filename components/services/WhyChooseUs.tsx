"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"

import {
  Cpu,
  Database,
  Users,
  Shield,
  Lock,
  Zap,
  TrendingUp,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react"

/* ===================== INCUBATION PROGRAM ===================== */
const incubationPrograms = [
  {
    icon: Cpu,
    title: "Startup Incubation Program",
    description:
      "For early-stage AI and deep-tech startups looking to validate ideas and build their first product.",
  },
  {
    icon: Database,
    title: "State-of-the-art Infrastructure",
    description:
      "AI research labs, high-performance GPU clusters, and rapid prototyping centers.",
  },
  {
    icon: Users,
    title: "Mentorship & Advisory",
    description:
      "Guidance from global AI leaders, business strategists, and technical experts.",
  },
  {
    icon: Shield,
    title: "Patent & IP Assistance",
    description:
      "Support for patent filing, licensing, and protecting intellectual property.",
  },
  {
    icon: Building2,
    title: "Industry–Academia Collaboration",
    description:
      "Access to IITs, IISc, and global research partnerships.",
  },
  {
    icon: Lock,
    title: "Legal & Compliance Support",
    description:
      "Help with regulatory approvals, company setup, and legal structuring.",
  },
]

/* ===================== FUNDING BENEFITS ===================== */
const fundingSupport = [
  {
    icon: Landmark,
    title: "Government Grants",
    description:
      "Assistance for Startup India, DST, MSME, and other government funding programs.",
  },
  {
    icon: TrendingUp,
    title: "Venture Capital & Angel Funding",
    description:
      "Investor matchmaking, pitch deck creation, and demo-day access.",
  },
  {
    icon: Briefcase,
    title: "Corporate Innovation Funding",
    description:
      "Partnerships with enterprises seeking AI-driven and deep-tech solutions.",
  },
]

/* ===================== COMPONENT ===================== */
export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===================== HEADER ===================== */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Startup Incubation & Accelerator Program
          </h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            COSMINNOX empowers AI and deep-tech startups with infrastructure,
            mentorship, funding access, and industry collaboration — all under
            one ecosystem.
          </p>
        </ScrollReveal>

        {/* ===================== INCUBATION GRID ===================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {incubationPrograms.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white/5 backdrop-blur
                  border border-white/10
                  rounded-3xl p-8
                  hover:border-cyan-500/40
                  transition-all
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* ===================== FUNDING SECTION ===================== */}
        <ScrollReveal className="text-center mb-14">
          <h3 className="text-4xl font-bold">Funding & Investment Support</h3>
          <p className="text-slate-400 mt-4">
            We help startups secure funding through multiple strategic channels.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {fundingSupport.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
                  text-center
                  bg-gradient-to-br from-cyan-500/10 to-blue-500/5
                  border border-white/10
                  rounded-3xl p-10
                "
              >
                <Icon size={34} className="mx-auto text-cyan-400 mb-5" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
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
