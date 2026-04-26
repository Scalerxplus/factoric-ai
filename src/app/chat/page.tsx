"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Send, ArrowLeft, Loader2, Plus } from "lucide-react";
import Link from "next/link";

import { Suspense } from "react";

import { ChatInterface } from "@/components/ChatInterface";

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
