"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Customer Obsession",
    description: "Every feature we build starts with a customer need. We listen, learn, and iterate to deliver solutions that truly solve problems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace new technologies and approaches to continuously improve our platform. AI, machine learning, and automation are core to our product.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We see ourselves as partners in our customers' success. When they grow, we grow. Their challenges are our challenges to solve.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Manufacturing data is sensitive. We take security seriously with enterprise-grade protection and compliance with global standards.",
  },
]

export function AboutValues() {
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
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            What drives us every day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Our values guide every decision we make and every line of code we write.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
