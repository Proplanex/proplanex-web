"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "50K\BDT",
    description: "Perfect for small factories getting started with digital transformation",
    features: [
      { name: "Up to 2/3 Files", included: true },
      { name: "Production planning", included: true },
      { name: "Basic inventory tracking", included: true },
      { name: "Order management", included: true },
      { name: "Standard reports", included: true },
      { name: "Email support", included: true },
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    annualPrice: "$249",
    description: "For growing manufacturers with advanced production needs",
    features: [
      { name: "Up to 25 users", included: true },
      { name: "Advanced production planning", included: true },
      { name: "Full inventory management", included: true },
      { name: "Order management", included: true },
      { name: "Delivery & challan system", included: true },
      { name: "AI insights (beta)", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Multi-factory support", included: false },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    annualPrice: "Custom",
    description: "For large-scale operations with custom requirements",
    features: [
      { name: "Unlimited users", included: true },
      { name: "Full production suite", included: true },
      { name: "Complete inventory system", included: true },
      { name: "Full order management", included: true },
      { name: "Advanced delivery system", included: true },
      { name: "Full AI suite", included: true },
      { name: "Multi-factory support", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "24/7 phone support", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingPlans() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-6 lg:p-8 rounded-2xl ${
                plan.popular 
                  ? 'glass-card gradient-border glow scale-105 z-10' 
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.annualPrice !== plan.price && (
                  <p className="text-sm text-primary">
                    {plan.annualPrice}/month billed annually
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Minus className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                size="lg"
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            All plans include SSL encryption, automatic backups, and 99.9% uptime SLA.
          </p>
          <p className="text-sm text-muted-foreground">
            Need something different? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for custom solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
