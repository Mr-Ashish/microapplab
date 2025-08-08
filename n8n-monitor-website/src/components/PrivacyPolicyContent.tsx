"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const privacySections = [
  {
    icon: Database,
    title: "Data Collection",
    description:
      "n8n Monitor collects minimal data necessary for app functionality:",
    color: "from-n8n-primary to-n8n-primary-dark",
    items: [
      "Your n8n instance URL and API key (stored securely on your device)",
      "Workflow and execution data from your n8n instance",
      "App usage analytics to improve functionality",
      "Device information for push notifications",
    ],
    note: "We do not collect personal information, browsing history, or any data unrelated to n8n monitoring.",
  },
  {
    icon: Lock,
    title: "Data Storage & Security",
    description: "Your data is protected with enterprise-grade security:",
    color: "from-n8n-secondary to-n8n-secondary-dark",
    items: [
      "API keys are encrypted using native device security (Keychain/Keystore)",
      "All data is stored locally on your device",
      "No data is transmitted to our servers except for push notifications",
      "We use secure HTTPS connections for all API communications",
    ],
    note: "Your n8n instance data never leaves your device and is not stored on our servers.",
  },
  {
    icon: Eye,
    title: "How We Use Your Data",
    description: "We use your data only for the following purposes:",
    color: "from-n8n-accent to-n8n-accent-dark",
    items: [
      "Connecting to your n8n instance to fetch workflow and execution data",
      "Sending push notifications when workflows fail",
      "Displaying workflow status and execution history in the app",
      "Improving app performance and user experience",
    ],
    note: "We never sell, rent, or share your data with third parties.",
  },
  {
    icon: Shield,
    title: "Your Data Rights",
    description: "You have complete control over your data:",
    color: "from-n8n-success to-n8n-accent",
    items: [
      "Delete all app data by uninstalling the app",
      "Revoke API access at any time from your n8n instance",
      "Opt out of push notifications in device settings",
      "Request data deletion by contacting our support team",
    ],
    note: "Since all data is stored locally, you have full control over your information.",
  },
];

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description:
      "All communications are encrypted using industry-standard protocols",
    icon: Lock,
  },
  {
    title: "Local Data Storage",
    description: "Your sensitive data never leaves your device",
    icon: Database,
  },
  {
    title: "No Data Mining",
    description: "We don't collect or analyze personal information",
    icon: Shield,
  },
  {
    title: "Transparent Practices",
    description: "Clear privacy policy with no hidden terms",
    icon: Eye,
  },
];

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-n8n-background via-n8n-surface to-n8n-surface-variant">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-n8n-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-n8n-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-n8n-primary to-n8n-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-n8n-text mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-n8n-primary to-n8n-secondary bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Here&apos;s
              how we protect your information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Privacy sections */}
        <div className="space-y-12 mb-20">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-n8n-surface to-n8n-surface-variant rounded-3xl border border-n8n-border/30 p-8 lg:p-12"
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-n8n-text mb-4">
                    {section.title}
                  </h3>
                  <p className="text-n8n-text-secondary mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-n8n-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-n8n-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-n8n-accent/10 border border-n8n-accent/20 rounded-xl p-4">
                    <p className="text-sm text-n8n-text-secondary">
                      <strong>Note:</strong> {section.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-n8n-text mb-4">
              Security{" "}
              <span className="bg-gradient-to-r from-n8n-primary to-n8n-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-n8n-text-secondary max-w-2xl mx-auto">
              We implement multiple layers of security to protect your data and
              privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-n8n-surface to-n8n-surface-variant rounded-2xl border border-n8n-border/30 p-6 hover:border-n8n-primary/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-n8n-primary/20 to-n8n-secondary/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-n8n-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-n8n-text mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-n8n-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-n8n-primary/10 to-n8n-secondary/10 rounded-3xl border border-n8n-primary/20 p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-n8n-text mb-4">
            Questions About Privacy?
          </h3>
          <p className="text-n8n-text-secondary mb-6 max-w-2xl mx-auto">
            If you have any questions about our privacy practices or data
            handling, we&apos;re here to help. Contact our support team for
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@n8n-monitor.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-n8n-primary to-n8n-primary-dark text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-n8n-surface/50 backdrop-blur-sm border border-n8n-border/50 text-n8n-text font-semibold rounded-xl hover:bg-n8n-surface/70 hover:border-n8n-primary/30 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
