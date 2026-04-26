import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.factoricai.com"),
  title: {
    default: "Factoric AI | The Autonomous Operational Layer",
    template: "%s | Factoric AI",
  },
  description: "Factoric AI deploys autonomous agentic labor forces (BOS M, X, Z) to govern institutional logic. We engineer the future of high-performance operations for clinics, hospitals, factories, and MSMEs.",
  keywords: [
    "Agentic AI", 
    "AI Workforce", 
    "Autonomous Operations", 
    "Institutional Logic", 
    "Factoric AI", 
    "BOS Architecture", 
    "AI CRM", 
    "Business Operating System"
  ],
  authors: [{ name: "Factoric AI Architect Team" }],
  creator: "Factoric AI",
  publisher: "ScalerX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.factoricai.com",
    title: "Factoric AI | The Autonomous Operational Layer",
    description: "Engineering the future of agentic labor and institutional logic.",
    siteName: "Factoric AI",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Factoric AI - Autonomous Operations",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factoric AI | The Autonomous Operational Layer",
    description: "Engineering the future of agentic labor and institutional logic.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
