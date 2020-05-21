import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AddFriend from "./AddFriend/AddFriend";
import FriendsList from "./FriendsList/FriendsList";
import Navbar from "./Navbar/Navbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
  },
}));

interface Props {}

export const App = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.content}>
        <AddFriend />
        <FriendsList />
      </div>
    </div>
  );
};

export default App;
