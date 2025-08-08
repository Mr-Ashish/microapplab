# n8n Monitor - Marketing Website

A modern, responsive marketing website for the n8n Monitor mobile app, built with Next.js 15, TypeScript, and Tailwind CSS. The design is inspired by n8n.io with a sophisticated color scheme and modern UI components.

## 🎨 Design Features

- **n8n.io Inspired Color Scheme**: Modern orange primary (#ff6b35) with purple secondary (#6366f1)
- **Dark Theme**: Sophisticated dark mode with proper contrast and accessibility
- **Glass-morphism Effects**: Modern backdrop blur and transparency effects
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📁 Project Structure

```
n8n-monitor-website/
├── src/
│   ├── app/
│   │   ├── (default)/
│   │   │   └── page.tsx          # Home page
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy policy page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page
│   ├── components/
│   │   ├── sections/             # Main page sections
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── Features.tsx      # Features section
│   │   │   ├── HowItWorks.tsx    # How it works section
│   │   │   ├── Testimonials.tsx  # Testimonials section
│   │   │   ├── Pricing.tsx       # Pricing section
│   │   │   └── CTA.tsx           # Call-to-action section
│   │   ├── ui/                   # Reusable UI components
│   │   ├── layout/               # Layout components
│   │   └── PrivacyPolicyContent.tsx # Privacy policy content
│   └── types.ts                  # TypeScript types
├── public/
│   ├── appIcon.png               # App icon
│   └── n8n-monitor-splsh.png    # Splash screen
├── tailwind.config.ts            # Tailwind configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎯 Color Scheme

### Primary Colors

- **Primary**: `#ff6b35` (Orange)
- **Primary Dark**: `#e55a2b`
- **Primary Light**: `#ff8a5c`

### Secondary Colors

- **Secondary**: `#6366f1` (Purple)
- **Secondary Dark**: `#4f46e5`
- **Secondary Light**: `#818cf8`

### Accent Colors

- **Accent**: `#10b981` (Green)
- **Accent Dark**: `#059669`
- **Accent Light**: `#34d399`

### Status Colors

- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`
- **Info**: `#3b82f6`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd n8n-monitor-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors

The color scheme is defined in `src/app/globals.css` using CSS custom properties. You can easily modify the colors by updating the `:root` variables.

### Components

All components are modular and can be easily customized. Each component is self-contained with its own styles and animations.

### Animations

Animations are powered by Framer Motion. You can modify animation parameters in each component's `motion` props.

## 📱 Pages

### Home Page (`/`)

- Hero section with app mockup
- Features showcase
- How it works guide
- User testimonials
- Pricing information
- Call-to-action

### Privacy Policy (`/privacy`)

- Comprehensive privacy policy
- Security features
- Contact information
- Back navigation

## 🔧 Configuration

### Tailwind CSS

The Tailwind configuration is in `tailwind.config.ts` and includes:

- Custom color palette
- Animation keyframes
- Custom utilities
- Responsive breakpoints

### Next.js

- App Router configuration
- Metadata for SEO
- Image optimization
- TypeScript support

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@n8n-monitor.com or create an issue in the repository.

---

Built with ❤️ for the n8n community
