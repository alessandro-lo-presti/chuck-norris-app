import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto 30px",
    width: 300,
    padding: "18px 24px",
    [theme.breakpoints.down("md")]: {
      marginBottom: 60,
    },
  },
  factFinderHeader: {
    marginBottom: 10,
  },
  formContainer: {
    width: 300,
  },
  select: {
    width: 120,
    textAlign: "center",
  },
  button: {
    marginLeft: 55,
    position: "relative",
    top: 10,
  },
}));
