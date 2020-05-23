import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { AppState, AuthState } from "../utils/types";
import Content from "./Content/Content";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "hsl(0, 0%, 95%)",
    display: "flex",
    flexDirection: "column",
  },
}));

interface Props {
  isAuthenticated?: AuthState["isAuthenticated"];
}

export const App = ({ isAuthenticated }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      {isAuthenticated ? <Content /> : <Landing />}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
