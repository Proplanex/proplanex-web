import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | Proplanex - Textile ERP Solutions",
  description: "Learn about Proplanex, our mission to transform textile manufacturing, and the team behind our AI-powered ERP solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <CTASection />
      <Footer />
    </main>
  )
}
