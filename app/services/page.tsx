"use client"

import ServicesHero from "@/components/services/ServicesHero"
import ServicesGrid from "@/components/services/ServicesGrid"
import WhyChooseUs from "@/components/services/WhyChooseUs"
import ServicesProcess from "@/components/services/ServicesProcess"
// import ServicesCTA from "@/components/services/ServicesCTA"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesProcess />
      {/* <ServicesCTA /> */}
    </>
  )
}
