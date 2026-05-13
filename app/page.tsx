import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { LogoBar } from "@/components/home/logo-bar"
import { FeaturesPreview } from "@/components/home/features-preview"
import { HowItWorks } from "@/components/home/how-it-works"
import { ProductMockup } from "@/components/home/product-mockup"
import { Testimonials } from "@/components/home/testimonials"
import { PricingPreview } from "@/components/home/pricing-preview"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <FeaturesPreview />
      <HowItWorks />
      <ProductMockup />
      <Testimonials />
      <PricingPreview />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
