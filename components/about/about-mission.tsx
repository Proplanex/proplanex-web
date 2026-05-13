"use client"

import { motion } from "framer-motion"

export function AboutMission() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              From factory floors to cloud infrastructure
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Proplanex was founded in 2020 by a team of textile industry veterans and 
                software engineers who saw firsthand how legacy systems were holding back 
                manufacturers from reaching their full potential.
              </p>
              <p>
                After spending years working with outdated ERP systems that were expensive, 
                slow, and difficult to use, we decided to build something better. We combined 
                deep textile industry knowledge with cutting-edge cloud technology and AI to 
                create a solution that&apos;s both powerful and accessible.
              </p>
              <p>
                Today, Proplanex powers hundreds of textile factories across the globe, 
                helping them increase efficiency, reduce waste, and stay competitive in 
                an increasingly demanding market.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "500+", label: "Factories Powered" },
              { value: "50M+", label: "Products Tracked" },
              { value: "25+", label: "Countries Served" },
              { value: "99.9%", label: "Uptime Delivered" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
