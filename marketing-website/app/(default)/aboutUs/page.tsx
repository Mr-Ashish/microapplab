// pages/about.js

import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us | [Your Company Name]</title>
      </Head>

      <main className="bg-gray-100 p-4 my-20">
        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-600">
            Welcome to [Your Company Name], your trusted partner for creating
            innovative and efficient Slack and Microsoft Teams apps. We are a
            young and dynamic company based in India, passionate about
            delivering cutting-edge solutions that enhance collaboration and
            productivity in your workplace.
          </p>
          <p className="text-gray-600">
            Our journey began with a vision to transform the way teams
            communicate and work together. We understand the evolving needs of
            businesses in the digital age, and we're dedicated to crafting apps
            that make a real difference.
          </p>
        </section>

        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower organizations with seamless and
            tailor-made solutions that leverage the power of Slack and Microsoft
            Teams. We strive to simplify complex workflows, foster
            collaboration, and boost productivity.
          </p>
        </section>

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
              every app we create is of the highest quality and meets the needs
              of our clients.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients are at the heart of
              everything we do. We prioritize your goals and strive to exceed
              your expectations.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              collaboration, both within our team and with our clients.
              Together, we achieve great results.
            </li>
          </ul>
        </section>

        <section className="container mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600">
            We're a diverse and talented team of developers, designers, and
            innovators passionate about creating outstanding Slack and Microsoft
            Teams apps. Together, we bring a wealth of expertise and a shared
            commitment to excellence.
          </p>
          {/* <p className="text-gray-600">
            Get to know the faces behind our success.
          </p> */}
          {/* Add team member profiles here */}
        </section>

        <section className="container mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have questions about our
            services or want to discuss a project, don't hesitate to reach out.
          </p>
          <p className="text-gray-600">
            Connect with us at{" "}
            <a
              href="mailto:support@microapplab.com"
              className="text-blue-500 hover:underline"
            >
              support@microapplab.com
            </a>{" "}
            or give us a call at [+91 8220574074].
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
