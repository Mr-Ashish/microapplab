// components/data.js

import {
  ClipboardDocumentCheckIcon,
  EyeIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Seamless HTML to Email Conversion",
  desc: "Transform your existing HTML templates into email-ready code effortlessly. EzeMailer handles CSS inlining, ensuring your emails look flawless across all major email clients.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automated HTML Optimization",
      desc: "Upload your HTML templates and let EzeMailer optimize them for email compatibility, saving you hours of manual coding.",
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Comprehensive Email Previews",
      desc: "Visualize how your emails will appear in various clients like Gmail, Outlook, Yahoo, and more, ensuring a consistent user experience.",
      icon: <EyeIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Smart CSS Inlining",
      desc: "Automatically inline your CSS styles, guaranteeing that your email designs render perfectly, even in clients that strip external styles.",
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6 text-blue-600" />,
    },
  ],
};

const benefitTwo = {
  title: "Enhanced Email Design & Management",
  desc: "EzeMailer not only converts your HTML but also enhances your email designs, making them responsive and optimized for engagement.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Responsive Email Designs",
      desc: "Ensure your emails look stunning on both desktop and mobile devices with our advanced responsive design tools.",
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Robust Code Validation",
      desc: "EzeMailer scans your HTML for common issues, cleans up unsupported code, and provides suggestions to improve compatibility.",
      icon: <CheckCircleIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "One-Click Export & Integration",
      desc: "Easily export your optimized email HTML with a single click or integrate it directly into your preferred email marketing platforms.",
      icon: <SunIcon className="h-6 w-6 text-blue-600" />,
    },
  ],
};

export { benefitOne, benefitTwo };
