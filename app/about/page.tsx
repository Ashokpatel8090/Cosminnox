// "use client"

// import { motion } from "framer-motion"
// import { Award, Lightbulb, Target, Users, ArrowRight, Linkedin, Mail, Zap, Globe, Code2 } from "lucide-react"
// import { ScrollReveal, ParallaxSection } from "@/components/scroll-animations"
// import Link from "next/link"

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// }

// export default function About() {
//   const values = [
//     {
//       icon: Lightbulb,
//       title: "Innovation First",
//       description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: Target,
//       title: "Goal Oriented",
//       description: "Every project is aligned with your business objectives and measured by real results.",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description: "We work as an extension of your team, ensuring transparent communication and partnership.",
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       icon: Award,
//       title: "Quality Excellence",
//       description: "Attention to detail and commitment to quality is embedded in everything we deliver.",
//       color: "from-purple-500 to-blue-500",
//     },
//   ]

//   const teamMembers = [
//     {
//       name: "Sarah Chen",
//       role: "Founder & CEO",
//       expertise: "Strategic Leadership, Full-Stack Development",
//       bio: "Visionary leader with 15+ years in digital transformation.",
//     },
//     {
//       name: "Marcus Johnson",
//       role: "CTO",
//       expertise: "Cloud Architecture, DevOps, System Design",
//       bio: "Enterprise architect specializing in scalable systems.",
//     },
//     {
//       name: "Emma Rodriguez",
//       role: "Head of Design",
//       expertise: "UI/UX Design, Product Strategy",
//       bio: "Design innovator crafting beautiful user experiences.",
//     },
//     {
//       name: "David Kim",
//       role: "Lead Developer",
//       expertise: "React, Next.js, Performance Optimization",
//       bio: "Full-stack expert passionate about clean code.",
//     },
//     {
//       name: "Jessica White",
//       role: "Project Manager",
//       expertise: "Agile, Team Management, Client Relations",
//       bio: "Ensures seamless delivery and client satisfaction.",
//     },
//     {
//       name: "Alex Thompson",
//       role: "QA Lead",
//       expertise: "Testing Strategy, Automation, Quality Assurance",
//       bio: "Quality guardian ensuring excellence at every step.",
//     },
//   ]

//   const milestones = [
//     { year: "2012", title: "Founded", description: "COSMINNOX established with a vision to innovate." },
//     { year: "2015", title: "Growth Phase", description: "Expanded team and opened new office locations." },
//     { year: "2018", title: "Industry Recognition", description: "Awarded Best IT Solutions Provider." },
//     { year: "2023", title: "Global Expansion", description: "Serving 500+ clients across 30+ countries." },
//   ]

//   return (
//     <div className="pt-20 overflow-hidden bg-white dark:bg-slate-950">
//       {/* Hero Section */}
//       <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl" />
//           <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl" />
//           <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
//         >
//           <motion.div className="mb-6 inline-block">
//             <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-300/30 dark:border-blue-700/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full backdrop-blur-sm">
//               About Our Story
//             </span>
//           </motion.div>

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
//             Building Tomorrow, Today
//           </h1>
//           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             Pioneering digital transformation since 2012. A team of passionate innovators dedicated to delivering
//             excellence and driving real business impact.
//           </p>
//         </motion.div>
//       </section>

//       {/* Story Section with Enhanced Layout */}
//       <section className="py-24 bg-white dark:bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <ScrollReveal>
//               <div>
//                 <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
//                   Our Story
//                 </span>
//                 <h2 className="text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-8 leading-tight">
//                   Founded on Innovation and Excellence
//                 </h2>
//                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
//                   COSMINNOX was born from a vision to transform how businesses leverage technology. Starting with a
//                   small team of passionate developers and designers, we&apos;ve grown into a trusted partner for
//                   enterprises seeking digital excellence.
//                 </p>
//                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
//                   Today, we work with leading companies across diverse industries, delivering solutions that merge
//                   strategic insight with technical brilliance. Our commitment to innovation and quality has helped us
//                   maintain a 99.9% client satisfaction rate.
//                 </p>
//                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
//                   We believe in sustainable growth, long-term partnerships, and technology that genuinely solves
//                   problems. Every project we undertake is an opportunity to push boundaries and create impact.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-smooth"
//                 >
//                   Work With Us <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </ScrollReveal>

//             <ParallaxSection offset={30}>
//               <div className="grid grid-cols-2 gap-6">
//                 {[
//                   { value: "12+", label: "Years of Excellence" },
//                   { value: "150+", label: "Projects Delivered" },
//                   { value: "50+", label: "Team Members" },
//                   { value: "99.9%", label: "Client Satisfaction" },
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -8 }}
//                     className="glass glass-card p-8 rounded-2xl text-center border-2 border-blue-200/30 dark:border-blue-800/30 glow-blue"
//                   >
//                     <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                       {stat.value}
//                     </div>
//                     <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </ParallaxSection>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <ScrollReveal className="text-center mb-20">
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Our Journey
//             </h2>
//             <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               From startup to industry leader, here&apos;s how we&apos;ve grown and evolved.
//             </p>
//           </ScrollReveal>

//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

