import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AddFriend from "../AddFriend/AddFriend";
import FriendsList from "../FriendsList/FriendsList";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
  },
}));

interface Props {}

const Content = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.content} data-testid="content-page">
      <AddFriend />
      <FriendsList />
    </div>
  );
};

export default Content;
