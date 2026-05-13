"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You can sign up for any plan and use all features for 14 days without entering payment information. At the end of the trial, you can choose to continue with a paid subscription or your account will be downgraded to read-only mode.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers for annual plans, and PayPal. Enterprise customers can also pay via invoice with NET-30 terms.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes, you save approximately 20% when you choose annual billing. This applies to all plans except Enterprise, which has custom pricing based on your specific requirements.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains available in read-only mode for 30 days after cancellation. During this period, you can export all your data. After 30 days, data is securely deleted unless you request an extension.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a full refund within the first 30 days of a paid subscription if you're not satisfied. After 30 days, refunds are considered on a case-by-case basis. The free trial doesn't require any payment.",
  },
]

export function PricingFAQ() {
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
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Pricing questions
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
