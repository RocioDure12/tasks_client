/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"], // Rutas de archivos donde Tailwind buscará clases usadas
  theme: {
    extend: {
      colors: {
        "primary-contrast":{
          50: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#FFFFFF",
          600: "#FFFFFF",
          700: "#FFFFFF",
          800: "#FFFFFF",
          900: "#FFFFFF",
          950: "#FFFFFF",
        },
        primary: {
          50: "#f5f5fd",
          100: "#eeecfb",
          200: "#dedcf8",
          300: "#c5bff3",
          400: "#a89bea",
          500: "#8a72e0",
          600: "#7956d4",
          700: "#6741c0",
          800: "#5636a1",
          900: "#482e84",
          950: "#2c1c59",
        },
      },
    },
  },
  plugins: [], // Aquí puedes agregar plugins de Tailwind si los necesitas, pero no se configuran como objetos
};
