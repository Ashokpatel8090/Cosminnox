"use client"

import { motion } from "framer-motion"

export default function ServicesHero() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-100 overflow-hidden">
      
      {/* BACKGROUND BLUR EFFECT (SAME AS 'WHY COSMINNOX' SECTION) */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px]
            bg-blue-300/20
            rounded-full
            blur-[100px]
          "
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-2"
        >
          
          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-snug">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Fueling Innovation,
            </span>
            <br className="hidden sm:block" />
            Scaling Startups
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            COSMINNOX delivers a structured incubation and acceleration ecosystem
            empowering deep-tech startups to overcome funding gaps, accelerate
            commercialization, and access world-class infrastructure.
          </p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex justify-center"
          >
            <button
              className="
                px-8 py-3
                text-base md:text-lg font-semibold
                rounded-full
                text-white bg-indigo-600
                transition-all duration-300
                hover:bg-indigo-700 hover:scale-[1.04]
                ring-1 ring-indigo-600/30
                hover:ring-indigo-500/60
                shadow-[0_10px_30px_-10px_rgba(79,70,229,0.45)]
              "
            >
              Explore Programs
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
