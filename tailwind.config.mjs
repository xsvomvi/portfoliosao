/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#231F20', // custom kleur
      },
      fontFamily: {
        homemadeApple: ["Homemade_Apple", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        fugazOne: ["Fugaz_One", "sans-serif"],
      },
    },
  },
  plugins: [],
}