"use client"

import NetworkGraphic from "@/components/home/NetworkGraphic"

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#0b0f1a] overflow-hidden pointer-events-none">
      {/* Network animation */}
      <NetworkGraphic />

      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
