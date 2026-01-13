"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.set(element, { opacity: 0, y: 20 })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 98%",
        // end: "top 50%",
        scrub: false,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function ParallaxSection({ children, className = "", offset = 50 }: ScrollAnimationProps & { offset?: number }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    gsap.to(container, {
      y: offset,
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [offset])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
