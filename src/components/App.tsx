import { makeStyles, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { auth } from "../config/firebase";
import { setIsAuthenticated } from "../state/authSlice";
import { AppState, AuthState, UserId } from "../utils/types";
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
  isAuthed?: AuthState["isAuthed"];
  setIsAuthenticated?: (userId: UserId) => void;
}

export const App = ({ isAuthed, setIsAuthenticated }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const uid = localStorage.getItem("uid");

    if (authToken && uid) {
      setIsAuthenticated!(uid);
    }
  }, [setIsAuthenticated]);

  useEffect(() => {
    auth.currentUser
      ?.getIdToken()
      .then((authToken: string) => {
        const uid = auth.currentUser?.uid;
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("uid", uid || "");
      })
      .catch((error: firebase.auth.AuthError) => {
        console.log(error);
      });
  });

  return (
    <div className={classes.root}>
      <Navbar />
      {isAuthed ? <Content /> : <Landing />}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthed: state.auth.isAuthed,
});

const mapDispatchToProps = {
  setIsAuthenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
