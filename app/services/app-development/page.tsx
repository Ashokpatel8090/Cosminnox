// "use client"

// import { motion } from "framer-motion"
// import {
//   Smartphone,
//   CheckCircle2,
//   Apple,
//   Android,
//   Layers,
//   Shield,
//   Rocket,
// } from "lucide-react"
// import { FaAndroid, FaApple } from "react-icons/fa"
// import {
//   SiSwift,
//   SiKotlin,
//   SiReact,
//   SiFlutter,
//   SiFirebase,
//   SiNodedotjs,
//   SiMongodb,
//   SiAwsamplify,
// } from "react-icons/si"

// import Link from "next/link"
// import { useState } from "react"

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// }

// const technologies = [
//   { icon: SiSwift, name: "Swift / SwiftUI", color: "from-orange-500 to-red-500" },
//   { icon: SiKotlin, name: "Kotlin", color: "from-purple-600 to-indigo-600" },
//   { icon: SiReact, name: "React Native", color: "from-cyan-500 to-blue-500" },
//   { icon: SiFlutter, name: "Flutter", color: "from-sky-500 to-blue-600" },
//   { icon: SiFirebase, name: "Firebase", color: "from-yellow-400 to-orange-500" },
//   { icon: SiNodedotjs, name: "Node.js", color: "from-green-500 to-emerald-600" },
//   { icon: SiMongodb, name: "MongoDB", color: "from-green-600 to-lime-600" },
//   { icon: SiAwsamplify, name: "AWS", color: "from-orange-400 to-yellow-500" },
// ]

// export default function AppDevelopmentPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null)

//   return (
//     <section className="min-h-screen bg-slate-50 py-12 text-slate-900">
//       <div className="max-w-7xl mx-auto">

//         {/* ================= HERO ================= */}
// <div className="max-w-7xl mx-auto relative isolate overflow-hidden py-16">

//   {/* ================= HERO BACKGROUND (SCOPED) ================= */}
//   <div className="absolute inset-0 -z-10 pointer-events-none">
//     <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
//     <div className="absolute bottom-24 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
//     <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//   </div>

//   {/* ================= HERO CONTENT ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 text-center"
//       >
//         {/* Title */}
//         <h1
//           className="
//             text-5xl md:text-6xl lg:text-7xl
//             font-extrabold
//             bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500
//             bg-clip-text text-transparent
//             mb-6 leading-tight
//           "
//         >
//           App Development
//         </h1>


//         {/* Primary description */}
//         <p
//           className="
//             text-xl
//             text-slate-600 dark:text-slate-300
//             max-w-3xl mx-auto
//             leading-relaxed
//             mb-6
//           "
//         >
//           We design and build high-performance mobile applications for iOS,
//           Android, and cross-platform environments with a strong focus on
//           usability, scalability, and security.
//         </p>

//         {/* Secondary description */}
//         <p
//           className="
//             text-lg
//             text-slate-500 dark:text-slate-400
//             max-w-4xl mx-auto
//             leading-relaxed
//           "
//         >
//           From idea validation to App Store launch and long-term growth,
//           COSMINNOX delivers reliable, secure, and user-centric mobile apps
//           engineered to scale with your business.
//         </p>
//       </motion.div>

// </div>

//         {/* ================= FEATURES ================= */}
//        <motion.div
//   variants={fadeUp}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16"
// >
//   {[
//     "Native iOS & Android Development",
//     "React Native & Flutter Apps",
//     "UX-Focused App Design",
//     "Secure API & Backend Integration",
//     "App Store & Play Store Deployment",
//     "Performance & Battery Optimization",
//   ].map((feature, i) => (
//     <motion.div
//       key={i}
//       custom={i}
//       initial="hidden"
//       whileInView="visible"
//       variants={fadeUp}
//       viewport={{ once: true }}
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.3 }}
//       className="
//         relative
//         group
//         flex
//         gap-6
//         items-center
//         bg-white
//         rounded-xl
//         p-6
//         border border-slate-200
//         shadow-sm
//         transition-all duration-300
//         hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]
//         hover:border-blue-300
//       "
//     >
//       {/* ===== NUMBER CIRCLE ===== */}
//       <div
//         className="
//           w-12 h-12
//           rounded-full
//           bg-gradient-to-r from-blue-600 to-purple-600
//           text-white
//           flex items-center justify-center
//           font-bold
//           text-lg
//           shrink-0
//           transition-transform duration-300
//           group-hover:scale-110
//         "
//       >
//         {String(i + 1).padStart(2, "0")}
//       </div>

