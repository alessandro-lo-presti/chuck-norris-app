import { createTheme } from "@material-ui/core";

const globalStyleObject = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: 0,
        },
      },
    },
  },
  palette: {
    type: "dark",
  },
});

export default globalStyleObject;
