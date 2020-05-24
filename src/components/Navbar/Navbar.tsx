import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { AppState, AuthState } from "../../utils/types";
import Signin from "../Signin/Signin";
import Signout from "../Signout/Signout";
import Signup from "../Signup/Signup";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {
  isAuthed: AuthState["isAuthed"];
}

export const Navbar = ({ isAuthed }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Friends Reminder
          </Typography>
          {isAuthed ? (
            <Signout />
          ) : (
            <>
              <Signup />
              <Signin />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthed: state.auth.isAuthed,
});

export default connect(mapStateToProps)(Navbar);
