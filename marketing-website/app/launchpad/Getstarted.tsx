// components/GetStarted.js
import Button from "./Button";

export default function GetStarted() {
  return (
    <section className="py-16 bg-color-8499B1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Get Started with LaunchPad
        </h2>
        <p className="text-lg text-white mb-8">
          Ready to build your SaaS tool with ease? Join the community of
          developers who trust LaunchPad to power their SaaS applications.
        </p>
        <div className="flex justify-center space-x-4">
          <Button href="#start-trial" variant="primary">
            Email me: ashish@microapplab.com
          </Button>
          {/* <Button href="#documentation" variant="secondary">
            View Documentation
          </Button> */}
        </div>
      </div>
    </section>
  );
}
