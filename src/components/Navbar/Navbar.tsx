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
import Signup from "../Signup/Signup";

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

interface Props {
  isAuthenticated: AuthState["isAuthenticated"];
}

export const Navbar = ({ isAuthenticated }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Friends Reminder
          </Typography>
          {!isAuthenticated ? (
            <>
              <Signup />
              <Signin />
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
