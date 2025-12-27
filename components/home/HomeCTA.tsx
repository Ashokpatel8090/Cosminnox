"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

// --- TESTIMONIALS DATA ---
const testimonials = [
  {
    quote: "COSMINNOX helped us scale our AI startup with expert mentorship and funding access. Their network of investors and industry leaders was a game-changer!",
    name: "Rahul Verma",
    title: "CEO, DeepAI Labs",
    avatar: "/images/rahul-verma-avatar.jpg", // Placeholder - replace with actual image path
  },
  {
    quote: "We transformed from an idea-stage startup to a venture-backed company in just six months, thanks to COSMINNOX’s structured incubation program.",
    name: "Neha Sharma",
    title: "Founder, RoboNext Innovations",
    avatar: "/images/neha-sharma-avatar.jpg", // Placeholder - replace with actual image path
  },
  {
    quote: "With COSMINNOX’s support, we secured government grants and connected with top VCs, accelerating our go-to-market journey.",
    name: "Amit Patel",
    title: "Co-founder, QuantumX Technologies",
    avatar: "/images/amit-patel-avatar.jpg", // Placeholder - replace with actual image path
  },
]

// --- PARTNERS DATA ---
// NOTE: In a real application, you would host these logos locally or on a CDN. 
// These URLs are placeholders to demonstrate the structure.
const partners = [
  {
    name: "Startup India",
    logoUrl: "./mentors/startupIndia.png",
    alt: "Startup India Logo",
  },
  {
    name: "MeitY Startup Hub",
    logoUrl: "https://www.meity.gov.in/writereaddata/files/MSH_0.png",
    alt: "MeitY Startup Hub Logo",
  },
  {
    name: "InsERB India",
    // Placeholder logo for InsERB as a specific logo wasn't easily found, 
    // often a generic Ministry/Government type logo would be used here.
    logoUrl: "https://via.placeholder.com/150x50?text=InsERB+India+Logo",
    alt: "InsERB India Logo",
  },
  {
    name: "MSME",
    logoUrl: "https://msme.gov.in/sites/all/themes/msme/logo.png",
    alt: "MSME Logo",
  },
  {
    name: "Ministry of Science and Technology",
    // Using a common government symbol as a stand-in
    logoUrl: "https://dsq.gov.in/wp-content/uploads/2021/08/emblem-india-new.png",
    alt: "Ministry of Science and Technology Logo",
  },
]

// Framer Motion Variants for Staggered Fade-In
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

// --- UPDATED COMPONENT (Restoring original name: HomeCTA) ---
export default function HomeCTA() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* --- NEW PARTNERS / MENTORS SECTION --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Mentors who has partnered with us
            </h2>
            <p className="mt-2 text-xl text-slate-600">
              Trusted by leading government and industry bodies.
            </p>
          </motion.div>

          {/* PARTNERS LOGO GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // Center the logos and create a responsive flow
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto"
          >
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="w-32 sm:w-100 h-40 flex items-center justify-center p-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner transition duration-300 hover:scale-[1.02] hover:bg-white"
              >
                {/* Using a standard <img> tag here. 
                  In Next.js, you might use the <Image> component for optimization.
                */}
                <img
                  src={partner.logoUrl}
                  alt={partner.alt}
                  title={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* --- END NEW PARTNERS / MENTORS SECTION --- */}

        <hr className="border-t border-slate-300 my-16" />

        {/* SECTION HEADER (TESTIMONIALS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Here's what our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              customers said
            </span>
          </h2>
        </motion.div>

        {/* TESTIMONIALS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // Responsive Grid: 1 column on mobile, 2 on medium (tablet), 3 on large (desktop)
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between h-full"
            >
              {/* Star Rating (Visual Accent) */}
              <div className="flex text-amber-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>

              {/* Quote */}
              <p className="text-lg italic text-slate-700 mb-6 flex-grow">
                “{t.quote}”
              </p>

              {/* Customer Info (Avatar is placeholder) */}
              <div className="flex items-center pt-4 border-t border-slate-100">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                
                {/* Name and Title */}
                <div>
                  <p className="font-bold text-slate-900 leading-none">{t.name}</p>
                  <p className="text-sm text-slate-500 leading-none mt-1">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}