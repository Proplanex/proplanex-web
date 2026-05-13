"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "David Chen",
    role: "CEO & Co-founder",
    bio: "Former textile factory owner with 15+ years in manufacturing.",
    avatar: "DC",
  },
  {
    name: "Sarah Martinez",
    role: "CTO & Co-founder",
    bio: "Ex-Google engineer specializing in cloud infrastructure and AI.",
    avatar: "SM",
  },
  {
    name: "Raj Patel",
    role: "VP of Product",
    bio: "Product leader with experience at SAP and Oracle ERP divisions.",
    avatar: "RP",
  },
  {
    name: "Emily Thompson",
    role: "VP of Customer Success",
    bio: "10+ years helping manufacturers adopt new technologies.",
    avatar: "ET",
  },
  {
    name: "Michael Okonkwo",
    role: "Head of Engineering",
    bio: "Built scalable systems serving millions of users globally.",
    avatar: "MO",
  },
  {
    name: "Lisa Wang",
    role: "Head of AI",
    bio: "PhD in Machine Learning, focused on predictive manufacturing.",
    avatar: "LW",
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-wider uppercase"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Meet the people behind Proplanex
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A diverse team of industry experts, engineers, and innovators committed to transforming manufacturing.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:bg-card/50 transition-colors"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <span className="text-2xl font-bold text-primary">{member.avatar}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <button className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" aria-label={`${member.name} on LinkedIn`}>
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" aria-label={`${member.name} on Twitter`}>
                  <Twitter className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-2">
            Want to join our team?
          </p>
          <a href="/contact" className="text-primary hover:underline font-medium">
            View open positions &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
