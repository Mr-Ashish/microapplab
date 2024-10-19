// components/Metadata.js
import Head from "next/head";

const Metadata = ({
  title = "LaunchPad - Your Ultimate Next.js Boilerplate for Building SaaS Tools",
  description = "LaunchPad is a comprehensive Next.js boilerplate designed to streamline your SaaS development journey. Build, deploy, and scale your SaaS applications effortlessly with integrated tools and features.",
  keywords = "Next.js, SaaS, Boilerplate, Prisma, shadcn, Tailwind CSS, NextAuth, Razorpay, Resend, TypeScript, GitHub, SaaS Development, LaunchPad",
  url = "https://microapplab.com/launchpad",
  image = "https://microapplab.com/images/launchpad-og-image.png",
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Microapplab" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LaunchPad" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* <meta name="twitter:creator" content={twitterHandle} /> */}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Apple Touch Icon */}
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      /> */}

      {/* Manifest */}
      {/* <link rel="manifest" href="/site.webmanifest" /> */}

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "LaunchPad",
            image: [
              image,
              "https://microapplab.com/images/launchpad-og-image.png",
            ],
            description: description,
            brand: {
              "@type": "Brand",
              name: "LaunchPad",
            },
            offers: {
              "@type": "Offer",
              url: url + "purchase",
              priceCurrency: "INR",
              price: "499",
              priceValidUntil: "2025-12-31",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "LaunchPad",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "124",
            },
          }),
        }}
      />
    </Head>
  );
};

export default Metadata;
