import { createTheme } from "@mui/material/styles";
import { cyan, grey, orange } from "@mui/material/colors";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4FDBE4",
    },
    secondary: {
      main: orange[300],
    },
    background: {
      paper: "#253246",
      default: "#0a1929",
    },
    text: {
      primary: grey[200],
      secondary: grey[400],
      disabled: grey[500],
      icon: grey[400],
    },
    divider: "rgb(245,245,245,0.30)",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: orange[400],
    },
    secondary: {
      main: cyan[400],
    },
    background: {
      paper: "#fff",
      default: grey[100],
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[600],
      icon: grey[800],
    },
    divider: "rgba(30,30,30,0.30)",
  },
});
/////////////////
/////////////////
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: cyan[300],
          },
          secondary: {
            main: orange[300],
          },
          background: {
            paper: grey[100],
            default: grey[100],
          },
          divider: grey[400],
        }
      : {
          // palette values for dark mode
          primary: {
            main: cyan[300],
          },
          secondary: {
            main: orange[300],
          },
          background: {
            paper: grey[100],
            default: grey[100],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
            disabled: grey[600],
            icon: grey[800],
          },
          divider: "rgb(255,255,255,0.12)",
        }),
  },
});
