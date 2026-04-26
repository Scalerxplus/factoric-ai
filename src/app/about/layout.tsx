import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Factoric AI",
  description: "Discover the architecture behind Factoric AI and our mission to build sovereign institutional intelligence. We turn chaos into logic.",
  openGraph: {
    title: "About Factoric AI",
    description: "Discover the architecture behind Factoric AI and our mission to build sovereign institutional intelligence.",
    url: "https://www.factoricai.com/about",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
