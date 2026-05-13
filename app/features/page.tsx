import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesList } from "@/components/features/features-list"
import { FeaturesComparison } from "@/components/features/features-comparison"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Features | Proplanex - Textile ERP Solutions",
  description: "Explore all the powerful features Proplanex offers for textile manufacturing - from production planning to AI-powered insights.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FeaturesHero />
      <FeaturesList />
      <FeaturesComparison />
      <CTASection />
      <Footer />
    </main>
  )
}
