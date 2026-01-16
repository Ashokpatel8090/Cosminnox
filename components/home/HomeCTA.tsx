// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { Star } from "lucide-react"

// // ================= TESTIMONIALS DATA =================
// const testimonials = [
//   {
//     quote:
//       "COSMINNOX helped us scale our AI startup with expert mentorship and funding access. Their network of investors and industry leaders was a game-changer!",
//     name: "Rahul Verma",
//     title: "CEO, DeepAI Labs",
//     avatar: "/images/rahul-verma-avatar.jpg",
//   },
//   {
//     quote:
//       "We transformed from an idea-stage startup to a venture-backed company in just six months, thanks to COSMINNOX’s structured incubation program.",
//     name: "Neha Sharma",
//     title: "Founder, RoboNext Innovations",
//     avatar: "/images/neha-sharma-avatar.jpg",
//   },
//   {
//     quote:
//       "With COSMINNOX’s support, we secured government grants and connected with top VCs, accelerating our go-to-market journey.",
//     name: "Amit Patel",
//     title: "Co-founder, QuantumX Technologies",
//     avatar: "/images/amit-patel-avatar.jpg",
//   },
// ]

// // ================= PARTNERS DATA =================
// const partners = [
//   {
//     name: "Startup India",
//     logoUrl: "/mentors/startupIndia.png",
//   },
//   {
//     name: "MeitY Startup Hub",
//     logoUrl: "/mentors/meitY.png",
//   },
//   {
//     name: "InsERB India",
//     logoUrl: "/mentors/india.png",
//   },
//   {
//     name: "MSME",
//     logoUrl: "/mentors/msme.webp",
//   },
//   {
//     name: "Ministry of Science and Technology",
//     logoUrl: "/mentors/mst.png",
//   },
// ]

// // ================= FRAMER MOTION VARIANTS =================
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// // ================= COMPONENT =================
// export default function HomeCTA() {
//   return (
//     <section className="py-14 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ================= PARTNERS ================= */}
//         <div className="mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
//               Mentors who have partnered with us
//             </h2>
//             <p className="mt-2 text-base sm:text-lg text-slate-600">
//               Trusted by leading government and industry bodies
//             </p>
//           </motion.div>

//           {/* ===== RESPONSIVE LOGO ROW ===== */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="
//               flex gap-6
//               overflow-x-auto lg:overflow-visible
//               lg:justify-center
//               py-4 px-1
//               scrollbar-hide
//             "
//           >
//             {partners.map((partner, i) => (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 className="
//                   flex-shrink-0
//                   w-40 h-24
//                   sm:w-48 sm:h-28
//                   md:w-52 md:h-32
//                   flex items-center justify-center
//                   rounded-xl
//                   bg-white
//                   shadow-md
//                   hover:shadow-lg
//                   transition
//                 "
//               >
//                 <Image
//                   src={partner.logoUrl}
//                   alt={partner.name}
//                   title={partner.name}
//                   width={180}
//                   height={80}
//                   className="object-contain max-h-16 sm:max-h-20"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <hr className="border-t border-slate-300 my-20" />

//         {/* ================= TESTIMONIALS ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
//             Here's what our{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               customers said
//             </span>
//           </h2>
//         </motion.div>

//         {/* ===== RESPONSIVE GRID ===== */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-3
//             gap-8
//           "
//         >
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               whileHover={{ y: -6 }}
//               className="
//                 p-8
//                 rounded-3xl
//                 bg-white
//                 border border-slate-200
//                 shadow-lg
//                 flex flex-col
//               "
//             >
//               {/* Stars */}
//               <div className="flex text-amber-500 mb-4">
//                 {[...Array(5)].map((_, idx) => (
//                   <Star key={idx} size={18} fill="currentColor" />
//                 ))}
//               </div>

//               {/* Quote */}
//               <p className="text-base sm:text-lg italic text-slate-700 mb-6 flex-grow">
//                 {t.quote}
//               </p>

//               {/* User */}
//               <div className="flex items-center pt-4 border-t border-slate-100">
//                 <div className="
//                   w-12 h-12
//                   rounded-full
//                   bg-gradient-to-r from-blue-500 to-cyan-500
//                   flex items-center justify-center
//                   text-white font-bold text-xl
//                   mr-4
//                 ">
//                   {t.name.charAt(0)}
//                 </div>

//                 <div>
//                   <p className="font-bold text-slate-900">{t.name}</p>
//                   <p className="text-sm text-slate-500">{t.title}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }







"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

// ================= TESTIMONIALS DATA =================
const testimonials = [
  {
    quote:
      "COSMINNOX helped us scale our AI startup with expert mentorship and funding access. Their network of investors and industry leaders was a game-changer!",
    name: "Rahul Verma",
    title: "CEO, DeepAI Labs",
  },
  {
    quote:
      "We transformed from an idea-stage startup to a venture-backed company in just six months, thanks to COSMINNOX’s structured incubation program.",
    name: "Neha Sharma",
    title: "Founder, RoboNext Innovations",
  },
  {
    quote:
      "With COSMINNOX’s support, we secured government grants and connected with top VCs, accelerating our go-to-market journey.",
    name: "Amit Patel",
    title: "Co-founder, QuantumX Technologies",
  },
]

// ================= PARTNERS DATA =================
const partners = [
  { name: "Startup India", logoUrl: "/mentors/startupIndia.png" },
  { name: "MeitY Startup Hub", logoUrl: "/mentors/meitY.png" },
  { name: "InsERB India", logoUrl: "/mentors/india.png" },
  { name: "MSME", logoUrl: "/mentors/msme.webp" },
  { name: "Ministry of Science and Technology", logoUrl: "/mentors/mst.png" },
]

// ================= FRAMER VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// ================= COMPONENT =================
export default function HomeCTA() {
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= PARTNERS ================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Mentors who have partnered with us
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600">
              Trusted by leading government and industry bodies
            </p>
          </motion.div>

          {/* ===== RESPONSIVE GRID (EXACT REQUIREMENT) ===== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-5
              gap-6
              place-items-center
            "
          >
            {partners.map((partner, i) => (
  <motion.div
    key={i}
    variants={itemVariants}
    className="
      w-full
      max-w-[180px]
      sm:max-w-[200px]
      lg:max-w-[220px]

      aspect-[4/3]

      flex items-center justify-center
      mx-auto

      rounded-xl
      bg-white
      shadow-md
      hover:shadow-lg
      transition
      p-4
    "
  >
    <Image
      src={partner.logoUrl}
      alt={partner.name}
      title={partner.name}
      width={180}
      height={160}
      className="object-contain max-h-32"
    />
  </motion.div>
))}

          </motion.div>
        </div>

        <hr className="border-t border-slate-300 my-20" />

        {/* ================= TESTIMONIALS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Here's what our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              customers said
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-base sm:text-lg italic text-slate-700 mb-6 flex-grow">
                {t.quote}
              </p>

              <div className="flex items-center pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
