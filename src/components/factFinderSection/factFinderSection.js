import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { favouriteFactAddAction } from "../../redux/favouriteFactsSlice/favouriteFactsSlice";
import { ApiServices } from "../../services/apiServices";
import FactFinder from "./factFinder/factFinder";
import { useStyles } from "./factFinderSection.style";

const FactFinderSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [foundFactList, setFoundFactList] = useState([]);

  const searchClickHandler = (category) =>
    ApiServices.getFactByCategoryApi(category).then((data) => {
      const newFoundFactList = [...foundFactList];
      newFoundFactList.splice(0, 0, { id: data.id, value: data.value });
      setFoundFactList(newFoundFactList);
    });

  const addClickHandler = (fact) => {
    const newFoundFactList = [...foundFactList].filter((f) => f.id !== fact.id);
    setFoundFactList(newFoundFactList);
    dispatch(favouriteFactAddAction(fact));
  };

  const deleteClickHandler = (fact) => {
    const newFoundFactList = [...foundFactList].filter((f) => f.id !== fact.id);
    setFoundFactList(newFoundFactList);
  };

  return (
    <Box className={classes.sectionContainer}>
      <FactFinder searchClickHandler={searchClickHandler} />
      <Typography component="h2" variant="h4">
        Founded Chuck's facts
      </Typography>
      {foundFactList &&
        foundFactList.map((fact) => (
          <Card key={fact.id} className={classes.card}>
            <CardContent>{fact.value}</CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" onClick={() => addClickHandler(fact)}>
                Add
              </Button>
              <Button size="small" onClick={() => deleteClickHandler(fact)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default FactFinderSection;
