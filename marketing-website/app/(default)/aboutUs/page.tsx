// pages/about.js

import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us | MicroAppLab</title>
      </Head>

      <main className="bg-gray-100 p-4 my-20">
        {/* About Us Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-600">
            Welcome to MicroAppLab, your trusted partner for creating innovative
            and efficient SaaS tools and other small software solutions. We are
            a young and dynamic company based in India, passionate about
            delivering cutting-edge tools that enhance collaboration,
            productivity, and efficiency in the tech world.
          </p>
          <p className="text-gray-600">
            Our journey began with a vision to transform the way teams
            communicate and work together. We understand the evolving needs of
            businesses and developers in the digital age, and we're dedicated to
            crafting apps and tools that make a real difference.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower organizations and individual developers
            with seamless, tailor-made solutions that leverage the power of
            platforms like Slack and Microsoft Teams. We strive to simplify
            complex workflows, foster collaboration, and boost productivity
            through our suite of small SaaS tools and software solutions.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Innovation:</strong> We're committed to staying at the
              forefront of technology, continuously innovating to deliver the
              best solutions.
            </li>
            <li>
              <strong>Quality:</strong> We take pride in our work, ensuring
              every tool and app we create is of the highest quality and meets
              the needs of our clients and the tech community.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients and users are at
              the heart of everything we do. We prioritize your goals and strive
              to exceed your expectations.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              collaboration, both within our team and with our clients and the
              wider tech community. Together, we achieve great results.
            </li>
          </ul>
        </section>

        {/* Our Services Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
          <p className="text-gray-600 mb-4">
            At MicroAppLab, we specialize in developing small SaaS tools and
            software solutions that cater to the unique needs of businesses and
            tech enthusiasts. Our offerings include:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>SaaS Tools:</strong> Cloud-based applications designed to
              streamline your workflows and enhance productivity.
            </li>
            <li>
              <strong>Integration Apps:</strong> Seamless integrations with
              platforms like Slack and Microsoft Teams to unify your tools and
              services.
            </li>
            <li>
              <strong>Custom Software Solutions:</strong> Tailor-made tools that
              address specific challenges and requirements of your organization.
            </li>
            <li>
              <strong>Community Tools:</strong> Free and open-source tools that
              support developers and the broader tech community.
            </li>
          </ul>
        </section>

        {/* Meet Our Team Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600">
            We're a diverse and talented team of developers, designers, and
            innovators passionate about creating outstanding SaaS tools and
            software solutions. Together, we bring a wealth of expertise and a
            shared commitment to excellence.
          </p>
          {/* <p className="text-gray-600">
            Get to know the faces behind our success.
          </p> */}
          {/* Add team member profiles here */}
        </section>

        {/* Contact Us Section */}
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have questions about our
            services, want to discuss a project, or have ideas for new tools,
            don't hesitate to reach out.
          </p>
          <p className="text-gray-600">
            Connect with us at{" "}
            <a
              href="mailto:support@microapplab.com"
              className="text-blue-500 hover:underline"
            >
              support@microapplab.com
            </a>{" "}
            or give us a call at{" "}
            <a
              href="tel:+918220574074"
              className="text-blue-500 hover:underline"
            >
              +91 8220574074
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
