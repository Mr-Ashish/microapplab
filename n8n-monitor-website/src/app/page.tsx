import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UpcomingFeatures from "@/components/sections/UpcomingFeatures";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Upcoming Features Section */}
      <section id="upcoming-features">
        <UpcomingFeatures />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* CTA Section */}
      <section id="cta">
        <CTA />
      </section>
    </main>
  );
}