//             <div className="space-y-12">
//               {milestones.map((milestone, idx) => (
//                 <ScrollReveal key={idx} delay={idx * 0.1}>
//                   <motion.div
//                     whileHover={{ x: idx % 2 === 0 ? -16 : 16 }}
//                     className={`flex gap-8 items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
//                   >
//                     <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
//                       <div className="glass glass-card p-8 rounded-2xl border-2 border-blue-200/30 dark:border-blue-800/30 h-full">
//                         <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                           {milestone.year}
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{milestone.title}</h3>
//                         <p className="text-slate-600 dark:text-slate-400 text-lg">{milestone.description}</p>
//                       </div>
//                     </div>
//                     <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center flex-shrink-0 shadow-lg">
//                       <Zap className="text-white" size={24} />
//                     </div>
//                     <div className="flex-1" />
//                   </motion.div>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section - Enhanced Grid */}
//       <section className="py-24 bg-white dark:bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <ScrollReveal className="text-center mb-20">
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Core Values
//             </h2>
//             <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               These principles guide every decision we make and shape our company culture.
//             </p>
//           </ScrollReveal>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {values.map((value, index) => {
//               const Icon = value.icon
//               return (
//                 <motion.div key={index} variants={itemVariants}>
//                   <motion.div
//                     whileHover={{ y: -12 }}
//                     className="glass glass-card p-8 rounded-2xl h-full border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all group"
//                   >
//                     <div
//                       className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 glow-blue group-hover:scale-110 transition-transform`}
//                     >
//                       <Icon className="text-white" size={32} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
//                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Team Gallery Section */}
//       <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <ScrollReveal className="text-center mb-20">
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Brilliant minds driving innovation and excellence across our organization.
//             </p>
//           </ScrollReveal>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <ScrollReveal key={index} delay={index * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -12 }}
//                   className="glass glass-card rounded-3xl overflow-hidden group border-2 border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl transition-all duration-300"
//                 >
//                   {/* Image Placeholder */}
//                   <div className="relative h-72 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 overflow-hidden flex items-center justify-center">
//                     <div className="text-center text-white">
//                       <div className="text-6xl font-bold opacity-20 mb-2">
//                         {member.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </div>
//                       <p className="text-white/60">{member.role}</p>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-3">
//                       <a href="#" className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
//                         <Linkedin size={20} className="text-white" />
//                       </a>
//                       <a href="#" className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
//                         <Mail size={20} className="text-white" />
//                       </a>
//                     </div>
//                   </div>

//                   {/* Info */}
//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
//                     <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-3">{member.role}</p>
//                     <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{member.bio}</p>
//                     <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{member.expertise}</p>
//                   </div>
//                 </motion.div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Culture Section */}
//       <section className="py-24 bg-white dark:bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <ScrollReveal>
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Culture</h2>
//                   <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
//                     At COSMINNOX, we foster an environment of continuous learning, collaboration, and growth. Our team
//                     members are empowered to innovate, take ownership, and make a real impact.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     {
//                       icon: Code2,
//                       title: "Collaborative Environment",
//                       desc: "Work with talented people you'll learn from.",
//                     },
//                     {
//                       icon: Globe,
//                       title: "Global Opportunities",
//                       desc: "Grow your career across international markets.",
//                     },
//                     { icon: Award, title: "Innovation Culture", desc: "Your ideas are valued and implemented." },
//                   ].map((item, i) => (
//                     <motion.div key={i} whileHover={{ x: 8 }} className="flex gap-4">
//                       <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 glow-blue">
//                         <item.icon className="text-white" size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
//                         <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal>
//               <div className="grid grid-cols-2 gap-4">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="glass glass-card p-8 rounded-2xl text-center border-2 border-blue-200/30 dark:border-blue-800/30"
//                 >
//                   <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
//                     100%
//                   </div>
//                   <p className="text-slate-600 dark:text-slate-400 font-medium">Remote Flexibility</p>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="glass glass-card p-8 rounded-2xl text-center border-2 border-blue-200/30 dark:border-blue-800/30"
//                 >
//                   <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
//                     30+
//                   </div>
//                   <p className="text-slate-600 dark:text-slate-400 font-medium">Countries Served</p>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="glass glass-card p-8 rounded-2xl text-center border-2 border-blue-200/30 dark:border-blue-800/30"
//                 >
//                   <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
//                     24/7
//                   </div>
//                   <p className="text-slate-600 dark:text-slate-400 font-medium">Support Available</p>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="glass glass-card p-8 rounded-2xl text-center border-2 border-blue-200/30 dark:border-blue-800/30"
//                 >
//                   <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
//                     12+
//                   </div>
//                   <p className="text-slate-600 dark:text-slate-400 font-medium">Industry Awards</p>
//                 </motion.div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
//         </div>

//         <ParallaxSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-5xl font-bold mb-6">Join Our Growing Team</h2>
//           <p className="text-xl text-white/90 mb-10">
//             We&apos;re always looking for talented individuals passionate about innovation and excellence.
//           </p>
//           <Link
//             href="/careers"
//             className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/30"
//           >
//             View Careers <ArrowRight className="ml-2" size={20} />
//           </Link>
//         </ParallaxSection>
//       </section>
//     </div>
//   )
// }



import AboutHero from "@/components/about/AboutHero"
import AboutStoryTimeline from "@/components/about/AboutStoryTimeline"
import AboutValuesTeam from "@/components/about/AboutValuesTeam"
import AboutCultureCTA from "@/components/about/AboutCultureCTA"

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      <AboutHero />
      <AboutStoryTimeline />
      <AboutValuesTeam />
      <AboutCultureCTA />
    </div>
  )
}
