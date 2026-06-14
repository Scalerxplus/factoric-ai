"use client";

import { SystemPage } from "@/components/SystemPage";
import { Calendar } from "lucide-react";

export default function BosOpsPage() {
  return (
    <SystemPage
      id="BOS Ops"
      title="The Workflow Layer"
      headline="BOOK. CHECK-IN. <br /> EXECUTE."
      description="Eliminate phone-tag. Factoric BOS Ops automates your scheduling, handles complex calendar logic, and digitizes your on-ground check-in workflows to ensure zero front-desk friction."
      icon={Calendar}
      color="text-astra-blue"
      accent="bg-astra-blue"
      capabilities={[
        {
          title: "Conversational Scheduling",
          desc: "Users book slots directly inside WhatsApp or web chat. No external links or apps needed."
        },
        {
          title: "Smart Reminders",
          desc: "Automated pre-visit instructions, document requests, and location pings sent via WhatsApp."
        },
        {
          title: "Digital Token Generation",
          desc: "QR-based or WhatsApp-based digital check-ins for waiting room management and reduced queue times."
        },
        {
          title: "Calendar Logic Engine",
          desc: "Handles complex multi-provider availability, cancellations, and real-time rescheduling autonomously."
        },
        {
          title: "Patient/Client Profile Sync",
          desc: "Automatically syncs visit data and pre-consultation forms directly into the unified BOS profile."
        },
        {
          title: "Check-in Kiosk Mode",
          desc: "Native tablet/mobile interface for on-ground staff to verify tokens and manage flow."
        }
      ]}
      useCases={[
        {
          industry: "Specialty Clinics",
          scenario: "Automating the entire OPD journey from WhatsApp booking to QR check-in at the front desk."
        },
        {
          industry: "Real Estate Developers",
          scenario: "Managing thousands of site-visit appointments and verifying buyer entry via digital tokens."
        },
        {
          industry: "Premium Service Units",
          scenario: "Scheduling high-value consultations and ensuring zero-friction intake for VIP clients."
        }
      ]}
      roi="BOS Ops reduces front-desk telephone volume by 70% and eliminates appointment no-shows through automated cognitive reminders."
    />
  );
}
