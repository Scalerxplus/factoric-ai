"use client";

import { SystemPage } from "@/components/SystemPage";
import { Shield } from "lucide-react";

export default function BosZPage() {
  return (
    <SystemPage
      id="BOS Z"
      title="The Kinetic Sentinel"
      headline="ABSOLUTE OVERWATCH. <br /> ZERO LATENCY."
      description="The Ultimate Sovereign Layer. BOS Z inherits every cognitive and revenue capability of M and X, while transforming your physical environment into a predictive security engine via Computer Vision."
      icon={Shield}
      color="text-astra-gold"
      accent="bg-astra-gold"
      capabilities={[
        {
          title: "Full M + X Core",
          desc: "Includes all cognitive engagement and revenue synthesis labor from the M and X tiers."
        },
        {
          title: "Neural Vision Synthesis",
          desc: "Processes 24/7 video feeds to identify objects, personnel, and suspicious behavioral patterns."
        },
        {
          title: "Predictive Security",
          desc: "Identifies anomalies like perimeter breaches or unauthorized access in under 200ms."
        },
        {
          title: "Asset Protection",
          desc: "Monitors high-value physical inventory and infrastructure health via computer vision."
        },
        {
          title: "Autonomous Lockdown",
          desc: "Triggers structural alarms and physical security protocols instantly upon verified threats."
        },
        {
          title: "Crowd Intelligence",
          desc: "Analyzes density and movement patterns to optimize safety and operational flow."
        },
        {
          title: "Incident Attribution",
          desc: "Provides verifiable digital logs of every physical event for compliance and insurance."
        }
      ]}
      useCases={[
        {
          industry: "Manufacturing & Factories",
          scenario: "Monitoring assembly lines for safety violations and unauthorized floor entry."
        },
        {
          industry: "Retail & Warehousing",
          scenario: "Preventing stock leakage and unauthorized inventory movement in real-time."
        },
        {
          industry: "Hospitality & Estates",
          scenario: "Ensuring 24/7 perimeter integrity and guest safety through predictive overwatch."
        }
      ]}
      roi="BOS Z reduces security-related capital loss by 95% and eliminates the need for passive human monitoring."
    />
  );
}
