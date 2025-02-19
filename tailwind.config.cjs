/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"], // Rutas de archivos donde Tailwind buscará clases usadas
  theme: {
    extend: {
      colors: {
        "primary-contrast": {
          50: "#291e57",
          100: "#291e57",
          200: "#291e57",
          300: "#291e57",
          400: "#ffffff",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
          950: "#ffffff",
        },
        primary: {
          50: "#f5f5fd",
          100: "#ececfb",
          200: "#ddddf7",
          300: "#c3c1f1",
          400: "#a39de8",
          500: "#8476dc",
          600: "#7058cf",
          700: "#5f45bc",
          800: "#4f3a9d",
          900: "#433181",
          950: "#291e57",
        },
        neutralScale: {
          50: "#f6f6f6",
          100: "#e7e7e7", 
          200: "#d1d1d1", 
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#545454",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626", 
        },
      },
    },
  },
  plugins: [],// Aquí puedes agregar plugins de Tailwind si los necesitas, pero no se configuran como objetos
  darkMode: 'class', // Activa el modo oscuro con la clase `dark`
};
