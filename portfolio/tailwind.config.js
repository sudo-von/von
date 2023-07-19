/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./layouts/**/*.tsx",
    "./features/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    colors: {
      "primary": '#262626',
      "secondary": '#727272',
      "secondary-variant": "#9B9B9B",
      "white": "#ffffff",
      "black": "#000000",
      "slate": {
        50: "#f2f2f2",  // button-text-color
        100: "#e6e6e6", // input border
        150: "#d9d9d9",
        200: "#cccccc", // input-hover-color
        250: "#bfbfbf",
        300: "#b3b3b3", // input-placeholder
        350: "#a6a6a6",
        400: "#999999",
        450: "#8c8c8c",
        500: "#808080",
        550: "#737373",
        600: "#666666",
        650: "#595959",
        700: "#4d4d4d",
        750: "#404040",
        800: "#333333",
        850: "#262626", // input text color, button-background 
        900: "#1a1a1a",
        950: "#0d0d0d", // button-background-hover
      },
      "black": {
        50: "#595959",
        100: "#4d4d4d",
        150: "#404040",
        200: "#333333",
        250: "#262626",
        300: "#1a1a1a",
        350: "#0d0d0d",
        400: "#000000"
      },
      "gray": {
        50: "#e0e0e0",
        100: "#d9d9d9",
        150: "#cccccc",
        200: "#bfbfbf",
        250: "#b3b3b3",
        300: "#a6a6a6",
        350: "#999999",
        400: "#8c8c8c",
      }
    },
    extend: {},
  },
  plugins: [],
}

