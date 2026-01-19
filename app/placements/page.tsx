
import CourseModes from "@/components/placements/CourseModes";
import PlacementHeroSection from "@/components/placements/PlacementHeroSection";
import PlacementsIntro from "@/components/placements/PlacementsIntro";
import PlacementsStats from "@/components/placements/PlacementsStats";
import Testimonials from "@/components/placements/Testimonials";

export default function PlacementsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* <PlacementHeroSection /> */}
        <PlacementsIntro />
        <Testimonials />
        <PlacementsStats />
        <CourseModes />
      </div>
    </section>
  )
}

// 'use client'

// import React from "react"

// import { ArrowRight, Briefcase, Users, TrendingUp, Award, CheckCircle, Globe, BookOpen, Clock } from 'lucide-react'

// // Hero Section Component
// function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5 px-4 sm:px-6">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
//       <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 py-16 sm:py-20">
//         <div className="space-y-4">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
//             Shape Your Future with{' '}
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Excellence
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
//             Join thousands of successful graduates placed at India's top companies. Access world-class training programs, connect with industry leaders, and launch your dream career today.
//           </p>
//         </div>
        
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8">
//           <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2 hover:scale-105">
//             Explore Programs
//             <ArrowRight className="w-5 h-5" />
//           </button>
//           <button className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 hover:shadow-sm">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// // Metrics Card Component
// function MetricCard({ icon: Icon, value, label, highlight = false }: { icon: React.ElementType; value: string; label: string; highlight?: boolean }) {
//   return (
//     <div className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
//       highlight 
//         ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20' 
//         : 'bg-card border border-border hover:border-primary/30'
//     }`}>
//       <div className="flex items-start gap-4">
//         <div className={`p-3 rounded-lg ${highlight ? 'bg-primary/20' : 'bg-secondary/10'}`}>
//           <Icon className={`w-6 h-6 ${highlight ? 'text-primary' : 'text-secondary'}`} />
//         </div>
//         <div className="flex-1">
//           <p className={`text-2xl sm:text-3xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
//             {value}
//           </p>
//           <p className="text-sm text-muted-foreground mt-1">{label}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Key Metrics Section
// function MetricsSection() {
//   const metrics = [
//     { icon: Users, value: '12,500+', label: 'Students Placed', highlight: true },
//     { icon: TrendingUp, value: '₹8.5 LPA', label: 'Average Package' },
//     { icon: Award, value: '₹25 LPA', label: 'Highest CTC' },
//     { icon: Globe, value: '500+', label: 'Hiring Partners' },
//   ]

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-secondary/5">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
//             Our Success by Numbers
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Join a thriving community of professionals making an impact across India's fastest-growing companies
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {metrics.map((metric, idx) => (
//             <MetricCard key={idx} {...metric} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // Program Card Component
// function ProgramCard({ title, description, duration, level }: { title: string; description: string; duration: string; level: string }) {
//   return (
//     <div className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       <div className="p-6 sm:p-7 space-y-4">
//         <div className="flex items-start justify-between">
//           <h3 className="text-lg sm:text-xl font-bold text-foreground flex-1 pr-2">{title}</h3>
//           <BookOpen className="w-5 h-5 text-secondary flex-shrink-0" />
//         </div>
//         <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
//         <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
//           <span className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             {duration}
//           </span>
//           <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full font-medium">{level}</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Training Programs Section
// function TrainingProgramsSection() {
//   const programs = [
//     { title: 'Full Stack Development', description: 'Master modern web development with React, Node.js, and cloud technologies. Build production-ready applications.', duration: '16 weeks', level: 'Intermediate' },
//     { title: 'Data Science & AI', description: 'Learn machine learning, analytics, and AI implementation. Work with real datasets and build predictive models.', duration: '14 weeks', level: 'Advanced' },
//     { title: 'Product Management', description: 'Discover how to lead products from concept to market. Learn strategy, metrics, and cross-functional collaboration.', duration: '12 weeks', level: 'Intermediate' },
//     { title: 'Cloud & DevOps', description: 'Master AWS, Docker, and Kubernetes. Build scalable infrastructure for modern applications.', duration: '10 weeks', level: 'Advanced' },
//     { title: 'Digital Marketing', description: 'Create impactful campaigns using SEO, content marketing, analytics, and social media strategies.', duration: '8 weeks', level: 'Beginner' },
//     { title: 'Blockchain Development', description: 'Build decentralized applications. Learn Solidity, smart contracts, and blockchain architecture.', duration: '12 weeks', level: 'Advanced' },
//   ]

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
//             Career Development Programs
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive training designed by industry experts to prepare you for real-world challenges
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {programs.map((program, idx) => (
//             <ProgramCard key={idx} {...program} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // Hiring Drive Card Component
// function HiringDriveCard({ company, positions, date, salary, status }: { company: string; positions: string; date: string; salary: string; status: string }) {
//   const isActive = status === 'Active'
  
//   return (
//     <div className="group bg-card border border-border rounded-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex-1">
//           <h3 className="text-lg font-bold text-foreground mb-1">{company}</h3>
//           <p className="text-sm text-muted-foreground">{positions}</p>
//         </div>
//         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//           isActive 
//             ? 'bg-green-100 text-green-700' 
//             : 'bg-amber-100 text-amber-700'
//         }`}>
//           {status}
//         </span>
//       </div>
//       <div className="space-y-3 pt-4 border-t border-border">
//         <div className="flex justify-between text-sm">
//           <span className="text-muted-foreground">Expected Salary</span>
//           <span className="font-semibold text-foreground">{salary}</span>
//         </div>
//         <div className="flex justify-between text-sm">
//           <span className="text-muted-foreground">Drive Date</span>
//           <span className="font-semibold text-foreground">{date}</span>
//         </div>
//       </div>
//       <button className="w-full mt-5 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 font-semibold rounded-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
//         Apply Now
//       </button>
//     </div>
//   )
// }

// // Hiring Drives Section
// function HiringDrivesSection() {
//   const drives = [
//     { company: 'TechVision Solutions', positions: 'Software Engineer (5 positions)', date: 'March 15, 2024', salary: '₹6.5 - ₹9 LPA', status: 'Active' },
//     { company: 'DataFlow Analytics', positions: 'Data Scientist (3 positions)', date: 'March 18, 2024', salary: '₹8 - ₹12 LPA', status: 'Active' },
//     { company: 'CloudNine Systems', positions: 'DevOps Engineer (4 positions)', date: 'March 22, 2024', salary: '₹7 - ₹11 LPA', status: 'Upcoming' },
//     { company: 'InnovateLabs', positions: 'Product Manager (2 positions)', date: 'March 25, 2024', salary: '₹10 - ₹15 LPA', status: 'Active' },
//     { company: 'DigitalFirst Agency', positions: 'Marketing Manager (3 positions)', date: 'March 28, 2024', salary: '₹5.5 - ₹8 LPA', status: 'Active' },
//     { company: 'SecureNet India', positions: 'Security Analyst (2 positions)', date: 'April 2, 2024', salary: '₹6 - ₹9.5 LPA', status: 'Upcoming' },
//   ]

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-secondary/5">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
//             Active Hiring Drives
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Connect directly with top companies recruiting right now. Apply for positions matching your skills and aspirations
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {drives.map((drive, idx) => (
//             <HiringDriveCard key={idx} {...drive} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // Recruiter Card Component
// function RecruiterCard({ name, title, company, image, verified }: { name: string; title: string; company: string; image: string; verified: boolean }) {
//   return (
//     <div className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
//       <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 relative">
//         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-full" />
//       </div>
//       <div className="p-6 text-center -mt-12 relative z-10">
//         <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-card bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
//           <Users className="w-10 h-10 text-secondary" />
//         </div>
//         <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
//         <p className="text-sm text-primary font-semibold mb-1">{title}</p>
//         <p className="text-xs text-muted-foreground mb-3">{company}</p>
//         {verified && (
//           <div className="flex items-center justify-center gap-1 text-xs text-green-600 font-medium">
//             <CheckCircle className="w-4 h-4" />
//             Verified Recruiter
//           </div>
//         )}
//         <button className="w-full mt-4 px-4 py-2 bg-secondary/10 text-secondary hover:bg-secondary/20 font-semibold rounded-lg transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground text-sm">
//           View Profile
//         </button>
//       </div>
//     </div>
//   )
// }

// // Recruiter Highlights Section
// function RecruiterHighlightsSection() {
//   const recruiters = [
//     { name: 'Priya Sharma', title: 'Engineering Lead', company: 'TechVision Solutions', verified: true },
//     { name: 'Rajesh Kumar', title: 'HR Manager', company: 'DataFlow Analytics', verified: true },
//     { name: 'Aniket Desai', title: 'Talent Acquisition', company: 'CloudNine Systems', verified: true },
//     { name: 'Neha Verma', title: 'Hiring Manager', company: 'InnovateLabs', verified: true },
//     { name: 'Vikram Singh', title: 'Director - Talent', company: 'DigitalFirst Agency', verified: true },
//     { name: 'Sneha Gupta', title: 'Recruitment Lead', company: 'SecureNet India', verified: true },
//   ]

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
//             Meet Our Top Recruiters
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Connect with industry leaders and hiring managers from India's most innovative companies
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recruiters.map((recruiter, idx) => (
//             <RecruiterCard key={idx} {...recruiter} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // Update Card Component
// function UpdateCard({ date, title, category, description }: { date: string; title: string; category: string; description: string }) {
//   const categoryColors: Record<string, string> = {
//     'Success Story': 'bg-green-100 text-green-700',
//     'Program Update': 'bg-blue-100 text-blue-700',
//     'Company News': 'bg-purple-100 text-purple-700',
//     'Achievement': 'bg-orange-100 text-orange-700',
//   }

//   return (
//     <div className="group bg-card border border-border rounded-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:bg-gradient-to-r hover:from-card hover:to-primary/5">
//       <div className="flex items-start gap-4">
//         <div className="flex-shrink-0 text-xs font-bold text-primary pt-1">
//           <div className="text-center">
//             <div className="text-2xl leading-none">{date.split(' ')[0]}</div>
//             <div className="text-muted-foreground">{date.split(' ').slice(1).join(' ')}</div>
//           </div>
//         </div>
//         <div className="flex-1 min-w-0">
//           <div className="flex items-start justify-between gap-2 mb-2">
//             <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2">{title}</h3>
//           </div>
//           <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[category] || 'bg-muted text-muted-foreground'}`}>
//             {category}
//           </span>
//           <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
//           <button className="mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
//             Read More <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Recent Updates Section
// function RecentUpdatesSection() {
//   const updates = [
//     { date: '15 Mar', title: 'Isha Mehra Lands Dream Role at TechVision Solutions', category: 'Success Story', description: 'After completing our Full Stack program, Isha secured an engineering position with a ₹9.5 LPA package.' },
//     { date: '12 Mar', title: 'New Cloud & DevOps Program Launched', category: 'Program Update', description: 'Master AWS, Docker, and Kubernetes with industry experts. Limited seats available for early registrations.' },
//     { date: '10 Mar', title: 'Google Cloud Partnership Announcement', category: 'Company News', description: 'We\'ve partnered with Google Cloud to bring exclusive training and certification programs.' },
//     { date: '08 Mar', title: 'Batch of 250 Students Successfully Placed', category: 'Achievement', description: 'Our latest cohort achieved 98% placement rate with an average package of ₹8.2 LPA.' },
//     { date: '05 Mar', title: 'Rajesh Kumar Promotion to Senior Analyst', category: 'Success Story', description: 'Promoted within 18 months of joining! Rajesh\'s dedication and continuous learning paid off.' },
//     { date: '01 Mar', title: 'New Mentor Program Expanded to 50+ Professionals', category: 'Program Update', description: 'Connect with senior leaders from top tech companies for 1-on-1 mentorship sessions.' },
//   ]

//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-secondary/5">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
//             Recent Placement Updates
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Stay updated with latest success stories, program launches, and placement achievements from our community
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
//           {updates.map((update, idx) => (
//             <UpdateCard key={idx} {...update} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // CTA Section
// function CTASection() {
//   return (
//     <section className="py-16 sm:py-24 px-4 sm:px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
//           <div className="relative px-6 sm:px-10 py-12 sm:py-16 text-center text-white space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold text-balance">
//               Ready to Transform Your Career?
//             </h2>
//             <p className="text-lg text-white/90 max-w-2xl mx-auto text-balance">
//               Join thousands of successful professionals. Start your journey today with personalized training, mentorship, and guaranteed placement opportunities.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
//               <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 Get Started Now
//               </button>
//               <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // Footer Section
// function Footer() {
//   return (
//     <footer className="bg-foreground text-primary-foreground py-12 sm:py-16 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <Briefcase className="w-5 h-5" />
//               PlacementPro
//             </h3>
//             <p className="text-sm text-primary-foreground/70">Your gateway to career excellence and professional growth.</p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Programs</h4>
//             <ul className="space-y-2 text-sm text-primary-foreground/70">
//               <li><a href="#" className="hover:text-primary-foreground transition">Development</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Data Science</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Product</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Cloud</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-sm text-primary-foreground/70">
//               <li><a href="#" className="hover:text-primary-foreground transition">About</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Blog</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Careers</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Connect</h4>
//             <ul className="space-y-2 text-sm text-primary-foreground/70">
//               <li><a href="#" className="hover:text-primary-foreground transition">LinkedIn</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Twitter</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">Instagram</a></li>
//               <li><a href="#" className="hover:text-primary-foreground transition">YouTube</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
//           <p>&copy; 2024 PlacementPro. All rights reserved. | Privacy Policy | Terms of Service</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // Main Page Component
// export default function Page() {
//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       <HeroSection />
//       <MetricsSection />
//       <TrainingProgramsSection />
//       <HiringDrivesSection />
//       <RecruiterHighlightsSection />
//       <RecentUpdatesSection />
//       <CTASection />
//       <Footer />
//     </main>
//   )
// }
