import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deploy Agentic Workforce",
  description: "Contact Factoric AI sales. Deploy a high-performance autonomous agentic workforce specifically tailored for your institutional needs.",
  openGraph: {
    title: "Contact Factoric AI",
    description: "Contact Factoric AI to deploy your autonomous agentic workforce.",
    url: "https://www.factoricai.com/contact",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
