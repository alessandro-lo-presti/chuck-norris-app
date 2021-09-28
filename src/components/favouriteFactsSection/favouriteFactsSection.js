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

const factsSortingByValue = (a, b) => a.value.localeCompare(b.value);

const FavouriteFactsSection = (props) => {
  const classes = useStyles();
  const { favouriteFactsList, favouriteFactDelete, favouriteFactClear } = props;

  const sortedFavouriteFactsList = [...favouriteFactsList];
  sortedFavouriteFactsList.sort(factsSortingByValue);

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
      {sortedFavouriteFactsList.length ? (
        sortedFavouriteFactsList.map((fact) => (
          <Card key={fact.id} className={classes.card}>
            <CardContent>{fact.value}</CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" onClick={() => favouriteFactDelete(fact)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography className={classes.emptyListMessage} component="p">
          This list is empty
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  favouriteFactsList: favouritesFactListSelector(state),
});

const mapDispatchToState = (dispatch) => ({
  favouriteFactDelete: (fact) => dispatch(favouriteFactDeleteAction(fact)),
  favouriteFactClear: () => dispatch(favouriteFactClearAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(FavouriteFactsSection);
