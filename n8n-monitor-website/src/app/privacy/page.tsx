import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - n8n Monitor",
  description:
    "Learn how n8n Monitor protects your privacy and data security. Read our comprehensive privacy policy.",
  keywords: [
    "privacy policy",
    "data protection",
    "security",
    "n8n monitor",
    "mobile app privacy",
  ],
  openGraph: {
    title: "Privacy Policy - n8n Monitor",
    description:
      "Learn how n8n Monitor protects your privacy and data security.",
    url: "https://n8n-monitor.com/privacy",
    siteName: "n8n Monitor",
    images: [
      {
        url: "/appIcon.png",
        width: 512,
        height: 512,
        alt: "n8n Monitor Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - n8n Monitor",
    description:
      "Learn how n8n Monitor protects your privacy and data security.",
    images: ["/appIcon.png"],
  },
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-n8n-background">
      <PrivacyPolicyContent />
    </div>
  );
}
