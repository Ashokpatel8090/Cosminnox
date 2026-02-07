"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function IdcSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">

      {/* 🍷 MAROON BACKGROUND — RIGHT ➝ LEFT */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-[#3a0f1c] via-[#5b1f3a] to-[#2b0f24]"
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
                          src="/idc1.png"
                          alt="IDC India Platform"
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
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white">
                <Image
                  src="/l3.png"
                  alt="IDC India Logo"
                  width={32}
                  height={32}
                />
              </span>

              <span>IDC India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="text-lg leading-relaxed max-w-md opacity-90"
            >
              An enterprise-grade digital platform built for
              scalability, governance, and long-term operations —
              designed to support complex organizational workflows
              with confidence.
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.45, duration: 0.6, ease: "easeOut" }}
  className="mt-8"
>
  <a
    href="https://idcindia.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-7 py-3
      rounded-xl
      bg-white text-[#3a0f1c]
      font-semibold
      shadow-lg
      hover:bg-gray-100 hover:scale-105
      transition
    "
  >
    Visit Website
  </a>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
