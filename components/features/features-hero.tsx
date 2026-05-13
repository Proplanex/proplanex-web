"use client"

import { motion } from "framer-motion"

export function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-wider uppercase"
          >
            Features
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6 text-balance"
          >
            Powerful tools for modern textile manufacturing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to plan, execute, and optimize your textile production, 
            all in one intelligent platform.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
