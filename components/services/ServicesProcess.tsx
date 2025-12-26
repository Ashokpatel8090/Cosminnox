"use client"

import { ScrollReveal } from "@/components/scroll-animations"

export default function ServicesProcess() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Understand goals & needs" },
    { step: "02", title: "Strategy", desc: "Plan architecture & roadmap" },
    { step: "03", title: "Development", desc: "Build & optimize" },
    { step: "04", title: "Launch", desc: "Deploy & support" },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold">Our Proven Process</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="glass p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600">{s.step}</div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
