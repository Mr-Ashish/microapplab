import HeroImage from "@/public/images/launchpad-hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-color-493B2A">
              Launch your own SAAS in a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-color-7B6D8D to-color-8499B1">
                Weekend
              </span>
            </h1>
            <h2 className="text-3xl text-color-593F62 mb-8">
              Simplify workflows, enhance productivity, and drive innovation.
            </h2>
            <div className="flex space-x-4">
              <a
                href="#products"
                className="btn text-white bg-color-7B6D8D hover:bg-color-8499B1 shadow rounded-full px-6 py-3 transition duration-300 font-bold"
              >
                Email me : ashish@microapplab.com
              </a>
              {/* <a
                href="#request-tool"
                className="btn text-white bg-color-8499B1 hover:bg-color-A5C4D4 shadow rounded-full px-6 py-3 transition duration-300"
              >
                Submit Your Idea
              </a> */}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              className="h-auto max-w-full rounded-lg "
              src={HeroImage}
              width={400}
              height={200}
              alt="Innovative SaaS Tools"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
