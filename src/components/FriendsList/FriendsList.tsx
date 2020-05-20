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
import { convertTimestampToHumanTime } from "../../utils/date";
import { AppState, Friend } from "../../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,

    "& > li": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "4px",
      margin: "20px",
      boxShadow: "0 1px 1px 0 rgba(0,0,0,0.2),0 2px 1px -1px rgba(0,0,0,0.2),0 1px 3px 0 rgba(0,0,0,0.2)"
    },
  },
}));

interface Props {
  deleteFriend?: (friendId: string) => void;
  friends?: Friend[];
  loadFriends?: () => void;
}

export const FriendsList = ({ deleteFriend, friends, loadFriends }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    loadFriends!();
  }, [loadFriends]);

  return friends ? (
    <List className={classes.root}>
      {friends.map(({ docId, friendId, friendName, lastTimeContacted }) => (
        <ListItem key={friendId} role={undefined}>
          <ListItemText
            primary={friendName}
            secondary={convertTimestampToHumanTime(lastTimeContacted)}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete-friend" onClick={() => deleteFriend!(docId)}>
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
});

const mapDispatchToProps = {
  deleteFriend,
  loadFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
