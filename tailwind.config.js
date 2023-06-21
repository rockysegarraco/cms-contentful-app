/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        primary: {
          950: "#4363f9",
          900: "#5673FA",
          800: "#6982FA",
          700: "#7B92FB",
          600: "#8EA1FB",
          500: "#A1B1FC",
          400: "#B4C1FD",
          300: "#C7D0FD",
          200: "#D9E0FE",
          100: "#ECEFFE",
        },
        secondary: {
          950: "#F26B21",
          100: "#FEF0E9",
        },
        info: {
          950: "#252D6C",
          900: "#3B427B",
          800: "#515789",
          700: "#666C98",
          600: "#7C81A7",
          500: "#9296B6",
          400: "#A8ABC4",
          300: "#BEC0D3",
          200: "#D3D5E2",
          100: "#E9EAF0",
        },
        dark: {
          950: "#4D5154",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "4rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--f ont-roboto-mono)"],
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
