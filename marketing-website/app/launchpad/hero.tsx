import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import SlackIcon from "@/public/images/slack.png";
import HeroImage from "@/public/images/HeroImage.png";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Empowering the Tech Community with Innovative{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                SaaS Tools & Solutions
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Simplify workflows, enhance productivity, and drive innovation.
              </h2>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-x-0 sm:space-x-4"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    href="#products"
                    className="btn text-white bg-blue-600 hover:bg-blue-700 shadow w-full sm:w-auto mb-4 sm:mb-0 rounded-full flex flex-row items-center justify-center px-6 py-3"
                    style={{ lineHeight: 1 }}
                  >
                    Explore Our Tools
                  </a>
                </div>
                <div>
                  <a
                    href="#request-tool"
                    className="btn text-white bg-teal-600 hover:bg-teal-700 shadow w-full sm:w-auto mb-4 sm:mb-0 rounded-full flex flex-row items-center justify-center px-6 py-3"
                    style={{ lineHeight: 1 }}
                  >
                    Submit Your Idea
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center justify-center">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HeroImage}
                width={800}
                height={400}
                alt="Innovative SaaS Tools"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                At MicroAppLab, we specialize in developing small yet powerful
                SaaS tools and software solutions tailored to meet the unique
                needs of developers, businesses, and tech enthusiasts. Our
                mission is to create tools that simplify complex tasks, foster
                collaboration, and drive productivity.
              </p>
              <p className="text-gray-600">
                Whether you're looking to streamline your workflows, integrate
                with popular platforms like Slack and Microsoft Teams, or bring
                your own software idea to life, we've got you covered.
              </p>
              {/* Optional: Add ModalVideo if you want to include a video */}
              {/* <ModalVideo
                thumb={VideoThumb}
                thumbWidth={768}
                thumbHeight={432}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
