import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & BOS Architectures",
  description: "Identify the right Factoric AI BOS tier (M, X, Z) for your institution. Transparent pricing for autonomous AI workforce deployment.",
  openGraph: {
    title: "Factoric AI Pricing",
    description: "Transparent pricing for autonomous AI workforce deployment across all BOS tiers.",
    url: "https://www.factoricai.com/pricing",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