//       {/* ===== TEXT ===== */}
//       <p
//         className="
//           text-lg
//           text-slate-700
//           group-hover:text-slate-900
//           transition-colors
//         "
//       >
//         {feature}
//       </p>

//       {/* ===== HOVER GLOW ===== */}
//       <div
//         className="
//           absolute inset-0
//           rounded-xl
//           opacity-0
//           group-hover:opacity-100
//           transition-opacity duration-300
//           pointer-events-none
//           bg-gradient-to-br
//           from-blue-500/10
//           via-transparent
//           to-purple-500/10
//         "
//       />
//     </motion.div>
//   ))}
// </motion.div>


      

//         {/* ================= DEVELOPMENT PROCESS ================= */}
//         <div className="mb-16">
//   <motion.h2
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeUp}
//     viewport={{ once: true }}
//     className="text-4xl font-bold mb-16 text-center"
//   >
//     Our App Development Process
//   </motion.h2>

//   <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//     {[
//       "Idea Discovery & Requirement Analysis",
//       "Wireframing & UI/UX Design",
//       "App Architecture & Development",
//       "API Integration & Testing",
//       "App Store Submission",
//       "Monitoring, Updates & Scaling",
//     ].map((step, i) => (
//       <motion.div
//         key={i}
//         custom={i}
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeUp}
//         viewport={{ once: true }}
//         whileHover={{ y: -8 }}
//         transition={{ duration: 0.3 }}
//         className="
//           relative
//           group
//           flex
//           gap-6
//           items-center
//           bg-white/80
//           backdrop-blur-xl
//           rounded-xl
//           p-6
//           border border-slate-200
//           shadow-sm
//           transition-all duration-300
//           hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]
//           hover:border-blue-300
//         "
//       >
//         {/* ===== NUMBER CIRCLE ===== */}
//         <div
//           className="
//             w-12 h-12
//             rounded-full
//             bg-gradient-to-r from-blue-600 to-purple-600
//             text-white
//             flex items-center justify-center
//             font-bold
//             text-lg
//             shrink-0
//             transition-transform duration-300
//             group-hover:scale-110
//           "
//         >
//           {String(i + 1).padStart(2, "0")}
//         </div>

//         {/* ===== TEXT ===== */}
//         <p
//           className="
//             text-lg
//             text-slate-700
//             group-hover:text-slate-900
//             transition-colors
//           "
//         >
//           {step}
//         </p>

//         {/* ===== HOVER GLOW ===== */}
//         <div
//           className="
//             absolute inset-0
//             rounded-xl
//             opacity-0
//             group-hover:opacity-100
//             transition-opacity duration-300
//             pointer-events-none
//             bg-gradient-to-br
//             from-blue-500/10
//             via-transparent
//             to-purple-500/10
//           "
//         />
//       </motion.div>
//     ))}
//   </div>
// </div>

// <section className="relative mb-28 overflow-hidden">
      
//       {/* ===== BACKGROUND GLOW ===== */}
//       <div className="absolute inset-0 -z-10">
//         <div className="
//           absolute top-1/2 left-1/2
//           -translate-x-1/2 -translate-y-1/2
//           w-[800px] h-[800px]
//           bg-cyan-300/20
//           rounded-full
//           blur-[140px]
//         " />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ===== HEADER ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl  font-extrabold text-slate-900 mb-4">
//             Technologies We Use in{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               App Development
//             </span>
//           </h2>

