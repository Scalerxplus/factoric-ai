"use client";

import { SystemPage } from "@/components/SystemPage";
import { Activity } from "lucide-react";

export default function BosXPage() {
  return (
    <SystemPage
      id="BOS X"
      title="The Revenue Synthesis"
      headline="BRIDGING CONVERSATION <br /> AND CAPITAL."
      description="The operational backbone. BOS X synchronizes cloud telephony, automated billing, and global payment gateways into a single, unified revenue flow."
      icon={Activity}
      color="text-astra-blue"
      accent="bg-astra-blue"
      capabilities={[
        {
          title: "Telephony Integration",
          desc: "Native bridge to Exotel, Twilio, and regional cloud telephony for autonomous voice engagement."
        },
        {
          title: "Automated Invoicing",
          desc: "Generates and dispatches mission-critical billing documents instantly upon conversion."
        },
        {
          title: "Payment Gateway Sync",
          desc: "Real-time reconciliation of capital across Stripe, Razorpay, and institutional bank feeds."
        },
        {
          title: "Revenue Attribution",
          desc: "Maps every dollar of revenue back to the specific ad campaign or engagement node."
        },
        {
          title: "Churn Prediction",
          desc: "Identifies capital at risk by analyzing behavioral patterns and payment latency."
        },
        {
          title: "Fiscal Transparency",
          desc: "A unified dashboard for the Commander to view global revenue velocity in real-time."
        }
      ]}
      useCases={[
        {
          industry: "SaaS & Digital Labor",
          scenario: "Automating subscription renewals, payment failures, and credit-based billing cycles."
        },
        {
          industry: "Service MSMEs",
          scenario: "Syncing customer phone calls directly with invoice generation and payment verification."
        },
        {
          industry: "Education & EdTech",
          scenario: "Managing global course enrollments and multi-currency fee collections autonomously."
        }
      ]}
      roi="BOS X eliminates manual billing errors and reduces capital reconciliation time from 7 days to 4 seconds."
    />
  );
}
