"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Zap } from "lucide-react"
import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@cosminnox.com",
      href: "mailto:hello@cosminnox.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Francisco, CA",
      href: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-purple-500 to-blue-500",
    },
  ]

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Project timelines vary based on scope and complexity. Most projects take 8-16 weeks. We'll provide a detailed timeline and roadmap during our initial consultation.",
    },
    {
      q: "Do you work with startups and enterprise clients?",
      a: "Yes! We work with organizations of all sizes, from ambitious startups to established enterprises. Our approach scales to meet your specific needs and budget.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "We specialize in modern web technologies including React, Next.js, Node.js, cloud platforms (AWS, Google Cloud, Azure), and mobile development with Flutter and React Native.",
    },
    {
      q: "How do you handle project communication?",
      a: "We maintain transparent communication through regular standups, weekly reports, and dedicated project managers. You'll have direct access to your core team members.",
    },
    {
      q: "What is your engagement model?",
      a: "We offer flexible engagement models including fixed-price projects, time & materials, and retainer-based relationships. We'll work with you to find the best fit.",
    },
    {
      q: "How do you ensure project quality?",
      a: "Quality is ensured through code reviews, automated testing, manual QA, and continuous monitoring. We follow industry best practices and maintain high standards throughout development.",
    },
  ]

  return (
    <div className="pt-20 overflow-hidden bg-white dark:bg-slate-950">
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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-300/30 dark:border-blue-700/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full backdrop-blur-sm">
              Get in Touch
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can help you achieve your digital goals and transform your
            vision into reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <a
                    href={info.href}
                    className="glass glass-card p-8 rounded-2xl h-full border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all group"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 glow-blue group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{info.label}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-semibold">{info.value}</p>
                  </a>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ParallaxSection>
            <div className="glass glass-card p-12 rounded-3xl border-2 border-blue-200/30 dark:border-blue-800/30">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-6 glow-blue">
                    <Send className="text-white" size={40} />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                    <Zap size={20} />
                    We'll be in touch soon
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-blue-200/50 dark:border-blue-800/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-blue-200/50 dark:border-blue-800/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-blue-200/50 dark:border-blue-800/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-blue-200/50 dark:border-blue-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="project">New Project Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-blue-200/50 dark:border-blue-800/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 glow-blue"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Find answers to common questions about our services and processes.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <details className="glass glass-card rounded-xl border-2 border-blue-200/30 dark:border-blue-800/30 group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-slate-900 dark:text-white p-6 select-none">
                    <span className="text-lg">{faq.q}</span>
                    <MessageSquare
                      size={24}
                      className="text-blue-600 dark:text-blue-400 flex-shrink-0 group-open:hidden"
                    />
                    <ArrowRight
                      size={24}
                      className="text-blue-600 dark:text-blue-400 flex-shrink-0 hidden group-open:block rotate-90 transition-transform"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-blue-200/30 dark:border-blue-800/30">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <ParallaxSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Digital Future?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let&apos;s partner together and create something extraordinary. Reach out today to schedule a free
            consultation with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@cosminnox.com"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/30"
            >
              Schedule Consultation <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </ParallaxSection>
      </section>
    </div>
  )
}
