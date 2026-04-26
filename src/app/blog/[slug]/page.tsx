"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { blogPosts } from "@/data/blog";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Intel Not Found</h1>
        <Link href="/blog" className="text-astra-green uppercase font-black tracking-widest text-xs">
          Return to Command Center
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans">
      <Navbar />
      
      <article className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link 
              href="/blog"
              className="flex items-center gap-2 text-white/20 hover:text-astra-green transition-colors text-[10px] font-black uppercase tracking-[0.4em] mb-12 group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-astra-green/10 border border-astra-green/20 text-astra-green text-[10px] font-black uppercase tracking-widest">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-12 silver-gradient">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 pb-12 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/20" />
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/20" />
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{post.readTime}</span>
              </div>
              <div className="flex-grow" />
              <button className="text-white/20 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Content Body */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-astra max-w-none"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Footer Metadata / Tags */}
          <div className="mt-32 pt-16 border-t border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <Tag className="w-4 h-4 text-astra-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Target Nodes</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {post.keywords.map((kw) => (
                <span key={kw} className="px-4 py-2 bg-white/[0.02] border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

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
