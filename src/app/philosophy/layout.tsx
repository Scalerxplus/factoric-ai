import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Explore the deep-tech philosophy behind Factoric AI. We believe in sovereign institutional logic and autonomous workflows that do not sleep.",
  openGraph: {
    title: "Factoric AI Philosophy",
    description: "Explore the deep-tech philosophy behind Factoric AI and autonomous workflows.",
    url: "https://www.factoricai.com/philosophy",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
