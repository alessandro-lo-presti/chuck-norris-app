import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { favouriteFactAddAction } from "../../redux/favouriteFactsSlice/favouriteFactsSlice";
import { ApiServices } from "../../services/apiServices";
import FactFinder from "./factFinder/factFinder";
import { useStyles } from "../../material/section.style";

const mapStateToProps = (state) => ({});

const mapDispatchToState = (dispatch) => ({
  favouriteFactAdd: (fact) => dispatch(favouriteFactAddAction(fact)),
});

const FactFinderSection = ({ favouriteFactAdd }) => {
  const classes = useStyles();
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
    favouriteFactAdd(fact);
  };

  const deleteClickHandler = (fact) => {
    const newFoundFactList = [...foundFactList].filter((f) => f.id !== fact.id);
    setFoundFactList(newFoundFactList);
  };

  const clearClickHandler = () => {
    setFoundFactList([]);
  };

  return (
    <Box className={classes.sectionContainer}>
      <FactFinder searchClickHandler={searchClickHandler} />
      <Typography className={classes.title} component="h2" variant="h4">
        Founded Chuck's facts
        <i
          className={`${classes.trashIcon} fas fa-trash`}
          onClick={clearClickHandler}
        ></i>
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

export default connect(mapStateToProps, mapDispatchToState)(FactFinderSection);
