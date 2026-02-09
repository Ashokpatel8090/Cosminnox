// 



"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function GrasaSection() {
  return (
<section className="relative w-full h-[60vh] overflow-hidden">


      
      {/* 🟢 BACKGROUND — RIGHT ➝ LEFT */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-green-600 via-lime-500 to-yellow-400"
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 🖥️ IMAGE — LEFT ➝ RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Image
                          src="/grasa1.png"
                          alt="Medicaps Platform"
                          width={1020}          // ⬅️ bigger
                          height={1080}
                           className="w-[120%] max-w-none h-auto"
                          priority
                        />
          </motion.div>

          {/* ✍️ TEXT */}
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex items-center gap-4 text-5xl font-bold mb-6"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-green-600 font-bold">
              <Image
                                src="/l2.png"
                                alt="Medicaps Logo"
                                width={1202}
                                height={32}
                              />
              </span>

              <span>GRASA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="text-lg leading-relaxed max-w-md opacity-95"
            >
              A smart food-tech platform that connects recipes,
              nutrition, and lifestyle — designed for modern
              users who care about what they consume.
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.45, duration: 0.6, ease: "easeOut" }}
  className="mt-8 flex flex-wrap gap-4"
>
  {/* VISIT WEBSITE */}
  <a
    href="https://www.grasafoods.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-xl
      bg-white text-green-700
      font-semibold
      shadow-lg
      hover:bg-green-50 hover:scale-105
      transition
    "
  >
    Visit Website
  </a>

  {/* DOWNLOAD APP */}
  <a
    href="https://apps.apple.com/in/app/grasa/id6754323632"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-xl
      bg-black/90 text-white
      font-semibold
      shadow-lg
      hover:bg-black hover:scale-105
      transition
    "
  >
    Download App
  </a>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
