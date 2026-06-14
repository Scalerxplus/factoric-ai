"use client";

import { SystemPage } from "@/components/SystemPage";
import { Activity } from "lucide-react";

export default function BosXPage() {
  return (
    <SystemPage
      id="BOS X"
      title="The Revenue Layer"
      headline="CLOSE THE LOOP. <br /> COLLECT REVENUE."
      description="Stop chasing payments. Factoric BOS X manages instant invoices, automated payment reminders, and live revenue visibility without ever switching systems."
      icon={Activity}
      color="text-astra-blue"
      accent="bg-astra-blue"
      capabilities={[
        {
          title: "Zero-Fee UPI Integration",
          desc: "Generate dynamic UPI payment links directly in the chat workflow for instant settlement."
        },
        {
          title: "Absolute Leakage Control",
          desc: "The system flags any service delivered without a corresponding mapped payment in real-time."
        },
        {
          title: "Automated Reconciliation",
          desc: "Daily ledger syncs matching bank settlements with operational software automatically."
        },
        {
          title: "Native Invoicing",
          desc: "Generate professional, GST-compliant invoices natively inside the WhatsApp/Chat stream."
        },
        {
          title: "Smart Reminders",
          desc: "Automated, context-aware payment follow-ups that increase recovery rates by up to 40%."
        },
        {
          title: "Revenue Visibility",
          desc: "Live command dashboard showing real-time collections, pending dues, and growth trends."
        }
      ]}
      useCases={[
        {
          industry: "Multi-Specialty Hospitals",
          scenario: "Automating OPD billing and ensuring no patient leaves without an active invoice/payment mapping."
        },
        {
          industry: "Real Estate Developers",
          scenario: "Managing token payments and EMI reminders across thousands of buyer profiles autonomously."
        },
        {
          industry: "SaaS & Service Units",
          scenario: "Automating recurring billing and subscription recovery with zero-fee local payment rails."
        }
      ]}
      roi="BOS X typically recovers 15-20% of previously 'lost' revenue by eliminating manual billing leakage and payment friction."
    />
  );
}
