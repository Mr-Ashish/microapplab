"use client";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Smartphone,
  Bell,
  Shield,
  Zap,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#640D5F]/8 to-[#640D5F]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#B12C00]/8 to-[#B12C00]/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#EB5B00]/6 to-[#EB5B00]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#FFCC00]/5 to-[#FFCC00]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ready to
              <span className="bg-gradient-to-r from-[#FFCC00] to-[#EB5B00] bg-clip-text text-transparent">
                {" "}
                Get Started?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of n8n users who are already monitoring their
              workflows on-the-go.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#640D5F] to-[#B12C00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B12C00] to-[#640D5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Download Now</span>
            </button>

            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-[#640D5F]/30 transition-all duration-300 shadow-sm">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#640D5F]/30 transition-all duration-300 shadow-sm">
              <Smartphone className="w-6 h-6 text-[#FFCC00] mx-auto mb-2" />
              <p className="text-sm text-gray-700 font-medium">Mobile-First</p>
            </div>
            <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#B12C00]/30 transition-all duration-300 shadow-sm">
              <Bell className="w-6 h-6 text-[#FFCC00] mx-auto mb-2" />
              <p className="text-sm text-gray-700 font-medium">
                Real-time Alerts
              </p>
            </div>
            <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#EB5B00]/30 transition-all duration-300 shadow-sm">
              <Shield className="w-6 h-6 text-[#FFCC00] mx-auto mb-2" />
              <p className="text-sm text-gray-700 font-medium">
                Secure & Reliable
              </p>
            </div>
            <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#FFCC00]/30 transition-all duration-300 shadow-sm">
              <Zap className="w-6 h-6 text-[#FFCC00] mx-auto mb-2" />
              <p className="text-sm text-gray-700 font-medium">
                Lightning Fast
              </p>
            </div>
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-br from-[#640D5F] to-[#B12C00] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">n8n</span>
              </div>
              <span className="font-bold text-gray-900">n8n Monitor</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              The official mobile companion for n8n workflow monitoring
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
