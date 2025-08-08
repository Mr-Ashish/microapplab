"use client";
import { motion } from "framer-motion";
import {
  Smartphone,
  Settings,
  Bell,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download & Install",
    description:
      "Get the app from Google Play Store or Apple App Store and install it on your device.",
    color: "from-[#EE4F27] to-[#077AC7]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Settings,
    title: "Configure Connection",
    description:
      "Enter your n8n instance URL and API key to establish a secure connection.",
    color: "from-[#077AC7] to-[#6B21EF]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Bell,
    title: "Set Up Notifications",
    description:
      "Configure which workflows to monitor and set up your notification preferences.",
    color: "from-[#6B21EF] to-[#28A745]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    comingSoon: true,
  },
  {
    icon: BarChart3,
    title: "Start Monitoring",
    description:
      "Begin monitoring your workflows in real-time with instant alerts and insights.",
    color: "from-[#28A745] to-[#EE4F27]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#077AC7]/6 to-[#077AC7]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#6B21EF]/6 to-[#6B21EF]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#28A745]/5 to-[#28A745]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#EE4F27]/5 to-[#EE4F27]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started in
            <span className="bg-gradient-to-r from-[#077AC7] to-[#6B21EF] bg-clip-text text-transparent">
              {" "}
              Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up n8n Monitor is quick and easy. Follow these simple steps
            to start monitoring your workflows.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EE4F27]/20 via-[#077AC7]/20 via-[#6B21EF]/20 to-[#28A745]/20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Step card */}
                <div
                  className={`pt-8 pb-6 px-6 rounded-2xl border ${step.bgColor} ${step.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative`}
                >
                  {step.comingSoon && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                      Coming Soon
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-sm ${step.comingSoon ? 'opacity-60' : ''}`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${step.comingSoon ? 'opacity-70' : ''}`}>
                    {step.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${step.comingSoon ? 'opacity-70' : ''}`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm">
            <CheckCircle className="w-6 h-6 text-[#28A745]" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Ready to Start?</h3>
              <p className="text-sm text-gray-600">
                Download the app and connect your n8n instance in under 5
                minutes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
