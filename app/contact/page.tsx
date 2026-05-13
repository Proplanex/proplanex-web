import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Proplanex - Textile ERP Solutions",
  description: "Get in touch with Proplanex. Book a demo, start your free trial, or contact our sales and support teams.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
