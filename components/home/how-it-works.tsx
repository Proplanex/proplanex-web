"use client"

import { motion } from "framer-motion"
import { Upload, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Connect Your Data",
    description: "Import your existing data or start fresh. Our system integrates with your current workflows seamlessly.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure Your Workflow",
    description: "Set up your production lines, inventory categories, and automation rules to match your operations.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Scale",
    description: "Go live with confidence. Our AI learns your patterns and continuously optimizes your processes.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-wider uppercase"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Get started in three simple steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From setup to full operation in days, not months. We make the transition effortless.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full glass-card mb-6">
                <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
