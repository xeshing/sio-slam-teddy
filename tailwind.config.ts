
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors for our cyber-japan theme
        neon: {
          pink: "#ff6ec7",
          blue: "#00f6ff",
          purple: "#bd00ff",
          yellow: "#ffde00",
        },
        pastel: {
          pink: "#ffb7c5",
          blue: "#b5deff",
          purple: "#d8b5ff",
          yellow: "#ffffd1",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(255, 110, 199, 0.5), 0 0 20px rgba(255, 110, 199, 0.2)",
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(255, 110, 199, 0.8), 0 0 30px rgba(255, 110, 199, 0.4)",
          },
        },
        "neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 4px rgba(255, 110, 199, 0.6), 0 0 11px rgba(255, 110, 199, 0.4), 0 0 19px rgba(255, 110, 199, 0.2)"
          },
          "50%": {
            textShadow: "0 0 8px rgba(255, 110, 199, 0.8), 0 0 18px rgba(255, 110, 199, 0.6), 0 0 30px rgba(255, 110, 199, 0.4)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite"
      },
      fontFamily: {
        'japanese': ['Zen Kaku Gothic New', 'sans-serif'],
        'cyber': ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zM0 25h1v1H0zM0 50h1v1H0zM0 75h1v1H0zM0 99h1v1H0zM25 0h1v1h-1zM25 25h1v1h-1zM25 50h1v1h-1zM25 75h1v1h-1zM25 99h1v1h-1zM50 0h1v1h-1zM50 25h1v1h-1zM50 50h1v1h-1zM50 75h1v1h-1zM50 99h1v1h-1zM75 0h1v1h-1zM75 25h1v1h-1zM75 50h1v1h-1zM75 75h1v1h-1zM75 99h1v1h-1zM99 0h1v1h-1zM99 25h1v1h-1zM99 50h1v1h-1zM99 75h1v1h-1zM99 99h1v1h-1z' fill='rgba(0,246,255,0.1)'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
