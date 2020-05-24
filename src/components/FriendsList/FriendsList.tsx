import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteFriend, loadFriends } from "../../state/friendsSlice";
import { AppState, Friend, UserId } from "../../utils/types";
import DatePicker from "../DatePicker/DatePicker";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,

    "& > li": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "4px",
      margin: "20px",
      boxShadow:
        "0 1px 1px 0 rgba(0,0,0,0.2),0 2px 1px -1px rgba(0,0,0,0.2),0 1px 3px 0 rgba(0,0,0,0.2)",
    },
  },
}));

interface Props {
  deleteFriend?: (docId: string) => void;
  friends?: Friend[];
  loadFriends?: (userId: UserId) => void;
  userId: UserId;
}

export const FriendsList = ({
  deleteFriend,
  friends,
  loadFriends,
  userId,
}: Props) => {
  const classes = useStyles();

  useEffect(() => {
    loadFriends!(userId);
  }, [loadFriends, userId]);

  return friends ? (
    <List className={classes.root}>
      {friends.map(({ docId, friendName, lastTimeContacted }) => (
        <ListItem key={docId} role={undefined}>
          <ListItemText primary={friendName} />
          <DatePicker docId={docId} lastTimeContacted={lastTimeContacted} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete-friend"
              onClick={() => deleteFriend!(docId)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  ) : (
    <p>Loading</p>
  );
};

const mapStateToProps = (state: AppState) => ({
  friends: state.friends.items,
  userId: state.auth.userId,
});

const mapDispatchToProps = {
  deleteFriend,
  loadFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
