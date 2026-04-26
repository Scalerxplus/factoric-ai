"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Send, ArrowLeft, Loader2, Plus } from "lucide-react";
import Link from "next/link";

import { Suspense } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatInterface() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || "";
  const tier = (searchParams.get("tier") || "WORKFORCE") as any;

  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt && messages.length === 0) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (content: string) => {
    if (!content.trim()) return;
    
    const newMessages = [...messages, { role: "user" as const, content }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, tier }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.response }]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Structural sync failed. Please re-initialize." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow max-w-4xl w-full mx-auto px-6 pt-48 pb-32 flex flex-col">
      <div className="mb-12 flex items-center justify-between border-b border-[#1F1F1F] pb-8">
        <div>
          <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em] mb-2">Structural Interface</div>
          <h1 className="text-2xl font-medium uppercase tracking-widest">Factoric AI {tier}</h1>
        </div>
        <div className="text-[8px] font-bold text-[#F2F0E9]/20 tracking-[0.3em] uppercase">
          Sovereign Protocol v4.1.0
        </div>
      </div>

      <div className="flex-grow space-y-16 overflow-y-auto mb-12 pr-4 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[90%] p-10 hairline-border rounded-sm ${m.role === "user" ? "bg-white/[0.03]" : "bg-[#F2F0E9]/[0.01] border-l-2 border-l-accent-red"}`}>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[8px] uppercase font-black tracking-[0.3em] text-[#F2F0E9]/20">
                    {m.role === "user" ? "Institutional Intent" : `BOS ${tier} Logical Report`}
                  </div>
                  {m.role === "assistant" && (
                    <div className="text-[8px] uppercase font-black tracking-[0.3em] text-accent-red/40 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-red rounded-full animate-pulse" /> Verified Logic
                    </div>
                  )}
                </div>

                <div className="prose prose-invert prose-sm max-w-none prose-p:text-[#F2F0E9]/70 prose-p:leading-relaxed prose-p:font-medium prose-headings:text-[#F2F0E9] prose-headings:font-medium prose-strong:text-[#F2F0E9] prose-strong:font-black prose-ul:list-none prose-ul:pl-0">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h3: ({ children }) => <h3 className="text-lg font-medium mb-6 mt-12 border-b border-[#1F1F1F] pb-4 uppercase tracking-[0.3em] text-[#F2F0E9]">{children}</h3>,
                      p: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
                      li: ({ children }) => (
                        <li className="flex items-start gap-4 mb-4">
                          <Plus className="w-3 h-3 text-accent-red mt-1 shrink-0" />
                          <span>{children}</span>
                        </li>
                      ),
                      strong: ({ children }) => <strong className="text-[#F2F0E9] font-black tracking-tight">{children}</strong>
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="p-10 hairline-border rounded-sm bg-white/[0.01] flex items-center gap-6">
                <Loader2 className="w-5 h-5 animate-spin text-[#F2F0E9]/20" />
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#F2F0E9]/20">Synthesizing Structural Report...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-[#F2F0E9]/5 blur opacity-0 group-focus-within:opacity-100 transition-opacity rounded-sm" />
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          placeholder="Specify structural inquiry..."
          className="relative w-full bg-white/[0.02] hairline-border p-8 pr-24 text-sm font-medium focus:outline-none focus:border-[#F2F0E9]/20 transition-all rounded-sm placeholder:text-[#F2F0E9]/10"
        />
        <button 
          onClick={() => handleSend(input)}
          disabled={isLoading}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-[#F2F0E9]/40 hover:text-accent-red transition-colors z-10"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9] flex flex-col">
      <Navbar />
      <Suspense fallback={
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent-red" />
        </div>
      }>
        <ChatInterface />
      </Suspense>
    </main>
  );
}
