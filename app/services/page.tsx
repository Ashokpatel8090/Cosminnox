"use client"

import ServicesHero from "@/components/services/ServicesHero"
import ServicesGrid from "@/components/services/ServicesGrid"
import WhyChooseUs from "@/components/services/WhyChooseUs"
import ServicesProcess from "@/components/services/ServicesProcess"
import ServicesCTA from "@/components/services/ServicesCTA"

import {
  Globe,
  Smartphone,
  Cloud,
  Boxes,
  Zap,
  Shield,
  TrendingUp,
  Code2,
  Cpu,
  Database,
  Lock,
  Gauge,
  Users,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      slug: "/services/web-development",
      description: "Fast, scalable modern web apps.",
      features: ["Responsive Design", "SEO", "PWAs", "API Integration"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      slug: "/services/app-development",
      description: "iOS, Android & cross-platform apps.",
      features: ["iOS", "Android", "Flutter", "React Native"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      slug: "/services/cloud-solutions",
      description: "Secure & scalable cloud infrastructure.",
      features: ["AWS", "Azure", "DevOps", "CI/CD"],
    },
    {
      icon: Boxes,
      title: "Digital Products",
      slug: "/services/digital-products",
      description: "From MVP to scalable products.",
      features: ["MVP", "UX Research", "Growth"],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-performance systems.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Security-first architecture.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Built to scale 10x.",
    },
  ]

  const detailedFeatures = [
    { icon: Code2, title: "Clean Code", description: "Maintainable architecture" },
    { icon: Cpu, title: "Performance", description: "Optimized systems" },
    { icon: Database, title: "Data", description: "Smart data strategy" },
    { icon: Lock, title: "Security", description: "Multi-layer protection" },
    { icon: Gauge, title: "QA", description: "Reliable testing" },
    { icon: Users, title: "Support", description: "24/7 expert help" },
  ]

  return (
    <>
      <ServicesHero />
      <ServicesGrid services={services} />
      <WhyChooseUs benefits={benefits} features={detailedFeatures} />
      <ServicesProcess />
      <ServicesCTA />
    </>
  )
}
