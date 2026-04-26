"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em] mb-8">Sovereign Insights</div>
            <h1 className="text-5xl md:text-[80px] font-black tracking-tighter leading-none silver-gradient mb-12">
              INTEL FOR THE <br /> AUTONOMOUS ERA.
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium">
              Deep-tech analysis and strategic blueprints for engineering the next generation of institutional intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-12 glass-card rounded-sm border-l-2 border-l-astra-green/20 hover:border-l-astra-green transition-all h-full flex flex-col group-hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-astra-green/10 rounded-full">
                          <BookOpen className="w-4 h-4 text-astra-green" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-astra-green">{post.category}</span>
                      </div>
                      <span className="text-[10px] font-mono text-white/20">{post.date}</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 group-hover:text-astra-green transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/40 leading-relaxed font-medium mb-12 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-white/20" />
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-astra-green text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Intel <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          &copy; 2024 FACTORIC AI • ARCHITECTURAL INTEL
        </p>
      </footer>
    </main>
  );
}
