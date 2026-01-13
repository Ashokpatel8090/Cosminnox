// import AboutHero from "@/components/about/AboutHero"
// import AboutStoryTimeline from "@/components/about/AboutStoryTimeline"
// import AboutValuesTeam from "@/components/about/AboutValuesTeam"
// import AboutCultureCTA from "@/components/about/AboutCultureCTA"

// export default function AboutPage() {
//   return (
//     <div className="pt-20 bg-white">
//       <AboutHero />
//       <AboutStoryTimeline />
//       <AboutValuesTeam />
//       <AboutCultureCTA />
//     </div>
//   )
// }






"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Cpu,
  ShieldCheck,
  Layers,
  Coins,
  Activity,
  Target,
  Compass,
  Zap,
  ArrowRight,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-animations"

/* ===================== ANIMATION VARIANTS ===================== */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

/* ===================== DATA ===================== */

const founderOSLayers = [
  {
    icon: Cpu,
    title: "Execution Intelligence",
    desc: "Decision systems, AI playbooks, and repeatable execution frameworks that replace instinct-driven chaos.",
  },
  {
    icon: ShieldCheck,
    title: "Credential & Trust Layer",
    desc: "Market-recognized certifications and proof systems that convert skills into credibility.",
  },
  {
    icon: Layers,
    title: "Service Infrastructure",
    desc: "On-demand legal, compliance, tech, and growth services without retainers or lock-ins.",
  },
  {
    icon: Coins,
    title: "Tokenized Incentives",
    desc: "Earn, spend, and exchange value through contributions, learning, and ecosystem participation.",
  },
  {
    icon: Activity,
    title: "Founder Health Stack",
    desc: "Performance-first health, nutrition, and endurance systems designed for long-term founders.",
  },
]

const systemFailures = [
  {
    title: "Unstructured Execution",
    desc: "Founders rely on intuition instead of systems, leading to inconsistent decisions and slow momentum.",
  },
  {
    title: "No Credibility Signal",
    desc: "Skills exist, but there is no trusted layer to prove competence to markets or investors.",
  },
  {
    title: "Burnout Before Scale",
    desc: "Mental, physical, and emotional health collapse long before companies stabilize.",
  },
]

/* ===================== PAGE ===================== */

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}
     <section className="relative py-24 pt-35 bg-[#0b0f1a] text-white overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[140px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        We’re Building India’s
        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Founder Operating System
        </span>
      </h1>

      <p className="text-lg text-slate-300 max-w-3xl mx-auto">
        The concept of a <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-xl">Founder Operating System</span>  positions COSMINNOX as a fundamental, structured platform designed to manage and optimize the entire entrepreneurial journey in India. It aims to be the core system—like an operating system on a computer—that runs and regulates the founder's life and business execution.
      </p>
    </motion.div>
  </div>
</section>


      {/* ========================================================= */}
      {/* WHY COSMINNOX EXISTS */}
      {/* ========================================================= */}
      <section className="relative py-12 ">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                COSMINNOX Exists
              </span>
            </h2>
            <p className="text-lg max-w-5xl text-slate-700">
              Founders don’t fail because they lack ambition.
They fail because the ecosystem was never designed for execution, credibility, or endurance.

