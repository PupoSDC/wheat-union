import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "#7986cb",
      main: "rgba(107, 127, 232, 1)",
      dark: "rgba(50, 66, 169, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(245, 193, 113, 1)",
      main: "rgba(211, 126, 50, 1)",
      dark: "rgba(211, 126, 50, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        },
        "*::-webkit-scrollbar": {
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      },
    },
  },
});
