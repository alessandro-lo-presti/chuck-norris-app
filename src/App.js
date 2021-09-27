import { CssBaseline, ThemeProvider } from "@material-ui/core";
import FactFinderSection from "./components/factFinderSection/factFinderSection";
import theme from "./material/globalTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FactFinderSection />
    </ThemeProvider>
  );
};

export default App;
