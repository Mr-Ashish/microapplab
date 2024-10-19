// components/TechStack.js
export default function TechStack() {
  const techs = [
    {
      name: "Next.js 14",
      description:
        "Modern React framework for building fast, scalable applications.",
      icon: "/images/nextjs.png", // Replace with actual icon paths
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for seamless database management.",
      icon: "/images/prisma.png",
    },
    {
      name: "shadcn",
      description: "Elegant UI components for a polished user interface.",
      icon: "/images/shadcn.png",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid styling.",
      icon: "/images/tailwind-css.svg",
    },
    {
      name: "NextAuth v5",
      description: "Secure and flexible authentication solutions.",
      icon: "/images/nextauth.png",
    },
    {
      name: "Razorpay",
      description: "Reliable payment gateway integration.",
      icon: "/images/razorpay-icon.png",
    },
    {
      name: "Resend",
      description: "Efficient email sending service.",
      icon: "/images/resend.svg",
    },
    {
      name: "TypeScript",
      description:
        "Enhanced JavaScript with static typing for better code quality.",
      icon: "/images/typescript.png",
    },
  ];

  return (
    <section className="py-16 bg-color-A5C4D4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-color-493B2A">
            Tech Stack Overview
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={tech.icon}
                alt={`${tech.name} Icon`}
                className="h-16  mb-4"
              />
              <h3 className="text-2xl font-semibold text-color-493B2A mb-2">
                {tech.name}
              </h3>
              <p className="text-color-593F62">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
