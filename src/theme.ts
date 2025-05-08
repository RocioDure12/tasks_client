import { createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    primary: [
     "#f4f2ff","#ece7ff","#dad2ff","#c0aeff","#a180ff","#854dff","#843dff", "#6816eb","#5812c5","#4911a1","#2b076e"
    ],
    primaryContrast: [
      "#291e57", "#291e57", "#291e57", "#291e57", "#ffffff",
      "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
    ],
    neutralScale: [
      "#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888",
      "#6d6d6d", "#5d5d5d", "#545454", "#454545", "#3d3d3d", "#262626"
    ],
  },
  primaryColor: "primary",
});

export default theme; // 🔹 Exportación correcta
