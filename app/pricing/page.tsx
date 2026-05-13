import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Pricing | Proplanex - Textile ERP Solutions",
  description: "Simple, transparent pricing for textile manufacturers. Choose the plan that fits your factory size with our 14-day free trial.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
