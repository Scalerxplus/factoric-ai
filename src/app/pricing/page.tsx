"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { NationalAlignment } from "@/components/NationalAlignment";
import { Check, Plus, Shield, Zap, Target, Eye, ArrowRight, TrendingDown } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "BOS M",
    title: "The 24/7 Digital Frontline",
    price: "₹5,999",
    target: "MSMEs, Hospitals, Service Hubs",
    tagline: "The Digital Operative that never sleeps.",
    accent: "silver",
    features: [
      "Omnichannel Deployment: WhatsApp, FB, Instagram",
      "Astra-1 Brain: James Bond-level qualification logic",
      "Elite CRM (Mini BOS): Absolute Source of Truth",
      "Intent Heatmapping: AI-driven lead scoring"
    ]
  },
  {
    name: "BOS X",
    title: "The Unified Command",
    price: "₹11,999",
    target: "Clinics, Real Estate, Scaled Ops",
    tagline: "Strategic Interconnectivity. Total Revenue Control.",
    accent: "purple",
    features: [
      "Everything in BOS M, PLUS:",
      "Cloud Telephony: AI-monitored voice & transcription",
      "Unified Financial Bridge: Sync with Billing/Payments",
      "Third-Party Neural Links: ERP & API integrations",
      "Automated Document Dispatch: Instant AI triggers"
    ]
  },
  {
    name: "BOS Z",
    title: "The Sovereign Sentinel",
    price: "₹19,999",
    target: "Factories, High-Security Units",
    tagline: "Omniscient Intelligence. Physical & Digital Security.",
    accent: "purple-glow",
    featured: true,
    features: [
      "Everything in BOS X, PLUS:",
      "Neural Vision Deployment: CCTV Computer Vision",
      "Anomaly Detection Engine: Safety & Security tracking",
      "Tactical Threat Intelligence: Instant mobile alerts",
      "Full Organizational Control: God-View Dashboard"
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] uppercase font-black tracking-[0.6em] text-purple-500 mb-8">
            Strategic Selection Menu
          </div>
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-8">
            Choose your level of <br />
            <span className="text-white/40">Autonomous Intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/30 max-w-2xl mx-auto font-medium leading-relaxed">
            Sovereignty. Intelligence. Zero Friction. <br />
            Scale your institution without adding human headcount.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className={`relative p-10 hairline-border rounded-sm bg-white/[0.02] flex flex-col ${
                tier.accent === 'purple-glow' ? 'border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.1)]' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-[8px] font-black uppercase tracking-[0.3em] rounded-full text-black">
                  Recommended Architecture
                </div>
              )}
              
              <div className="mb-12">
                <div className={`text-[12px] font-black tracking-[0.4em] uppercase mb-4 ${
                  tier.accent.includes('purple') ? 'text-purple-500' : 'text-white/40'
                }`}>
                  {tier.name}
                </div>
                <h3 className="text-2xl font-medium mb-2">{tier.title}</h3>
                <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest mb-8">{tier.target}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-light tracking-tighter">{tier.price}</span>
                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest">/ Month</span>
                </div>
                <p className="text-sm text-white/40 font-medium italic">"{tier.tagline}"</p>
              </div>

              <div className="space-y-6 flex-grow mb-12">
                <div className="text-[8px] font-black uppercase tracking-[0.4em] text-white/10 pb-4 border-b border-white/5">
                  Strategic Capabilities
                </div>
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex gap-4 items-start group">
                    <Plus className={`w-3 h-3 mt-1 shrink-0 transition-colors ${
                      tier.accent.includes('purple') ? 'text-purple-500' : 'text-white/20'
                    }`} />
                    <span className="text-xs text-white/60 leading-relaxed font-medium group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/login?tier=${tier.name.replace('BOS ', '')}`}
                className={`w-full py-5 text-center rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all ${
                  tier.accent.includes('purple') 
                    ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-xl shadow-purple-900/20' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Initialize Deployment
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section-spacing border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-purple-500">The ROI Protocol</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                Intelligence is cheaper <br />
                <span className="text-white/40">than legacy labor.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                Factoric AI operatives work 24/7 with zero operational friction. While a legacy headcount costs ₹20k - ₹40k for 8 hours of work, Factoric BOS delivers 24-hour elite performance at a fraction of the capital expense.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 hairline-border rounded-sm bg-white/[0.01]">
                  <TrendingDown className="w-6 h-6 text-purple-500 mb-4" />
                  <div className="text-2xl font-light mb-1">60% - 80%</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">Cost Reduction</div>
                </div>
                <div className="p-8 hairline-border rounded-sm bg-white/[0.01]">
                  <Zap className="w-6 h-6 text-purple-500 mb-4" />
                  <div className="text-2xl font-light mb-1">10x</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">Response Speed</div>
                </div>
              </div>
            </div>

            <div className="p-12 hairline-border rounded-sm bg-black relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-purple-500/5 blur-3xl" />
              <div className="relative z-10">
                <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-8 pb-4 border-b border-white/5">
                  Labor Cost Comparison
                </div>
                <div className="space-y-8">
                  <div className="flex justify-between items-end border-b border-white/5 pb-6">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/40 mb-2">Human Operative</div>
                      <div className="text-xl font-medium">Receptionist / Sales Exec</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Avg Salary</div>
                      <div className="text-xl font-light text-red-500/60">₹15k - ₹25k / mo</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-6">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/40 mb-2">Factoric Digital Operative</div>
                      <div className="text-xl font-medium">BOS M Digital Frontline</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-purple-500 mb-1">Sovereign Cost</div>
                      <div className="text-xl font-medium text-purple-500">₹5,999 / mo</div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="text-[8px] uppercase font-black tracking-[0.5em] text-white/10 mb-4">Conclusion</div>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      Factoric AI is cheaper than a basic data-entry operator but 10x smarter, delivering 24/7 availability with proprietary "James Bond" level logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          &copy; 2024 FACTORIC AI • LABORATORY RECORDS • PRICING ARCHIVE
        </p>
      </footer>
    </main>
  );
}
