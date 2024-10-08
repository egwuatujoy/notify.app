/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: " hsl(219, 85%, 26%)",
        White: "hsl(0, 0%, 100%)",
        VeryLightGrayishBlue: "hsl(210, 60%, 98%)",
        LightGrayishBlue1: "hsl(211, 68%, 94%)",
        LightGrayishBlue2: "hsl(205, 33%, 90%)",
        GrayishBlue: "hsl(219, 14%, 63%)",
        DarkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDark: "hsl(224, 21%, 14%)",
      },
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
