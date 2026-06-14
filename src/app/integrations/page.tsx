"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageSquare, Phone, CreditCard, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IntegrationsPage() {
  const categories = [
    {
      title: "Messaging",
      icon: MessageSquare,
      items: ["WhatsApp Business API", "Telegram", "Enterprise Email", "SMS Gateways"]
    },
    {
      title: "Telephony",
      icon: Phone,
      items: ["Exotel", "MyOperator", "Knowlarity", "Cloud Telephony APIs"]
    },
    {
      title: "Payments",
      icon: CreditCard,
      items: ["Razorpay", "Stripe", "UPI Dynamic APIs", "Global Banking Rails"]
    },
    {
      title: "Legacy Systems",
      icon: Layers,
      items: ["Healthray", "Practo", "Salesforce (via Webhooks)", "Custom ERPs"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans">
      <Navbar />
      
      <section className="relative pt-48 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em]">Ecosystem Connectivity</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
            Connect Your Entire Operational Stack.
          </h1>
          <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl mx-auto">
            You don't need to rip out your existing infrastructure. Factoric AI layers on top of your current tools to add autonomous intelligence via simple APIs and Webhooks.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-10 glass-card border border-white/5 rounded-sm hover:bg-white/[0.02] transition-all">
                <cat.icon className="w-8 h-8 text-astra-green mb-8" />
                <h3 className="text-2xl font-bold mb-8">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-xs font-bold text-white/40 flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-astra-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center bg-white/[0.01] p-16 rounded-sm border border-white/5">
          <h2 className="text-3xl font-bold mb-8">Don't see your tool here?</h2>
          <p className="text-white/40 mb-12">Our engineering team builds custom webhooks and API bridges for enterprise clients every week.</p>
          <Link href="/contact" className="text-astra-green font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 group">
            Request Custom Integration <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
