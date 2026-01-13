"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, Award, Heart, TrendingUp, Users, ArrowRight, Zap, Globe, Code2 } from "lucide-react"
import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: -8, transition: { duration: 0.3 } },
}

export default function Careers() {
  const jobs = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$180K - $220K",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120K - $160K",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud Architect",
      department: "Infrastructure",
      location: "New York, NY",
      type: "Full-time",
      experience: "7+ years",
      salary: "$200K - $250K",
      color: "from-cyan-500 to-blue-500",
    },
    
    
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      items: ["Comprehensive health coverage", "Dental & vision insurance", "Mental wellness programs"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      items: ["$5K annual training budget", "Mentorship programs", "Career advancement paths"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Work Culture",
      items: ["100% remote-friendly", "Flexible schedules", "Team events & retreats"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Compensation",
      items: ["Competitive salary", "Annual bonuses",
        //  "Stock options available"
        ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const perks = [
    { icon: Code2, label: "Latest Tech Stack" },
    { icon: Globe, label: "Global Team" },
    { icon: Zap, label: "Fast-Growing" },
  ]

  return (
    <div className=" overflow-hidden bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div className="mb-6 inline-block">
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-snug">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
             Build Your Career 
            </span>
            <br className="hidden sm:block" />
            at COSMINNOX
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join our diverse team of innovators and help us shape the future of digital technology. We offer competitive
            compensation, growth opportunities, and a collaborative culture.
          </p>
        </motion.div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            {/* <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Why Join Our Team
            </h2> */}

            <h2 className="text-5xl font-bold text-slate-800">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              We offer more than just a job—we offer a career where you can make a real impact and grow with us.
            </p>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div key={index} variants={cardVariants}>
                  <div className="glass glass-card p-8 rounded-2xl h-full border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all group">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3 glow-blue group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>
                    <ul className="space-y-1">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="mr-3 text-blue-600 dark:text-blue-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Quick Perks */}
          <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    gap-6
  "
>
  {perks.map((perk, idx) => {
    const Icon = perk.icon

    return (
      <ScrollReveal key={idx} delay={idx * 0.1}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="
            relative
            group
            flex
            items-center
            gap-4
            p-5
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border border-slate-200
            shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]
            hover:border-blue-300
            text-center
           
          "
        >
          {/* ===== ICON ===== */}
          <div
            className="
              w-12 h-12
              rounded-xl
              bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500
              flex items-center justify-center
              text-white
              shadow-md
              transition-transform duration-300
              group-hover:scale-110
            "
          >
            <Icon size={22} />
          </div>

          {/* ===== LABEL ===== */}
          <span
            className="
              font-semibold
              text-slate-900
              text-base
              group-hover:text-blue-700
              transition-colors
            "
          >
            {perk.label}
          </span>

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
      </ScrollReveal>
    )
  })}
</div>

        </div>
      </section>

      {/* Open Positions */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We&apos;re hiring talented individuals across engineering, design, and infrastructure teams.
            </p>
          </ScrollReveal>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass glass-card p-8 rounded-2xl border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${job.color} flex items-center justify-center glow-blue`}
                        >
                          <Briefcase className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.department}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6 text-sm mt-4">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Award size={18} className="text-blue-600 dark:text-blue-400" />
                          {job.experience}
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-xs font-bold">
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="flex-shrink-0 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all glow-blue"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
              Don&apos;t see the perfect role? We&apos;re always looking for great talent.
            </p>
            <Link
              href="mailto:careers@cosminnox.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600/10 transition-all"
            >
              Send Your Application <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <ParallaxSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-10">
            Browse our open positions and apply today. We&apos;re excited to meet talented individuals like you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/30"
          >
            Start Your Journey <ArrowRight className="ml-2" size={20} />
          </Link>
        </ParallaxSection>
      </section>
    </div>
  )
}
