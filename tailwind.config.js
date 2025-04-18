/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F8F5F0',
        secondary: '#D6CFC2',
        accent: '#A67B5B',
        text: '#2B2B2B',
      },
      fontFamily: {
        tittle: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },
    },
  },
  plugins: [],
}
