// Core
import { createTheme } from "@mui/material/styles";

// Colors
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#454545",
    },
    background: {
      default: "#262626",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#F6F6F6",
    },
    common: {
      black: "#1C1C1C",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
