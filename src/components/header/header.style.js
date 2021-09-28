import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  header: {
    height: 60,
    padding: "0 24px",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    borderRadius: "50%",
  },
  title: {
    marginLeft: 10,
    fontSize: 25,
    textTransform: "uppercase",
  },
});
