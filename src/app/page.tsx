"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { SecurityArchitecture } from "@/components/SecurityArchitecture";
import { AstraTerminal } from "@/components/AstraTerminal";
import { ValueGap } from "@/components/ValueGap";
import { 
  ArrowRight, Plus, Brain, Cpu, Shield, Activity, Zap, TrendingUp, Globe, 
  Stethoscope, Laptop, Warehouse, BarChart3, ShieldCheck, HelpCircle, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Is Factoric AI HIPAA and DPDPA compliant?",
    a: "Yes. Factoric AI is engineered for high-compliance industries. We offer sovereign data hosting and AES-4096 encryption to ensure all institutional data remains geofenced and protected."
  },
  {
    q: "Do I still need Zoho, Salesforce, or LeadSquared?",
    a: "No. Factoric AI is a full-stack Business Operating System (BOS) that natively replaces traditional CRMs. We have built-in capturing, engagement, nurturing, billing, and security vision - all within a single sovereign engine. You don't need external tools; you need Factoric."
  },
  {
    q: "Can AI agents really replace human front-desk staff?",
    a: "Factoric agents handle 80% of repetitive qualification and booking tasks, allowing your human staff to focus on high-value closing. We reduce response times by up to 60%."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] selection:bg-astra-green/30 font-sans">
      <Navbar />
      
      {/* 1. The Hero: Sovereign Command */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-astra-green/5 rounded-full blur-[160px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-12"
        >
          <NeuralLogo className="w-12 h-12 mx-auto mb-8 opacity-80" />
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em] mb-4 animate-pulse">Sovereign Command Active</div>
          <h1 className="text-4xl md:text-[90px] font-black tracking-tighter leading-[0.95] silver-gradient mb-8 text-balance">
            Deploy Autonomous <span className="text-accent-red">Digital Labor</span> for Your Business.
          </h1>
          
          <div className="bg-white/[0.03] border-y border-white/5 py-4 mb-8 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-xs md:text-sm uppercase font-black tracking-[0.4em] text-emerald-500">
                Factoric BOS replaces manual data entry and silent CRMs with an active AI workforce.
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-2xl text-white/40 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
            We automate your WhatsApp lead qualification, revenue syncing, and enterprise security - so your team can focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <Link 
              href="/chat" 
              className="w-full sm:w-auto px-8 md:px-16 py-5 md:py-6 bg-astra-green text-white hover:bg-astra-green/80 green-glow rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all text-center"
            >
              See Factoric in Action
            </Link>
            <div className="flex items-center gap-2">
              <Link 
                href="/pricing" 
                className="text-white/60 hover:text-white font-black text-[10px] uppercase tracking-[0.5em] transition-all"
              >
                Explore BOS Modules {"->"}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: The Social Proof (Trust Strip) */}
      <section className="py-12 border-b border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white/40">
            Powering Next-Gen Enterprise Operations Across Central India
          </h3>
          <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-30 group">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Pahlajanis' Women's Hospital</span>
              <span className="text-[7px] font-bold text-astra-green/40 mt-1 uppercase">Securing 500+ Hospital Beds</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Enterprise Grade Infrastructure</div>
          </div>
        </div>
      </section>

      {/* Section 3: "How It Works" (The 3-Step Flow) */}
      <section className="section-spacing border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24 text-center md:text-left">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em] mb-8">Operational Blueprint</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">How Our Business Operating System (BOS) Automates Work.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              { 
                step: "Connect (Ingest)", 
                desc: "Plug Factoric into your WhatsApp Business API, Cloud Telephony, and Website via simple webhooks.",
                accent: "text-astra-green"
              },
              { 
                step: "Think (Analyze)", 
                desc: "The Sovereign AI Brain (AgentX) reads intents, understands local languages (Hindi/English), and qualifies lead urgency in real-time.",
                accent: "text-astra-blue"
              },
              { 
                step: "Execute (Action)", 
                desc: "BOS automatically routes the lead, collects UPI payments, and updates your records. Zero human touch required.",
                accent: "text-astra-gold"
              }
            ].map((step, i) => (
              <div key={i} className="p-8 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all relative">
                <div className={`text-lg font-bold mb-4 ${step.accent}`}>{step.step}</div>
                <p className="text-sm text-white/40 leading-relaxed font-medium">{step.desc}</p>
                <div className="mt-8 text-[8px] font-black uppercase tracking-widest text-white/10">Step 0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Native Stack: All-in-One Sovereignty */}
      <section className="section-spacing border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em]">The Sovereign Stack</div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                Stop <span className="text-white/20 underline decoration-astra-green">Integrating.</span> <br />
                Start <span className="text-astra-green">Operating.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                Traditional CRMs (Zoho, Salesforce, LeadSquared) are fragmented silos that require expensive bridges. Factoric AI is a natively unified engine. We don't just "talk" to your tools; we have replaced them with superior, autonomous logic.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all">
                  <div className="text-[9px] font-black tracking-widest text-white/20 mb-2 uppercase">Native Capturing</div>
                  <div className="text-xs font-bold text-white/60 group-hover:text-astra-green transition-colors">Omnichannel Intake - Cloud Telephony - Chat - WhatsApp</div>
                </div>
                <div className="p-4 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all">
                  <div className="text-[9px] font-black tracking-widest text-white/20 mb-2 uppercase">Native Nurturing</div>
                  <div className="text-xs font-bold text-white/60 group-hover:text-astra-green transition-colors">Autonomous Engagement - No Human Entry</div>
                </div>
                <div className="p-4 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all">
                  <div className="text-[9px] font-black tracking-widest text-white/20 mb-2 uppercase">Native Billing</div>
                  <div className="text-xs font-bold text-white/60 group-hover:text-astra-green transition-colors">Instant Invoicing - Payment Follow-ups</div>
                </div>
                <div className="p-4 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all">
                  <div className="text-[9px] font-black tracking-widest text-white/20 mb-2 uppercase">Native Vision</div>
                  <div className="text-xs font-bold text-white/60 group-hover:text-astra-green transition-colors">CCTV Security - Facility Overwatch</div>
                </div>
              </div>
            </div>

            <div className="p-12 glass-card rounded-sm border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-astra-green/5 blur-3xl group-hover:bg-astra-green/10 transition-all" />
              <div className="relative z-10 space-y-8">
                <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 border-b border-white/5 pb-4">Unified Operating System</div>
                <div className="space-y-6">
                  {[
                    "Replacing fragmented CRM silos with Unified BOS...",
                    "Eliminating the need for third-party billing bridges...",
                    "Deploying native Computer Vision security layers...",
                    "Consolidating institutional logic into one engine..."
                  ].map((log, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-1 h-1 rounded-full bg-astra-green animate-pulse" />
                      <div className="text-[10px] font-mono text-white/40">{log}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div className="space-y-6">
              <div className="p-4 bg-astra-green/10 w-fit rounded-full mb-8">
                <Zap className="w-6 h-6 text-astra-green" />
              </div>
              <h3 className="text-2xl font-bold">Humans Sleep. <br />Opportunities Don't.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                While your competitors wait for business hours, Factoric agents are already closing deals. We don't just "respond"; we convert intent into revenue before the lead even cools down.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-astra-blue/10 w-fit rounded-full mb-8">
                <TrendingUp className="w-6 h-6 text-astra-blue" />
              </div>
              <h3 className="text-2xl font-bold">From Data Entry <br />to Mission Execution.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Traditional CRMs are expensive digital graveyards. Factoric is a living workforce. Our agents don't wait for you to type; they think, analyze, and act on your behalf.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-astra-gold/10 w-fit rounded-full mb-8">
                <Globe className="w-6 h-6 text-astra-gold" />
              </div>
              <h3 className="text-2xl font-bold">Absolute Operational <br />Sovereignty.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Scale your empire without increasing your headcount. One founder. One engine. Global reach. That is the Factoric advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48">
        <AstraTerminal />
      </section>

      <section className="max-w-7xl mx-auto px-6 section-spacing border-t border-white/5">
        <div className="text-center mb-32">
          <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Structural Capabilities</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The Factoric Suite: AI Modules Built for Scale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              tier: "BOS M",
              title: "AI Contact Center & Lead Triage",
              desc: "24/7 AI Contact Center. Automatically engages leads, answers FAQs in local languages, and books appointments autonomously.",
              details: "Universal Node - Deployment Ready",
              accent: "border-astra-green shadow-astra-green/10",
              icon: Brain,
              color: "text-astra-green",
              cta: "Deploy AI Sales Desk"
            },
            {
              tier: "BOS X",
              title: "Automated Revenue Synthesis",
              desc: "Real-time Revenue Synthesis. Automates invoicing, collects UPI payments, and eliminates 100% of hospital and enterprise billing leakage.",
              details: "Scale Module - Global Attribution",
              accent: "border-astra-blue shadow-astra-blue/10",
              icon: Activity,
              color: "text-astra-blue",
              cta: "Deploy Revenue Ops"
            },
            {
              tier: "BOS Z",
              title: "AI-Powered Facility Security",
              desc: "AI-Powered Security. Computer vision for physical premises, anomaly detection, and real-time safety alerts.",
              details: "Sovereign Tier - M + X + Vision",
              accent: "border-astra-gold shadow-astra-gold/10",
              icon: Shield,
              color: "text-astra-gold",
              cta: "Deploy AI Security"
            }
          ].map((item, i) => (
            <motion.div
              key={item.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 glass-card rounded-sm flex flex-col group border-t-2 ${item.accent} transition-all hover:-translate-y-2`}
            >
              <div className="mb-12 flex justify-between items-start">
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <div className={`text-[10px] font-black tracking-widest uppercase ${item.color}/40`}>{item.tier}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <div className={`text-[10px] font-black uppercase tracking-widest mb-6 ${item.color}/60`}>{item.details}</div>
              <p className="text-sm text-white/40 leading-relaxed font-medium mb-12 flex-grow">
                {item.desc}
              </p>
              <Link 
                href={`/systems/${item.tier.toLowerCase().replace(' ', '-')}`}
                className={`text-[8px] font-black uppercase tracking-[0.4em] ${item.color} group-hover:underline`}
              >
                {item.cta} {"->"}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <ValueGap />

      <section className="section-spacing border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em] mb-8">Institutional Deployment</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Autonomous AI Solutions by Industry</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                icon: Stethoscope,
                title: "For Healthcare",
                desc: "Stop OPD lead drops and automate patient triage. A smarter alternative to traditional Hospital HMIS.",
                keywords: "AI for Hospitals - Patient Triage - HIPAA"
              },
              {
                icon: Laptop,
                title: "For Real Estate",
                desc: "Filter out 90% of junk property leads autonomously directly from your marketing funnels.",
                keywords: "B2B Lead Gen - Real Estate AI - Property Leads"
              },
              {
                icon: Warehouse,
                title: "For Enterprise",
                desc: "Replace expensive CRM licenses with active digital labor tailored for high-ticket B2B sales.",
                keywords: "B2B Sales - Enterprise AI - Digital Labor"
              }
            ].map((sector, i) => (
              <div key={i} className="p-8 hairline-border rounded-sm bg-black group hover:bg-white/[0.02] transition-all">
                <sector.icon className="w-6 h-6 text-white/20 mb-6 group-hover:text-astra-green transition-colors" />
                <h3 className="text-lg font-bold mb-3">{sector.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed mb-6">{sector.desc}</p>
                <div className="text-[8px] font-black uppercase tracking-widest text-astra-green/40">{sector.keywords}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em] mb-8">Strategic Comparison</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Factoric BOS vs. Legacy CRM Software</h2>
          </div>

          <div className="overflow-hidden hairline-border rounded-sm">
            <table className="w-full text-left border-collapse bg-black">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 w-1/4">Feature</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 w-1/4">Traditional CRM</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-astra-green w-1/2">Factoric BOS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {[
                  { f: "Data Entry", l: "Manual (Human Dependent)", s: "Autonomous (API Driven)", i: "Zero human error." },
                  { f: "Response Speed", l: "Minutes to Hours", s: "Under 10 Seconds", i: "No patient/lead loss to competitors." },
                  { f: "Core Function", l: "Static Record Keeping", s: "Active Operational Execution", i: "Revenue Leakage is eliminated." },
                  { f: "Cost Structure", l: "High Per-User License", s: "Flat Subscription (Rs. 4,799)", i: "Massive institutional cost reduction." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="p-8 font-bold text-white/40">{row.f}</td>
                    <td className="p-8 text-white/20">{row.l}</td>
                    <td className="p-8">
                      <div className="text-white font-bold mb-1">{row.s}</div>
                      <div className="text-[9px] text-astra-green/40 uppercase font-black tracking-widest">{row.i}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 border-y border-white/5 bg-astra-green/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-widest text-astra-green">The Sovereign Record</div>
              <h2 className="text-3xl font-medium">Validation of Impact.</h2>
              <div className="opacity-20 grayscale flex justify-center md:justify-start gap-4 items-center">
                <ShieldCheck className="w-6 h-6" />
                <div className="text-[8px] font-black uppercase tracking-[0.3em]">Institutional Grade</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 col-span-1 md:col-span-2">
              {[
                { label: "Lead Response", value: "-60%", sub: "Reduction in Latency" },
                { label: "MRR Realization", value: "+25%", sub: "Revenue Throughput" },
                { label: "Operational Risk", value: "Zero", sub: "Capital Leakage" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 text-center md:text-left">
                  <div className="text-4xl md:text-6xl font-light text-white tracking-tighter">{stat.value}</div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/40">{stat.label}</div>
                    <div className="text-[8px] font-bold text-astra-green/60 uppercase tracking-tighter">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-8">System Inquiry</div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Intelligence Archive.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="hairline-border rounded-sm bg-white/[0.01] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-white/80">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-white/20 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-sm text-white/40 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityArchitecture />

      <section className="section-spacing border-t border-white/5 bg-astra-green/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em]">The Sovereign Asset</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              Ready to Deploy Your <br />
              <span className="text-astra-green">AI Workforce?</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed font-medium max-w-2xl mx-auto">
              Stop managing software. Start deploying labor.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/onboarding"
              className="px-8 md:px-16 py-4 md:py-6 bg-astra-green text-white hover:bg-astra-green/80 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all green-glow inline-block"
            >
              Start Your Sovereign Trial
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          Factoric AI is a product of <a href="https://scalerxlab.com" className="text-white/20 hover:text-astra-green transition-colors">ScalerX Lab</a>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
