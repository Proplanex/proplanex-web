"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonFeatures = [
  { feature: "Cloud-based access", proplanex: true, traditional: false },
  { feature: "AI-powered insights", proplanex: true, traditional: false },
  { feature: "Real-time collaboration", proplanex: true, traditional: false },
  { feature: "Mobile app", proplanex: true, traditional: false },
  { feature: "Automatic updates", proplanex: true, traditional: false },
  { feature: "Multi-factory support", proplanex: true, traditional: false },
  { feature: "Textile-specific features", proplanex: true, traditional: true },
  { feature: "Production planning", proplanex: true, traditional: true },
  { feature: "Implementation time", proplanex: "2-4 weeks", traditional: "6-12 months" },
  { feature: "Upfront costs", proplanex: "None", traditional: "High" },
]

export function FeaturesComparison() {
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
            Comparison
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Why choose Proplanex?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            See how Proplanex compares to traditional on-premise ERP systems.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
              <div className="p-4 lg:p-6 font-semibold text-foreground">Feature</div>
              <div className="p-4 lg:p-6 font-semibold text-primary text-center">Proplanex</div>
              <div className="p-4 lg:p-6 font-semibold text-muted-foreground text-center">Traditional ERP</div>
            </div>

            {/* Rows */}
            {comparisonFeatures.map((item, index) => (
              <div 
                key={item.feature}
                className={`grid grid-cols-3 ${index < comparisonFeatures.length - 1 ? 'border-b border-border/50' : ''}`}
              >
                <div className="p-4 lg:p-6 text-foreground">{item.feature}</div>
                <div className="p-4 lg:p-6 flex justify-center">
                  {typeof item.proplanex === 'boolean' ? (
                    item.proplanex ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )
                  ) : (
                    <span className="text-primary font-medium">{item.proplanex}</span>
                  )}
                </div>
                <div className="p-4 lg:p-6 flex justify-center">
                  {typeof item.traditional === 'boolean' ? (
                    item.traditional ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )
                  ) : (
                    <span className="text-muted-foreground">{item.traditional}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
