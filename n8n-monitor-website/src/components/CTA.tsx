"use client";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Mail,
  Smartphone,
  Shield,
  Zap,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-n8n-background via-n8n-surface to-n8n-surface-variant overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-n8n-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-n8n-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-n8n-text mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-n8n-primary to-n8n-secondary bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto mb-8">
            Download n8n Monitor today and start monitoring your workflows from
            anywhere. It&apos;s free during our beta period.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-n8n-primary to-n8n-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-n8n-primary-dark to-n8n-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Download Free Beta</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
            </button>

            <button className="group inline-flex items-center justify-center px-8 py-4 bg-n8n-surface/50 backdrop-blur-sm border border-n8n-border/50 text-n8n-text font-semibold rounded-xl hover:bg-n8n-surface/70 hover:border-n8n-primary/30 transition-all duration-300">
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Platform badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-n8n-surface/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-n8n-border/30">
              <Smartphone className="w-4 h-4 text-n8n-primary" />
              <span className="text-sm text-n8n-text-secondary">
                Available on Android & iOS
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-n8n-surface/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-n8n-border/30">
              <Shield className="w-4 h-4 text-n8n-success" />
              <span className="text-sm text-n8n-text-secondary">
                Free during beta
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-n8n-surface/50 backdrop-blur-sm rounded-xl px-4 py-2 border border-n8n-border/30">
              <Zap className="w-4 h-4 text-n8n-warning" />
              <span className="text-sm text-n8n-text-secondary">
                No setup required
              </span>
            </div>
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-n8n-surface/30 to-n8n-surface-variant/30 backdrop-blur-sm rounded-3xl border border-n8n-border/30 p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-n8n-text mb-4">
              Stay Updated
            </h3>
            <p className="text-n8n-text-secondary max-w-2xl mx-auto">
              Get notified about new features, updates, and tips for getting the
              most out of n8n Monitor.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-n8n-surface/50 backdrop-blur-sm border border-n8n-border/50 rounded-xl text-n8n-text placeholder-n8n-text-secondary focus:outline-none focus:border-n8n-primary/50 transition-colors duration-300"
              />
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-n8n-primary to-n8n-primary-dark text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
            <p className="text-xs text-n8n-text-secondary mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-n8n-border/30 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-n8n-primary to-n8n-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">n8n</span>
                </div>
                <span className="font-bold text-n8n-text">n8n Monitor</span>
              </div>
              <p className="text-sm text-n8n-text-secondary">
                The mobile app for monitoring and managing your n8n workflows
                from anywhere.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-n8n-text mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <a
                    href="#download"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-n8n-text mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#help"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-n8n-text mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-n8n-surface/50 backdrop-blur-sm rounded-xl border border-n8n-border/30 flex items-center justify-center hover:border-n8n-primary/30 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-n8n-text-secondary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-n8n-surface/50 backdrop-blur-sm rounded-xl border border-n8n-border/30 flex items-center justify-center hover:border-n8n-primary/30 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-n8n-text-secondary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-n8n-surface/50 backdrop-blur-sm rounded-xl border border-n8n-border/30 flex items-center justify-center hover:border-n8n-primary/30 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-n8n-text-secondary" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="mt-12 pt-8 border-t border-n8n-border/30 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-n8n-text-secondary">
              © 2024 n8n Monitor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <a
                href="#terms"
                className="text-sm text-n8n-text-secondary hover:text-n8n-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
