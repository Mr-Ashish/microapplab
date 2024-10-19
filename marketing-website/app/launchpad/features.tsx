// components/KeyFeatures.js
export default function KeyFeatures() {
  return (
    <section className="py-16 bg-color-A5C4D4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-color-493B2A">
            Key Features
          </h2>
        </div>
        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-color-493B2A mb-4">
                Comprehensive Tech Stack
              </h3>
              <p className="text-color-593F62">
                LaunchPad integrates the latest technologies to provide a solid
                foundation for your SaaS applications. From frontend to backend,
                everything is optimized for performance and scalability.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              {/* Replace with relevant image */}
              <img
                src="/images/tech-stack.png"
                alt="Comprehensive Tech Stack"
                className="h-64 w-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-color-493B2A mb-4">
                Modular Architecture
              </h3>
              <p className="text-color-593F62">
                Easily customize and extend your application with LaunchPad’s
                modular architecture. Add or remove features as your SaaS tool
                evolves, ensuring flexibility and adaptability.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              {/* Replace with relevant image */}
              <img
                src="/images/modular-architecture.png"
                alt="Modular Architecture"
                className="h-64 w-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Add more key features as needed */}
        </div>
      </div>
    </section>
  );
}
