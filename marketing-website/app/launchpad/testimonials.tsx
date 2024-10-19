// components/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "Founder of SaaSify",
      quote:
        "LaunchPad transformed our development process. We were able to launch our SaaS product in half the time it would have taken otherwise. The integrated tech stack is top-notch!",
    },
    {
      name: "John Smith",
      title: "CTO of InnovateX",
      quote:
        "The modular architecture of LaunchPad made it easy to customize our application. The support for TypeScript and Prisma ensured our codebase is robust and maintainable.",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-color-493B2A">
            Testimonials
          </h2>
        </div>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                {/* Replace with user avatars if available */}
                <div className="h-24 w-24 bg-color-7B6D8D rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-color-493B2A">
                  {testimonial.name}, {testimonial.title}
                </h3>
                <p className="text-color-593F62 mt-2">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
