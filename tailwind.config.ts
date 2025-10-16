import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Logo Colors
        primary: {
          blue: '#0047AB',      // Royal Blue from logo
          yellow: '#FFD700',    // Gold from logo
        },
        secondary: {
          blue: '#0056D2',      // Lighter blue
          dark: '#003580',      // Darker blue
          light: '#E6F0FF',     // Very light blue
        },
        accent: {
          orange: '#FF6B35',    // For volleyball
          green: '#10B981',     // For archery
          red: '#EF4444',       // For alerts
        },
        // Dark mode colors
        dark: {
          bg: '#0F172A',        // Dark background
          card: '#1E293B',      // Dark card background
          border: '#334155',    // Dark border
          text: '#E2E8F0',      // Dark text
          muted: '#94A3B8',     // Muted dark text
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'blue': '0 10px 40px -10px rgba(0, 71, 171, 0.3)',
        'yellow': '0 10px 40px -10px rgba(255, 215, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 71, 171, 0.5)',
        'glow-yellow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'dark': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

