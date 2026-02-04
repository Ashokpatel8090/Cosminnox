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



// "use client"

// import { motion } from "framer-motion"
// import {
//  // For Industry-Academia Collaboration
//   Cpu, // For Deep-Tech Focus (Semiconductor/AI)
//   ShieldCheck,
//   Coins,
//   Layers,
//   Activity// For Government & Private Funding
// } from "lucide-react"
// import { useUserMode } from "@/context/UserModeContext"

// // --- NEW DATA STRUCTURE ---
// // const benefits = [
// //   {
// //     icon: Target,
// //     title: "Startup Acceleration",
// //     desc: "Expert mentorship, structured growth programs, and tailored resources to push your venture forward.",
// //     color: "from-blue-600 to-cyan-500",
// //   },
// //   {
// //     icon: Telescope,
// //     title: "Industry-Academia Collaboration",
// //     desc: "Bridging cutting-edge research with real-world commercial applications and market access.",
// //     color: "from-purple-600 to-pink-500",
// //   },
// //   {
// //     icon: Cpu,
// //     title: "Deep-Tech Focus",
// //     desc: "Dedicated support for high-impact tech ventures in AI, Robotics, Semiconductors, and Automation.",
// //     color: "from-green-500 to-teal-400",
// //   },
// //   {
// //     icon: DollarSign,
// //     title: "Global Funding Access",
// //     desc: "Connecting you with Startup India, NITI Aayog, and a network of global government and private investors.",
// //     color: "from-yellow-500 to-orange-500",
// //   },
// // ]

// const modules = [
//   {
//     icon: Cpu,
//     title: "Execution Intelligence",
//     desc: "Decision frameworks, playbooks, and AI-guided actions for daily founder problems.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Credential & Trust Layer",
//     desc: "Industry-recognized certifications that convert skills into market credibility.",
//   },
//   {
//     icon: Layers,
//     title: "Service Infrastructure",
//     desc: "On-demand legal, compliance, tech, and growth services — pay only when needed.",
//   },
//   {
//     icon: Coins,
//     title: "Tokenized Incentives (IDCoins)",
//     desc: "Earn by learning, mentoring, and contributing. Spend on tools, services, and visibility.",
//   },
//   {
//     icon: Activity,
//     title: "Founder Health Stack",
//     desc: "Performance nutrition and health systems designed for long-term founder endurance.",
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

// const systemFailures = [
//   {
//     title: "Unstructured Execution",
//     desc: "Founders operate on instinct instead of repeatable decision frameworks.",
//   },
//   {
//     title: "No Credibility Signal",
//     desc: "Skills exist, but there is no trusted system to validate them in the market.",
//   },
//   {
//     title: "Burnout Before Scale",
//     desc: "Health, focus, and endurance collapse long before the business stabilizes.",
//   },
// ]
// // const challenges = [
// //   {
// //     icon: Clock, // Represents delays/slowdowns
// //     title: "Funding Delays",
// //     desc: "Bureaucratic slowdowns, risk-averse grants, and a critical lack of high-risk investment capital bottleneck early-stage growth.",
// //     color: "from-red-600 to-orange-500",
// //   },
// //   {
// //     icon: TrendingDown, // Represents weak strategy/failure
// //     title: "Weak Commercialization",
// //     desc: "Valuable research often remains unused due to limited industry-academia tie-ups and an over-reliance on incremental, rather than deep, innovation.",
// //     color: "from-amber-600 to-yellow-500",
// //   },
// //   {
// //     icon: ServerCrash, // Represents infrastructure deficit
// //     title: "Talent & Infrastructure Deficit",
// //     desc: "Challenges include brain drain, a lack of sovereign AI compute power, and heavy dependence on costly imported hardware for scaling.",
// //     color: "from-gray-600 to-slate-500",
// //   },
// // ]

// // --- UPDATED COMPONENT ---
// export default function HomeHighlights() {
//   const { mode } = useUserMode()
//   function StudentHighlights() {
//   return (
//     <>
//       {/* SECTION 1 */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
//             Learn Skills That Actually Matter
//           </h2>
//           <p className="text-lg text-slate-600">
//             Structured learning paths, real projects, and mentorship —
//             built for students who want real careers, not certificates.
//           </p>
//         </div>
//       </section>

//       {/* SECTION 2 */}
//       <section className="py-12 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "AI-Guided Learning",
//               desc: "Personalized learning paths based on your goals and strengths.",
//             },
//             {
//               title: "Industry Mentorship",
//               desc: "Learn directly from founders, engineers, and operators.",
//             },
//             {
//               title: "Career Readiness",
//               desc: "Projects, credentials, and proof of work — not just theory.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-2xl bg-white shadow border border-slate-200"
//             >
//               <h3 className="text-xl font-bold mb-2 text-slate-900">
//                 {item.title}
//               </h3>
//               <p className="text-slate-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 3 */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h3 className="text-3xl font-bold text-slate-900 mb-4">
//             From Learning → Career
//           </h3>
//           <p className="text-slate-600 max-w-3xl mx-auto">
//             Cosminnox helps you move from skills to internships, startups,
//             and real opportunities — step by step.
//           </p>
//         </div>
//       </section>
//     </>
//   )
// }

