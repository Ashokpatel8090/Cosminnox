"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesHero() {
  const handleScroll = () => {
    const target = document.getElementById("services-scroll-target")
    if (!target) return

    const elementTop = target.getBoundingClientRect().top + window.scrollY
    const offset = window.innerHeight * 0.1

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative pt-[80px] md:pt-[96px] pb-24 min-h-[80vh] flex items-center overflow-hidden mt-16">

      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 -z-10 pt-20">
        <Image
          src="/about/newBG.png"
          alt="COSMINNOX background"
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* ================= ACCENT GLOW ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px]
            bg-indigo-400/30
            rounded-full
            blur-[140px]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-2"
        >

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Fueling Innovation,
            </span>
            <br className="hidden sm:block" />
            Scaling Startups
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-slate-50 max-w-5xl mx-auto leading-relaxed font-medium">
            COSMINNOX delivers a structured incubation and acceleration ecosystem
            empowering deep-tech startups to overcome funding gaps, accelerate
            commercialization, and access world-class infrastructure.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleScroll}
              className="
                px-8 py-4
                text-base md:text-lg font-bold
                rounded-full
                text-white bg-indigo-600
                transition-all duration-300
                hover:bg-indigo-700 hover:scale-[1.05]
                shadow-[0_20px_40px_-15px_rgba(79,70,229,0.5)]
              "
            >
              Explore Services
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
