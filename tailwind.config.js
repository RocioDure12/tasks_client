/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"], // Rutas de archivos donde Tailwind buscará clases usadas
  theme: {
    extend: {
      colors: {
        //colores que contrastan con la paleta principal
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
        //paleta principal
        primary: {
          50: "#f4f2ff",
          100: "#ece7ff",
          200: "#dad2ff",
          300: "#c0aeff",
          400: "#a180ff",
          500: "#854dff",
          600: "#843dff",
          700: "#6816eb",
          800: "#5812c5",
          900: "#4911a1",
          950: "#2b076e",
        },
        //color mas claro a mas oscuro
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
