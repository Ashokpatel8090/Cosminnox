"use client"

import { motion } from "framer-motion"
import { Star, ArrowRight, Quote, TrendingUp } from "lucide-react"
import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Chen",
      company: "TechVision Inc",
      role: "Product Director",
      content:
        "COSMINNOX transformed our digital presence completely. Their innovative approach and technical excellence delivered results that exceeded our expectations by 150%.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      initials: "AC",
    },
    {
      name: "Sarah Mitchell",
      company: "InnovateLabs",
      role: "CEO",
      content:
        "Working with COSMINNOX was a game-changer for our startup. They combined strategic vision with flawless execution and became a trusted extension of our team.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      initials: "SM",
    },
    {
      name: "Marcus Johnson",
      company: "Global Dynamics Ltd",
      role: "CTO",
      content:
        "The cloud migration project was handled with utmost professionalism. COSMINNOX's team was responsive, knowledgeable, and delivered ahead of schedule.",
      rating: 5,
      color: "from-cyan-500 to-blue-500",
      initials: "MJ",
    },
    {
      name: "Emily Watson",
      company: "FutureFlow Systems",
      role: "Operations Manager",
      content:
        "Exceptional service and support throughout the entire development cycle. COSMINNOX is a partner you can truly rely on for mission-critical projects.",
      rating: 5,
      color: "from-blue-500 to-purple-500",
      initials: "EW",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      company: "RetailHub",
      category: "Web Development",
      challenge: "Legacy system causing 40% cart abandonment rate and poor mobile experience",
      solution: "Built modern React-based platform with Next.js optimization and serverless architecture",
      result: "67% increase in conversion rate, 3x faster load times, $2.3M revenue growth",
      color: "from-blue-600 to-cyan-600",
      metrics: [
        { label: "Conversion Increase", value: "67%", trend: "up" },
        { label: "Load Time", value: "3x Faster", trend: "up" },
        { label: "Revenue Growth", value: "$2.3M", trend: "up" },
      ],
    },
    {
      title: "Cloud Migration & Infrastructure Optimization",
      company: "DataFlow Corp",
      category: "Cloud Solutions",
      challenge: "Rising infrastructure costs consuming 35% of operational budget, scaling limitations",
      solution: "Migrated to AWS with containerized architecture and automated scaling policies",
      result: "45% cost reduction, 99.99% uptime achieved, 10x scaling capacity unlocked",
      color: "from-purple-600 to-blue-600",
      metrics: [
        { label: "Cost Reduction", value: "45%", trend: "up" },
        { label: "System Uptime", value: "99.99%", trend: "up" },
        { label: "Scaling Capacity", value: "10x", trend: "up" },
      ],
    },
    {
      title: "SaaS Product Development",
      company: "TaskMaster",
      category: "Digital Product",
      challenge: "Need to launch MVP in 6 months with limited budget and tight timeline",
      solution: "Agile development with Next.js, PostgreSQL, and serverless functions for rapid iteration",
      result: "Launched on time, 5000+ beta users in first month, 4.8/5 customer satisfaction",
      color: "from-cyan-600 to-blue-600",
      metrics: [
        { label: "Time to Market", value: "6 Months", trend: "up" },
        { label: "Beta Users", value: "5000+", trend: "up" },
        { label: "Satisfaction", value: "4.8/5", trend: "up" },
      ],
    },
    {
      title: "Mobile Healthcare App",
      company: "HealthConnect",
      category: "App Development",
      challenge: "HIPAA compliance requirements with seamless user experience across platforms",
      solution: "Built native iOS/Android apps with enterprise-grade security and encrypted storage",
      result: "2M+ downloads, 4.7 star rating, 500K+ daily active users, 98% retention rate",
      color: "from-blue-600 to-purple-600",
      metrics: [
        { label: "Total Downloads", value: "2M+", trend: "up" },
        { label: "App Rating", value: "4.7★", trend: "up" },
        { label: "Daily Users", value: "500K+", trend: "up" },
      ],
    },
  ]

  const testimonialStats = [
    { value: "500+", label: "Satisfied Clients" },
    { value: "99.9%", label: "Satisfaction Rate" },
    { value: "$500M+", label: "Client Revenue Impact" },
    { value: "30+", label: "Countries Served" },
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
      
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how COSMINNOX has transformed businesses and delivered exceptional results across diverse industries.
            Join hundreds of satisfied clients achieving their digital goals.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-y border-blue-200/20 dark:border-blue-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {testimonialStats.map((stat, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Advanced Cards */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real feedback from real businesses who trusted us with their digital transformation.
            </p>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="glass glass-card p-8 rounded-2xl h-full flex flex-col border-t-4 border-t-blue-500 hover:border-t-purple-500 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex justify-between">
                  {/* Quote Icon */}
                      <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                        <Quote className="text-blue-600 dark:text-blue-400" size={32} />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  {/* Quote */}
                  <p className="text-slate-600 dark:text-slate-300 flex-grow mb-8 text-base leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0 font-bold text-white text-sm`}
                    >
                      {testimonial.initials}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Detailed deep-dives showing how we solved complex challenges and delivered measurable business impact.
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {caseStudies.map((caseStudy, index) => (
              <ScrollReveal key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass glass-card rounded-3xl overflow-hidden border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className={`p-12 flex flex-col justify-between ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`inline-block px-4 py-2 rounded-full text-white text-sm font-bold bg-gradient-to-r ${caseStudy.color}`}
                          >
                            {caseStudy.category}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{caseStudy.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-8">
                          {caseStudy.company}
                        </p>

                        <div className="space-y-6 mb-8">
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full" />
                              Challenge
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{caseStudy.challenge}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <span className="inline-block w-2 h-2 bg-purple-600 rounded-full" />
                              Solution
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{caseStudy.solution}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <span className="inline-block w-2 h-2 bg-cyan-600 rounded-full" />
                              Result
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{caseStudy.result}</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all w-fit"
                      >
                        View Full Project <ArrowRight size={18} />
                      </Link>
                    </div>

                    {/* Metrics Side */}
                    <div
  className={`relative p-12 overflow-hidden flex flex-col justify-center ${
    index % 2 === 1 ? "lg:order-1" : ""
  }`}
>
  {/* ===== Background Layer ===== */}
  <div
    className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-5 dark:opacity-10`}
  />

  {/* ===== Content Layer ===== */}
  <div className="relative z-10">
    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
      Results Achieved
    </h4>

    <div className="space-y-6">
      {caseStudy.metrics.map((metric, i) => (
        <div key={i} className="group">
          
          {/* Metric Header */}
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {metric.label}
            </span>

            <div className="flex items-center gap-2">
              <span
                className={`text-3xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}
              >
                {metric.value}
              </span>

              {metric.trend === "up" && (
                <TrendingUp className="text-green-500" size={22} />
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`h-full bg-gradient-to-r ${caseStudy.color}`}
            />
          </div>

        </div>
      ))}
    </div>
  </div>
</div>

                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <ParallaxSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let&apos;s partner together to achieve extraordinary results and transform your business through innovative
            digital solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/30"
          >
            Schedule Your Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </ParallaxSection>
      </section>
    </div>
  )
}
