"use client";

import { SystemPage } from "@/components/SystemPage";
import { Shield } from "lucide-react";

export default function BosZPage() {
  return (
    <SystemPage
      id="BOS Z"
      title="The Visibility Layer"
      headline="LIVE VISIBILITY. <br /> ABSOLUTE CONTROL."
      description="Your operations don't stop at the digital screen. Factoric BOS Z uses intelligent monitoring to track camera feeds, detect physical anomalies, and escalate security alerts instantly."
      icon={Shield}
      color="text-astra-gold"
      accent="bg-astra-gold"
      capabilities={[
        {
          title: "Computer Vision Integration",
          desc: "Connect your existing IP cameras directly to the BOS cognitive layer for autonomous overwatch."
        },
        {
          title: "Anomaly Alerts",
          desc: "Instant WhatsApp notifications to admins if unauthorized access or operational bottlenecks are detected."
        },
        {
          title: "Compliance Audit Trails",
          desc: "Unalterable, AI-verified logs of all facility events for total regulatory and legal protection."
        },
        {
          title: "Queue & Bottleneck Detection",
          desc: "Real-time monitoring of waiting areas to alert management about operational friction."
        },
        {
          title: "Digital Perimeter Guard",
          desc: "Geofenced security zones that trigger cognitive alerts when breached during off-hours."
        },
        {
          title: "Institutional Memory",
          desc: "Searchable visual logs—find specific events or patterns across weeks of facility footage instantly."
        }
      ]}
      useCases={[
        {
          industry: "Private Hospitals",
          scenario: "Monitoring patient safety, detecting facility overcrowding, and ensuring emergency zones are clear."
        },
        {
          industry: "High-Security Logistics",
          scenario: "Tracking unauthorized entry and ensuring compliance with on-ground safety protocols 24/7."
        },
        {
          industry: "Luxury Retail & Real Estate",
          scenario: "Protecting high-value assets and mapping visitor density patterns for operational optimization."
        }
      ]}
      roi="BOS Z provides 24/7 autonomous facility overwatch, reducing the need for manual guard supervision by 80% while increasing detection speed."
    />
  );
}
