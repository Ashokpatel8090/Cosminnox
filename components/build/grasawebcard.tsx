"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si"

export default function GrasaWebCard() {
  return (
    <div className="relative group max-w-3xl">

      {/* 🟢 GLOW */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 80px -15px rgba(34,197,94,0.55)",
        }}
      />

      {/* ================= CARD ================= */}
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          bg-gradient-to-b from-[#0f1b12] to-[#070b18]
          border border-white/10
          shadow-2xl
          transition-all duration-300
          group-hover:-translate-y-1
        "
      >

        {/* TOP IMAGE (WEBSITE PREVIEW) */}
        <div className="relative h-56 w-full">
          <Image
            src="/w2.png" // 🔁 website screenshot
            alt="GRASA Website Preview"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* LOGO */}
        <div className="absolute top-44 left-8 z-20">
          <div
            className="
              w-20 h-20 rounded-full
              bg-white/90
              shadow-xl
              flex items-center justify-center
            "
          >
            <Image
              src="/l2.png" // 🔁 logo
              alt="GRASA Logo"
              width={46}
              height={46}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-16 px-8 pb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            GRASA Website
          </h3>

          <p className="text-white/65 leading-relaxed">
            Brand and product website for the GRASA ecosystem,
            focused on lifestyle, nutrition, and healthy living.
          </p>
        </div>

        {/* ================= HOVER GLASS ================= */}
        <div
          className="
            absolute inset-0 z-30
            opacity-0 group-hover:opacity-100
            transition duration-300
            backdrop-blur-xl
            bg-white/10
            flex flex-col justify-between
            p-6
          "
        >

          {/* TOP */}
           <div className="flex justify-between items-start">
            <span className="text-5xl font-bold text-gray-500">04</span>
          </div>

          {/* ACTION */}
          <div className="flex justify-center">
            <ActionIcon
              href="https://www.grasafoods.com/"
              label="Visit Website"
              icon={<ExternalLink size={28} />}
            />
          </div>

          {/* TECH STACK */}
          <div className="flex justify-center gap-6 text-white/90">
            <TechIcon icon={<SiReact size={22} />} label="React / Next.js" />
            <TechIcon icon={<SiNodedotjs size={22} />} label="Node.js" />
            <TechIcon icon={<SiFirebase size={22} />} label="Firebase" />
            <TechIcon icon={<SiPostgresql size={22} />} label="PostgreSQL" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================= SUB COMPONENTS ================= */

function TechIcon({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-xs opacity-80 hover:opacity-100 transition">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function ActionIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group/action flex flex-col items-center text-white"
    >
      <div
        className="
          w-16 h-16 rounded-full
          bg-white/10
          backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          transition
          group-hover/action:bg-white/20
          group-hover/action:scale-105
        "
      >
        {icon}
      </div>
      <span className="mt-2 text-sm opacity-0 group-hover/action:opacity-100 transition">
        {label}
      </span>
    </a>
  )
}
