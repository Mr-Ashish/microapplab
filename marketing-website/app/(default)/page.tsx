// app/page.js

export const metadata = {
  title: "MicroAppLab",
  description:
    "MicroAppLab offers innovative SaaS tools like BirthdayBilly and Ezemailer to enhance your productivity and streamline workflows.",
  keywords: [
    "SaaS",
    "Software Tools",
    "Productivity",
    "BirthdayBilly",
    "Ezemailer",
    "Workflow Automation",
    "Tech Solutions",
    "Cloud Applications",
  ],
  authors: [
    {
      name: "Microapplab", // Replace with your actual name or company name
      url: "https://www.microapplab.com",
    },
  ],
  openGraph: {
    title: "MicroAppLab ",
    description:
      "MicroAppLab offers innovative SaaS tools like BirthdayBilly and Ezemailer to enhance your productivity and streamline workflows.",
    url: "https://ezemail.microapplab.com/",
    siteName: "MicroAppLab",
    images: [
      {
        url: "https://www.microapplab.com/images/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "MicroAppLab - BirthdayBilly",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroAppLab",
    description:
      "MicroAppLab offers innovative SaaS tools like BirthdayBilly and Ezemailer to enhance your productivity and streamline workflows.",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico", // Ensure this path is correct
    apple: "/apple-touch-icon.png", // Optional: Add Apple touch icon
  },
};

import Hero from "@/components/hero";
import FeaturesBlocks from "@/components/features-blocks";
import RequestTool from "@/components/request-tool";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      {/* <Testimonials /> */}
      <RequestTool />
    </>
  );
}