//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             We leverage modern, battle-tested technologies to build secure,
//             scalable, and high-performance mobile applications.
//           </p>
//         </motion.div>

//         {/* ===== TECHNOLOGY GRID ===== */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
//           {technologies.map((tech, i) => {
//             const Icon = tech.icon

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="
//                   relative
//                   group
//                   bg-white/80
//                   backdrop-blur-xl
//                   rounded-3xl
//                   p-8
//                   border border-slate-200
//                   shadow-sm
//                   flex flex-col items-center justify-center
//                   transition-all duration-300
//                   hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
//                   hover:border-blue-300
//                 "
//               >
//                 {/* ===== ICON ===== */}
//                 <div
//                   className={`
//                     w-16 h-16 mb-5
//                     rounded-2xl
//                     bg-gradient-to-br ${tech.color}
//                     flex items-center justify-center
//                     text-white
//                     shadow-lg
//                     transition-transform duration-300
//                     group-hover:scale-110
//                   `}
//                 >
//                   <Icon size={30} />
//                 </div>

//                 {/* ===== NAME ===== */}
//                 <h3 className="text-lg font-semibold text-slate-900 text-center">
//                   {tech.name}
//                 </h3>

//                 {/* ===== HOVER GLOW ===== */}
//                 <div
//                   className="
//                     absolute inset-0
//                     rounded-3xl
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity duration-300
//                     pointer-events-none
//                     bg-gradient-to-br
//                     from-blue-500/10
//                     via-transparent
//                     to-purple-500/10
//                   "
//                 />
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>

//   {/* ================= PLATFORMS ================= */}
//         <div className="mb-16 max-w-6xl mx-auto">
//   <motion.h2
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeUp}
//     viewport={{ once: true }}
//     className="text-4xl font-bold mb-14 text-center"
//   >
//     Platforms We Build For
//   </motion.h2>

//   <div className="grid md:grid-cols-3 gap-10">
//     {[
//       {
//         icon: <Apple size={30} />,
//         title: "iOS Development",
//         desc:
//           "Swift & SwiftUI-based apps optimized for performance, security, and seamless Apple ecosystem integration.",
//       },
//       {
//         icon: <FaAndroid size={30} />,
//         title: "Android Development",
//         desc:
//           "Kotlin-based Android apps designed to scale across devices and OS versions.",
//       },
//       {
//         icon: <Layers size={30} />,
//         title: "Cross-Platform Apps",
//         desc:
//           "React Native & Flutter apps that reduce cost while delivering near-native performance.",
//       },
//     ].map((platform, i) => (
//       <motion.div
//         key={i}
//         custom={i}
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeUp}
//         viewport={{ once: true }}
//         whileHover={{ y: -10 }}
//         transition={{ duration: 0.3 }}
//         className="
//           relative
//           group
//           bg-white/80
//           backdrop-blur-xl
//           rounded-2xl
//           p-8
//           border border-slate-200
//           shadow-sm
//           transition-all duration-300
//           hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
//           hover:border-blue-300
//         "
//       >
//         {/* ===== ICON ===== */}
//         <div
//           className="
//             w-14 h-14 mb-5 rounded-xl
//             bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
//             text-white
//             flex items-center justify-center
//             shadow-lg
//             transition-transform duration-300
//             group-hover:scale-110
//           "
//         >
//           {platform.icon}
//         </div>

//         {/* ===== TITLE ===== */}
//         <h3
//           className="
//             text-xl font-bold mb-3 text-slate-900
//             group-hover:text-blue-700
//             transition-colors
//           "
//         >
//           {platform.title}
//         </h3>

//         {/* ===== DESCRIPTION ===== */}
//         <p className="text-slate-600 leading-relaxed">
//           {platform.desc}
//         </p>

