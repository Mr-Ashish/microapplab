// components/HowItWorks.js
import {
  ClipboardListIcon,
  PencilAltIcon,
  CloudUploadIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Clone the Repository",
      description:
        "Start by cloning the LaunchPad repository to your local machine. Get immediate access to a fully functional Next.js boilerplate.",
      icon: <ClipboardListIcon className="h-8 w-8 text-color-8499B1" />,
    },
    {
      number: 2,
      title: "Customize Your SaaS Tool",
      description:
        "Leverage the integrated tech stack to tailor the boilerplate to your specific needs. Modify UI components, set up your database, and configure authentication effortlessly.",
      icon: <PencilAltIcon className="h-8 w-8 text-color-8499B1" />,
    },
    {
      number: 3,
      title: "Deploy & Scale",
      description:
        "Once your SaaS tool is ready, deploy it with a single command. LaunchPad’s optimized setup ensures your application scales seamlessly as your user base grows.",
      icon: <CloudUploadIcon className="h-8 w-8 text-color-8499B1" />,
    },
    {
      number: 4,
      title: "Maintain & Iterate",
      description:
        "Continuously improve your SaaS tool with LaunchPad’s maintainable codebase. Implement new features, optimize performance, and keep your application up-to-date with ease.",
      icon: <RefreshIcon className="h-8 w-8 text-color-8499B1" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-color-493B2A">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-color-593F62">
            Follow these simple steps to get your SaaS application up and
            running with LaunchPad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-6 border border-color-A5C4D4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon with Step Number */}
              <div className="flex items-center justify-center mb-4">
                <div className="bg-color-A5C4D4 rounded-full p-3">
                  {step.icon}
                </div>
                <span className="ml-2 text-xl font-bold text-color-493B2A">
                  Step {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-color-493B2A mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-color-593F62">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
