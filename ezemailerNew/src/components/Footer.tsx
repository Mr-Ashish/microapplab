// components/Footer.jsx

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  // Update navigation links to point to EzeMailer-specific pages
  const navigation = ["Features", "Pricing", "Integrations", "Support", "Blog"];

  // Update legal links as necessary
  const legal = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-200 dark:border-gray-700 lg:grid-cols-5">
          {/* 1. Logo and Description */}
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-gray-800 dark:text-white"
              >
                <Image
                  src="/img/envelope.svg" // Ensure this is your EzeMailer logo
                  alt="EzeMailer Logo"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>EzeMailer</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-600 dark:text-gray-400">
              EzeMailer transforms your HTML templates into flawless,
              email-compatible designs. Simplify your email marketing with
              seamless conversions, responsive designs, and comprehensive
              previews.
              <br />
              <br />
              <strong>Contact us:</strong>{" "}
              <a
                href="mailto:support@ezemailer.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@ezemailer.com
              </a>
            </div>

            {/* Optional: Add a trusted partner or hosting provider logo if applicable */}
            {/* <div className="mt-5">
              <a
                href="https://yourhostingprovider.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-44"
              >
                <Image
                  src="/img/hosting-provider.svg" // Replace with your hosting provider's logo if any
                  alt="Hosted by YourHostingProvider"
                  width="212"
                  height="44"
                />
              </a>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} EzeMailer. All rights reserved.
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}
