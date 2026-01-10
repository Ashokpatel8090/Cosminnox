"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-animations"

export default function AboutCultureCTA() {
  return (
    <>
      {/* <section className="py-24">
        <ScrollReveal className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Our Culture</h2>
          <p className="text-xl text-slate-600">
            Collaboration, innovation, and ownership define our work culture.
          </p>
        </ScrollReveal>
      </section> */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Join Our Team</h2>
        <Link
          href="/careers"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold"
        >
          View Careers <ArrowRight className="ml-2" />
        </Link>
      </section>
    </>
  )
}
