"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 lg:p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass-card rounded-2xl p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
        <p className="text-muted-foreground mb-8">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                className="bg-muted/50 border-border"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                className="bg-muted/50 border-border"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              className="bg-muted/50 border-border"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
              className="bg-muted/50 border-border"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
              What are you interested in?
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full h-10 px-3 rounded-md bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="demo">Book a Demo</option>
              <option value="trial">Start Free Trial</option>
              <option value="pricing">Pricing Information</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your needs..."
              className="w-full px-3 py-2 rounded-md bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
