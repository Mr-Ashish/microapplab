"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "DevOps Engineer",
    company: "TechFlow Inc.",
    content:
      "n8n Monitor has completely transformed how I manage our automation workflows. The real-time notifications and one-tap retry feature save me hours every week.",
    rating: 5,
    avatar: "/images/user1.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Automation Specialist",
    company: "DataSync Solutions",
    content:
      "Finally, a mobile app that actually works with n8n! The interface is intuitive and the performance is outstanding. Highly recommended for any n8n user.",
    rating: 5,
    avatar: "/images/user2.jpg",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "CloudScale",
    content:
      "The ability to monitor our critical workflows from anywhere has been a game-changer. The app is reliable, fast, and the support team is excellent.",
    rating: 5,
    avatar: "/images/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#FFCC00]/6 to-[#FFCC00]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#640D5F]/6 to-[#640D5F]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#B12C00]/5 to-[#B12C00]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#EB5B00]/4 to-[#EB5B00]/2 rounded-full blur-3xl"></div>
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
            Loved by
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#640D5F] bg-clip-text text-transparent">
              {" "}
              Teams Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our users are saying about n8n Monitor and how it&apos;s
            helping them manage their automation workflows.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFCC00] to-[#EB5B00] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FFCC00] fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#640D5F] to-[#B12C00] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-[#640D5F] mb-2">10K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-[#B12C00] mb-2">50K+</div>
            <div className="text-sm text-gray-600">Workflows Monitored</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-[#EB5B00] mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-[#FFCC00] mb-2">4.9★</div>
            <div className="text-sm text-gray-600">App Store Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
