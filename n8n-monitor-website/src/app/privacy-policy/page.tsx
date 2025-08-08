import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-[#640D5F] hover:text-[#B12C00] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              n8n Monitor (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  n8n Instance Information
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect your n8n instance URL and API credentials to
                  establish a secure connection for monitoring your workflows.
                  This information is stored locally on your device using secure
                  storage mechanisms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Workflow Data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We access your workflow execution data, including status,
                  logs, and performance metrics to provide monitoring
                  functionality. This data is processed locally and not
                  transmitted to our servers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Device Information
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect device-specific information such as device
                  model, operating system version, and app version for
                  troubleshooting and support purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide workflow monitoring and alerting functionality</li>
                <li>Enable one-tap retry and execution management features</li>
                <li>
                  Display real-time workflow status and performance metrics
                </li>
                <li>Send push notifications for workflow events</li>
                <li>Improve app performance and user experience</li>
                <li>Provide customer support and troubleshooting</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>All API communications are encrypted using HTTPS/TLS</li>
              <li>
                Sensitive data is stored using device secure storage
                (Keychain/Keystore)
              </li>
              <li>No workflow data is transmitted to our servers</li>
              <li>Local data is protected by device security mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your n8n instance credentials and workflow data are stored locally
              on your device. You can delete this data at any time by
              uninstalling the app or clearing app data through your device
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our app may integrate with third-party services for analytics and
              crash reporting. These services have their own privacy policies,
              and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Access and review your stored data</li>
              <li>Delete your data by uninstalling the app</li>
              <li>Disable push notifications through device settings</li>
              <li>Contact us with privacy-related questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our app is not intended for use by children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Email: privacy@n8nmonitor.com
                <br />
                Website: https://n8nmonitor.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
