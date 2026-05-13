"use client"

import { motion } from "framer-motion"
import { 
  Factory, 
  Package, 
  ClipboardList, 
  Truck, 
  Brain, 
  BarChart3 
} from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Production Planning",
    description: "Optimize production schedules with intelligent planning tools and real-time adjustments.",
  },
  {
    icon: Package,
    title: "Yarn Inventory",
    description: "Track yarn stocks, colors, and materials across all your warehouses in real-time.",
  },
  {
    icon: ClipboardList,
    title: "Order Management",
    description: "Manage orders from placement to delivery with complete visibility and control.",
  },
  {
    icon: Truck,
    title: "Delivery & Challan",
    description: "Generate delivery challans and track shipments with automated documentation.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get intelligent recommendations for production optimization and demand forecasting.",
  },
  {
    icon: BarChart3,
    title: "Real-time Reports",
    description: "Access comprehensive dashboards and reports for data-driven decision making.",
  },
]

export function FeaturesPreview() {
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
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Everything you need to run your factory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Powerful tools designed specifically for textile manufacturers to streamline operations.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass-card hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
