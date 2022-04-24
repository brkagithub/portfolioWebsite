import { createTheme, ThemeOptions } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    body1: {
      color: "blue",
    },
    button: {
      textTransform: "none",
      fontSize: 14,
    },
    fontSize: 12,
    fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#88f2e4",
    },
    secondary: {
      main: "#2460bf",
    },
    error: {
      main: "#2460bf",
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    body1: {
      color: "black",
    },
    button: {
      textTransform: "none",
      fontSize: 14,
    },
    fontSize: 12,
    fontFamily: ['"Segoe UI"', "Roboto", "Arial", "sans-serif"].join(","),
  },

  palette: {
    mode: "dark",
    background: {
      default: "#c8e2e6",
    },
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#c8e2e6",
    },
    error: {
      main: "#171717",
    },
  },
});
