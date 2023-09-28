export default function ContactUs() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full mx-auto my-80">
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">
        Contact Support
      </h1>

      <p className="text-lg text-gray-600 mb-4">
        If you have any questions or need assistance, please feel free to reach
        out to our support team.
      </p>

      <p className="text-lg text-gray-600 mb-4">
        You can send an email to:{" "}
        <a
          href="mailto:support@microapplab.com"
          className="text-blue-500 hover:underline"
        >
          support@microapplab.com
        </a>
      </p>

      <p className="text-lg text-gray-600">
        We will get back to you as soon as possible. Thank you for using our
        services!
      </p>
    </div>
  );
}
