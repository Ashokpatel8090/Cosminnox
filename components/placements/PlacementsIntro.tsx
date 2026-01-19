"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  Building2,
  GraduationCap,
  MapPin,
} from "lucide-react"

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function PlacementsIntro() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-20 "
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Placements & Career Development
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Bridging the gap between academics and industry through structured
          training, real-world exposure, and strong corporate partnerships.
        </p>
      </motion.div>

      {/* ================= CAREER DEVELOPMENT ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-14 items-center mb-28"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">
            Career Development & Training Cell
          </h3>

          <p className="text-slate-600 mb-6">
            Our Career Development Cell focuses on preparing students for
            professional success through structured training programs,
            industry-oriented skill development, and continuous mentorship.
          </p>

          <motion.ul variants={staggerContainer} className="space-y-4 text-slate-700">
            <motion.li variants={fadeUp} className="flex gap-3">
              <GraduationCap className="text-blue-600" />
              Aptitude, technical & soft skills training
            </motion.li>
            <motion.li variants={fadeUp} className="flex gap-3">
              <Users className="text-blue-600" />
              Resume building, mock interviews & career counseling
            </motion.li>
            <motion.li variants={fadeUp} className="flex gap-3">
              <Briefcase className="text-blue-600" />
              Industry-aligned certification & workshops
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/placements/career.png"
            alt="Career Development Training"
            fill
            className="object-fill"
          />
        </motion.div>
      </motion.div>

      {/* ================= PLACEMENT DRIVES ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-14 items-center mb-28"
      >
        <motion.div
          variants={fadeUp}
          className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/placements/placements.png"
            alt="Placement Drive"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">
            Training & Placement Cell
          </h3>

          <p className="text-slate-600 mb-6">
            The Training & Placement Cell actively collaborates with leading
            companies to organize placement drives, internships, and
            pre-placement talks on campus.
          </p>

          <motion.ul variants={staggerContainer} className="space-y-4 text-slate-700">
            <motion.li variants={fadeUp} className="flex gap-3">
              <Building2 className="text-green-600" />
              On-campus & off-campus placement drives
            </motion.li>
            <motion.li variants={fadeUp} className="flex gap-3">
              <Briefcase className="text-green-600" />
              Internship & PPO opportunities
            </motion.li>
            <motion.li variants={fadeUp} className="flex gap-3">
              <Users className="text-green-600" />
              Direct interaction with recruiters & HR teams
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* ================= INDUSTRIAL TOURS ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-14 items-center mb-28"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">
            Industrial Tours & Industry Exposure
          </h3>

          <p className="text-slate-600 mb-6">
            Regular industrial visits and tours help students understand
            real-world workflows, technologies, and professional environments
            beyond the classroom.
          </p>

          <motion.ul variants={staggerContainer} className="space-y-4 text-slate-700">
            <motion.li variants={fadeUp} className="flex gap-3">
              <MapPin className="text-purple-600" />
              Visits to factories, tech parks & R&D centers
            </motion.li>
            <motion.li variants={fadeUp} className="flex gap-3">
              <Building2 className="text-purple-600" />
              Interaction with industry professionals
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/placements/industrial.png"
            alt="Industrial Tour"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </>
  )
}
