import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Signup } from "../Signup/Signup";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {}

const Navbar = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Friends Reminder
          </Typography>
          <Signup />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
