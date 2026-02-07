"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si"

export default function IDCWebCard() {
  return (
    <div className="relative group max-w-3xl">

      {/* 🔴 GLOW (ENTERPRISE RED) */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 80px -15px rgba(244,63,94,0.55)",
        }}
      />

      {/* ================= CARD ================= */}
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          bg-gradient-to-b from-[#1a0f14] to-[#070b18]
          border border-white/10
          shadow-2xl
          transition-all duration-300
          group-hover:-translate-y-1
        "
      >

        {/* TOP IMAGE (WEBSITE PREVIEW) */}
        <div className="relative h-56 w-full">
          <Image
            src="/w3.png" // 🔁 website screenshot
            alt="IDC India Website Preview"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* LOGO */}
        <div className="absolute top-44 left-8 z-20">
          <div
            className="
              w-20 h-20 rounded-full
              bg-white/95
              shadow-xl
              flex items-center justify-center
            "
          >
            <Image
              src="/l3.png" // 🔁 IDC logo
              alt="IDC India Logo"
              width={46}
              height={46}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-16 px-8 pb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            IDC India Website
          </h3>

          <p className="text-white/65 leading-relaxed">
            Enterprise-grade digital platform built for governance,
            scalability, and institutional use cases.
          </p>
           <GlassMeta
            items={[
              "Website",
              "AI",
              "",
              "A New Standard in Gut Health",
            ]}
          />
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
            <span className="text-5xl font-bold text-gray-500">03</span>
          </div>

          {/* ACTION */}
          <div className="flex justify-center">
            <ActionIcon
              href="https://idcindia.net/"
              label="Visit Website"
              icon={<ExternalLink size={28} />}
            />
          </div>

          {/* TECH STACK */}
          <div className="flex justify-center gap-6 text-white/90">
            <TechIcon icon={<SiReact size={22} />} label="React / Next.js" />
            <TechIcon icon={<SiNodedotjs size={22} />} label="Node.js" />
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


function GlassMeta({ items }: { items: string[] }) {
  return (
    <div className="mt-19 self-start">
      <div
        className="
          inline-flex items-center gap-1
          px-1 py-1.5
          text-sm font-medium
          text-white/80
          bg-white/10
          backdrop-blur-md
          border border-white/15
          rounded-md
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
        "
      >
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span>{item}</span>
            {i !== items.length - 1 && (
              <span className="opacity-40">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}