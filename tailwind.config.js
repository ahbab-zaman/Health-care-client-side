/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        loginBanner: "url('./assets/loginBanner.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

