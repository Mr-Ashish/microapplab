// components/mobile-menu.js

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the Products dropdown in mobile
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {/* Icon when menu is closed */}
        {!isOpen ? (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          // Icon when menu is open
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>
            </li>

            {/* Products Dropdown in Mobile */}
            <li>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
              >
                Products
                {/* Optional: Add an indicator for dropdown, e.g., a chevron */}
                {/* <svg
                  className="inline w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg> */}
              </button>
              {isProductsOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  <li>
                    <Link
                      href="/birthdaybilly"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      BirthdayBilly
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ezemail.microapplab.com"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Ezemailer
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/contactUs"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
