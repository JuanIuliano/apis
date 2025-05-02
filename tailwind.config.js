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
        hero: "url('/src/assets/hero3.jpg')",
      },
      bebidasAlcohol: {
        tinto1: "url('/src/assets/bebidas-con-alcohol/vino-tinto-malbec.png')",
        tinto2: "url('/src/assets/bebidas-con-alcohol/vino-tinto-malbec-luigi.png')",
        tinto3: "url('/src/assets/bebidas-con-alcohol/tinto-malbec.png')",
        red: "url('/src/assets/bebidas-con-alcohol/red-blend.png')",
        sauvignon: "url('/src/assets/bebidas-con-alcohol/cabernet-sauvignon.png')",
        chardonnay: "url('/src/assets/bebidas-con-alcohol/vino-blanco-chardonnay.png')",
        corona: "url('/src/assets/bebidas-con-alcohol/cerveza-corona.png')",
      },
      bebidasSin: {
        agua: "url('/src/assets/bebidas-sin-alcohol/agua-sin-gas.png')",
        aguaGas: "url('/src/assets/bebidas-sin-alcohol/agua-con-gas.png')",
        coca: "url('/src/assets/bebidas-sin-alcohol/coca.png')",
        cocaZero: "url('/src/assets/bebidas-sin-alcohol/coca-zero.png')",
        manzana: "url('/src/assets/bebidas-sin-alcohol/manzana.png')",
        pomelo: "url('/src/assets/bebidas-sin-alcohol/pomelo.png')",
      },
      carnesBlancas: {
        agua: "url('/src/assets/carnes-blancas/milanesa-pollo-napolitana.png')",
        aguaGas: "url('/src/assets/carnes-blancas/agua-con-gas.png')",
        coca: "url('/src/assets/carnes-blancas/coca.png')",
        cocaZero: "url('/src/assets/carnes-blancas/coca-zero.png')",
        manzana: "url('/src/assets/carnes-blancas/manzana.png')",
        pomelo: "url('/src/assets/carnes-blancas/pomelo.png')",
      },
    },
  },
  plugins: [],
}
