
import { defineTheme } from "@hyper-elements/react";

const cafeTheme = defineTheme({
  colors: {
    background: "#FFFDF8",
    foreground: "#2D2118",
    primary: "#8B4513",
    primaryForeground: "#FFFFFF",
    secondary: "#F5E6D3",
    muted: "#78685C",
    border: "#EADBC8",
    surface: "#FFFFFF",
  },

  fonts: {
    heading: "Georgia, serif",
    body: "Arial, sans-serif",
  },

  fontSizes: {
    body: 16,
  },

  styles: {
    menuItem: {
      backgroundColor: "{colors.surface}",
      border: {
        width: 1,
        style: "solid",
        color: "{colors.border}",
      },
      borderRadius: 10,
      padding: 18,
      gap: 12,
    },
  },
});

export default cafeTheme;
