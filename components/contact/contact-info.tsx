"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team is here to help",
    contact: "hello@proplanex.com",
    link: "mailto:hello@proplanex.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm",
    contact: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "123 Tech Park, San Francisco, CA",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Support availability",
    contact: "24/7 for Enterprise customers",
    link: "#",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Other ways to reach us</h2>
        <p className="text-muted-foreground">
          Prefer a different method? No problem. Here are all the ways you can get in touch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="glass-card rounded-xl p-5 hover:bg-card/50 transition-colors block"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <method.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
            <p className="text-sm text-primary">{method.contact}</p>
          </motion.a>
        ))}
      </div>

      {/* FAQ Link */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-2">Looking for quick answers?</h3>
        <p className="text-muted-foreground mb-4">
          Check out our FAQ section for answers to common questions about pricing, 
          implementation, features, and more.
        </p>
        <a href="/#faq" className="text-primary hover:underline font-medium">
          View FAQ &rarr;
        </a>
      </div>

      {/* Demo Booking */}
      <div className="glass-card rounded-xl p-6 gradient-border">
        <h3 className="font-semibold text-foreground mb-2">Book a personalized demo</h3>
        <p className="text-muted-foreground mb-4">
          See Proplanex in action with a 30-minute demo tailored to your specific 
          manufacturing needs.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
            30 min session
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
            Live Q&A
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
            Custom walkthrough
          </span>
        </div>
      </div>
    </motion.div>
  )
}
