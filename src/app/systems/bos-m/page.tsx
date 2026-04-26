"use client";

import { SystemPage } from "@/components/SystemPage";
import { Brain } from "lucide-react";

export default function BosMPage() {
  return (
    <SystemPage
      id="BOS M"
      title="The Cognitive Front"
      headline="OMNICHANNEL INTENT. <br /> ZERO LATENCY."
      description="The 24/7 Intelligence layer. BOS M replaces passive chatbots with High-Cognition Agents that extract intent, qualify leads via BANT logic, and score your pipeline with lethal precision."
      icon={Brain}
      color="text-astra-green"
      accent="bg-astra-green"
      capabilities={[
        {
          title: "Neural Intent Extraction",
          desc: "Extracts complex customer requirements from natural dialogue across WhatsApp, Instagram, and Web."
        },
        {
          title: "BANT Qualification",
          desc: "Automatically identifies Budget, Authority, Need, and Timeline before the lead reaches your team."
        },
        {
          title: "Predictive Lead Scoring",
          desc: "Ranks prospects based on historical conversion data and real-time behavioral signals."
        },
        {
          title: "Multilingual Intelligence",
          desc: "Engages fluently in 40+ global languages and local dialects for total regional coverage."
        },
        {
          title: "Knowledge Base Sync",
          desc: "Native integration with your institutional documentation to provide authoritative responses."
        },
        {
          title: "Asynchronous Handoff",
          desc: "Seamlessly escalates high-value cases to human strategists with full contextual summaries."
        }
      ]}
      useCases={[
        {
          industry: "Clinics & Hospitals",
          scenario: "Automating 24/7 patient inquiries, appointment scheduling, and basic medical symptom triage."
        },
        {
          industry: "Marketing Agencies",
          scenario: "Instant qualification of inbound leads from Meta ads, ensuring only [HOT] leads reach the sales team."
        },
        {
          industry: "Real Estate",
          scenario: "Handling complex buyer inquiries about property specs, financing, and site visit coordination."
        }
      ]}
      roi="BOS M reduces lead response time by 98% and increases qualified pipeline volume by 4.2x within the first 30 days of deployment."
    />
  );
}
