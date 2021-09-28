import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  sectionContainer: {
    padding: "30px",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  trashIcon: {
    marginLeft: 30,
    position: "relative",
    top: 2,
    fontSize: 25,
  },
  emptyListMessage: {
    marginTop: 15,
    fontSize: 25,
  },
  card: {
    margin: "15px 0",
    width: 500,
  },
  cardActions: {
    justifyContent: "flex-end",
    paddingRight: 20,
  },
});
