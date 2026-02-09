// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function medicapssection() {
//   return (
//     <section className="relative w-screen h-screen overflow-hidden">
//       {/* Background */}
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//         className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400"
//       />

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6, duration: 0.7 }}
//           >
//             <Image
//               src="/medicaps1.png"
//               alt="Medicaps Platform"
//               width={720}
//               height={520}
//               className="w-full h-auto"
//               priority
//             />
//           </motion.div>

//           {/* Text */}
//           <div className="text-white">
//             <motion.h1
//               initial={{ opacity: 0, y: -40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.05, duration: 0.5 }}
//               className="text-5xl font-bold mb-6"
//             >
//                 <Image
//                  src="/l1.png"
//                  alt="Medicaps Logo"
//                  width={100}
//                  height={50}
//               />
//               <h1 className="ml-4 inline-block">MediCAPS</h1>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: -25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.25, duration: 0.5 }}
//               className="text-lg leading-relaxed max-w-md opacity-90"
//             >
//               A healthcare platform designed to manage patients,
//               appointments, and digital consultations — built
//               with reliability, privacy, and scale in mind.
//             </motion.p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MedicapsSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">

      
      {/* 🔵 Background */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 🖥️ MAIN IMAGE — slightly bigger */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Image
              src="/medicaps1.png"
              alt="Medicaps Platform"
              width={1020}          // ⬅️ bigger
              height={1080}
               className="w-[120%] max-w-none h-auto"
              priority
            />
          </motion.div>

          {/* ✍️ TEXT */}
          <div className="text-white">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex items-center gap-4 text-5xl font-bold mb-6"
            >
              {/* LOGO with white circle */}
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white">
                <Image
                  src="/l1.png"
                  alt="Medicaps Logo"
                  width={32}
                  height={32}
                />
              </span>

              <span>MediCAPS</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="text-lg leading-relaxed max-w-md opacity-90"
            >
              A healthcare platform designed to manage patients,
              appointments, and digital consultations — built
              with reliability, privacy, and scale in mind.
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.45, duration: 0.6, ease: "easeOut" }}
  className="mt-8 flex flex-wrap gap-4"
>
  {/* VISIT WEBSITE */}
  <a
    href="https://www.medicaps.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-xl
      bg-white text-blue-600
      font-semibold
      shadow-lg
      hover:bg-blue-50 hover:scale-105
      transition
    "
  >
    Visit Website
  </a>

  {/* DOWNLOAD APP */}
  <a
    href="https://play.google.com/store/apps/details?id=com.rs.medicaps"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      rounded-xl
      bg-black/90 text-white
      font-semibold
      shadow-lg
      hover:bg-black hover:scale-105
      transition
    "
  >
    Download App
  </a>
</motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
