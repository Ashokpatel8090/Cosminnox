// "use client"

// import { motion } from "framer-motion"
// import {
//   ArrowRight,
//   Target, // For Startup Acceleration
//   Telescope, // For Industry-Academia Collaboration
//   Cpu, // For Deep-Tech Focus (Semiconductor/AI)
//   DollarSign, // For Government & Private Funding
// } from "lucide-react"
// import { Clock, TrendingDown, ServerCrash } from "lucide-react"
// import Link from "next/link"

// // --- NEW DATA STRUCTURE ---
// const benefits = [
//   {
//     icon: Target,
//     title: "Startup Acceleration",
//     desc: "Expert mentorship, structured growth programs, and tailored resources to push your venture forward.",
//     color: "from-blue-600 to-cyan-500",
//   },
//   {
//     icon: Telescope,
//     title: "Industry-Academia Collaboration",
//     desc: "Bridging cutting-edge research with real-world commercial applications and market access.",
//     color: "from-purple-600 to-pink-500",
//   },
//   {
//     icon: Cpu,
//     title: "Deep-Tech Focus",
//     desc: "Dedicated support for high-impact tech ventures in AI, Robotics, Semiconductors, and Automation.",
//     color: "from-green-500 to-teal-400",
//   },
//   {
//     icon: DollarSign,
//     title: "Global Funding Access",
//     desc: "Connecting you with Startup India, NITI Aayog, and a network of global government and private investors.",
//     color: "from-yellow-500 to-orange-500",
//   },
// ]

// // Framer Motion Variants for Staggered Fade-In
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// }

// const challenges = [
//   {
//     icon: Clock, // Represents delays/slowdowns
//     title: "Funding Delays",
//     desc: "Bureaucratic slowdowns, risk-averse grants, and a critical lack of high-risk investment capital bottleneck early-stage growth.",
//     color: "from-red-600 to-orange-500",
//   },
//   {
//     icon: TrendingDown, // Represents weak strategy/failure
//     title: "Weak Commercialization",
//     desc: "Valuable research often remains unused due to limited industry-academia tie-ups and an over-reliance on incremental, rather than deep, innovation.",
//     color: "from-amber-600 to-yellow-500",
//   },
//   {
//     icon: ServerCrash, // Represents infrastructure deficit
//     title: "Talent & Infrastructure Deficit",
//     desc: "Challenges include brain drain, a lack of sovereign AI compute power, and heavy dependence on costly imported hardware for scaling.",
//     color: "from-gray-600 to-slate-500",
//   },
// ]

// // --- UPDATED COMPONENT ---
// export default function HomeHighlights() {
//   return (
//     <>
//       {/* ================= SECTION 1: WHY COSMINNOX? (Banner) ================= */}
//       <section className="py-10 bg-transparants overflow-hidden relative">
//   <div className="max-w-7xl mx-auto px-4 relative z-10">
    
//     {/* Subtle Background Effect - Adjusted to a softer color for light background */}
//     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px]" />
    
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       viewport={{ once: true, amount: 0.5 }}
//       className="text-center max-w-4xl mx-auto"
//     >
//       <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-snug">
//         Why only{" "}
//         <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//           COSMINNOX?
//         </span>
//       </h2>

//       {/* Text color changed from slate-300 to slate-700 for readability on a light background */}
//       <p className="text-lg md:text-xl text-slate-700 mb-8">
//         India’s startup ecosystem struggles with funding access, mentorship,
//         and commercialization of deep-tech innovations. COSMINNOX bridges this
//         gap by offering structured incubation, investor matchmaking, and
//         industry-academia collaborations to help startups scale and compete globally.
//       </p>
//     </motion.div>
//   </div>
// </section>

//       {/* ================= SECTION 2: BENEFITS (Grid) ================= */}
//       <section className="py-10 bg-transparants relative z-20"> 
//   <div className="max-w-7xl mx-auto px-4">
//     <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
//       Benefits of Choosing 
//       {/* Headline Gradient is already correct */}
//       <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"> COSMINNOX</span> 
//     </h3>

//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
//     >
//       {benefits.map((s, i) => {
//         const Icon = s.icon
//         return (
//           <motion.div
//             key={i}
//             variants={itemVariants}
//             whileHover={{ 
//               y: -8, 
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
//             }}
//             transition={{ duration: 0.3 }}
//             // UPDATED: hover:bg-cyan-50 for a clean brand hover color
//             className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
//           >
//             <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}>
//               <Icon size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">{s.title}</h3>

//             <p className="text-slate-600 mb-4 flex-grow">
//               {s.desc}
//             </p>
//           </motion.div>
//         )
//       })}
//     </motion.div>
//   </div>
// </section>

//       {/* ================= NEW SECTION: STARTUP CHALLENGES ================= */}
//       <section className="py-12 bg-transparent relative">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="text-center max-w-4xl mx-auto mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-snug">
//               Key Startup{" "}
//               {/* UPDATED: Headline gradient changed to brand colors */}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                 Challenges
//               </span>
//             </h2>

//             <p className="text-lg md:text-xl text-slate-700">
//               Despite India’s rapid startup growth, many businesses fail due to funding bottlenecks, weak commercialization strategies, and limited deep-tech focus.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             // Uses a responsive grid of 1 to 3 columns
//             className="grid sm:grid-cols-1 md:grid-cols-3 gap-8" 
//           >
//             {challenges.map((c, i) => {
//               const Icon = c.icon
//               return (
//                 <motion.div
//                   key={i}
//                   variants={itemVariants}
//                   whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
//                   transition={{ duration: 0.3 }}
//                   // Card now uses light background with strong border/shadow
//                   // UPDATED: Hover background changed to light blue brand color
//                   className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col transition-all duration-300 group hover:bg-blue-50"
//                 >
//                   {/* Icon with Brand Gradient Background */}
//                   {/* UPDATED: Icon background gradient changed to brand colors */}
//                   <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl`}>
//                     <Icon size={28} />
//                   </div>

