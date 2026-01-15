"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import NetworkGraphic from "./NetworkGraphic" 

export default function HomeHero() {
  return (
  
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0b0f1a] -mt-3">
      
      {/* 3D Network Graphic for Background Animation */}
      <NetworkGraphic />
      
      {/* Gradient blobs and Header/Navigation overlay (z-index 20/30) */}
      <div className="absolute inset-0 z-10">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT CONTENT - Always shown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          // ADDED: mb-10 on small screens to separate content from what follows, 
          // and lg:mb-0 to remove it on desktop.
          className="mb-10 lg:mb-0" 
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
  India’s
  <br />
  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    Founder Operating System
  </span>
</h1>

          <p className="text-lg text-slate-300 max-w-xl mb-10">
  Fortune-500 grade mentorship, execution tools, and founder infrastructure —
  accessible to anyone serious about building.
  <span className="block mt-2 text-cyan-400 font-semibold">
    All for $1 a day.
  </span>
</p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-4 rounded-xl
              bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Join for $1 / day
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-7 py-4 rounded-xl
              border border-cyan-400/40 text-cyan-300
              hover:bg-cyan-400/10 transition"
            >
              How It Works
            </Link>
          </div>
        </motion.div>

        {/* RIGHT FLOATING SCREENS - Only appears on large screens (desktop) */}
        <div className="relative hidden lg:block h-[420px]">
          {/* Screen 1 */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.05 }}
  className="absolute top-0 left-10 w-[320px] h-[200px]
rounded-2xl bg-white/5 backdrop-blur-xl
border border-white/10 shadow-2xl overflow-hidden
group z-10 hover:z-30 transition-all duration-300"
>
  {/* IMAGE */}
  <Image
    src="/home/1.png"
    alt="Dashboard"
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* TRANSPARENT GLASS SHEET */}
 <div className="absolute inset-0 
bg-black/0 
transition-all duration-300 
group-hover:bg-black/20" />

  {/* TEXT ON TOP */}
  <div className="absolute top-3 left-4 z-10 text-white font-semibold">
    Dashboard
  </div>
</motion.div>

          {/* Screen 2 (center) */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  whileHover={{ scale: 1.06 }}
className="absolute top-24 left-32 w-[360px] h-[220px]
rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10
backdrop-blur-xl border border-cyan-400/30
shadow-[0_0_60px_rgba(56,189,248,0.25)]
overflow-hidden group z-20 hover:z-40 transition-all duration-300"
>
  <Image
    src="/home/2.png"
    alt="Startup Services"
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 
bg-black/0 
transition-all duration-300 
group-hover:bg-black/20" />
  <div className="absolute top-4 left-5 z-10 text-cyan-300 font-semibold">
    Startup Services
  </div>
</motion.div>

          {/* Screen 3 */}
        <motion.div
  initial={{ opacity: 0.1, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
  whileHover={{ scale: 1.05 }}
  className="absolute bottom-0 right-0 w-[300px] h-[180px]
rounded-2xl bg-white/5 backdrop-blur-xl
border border-white/10 shadow-2xl
overflow-hidden group z-10 hover:z-30 transition-all duration-300"
>
  <Image
    src="/home/3.png"
    alt="About Cosminnox"
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

<div className="absolute inset-0 
bg-black/0 
transition-all duration-300 
group-hover:bg-black/20" />
  <div className="absolute top-3 left-4 z-10 text-white font-semibold">
    About COSMINNOX
  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}


// "use client"

// import dynamic from "next/dynamic"

// const Scene = dynamic(() => import("../Scene"), {
//   ssr: false,
// })

// export default function Home() {
//   return <Scene />
// }





// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// export default function HomeHero() {
//   return (
//     <section className="relative min-h-[88vh] flex items-center -mt-3">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="mb-10 lg:mb-0"
//         >
//           <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
//             Innovate.
//             <br />
//             Connect.
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Transform.
//             </span>
//           </h1>

//           <p className="text-lg text-slate-300 max-w-xl mb-10">
//             COSMINNOX empowers deep-tech startups with mentorship, incubation,
//             and industry connections to scale globally.
//           </p>

//           <div className="flex gap-4">
//             <Link
//               href="/contact"
//               className="inline-flex items-center px-7 py-4 rounded-xl
//               bg-gradient-to-r from-blue-500 to-cyan-500
//               text-white font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Join Ecosystem
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>

//             <Link
//               href="/about"
//               className="inline-flex items-center px-7 py-4 rounded-xl
//               border border-cyan-400/40 text-cyan-300
//               hover:bg-cyan-400/10 transition"
//             >
//               Learn More
//             </Link>
//           </div>
//         </motion.div>

//         {/* RIGHT FLOATING SCREENS (DESKTOP ONLY) */}
//         <div className="relative hidden lg:block h-[420px]">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute top-0 left-10 w-[320px] h-[200px]
//             rounded-2xl bg-white/5 backdrop-blur-xl
//             border border-white/10 shadow-2xl"
//           >
//             <div className="p-4 text-white font-semibold">Dashboard</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="absolute top-24 left-32 w-[360px] h-[220px]
//             rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10
//             backdrop-blur-xl border border-cyan-400/30
//             shadow-[0_0_60px_rgba(56,189,248,0.25)]"
//           >
//             <div className="p-5 text-cyan-300 font-semibold">
//               Startup Services
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.4 }}
//             className="absolute bottom-0 right-0 w-[300px] h-[180px]
//             rounded-2xl bg-white/5 backdrop-blur-xl
//             border border-white/10 shadow-2xl"
//           >
//             <div className="p-4 text-white font-semibold">About COSMINNOX</div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }
