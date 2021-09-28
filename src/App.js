import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import FactFinderSection from "./components/factFinderSection/factFinderSection";
import FavouriteFactsSection from "./components/favouriteFactsSection/favouriteFactsSection";
import Header from "./components/header/header";
import theme from "./material/globalTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <FactFinderSection />
        </Grid>
        <Grid item xs={12} md={6}>
          <FavouriteFactsSection />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
