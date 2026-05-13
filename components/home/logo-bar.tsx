"use client"

import { motion } from "framer-motion"

const logos = [
  "TextileCo",
  "FabricWorks",
  "YarnMasters",
  "WeaveTech",
  "SpinCraft",
  "LoopIndustries",
]

export function LogoBar() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by leading textile manufacturers worldwide
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