//         {/* ===== HOVER GLOW ===== */}
//         <div
//           className="
//             absolute inset-0
//             rounded-2xl
//             opacity-0
//             group-hover:opacity-100
//             transition-opacity duration-300
//             pointer-events-none
//             bg-gradient-to-br
//             from-blue-500/10
//             via-transparent
//             to-purple-500/10
//           "
//         />
//       </motion.div>
//     ))}
//   </div>
// </div>


//         {/* ================= SECURITY ================= */}
//         <div
//   className="
//     relative
//     group
//     mb-18
//     bg-white/80
//     backdrop-blur-xl
//     rounded-3xl
//     p-8
//     sm:p-10
//     lg:p-12
//     border border-slate-200
//     shadow-sm
//     transition-all duration-300
//     hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
//     hover:border-blue-300
//     max-w-6xl mx-auto
//   "
// >
//   {/* ===== HEADER ===== */}
//       <div className="flex items-center gap-4">
//         <div
//           className="
//             w-14 h-14
//             rounded-2xl
//             bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
//             flex items-center justify-center
//             text-white
//             shadow-lg
//             transition-transform duration-300
//             group-hover:scale-110
//           "
//         >
//           <Shield size={28} />
//         </div>

//         <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
//           Security & Quality Assurance
//         </h2>
//       </div>

//   {/* ===== DESCRIPTION ===== */}
//   <p className="text-slate-600 max-w-4xl leading-relaxed mb-8 text-base sm:text-lg">
//     Security and performance are baked into every stage of our mobile
//     development lifecycle. We follow industry best practices to protect
//     your data and users.
//   </p>

//   {/* ===== FEATURES LIST ===== */}
//   <ul className="grid sm:grid-cols-2   gap-4 text-slate-700">
//     {[
//       "Secure authentication & authorization",
//       "Encrypted data storage",
//       "Automated & manual testing",
//       "Performance benchmarking",
//       "App Store compliance checks",
//       "Ongoing security updates",
//     ].map((item, i) => (
//       <li
//         key={i}
//         className="
//           flex items-center gap-3
//           bg-slate-50
//           rounded-xl
//           px-4 py-3
//           border border-slate-200
//           transition-all duration-300
//           group-hover:bg-white
//         "
//       >
//         <span
//           className="
//             w-2 h-2
//             rounded-full
//             bg-gradient-to-r from-blue-600 to-purple-600
//             shrink-0
//           "
//         />
//         <span className="text-sm sm:text-base">{item}</span>
//       </li>
//     ))}
//   </ul>

//   {/* ===== HOVER GLOW ===== */}
//   <div
//     className="
//       absolute inset-0
//       rounded-3xl
//       opacity-0
//       group-hover:opacity-100
//       transition-opacity duration-300
//       pointer-events-none
//       bg-gradient-to-br
//       from-blue-500/10
//       via-transparent
//       to-purple-500/10
//     "
//   />
// </div>


//         {/* ================= FAQ ================= */}
//         <div className=" max-w-5xl mx-auto mb-14">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12 text-center"
//           >
//             Frequently Asked Questions
//           </motion.h2>

//           {[
//             {
//               q: "How long does it take to build a mobile app?",
//               a: "Most apps take between 8–16 weeks depending on complexity and features.",
//             },
//             {
//               q: "Do you provide post-launch support?",
//               a: "Yes, we offer ongoing maintenance, updates, and feature enhancements.",
//             },
//             {
//               q: "Which is better: native or cross-platform?",
//               a: "It depends on your goals. We help you choose the right approach based on performance, budget, and timeline.",
//             },
//           ].map((faq, i) => (
//             <div
//               key={i}
//               onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               className="bg-white rounded-xl p-6 mb-4 shadow-sm cursor-pointer"
//             >
//               <h3 className="font-semibold text-lg">
//                 {faq.q}
//               </h3>
//               {openFaq === i && (
//                 <p className="text-slate-600 mt-3">
//                   {faq.a}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* ================= CTA ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
//         >
//           <div>
//             <h2 className="text-4xl font-bold mb-3">
//               Ready to Build Your App?
//             </h2>
//             <p className="text-white/90 text-lg">
//               Let’s turn your idea into a scalable, production-ready mobile application.
//             </p>
//           </div>

