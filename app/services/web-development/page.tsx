// "use client"

// // import { motion } from "framer-motion"
// // import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"


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

// export default function WebDevelopmentPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null)

//   const heroImages = [
//   "/bg/hero1.png",
//   "/bg/hero2.png",
//   "/bg/hero3.png",
//   "/bg/hero4.png",
//   "/bg/hero5.png",
// ]

// const [currentBg, setCurrentBg] = useState(0)

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentBg((prev) => (prev + 1) % heroImages.length)
//   }, 7000) // change every 4s

//   return () => clearInterval(interval)
// }, [])




//   return (
//     <section className="min-h-screen  text-slate-900 mt-16">
//       {/* ================= HERO ================= */}
//        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
//         {/* <div className="absolute inset-0">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
//           <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
//         </div> */}

//         {/* ================= HERO BACKGROUND SLIDER ================= */}
// {/* ================= HERO BACKGROUND SLIDER (RIGHT ➜ LEFT) ================= */}
// <div className="absolute inset-0 overflow-hidden">
//   <AnimatePresence initial={false}>
//     <motion.div
//       key={currentBg}
//       className="absolute inset-0 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${heroImages[currentBg]})`,
//       }}
//       initial={{ x: "100%", opacity: 1 }}
//       animate={{ x: "0%" }}
//       exit={{ x: "-100%" }}
//       transition={{
//         duration: 1.2,
//         ease: "easeInOut",
//       }}
//     />
//   </AnimatePresence>

//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/40" />
// </div>



//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-6xl mx-auto px-6 text-center"
//         >
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent py-6  leading-tight">
//   Web Development
// </h1>

// {/* <p className="text-xl text-slate-100 dark:text-slate-300 max-w-3xl mx-auto mb-6">
//   We build fast, scalable, and secure web applications using modern
//   frameworks like Next.js, React, and cloud-native architectures.
// </p> */}

// <p className="text-lg text-slate-100 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
//   From high-performance marketing websites to complex enterprise platforms,
//   COSMINNOX helps businesses transform ideas into reliable, user-centric
//   digital products. Our focus on performance, security, and scalability
//   ensures your application is ready to grow with your business.
// </p>


// {/* CTA buttons */}
// <div className="flex flex-wrap justify-center gap-4">
//   <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/40 transition">
//     Get Started
//   </button>

//   <button className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-100 dark:text-slate-300 font-semibold hover:shadow-xl hover:shadow-blue-100/40 dark:hover:bg-slate-800 transition">
//     View Our Work
//   </button>
// </div>

//         </motion.div>
//       </section>

//     {/* ================= STATS ================= */}
//       <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-y border-blue-200/20">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//           {[
//             { label: "Projects Delivered", value: "40+" },
//             { label: "Happy Clients", value: "96 %" },
//             { label: "Avg Performance Score", value: "94%" },
//             { label: "Years Experience", value: "1+" },
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeUp}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                 {stat.value}
//               </div>
//               <p className="text-slate-600 dark:text-slate-400 font-medium">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <div className="py-12 px-6">
//   <div className="max-w-6xl mx-auto">
//     <motion.h2
//       initial="hidden"
//       whileInView="visible"
//       variants={fadeUp}
//       viewport={{ once: true }}
//       className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
//     >
//       Our Web Development Services
//     </motion.h2>

//     <div className="grid md:grid-cols-3 gap-10">
//       {[
//         {
//           title: "Custom Web Apps",
//           desc:
//             "Tailored solutions built to solve real business problems with clean architecture.",
//         },
//         {
//           title: "Frontend Engineering",
//           desc:
//             "Pixel-perfect UI using React, Next.js, Tailwind, and motion-driven UX.",
//         },
//         {
//           title: "Backend Development",
//           desc:
//             "Secure APIs, authentication, databases, and scalable server architecture.",
//         },
//         {
//           title: "Mobile App Development",
//           desc:
//             "High-performance mobile applications for Android and iOS with modern UX.",
//         },
//         {
//           title: "Flutter Development",
//           desc:
//             "Cross-platform Flutter apps with a single codebase and native performance.",
//         },
//         {
//           title: "React Native Development",
//           desc:
//             "Scalable React Native apps delivering smooth, native-like experiences.",
//         },
//         {
//           title: "E-commerce Solutions",
//           desc:
//             "High-converting stores with payments, carts, and order management.",
//         },
//         {
//           title: "Performance Optimization",
//           desc:
//             "Lightning-fast load times, SEO optimization, and Core Web Vitals.",
//         },
//         {
//           title: "Maintenance & Support",
//           desc:
//             "Long-term support, monitoring, and continuous improvements.",
//         },
        
