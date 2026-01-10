"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Cloud, // Main Cloud Icon
  Shield, // For Security
  Bolt, // For Acceleration/DevOps
  Code, // For Migration/Modernization
  Server, // For Platforms (AWS, Azure, GCP)
  TrendingUp, // For Monitoring/Optimization
  Target, // For Architecture/Strategy
  DollarSign,
  MessageSquare,
  ArrowRight, // For Cost Optimization
} from "lucide-react"

/* =======================
    ANIMATION VARIANTS (KEPT CONSISTENT)
======================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

/* =======================
    DATA
======================= */
const platforms = [
  {
    title: "AWS",
    desc: "Highly reliable, scalable cloud infrastructure with global reach.",
    services: ["EC2", "S3", "Lambda", "RDS", "EKS"],
    icon: Server,
  },
  {
    title: "Microsoft Azure",
    desc: "Enterprise-grade cloud with deep Microsoft ecosystem integration.",
    services: ["VMs", "Blob Storage", "AKS", "Functions", "SQL Azure"],
    icon: Server,
  },
  {
    title: "Google Cloud Platform",
    desc: "High-performance cloud optimized for data and AI workloads.",
    services: ["Compute Engine", "Cloud Run", "GKE", "BigQuery"],
    icon: Server,
  },
]

const cloudServices = [
  {
    title: "Cloud Architecture",
    desc: "Designing scalable, fault-tolerant, and cost-optimized architectures.",
    icon: Target,
  },
  {
    title: "Migration & Modernization",
    desc: "Lift-and-shift, re-platforming, and cloud-native transformations.",
    icon: Code,
  },
  {
    title: "DevOps Automation",
    desc: "CI/CD pipelines, IaC, automated testing, and deployment workflows.",
    icon: Bolt,
  },
  {
    title: "Security & Compliance",
    desc: "Zero-trust security, IAM, encryption, and compliance readiness.",
    icon: Shield,
  },
  {
    title: "Monitoring & Observability",
    desc: "Real-time insights, alerts, logs, and performance optimization.",
    icon: TrendingUp,
  },
  {
    title: "Cost Optimization",
    desc: "FinOps practices to reduce cloud spend without sacrificing scale.",
    icon: DollarSign,
  },
]

const devopsSteps = [
  "Code Commit",
  "Automated Testing",
  "Build & Package",
  "Infrastructure Provisioning",
  "Deployment",
  "Monitoring & Feedback",
]

const faqs = [
  {
    q: "Which cloud platform should I choose?",
    a: "It depends on your workload, budget, and ecosystem. We help you evaluate AWS, Azure, and GCP objectively.",
  },
  {
    q: "Do you support hybrid or multi-cloud?",
    a: "Yes. We design hybrid and multi-cloud strategies to avoid vendor lock-in.",
  },
  {
    q: "How secure are your cloud solutions?",
    a: "Security is built-in from day one using best practices like IAM, encryption, and continuous monitoring.",
  },
  {
    q: "Can you manage our cloud after setup?",
    a: "Absolutely. We provide ongoing monitoring, optimization, and managed services.",
  },
]

/* =======================
    COMPONENT
======================= */
export default function CloudSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-24 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-22 mb-6 leading-tight">
            Scalable & Secure <br className="hidden sm:block" /> Cloud Solutions
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            We design, build, and manage cloud infrastructure on AWS, Azure, and GCP
            that scales effortlessly while remaining secure, resilient, and cost-efficient.
          </p>

          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            From DevOps automation and infrastructure as code to monitoring and
            security-first architectures — we help you move faster with confidence.
          </p>

          {/* CTA */}
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/contact"
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition"
      >
        Get Cloud Consultation
      </a>

      <a
        href="/services/cloud"
        className="px-8 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
      >
        Explore Services
      </a>
    </div> */}
        </motion.div>
      </section>


      {/* ================= PLATFORMS ================= */}
      <div className="px-6 py-8 relative z-10 bg-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-12 text-slate-800"
          >
            Platforms We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Master
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon with Brand Gradient Background */}
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 mb-4 flex-grow">{p.desc}</p>
                  <ul className="text-sm font-medium text-slate-500 list-disc list-inside space-y-1">
                    {p.services.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="px-6 py-8 bg-gray-100 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-12 text-slate-800"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Cloud Services
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon with Brand Gradient Background */}
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 flex-grow">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ================= DEVOPS PIPELINE ================= */}
      <div className="px-6 py-12 bg-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-12 text-slate-800"
          >
            Automated{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              DevOps Workflow
            </span>
          </motion.h2>

          {/* Diagram Tag */}


          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {devopsSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl text-center font-medium bg-white border border-slate-200 shadow-md flex items-center justify-center h-full transition-all duration-300"
              >
                <span className="text-lg font-bold text-slate-900">{i + 1}.</span>
                <span className="ml-2 text-slate-700">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= SECURITY ================= */}
      <div className="px-6 py-24 bg-slate-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div variants={fadeUp} className="w-full md:w-1/3 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl">
              <Shield size={48} className="text-white" />
            </div>
          </motion.div>
          <div className="w-full md:w-2/3">
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-extrabold mb-4 leading-tight"
            >
              Security by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Design
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-300 max-w-xl"
            >
              From IAM policies and network isolation to end-to-end encryption and
              continuous security monitoring — security is embedded into every layer of our
              cloud solutions, ensuring compliance and peace of mind.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ================= FAQ ================= */}
      <section className="py-12 bg-white dark:bg-slate-950">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    {/* Header */}
    <motion.div variants={fadeUp} className="text-center mb-10">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-400">
        Find answers to common questions about our services and processes.
      </p>
    </motion.div>

    {/* FAQ Items */}
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <motion.div key={i} variants={fadeUp}>
          <details className="group rounded-xl border border-blue-200/30 dark:border-blue-800/30 bg-white/70 dark:bg-slate-900/60 backdrop-blur hover:shadow-lg transition-all duration-300">
            <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white p-6 cursor-pointer list-none">
              <span className="text-lg">{f.q}</span>

              {/* Closed icon */}
              <MessageSquare
                size={22}
                className="text-blue-600 dark:text-blue-400 group-open:hidden"
              />

              {/* Open icon */}
              <ArrowRight
                size={22}
                className="text-blue-600 dark:text-blue-400 hidden group-open:block rotate-90 transition-transform"
              />
            </summary>

            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-blue-200/30 dark:border-blue-800/30">
              {f.a}
            </div>
          </details>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

    </section>
  )
}