COSMINNOX exists to fill that gap — by giving founders structured systems, trusted signals, and long-term support to build companies that scale without burning out or breaking down.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {systemFailures.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="
                  relative group
                  p-10 rounded-3xl
                  bg-white/80 backdrop-blur-xl
                  border border-slate-200
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                "
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VISION / MISSION / IMPACT */}
      {/* ========================================================= */}
      <section className="relative pb-16 pt-12 bg-white overflow-hidden">
            {/* ===== Soft background glow ===== */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
            </div>
      
            <div className="max-w-7xl mx-auto px-6">
              {/* ===== Heading ===== */}
              <ScrollReveal className="text-center mb-10">
                <h2 className="text-5xl font-bold text-slate-800">
                  Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                    Vision &amp; Mission
                  </span>
                </h2>
                <p className="mt-3 text-lg text-slate-700 max-w-5xl mx-auto">
                  Building India’s future in AI, robotics, and deep-tech innovation — not through hype, but through systems, execution, and global-grade standards.

We exist to turn technical talent into scalable companies, ideas into durable infrastructure, and founders into long-term builders capable of competing on a global stage.

Our mission is simple: enable Indian founders to build world-class technology with clarity, credibility, and endurance.
                </p>
              </ScrollReveal>
      
              {/* ===== Cards ===== */}
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* ===== Vision ===== */}
                <ScrollReveal>
                  <div
                    className="
                      relative
                      group
                      bg-white/80
                      rounded-3xl
                      p-10
                      shadow-xl
                      border border-slate-100
                      h-full
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                      hover:border-blue-200
                    "
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="
                          w-12 h-12 rounded-xl
                          bg-gradient-to-br from-blue-600 to-cyan-600
                          flex items-center justify-center
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      >
                        <Target className="text-white" size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        Our Vision
                      </h3>
                    </div>
      
                    <p className="text-slate-600 text-lg leading-relaxed">
                      To position India as a leader in AI, robotics, and deep-tech
                      innovation, enabling startups to build scalable and
                      transformative technologies.
                    </p>
      
                    {/* Hover glow */}
                    <div
                      className="
                        absolute inset-0
                        rounded-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        pointer-events-none
                        bg-gradient-to-br
                        from-blue-500/10
                        via-transparent
                        to-cyan-500/10
                      "
                    />
                  </div>
                </ScrollReveal>
      
                {/* ===== Mission ===== */}
                <ScrollReveal>
                  <div
                    className="
                      relative
                      group
                      bg-white
                      rounded-3xl
                      p-10
                      shadow-xl
                      border border-slate-100
                      h-full
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                      hover:border-emerald-200
                    "
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="
                          w-12 h-12 rounded-xl
                          bg-gradient-to-br from-emerald-600 to-green-600
                          flex items-center justify-center
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      >
                        <Compass className="text-white" size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        Our Mission
                      </h3>
                    </div>
      
                    <p className="text-slate-600 text-lg leading-relaxed">
                      To build a globally competitive deep-tech startup ecosystem by
                      providing cutting-edge infrastructure, expert mentorship, and
                      access to funding opportunities.
                    </p>
      
                    {/* Hover glow */}
                    <div
                      className="
                        absolute inset-0
                        rounded-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        pointer-events-none
                        bg-gradient-to-br
                        from-emerald-500/10
                        via-transparent
                        to-green-500/10
                      "
                    />
                  </div>
                </ScrollReveal>
      
                {/* ===== Impact ===== */}
                <ScrollReveal>
                  <div
                    className="
                      relative
                      group
                      bg-white
                      rounded-3xl
                      p-4
                      shadow-xl
                      border border-slate-100
                      h-full
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                      hover:border-purple-200
                    "
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className="
                          w-12 h-12 rounded-xl
                          bg-gradient-to-br from-purple-600 to-pink-600
                          flex items-center justify-center
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      >
                        <Zap className="text-white" size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        Our Impact
                      </h3>
                    </div>
      
                    <p className="text-slate-600 text-lg leading-relaxed">
                      We aim to incubate India’s next wave of deep-tech unicorns,
                      creating AI-driven solutions that power industries, transform
                      economies, and position India as a leader in global innovation.
                    </p>
      
                    <p className="mt-3 font-semibold text-teal-600">
                      Join us in shaping the future of AI and deep-tech entrepreneurship.
                    </p>
      
                    {/* Hover glow */}
                    <div
                      className="
                        absolute inset-0
                        rounded-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        pointer-events-none
                        bg-gradient-to-br
                        from-purple-500/10
                        via-transparent
                        to-pink-500/10
                      "
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

      {/* ========================================================= */}
      {/* FOUNDER OS LAYERS */}
      {/* ========================================================= */}
      <section className="relative pb-20 pt-8 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
            The COSMINNOX{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
               Operating Layers
            </span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {founderOSLayers.map((layer, i) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="
                    relative group
                    p-10 rounded-3xl
                    bg-white/80 backdrop-blur-xl
                    border border-slate-200
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                    transition-all duration-300
                  "
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {layer.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {layer.desc}
                  </p>

                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}
      <section className="relative py-24 bg-[#0b0f1a] text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 ">
            Ready to Build with Systems?
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            COSMINNOX is not another accelerator. It’s the infrastructure founders were always missing. We replace chaos with clarity, intuition with execution frameworks, and burnout with sustainable momentum — giving founders the systems needed to scale confidently and endure long-term. Build once. Execute repeatedly. Scale without breaking.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Join COSMINNOX
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  )
}
