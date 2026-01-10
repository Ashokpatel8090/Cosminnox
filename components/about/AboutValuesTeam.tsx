"use client"

import { Target, Compass, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-animations"

export default function VisionMissionImpact() {
  return (
    <section className="relative py-4 bg-white overflow-hidden">
      {/* ===== Soft background glow ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-5xl font-bold text-slate-800">
            Our <span className=" bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-6 mb-6 leading-tight">Vision &amp; Mission</span>
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-3xl mx-auto">
            Building India’s future in AI, robotics, and deep-tech innovation
          </p>
        </ScrollReveal>

        {/* ===== Cards ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* ===== Vision ===== */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
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
            </div>
          </ScrollReveal>

          {/* ===== Mission ===== */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
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
            </div>
          </ScrollReveal>

          {/* ===== Impact ===== */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
