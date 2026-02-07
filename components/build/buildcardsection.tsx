// "use client"

// import { motion } from "framer-motion"
// import MediCapsAppCard from "@/components/medicapsappcard"
// import MediCapsWebCard from "@/components/medicapswebcard"
// import GrasaAppCard from "@/components/grasaappcard"
// import GrasaWebCard from "@/components/grasawebcard"

// const cards = [
//   {
//     id: "01",
//     title: "MediCAPS App",
//     desc: "Mobile healthcare app for patients and doctors with digital consultations.",
//     color: "emerald",
//   },
//   {
//     id: "02",
//     title: "MediCAPS Website",
//     desc: "Public healthcare platform website for information and access.",
//     color: "cyan",
//   },
//   {
//     id: "03",
//     title: "GRASA App",
//     desc: "Lifestyle & food mobile app focused on nutrition and habits.",
//     color: "lime",
//   },
//   {
//     id: "04",
//     title: "GRASA Website",
//     desc: "Brand and product website for the GRASA ecosystem.",
//     color: "green",
//   },
//   {
//     id: "05",
//     title: "IDC India Website",
//     desc: "Enterprise-grade website built for governance and scale.",
//     color: "rose",
//   },
// ]

// export default function BuildCardsSection() {
//   return (
//     <section className="bg-white py-15">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             What We’ve Built
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A focused set of digital products across healthcare,
//             lifestyle, and enterprise platforms.
//           </p>
//         </div>

//         {/* CARDS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//          {cards.map((card, i) => {

//   // 🔥 CARD 01 → MediCAPS APP
//   if (card.title === "MediCAPS App") {
//     return (
//       <motion.div
//         key={card.id}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: i * 0.08 }}
//       >
//         <MediCapsAppCard />
//       </motion.div>
//     )
//   }

//   // 🔥 CARD 02 → MediCAPS WEBSITE
//   if (card.title === "MediCAPS Website") {
//     return (
//       <motion.div
//         key={card.id}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: i * 0.08 }}
//       >
//         <MediCapsWebCard />
//       </motion.div>
//     )
//   }

//   if (card.title === "GRASA App") {
//   return (
//     <motion.div
//       key={card.id}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.08 }}
//     >
//       <GrasaAppCard />
//     </motion.div>
//   )
// }
// if (card.title === "GRASA Website") {
//   return (
//     <motion.div
//       key={card.id}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.08 }}
//     >
//       <GrasaWebCard />
//     </motion.div>
//   )
// }


//   // ✅ बाकी cards → normal design
//   return (
//     <motion.div
//       key={card.id}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.08 }}
//       className="relative group"
//     >
//       <div
//         className="
//           relative z-10 h-full p-8 rounded-2xl
//           bg-white
//           border border-gray-200
//           shadow-sm
//           transition
//           group-hover:-translate-y-1
//         "
//       >
//         <div className="text-5xl font-bold text-gray-200 mb-6">
//           {card.id}
//         </div>

//         <h3 className="text-xl font-semibold text-gray-900 mb-3">
//           {card.title}
//         </h3>

//         <p className="text-gray-600 leading-relaxed">
//           {card.desc}
//         </p>
//       </div>

//       {/* GLOW */}
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
//         style={{
//           boxShadow: `0 0 45px -8px ${glowMap(card.color)}`,
//         }}
//       />
//     </motion.div>
//   )
// })}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* Helper */
// function glowMap(color: string) {
//   switch (color) {
//     case "emerald":
//       return "rgba(52, 211, 153, 0.6)"
//     case "cyan":
//       return "rgba(34, 211, 238, 0.6)"
//     case "lime":
//       return "rgba(163, 230, 53, 0.6)"
//     case "green":
//       return "rgba(34, 197, 94, 0.6)"
//     case "rose":
//       return "rgba(244, 63, 94, 0.6)"
//     default:
//       return "rgba(0,0,0,0.15)"
//   }
// }


// "use client"

// import { motion } from "framer-motion"

// import MediCapsAppCard from "@/components/build/medicapsappcard"
// import MediCapsWebCard from "@/components/build/medicapswebcard"
// import GrasaAppCard from "@/components/build/grasaappcard"
// import GrasaWebCard from "@/components/build/grasawebcard"
// import IDCWebCard from "@/components/build/idcwebcard"
// import HowWeBuildSection from "@/components/build/HowWeBuildSection"

