import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  favouriteFactClearAction,
  favouriteFactDeleteAction,
  favouritesFactListSelector,
} from "../../redux/favouriteFactsSlice/favouriteFactsSlice";
import { useStyles } from "./favouriteFatsSection.style";

const mapStateToProps = (state) => ({
  favouriteFactsList: favouritesFactListSelector(state),
});

const mapDispatchToState = (dispatch) => ({
  favouriteFactDelete: (fact) => dispatch(favouriteFactDeleteAction(fact)),
  favouriteFactClear: () => dispatch(favouriteFactClearAction()),
});

const FavouriteFactsSection = (props) => {
  const classes = useStyles();
  const { favouriteFactsList, favouriteFactDelete, favouriteFactClear } = props;

  return (
    <Box className={classes.sectionContainer}>
      <Typography component="h2" variant="h4">
        Favourite Chuck's facts
      </Typography>
      {favouriteFactsList &&
        favouriteFactsList.map((fact) => (
          <Card key={fact.id} className={classes.card}>
            <CardContent>{fact.value}</CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" onClick={() => favouriteFactDelete(fact)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(FavouriteFactsSection);
