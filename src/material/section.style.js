import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  sectionContainer: {
    padding: "30px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  trashIcon: {
    marginLeft: 30,
    position: "relative",
    top: 2,
    fontSize: 25,
  },
  emptyListMessage: {
    fontSize: 25,
  },
  spinnerBox: {
    marginTop: 15,
    marginBottom: 30,
  },
  card: {
    margin: "5px 0",
    maxWidth: 500,
    width: "100%",
  },
  cardActions: {
    justifyContent: "flex-end",
    paddingRight: 20,
  },
});
