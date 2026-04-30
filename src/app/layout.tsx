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
    default: "Factoric AI | Autonomous Digital Labor & Business Operating System",
    template: "%s | Factoric AI",
  },
  description: "Replace your legacy CRM with Factoric BOS. Deploy an active AI workforce for autonomous WhatsApp lead qualification, revenue syncing, and enterprise security.",
  keywords: [
    "Autonomous Digital Labor",
    "AI CRM India",
    "AI Lead Qualification",
    "Healthcare AI CRM",
    "WhatsApp Business AI Agent",
    "Automated Revenue Operations"
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
    title: "Factoric AI | Autonomous Digital Labor & Business Operating System",
    description: "Replace your legacy CRM with Factoric BOS. Deploy an active AI workforce for autonomous lead qualification and revenue ops.",
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
    title: "Factoric AI | Autonomous Digital Labor & Business Operating System",
    description: "Replace your legacy CRM with Factoric BOS. Deploy an active AI workforce for autonomous lead qualification.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Factoric AI HIPAA and DPDPA compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Factoric AI is engineered for high-compliance industries. We offer sovereign data hosting and AES-4096 encryption to ensure all institutional data remains geofenced and protected."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I still need Zoho, Salesforce, or LeadSquared?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Factoric AI is a full-stack Business Operating System (BOS) that natively replaces traditional CRMs. We have built-in capturing, engagement, nurturing, billing, and security vision."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI agents really replace human front-desk staff?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Factoric agents handle 80% of repetitive qualification and booking tasks, reducing response times by up to 60%."
                  }
                }
              ]
            })
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
