"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageSquare, Mic2, Layers, ArrowRight, Video, Database } from "lucide-react";
import Link from "next/link";

export default function IntegrationsPage() {
  const categories = [
    {
      title: "Omnichannel Messaging",
      icon: MessageSquare,
      items: ["WhatsApp Business API", "Telegram Bot API", "Enterprise Email", "Discord Webhooks"]
    },
    {
      title: "Media Synthesis",
      icon: Mic2,
      items: ["ElevenLabs TTS", "OpenAI Whisper", "Suno API", "Synthesia Pipelines"]
    },
    {
      title: "Sovereign Databases",
      icon: Database,
      items: ["DataStax Astra DB", "Pinecone Vector", "MongoDB Atlas", "Local Postgres"]
    },
    {
      title: "Enterprise Systems",
      icon: Layers,
      items: ["Salesforce APIs", "Custom ERP Webhooks", "Stripe Billing", "Zendesk/Intercom"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <section className="relative pt-48 pb-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.6em]">Ecosystem Connectivity</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-white">
            Connect Your Agents to Your Stack.
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Factoric AI agents do not live in isolation. They connect to messaging networks to talk to users, media APIs to synthesize audio, and enterprise databases to fetch sovereign data.
          </p>
        </motion.div>
      </section>

      <section className="py-32 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-10 border border-zinc-900 bg-black rounded-sm hover:border-purple-500/30 transition-all group">
                <cat.icon className="w-8 h-8 text-zinc-600 group-hover:text-purple-500 transition-colors mb-8" />
                <h3 className="text-2xl font-bold mb-8 text-white">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-xs font-bold text-zinc-500 flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-zinc-900 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center bg-zinc-950 p-16 rounded-sm border border-zinc-900 hover:border-purple-500/20 transition-all">
          <h2 className="text-3xl font-bold mb-8 text-white">Need a custom bridge?</h2>
          <p className="text-zinc-400 mb-12">Our engineering team builds custom webhooks and API bridges for complex enterprise environments and media pipelines.</p>
          <Link href="/contact" className="text-purple-500 font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 group">
            Request Custom Integration <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
