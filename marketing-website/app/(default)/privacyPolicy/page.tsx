import React from "react";

const PrivacyPolicy: React.FC<any> = () => {
  return (
    <div>
      <div className="container mx-auto py-40">
        <div className="prose max-w-4xl mx-auto" />
        <h1 style={{ fontSize: "30px" }}>Privacy Policy</h1>
        <p>
          <strong>Last Updated:</strong> 2nd June 2024
        </p>
        <p>
          MicroAppLab ("we," "us," or "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our software as a service
          (SaaS) tools and services (collectively, the "Services"). Please read
          this Privacy Policy carefully. If you do not agree with the terms of
          this Privacy Policy, please do not use the Services.
        </p>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> We may collect personal
            information that you provide to us directly, such as your name,
            email address, payment information, and other contact details.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about your
            interactions with our Services, including the pages you visit, the
            features you use, and the actions you take.
          </li>
          <li>
            <strong>Device Information:</strong> We may collect information
            about the devices you use to access our Services, including the IP
            address, browser type, and operating system.
          </li>
        </ul>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide, maintain, and improve our Services</li>
          <li>To process transactions and send you related information</li>
          <li>
            To communicate with you, including responding to your comments,
            questions, and requests
          </li>
          <li>
            To monitor and analyze trends, usage, and activities in connection
            with our Services
          </li>
          <li>
            To detect, investigate, and prevent fraudulent transactions and
            other illegal activities
          </li>
        </ul>
        <h2>3. Sharing Your Information</h2>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may share your
            information with third-party service providers who perform services
            on our behalf, such as payment processing, data analysis, and
            customer service.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose your information
            if required to do so by law or in response to valid requests by
            public authorities.
          </li>
        </ul>
        <h2>4. Security of Your Information</h2>
        <p>
          We use reasonable administrative, technical, and physical security
          measures to protect your information. However, no method of
          transmission over the internet, or method of electronic storage, is
          100% secure, and we cannot guarantee absolute security.
        </p>
        <h2>5. Your Privacy Rights</h2>
        <p>
          You may have certain rights regarding your personal information, such
          as the right to access, correct, or delete your personal information.
          To exercise these rights, please contact us at
          support@microapplab.com.
        </p>
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          You are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>Email: support@microapplab.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
