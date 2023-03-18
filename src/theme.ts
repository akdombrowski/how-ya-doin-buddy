import { Roboto } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#002147",
    },
    secondary: {
      main: "#ffff8d",
    },
    background: {
      default: "#4281a4",
      paper: "#004848",
    },
    error: {
      main: "#721817",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body1: { fontSize: "1.5rem" },
    body2: { fontSize: "1.25rem" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
