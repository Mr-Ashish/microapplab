import React from "react";

const Terms: React.FC<any> = () => {
  return (
    <div className="container mx-auto py-40">
      <div className="prose max-w-4xl mx-auto" />
      <h1 style={{ fontSize: "30px" }}>Cancellation and Refund Policy</h1>
      <p>
        <strong>Last Updated:</strong> 2nd June 2024
      </p>
      <p>
        Thank you for using MicroAppLab. If you are not entirely satisfied with
        your purchase, we're here to help.
      </p>

      <h2>1. Cancellation</h2>
      <p>
        <strong>Subscription Services:</strong> You may cancel your subscription
        at any time by logging into your account and following the cancellation
        procedures. Your cancellation will take effect at the end of the current
        billing cycle.
      </p>
      <p>
        <strong>One-Time Purchases:</strong> One-time purchases cannot be
        canceled once the order is processed.
      </p>

      <h2>2. Refunds</h2>
      <p>
        <strong>Subscription Services:</strong> If you cancel a subscription,
        you will not receive a refund for the current billing period. However,
        you will continue to have access to the service until the end of the
        billing period.
      </p>
      <p>
        <strong>One-Time Purchases:</strong> Refunds for one-time purchases are
        generally not available. However, we may, at our sole discretion,
        provide refunds under certain circumstances, such as if the product is
        defective or not as described.
      </p>

      <h2>3. How to Request a Refund</h2>
      <p>
        To request a refund, please contact our support team at
        support@microapplab.com with your order details and the reason for your
        request. We will review your request and notify you of the approval or
        rejection of your refund.
      </p>

      <h2>4. Processing Refunds</h2>
      <p>
        If your refund is approved, we will process the refund within 90 days.
        The refund will be made to the original method of payment.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update our Cancellation and Refund Policy from time to time. We
        will notify you of any changes by posting the new policy on our website.
        You are advised to review this policy periodically for any changes.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about our Cancellation and Refund Policy,
        please contact us at:
      </p>
      <p>Email: support@microapplab.com</p>
    </div>
  );
};

export default Terms;
