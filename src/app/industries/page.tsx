"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Stethoscope, Laptop, Warehouse, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Hospitals & Clinics",
      problem: "Clunky HMIS interfaces, missed OPD calls, and complex patient triage.",
      solution: "We unify the patient journey. From WhatsApp triage to digital check-ins and billing.",
      case: "Trusted by legacy healthcare institutions like Pahlajanis' (पहलाजानी) Women's Hospital.",
      accent: "border-astra-green/20"
    },
    {
      icon: Laptop,
      title: "Real Estate Developers",
      problem: "Thousands of junk leads wasting the sales team's time.",
      solution: "AI filters out 90% of low-intent leads, schedules site visits for serious buyers, and tracks token payments.",
      case: "Qualified demand, zero human entry.",
      accent: "border-astra-blue/20"
    },
    {
      icon: Warehouse,
      title: "Service Enterprises",
      problem: "Scaling headcount to manage growing inquiry volumes.",
      solution: "Deploy digital labor that scales infinitely without HR overhead.",
      case: "Infinite scale, zero HR friction.",
      accent: "border-astra-gold/20"
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
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em]">Sector Specific Solutions</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
            Built for Businesses Where Every Missed Handoff Costs Money.
          </h1>
          <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl mx-auto">
            Factoric AI fits environments where communication, scheduling, billing, and monitoring must work together in real-time.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {industries.map((ind, i) => (
            <div key={i} className={`p-16 glass-card border ${ind.accent} rounded-sm group hover:bg-white/[0.02] transition-all`}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                  <ind.icon className="w-12 h-12 text-white/20 group-hover:text-astra-green transition-colors" />
                  <h2 className="text-4xl font-bold">{ind.title}</h2>
                  <div className="pt-8 border-t border-white/5">
                    <div className="text-[10px] font-bold text-astra-green italic">{ind.case}</div>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-accent-red/40">The Problem</div>
                    <p className="text-xl text-white/60 font-medium leading-relaxed">{ind.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-astra-green/40">The Factoric Solution</div>
                    <p className="text-xl text-white font-medium leading-relaxed">{ind.solution}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-4 text-white hover:text-astra-green transition-colors font-black text-[10px] uppercase tracking-[0.4em]">
                    Deploy for {ind.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
