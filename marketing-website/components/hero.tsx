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
              Introducing the Ultimate{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Birthday App{" "}
              </span>
              for Slack!
            </h1>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Never Miss a Birthday Celebration Again!
              </h2>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    href="https://slack.com/oauth/v2/authorize?client_id=5139101796599.5166301477521&scope=app_mentions:read,calls:write,channels:history,channels:read,chat:write,commands,files:read,files:write,groups:history,groups:read,im:history,incoming-webhook,mpim:history,mpim:read,users:read&user_scope=channels:read,im:read"
                    className="btn text-white bg-black bg-opacity-50 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-full flex flex-row items-center"
                    style={{ lineHeight: 1 }}
                  >
                    <Image
                      className="mr-2"
                      src={SlackIcon}
                      width={20}
                      height="20"
                      alt="slack"
                    />
                    <div className="flex items-center">Add to slack</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <div className="flex items-center justify-center">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HeroImage}
                width={800}
                height="20"
                alt="slack"
              />
            </div>
          </div>

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
    </section>
  );
}
