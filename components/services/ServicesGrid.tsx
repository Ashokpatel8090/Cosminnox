// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { ArrowRight, CheckCircle2 } from "lucide-react"
// import type { LucideIcon } from "lucide-react"
// import { useRouter } from "next/navigation"

// import {
//   Globe,
//   Smartphone,
//   Cloud,
//   Boxes,
// } from "lucide-react"

// type Service = {
//   icon: LucideIcon
//   title: string
//   slug: string
//   description: string
//   features: string[]
// }

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// }

// export default function ServicesGrid() {
//   const router = useRouter()

//   const services: Service[] = [
//     {
//       icon: Globe,
//       title: "Web Development",
//       slug: "/services/web-development",
//       description:
//         "Fast, scalable modern web applications tailored for growth. We build high-performing, secure websites and enterprise platforms.",
//       features: [
//         "Responsive Design",
//         "SEO Optimization",
//         "Progressive Web Apps",
//         "API Integration",
//       ],
//     },
//     {
//       icon: Smartphone,
//       title: "App Development",
//       slug: "/services/app-development",
//       description:
//         "Deliver exceptional iOS, Android & cross-platform mobile experiences that engage users and meet business goals.",
//       features: [
//         "Native iOS & Android",
//         "Flutter & React Native",
//         "App Store Optimization",
//         "UX Focus",
//       ],
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Solutions",
//       slug: "/services/cloud-solutions",
//       description:
//         "Architect secure, scalable, and cost-optimized cloud infrastructure using industry-leading platforms and DevOps practices.",
//       features: [
//         "AWS / Azure / GCP",
//         "DevOps & Automation",
//         "CI/CD Pipelines",
//         "Docker & Kubernetes",
//       ],
//     },
//     {
//       icon: Boxes,
//       title: "Digital Products",
//       slug: "/services/digital-products",
//       description:
//         "We guide your product from MVP to enterprise-ready digital solutions, with a strong focus on scalability and growth.",
//       features: [
//         "MVP Development",
//         "UX Research & Design",
//         "Product Strategy",
//         "Scalable Architecture",
//       ],
//     },
//   ]

//   return (
//     <section className="relative z-20 bg-gray-100 py-28">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">
//           Our Core{" "}
//           <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//             Services
//           </span>
//         </h3>

//         {/* Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid lg:grid-cols-2 gap-10"
//         >
//           {services.map((service, i) => {
//             const Icon = service.icon

//             return (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 whileHover={{
//                   y: -8,
//                   boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
//                 }}
//                 transition={{ duration: 0.3 }}
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => router.push(service.slug)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") router.push(service.slug)
//                 }}
//                 className="
//                   p-10 rounded-3xl bg-white
//                   border border-slate-200
//                   shadow-xl
//                   flex flex-col
//                   cursor-pointer
//                   transition-all duration-300
//                   hover:bg-cyan-50
//                   group
//                   focus:outline-none focus:ring-2 focus:ring-cyan-400
//                 "
//               >
//                 {/* Icon */}
//                 <div className="
//                   w-16 h-16 mb-6 rounded-2xl
//                   bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500
//                   flex items-center justify-center
//                   text-white shadow-xl
//                   transition-transform duration-300
//                   group-hover:scale-105
//                 ">
//                   <Icon size={30} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="
//                   text-3xl font-bold mb-3 text-slate-900
//                   transition-colors duration-300
//                   group-hover:text-cyan-700
//                 ">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
//                   {service.description}
//                 </p>

//                 {/* Features */}
//                 <div className="grid grid-cols-2 gap-3 mb-8">
//                   {service.features.map((f, j) => (
//                     <div
//                       key={j}
//                       className="flex items-center gap-2 text-sm font-medium text-slate-700"
//                     >
//                       <CheckCircle2 size={16} className="text-blue-500" />
//                       {f}
//                     </div>
//                   ))}
//                 </div>

                
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }






"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import {
  Globe,
  Smartphone,
  Cloud,
  Boxes,
} from "lucide-react"

/* ===================== TYPES ===================== */
type Service = {
  icon: LucideIcon
  title: string
  slug: string
  description: string
  features: string[]
}

/* ===================== ANIMATIONS ===================== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

/* ===================== COMPONENT ===================== */
export default function ServicesGrid() {
  const router = useRouter()

  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      slug: "/services/web-development",
      description:
        "Fast, scalable modern web applications tailored for growth. We build high-performing, secure websites and enterprise platforms.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Progressive Web Apps",
        "API Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      slug: "/services/app-development",
      description:
        "Deliver exceptional iOS, Android & cross-platform mobile experiences that engage users and meet business goals.",
      features: [
        "Native iOS & Android",
        "Flutter & React Native",
        "App Store Optimization",
        "UX Focus",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      slug: "/services/cloud-solutions",
      description:
        "Architect secure, scalable, and cost-optimized cloud infrastructure using industry-leading platforms and DevOps practices.",
      features: [
        "AWS / Azure / GCP",
        "DevOps & Automation",
        "CI/CD Pipelines",
        "Docker & Kubernetes",
      ],
    },
    {
      icon: Boxes,
      title: "Digital Products",
      slug: "/services/digital-products",
      description:
        "We guide your product from MVP to enterprise-ready digital solutions, with a strong focus on scalability and growth.",
      features: [
        "MVP Development",
        "UX Research & Design",
        "Product Strategy",
        "Scalable Architecture",
      ],
    },
  ]

  return (
    <section className="relative z-20 bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===================== HEADING ===================== */}
        <h3 className="text-4xl font-bold text-center mb-14 text-slate-800">
          Our Core{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Services
          </span>
        </h3>

        {/* ===================== GRID ===================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-10
          "
        >
          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
                transition={{ duration: 0.3 }}
                role="button"
                tabIndex={0}
                onClick={() => router.push(service.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(service.slug)
                }}
                className="
                  p-8
                  rounded-3xl
                  bg-white
                  border border-slate-200
                  shadow-xl
                  flex flex-col
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-cyan-50
                  group
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400
                "
              >
                {/* ===================== ICON ===================== */}
                <div
                  className="
                    w-16 h-16 mb-6 rounded-2xl
                    bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500
                    flex items-center justify-center
                    text-white shadow-xl
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon size={30} />
                </div>

                {/* ===================== TITLE ===================== */}
                <h3
                  className="
                    text-2xl font-bold mb-3 text-slate-900
                    transition-colors duration-300
                    group-hover:text-cyan-700
                  "
                >
                  {service.title}
                </h3>

                {/* ===================== DESCRIPTION ===================== */}
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* ===================== FEATURES ===================== */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
