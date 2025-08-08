"use client";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Smartphone,
  Shield,
  BarChart3,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#EE4F27]/8 to-[#EE4F27]/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#077AC7]/8 to-[#077AC7]/4 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#6B21EF]/6 to-[#6B21EF]/3 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#28A745]/5 to-[#28A745]/2 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Platform availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
            >
              <Smartphone className="w-4 h-4 text-[#EE4F27]" />
              <span className="text-sm text-gray-700 font-medium">
                Available on Android & iOS
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Monitor Your</span>
                <br />
                <span className="bg-gradient-to-r from-[#EE4F27] to-[#077AC7] bg-clip-text text-transparent">
                  Workflows
                </span>
                <br />
                <span className="text-gray-900">From Anywhere</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Get real-time alerts, retry failed executions, and manage your
                automation infrastructure on-the-go with our powerful mobile app
                built for n8n users.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#077AC7] to-[#EE4F27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Download Now</span>
              </button>

              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-[#EE4F27]/30 transition-all duration-300 shadow-sm">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#EE4F27]/30 transition-all duration-300 shadow-sm">
                <Shield className="w-6 h-6 text-[#EE4F27] mx-auto mb-2" />
                <p className="text-sm text-gray-700 font-medium">
                  Secure & Reliable
                </p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#077AC7]/30 transition-all duration-300 shadow-sm">
                <BarChart3 className="w-6 h-6 text-[#077AC7] mx-auto mb-2" />
                <p className="text-sm text-gray-700 font-medium">
                  Real-time Monitoring
                </p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#6B21EF]/30 transition-all duration-300 shadow-sm">
                <Zap className="w-6 h-6 text-[#6B21EF] mx-auto mb-2" />
                <p className="text-sm text-gray-700 font-medium">
                  Instant Alerts
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Mobile mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[3rem] p-2 shadow-2xl border border-gray-300">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-6">
                    <span className="text-xs text-gray-600">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="pt-16 h-full bg-white">
                    {/* Header */}
                    <div className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-xl flex items-center justify-center shadow-sm">
                          <Image
                            src="/appIcon.png"
                            alt="n8n Monitor"
                            width={24}
                            height={24}
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            n8n Monitor
                          </h3>
                          <p className="text-xs text-gray-600">Dashboard</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="px-6 mb-6">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gradient-to-br from-[#EE4F27]/10 to-[#EE4F27]/5 rounded-xl p-3 text-center border border-[#EE4F27]/20 shadow-sm">
                          <div className="text-xl font-bold text-[#EE4F27]">
                            12
                          </div>
                          <div className="text-xs text-[#EE4F27]/80 font-medium">
                            Active
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#DC3545]/10 to-[#DC3545]/5 rounded-xl p-3 text-center border border-[#DC3545]/20 shadow-sm">
                          <div className="text-xl font-bold text-[#DC3545]">
                            3
                          </div>
                          <div className="text-xs text-[#DC3545]/80 font-medium">
                            Failed
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#28A745]/10 to-[#28A745]/5 rounded-xl p-3 text-center border border-[#28A745]/20 shadow-sm">
                          <div className="text-xl font-bold text-[#28A745]">
                            89%
                          </div>
                          <div className="text-xs text-[#28A745]/80 font-medium">
                            Success
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent activity */}
                    <div className="px-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Recent Activity
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                            <span className="text-sm text-gray-600">
                              Email Sync
                            </span>
                          </div>
                          <span className="text-xs text-[#28A745] font-medium">
                            ✓ Success
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#DC3545] rounded-full"></div>
                            <span className="text-sm text-gray-600">
                              Data Backup
                            </span>
                          </div>
                          <span className="text-xs text-[#DC3545] font-medium">
                            ✗ Failed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#EE4F27]/20 to-[#EE4F27]/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#077AC7]/20 to-[#077AC7]/10 rounded-full animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/4 -right-2 w-4 h-4 bg-gradient-to-br from-[#6B21EF]/20 to-[#6B21EF]/10 rounded-full animate-pulse animation-delay-4000"></div>
              <div className="absolute bottom-1/4 -left-2 w-5 h-5 bg-gradient-to-br from-[#28A745]/20 to-[#28A745]/10 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
