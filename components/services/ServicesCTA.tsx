"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Ideas?</h2>
      <p className="text-xl mb-10">
        Let’s build something exceptional together.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
      >
        Schedule Consultation <ArrowRight />
      </Link>
    </section>
  )
}
