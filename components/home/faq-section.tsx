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
    question: "How long does implementation take?",
    answer: "Most factories are fully operational within 2-4 weeks. Our team provides hands-on support during the entire onboarding process, including data migration, training, and configuration.",
  },
  {
    question: "Can I import data from my existing systems?",
    answer: "Yes, Proplanex supports data import from Excel, CSV, and most common ERP systems. Our team can help you migrate your existing data seamlessly without any disruption to your operations.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, regular backups, and comply with industry standards including SOC 2 Type II. Your data is stored in secure, geo-redundant data centers.",
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, our Enterprise plan includes custom API integrations with your existing tools, including accounting software, shipping providers, and machinery systems. We also have a growing library of pre-built integrations.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Professional plans get priority support with faster response times. Enterprise customers receive a dedicated account manager and 24/7 phone support.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! We offer a 14-day free trial on all plans with no credit card required. You can also schedule a personalized demo with our team to see how Proplanex fits your specific needs.",
  },
]

export function FAQSection() {
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know about Proplanex. Can&apos;t find the answer? Contact our team.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
