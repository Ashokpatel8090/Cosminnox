

// "use client"

// import { useEffect, useState } from "react"
// import MedicapsSection from "@/components/medicapssection"
// import GrasaSection from "@/components/grasasection"
// import IdcSection from "@/components/idcsection"

// const SECTIONS = ["medicaps", "grasa", "idc"] as const

// export default function BuildPage() {
//   const [active, setActive] = useState<(typeof SECTIONS)[number]>("medicaps")
//   const [paused, setPaused] = useState(false)

//   useEffect(() => {
//     if (paused) return

//     const interval = setInterval(() => {
//       setActive((prev) => {
//         const currentIndex = SECTIONS.indexOf(prev)
//         return SECTIONS[(currentIndex + 1) % SECTIONS.length]
//       })
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [paused])

//   return (
//     <div
//       className="relative w-full h-[60vh] overflow-hidden"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {active === "medicaps" && <MedicapsSection />}
//       {active === "grasa" && <GrasaSection />}
//       {active === "idc" && <IdcSection />}
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MedicapsSection from "@/components/medicapssection"
import GrasaSection from "@/components/grasasection"
import IdcSection from "@/components/idcsection"
// import BuildEcosystemSection from "@/components/buildecosystemsection"
 import BuildCardsSection from "@/components/build/buildcardsection"

const SECTIONS = ["medicaps", "grasa", "idc"] as const
const SLIDE_TIME = 3000

export default function BuildPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SECTIONS.length)
    }, SLIDE_TIME)

    return () => clearInterval(interval)
  }, [paused])

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % SECTIONS.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? SECTIONS.length - 1 : prev - 1
    )
  }

  return (
    <>
    <div
      className="relative w-full h-[60vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SLIDES */}
      {SECTIONS[activeIndex] === "medicaps" && <MedicapsSection />}
      {SECTIONS[activeIndex] === "grasa" && <GrasaSection />}
      {SECTIONS[activeIndex] === "idc" && <IdcSection />}

      {/* LEFT ARROW */}
      <button
        onClick={goPrev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-50
          w-10 h-10 rounded-full
          bg-white/80 text-black
          flex items-center justify-center
          hover:bg-white transition
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={goNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-50
          w-10 h-10 rounded-full
          bg-white/80 text-black
          flex items-center justify-center
          hover:bg-white transition
        "
      >
        <ChevronRight size={22} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {SECTIONS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === activeIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
    <BuildCardsSection />
    </>
  )
}
