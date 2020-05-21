import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AddFriend from "./AddFriend/AddFriend";
import FriendsList from "./FriendsList/FriendsList";
import Signup from "./Signup/Signup";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "hsl(0, 0%, 95%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {}

export const App = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Signup />
      <AddFriend />
      <FriendsList />
    </div>
  );
};

export default App;
