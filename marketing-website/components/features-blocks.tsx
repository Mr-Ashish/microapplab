// components/FeaturesBlocks.js

export default function FeaturesBlocks() {
  return (
    <section className="relative py-20 bg-gray-50" id="products">
      {/* Section background */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Innovative Tools</h2>
            <p className="text-xl text-gray-600">
              Discover how our tailored solutions can enhance your productivity
              and streamline your workflows.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item: Ezemailer */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-teal-600 text-white rounded-full">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0v4m0 0v4m0-4h4m-4 0H8"
                  />
                </svg>
              </div>
              {/* Title */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">
                Ezemailer
              </h4>
              {/* Description */}
              <p className="text-gray-600 text-center mb-4">
                Transform your HTML views into responsive, email-compatible
                templates effortlessly with Ezemailer. Ensure your emails look
                great across all major email clients.
              </p>
              {/* CTA */}
              <a
                href="https://ezemail.microapplab.com"
                className="text-teal-600 hover:text-teal-800 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>

            {/* 2nd item: BirthdayBilly */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              {/* Title */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">
                BirthdayBilly
              </h4>
              {/* Description */}
              <p className="text-gray-600 text-center mb-4">
                Never miss a celebration again! BirthdayBilly notifies your
                Slack channels about upcoming birthdays and anniversaries,
                fostering a more connected and appreciative team environment.
              </p>
              {/* CTA */}
              <a
                href="/birthdaybilly"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
