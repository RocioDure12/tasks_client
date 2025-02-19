import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    primary: [
      "#f5f5fd", "#ececfb", "#ddddf7", "#c3c1f1", "#a39de8",
      "#8476dc", "#7058cf", "#5f45bc", "#4f3a9d", "#433181", "#291e57"
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