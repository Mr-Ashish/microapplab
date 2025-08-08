"use client";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#28A745]/6 to-[#28A745]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#EE4F27]/6 to-[#EE4F27]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#077AC7]/5 to-[#077AC7]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#6B21EF]/4 to-[#6B21EF]/2 rounded-full blur-3xl"></div>
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
            Simple
            <span className="bg-gradient-to-r from-[#28A745] to-[#EE4F27] bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently in beta - download from Google Play Store soon and help shape the future of
            n8n monitoring.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Beta badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#28A745] to-[#6B21EF] text-white px-4 py-2 rounded-full shadow-lg">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Beta Only</span>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Beta Access
              </h3>
              <div className="flex items-baseline justify-center space-x-2 mb-6">
                <span className="text-5xl font-bold text-[#EE4F27]">Free</span>
                <span className="text-gray-600">during beta</span>
              </div>
              <p className="text-gray-600">
                Download from Google Play Store soon
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">
                  Unlimited workflow monitoring
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Real-time notifications</span>
                <span className="text-xs bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white px-2 py-1 rounded-full ml-2">Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">
                  One-tap retry functionality
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Execution history & logs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Performance analytics</span>
                <span className="text-xs bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white px-2 py-1 rounded-full ml-2">Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Secure API connections</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Background monitoring</span>
                <span className="text-xs bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white px-2 py-1 rounded-full ml-2">Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Multi-instance support</span>
                <span className="text-xs bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white px-2 py-1 rounded-full ml-2">Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">
                  Early access to new features
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-900">Direct feedback channel</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#077AC7] to-[#EE4F27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Get Notified for Release</span>
              </button>
            </div>

            {/* Note */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Coming to Google Play Store soon • No credit card required • Help shape the product
              </p>
            </div>
          </div>
        </motion.div>

        {/* Google Play Store Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-[#EE4F27]/5 to-[#077AC7]/5 border border-[#EE4F27]/20 rounded-2xl px-8 py-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#077AC7] to-[#6B21EF] rounded-xl flex items-center justify-center shadow-sm">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-gray-900 mb-1">
                Download from Google Play Store Soon
              </h3>
              <p className="text-sm text-gray-600">
                Get notified when n8n Monitor becomes available on Google Play Store
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
