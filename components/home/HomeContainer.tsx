"use client"

import HomeHero from "./HomeHero"
import HomeHighlights from "./HomeHighlights"
import HomeCTA from "./HomeCTA"
import FaqSection from "./FAQSection"

export default function HomeContainer() {
  return (
    <div className="pt-20 overflow-hidden">
      <HomeHero />
      <HomeHighlights />
      <HomeCTA />
      <FaqSection />
    </div>
  )
}
