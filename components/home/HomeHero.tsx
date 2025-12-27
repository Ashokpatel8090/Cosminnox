// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import NetworkGraphic from "./NetworkGraphic" 

// export default function HomeHero() {
//   return (
//     <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0b0f1a] -mt-3">
      
//        {/* 3D Network Graphic for Background Animation */}
//        <NetworkGraphic />
      
//        {/* Gradient blobs and Header/Navigation overlay (z-index 20/30) */}
//        <div className="absolute inset-0 z-10">
//          <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
//          <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-3xl" />
//        </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
//             Innovate.
//             <br/>
//              Connect.
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

//         {/* RIGHT FLOATING SCREENS */}
//         <div className="relative hidden lg:block h-[420px]">
//           {/* Screen 1 */}
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

//           {/* Screen 2 (center) */}
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

//           {/* Screen 3 */}
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



// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import NetworkGraphic from "./NetworkGraphic" // Import the 3D graphic

// export default function HomeHero() {
//   return (
//     // The min-h-[95vh] and background color match the screenshot/original code
//     <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0b0f1a]">
      
//       {/* 3D Network Graphic for Background Animation */}
//       <NetworkGraphic />
      
//       {/* Gradient blobs (kept for original code's styling) */}
//       <div className="absolute inset-0 z-10">
//         <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="py-20 lg:py-0" // Add padding for better mobile/smaller screen look
//         >
//           {/* Main Title - Matches Screenshot */}
//           <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold leading-tight text-white mb-6">
//             Innovate. <br />
//             Connect. <br />
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Transform.
//             </span>
//           </h1>

//           {/* Placeholder/Context Text - Updated to match screenshot's subtext area */}
//           <p className="text-sm text-slate-400 max-w-lg mb-2 italic">
//              Rarotiy, 3blxt n4 and React Three Roar (IM) 
//           </p>
          
//           {/* Primary Call to Action Button - Matches Screenshot */}
//           <div className="flex gap-4">
//             <Link
//               href="/services" // Changed to /services to match 'Explore Service'
//               className="inline-flex items-center px-7 py-4 rounded-xl
//               bg-gradient-to-r from-blue-500 to-cyan-500
//               text-white font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Explore Service 
//               {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
//             </Link>
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN - Now empty as the 3D graphic covers the background */}
//         <div className="hidden lg:block h-[420px]">
//           {/* This column is now mostly empty on purpose, relying on the background NetworkGraphic */}
//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import NetworkGraphic from "./NetworkGraphic" 
// // The Navbar is missing from the provided code, but I'll assume it exists or is handled elsewhere.
// // For the screenshot look, I'll place the navbar elements visually inside the Hero component's div for completeness.

// export default function HomeHero() {
//   return (
//     <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0b0f1a]">
      
//       {/* 3D Network Graphic for Background Animation */}
//       <NetworkGraphic />
      
//       {/* Gradient blobs and Header/Navigation overlay (z-index 20/30) */}
//       <div className="absolute inset-0 z-10">
//         <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-3xl" />
//       </div>

     

//       {/* Main Content (z-index 20) */}
//       <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="pt-40 pb-20 lg:py-0"
//         >
//           {/* Main Title - Matches Screenshot */}
//           <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold leading-tight text-white mb-6">
//             Innovate. <br />
//             Connect. <br />
//             <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Transform.
//             </span>
//           </h1>

//           {/* Subtext and Button Group */}
//           <p className="text-sm text-slate-400 max-w-lg mb-8 italic">
//              Rarotiy, 3blxt n4 and React Three Roar (IM) 
//           </p>
          
//           <div className="flex gap-4">
//             <Link
//               href="/services"
//               className="inline-flex items-center px-7 py-4 rounded-xl
//               bg-gradient-to-r from-blue-500 to-cyan-500
//               text-white font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Explore Service 
//             </Link>
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN - Remains empty, as the graphic covers the whole background */}
//         <div className="hidden lg:block h-[420px]">
//           {/* The NetworkGraphic now fills this space visually */}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
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
            Innovate.
            <br/>
            Connect.
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transform.
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl mb-10">
            COSMINNOX empowers deep-tech startups with mentorship, incubation,
            and industry connections to scale globally.
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-4 rounded-xl
              bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Join Ecosystem
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-7 py-4 rounded-xl
              border border-cyan-400/40 text-cyan-300
              hover:bg-cyan-400/10 transition"
            >
              Learn More
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
            className="absolute top-0 left-10 w-[320px] h-[200px]
            rounded-2xl bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-2xl"
          >
            <div className="p-4 text-white font-semibold">Dashboard</div>
          </motion.div>

          {/* Screen 2 (center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute top-24 left-32 w-[360px] h-[220px]
            rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10
            backdrop-blur-xl border border-cyan-400/30
            shadow-[0_0_60px_rgba(56,189,248,0.25)]"
          >
            <div className="p-5 text-cyan-300 font-semibold">
              Startup Services
            </div>
          </motion.div>

          {/* Screen 3 */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="absolute bottom-0 right-0 w-[300px] h-[180px]
            rounded-2xl bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-2xl"
          >
            <div className="p-4 text-white font-semibold">About COSMINNOX</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}