//   return (
//     <>
//       {/* ================= SECTION 1: WHY COSMINNOX? (Banner) ================= */}
//       <section className="py-10 bg-transparants overflow-hidden relative">
//         <div className="max-w-7xl mx-auto px-4 relative z-10">

//           {/* Subtle Background Effect - Adjusted to a softer color for light background */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px]" />

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true, amount: 0.5 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-snug">
//               The Founder{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                 Operating System
//               </span>
//             </h2>

//             {/* Text color changed from slate-300 to slate-700 for readability on a light background */}
//             <p className="text-lg md:text-xl text-slate-700 mb-6">
//               Built for founders who want clarity over complexity, this system aligns strategy, execution, and growth into one operating rhythm. Five integrated layers that replace scattered tools,
//               expensive advisors, and trial-and-error execution.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SECTION 2: BENEFITS (Grid) ================= */}
//       <section className="py-10 bg-transparants relative z-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
//             The Five Core Layers of
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               {" "}Cosminnox
//             </span>
//           </h3>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {modules.map((m, i) => {
//               const Icon = m.icon
//               return (
//                 <motion.div
//                   key={i}
//                   variants={itemVariants}
//                   whileHover={{
//                     y: -8,
//                     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
//                   }}
//                   transition={{ duration: 0.3 }}
//                   // UPDATED: hover:bg-cyan-50 for a clean brand hover color
//                   className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
//                 >
//                   <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}>
//                     <Icon size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">{m.title}</h3>

//                   <p className="text-slate-600 mb-4 flex-grow">
//                     {m.desc}
//                   </p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

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
//               Why Founders Need
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                 {" "}Systems
//               </span>
//             </h2>

//             <p className="text-lg md:text-xl text-slate-700">
//               Most founders don’t fail because of lack of effort.
//               They fail because they operate without systems.
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
//             {systemFailures.map((f, i) => (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl"
//               >
//                 <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
//                 <p className="text-slate-600">{f.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }



///working code below/////////
// "use client"

// import { motion } from "framer-motion"
// import {
//   Cpu,
//   ShieldCheck,
//   Coins,
//   Layers,
//   Activity,
// } from "lucide-react"
// import { useUserMode } from "@/context/UserModeContext"

// /* ================= STUDENT CONTENT ================= */

// function StudentHighlights() {
//   return (
//     <>
//       {/* ================= HERO TEXT ================= */}
//       <section className="py-20 relative overflow-hidden">
//         {/* soft glow */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//             w-[520px] h-[520px] bg-purple-400/20 rounded-full blur-[120px]" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto px-4 text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//             Learn Skills That{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Actually Matter
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//             Structured learning paths, real-world projects, and mentorship —
//             built for students who want outcomes, not just certificates.
//           </p>
//         </motion.div>
//       </section>

//       {/* ================= CARDS ================= */}
//       <section className="py-20 bg-slate-50">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.12 },
//             },
//           }}
//           className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8"
//         >
//           {[
//             {
//               title: "AI-Guided Learning",
//               desc: "Personalized learning paths tailored to your strengths, goals, and pace.",
//             },
//             {
//               title: "Industry Mentorship",
//               desc: "Learn directly from founders, engineers, and operators building real products.",
//             },
//             {
//               title: "Career Readiness",
//               desc: "Projects, credentials, and proof of work that actually get you hired.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               whileHover={{ y: -6 }}
//               transition={{ duration: 0.3 }}
//               className="
//                 group p-8 rounded-3xl
//                 bg-white border border-slate-200
//                 shadow-xl hover:shadow-2xl
//                 transition-all duration-300
//               "
//             >
//               <h3 className="text-xl font-bold mb-3 text-slate-900 
//                 group-hover:text-purple-600 transition-colors">
//                 {item.title}
//               </h3>
//               <p className="text-slate-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ================= CLOSING ================= */}
//       <section className="py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto px-4 text-center"
//         >
//           <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
//             From{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Learning → Career
//             </span>
//           </h3>

//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             Cosminnox helps you move from skills to internships, startups,
//             and real opportunities — step by step, with clarity and direction.
//           </p>
//         </motion.div>
//       </section>
//     </>
//   )
// }

// /* ================= FOUNDER CONTENT (UNCHANGED) ================= */

// const modules = [
//   {
//     icon: Cpu,
//     title: "Execution Intelligence",
//     desc: "Decision frameworks, playbooks, and AI-guided actions for daily founder problems.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Credential & Trust Layer",
//     desc: "Industry-recognized certifications that convert skills into market credibility.",
//   },
//   {
//     icon: Layers,
//     title: "Service Infrastructure",
//     desc: "On-demand legal, compliance, tech, and growth services — pay only when needed.",
//   },
//   {
//     icon: Coins,
//     title: "Tokenized Incentives (IDCoins)",
//     desc: "Earn by learning, mentoring, and contributing. Spend on tools, services, and visibility.",
//   },
//   {
//     icon: Activity,
//     title: "Founder Health Stack",
//     desc: "Performance nutrition and health systems designed for long-term founder endurance.",
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// }

