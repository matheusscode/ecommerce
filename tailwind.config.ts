import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        semantic: {
          b900: "#306CEF",
          b800: "#477CF1",
          b700: "#5E8CF3",
          b600: "#759DF4",
          b500: "#8CADF6",
          b400: "#A3BEF8",
          b300: "#BACEFA",
          b200: "#D1DEFB",
          b100: "#E8EFFD",
          g900: "#057234",
          g800: "#2C7F45",
          g700: "#458B56",
          g600: "#5A9868",
          g500: "#6FA479",
          g400: "#83B18B",
          g300: "#98BE9E",
          g200: "#C1D8C4",
          g100: "#D5E5D7",
          r900: "#BE1313",
          r800: "#C83727",
          r700: "#D14F3A",
          r600: "#D9644E",
          r500: "#E17862",
          r400: "#E88C77",
          r300: "#EE9F8D",
          r200: "#F8C5B9",
          r100: "#FBD9D0",
          y900: "#F3B40A",
          y800: "#F6BB33",
          y700: "#F9C14C",
          y600: "#FBC862",
          y500: "#FDCF76",
          y400: "#FFD58A",
          y300: "#FFDC9E",
          y200: "#FFEAC4",
          y100: "#FFF1D8",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "s-1": "4px",
        "s-2": "6px",
        "s-3": "8px",
        "s-4": "12px",
        "s-5": "16px",
        "s-6": "24px",
        "s-7": "32px",
        "s-8": "40px",
        "s-9": "48px",
        "s-10": "56px",
        "s-11": "64px",
        "s-12": "72px",
        "s-13": "80px",
        "s-14": "88px",
        "s-15": "96px",
        "s-16": "104px",
        "s-17": "112px",
        "s-18": "120px",
        "s-19": "128px",
        "s-20": "136px",
        "s-21": "144px",
        "s-22": "152px",
        "s-23": "160px",
        "s-24": "168px",
      },
      fontSize: {
        "h-1": "40px",
        "h-2": "32px",
        "h-3": "24px",
        "h-4": "18px",
        "h-5": "16px",
        "h-6": "14px",
        b: "14px",
        l: "12px",
      },
      lineHeight: {
        "h-1": "150%",
        "h-2": "auto",
        "h-3": "auto",
        "h-4": "auto",
        "h-5": "auto",
        "h-6": "auto",
        b: "175%",
        l: "24px",
      },
      fontWeight: {
        "h-1": "600",
        "h-2": "700",
        "h-3": "700",
        "h-4": "500",
        "h-5": "500",
        "h-6": "500",
        b: "500",
        l: "500",
      },
      boxShadow: {
        "s-medium": "shadow-s-md",
        "s-small": "shadow-s-sm",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;