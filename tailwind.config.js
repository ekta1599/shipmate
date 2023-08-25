/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Figtree: ['"Figtree", sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
    },
    extend: {
      colors: {
        dark: "#000",
        black: "#161c2d",
        heading: "#262626",
        body: "#535353",
        primary: "#6F57E9",
      },

      boxShadow: {
        main: "0px 0px 0px 0px rgba(21, 31, 72, 0.10), 19px 34px 84px 0px rgba(21, 31, 72, 0.10), 74px 134px 153px 0px rgba(21, 31, 72, 0.09), 167px 302px 207px 0px rgba(21, 31, 72, 0.05), 296px 536px 245px 0px rgba(21, 31, 72, 0.01), 463px 838px 268px 0px rgba(21, 31, 72, 0.00);",
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      maxWidth: ({ theme, breakpoints }) => ({
        1200: "71.25rem",
        992: "60rem",
        768: "45rem",
      }),

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [],
};
