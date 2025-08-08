"use client";
import { motion } from "framer-motion";
import {
  Smartphone,
  Bell,
  RefreshCw,
  BarChart3,
  Shield,
  Zap,
  Eye,
  Clock,
  TrendingUp,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Built specifically for mobile devices with intuitive touch controls and responsive design.",
    color: "from-[#EE4F27] to-[#077AC7]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description:
      "Get instant push notifications when workflows fail or require attention.",
    color: "from-[#077AC7] to-[#6B21EF]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    comingSoon: true,
  },
  {
    icon: RefreshCw,
    title: "One-Tap Retry",
    description:
      "Retry failed executions with a single tap, no need to access your desktop.",
    color: "from-[#6B21EF] to-[#28A745]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: BarChart3,
    title: "Live Dashboard",
    description:
      "Monitor workflow performance, success rates, and execution times in real-time.",
    color: "from-[#28A745] to-[#EE4F27]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description:
      "End-to-end encryption ensures your n8n instance data remains secure.",
    color: "from-[#EE4F27] to-[#077AC7]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Eye,
    title: "Execution History",
    description:
      "View detailed logs and execution history for debugging and analysis.",
    color: "from-[#077AC7] to-[#6B21EF]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    icon: Clock,
    title: "Background Monitoring",
    description:
      "Continuously monitor your workflows even when the app is in the background.",
    color: "from-[#6B21EF] to-[#28A745]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    comingSoon: true,
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Track workflow performance trends and identify optimization opportunities.",
    color: "from-[#28A745] to-[#EE4F27]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    comingSoon: true,
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description:
      "Simple setup process to connect your n8n instance in minutes.",
    color: "from-[#EE4F27] to-[#077AC7]",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-[#EE4F27] to-[#077AC7] bg-clip-text text-transparent">
              {" "}
              Workflow Monitoring
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor and manage your n8n workflows from
            your mobile device.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`h-full p-6 rounded-2xl border ${feature.bgColor} ${feature.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative`}
              >
                {feature.comingSoon && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#EE4F27] to-[#077AC7] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                    Coming Soon
                  </div>
                )}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-sm ${feature.comingSoon ? 'opacity-60' : ''}`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${feature.comingSoon ? 'opacity-70' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${feature.comingSoon ? 'opacity-70' : ''}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <Zap className="w-5 h-5 text-[#6B21EF]" />
            <span className="text-gray-700 font-medium">
              All features work seamlessly with your existing n8n setup
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
