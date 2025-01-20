/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBanner: "url('./assets/loginBanner.jpg')",
        dealBg: "url('./assets/deal-bg.jpg')",
      },
      colors: {
        customBlue: "#4E97FD",
      },
    },
  },
  plugins: [require("daisyui")],
};
