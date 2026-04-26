import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initialize Systems",
  description: "Begin your onboarding with Factoric AI. Calculate the impact of deploying autonomous cognitive labor in your institution.",
  openGraph: {
    title: "Factoric AI Onboarding",
    description: "Initialize your systems with Factoric AI.",
    url: "https://www.factoricai.com/onboarding",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
