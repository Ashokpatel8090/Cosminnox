"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Service = {
  icon: any
  title: string
  slug: string
  description: string
  features: string[]
}

export default function ServicesGrid({ services }: { services: Service[] }) {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".service-card")
    if (!cards) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      }
    )
  }, [])

  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div
        ref={cardsRef}
        className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-6"
      >
        {services.map((service, i) => {
          const Icon = service.icon

          return (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                service-card
                relative
                rounded-3xl
                p-10
                flex
                flex-col
                bg-white/80
                backdrop-blur-xl
                border
                border-slate-200/60
                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
                hover:shadow-[0_30px_70px_-20px_rgba(59,130,246,0.35)]
                transition-all
                overflow-hidden
                group
              "
            >
              {/* Decorative Gradient Glow */}
              <div className="
                absolute inset-0 
                bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500
              " />

              {/* Icon */}
              <div className="
                relative
                w-16 h-16
                rounded-2xl
                bg-gradient-to-r from-blue-600 to-purple-600
                flex items-center justify-center
                text-white
                mb-6
                shadow-lg
                group-hover:scale-110
                transition-transform
              ">
                <Icon size={30} />
              </div>

              {/* Title */}
              <h3 className="relative text-3xl font-bold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative grid grid-cols-2 gap-3 mb-8">
                {service.features.map((f, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-blue-500 flex-shrink-0"
                    />
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={service.slug}
                className="
                  relative
                  inline-flex
                  items-center
                  gap-2
                  mt-auto
                  font-semibold
                  text-blue-600
                  group-hover:text-purple-600
                  transition-all
                "
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