// const systemFailures = [
//   {
//     title: "Unstructured Execution",
//     desc: "Founders operate on instinct instead of repeatable decision frameworks.",
//   },
//   {
//     title: "No Credibility Signal",
//     desc: "Skills exist, but there is no trusted system to validate them in the market.",
//   },
//   {
//     title: "Burnout Before Scale",
//     desc: "Health, focus, and endurance collapse long before the business stabilizes.",
//   },
// ]

// function FounderHighlights() {
//   return (
//     <>
// <section className="py-10 bg-transparants overflow-hidden relative">
//         <div className="max-w-7xl mx-auto px-4 relative z-10">

//           {/* Subtle Background Effect - Adjusted to a softer color for light background */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px]" />

//          <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true, amount: 0.5 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-snug">
//               The Founder{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                 Operating System
//               </span>
//             </h2>

//             {/* Text color changed from slate-300 to slate-700 for readability on a light background */}
//             <p className="text-lg md:text-xl text-slate-700 mb-6">
//               Built for founders who want clarity over complexity, this system aligns strategy, execution, and growth into one operating rhythm. Five integrated layers that replace scattered tools,
//               expensive advisors, and trial-and-error execution.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SECTION 2: BENEFITS (Grid) ================= */}
//       <section className="py-10 bg-transparants relative z-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
//             The Five Core Layers of
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               {" "}Cosminnox
//             </span>
//           </h3>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {modules.map((m, i) => {
//               const Icon = m.icon
//               return (
//                 <motion.div
//                   key={i}
//                   variants={itemVariants}
//                   whileHover={{
//                     y: -8,
//                     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
//                   }}
//                   transition={{ duration: 0.3 }}
//                   // UPDATED: hover:bg-cyan-50 for a clean brand hover color
//                   className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
//                 >
//                   <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}>
//                     <Icon size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">{m.title}</h3>

//                   <p className="text-slate-600 mb-4 flex-grow">
//                     {m.desc}
//                   </p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

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
//               Why Founders Need
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//                 {" "}Systems
//               </span>
//             </h2>

//             <p className="text-lg md:text-xl text-slate-700">
//               Most founders don’t fail because of lack of effort.
//               They fail because they operate without systems.
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
//             {systemFailures.map((f, i) => (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl"
//               >
//                 <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
//                 <p className="text-slate-600">{f.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// /* ================= MAIN EXPORT ================= */

// export default function HomeHighlights() {
//   const { mode } = useUserMode()
//   return mode === "student" ? <StudentHighlights /> : <FounderHighlights />
// }



"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Hammer,
  Rocket,
  Briefcase,
  Lightbulb,
  Coins,
  TrendingUp,
} from "lucide-react"
import { useUserMode } from "@/context/UserModeContext"

function StudentHighlights() {
  const steps = [
    {
      icon: BookOpen,
      title: "Learn",
      label: "MASTER SKILLS",
      desc: "Access curated curriculum and workshops on modern tech stacks and tools.",
    },
    {
      icon: Hammer,
      title: "Build",
      label: "REAL PRODUCTS",
      desc: "Don’t just do tutorials. Build real MVPs for real founders in the network.",
    },
    {
      icon: Rocket,
      title: "Prove",
      label: "BUILD PORTFOLIO",
      desc: "Create a track record of shipped products that speaks louder than a resume.",
    },
    {
      icon: Briefcase,
      title: "Launch",
      label: "CAREER & INTERNSHIPS",
      desc: "Get hired by startups you helped build or launch your own venture.",
    },
  ]

  return (
    <>
      <section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          The Student Journey
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Practical experience that bridges the gap between campus and career.
        </p>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-4 uppercase">
                  {s.label}
                </p>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}


function FounderHighlights() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Think",
      label: "VALIDATE IDEA",
      desc: "Refine your concept with market research and expert feedback before building.",
    },
    {
      icon: Hammer,
      title: "Build",
      label: "MVP DEVELOPMENT",
      desc: "Leverage our student talent pool to build your MVP quickly.",
    },
    {
      icon: Rocket,
      title: "Prove",
      label: "GAIN TRACTION",
      desc: "Launch to community beta testers and gather critical user data.",
    },
    {
      icon: Coins,
      title: "Fund",
      label: "SECURE CAPITAL",
      desc: "Get introduced to angel investors and micro-VCs.",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      label: "GROWTH",
      desc: "Expand your team and operations with proven scaling frameworks.",
    },
  ]

  return (
    <>
      <section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          The Founder Journey
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          From idea validation to funding and scale — one clear operating path.
        </p>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-sm font-semibold text-cyan-600 mb-4 uppercase">
                  {s.label}
                </p>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}


export default function HomeHighlights() {
  const { mode } = useUserMode()
  return mode === "student" ? <StudentHighlights /> : <FounderHighlights />
}
