import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./material/globalTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
