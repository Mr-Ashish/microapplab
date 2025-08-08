import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "n8n Monitor - Mobile App for n8n Workflow Monitoring",
  description:
    "Monitor your n8n workflows and executions on-the-go with our powerful mobile app. Get real-time alerts, retry failed executions, and manage your automation infrastructure from anywhere.",
  keywords: [
    "n8n",
    "workflow monitoring",
    "mobile app",
    "automation",
    "workflow management",
    "execution monitoring",
    "React Native",
    "Android app",
    "iOS app",
  ],
  authors: [{ name: "n8n Monitor Team", url: "https://n8n-monitor.com" }],
  openGraph: {
    title: "n8n Monitor - Mobile App for n8n Workflow Monitoring",
    description:
      "Monitor your n8n workflows and executions on-the-go with our powerful mobile app.",
    url: "https://n8n-monitor.com",
    siteName: "n8n Monitor",
    images: [
      {
        url: "/appIcon.png",
        width: 512,
        height: 512,
        alt: "n8n Monitor Mobile App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Monitor - Mobile App for n8n Workflow Monitoring",
    description:
      "Monitor your n8n workflows and executions on-the-go with our powerful mobile app.",
    images: ["/appIcon.png"],
  },
  robots: "index, follow",
  icons: { icon: "/appIcon.png", apple: "/appIcon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-n8n-background text-n8n-text`}>
        {children}
      </body>
    </html>
  );
}
