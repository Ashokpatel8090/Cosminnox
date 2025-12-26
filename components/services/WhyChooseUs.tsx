"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"

export default function WhyChooseUs({ benefits, features }: any) {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold">Why Choose COSMINNOX?</h2>
          <p className="text-slate-300 mt-4">
            Technology, strategy, and execution — done right.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((b: any, i: number) => {
            const Icon = b.icon
            return (
              <motion.div key={i} className="glass p-8 rounded-2xl">
                <Icon size={32} className="text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold">{b.title}</h3>
                <p className="text-slate-300 mt-2">{b.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f: any, i: number) => {
            const Icon = f.icon
            return (
              <div key={i} className="text-center">
                <Icon size={28} className="mx-auto text-cyan-400 mb-3" />
                <h4 className="font-bold">{f.title}</h4>
                <p className="text-slate-400 text-sm mt-2">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
