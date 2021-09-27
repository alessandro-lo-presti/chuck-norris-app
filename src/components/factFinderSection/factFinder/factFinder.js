import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { ApiServices } from "../../../services/apiServices";
import { useStyles } from "./factFinder.style";

const FactFinder = ({ searchClickHandler }) => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategories] = useState("");
  const [categoriesList, setCategoriesList] = useState(["all"]);

  const handleChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  useEffect(() => {
    ApiServices.getCategoriesApi()
      .then((data) => setCategoriesList([...data, "all"].sort()))
      .catch(["all"]);
  }, []);

  return (
    <Paper className={classes.container}>
      <Typography
        className={classes.factFinderHeader}
        component="h2"
        variant="h5"
      >
        Fact Finder
      </Typography>

      <Box className={classes.formContainer}>
        <FormControl fullWidth variant="standard">
          <Box display="flex" alignItems="center">
            <Box>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                className={classes.select}
                labelId="category-select-label"
                id="category-select"
                value={selectedCategory}
                label="Category"
                onChange={handleChange}
              >
                {categoriesList.map((category) => (
                  <MenuItem
                    key={category}
                    value={category === "all" ? "" : category}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              onClick={() => searchClickHandler(selectedCategory)}
            >
              Search
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default FactFinder;
