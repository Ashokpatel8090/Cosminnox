"use client"

import { motion } from "framer-motion"
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

import Link from "next/link"
import { useState } from "react"

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

export default function AppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
<div className="max-w-7xl mx-auto relative isolate overflow-hidden py-24">

  {/* ================= HERO BACKGROUND (SCOPED) ================= */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
    <div className="absolute bottom-24 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  </div>

  {/* ================= HERO CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Title */}
        <h1
          className="
            text-5xl md:text-6xl lg:text-7xl
            font-extrabold
            bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500
            bg-clip-text text-transparent
            mb-6 leading-tight
          "
        >
          App Development
        </h1>

        {/* Primary description */}
        <p
          className="
            text-xl
            text-slate-600 dark:text-slate-300
            max-w-3xl mx-auto
            leading-relaxed
            mb-6
          "
        >
          We design and build high-performance mobile applications for iOS,
          Android, and cross-platform environments with a strong focus on
          usability, scalability, and security.
        </p>

        {/* Secondary description */}
        <p
          className="
            text-lg
            text-slate-500 dark:text-slate-400
            max-w-4xl mx-auto
            leading-relaxed
          "
        >
          From idea validation to App Store launch and long-term growth,
          COSMINNOX delivers reliable, secure, and user-centric mobile apps
          engineered to scale with your business.
        </p>
      </motion.div>

</div>

        {/* ================= FEATURES ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-28"
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
              variants={fadeUp}
              className="flex gap-4 text-slate-700 text-lg"
            >
              <CheckCircle2 className="text-blue-600 shrink-0" size={22} />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= PLATFORMS ================= */}
        <div className="mb-28">
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
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {platform.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {platform.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= DEVELOPMENT PROCESS ================= */}
        <div className="mb-28">
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
                className="flex gap-6 items-center bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">
                  {String(i + 1).padStart()}
                </div>
                <p className="text-lg text-slate-700">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SECURITY ================= */}
        <div className="mb-28 bg-white rounded-3xl p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">
              Security & Quality Assurance
            </h2>
          </div>

          <p className="text-slate-600 max-w-4xl leading-relaxed mb-6">
            Security and performance are baked into every stage of our mobile
            development lifecycle. We follow industry best practices to protect
            your data and users.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li>• Secure authentication & authorization</li>
            <li>• Encrypted data storage</li>
            <li>• Automated & manual testing</li>
            <li>• Performance benchmarking</li>
            <li>• App Store compliance checks</li>
            <li>• Ongoing security updates</li>
          </ul>
        </div>

        {/* ================= FAQ ================= */}
        <div className="mb-28">
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8"
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
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Talk to Our Experts
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
