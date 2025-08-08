import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color Hunt Palette
        n8n: {
          // Primary colors - Deep Purple
          primary: "var(--n8n-primary)",
          primaryDark: "var(--n8n-primary-dark)",
          primaryLight: "var(--n8n-primary-light)",
          primaryLighter: "var(--n8n-primary-lighter)",
          
          // Secondary colors - Warm Orange
          secondary: "var(--n8n-secondary)",
          secondaryDark: "var(--n8n-secondary-dark)",
          secondaryLight: "var(--n8n-secondary-light)",
          secondaryLighter: "var(--n8n-secondary-lighter)",
          
          // Accent colors - Vibrant Orange
          accent: "var(--n8n-accent)",
          accentDark: "var(--n8n-accent-dark)",
          accentLight: "var(--n8n-accent-light)",
          accentLighter: "var(--n8n-accent-lighter)",
          
          // Highlight colors - Bright Yellow
          highlight: "var(--n8n-highlight)",
          highlightDark: "var(--n8n-highlight-dark)",
          highlightLight: "var(--n8n-highlight-light)",
          highlightLighter: "var(--n8n-highlight-lighter)",
          
          // Neutral colors
          neutral: {
            50: "var(--n8n-neutral-50)",
            100: "var(--n8n-neutral-100)",
            200: "var(--n8n-neutral-200)",
            300: "var(--n8n-neutral-300)",
            400: "var(--n8n-neutral-400)",
            500: "var(--n8n-neutral-500)",
            600: "var(--n8n-neutral-600)",
            700: "var(--n8n-neutral-700)",
            800: "var(--n8n-neutral-800)",
            900: "var(--n8n-neutral-900)",
          },
          
          // Status colors
          success: "var(--n8n-success)",
          warning: "var(--n8n-warning)",
          error: "var(--n8n-error)",
          info: "var(--n8n-info)",
          
          // Theme colors
          background: "var(--n8n-background)",
          surface: "var(--n8n-surface)",
          surfaceVariant: "var(--n8n-surface-variant)",
          surfaceElevated: "var(--n8n-surface-elevated)",
          text: "var(--n8n-text)",
          textSecondary: "var(--n8n-text-secondary)",
          textMuted: "var(--n8n-text-muted)",
          border: "var(--n8n-border)",
          card: "var(--n8n-card)",
          shadow: "var(--n8n-shadow)",
          shadowLg: "var(--n8n-shadow-lg)",
          shadowXl: "var(--n8n-shadow-xl)",
          
          // Legacy support
          tertiary: "var(--n8n-secondary)",
        },
      },
      boxShadow: {
        'soft': '0 2px 8px var(--n8n-shadow)',
        'medium': '0 4px 16px var(--n8n-shadow-lg)',
        'strong': '0 8px 32px var(--n8n-shadow-xl)',
        'glow': '0 0 20px rgba(238, 79, 39, 0.3)',
        'glow-primary': '0 0 20px rgba(238, 79, 39, 0.3)',
        'glow-secondary': '0 0 20px rgba(7, 122, 199, 0.3)',
        'glow-highlight': '0 0 20px rgba(40, 167, 69, 0.3)',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
