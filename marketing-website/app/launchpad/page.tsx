export const metadata = {
  title: "MicroAppLab - Launchpad",
};

import Hero from "./hero";
import WhyChoose from "./why";
import KeyFeatures from "./features";
import HowItWorks from "./how";
import TechStack from "./tech";
import Testimonials from "./testimonials";
import GetStarted from "./Getstarted";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <TechStack />
      <HowItWorks />
      {/* <KeyFeatures /> */}
      {/* <Testimonials /> */}
      <GetStarted />
    </>
  );
}
