// "use client"

// import { motion } from "framer-motion"
// import { useRouter } from "next/navigation"
// import { ArrowRight, CheckCircle2 } from "lucide-react"
// import type { LucideIcon } from "lucide-react"

// import {
//   Globe,
//   Smartphone,
//   Cloud,
//   Boxes,
// } from "lucide-react"

// /* ===================== TYPES ===================== */
// type Service = {
//   icon: LucideIcon
//   title: string
//   slug: string
//   description: string
//   features: string[]
// }

// /* ===================== ANIMATIONS ===================== */
//  const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   }


// /* ===================== COMPONENT ===================== */
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
//      <section className="relative z-20 py-10 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
//       {/* ===== BACKGROUND GLOW ===== */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-200/30 rounded-full blur-[160px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ===================== HEADING ===================== */}
//         <div className="text-center mb-10">
//           <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
//             Our Core{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
//               Services
//             </span>
//           </h3>
//           <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
//             End-to-end digital, cloud, and AI-driven solutions crafted for modern businesses.
//           </p>
//         </div>

//         {/* ===================== GRID ===================== */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-4
//           "
//         >
//           {services.map((service, i) => {
//             const Icon = service.icon

//             return (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => router.push(service.slug)}
//                 onKeyDown={(e) => e.key === "Enter" && router.push(service.slug)}
//                 className="
//                   relative
//                   p-7
//                   rounded-2xl
//                   bg-white/80
//                   backdrop-blur-xl
//                   border border-slate-200
//                   shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
//                   flex flex-col
//                   cursor-pointer
//                   transition-all duration-300
//                   hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
//                   hover:border-cyan-300
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-cyan-400
//                   group
//                 "
//               >
//                 {/* ===== ICON ===== */}
//                 <div
//                   className="
//                     w-16 h-16 mb-6 rounded-2xl
//                     bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
//                     flex items-center justify-center
//                     text-white
//                     shadow-lg
//                     transition-all duration-300
//                     group-hover:scale-110
//                   "
//                 >
//                   <Icon size={30} />
//                 </div>

//                 {/* ===== TITLE ===== */}
//                 <h4
//                   className="
//                     text-xl font-bold mb-3 text-slate-900
//                     group-hover:text-cyan-700
//                     transition-colors
//                   "
//                 >
//                   {service.title}
//                 </h4>

//                 {/* ===== DESCRIPTION ===== */}
//                 <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
//                   {service.description}
//                 </p>

//                 {/* ===== FEATURES ===== */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {service.features.map((feature, j) => (
//                     <div
//                       key={j}
//                       className="flex items-center gap-2 text-sm text-slate-700"
//                     >
//                       <CheckCircle2
//                         size={16}
//                         className="text-cyan-600 shrink-0"
//                       />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* ===== HOVER GLOW ===== */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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
     <section className="relative z-20 pt-10 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-200/30 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===================== HEADING ===================== */}
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our Core{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h3>
          <p className="mt-4 max-w-4xl mx-auto text-slate-600 text-lg">
            We combine strategy, technology, and execution to help organizations build scalable systems, optimize operations, and accelerate innovation. Every service is designed for real-world performance, not just implementation.
          </p>
        </div>

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
            gap-4
          "
        >
          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                role="button"
                tabIndex={0}
                onClick={() => router.push(service.slug)}
                onKeyDown={(e) => e.key === "Enter" && router.push(service.slug)}
                className="
                  relative
                  p-7
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  border border-slate-200
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  flex flex-col
                  cursor-pointer
                  transition-all duration-300
                  hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
                  hover:border-cyan-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400
                  group
                "
              >
                {/* ===== ICON ===== */}
                <div
                  className="
                    w-16 h-16 mb-6 rounded-2xl
                    bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={30} />
                </div>

                {/* ===== TITLE ===== */}
                <h4
                  className="
                    text-xl font-bold mb-3 text-slate-900
                    group-hover:text-cyan-700
                    transition-colors
                  "
                >
                  {service.title}
                </h4>

                {/* ===== DESCRIPTION ===== */}
                <p className="text-slate-600 leading-relaxed text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* ===== FEATURES ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-cyan-600 shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ===== HOVER GLOW ===== */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}