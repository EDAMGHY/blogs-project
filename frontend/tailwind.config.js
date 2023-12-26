/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "700px",
        md: "768px",
        lg: "800px",
        xl: "920px",
        "2xl": "1050px",
        "3xl": "1200px",
        "4xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        gloria: ["Gloria Hallelujah", "cursive"],
      },
      screens: {
        xxs: "450px",
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "890px",
        xl: "1024px",
        "2xl": "1200px",
        "3xl": "1400px",
        "4xl": "1600px",

        // => @media (max-width: 450px) { ... }
        xxsDown: { max: "450px" },
        // => @media (max-width: 576px) { ... }
        xsDown: { max: "576px" },
        // => @media (max-width: 640px) { ... }
        smDown: { max: "640px" },
        // => @media (max-width: 768px) { ... }
        mdDown: { max: "768px" },
        // => @media (max-width: 890px) { ... }
        lgDown: { max: "890px" },
        // => @media (max-width: 1024px) { ... }
        xlDown: { max: "1024px" },
        // => @media (max-width: 1200px) { ... }
        "2xlDown": { max: "1200px" },
        // => @media (max-width: 1400px) { ... }
        "3xlDown": { max: "1400px" },
        // => @media (max-width: 1600px) { ... }
        "4xlDown": { max: "1600px" },
      },
    },
  },
  plugins: [],
};
