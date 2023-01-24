import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "dark",
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
});

export default theme;
