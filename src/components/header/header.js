import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./header.style";
import chuckImgSrc from "../../assets/img/chuck.png";

const Header = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.header}>
      <img className={classes.logo} src={chuckImgSrc} alt="Chuck logo" />
      <Typography className={classes.title}>Chuck's Facts</Typography>
    </Paper>
  );
};

export default Header;
