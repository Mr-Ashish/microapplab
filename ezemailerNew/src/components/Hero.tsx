// components/Hero.jsx

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero_desktop.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        {/* Textual Content */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            {/* Enhanced Headline */}
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transform Your HTML Templates into Flawless Emails
            </h1>

            {/* Enhanced Subheadline */}
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Convert your HTML templates into email-ready code effortlessly,
              ensuring compatibility across all major email clients with just
              one click.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* Primary CTA */}
              <a
                href="https://app.microapplab.com"
                target="_blank"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </a>

              {/* Secondary CTA */}
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width="616"
              height="617"
              className="object-cover"
              alt="EzeMailer Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
