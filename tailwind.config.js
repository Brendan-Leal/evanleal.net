/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "16px",
      lg: "25px",
      xl: "31.25px",
      "2xl": "39.06px",
      "3xl": "48.83px",
      "4xl": "61.04px",
      "5xl": "76.3px",
    },
    extend: {
      keyframes: {
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-out": "fade-out 250ms ease-in-out forwards",
        "slide-in-right": "slide-in-right 250ms ease-in-out 250ms forwards",
      },
      fontSize: {
        "desktop-base": "18px",
        "desktop-md": "25.45px",
        "desktop-lg": "35.99px",
        "desktop-xl": "50.89px",
        "desktop-2xl": "71.96px",
        "desktop-3xl": "101.75px",
      },
      fontFamily: {
        sultan: ["var(--font-sultan)"],
        unna: ["var(--font-unna)"],
      },
      colors: {
        "cinema-black": "#080D06",
        "title-red": "#740003",
        "off-white": "#F4F4FD",
        "shadow-yellow": "#EF9F20",
        "overlay-black": "#0d0d0d",
        "gray-accent": "#252A25",
      },
      backgroundImage: {
        "homepage-hero-mobile": "url('/img/pod-in-park-mobile.png')",
        "homepage-hero": "url('/img/pod-in-park.png')",
      },
    },
  },
  plugins: [],
};