//           <Link
//             href="/contact"
//             className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition"
//           >
//             Talk to Our Experts
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   )
// }



"use client"

import { motion, AnimatePresence } from "framer-motion"

import {
  Smartphone,
  CheckCircle2,
  Apple,
  Android,
  Layers,
  Shield,
  Rocket,
} from "lucide-react"
import { FaAndroid, FaApple } from "react-icons/fa"
import {
  SiSwift,
  SiKotlin,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiAwsamplify,
} from "react-icons/si"

import Link from "next/link"
import { useState, useEffect } from "react"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const technologies = [
  { icon: SiSwift, name: "Swift / SwiftUI", color: "from-orange-500 to-red-500" },
  { icon: SiKotlin, name: "Kotlin", color: "from-purple-600 to-indigo-600" },
  { icon: SiReact, name: "React Native", color: "from-cyan-500 to-blue-500" },
  { icon: SiFlutter, name: "Flutter", color: "from-sky-500 to-blue-600" },
  { icon: SiFirebase, name: "Firebase", color: "from-yellow-400 to-orange-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "from-green-500 to-emerald-600" },
  { icon: SiMongodb, name: "MongoDB", color: "from-green-600 to-lime-600" },
  { icon: SiAwsamplify, name: "AWS", color: "from-orange-400 to-yellow-500" },
]

export default function AppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const appHeroImages = [
  "/bg/bgapp1.png",
  "/bg/bgapp2.png",
  "/bg/bgapp4.png",
  "/bg/bgapp5.png",
  "/bg/bgapp6.png",
  "/bg/bgapp7.png",
]

const [currentBg, setCurrentBg] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBg((prev) => (prev + 1) % appHeroImages.length)
  }, 5000) // 5s feels premium

  return () => clearInterval(interval)
}, [])


  return (
    <section className="min-h-screen bg-slate-50 py-16 text-slate-900">
      <div className="max-w-full mx-auto">

        {/* ================= HERO ================= */}
<div className="relative isolate overflow-hidden w-full min-h-[75vh] flex items-start justify-center pt-26">

  {/* Background */}
  <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
    <AnimatePresence initial={false}>
      <motion.div
        key={currentBg}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${appHeroImages[currentBg]})`,
        }}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </AnimatePresence>
    {/* <div className="absolute inset-0 bg-black/20" /> */}
        <div className="absolute inset-0 bg-slate-950/20 " />
  </div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 text-center px-6"
  >
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
      App Development
    </h1>

    <p className="text-xl text-slate-100 max-w-3xl mx-auto mb-4">
      We design and build high-performance mobile applications for iOS,
      Android, and cross-platform environments.
    </p>

    <p className="text-lg text-slate-100 max-w-4xl mx-auto">
      From idea validation to App Store launch and long-term growth,
      COSMINNOX delivers scalable, secure mobile apps.
    </p>
  </motion.div>
</div>


        {/* ================= FEATURES ================= */}
       <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10 mb-16"

>
  {[
    "Native iOS & Android Development",
    "React Native & Flutter Apps",
    "UX-Focused App Design",
    "Secure API & Backend Integration",
    "App Store & Play Store Deployment",
    "Performance & Battery Optimization",
  ].map((feature, i) => (
    <motion.div
      key={i}
      custom={i}
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        group
        flex
        gap-6
        items-center
        bg-white
        rounded-xl
        p-4
        border border-slate-200
        shadow-sm
        transition-all duration-300
        hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]
        hover:border-blue-300
      "
    >
      {/* ===== NUMBER CIRCLE ===== */}
      <div
        className="
          w-12 h-12
          rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white
          flex items-center justify-center
          font-bold
          text-lg
          shrink-0
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {String(i + 1).padStart(2, "0")}
      </div>

      {/* ===== TEXT ===== */}
      <p
        className="
          text-lg
          text-slate-700
          group-hover:text-slate-900
          transition-colors
        "
      >
        {feature}
      </p>

      {/* ===== HOVER GLOW ===== */}
      <div
        className="
          absolute inset-0
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-purple-500/10
        "
      />
    </motion.div>
  ))}
</motion.div>


      

        {/* ================= DEVELOPMENT PROCESS ================= */}
        <div className="mb-16">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-16 text-center"
  >
    Our App Development Process
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    {[
      "Idea Discovery & Requirement Analysis",
      "Wireframing & UI/UX Design",
      "App Architecture & Development",
      "API Integration & Testing",
      "App Store Submission",
      "Monitoring, Updates & Scaling",
    ].map((step, i) => (
      <motion.div
        key={i}
        custom={i}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          group
          flex
          gap-6
          items-center
          bg-white/80
          backdrop-blur-xl
          rounded-xl
          p-4
          border border-slate-200
          shadow-sm
          transition-all duration-300
          hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]
          hover:border-blue-300
        "
      >
        {/* ===== NUMBER CIRCLE ===== */}
        <div
          className="
            w-12 h-12
            rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white
            flex items-center justify-center
            font-bold
            text-lg
            shrink-0
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {String(i + 1).padStart(2, "0")}
        </div>

        {/* ===== TEXT ===== */}
        <p
          className="
            text-lg
            text-slate-700
            group-hover:text-slate-900
            transition-colors
          "
        >
          {step}
        </p>

        {/* ===== HOVER GLOW ===== */}
        <div
          className="
            absolute inset-0
            rounded-xl
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-purple-500/10
          "
        />
      </motion.div>
    ))}
  </div>
</div>

<section className="relative mb-28 overflow-hidden">
      
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[800px] h-[800px]
          bg-cyan-300/20
          rounded-full
          blur-[140px]
        " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-extrabold text-slate-900 mb-4">
            Technologies We Use in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              App Development
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We leverage modern, battle-tested technologies to build secure,
            scalable, and high-performance mobile applications.
          </p>
        </motion.div>

        {/* ===== TECHNOLOGY GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {technologies.map((tech, i) => {
            const Icon = tech.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  relative
                  group
                  bg-white/80
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  border border-slate-200
                  shadow-sm
                  flex flex-col items-center justify-center
                  transition-all duration-300
                  hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                  hover:border-blue-300
                "
              >
                {/* ===== ICON ===== */}
                <div
                  className={`
                    w-16 h-16 mb-5
                    rounded-2xl
                    bg-gradient-to-br ${tech.color}
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon size={30} />
                </div>

                {/* ===== NAME ===== */}
                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  {tech.name}
                </h3>

                {/* ===== HOVER GLOW ===== */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                    bg-gradient-to-br
                    from-blue-500/10
                    via-transparent
                    to-purple-500/10
                  "
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>

  {/* ================= PLATFORMS ================= */}
        <div className="mb-16 max-w-6xl mx-auto">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-14 text-center"
  >
    Platforms We Build For
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        icon: <Apple size={30} />,
        title: "iOS Development",
        desc:
          "Swift & SwiftUI-based apps optimized for performance, security, and seamless Apple ecosystem integration.",
      },
      {
        icon: <FaAndroid size={30} />,
        title: "Android Development",
        desc:
          "Kotlin-based Android apps designed to scale across devices and OS versions.",
      },
      {
        icon: <Layers size={30} />,
        title: "Cross-Platform Apps",
        desc:
          "React Native & Flutter apps that reduce cost while delivering near-native performance.",
      },
    ].map((platform, i) => (
      <motion.div
        key={i}
        custom={i}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          group
          bg-white/80
          backdrop-blur-xl
          rounded-2xl
          p-8
          border border-slate-200
          shadow-sm
          transition-all duration-300
          hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
          hover:border-blue-300
        "
      >
        {/* ===== ICON ===== */}
        <div
          className="
            w-14 h-14 mb-5 rounded-xl
            bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
            text-white
            flex items-center justify-center
            shadow-lg
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {platform.icon}
        </div>

        {/* ===== TITLE ===== */}
        <h3
          className="
            text-xl font-bold mb-3 text-slate-900
            group-hover:text-blue-700
            transition-colors
          "
        >
          {platform.title}
        </h3>

        {/* ===== DESCRIPTION ===== */}
        <p className="text-slate-600 leading-relaxed">
          {platform.desc}
        </p>

        {/* ===== HOVER GLOW ===== */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-purple-500/10
          "
        />
      </motion.div>
    ))}
  </div>
