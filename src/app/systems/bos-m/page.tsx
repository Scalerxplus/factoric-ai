"use client";

import { SystemPage } from "@/components/SystemPage";
import { Brain } from "lucide-react";

export default function BosMPage() {
  return (
    <SystemPage
      id="BOS M"
      title="The Intelligence Layer"
      headline="CAPTURE. QUALIFY. <br /> CONVERT."
      description="Don't let your leads drop into the void. Factoric BOS M unifies omnichannel communication, profile mapping, and AI-led triage into a single intelligent engine that turns raw inquiries into qualified revenue."
      icon={Brain}
      color="text-astra-green"
      accent="bg-astra-green"
      capabilities={[
        {
          title: "Universal Central Inbox",
          desc: "One dashboard for all customer communications across WhatsApp, Calls, Forms, and Emails."
        },
        {
          title: "Intelligent Channel Routing",
          desc: "Automatically route high-ticket queries to senior executives and standard queries to AI agents."
        },
        {
          title: "Zero-Delay Follow-Ups",
          desc: "Automated, context-aware reminders sent natively via WhatsApp to ensure zero lead drop."
        },
        {
          title: "Autonomous Triage (AgentX)",
          desc: "AI converses with leads in English, Hindi, and Hinglish to extract BANT (Budget, Authority, Need, Timeline) data."
        },
        {
          title: "Intent Heat-Mapping",
          desc: "Visually track high-intent prospects based on their interaction depth and urgency."
        },
        {
          title: "Priority Scoring",
          desc: "Grade leads from A (Hot) to D (Spam) instantly. Trolls are blocked; VIPs are escalated."
        }
      ]}
      useCases={[
        {
          industry: "Healthcare Institutions",
          scenario: "From WhatsApp triage to digital check-ins and billing. Used by legacy institutions like Pahlajanis' Hospital."
        },
        {
          industry: "Real Estate Developers",
          scenario: "Filtering out 90% of junk leads autonomously and scheduling site visits for serious buyers."
        },
        {
          industry: "Service Enterprises",
          scenario: "Deploying digital labor that scales infinitely to manage growing inquiry volumes without HR overhead."
        }
      ]}
      roi="BOS M eliminates lead response latency and ensures 100% of inquiries are mapped, qualified, and routed within seconds."
    />
  );
}