//                   {/* Text color changed to dark */}
//                   {/* UPDATED: Hover text color changed to deep blue brand color */}
//                   <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{c.title}</h3>

//                   {/* Text color changed to dark */}
//                   <p className="text-slate-600 mb-4 flex-grow">
//                     {c.desc}
//                   </p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }



"use client"

import { motion } from "framer-motion"
import {
 // For Industry-Academia Collaboration
  Cpu, // For Deep-Tech Focus (Semiconductor/AI)
  ShieldCheck,
  Coins,
  Layers,
  Activity// For Government & Private Funding
} from "lucide-react"

// --- NEW DATA STRUCTURE ---
// const benefits = [
//   {
//     icon: Target,
//     title: "Startup Acceleration",
//     desc: "Expert mentorship, structured growth programs, and tailored resources to push your venture forward.",
//     color: "from-blue-600 to-cyan-500",
//   },
//   {
//     icon: Telescope,
//     title: "Industry-Academia Collaboration",
//     desc: "Bridging cutting-edge research with real-world commercial applications and market access.",
//     color: "from-purple-600 to-pink-500",
//   },
//   {
//     icon: Cpu,
//     title: "Deep-Tech Focus",
//     desc: "Dedicated support for high-impact tech ventures in AI, Robotics, Semiconductors, and Automation.",
//     color: "from-green-500 to-teal-400",
//   },
//   {
//     icon: DollarSign,
//     title: "Global Funding Access",
//     desc: "Connecting you with Startup India, NITI Aayog, and a network of global government and private investors.",
//     color: "from-yellow-500 to-orange-500",
//   },
// ]

const modules = [
  {
    icon: Cpu,
    title: "Execution Intelligence",
    desc: "Decision frameworks, playbooks, and AI-guided actions for daily founder problems.",
  },
  {
    icon: ShieldCheck,
    title: "Credential & Trust Layer",
    desc: "Industry-recognized certifications that convert skills into market credibility.",
  },
  {
    icon: Layers,
    title: "Service Infrastructure",
    desc: "On-demand legal, compliance, tech, and growth services — pay only when needed.",
  },
  {
    icon: Coins,
    title: "Tokenized Incentives (IDCoins)",
    desc: "Earn by learning, mentoring, and contributing. Spend on tools, services, and visibility.",
  },
  {
    icon: Activity,
    title: "Founder Health Stack",
    desc: "Performance nutrition and health systems designed for long-term founder endurance.",
  },
]

// Framer Motion Variants for Staggered Fade-In
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const systemFailures = [
  {
    title: "Unstructured Execution",
    desc: "Founders operate on instinct instead of repeatable decision frameworks.",
  },
  {
    title: "No Credibility Signal",
    desc: "Skills exist, but there is no trusted system to validate them in the market.",
  },
  {
    title: "Burnout Before Scale",
    desc: "Health, focus, and endurance collapse long before the business stabilizes.",
  },
]
// const challenges = [
//   {
//     icon: Clock, // Represents delays/slowdowns
//     title: "Funding Delays",
//     desc: "Bureaucratic slowdowns, risk-averse grants, and a critical lack of high-risk investment capital bottleneck early-stage growth.",
//     color: "from-red-600 to-orange-500",
//   },
//   {
//     icon: TrendingDown, // Represents weak strategy/failure
//     title: "Weak Commercialization",
//     desc: "Valuable research often remains unused due to limited industry-academia tie-ups and an over-reliance on incremental, rather than deep, innovation.",
//     color: "from-amber-600 to-yellow-500",
//   },
//   {
//     icon: ServerCrash, // Represents infrastructure deficit
//     title: "Talent & Infrastructure Deficit",
//     desc: "Challenges include brain drain, a lack of sovereign AI compute power, and heavy dependence on costly imported hardware for scaling.",
//     color: "from-gray-600 to-slate-500",
//   },
// ]

// --- UPDATED COMPONENT ---
export default function HomeHighlights() {
  return (
    <>
      {/* ================= SECTION 1: WHY COSMINNOX? (Banner) ================= */}
      <section className="py-10 bg-transparants overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Subtle Background Effect - Adjusted to a softer color for light background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-snug">
              The Founder{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Operating System
              </span>
            </h2>

            {/* Text color changed from slate-300 to slate-700 for readability on a light background */}
            <p className="text-lg md:text-xl text-slate-700 mb-6">
              Built for founders who want clarity over complexity, this system aligns strategy, execution, and growth into one operating rhythm. Five integrated layers that replace scattered tools,
              expensive advisors, and trial-and-error execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: BENEFITS (Grid) ================= */}
      <section className="py-10 bg-transparants relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
            The Five Core Layers of
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Cosminnox
            </span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {modules.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                  // UPDATED: hover:bg-cyan-50 for a clean brand hover color
                  className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">{m.title}</h3>

                  <p className="text-slate-600 mb-4 flex-grow">
                    {m.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= NEW SECTION: STARTUP CHALLENGES ================= */}
      <section className="py-12 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-snug">
              Why Founders Need
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}Systems
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-700">
              Most founders don’t fail because of lack of effort.
              They fail because they operate without systems.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // Uses a responsive grid of 1 to 3 columns
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {systemFailures.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}