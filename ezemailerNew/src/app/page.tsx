"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Features Section */}
      <SectionTitle
        preTitle="EzeMailer Benefits"
        title="Why Choose EzeMailer for Your Email Campaigns"
      >
        EzeMailer is a comprehensive tool designed to streamline your email
        marketing efforts. Convert, design, and manage your email templates
        effortlessly, ensuring they are compatible across all major email
        clients.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* 3. Video Section */}
      {/* <SectionTitle preTitle="Watch a Demo" title="See EzeMailer in Action">
        Discover how EzeMailer can revolutionize your email campaigns. Watch our
        demo video to learn how easy it is to convert your HTML templates into
        stunning, email-ready designs.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      {/* 4. Testimonials Section */}
      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's What Our Customers Say"
      >
        Hear from our satisfied users and learn how EzeMailer has transformed
        their email marketing strategies.
      </SectionTitle>

      <Testimonials /> */}

      {/* 5. FAQ Section */}
      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Have questions? We’ve got answers. Learn more about how EzeMailer can
        benefit your email campaigns.
      </SectionTitle>

      <Faq /> */}

      {/* 6. Call to Action Section */}
      <Cta />
    </Container>
  );
}
