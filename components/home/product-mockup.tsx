"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Package, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export function ProductMockup() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-wider uppercase"
          >
            Dashboard Preview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance"
          >
            Powerful insights at your fingertips
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A beautiful, intuitive dashboard that gives you complete visibility into your operations.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
          
          {/* Dashboard Container */}
          <div className="relative rounded-2xl glass-card p-1 gradient-border">
            <div className="bg-card rounded-xl p-4 sm:p-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-sm text-muted-foreground">Proplanex Dashboard</div>
                <div className="w-16" />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Production", value: "24,892", change: "+12.5%", up: true, icon: TrendingUp },
                  { label: "Inventory Items", value: "1,247", change: "+3.2%", up: true, icon: Package },
                  { label: "Active Orders", value: "342", change: "-2.1%", up: false, icon: Users },
                  { label: "Efficiency Rate", value: "94.2%", change: "+5.4%", up: true, icon: Activity },
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-muted/30 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                      <div className={`flex items-center text-xs ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                        {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Main Chart */}
                <div className="lg:col-span-2 p-4 rounded-xl bg-muted/30 border border-border/50 h-64">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Production Overview</span>
                    <span className="text-xs text-muted-foreground">Last 7 days</span>
                  </div>
                  {/* Simulated Chart Bars */}
                  <div className="flex items-end justify-between h-40 gap-2 px-4">
                    {[65, 80, 55, 90, 75, 85, 95].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-primary/60 rounded-t-md hover:bg-primary transition-colors"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side Panel */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                  <span className="text-sm font-medium text-foreground">Recent Activity</span>
                  <div className="mt-4 space-y-3">
                    {[
                      { text: "Order #4521 completed", time: "2m ago" },
                      { text: "New shipment arrived", time: "15m ago" },
                      { text: "Production line A active", time: "1h ago" },
                      { text: "Inventory updated", time: "2h ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.text}</span>
                        <span className="text-xs text-muted-foreground/70">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
