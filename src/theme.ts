import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "ltr",
  palette: {
    mode: "light",
    primary: { main: "#131313", contrastText: "#ffffff" },
    secondary: { main: "#177549" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#131313", secondary: "#5f6368" },
    divider: "#d0d0d0",
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: '"PT Sans", Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: "0.04em" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 2, textTransform: "none" } },
    },
    MuiAccordion: {
      styleOverrides: { root: { boxShadow: "none", borderBottom: "1px solid #d0d0d0" } },
    },
  },
});