</div>


        {/* ================= SECURITY ================= */}
        <div
  className="
    relative
    group
    mb-18
    bg-white/80
    backdrop-blur-xl
    rounded-3xl
    p-8
    sm:p-10
    lg:p-12
    border border-slate-200
    shadow-sm
    transition-all duration-300
    hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
    hover:border-blue-300
    max-w-6xl mx-auto
  "
>
  {/* ===== HEADER ===== */}
      <div className="flex items-center gap-4">
        <div
          className="
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
            flex items-center justify-center
            text-white
            shadow-lg
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <Shield size={28} />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Security & Quality Assurance
        </h2>
      </div>

  {/* ===== DESCRIPTION ===== */}
  <p className="text-slate-600 max-w-4xl leading-relaxed mb-8 text-base sm:text-lg">
    Security and performance are baked into every stage of our mobile
    development lifecycle. We follow industry best practices to protect
    your data and users.
  </p>

  {/* ===== FEATURES LIST ===== */}
  <ul className="grid sm:grid-cols-2   gap-4 text-slate-700">
    {[
      "Secure authentication & authorization",
      "Encrypted data storage",
      "Automated & manual testing",
      "Performance benchmarking",
      "App Store compliance checks",
      "Ongoing security updates",
    ].map((item, i) => (
      <li
        key={i}
        className="
          flex items-center gap-3
          bg-slate-50
          rounded-xl
          px-4 py-3
          border border-slate-200
          transition-all duration-300
          group-hover:bg-white
        "
      >
        <span
          className="
            w-2 h-2
            rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600
            shrink-0
          "
        />
        <span className="text-sm sm:text-base">{item}</span>
      </li>
    ))}
  </ul>

  {/* ===== HOVER GLOW ===== */}
  <div
    className="
      absolute inset-0
      rounded-3xl
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
      pointer-events-none
      bg-gradient-to-br
      from-blue-500/10
      via-transparent
      to-purple-500/10
    "
  />
</div>


        {/* ================= FAQ ================= */}
        <div className=" max-w-5xl mx-auto mb-14">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          {[
            {
              q: "How long does it take to build a mobile app?",
              a: "Most apps take between 8–16 weeks depending on complexity and features.",
            },
            {
              q: "Do you provide post-launch support?",
              a: "Yes, we offer ongoing maintenance, updates, and feature enhancements.",
            },
            {
              q: "Which is better: native or cross-platform?",
              a: "It depends on your goals. We help you choose the right approach based on performance, budget, and timeline.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="bg-white rounded-xl p-6 mb-4 shadow-sm cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {faq.q}
              </h3>
              {openFaq === i && (
                <p className="text-slate-600 mt-3">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
        >
          <div>
            <h2 className="text-4xl font-bold mb-3">
              Ready to Build Your App?
            </h2>
            <p className="text-white/90 text-lg">
              Let’s turn your idea into a scalable, production-ready mobile application.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition"
          >
            Talk to Our Experts
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
