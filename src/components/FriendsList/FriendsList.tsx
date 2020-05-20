import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Delete } from '@material-ui/icons';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadFriends } from "../../state/friendsSlice";
import { convertTimestampToHumanTime } from "../../utils/date";
import { AppState, Friend } from "../../utils/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface Props {
  loadFriends?: () => void;
  friends?: Friend[];
}

export const FriendsList = ({ friends, loadFriends }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    loadFriends!();
  }, [loadFriends]);

  return friends ? (
    <List className={classes.root}>
      {friends.map(({ friendId, friendName, lastTimeContacted }) => (
        <ListItem key={friendId} role={undefined} dense button>
          <ListItemText primary={friendName} secondary={convertTimestampToHumanTime(lastTimeContacted)}/>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
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
  loadFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
