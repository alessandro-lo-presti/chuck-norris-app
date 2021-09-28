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
import { useStyles } from "../../material/section.style";

const mapStateToProps = (state) => ({
  favouriteFactsList: favouritesFactListSelector(state),
});

const mapDispatchToState = (dispatch) => ({
  favouriteFactDelete: (fact) => dispatch(favouriteFactDeleteAction(fact)),
  favouriteFactClear: () => dispatch(favouriteFactClearAction()),
});

const orderByValue = (a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
};

const FavouriteFactsSection = (props) => {
  const classes = useStyles();
  const { favouriteFactsList, favouriteFactDelete, favouriteFactClear } = props;

  const sortedFavouriteFactsList = [...favouriteFactsList];
  sortedFavouriteFactsList.sort(orderByValue);

  return (
    <Box
      className={classes.sectionContainer}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography className={classes.title} component="h2" variant="h4">
        Favourite Chuck's facts
        <i
          className={`${classes.trashIcon} fas fa-trash`}
          onClick={favouriteFactClear}
        ></i>
      </Typography>
      {sortedFavouriteFactsList &&
        sortedFavouriteFactsList.map((fact) => (
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