//       ].map((service, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           initial="hidden"
//           whileInView="visible"
//           whileHover={{ y: -10 }}
//           variants={fadeUp}
//           viewport={{ once: true }}
//           className="
//             group relative rounded-2xl p-8
//             bg-white
//             border border-slate-200
//             transition-all duration-300
//             hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50
//             hover:shadow-xl hover:shadow-blue-500/20
//           "
//         >
//           {/* Gradient Border on Hover */}
//           <div className="
//             pointer-events-none absolute inset-0 rounded-2xl
//             border-2 border-transparent
//             group-hover:border-blue-500/30
//             transition-all duration-300
//           " />

//           <h3 className="
//             text-xl font-semibold mb-3
//             group-hover:text-blue-600
//             transition-colors duration-300
//           ">
//             {service.title}
//           </h3>

//           <p className="
//             text-slate-600
//             group-hover:text-slate-700
//             transition-colors duration-300
//           ">
//             {service.desc}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </div>


//       {/* ================= TECH STACK ================= */}
//       <div className="bg-slate-100 py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-10"
//           >
//             Technology Stack
//           </motion.h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               "Next.js",
//               "React",
//               "TypeScript",
//               "Tailwind CSS",
//               "Node.js",
//               "PostgreSQL",
//               "MongoDB",
//               "AWS / Vercel",
//             ].map((tech, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-xl py-6 text-center font-medium shadow-sm"
//               >
//                 {tech}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= PROCESS ================= */}
//       <div className="py-24 px-6">
//   <div className="max-w-6xl mx-auto">
//     <motion.h2
//       initial="hidden"
//       whileInView="visible"
//       variants={fadeUp}
//       viewport={{ once: true }}
//       className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent "
//     >
//       Our Development Process
//     </motion.h2>

//     {/* 2 items per row */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//       {[
//         "Requirement Analysis & Planning",
//         "UI/UX Design & Prototyping",
//         "Development & Integration",
//         "Testing & Quality Assurance",
//         "Deployment & Monitoring",
//         "Ongoing Support & Scaling",
//       ].map((step, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           viewport={{ once: true }}
//           className="flex gap-6 items-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
//         >
//           <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0">
//             {i + 1}
//           </div>

//           <p className="text-lg text-slate-700">
//             {step}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </div>


//       {/* ================= FAQ ================= */}
//       <div className="bg-white py-24 px-6">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             viewport={{ once: true }}
//             className="text-4xl font-bold mb-12"
//           >
//             Frequently Asked Questions
//           </motion.h2>

//           {[
//             {
//               q: "How long does a web project take?",
//               a: "Most projects take between 4–12 weeks depending on complexity.",
//             },
//             {
//               q: "Do you provide post-launch support?",
//               a: "Yes, we offer maintenance, monitoring, and scaling support.",
//             },
//             {
//               q: "Is the website SEO-friendly?",
//               a: "Absolutely. We follow best practices for SEO and performance.",
//             },
//           ].map((faq, i) => (
//             <div
//               key={i}
//               className="border-b py-6 cursor-pointer"
//               onClick={() =>
//                 setOpenFaq(openFaq === i ? null : i)
//               }
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
//       </div>

//       {/* ================= CTA ================= */}
//       <div className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Build Your Web Application?
//           </h2>
//           <p className="text-lg mb-10 opacity-90">
//             Let’s turn your idea into a high-performance digital product.
//           </p>
//           <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
//             Get Started
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



"use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const heroImages = [
  "/bg/hero1.png",
  "/bg/hero2.png",
  "/bg/hero3.png",
  "/bg/hero4.png",
  "/bg/hero5.png",
]

