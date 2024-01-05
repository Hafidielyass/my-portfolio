/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: {
        50: "#feffff",
        100: "#e0fefe",
        200: "#bafdf9",
        300: "#7dfcf2",
        400: "#38f8e6",
        500: "#0ee9d5",
        600: "#02c7bb",
        700: "#03a19a",
        800: "#07857f",
        900: "#0c6e6b",
        950: "#084949",
      },
      primary: {
        50: "#f0f8fe",
        100: "#ddeffc",
        200: "#c3e4fa",
        300: "#9ad3f6",
        400: "#69bbf1",
        500: "#469feb",
        600: "#3183df",
        700: "#286dcd",
        800: "#2759a6",
        900: "#254c83",
        950: "#162742",
      },

      second: {
        50: "#f1f7fe",
        100: "#e3edfb",
        200: "#c1dbf6",
        300: "#8abfef",
        400: "#4b9de5",
        500: "#2177c4",
        600: "#1564b4",
        700: "#135091",
        800: "#134479",
        900: "#163a64",
        950: "#0e2543",
      },
      mercury: {
        50: "#f7f7f7",
        100: "#ebebee",
        200: "#e4e4e7",
        300: "#c5c5cb",
        400: "#a8a9b2",
        500: "#94939e",
        600: "#83828e",
        700: "#777580",
        800: "#64626b",
        900: "#535157",
        950: "#353437",
      },
    },

    fontFamily: {
      AlbertSans: ["Albert Sans", "sans-serif"],
      Gaegu: ["Gaegu", "cursive"],
    },
  },
  plugins: [],
};