// const cards = [
//   { id: "01", title: "MediCAPS App" },
//   { id: "02", title: "MediCAPS Website" },
//   { id: "03", title: "GRASA App" },
//   { id: "04", title: "GRASA Website" },
//   { id: "05", title: "IDC India Website" },
// ]

// export default function BuildCardsSection() {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             What We’ve Built
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A focused set of digital products across healthcare,
//             lifestyle, and enterprise platforms.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {cards.map((card, i) => (
//             <MotionWrap key={card.id} i={i}>
//               {renderCard(card.title)}
//             </MotionWrap>
//           ))}
//         </div>

//       </div>
//       <HowWeBuildSection />
//       <TechMarqueeSection />
//     </section>
//   )
// }

// /* 🔹 CARD ROUTER */
// function renderCard(title: string) {
//   switch (title) {
//     case "MediCAPS App":
//       return <MediCapsAppCard />

//     case "MediCAPS Website":
//       return <MediCapsWebCard />

//     case "GRASA App":
//       return <GrasaAppCard />

//     case "GRASA Website":
//       return <GrasaWebCard />

//     case "IDC India Website":
//       return <IDCWebCard />

//     default:
//       return null
//   }
// }

// /* 🔹 MOTION WRAPPER */
// function MotionWrap({
//   children,
//   i,
// }: {
//   children: React.ReactNode
//   i: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.08 }}
//     >
//       {children}
//     </motion.div>
//   )
// }



"use client"

import { motion } from "framer-motion"

import MediCapsAppCard from "@/components/build/medicapsappcard"
import GrasaAppCard from "@/components/build/grasaappcard"
import IDCWebCard from "@/components/build/idcwebcard"
import HowWeBuildSection from "./HowWeBuildSection"

export default function BuildCardsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We’ve Built
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A focused set of digital products across healthcare,
            lifestyle, and enterprise platforms.
          </p>
        </div>

        {/* 3 CARDS – SINGLE ROW */}
        <div className="
          grid grid-cols-1
          md:grid-cols-3
          gap-10
        ">
          <MotionWrap i={0}>
            <MediCapsAppCard />
          </MotionWrap>

          <MotionWrap i={1}>
            <GrasaAppCard />
          </MotionWrap>

          <MotionWrap i={2}>
            <IDCWebCard />
          </MotionWrap>
        </div>

      </div>
      <HowWeBuildSection />
      <TechMarqueeSection /> 
    </section>
  )
}

/* 🔹 Motion Wrapper */
function MotionWrap({
  children,
  i,
}: {
  children: React.ReactNode
  i: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}




import { useRef } from "react"
import { useAnimationFrame, useMotionValue } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiTensorflow,
  SiFlask,
  SiMongodb,
  SiFramer,
  SiTypescript,
} from "react-icons/si"

const techs = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiTensorflow />, name: "AI / ML" },
  { icon: <SiFlask />, name: "Python / Flask" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiReact />, name: "React Native" },
]

export function TechMarqueeSection() {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isPaused = useRef(false)

  const SPEED = 0.05

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || isPaused.current) return

    const width = containerRef.current.scrollWidth / 2
    let currentX = x.get()

    // 🔁 RESET LOGIC (THIS WAS MISSING)
    if (Math.abs(currentX) >= width) {
      x.set(0)
    } else {
      x.set(currentX - delta * SPEED)
    }
  })

  return (
    <section className="mt-28 bg-white overflow-hidden">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Technologies We Work With
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-12 w-max px-6"
          style={{ x }}
          onHoverStart={() => (isPaused.current = true)}
          onHoverEnd={() => (isPaused.current = false)}
        >
          {[...techs, ...techs].map((tech, i) => (
  <motion.div
    key={i}
    whileHover={{
      y: -10,
      scale: 1.1,
      backgroundColor: "#0ea5e9",      // sky-500
      color: "#ffffff",                // icon + text white
      borderColor: "rgba(255,255,255,0.4)",
      boxShadow: "0 12px 30px rgba(14,165,233,0.45)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="
      flex flex-col items-center justify-center
      w-32 h-32
      rounded-2xl
      bg-white
      border border-gray-200
      shadow-sm
      text-4xl text-gray-700
      cursor-pointer
    "
  >
    {tech.icon}
    <span className="mt-2 text-sm font-medium">
      {tech.name}
    </span>
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  )
}