const [currentBg, setCurrentBg] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBg((prev) => (prev + 1) % heroImages.length)
  }, 7000) // change every 4s

  return () => clearInterval(interval)
}, [])




  return (
    <section className="min-h-screen  text-slate-900 mt-16">
      {/* ================= HERO ================= */}
       <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
        </div> */}

        {/* ================= HERO BACKGROUND SLIDER ================= */}
{/* ================= HERO BACKGROUND SLIDER (RIGHT ➜ LEFT) ================= */}
<div className="absolute inset-0 overflow-hidden">
  <AnimatePresence initial={false}>
    <motion.div
      key={currentBg}
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImages[currentBg]})`,
      }}
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
    />
  </AnimatePresence>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />
</div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent py-6  leading-tight">
  Web Development
</h1>

{/* <p className="text-xl text-slate-100 dark:text-slate-300 max-w-3xl mx-auto mb-6">
  We build fast, scalable, and secure web applications using modern
  frameworks like Next.js, React, and cloud-native architectures.
</p> */}

<p className="text-lg text-slate-100 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
  From high-performance marketing websites to complex enterprise platforms,
  COSMINNOX helps businesses transform ideas into reliable, user-centric
  digital products. Our focus on performance, security, and scalability
  ensures your application is ready to grow with your business.
</p>


{/* CTA buttons */}
<div className="flex flex-wrap justify-center gap-4">
      {/* Get Started */}
      <Link href="/contact">
        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/40 transition">
          Get Started
        </button>
      </Link>

      {/* View Our Work */}
      <Link href="/services">
        <button className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-100 dark:text-slate-300 font-semibold hover:shadow-xl hover:shadow-blue-100/40 dark:hover:bg-slate-800 transition">
          View Our Work
        </button>
      </Link>
    </div>

        </motion.div>
      </section>

    {/* ================= STATS ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-y border-blue-200/20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Projects Delivered", value: "40+" },
            { label: "Happy Clients", value: "96 %" },
            { label: "Avg Performance Score", value: "94%" },
            { label: "Years Experience", value: "1+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <div className="py-12 px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
    >
      Our Web Development Services
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Custom Web Apps",
          desc:
            "Tailored solutions built to solve real business problems with clean architecture.",
        },
        {
          title: "Frontend Engineering",
          desc:
            "Pixel-perfect UI using React, Next.js, Tailwind, and motion-driven UX.",
        },
        {
          title: "Backend Development",
          desc:
            "Secure APIs, authentication, databases, and scalable server architecture.",
        },
        {
          title: "Mobile App Development",
          desc:
            "High-performance mobile applications for Android and iOS with modern UX.",
        },
        {
          title: "Flutter Development",
          desc:
            "Cross-platform Flutter apps with a single codebase and native performance.",
        },
        {
          title: "React Native Development",
          desc:
            "Scalable React Native apps delivering smooth, native-like experiences.",
        },
        {
          title: "E-commerce Solutions",
          desc:
            "High-converting stores with payments, carts, and order management.",
        },
        {
          title: "Performance Optimization",
          desc:
            "Lightning-fast load times, SEO optimization, and Core Web Vitals.",
        },
        {
          title: "Maintenance & Support",
          desc:
            "Long-term support, monitoring, and continuous improvements.",
        },
        
      ].map((service, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -10 }}
          variants={fadeUp}
          viewport={{ once: true }}
          className="
            group relative rounded-2xl p-8
            bg-white
            border border-slate-200
            transition-all duration-300
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50
            hover:shadow-xl hover:shadow-blue-500/20
          "
        >
          {/* Gradient Border on Hover */}
          <div className="
            pointer-events-none absolute inset-0 rounded-2xl
            border-2 border-transparent
            group-hover:border-blue-500/30
            transition-all duration-300
          " />

          <h3 className="
            text-xl font-semibold mb-3
            group-hover:text-blue-600
            transition-colors duration-300
          ">
            {service.title}
          </h3>

          <p className="
            text-slate-600
            group-hover:text-slate-700
            transition-colors duration-300
          ">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* ================= TECH STACK ================= */}
      <div className="bg-slate-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10"
          >
            Technology Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "AWS / Vercel",
            ].map((tech, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-white rounded-xl py-6 text-center font-medium shadow-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="py-14 px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent "
    >
      Our Development Process
    </motion.h2>

    {/* 2 items per row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        "Requirement Analysis & Planning",
        "UI/UX Design & Prototyping",
        "Development & Integration",
        "Testing & Quality Assurance",
        "Deployment & Monitoring",
        "Ongoing Support & Scaling",
      ].map((step, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="flex gap-6 items-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0">
            {i + 1}
          </div>

          <p className="text-lg text-slate-700">
            {step}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* ================= FAQ ================= */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          {[
            {
              q: "How long does a web project take?",
              a: "Most projects take between 4–12 weeks depending on complexity.",
            },
            {
              q: "Do you provide post-launch support?",
              a: "Yes, we offer maintenance, monitoring, and scaling support.",
            },
            {
              q: "Is the website SEO-friendly?",
              a: "Absolutely. We follow best practices for SEO and performance.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="border-b py-6 cursor-pointer"
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
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
      </div>

      {/* ================= CTA ================= */}
      <div className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Let’s turn your idea into a high-performance digital product.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}
