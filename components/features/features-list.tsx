"use client"

import { motion } from "framer-motion"
import { 
  Factory, 
  Package, 
  ClipboardList, 
  Truck, 
  Brain, 
  BarChart3,
  Building2,
  Users,
  Bell,
  Shield,
  Zap,
  Globe
} from "lucide-react"

const features = [
  {
    id: "production",
    icon: Factory,
    title: "Production Planning System",
    description: "Create and manage production schedules with drag-and-drop simplicity. Our intelligent system automatically optimizes for machine utilization, labor availability, and delivery deadlines.",
    highlights: ["Visual scheduling board", "Auto-optimization", "Capacity planning", "Real-time updates"],
  },
  {
    id: "inventory",
    icon: Package,
    title: "Yarn Inventory Tracking",
    description: "Track every spool, cone, and package across all your warehouses. Get real-time visibility into stock levels, colors, compositions, and receive automatic low-stock alerts.",
    highlights: ["Multi-warehouse support", "Batch tracking", "Low-stock alerts", "Quality grading"],
  },
  {
    id: "orders",
    icon: ClipboardList,
    title: "Order Management",
    description: "Manage the complete order lifecycle from quotation to delivery. Track order status, allocate production capacity, and keep customers informed with automatic updates.",
    highlights: ["Quote to cash", "Priority queuing", "Customer portal", "Status tracking"],
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery & Challan System",
    description: "Generate professional delivery challans, packing lists, and invoices automatically. Track shipments and maintain complete delivery records for compliance.",
    highlights: ["Auto-generation", "E-way bill integration", "Delivery tracking", "Proof of delivery"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Production Insights",
    description: "Our AI analyzes your production patterns to predict bottlenecks, optimize schedules, and forecast demand. Get actionable recommendations to improve efficiency.",
    highlights: ["Demand forecasting", "Bottleneck detection", "Optimization tips", "Pattern recognition"],
  },
  {
    id: "reports",
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Access comprehensive dashboards showing production metrics, inventory levels, and financial performance. Export reports or schedule automatic delivery to stakeholders.",
    highlights: ["Custom dashboards", "Scheduled reports", "Export options", "KPI tracking"],
  },
  {
    id: "multi-factory",
    icon: Building2,
    title: "Multi-factory Support",
    description: "Manage multiple production facilities from a single dashboard. Transfer inventory between locations, balance workloads, and maintain consistent processes across sites.",
    highlights: ["Centralized control", "Inter-site transfers", "Load balancing", "Unified reporting"],
  },
  {
    id: "users",
    icon: Users,
    title: "Team Collaboration",
    description: "Assign roles, set permissions, and collaborate seamlessly with your team. Track who did what with complete audit trails and activity logs.",
    highlights: ["Role-based access", "Activity logs", "Team chat", "Task assignment"],
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss critical updates with intelligent notifications. Get alerts for low inventory, production delays, quality issues, and important milestones.",
    highlights: ["Custom triggers", "Multi-channel", "Smart priority", "Digest options"],
  },
  {
    id: "security",
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with enterprise-grade security including encryption, regular backups, and compliance with industry standards.",
    highlights: ["SOC 2 compliant", "Data encryption", "Regular backups", "Access controls"],
  },
  {
    id: "integrations",
    icon: Zap,
    title: "Easy Integrations",
    description: "Connect with your existing tools including accounting software, e-commerce platforms, and shipping providers through our extensive API and pre-built integrations.",
    highlights: ["REST API", "Webhooks", "Pre-built connectors", "Custom integrations"],
  },
  {
    id: "global",
    icon: Globe,
    title: "Multi-language & Currency",
    description: "Operate globally with support for multiple languages, currencies, and regional compliance requirements. Perfect for manufacturers with international operations.",
    highlights: ["15+ languages", "Multi-currency", "Tax compliance", "Regional formats"],
  },
]

export function FeaturesList() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              {/* Icon/Visual */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative glass-card rounded-2xl p-8 lg:p-12">
                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
