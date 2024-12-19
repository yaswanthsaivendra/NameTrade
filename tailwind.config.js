/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#42DBF0',
        secondary: '#EE7933',
        tertiary: '#FF3186',
        quaternary: '#F4F4F4',
        background: '#0C0D0E',
      },
    },
  },
  plugins: [],
}