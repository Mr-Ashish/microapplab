"use client";
import { motion } from "framer-motion";
import {
  Bell,
  Layers,
  Smartphone,
  BarChart3,
  Clock,
  Wifi,
  Download,
  Calendar,
} from "lucide-react";

const upcomingFeatures = [
  {
    icon: Bell,
    title: "Smart Notifications System",
    description:
      "Advanced push notifications with custom rules, email alerts, and rich notification content.",
    timeline: "Next Update",
    color: "from-[#EE4F27] to-[#F36B47]",
    bgColor: "bg-gradient-to-br from-[#EE4F27]/5 to-[#F36B47]/5",
    borderColor: "border-[#EE4F27]/20",
  },
  {
    icon: Layers,
    title: "Multi-Instance Support",
    description:
      "Connect and monitor multiple n8n instances simultaneously with easy switching.",
    timeline: "Q2 2025",
    color: "from-[#077AC7] to-[#2994D1]",
    bgColor: "bg-gradient-to-br from-[#077AC7]/5 to-[#2994D1]/5",
    borderColor: "border-[#077AC7]/20",
  },
  {
    icon: Smartphone,
    title: "Apple Watch & Widgets",
    description:
      "Native Apple Watch app and home screen widgets for quick monitoring.",
    timeline: "Q2 2025",
    color: "from-[#6B21EF] to-[#8044F2]",
    bgColor: "bg-gradient-to-br from-[#6B21EF]/5 to-[#8044F2]/5",
    borderColor: "border-[#6B21EF]/20",
  },
  {
    icon: BarChart3,
    title: "Enhanced Analytics",
    description:
      "Advanced reporting, custom date ranges, and data export functionality.",
    timeline: "Q3 2025",
    color: "from-[#28A745] to-[#51B866]",
    bgColor: "bg-gradient-to-br from-[#28A745]/5 to-[#51B866]/5",
    borderColor: "border-[#28A745]/20",
  },
  {
    icon: Clock,
    title: "Background Monitoring",
    description:
      "Continuous monitoring with configurable intervals and background sync.",
    timeline: "Next Update",
    color: "from-[#EE4F27] to-[#077AC7]",
    bgColor: "bg-gradient-to-br from-[#EE4F27]/5 to-[#077AC7]/5",
    borderColor: "border-[#EE4F27]/20",
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description:
      "View cached data and sync when connection is restored for uninterrupted monitoring.",
    timeline: "Q3 2025",
    color: "from-[#077AC7] to-[#6B21EF]",
    bgColor: "bg-gradient-to-br from-[#077AC7]/5 to-[#6B21EF]/5",
    borderColor: "border-[#077AC7]/20",
  },
];

export default function UpcomingFeatures() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#EE4F27]/6 to-[#EE4F27]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#077AC7]/6 to-[#077AC7]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#6B21EF]/5 to-[#6B21EF]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#28A745]/4 to-[#28A745]/2 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#EE4F27]/10 to-[#077AC7]/10 border border-[#EE4F27]/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-[#EE4F27]" />
            <span className="text-sm text-[#EE4F27] font-medium">
              Roadmap 2025
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What&apos;s Coming
            <span className="bg-gradient-to-r from-[#EE4F27] to-[#077AC7] bg-clip-text text-transparent">
              {" "}
              Next
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re constantly improving n8n Monitor. Here&apos;s what we&apos;re working on
            to make your workflow monitoring experience even better.
          </p>
        </motion.div>

        {/* Upcoming Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`h-full p-6 rounded-2xl border ${feature.bgColor} ${feature.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                {/* Timeline badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-3 py-1 shadow-sm">
                  <span className="text-xs font-medium text-gray-600">
                    {feature.timeline}
                  </span>
                </div>

                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 pr-16">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#EE4F27] to-[#077AC7] rounded-xl flex items-center justify-center shadow-sm">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Get Early Access</h3>
                <p className="text-sm text-gray-600">
                  Download now and get notified about upcoming features
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Download App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}