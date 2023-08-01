import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="21.152%"
            cy="86.063%"
            fx="21.152%"
            fy="86.063%"
            r="79.941%"
            id="footer-logo"
          >
            <stop stopColor="#FC7753" offset="0%" />
            <stop stopColor="#66d6d1" offset="25.871%" />
            <stop stopColor="#473d58" offset="100%" />
          </radialGradient>
        </defs>
        <rect
          width="32"
          height="32"
          rx="16"
          fill="url(#footer-logo)"
          fillRule="nonzero"
        />
        <g transform="translate(6,8) ">
          <path
            rx="16"
            d="M15.44 2.16C14.512 1.264 13.352 0.816 11.96 0.816C11.016 0.816 10.184 1.016 9.464 1.416C8.728 1.816 8.216 2.352 7.928 3.024C7.608 2.384 7.064 1.856 6.296 1.44C5.528 1.024 4.704 0.816 3.824 0.816C1.28 0.816 0.00799847 2.368 0.00799847 5.472V12H3.296V6.384C3.296 5.344 3.44 4.616 3.728 4.2C4 3.768 4.472 3.552 5.144 3.552C6.216 3.552 7.064 3.96 7.688 4.776L7.712 12H10.976V6C10.976 5.088 11.136 4.456 11.456 4.104C11.76 3.736 12.304 3.552 13.088 3.552C13.968 3.552 14.664 3.76 15.176 4.176V12H18.44V1.104H15.656L15.44 2.16Z"
            fill="white"
          />
        </g>
      </svg>
    </Link>
  );
}
