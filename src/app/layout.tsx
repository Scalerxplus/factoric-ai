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
    "Enterprise AI SaaS India",
    "Autonomous Lead Generation",
    "AI Revenue Ops Platform",
    "HIPAA Compliant AI",
    "DPDPA Compliance India",
    "Agentic Labor",
    "AI Workforce",
    "Hospital automation",
    "AI agent for hospital",
    "AI for billing and payment",
    "Sovereign Data Protection"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Factoric AI",
              "operatingSystem": "All",
              "applicationCategory": "BusinessApplication",
              "description": "Factoric AI deploys autonomous agentic labor forces to govern institutional logic.",
              "offers": {
                "@type": "Offer",
                "price": "4799",
                "priceCurrency": "INR"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Factoric AI",
              "url": "https://www.factoricai.com",
              "logo": "https://www.factoricai.com/icon.svg",
              "parentOrganization": {
                "@type": "Organization",
                "name": "ScalerX Lab",
                "url": "https://scalerxlab.com"
              }
            })
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
