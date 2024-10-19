// components/WhyChoose.js
export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-color-493B2A">
            Why Choose LaunchPad?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-color-A5C4D4 p-4 rounded-full mb-4">
              {/* Replace with relevant icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-color-493B2A"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-color-493B2A mb-2">
              Fast & Flexible Development
            </h3>
            <p className="text-color-593F62">
              Harness the power of **Next.js 14** to build dynamic,
              high-performance SaaS applications. LaunchPad’s robust
              architecture ensures your projects are scalable and maintainable.
            </p>
          </div>
          {/* Repeat similar blocks for other features */}
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-color-A5C4D4 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-color-493B2A"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-color-493B2A mb-2">
              Seamless Database Integration
            </h3>
            <p className="text-color-593F62">
              With **Prisma**, managing your database interactions becomes a
              breeze. Enjoy type-safe database queries and effortless
              migrations, allowing you to focus on building features that
              matter.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-color-A5C4D4 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-color-493B2A"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 6v4m0-12C9.243 2 7 4.243 7 7v4H5v2h2v4c0 2.757 2.243 5 5 5s5-2.243 5-5V9h2V7c0-2.757-2.243-5-5-5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-color-493B2A mb-2">
              Beautiful UI Components
            </h3>
            <p className="text-color-593F62">
              Utilize **shadcn** UI components to create stunning, responsive
              interfaces. Customize effortlessly with **Tailwind CSS**, ensuring
              your SaaS tool not only functions flawlessly but also looks
              amazing.
            </p>
          </div>
          {/* Add more features as needed */}
        </div>
      </div>
    </section>
  );
}
